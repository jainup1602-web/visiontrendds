// Admin Panel Mobile Menu Handler
(function() {
    'use strict';
    
    // Create mobile menu toggle button
    function createMobileMenuToggle() {
        const toggle = document.createElement('button');
        toggle.className = 'menu-toggle';
        toggle.id = 'mobile-menu-toggle';
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        toggle.setAttribute('aria-label', 'Toggle Menu');
        document.body.appendChild(toggle);
        return toggle;
    }
    
    // Create sidebar overlay
    function createSidebarOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.id = 'sidebar-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }
    
    // Initialize mobile menu
    function initMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;
        
        const toggle = createMobileMenuToggle();
        const overlay = createSidebarOverlay();
        
        // Toggle sidebar
        function toggleSidebar() {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Change icon
            const icon = toggle.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        }
        
        // Close sidebar
        function closeSidebar() {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            const icon = toggle.querySelector('i');
            icon.className = 'fas fa-bars';
        }
        
        // Event listeners
        toggle.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', closeSidebar);
        
        // Close sidebar when clicking on menu links (mobile only)
        const menuLinks = sidebar.querySelectorAll('.sidebar-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeSidebar();
                }
            });
        });
        
        // Close sidebar on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768) {
                    closeSidebar();
                }
            }, 250);
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();
