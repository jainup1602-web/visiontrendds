// Clerk Authentication Helper
const AUTH = {
    // Initialize Clerk with config
    async initClerk() {
        if (!window.CLERK_CONFIG) {
            console.error('Clerk config not loaded. Make sure config.js is included before auth.js');
            return false;
        }

        // Load Clerk dynamically with config
        if (!window.Clerk) {
            const script = document.createElement('script');
            script.src = `https://${CLERK_CONFIG.frontendApi}/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.setAttribute('data-clerk-publishable-key', CLERK_CONFIG.publishableKey);
            document.head.appendChild(script);

            // Wait for Clerk to load
            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }

        return true;
    },

    // Check if user is authenticated
    async checkAuth() {
        await this.initClerk();

        if (!window.Clerk) {
            console.error('Clerk not loaded');
            return false;
        }

        await Clerk.load();

        if (!Clerk.user) {
            // Not authenticated, redirect to secure login
            window.location.href = 'vt-admin-x9k2p7m4q8.html';
            return false;
        }

        return true;
    },

    // Get current user
    getUser() {
        return Clerk.user;
    },

    // Sign out
    async signOut() {
        await Clerk.signOut();
        window.location.href = 'vt-admin-x9k2p7m4q8.html';
    },

    // Initialize auth on page load
    async init() {
        const isAuthenticated = await this.checkAuth();

        if (isAuthenticated) {
            this.setupUserUI();
        }
    },

    // Setup user UI (show user name, logout button)
    setupUserUI() {
        const user = this.getUser();

        // Add user info to header if element exists
        const userInfoEl = document.getElementById('user-info');
        if (userInfoEl && user) {
            const userName = user.firstName || user.username || user.emailAddresses[0].emailAddress.split('@')[0];
            const userEmail = user.emailAddresses[0].emailAddress;
            const userImage = user.imageUrl || user.profileImageUrl || '';

            userInfoEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 12px; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 10px;">
                    ${userImage ? `<img src="${userImage}" alt="Profile" style="width: 40px; height: 40px; border-radius: 50%; border: 2px solid white;">` : `<div style="width: 40px; height: 40px; border-radius: 50%; background: #D4AF37; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">${userName.charAt(0).toUpperCase()}</div>`}
                    <div style="flex: 1; min-width: 0;">
                        <div style="color: white; font-weight: 600; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${userName}</div>
                        <div style="color: rgba(255,255,255,0.7); font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${userEmail}</div>
                    </div>
                    <button onclick="AUTH.signOut()" style="background: rgba(255,255,255,0.2); color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; transition: all 0.3s ease; font-size: 12px;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                </div>
            `;
        }
    }
};

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    AUTH.init();
});
