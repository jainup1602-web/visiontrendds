// Clerk Configuration Sample
// 
// SETUP INSTRUCTIONS:
// 1. Copy this file and rename it to "config.js"
// 2. Go to https://clerk.com and create an account
// 3. Create a new application
// 4. Get your Publishable Key from the Clerk Dashboard
// 5. Replace the values below with your actual Clerk credentials
// 6. Save the file
//
// IMPORTANT: 
// - config.js is in .gitignore and will NOT be uploaded to GitHub
// - Keep your keys secure and never share them publicly
// - For production, use environment variables

const CLERK_CONFIG = {
    // Your Clerk Publishable Key (starts with pk_test_ or pk_live_)
    publishableKey: 'pk_test_YOUR_KEY_HERE',
    
    // Your Clerk Frontend API domain (e.g., your-app-name.clerk.accounts.dev)
    frontendApi: 'your-app-name.clerk.accounts.dev'
};

// Export for use in other files
window.CLERK_CONFIG = CLERK_CONFIG;
