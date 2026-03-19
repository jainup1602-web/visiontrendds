// API Configuration
const API_CONFIG = {
    baseURL: typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.apiURL : 'http://localhost:5000/api',
    timeout: 10000
};

// API Helper Functions
const API = {
    // Get all products
    async getProducts(filters = {}) {
        try {
            let url = `${API_CONFIG.baseURL}/products`;
            const params = new URLSearchParams();
            
            if (filters.category) params.append('category', filters.category);
            if (filters.subcategory) params.append('subcategory', filters.subcategory);
            
            if (params.toString()) {
                url += '?' + params.toString();
            }
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch products');
            
            const products = await response.json();
            return this.transformProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    // Get single product
    async getProduct(productId) {
        try {
            const response = await fetch(`${API_CONFIG.baseURL}/products/${productId}`);
            if (!response.ok) throw new Error('Product not found');
            
            const product = await response.json();
            return this.transformProduct(product);
        } catch (error) {
            console.error('Error fetching product:', error);
            return null;
        }
    },

    // Get categories
    async getCategories() {
        try {
            const response = await fetch(`${API_CONFIG.baseURL}/categories`);
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
        
        return {
            id: product.productId,
            title: product.name,
            description: product.description,
            image: imageURL,
            images: product.images ? product.images.map(img => this.getImageURL(img)).filter(img => img && img !== 'undefined') : [],
            fallbackImage: 'product/color_logo.png',
            price: `₹${product.price}`,
            originalPrice: product.originalPrice ? `₹${product.originalPrice}` : '',
            badge: product.discount ? `${product.discount}% OFF` : '',
            badgeType: 'sale',
            sizes: product.sizes || [],
            inStock: product.inStock,
            category: product.category,
            subcategory: product.subcategory,
            gender: product.gender,
            ageRange: product.ageRange,
            agePricing: product.agePricing,
            featured: product.featured,
            whatsappMessage: `Hi! I'm interested in the ${product.name}.`
        };
    },

    // Transform multiple products
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
            return `http://localhost:5000${imagePath}`;
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
        
        console.log('Products loaded from API:', products.length);
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
        
        // Create detailed message with product information
        let message = `Hi! I'm interested in the following product:\n\n`;
        message += `📦 *Product:* ${product.title || product.name || 'Product'}\n`;
        
        if (product.price) {
            message += `💰 *Price:* ${product.price}\n`;
        }
        
        if (product.originalPrice && product.originalPrice !== product.price) {
            message += `🏷️ *Original Price:* ${product.originalPrice}\n`;
        }
        
        // Add selected options if available
        if (product.selectedAge || product.selectedSize || product.selectedColor) {
            message += `\n✅ *My Selection:*\n`;
            if (product.selectedAge) {
                message += `👶 Age: ${product.selectedAge} years\n`;
            }
            if (product.selectedSize) {
                message += `📏 Size: ${product.selectedSize}\n`;
            }
            if (product.selectedColor) {
                message += `🎨 Color: ${product.selectedColor}\n`;
            }
        } else if (product.sizes && product.sizes.length > 0) {
            message += `📏 *Available Sizes:* ${product.sizes.join(', ')}\n`;
        }
        
        if (product.category) {
            message += `🏷️ *Category:* ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}\n`;
        }
        
        if (product.description) {
            message += `\n📝 *Description:* ${product.description}\n`;
        }
        
        // Add image URL if available (not Base64)
        if (product.image && !product.image.startsWith('data:')) {
            const baseURL = typeof APP_CONFIG !== 'undefined' ? APP_CONFIG.baseURL : window.location.origin;
            const imageUrl = product.image.startsWith('http') 
                ? product.image 
                : `${baseURL}/${product.image}`;
            message += `\n🖼️ *Product Image:* ${imageUrl}\n`;
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
