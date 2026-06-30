// Vision Trennds - Clean JavaScript with proper error handling
'use strict';

// Configuration
const CONFIG = {
    whatsappNumber: '919829639639',
    reviewSlideInterval: 6000, // Increased from 4000 to 6000ms (6 seconds)
    animationDuration: 300,
    debounceDelay: 250
};

// State management
const state = {
    currentReviewIndex: 0,
    reviewInterval: null,
    mobileMenuOpen: false,
    isLoading: false
};

// Utility functions
const utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },

    // Safe element selector
    $(selector) {
        return document.querySelector(selector);
    },

    // Safe element selector all
    $$(selector) {
        return document.querySelectorAll(selector);
    },

    // Check if element exists
    exists(element) {
        return element !== null && element !== undefined;
    },

    // Generate WhatsApp URL with product image
    generateWhatsAppURL(message, productImage = null) {
        let fullMessage = message;
        
        if (productImage) {
            // Get the current domain and create full image URL
            const currentDomain = window.location.origin;
            const fullImageURL = `${currentDomain}/${productImage}`;
            fullMessage = `${message}\n\n📸 Product Image: ${fullImageURL}`;
        }
        
        return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    },

    // Show loading state
    showLoading(element) {
        if (this.exists(element)) {
            element.classList.add('loading');
            state.isLoading = true;
        }
    },

    // Hide loading state
    hideLoading(element) {
        if (this.exists(element)) {
            element.classList.remove('loading');
            state.isLoading = false;
        }
    },

    // Show error message
    showError(message, container) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = message;
        if (this.exists(container)) {
            container.appendChild(errorDiv);
            setTimeout(() => errorDiv.remove(), 5000);
        }
    },

    // Show success message
    showSuccess(message, container) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success';
        successDiv.textContent = message;
        if (this.exists(container)) {
            container.appendChild(successDiv);
            setTimeout(() => successDiv.remove(), 5000);
        }
    },

    // Find product ID by title (helper for featured products)
    findProductIdByTitle(title) {
        if (typeof productUtils !== 'undefined') {
            const allProducts = productUtils.getAllProducts();
            const product = allProducts.find(p => p.title === title);
            return product ? product.id : null;
        }
        return null;
    },

    // Navigate to product details
    viewProductDetails(productId) {
        window.location.href = `product-details.html?id=${productId}`;
    }
};

// Featured Products Data - Professional selection of 4 products
const featuredProducts = [
    {
        id: 'ms1',
        title: "Pure cotton Printed Half sleeves Shirt",
        description: "Premium quality pure cotton half sleeve shirt with vibrant prints",
        image: "product/shirt/cotton_shirt1.webp",
        fallbackImage: "product/color_logo.png",
        price: "₹650",
        originalPrice: "₹999",
        badge: "35% OFF",
        badgeType: "sale",
        whatsappMessage: "Hi! I'm interested in the Pure cotton Printed Half sleeves Shirt."
    },
    {
        id: 'wc1',
        title: "Block n Floral Prints Comfortable Cordset",
        description: "Long cordset with block and floral prints. Perfect for casual occasions",
        image: "product/cardset/cardser1.webp",
        fallbackImage: "product/color_logo.png",
        price: "₹1590",
        originalPrice: "₹2199",
        badge: "28% OFF",
        badgeType: "sale",
        whatsappMessage: "Hi! I'm interested in the Block n Floral Prints Comfortable Cordset."
    },
    {
        id: 'ms10',
        title: "Pure cotton Printed Half sleeves Shirt",
        description: "Smart pure cotton half sleeve shirt with modern prints",
        image: "product/shirt/blue_design.webp",
        fallbackImage: "product/color_logo.png",
        price: "₹650",
        originalPrice: "₹999",
        badge: "35% OFF",
        badgeType: "sale",
        whatsappMessage: "Hi! I'm interested in the Pure cotton Printed Half sleeves Shirt."
    },
    {
        id: 'wc5',
        title: "Block n Floral Prints Comfortable Cordset",
        description: "Classic long cordset with attractive block and floral prints",
        image: "product/cardset/cardset5.webp",
        fallbackImage: "product/color_logo.png",
        price: "₹1590",
        originalPrice: "₹2199",
        badge: "28% OFF",
        badgeType: "sale",
        whatsappMessage: "Hi! I'm interested in the Block n Floral Prints Comfortable Cordset."
    }
];

// Navigation functionality
const navigation = {
    init() {
        this.setupMobileMenu();
        this.setupActiveStates();
        this.setupSmoothScrolling();
    },

    setupMobileMenu() {
        const hamburger = utils.$('#hamburger');
        const mobileMenu = utils.$('#mobile-menu');
        const closeBtn = utils.$('#mobile-menu-close');
        const mobileNavLinks = utils.$$('.mobile-nav-link');

        if (!utils.exists(hamburger) || !utils.exists(mobileMenu)) return;

        // Open mobile menu
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            this.openMobileMenu();
        });

        // Close mobile menu
        if (utils.exists(closeBtn)) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeMobileMenu();
            });
        }

        // Close on backdrop click
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                this.closeMobileMenu();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.mobileMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Close on mobile nav link click
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    },

    openMobileMenu() {
        const hamburger = utils.$('#hamburger');
        const mobileMenu = utils.$('#mobile-menu');
        
        if (utils.exists(hamburger) && utils.exists(mobileMenu)) {
            hamburger.classList.add('active');
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            state.mobileMenuOpen = true;
        }
    },

    closeMobileMenu() {
        const hamburger = utils.$('#hamburger');
        const mobileMenu = utils.$('#mobile-menu');
        
        if (utils.exists(hamburger) && utils.exists(mobileMenu)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            state.mobileMenuOpen = false;
        }
    },

    setupActiveStates() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = utils.$$('.nav-link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    },

    setupSmoothScrolling() {
        const anchorLinks = utils.$$('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = utils.$(href);
                
                if (utils.exists(target)) {
                    const headerHeight = utils.$('header')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
};

// Featured Products functionality
const products = {
    init() {
        this.renderProducts();
        this.setupCategoryNavigation();
    },

    renderProducts() {
        const container = utils.$('#featured-products');
        if (!utils.exists(container)) return;

        utils.showLoading(container);
        
        try {
            container.innerHTML = '';
            
            featuredProducts.forEach((product, index) => {
                const productCard = this.createProductCard(product, index);
                container.appendChild(productCard);
            });
            
            utils.hideLoading(container);
        } catch (error) {
            console.error('Error rendering products:', error);
            utils.showError('Failed to load products. Please refresh the page.', container);
            utils.hideLoading(container);
        }
    },

    createProductCard(product, index) {
        const card = document.createElement('div');
        card.className = 'product-card-responsive cursor-pointer fade-in';
        card.style.animationDelay = `${index * 0.08}s`;

        // Add click event to open product details
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on WhatsApp button
            if (e.target.closest('.whatsapp-buy-btn')) {
                return;
            }
            // Use the product ID directly since it matches products.js
            utils.viewProductDetails(product.id);
        });

        const whatsappURL = utils.generateWhatsAppURL(product.whatsappMessage, product.image);

        card.innerHTML = `
            <div class="product-image-container relative overflow-hidden rounded-t-lg">
                <!-- Offer Badge -->
                <div class="product-badge absolute top-2 left-2 z-10">
                    <span class="bg-vision-red text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ${product.badge}
                    </span>
                </div>
                
                <!-- Product Image -->
                <img src="${product.image}" 
                     alt="${product.title}" 
                     class="product-image w-full object-cover hover:scale-105 transition-transform duration-300" 
                     loading="lazy" 
                     onerror="this.src='${product.fallbackImage || 'product/color_logo.png'}'; this.onerror=null;"
                     onload="this.style.opacity='1';"
                     style="opacity: 0; transition: opacity 0.3s ease;">
            </div>
            
            <!-- Card Content -->
            <div class="product-content">
                <!-- Product Title -->
                <h3 class="product-title font-serif font-semibold text-vision-dark hover:text-vision-red transition-colors duration-300">
                    ${product.title}
                </h3>
                
                <!-- Price and Buy Button -->
                <div class="product-footer flex items-center justify-between">
                    <div class="price-section flex items-center space-x-1">
                        <span class="current-price font-bold text-vision-red">${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price text-gray-500 line-through">${product.originalPrice}</span>` : ''}
                    </div>
                    <a href="${whatsappURL}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="buy-button bg-vision-red text-white font-semibold hover:bg-vision-burgundy transition-colors duration-300 flex items-center gap-1 no-underline"
                       onclick="event.stopPropagation()"
                       aria-label="Buy ${product.title}"
                       style="text-decoration: none !important; color: white !important;">
                        <i class="fab fa-whatsapp buy-icon" style="color: white !important;"></i>
                        <span class="buy-text" style="color: white !important;">Buy</span>
                    </a>
                </div>
            </div>
        `;

        return card;
    },

    setupCategoryNavigation() {
        const categoryCards = utils.$$('[data-category]');
        
        categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const category = card.dataset.category;
                
                // Add click animation
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                    window.location.href = `products.html#${category}`;
                }, 150);
            });
        });
    }
};

// Reviews slider functionality - Infinite loop (no reverse)
const reviews = {
    currentIndex: 0,
    realCount: 8,      // updated to match 8 review cards
    autoSlideInterval: null,
    isTransitioning: false,

    init() {
        setTimeout(() => {
            this.setupSlider();
        }, 500);
    },

    setupSlider() {
        const container = document.getElementById('reviews-container');
        if (!container) return;

        const originalCards = Array.from(container.querySelectorAll('.flex-shrink-0'));
        if (originalCards.length === 0) return;

        this.realCount = originalCards.length;

        // Clone cards: append clones at end AND prepend clones at start
        // This gives: [clone of last] [original cards...] [clone of first]
        const cloneEnd = originalCards[0].cloneNode(true);
        const cloneStart = originalCards[originalCards.length - 1].cloneNode(true);
        container.appendChild(cloneEnd);
        container.insertBefore(cloneStart, originalCards[0]);

        // Start at index 1 (first real card, after the prepended clone)
        this.currentIndex = 1;

        // Position without animation
        container.style.transition = 'none';
        this._applyTransform(container);

        // Dots click handlers
        const dots = document.querySelectorAll('.review-dot');
        dots.forEach((dot, index) => {
            dot.onclick = (e) => {
                e.preventDefault();
                // +1 because index 0 is the prepended clone
                this._goTo(index + 1, container);
            };
        });

        // Hover pause
        container.onmouseenter = () => this.stopAutoSlide();
        container.onmouseleave = () => this.startAutoSlide();

        // After transition ends - handle infinite jump
        container.addEventListener('transitionend', () => {
            const allCards = container.querySelectorAll('.flex-shrink-0');
            const total = allCards.length; // realCount + 2

            // If we landed on the clone at the end, jump to real first
            if (this.currentIndex >= total - 1) {
                container.style.transition = 'none';
                this.currentIndex = 1;
                this._applyTransform(container);
            }
            // If we landed on the clone at the start, jump to real last
            if (this.currentIndex <= 0) {
                container.style.transition = 'none';
                this.currentIndex = this.realCount;
                this._applyTransform(container);
            }

            this.isTransitioning = false;
            this.updateDots();
        });

        // Resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                container.style.transition = 'none';
                this._applyTransform(container);
            }, 250);
        });

        this.updateDots();
        setTimeout(() => this.startAutoSlide(), 1000);
    },

    _applyTransform(container) {
        const cards = container.querySelectorAll('.flex-shrink-0');
        if (cards.length === 0) return;
        const cardWidth = cards[0].offsetWidth;
        const gap = 24;
        const containerWidth = container.parentElement.offsetWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;
        const translateX = centerOffset - (this.currentIndex * (cardWidth + gap));
        container.style.transform = `translateX(${translateX}px)`;
    },

    _goTo(index, container) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        this.currentIndex = index;
        const cont = container || document.getElementById('reviews-container');
        cont.style.transition = 'transform 0.5s ease-in-out';
        this._applyTransform(cont);
    },

    nextSlide() {
        const container = document.getElementById('reviews-container');
        if (!container) return;
        this._goTo(this.currentIndex + 1, container);
    },

    updateDots() {
        const dots = document.querySelectorAll('.review-dot');
        // currentIndex 1..realCount maps to dot 0..realCount-1
        let dotIndex = this.currentIndex - 1;
        if (dotIndex < 0) dotIndex = this.realCount - 1;
        if (dotIndex >= this.realCount) dotIndex = 0;

        dots.forEach((dot, index) => {
            if (index === dotIndex) {
                dot.classList.add('active', 'bg-vision-red');
                dot.classList.remove('bg-gray-300');
            } else {
                dot.classList.remove('active', 'bg-vision-red');
                dot.classList.add('bg-gray-300');
            }
        });
    },

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 1500);
    },

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
};

// FAQ functionality
const faq = {
    init() {
        this.setupAccordion();
    },

    setupAccordion() {
        const questions = utils.$$('.faq-question');
        
        questions.forEach(question => {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFAQ(question);
            });

            // Keyboard support
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleFAQ(question);
                }
            });
        });
    },

    toggleFAQ(question) {
        const faqItem = question.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        utils.$$('.faq-item').forEach(item => {
            item.classList.remove('active');
            const itemAnswer = item.querySelector('.faq-answer');
            const itemIcon = item.querySelector('.faq-question i');
            const itemQuestion = item.querySelector('.faq-question');
            
            if (itemAnswer) itemAnswer.style.maxHeight = '0px';
            if (itemIcon) itemIcon.style.transform = 'rotate(0deg)';
            if (itemQuestion) itemQuestion.setAttribute('aria-expanded', 'false');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
            if (icon) icon.style.transform = 'rotate(45deg)';
            question.setAttribute('aria-expanded', 'true');
        }
    }
};

// Scroll effects
const scrollEffects = {
    init() {
        this.setupHeaderScroll();
        this.setupScrollAnimations();
    },

    setupHeaderScroll() {
        const header = utils.$('#header');
        if (!utils.exists(header)) return;

        const handleScroll = utils.throttle(() => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('bg-white/98', 'shadow-xl');
                header.classList.remove('bg-white/95', 'shadow-lg');
            } else {
                header.classList.add('bg-white/95', 'shadow-lg');
                header.classList.remove('bg-white/98', 'shadow-xl');
            }
        }, 16);

        window.addEventListener('scroll', handleScroll, { passive: true });
    },

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        if (animatedElements.length === 0) return;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Stagger animation based on sibling index
                        const siblings = entry.target.parentElement
                            ? Array.from(entry.target.parentElement.children).filter(el =>
                                el.classList.contains('fade-in') ||
                                el.classList.contains('slide-in-left') ||
                                el.classList.contains('slide-in-right') ||
                                el.classList.contains('scale-in')
                              )
                            : [];
                        const idx = siblings.indexOf(entry.target);
                        const delay = idx >= 0 ? idx * 0.1 : 0;
                        entry.target.style.transitionDelay = delay + 's';
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));
        } else {
            // Fallback for browsers without IntersectionObserver
            animatedElements.forEach(el => el.classList.add('visible'));
        }
    }
};

// Error handling
const errorHandler = {
    init() {
        // Global error handler
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            this.logError(e.error);
        });

        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            this.logError(e.reason);
        });
    },

    logError(error) {
        // In production, you might want to send errors to a logging service
        const errorInfo = {
            message: error.message || 'Unknown error',
            stack: error.stack || 'No stack trace',
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        console.error('Error logged:', errorInfo);
    }
};

// Performance monitoring
const performanceMonitor = {
    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            if ('performance' in window && 
                window.performance.getEntriesByType && 
                typeof window.performance.getEntriesByType === 'function') {
                try {
                    const perfData = window.performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                    }
                } catch (error) {
                }
            }
        });
    }
};

// Main initialization
const app = {
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    },

    start() {
        try {
            // Initialize all modules
            errorHandler.init();
            performanceMonitor.init();
            navigation.init();
            products.init();
            reviews.init();
            faq.init();
            scrollEffects.init();
        } catch (error) {
            console.error('Failed to initialize website:', error);
            errorHandler.logError(error);
        }
    }
};

// Start the application
app.init();


// Search Functionality
const searchManager = {
    init() {
        const searchInput = document.getElementById('search-input');
        const searchBtn = document.getElementById('search-btn');
        const searchResults = document.getElementById('search-results');

        if (!searchInput || !searchBtn || !searchResults) return;

        // Search on input - show dropdown suggestions
        searchInput.addEventListener('input', utils.debounce((e) => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                this.showSuggestions(query);
            } else {
                searchResults.classList.remove('active');
            }
        }, 300));

        // Search on button click - go to search results page
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query.length >= 2) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchBtn.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });

        // Handle Enter key - go to search results page
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query.length >= 2) {
                    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    },

    showSuggestions(query) {
        const searchResults = document.getElementById('search-results');
        
        if (typeof productUtils === 'undefined') {
            searchResults.innerHTML = '<div class="search-no-results">Products not loaded</div>';
            searchResults.classList.add('active');
            return;
        }

        const results = productUtils.searchProducts(query);
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">No products found</div>';
        } else {
            searchResults.innerHTML = results.slice(0, 5).map(product => `
                <div class="search-result-item" onclick="window.location.href='product-details.html?id=${product.id}'">
                    <img src="${product.image}" alt="${product.title}" class="search-result-image" onerror="this.src='${product.fallbackImage || 'product/color_logo.png'}'">
                    <div class="search-result-info">
                        <div class="search-result-title">${product.title}</div>
                        <div class="search-result-price">${product.price}</div>
                    </div>
                </div>
            `).join('') + `
                <div class="search-view-all" onclick="window.location.href='search-results.html?q=${encodeURIComponent(query)}'">
                    View all ${results.length} results <i class="fas fa-arrow-right"></i>
                </div>
            `;
        }
        
        searchResults.classList.add('active');
    }
};

// Mobile Search Manager
const mobileSearchManager = {
    init() {
        const mobileSearchInput = document.getElementById('mobile-search-input');
        const mobileSearchBtn = document.getElementById('mobile-search-btn');
        const mobileSearchResults = document.getElementById('mobile-search-results');

        if (!mobileSearchInput || !mobileSearchBtn || !mobileSearchResults) return;

        // Search on input
        mobileSearchInput.addEventListener('input', utils.debounce((e) => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                this.showSuggestions(query);
            } else {
                mobileSearchResults.classList.remove('active');
            }
        }, 300));

        // Search on button click
        mobileSearchBtn.addEventListener('click', () => {
            const query = mobileSearchInput.value.trim();
            if (query.length >= 2) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        });

        // Handle Enter key
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = mobileSearchInput.value.trim();
                if (query.length >= 2) {
                    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
                }
            }
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileSearchInput.contains(e.target) && !mobileSearchResults.contains(e.target) && !mobileSearchBtn.contains(e.target)) {
                mobileSearchResults.classList.remove('active');
            }
        });
    },

    showSuggestions(query) {
        const mobileSearchResults = document.getElementById('mobile-search-results');
        
        if (typeof productUtils === 'undefined') {
            mobileSearchResults.innerHTML = '<div class="search-no-results">Products not loaded</div>';
            mobileSearchResults.classList.add('active');
            return;
        }

        const results = productUtils.searchProducts(query);
        
        if (results.length === 0) {
            mobileSearchResults.innerHTML = '<div class="search-no-results">No products found</div>';
        } else {
            mobileSearchResults.innerHTML = results.slice(0, 5).map(product => `
                <div class="search-result-item" onclick="window.location.href='product-details.html?id=${product.id}'">
                    <img src="${product.image}" alt="${product.title}" class="search-result-image" onerror="this.src='${product.fallbackImage || 'product/white_logo.png'}'">
                    <div class="search-result-info">
                        <div class="search-result-title">${product.title}</div>
                        <div class="search-result-price">${product.price}</div>
                    </div>
                </div>
            `).join('') + `
                <div class="search-view-all" onclick="window.location.href='search-results.html?q=${encodeURIComponent(query)}'">
                    View all ${results.length} results <i class="fas fa-arrow-right"></i>
                </div>
            `;
        }
        
        mobileSearchResults.classList.add('active');
    }
};

// Initialize search managers after both are defined
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        searchManager.init();
        mobileSearchManager.init();
    });
} else {
    searchManager.init();
    mobileSearchManager.init();
}

// Global Sale Banner initialization
async function initGlobalSaleBanner() {
    if (typeof API !== 'undefined' && API.getSaleSettings) {
        const settings = await API.getSaleSettings();
        if (settings && settings.active && settings.bannerText) {
            const banner = document.createElement('div');
            banner.id = 'global-sale-banner';
            banner.style.backgroundColor = '#800000'; // Deep Red
            banner.style.color = '#fff';
            banner.style.textAlign = 'center';
            banner.style.padding = '10px';
            banner.style.fontSize = '15px';
            banner.style.fontWeight = '600';
            banner.style.letterSpacing = '1px';
            banner.style.zIndex = '9999';
            banner.style.position = 'relative';
            banner.style.textTransform = 'uppercase';
            banner.innerHTML = settings.bannerText;
            
            document.body.insertBefore(banner, document.body.firstChild);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalSaleBanner);
} else {
    initGlobalSaleBanner();
}
