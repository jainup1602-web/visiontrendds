// Configuration for the application
const APP_CONFIG = {
    // Change this to your production domain when deploying
    // For localhost: 'http://localhost:5500'
    // For production: 'https://yourdomain.com'
    baseURL: window.location.origin,
    
    // API Configuration
    apiURL: 'http://localhost:5000/api',
    
    // WhatsApp Configuration
    whatsappNumber: '919829639639',
    
    // Image Configuration
    fallbackImage: 'product/color_logo.png',
    imageLoadTimeout: 5000,
    
    // For production, uncomment and set your domain:
    // baseURL: 'https://visiontrennds.com',
    // apiURL: 'https://api.visiontrennds.com/api',
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
