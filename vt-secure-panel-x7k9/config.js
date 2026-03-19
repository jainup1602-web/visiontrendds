// Clerk Configuration
// IMPORTANT: Add this file to .gitignore to keep your keys secure!

const CLERK_CONFIG = {
    publishableKey: 'pk_test_YWR2YW5jZWQtaW1wYWxhLTkwLmNsZXJrLmFjY291bnRzLmRldiQ',
    frontendApi: 'advanced-impala-90.clerk.accounts.dev'
};

// Export for use in other files
window.CLERK_CONFIG = CLERK_CONFIG;
