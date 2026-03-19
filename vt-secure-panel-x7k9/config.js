// Clerk Configuration
// IMPORTANT: Add this file to .gitignore to keep your keys secure!

const CLERK_CONFIG = {
    publishableKey: 'pk_test_YWR2YW5jZWQtaW1wYWxhLTkwLmNsZXJrLmFjY291bnRzLmRldiQ',
    frontendApi: 'advanced-impala-90.clerk.accounts.dev'
};

// Export for use in other files
window.CLERK_CONFIG = CLERK_CONFIG;

// ============================================
// DEPLOYMENT CONFIG - Sirf yahan change karo
// ============================================
const BACKEND_URL = 'http://localhost:5000';
// Production pe yahan apna Render URL dalo:
// const BACKEND_URL = 'https://your-app.onrender.com';
// ============================================

const API_URL = `${BACKEND_URL}/api`;
