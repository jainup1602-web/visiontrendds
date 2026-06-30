// API Configuration
const API_CONFIG = {
    baseURL: typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.apiURL : 'http://localhost:5000/api',
    timeout: 30000  // 30 seconds
};

// In-memory cache - avoids repeat API calls within same session
const _cache = {
    products: null,
    categories: null,
    productDetail: {}  // keyed by productId
};

let _saleSettings = null;
// Fetch with timeout helper
async function fetchWithTimeout(url, timeoutMs = API_CONFIG.timeout) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timer);
        return response;
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

// Wake up Render backend - waits until warm before resolving
// Simple backend check - fire and forget, don't block product loading
let _backendReady = true; // Always proceed immediately on Vercel
let _backendReadyPromise = Promise.resolve();

function pingBackend() {
    return _backendReadyPromise;
}

// Warm up in background (non-blocking)
(function() {
    const base = typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.apiURL : null;
    if (base) fetch(base + '/health', { method: 'GET', cache: 'no-store' }).catch(() => {});
})();

// API Helper Functions
const API = {
    async getSaleSettings() {
        if (_saleSettings !== null) return _saleSettings;
        try {
            const response = await fetchWithTimeout(`${API_CONFIG.baseURL}/settings/sale?_t=${new Date().getTime()}`, 5000);
            if (response.ok) {
                _saleSettings = await response.json();
                window.currentSaleSettings = _saleSettings; // Expose for UI
            } else {
                _saleSettings = { active: false };
            }
        } catch (e) {
            _saleSettings = { active: false };
        }
        return _saleSettings;
    },

    // Get all products
    async getProducts(filters = {}) {
        try {
            await pingBackend();

            let url = `${API_CONFIG.baseURL}/products`;
            const params = new URLSearchParams();
            
            if (filters.category) params.append('category', filters.category);
            if (filters.subcategory) params.append('subcategory', filters.subcategory);
            if (filters.page) params.append('page', filters.page);
            if (filters.limit) params.append('limit', filters.limit);
            
            if (params.toString()) url += '?' + params.toString();

            // Cache only for unfiltered unpaginated requests
            if (!filters.category && !filters.subcategory && !filters.page && _cache.products &&
                _cache.products.length > 0 && _cache.products[0].images && _cache.products[0].images.length > 0) {
                return _cache.products;
            }

            const response = await fetchWithTimeout(url, 60000);
            if (!response.ok) throw new Error('Failed to fetch products');
            
            const data = await response.json();

            // Handle paginated response {products, total, page, totalPages}
            if (data && data.products) {
                return {
                    ...data,
                    products: this.transformProducts(data.products)
                };
            }

            // Plain array response
            const transformed = this.transformProducts(data);
            if (!filters.category && !filters.subcategory && !filters.page) {
                _cache.products = transformed;
            }
            return transformed;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    // Get single product - fetches full data including image
    async getProduct(productId) {
        try {
            // Check detail cache first
            if (_cache.productDetail[productId]) {
                return _cache.productDetail[productId];
            }

            await pingBackend();
            const response = await fetchWithTimeout(`${API_CONFIG.baseURL}/products/${productId}`, 60000);
            if (!response.ok) throw new Error('Product not found');
            
            const product = await response.json();
            const transformed = this.transformProduct(product);
            _cache.productDetail[productId] = transformed;
            return transformed;
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    },

    // Get categories - no cache so order changes reflect immediately
    async getCategories() {
        try {
            const response = await fetchWithTimeout(`${API_CONFIG.baseURL}/categories`, 60000);
            if (!response.ok) throw new Error('Failed to fetch categories');
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    },
    // Transform product from API format to Frontend format
    transformProduct(product) {
        // Get the correct image URL
        let imageURL = 'product/color_logo.png';
        if (product.images && product.images.length > 0 && product.images[0]) {
            imageURL = this.getImageURL(product.images[0]);
        }
        
        // Ensure we never return undefined
        if (!imageURL || imageURL === 'undefined') {
            imageURL = 'product/color_logo.png';
        }

        // Safely parse colors - can be array, JSON string, or null
        let colorsArray = [];
        if (product.colors) {
            if (Array.isArray(product.colors)) {
                colorsArray = product.colors;
            } else if (typeof product.colors === 'string') {
                try {
                    const parsed = JSON.parse(product.colors);
                    colorsArray = Array.isArray(parsed) ? parsed : [];
                } catch (e) {
                    colorsArray = product.colors.split(',').map(c => c.trim()).filter(c => c);
                }
            }
        }

        // Sale Logic
        let displayPrice = product.price;
        let displayOriginal = product.originalPrice || product.price;
        
        let badgeText = '';
        if (product.discount) {
            // Check if it's purely a number, if so add % OFF, otherwise use as is
            if (!isNaN(product.discount) && product.discount !== '') {
                badgeText = `${product.discount}% OFF`;
            } else {
                badgeText = product.discount;
            }
        }

        return {
            id: product.productId,
            title: product.name,
            description: product.description,
            image: imageURL,
            images: product.images ? product.images.map(img => this.getImageURL(img)).filter(img => img && img !== 'undefined') : [],
            fallbackImage: 'product/color_logo.png',
            price: `₹${displayPrice}`,
            originalPrice: displayOriginal !== displayPrice ? `₹${displayOriginal}` : '',
            badge: badgeText,
            badgeType: 'sale',
            sizes: product.sizes || [],
            colors: colorsArray,
            inStock: product.inStock,
            category: product.category,
            subcategory: product.subcategory,
            gender: product.gender,
            ageRange: product.ageRange,
            agePricing: product.agePricing,
            outOfStockSizes: product.outOfStockSizes || [],
            featured: product.featured,
            whatsappMessage: `Hi! I'm interested in the ${product.name}.`
        };
    },

    transformProducts(products) {
        return products.map(p => this.transformProduct(p));
    },

    // Get image URL
    getImageURL(imagePath) {
        if (!imagePath) return 'product/color_logo.png';
        
        // If it's Base64 data URL, return as is
        if (imagePath.startsWith('data:')) {
            return imagePath;
        }
        
        // If it's an uploaded image (starts with /uploads) - old format
        if (imagePath.startsWith('/uploads')) {
            return `${APP_CONFIG.backendURL}${imagePath}`;
        }
        
        // Otherwise it's a local image path
        return imagePath;
    },

    // Get products by category (for compatibility with old code)
    async getProductsByCategory(category, subcategory = null) {
        const filters = { category };
        if (subcategory) filters.subcategory = subcategory;
        return await this.getProducts(filters);
    }
};

// For backward compatibility - create PRODUCTS_DATA structure
let PRODUCTS_DATA = null;

// Initialize products data
async function initializeProductsData() {
    try {
        const products = await API.getProducts();
        const categories = await API.getCategories();
        
        // Group products by category and subcategory
        PRODUCTS_DATA = {};
        
        products.forEach(product => {
            if (!PRODUCTS_DATA[product.category]) {
                PRODUCTS_DATA[product.category] = {};
            }
            
            if (!PRODUCTS_DATA[product.category][product.subcategory]) {
                PRODUCTS_DATA[product.category][product.subcategory] = [];
            }
            
            PRODUCTS_DATA[product.category][product.subcategory].push(product);
        });
        return PRODUCTS_DATA;
    } catch (error) {
        console.error('Error initializing products:', error);
        return {};
    }
}

// WhatsApp configuration
const PRODUCTS_CONFIG = {
    whatsappNumber: typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.whatsappNumber : '919829639639',
    fallbackImage: typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.fallbackImage : 'product/color_logo.png',
    imageLoadTimeout: typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.imageLoadTimeout : 5000
};


// Product utilities for backward compatibility
const productUtils = {
    // Get all products
    getAllProducts() {
        if (!PRODUCTS_DATA) return [];
        
        const products = [];
        Object.keys(PRODUCTS_DATA).forEach(category => {
            Object.keys(PRODUCTS_DATA[category]).forEach(subcategory => {
                products.push(...PRODUCTS_DATA[category][subcategory]);
            });
        });
        return products;
    },

    // Get products by category
    getProductsByCategory(category) {
        if (!PRODUCTS_DATA || !PRODUCTS_DATA[category]) return [];
        
        const products = [];
        Object.keys(PRODUCTS_DATA[category]).forEach(subcategory => {
            products.push(...PRODUCTS_DATA[category][subcategory]);
        });
        return products;
    },

    // Get products by subcategory
    getProductsBySubcategory(category, subcategory) {
        if (!PRODUCTS_DATA || !PRODUCTS_DATA[category] || !PRODUCTS_DATA[category][subcategory]) {
            return [];
        }
        return PRODUCTS_DATA[category][subcategory];
    },

    // Search products
    searchProducts(query) {
        const allProducts = this.getAllProducts();
        const searchTerm = query.toLowerCase();
        
        return allProducts.filter(product => {
            return product.title.toLowerCase().includes(searchTerm) ||
                   product.description.toLowerCase().includes(searchTerm) ||
                   product.category.toLowerCase().includes(searchTerm) ||
                   product.subcategory.toLowerCase().includes(searchTerm);
        });
    },

    // Get product by ID
    getProductById(productId) {
        const allProducts = this.getAllProducts();
        return allProducts.find(p => p.id === productId);
    },

    // Generate WhatsApp URL
    generateWhatsAppURL(product) {
        if (!product) return `https://wa.me/${PRODUCTS_CONFIG.whatsappNumber}`;
        
        let message = `Hi! I'm interested in the following product:\n\n`;
        message += `*Product:* ${product.title || product.name || 'Product'}\n`;
        
        if (product.id) {
            message += `*Product ID:* ${product.id}\n`;
        }
        
        if (product.price) {
            message += `*Price:* ${product.price}\n`;
        }
        
        if (product.originalPrice && product.originalPrice !== product.price) {
            message += `*Original Price:* ${product.originalPrice}\n`;
        }
        
        if (product.selectedAge || product.selectedSize || product.selectedColor) {
            message += `\n*My Selection:*\n`;
            if (product.selectedAge) message += `Age: ${product.selectedAge} years\n`;
            if (product.selectedSize) message += `Size: ${product.selectedSize}\n`;
            if (product.selectedColor) message += `Color: ${product.selectedColor}\n`;
        } else if (product.sizes && product.sizes.length > 0) {
            message += `*Available Sizes:* ${product.sizes.join(', ')}\n`;
        }
        
        if (product.category) {
            message += `*Category:* ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}\n`;
        }
        
        if (product.description) {
            message += `\n*Description:* ${product.description}\n`;
        }
        
        // Add product page link
        const baseURL = typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.baseURL : window.location.origin;
        if (product.id) {
            message += `\n*Product Link:* ${baseURL}/product-details.html?id=${product.id}\n`;
        }
        
        message += `\nPlease share more details about this product.`;
        
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${PRODUCTS_CONFIG.whatsappNumber}?text=${encodedMessage}`;
    },

    // Format price
    formatPrice(price) {
        if (typeof price === 'string') return price;
        return `₹${price}`;
    }
};
    