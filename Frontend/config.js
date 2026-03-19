// ============================================
// DEPLOYMENT CONFIG - Sirf yahan change karo
// ============================================
const BACKEND_URL = 'http://localhost:5000';
// Production pe yahan apna Render URL dalo:
// const BACKEND_URL = 'https://your-app.onrender.com';
// ============================================

const APP_CONFIG = {
    baseURL: window.location.origin,
    apiURL: `${BACKEND_URL}/api`,
    backendURL: BACKEND_URL,
    whatsappNumber: '919829639639',
    fallbackImage: 'product/color_logo.png',
    imageLoadTimeout: 5000,
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
