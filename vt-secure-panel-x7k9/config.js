// Clerk Configuration
// IMPORTANT: Add this file to .gitignore to keep your keys secure!

const CLERK_CONFIG = {
    publishableKey: 'pk_test_YWR2YW5jZWQtaW1wYWxhLTkwLmNsZXJrLmFjY291bnRzLmRldiQ',
    frontendApi: 'advanced-impala-90.clerk.accounts.dev'
};

window.CLERK_CONFIG = CLERK_CONFIG;

// ============================================
// DEPLOYMENT CONFIG - Sirf yahan change karo
// ============================================
const BACKEND_URL = 'https://api-visiontrendds.onrender.com';
// Local ke liye: const BACKEND_URL = 'http://localhost:5000';

const API_URL = `${BACKEND_URL}/api`;

// Frontend images base path
// Local ke liye: const FRONTEND_BASE = '..';
const FRONTEND_BASE = 'https://visiontrennds.com';
// ============================================
