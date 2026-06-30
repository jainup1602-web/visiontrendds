/* ========== Admin Popup System ========== */
/* Replaces browser alert() and confirm() with styled popups */

(function() {
    // Inject popup HTML into every page
    const popupHTML = `
    <div class="admin-popup-overlay" id="adminPopupOverlay">
        <div class="admin-popup-box">
            <div class="admin-popup-icon" id="adminPopupIcon">
                <i class="fas fa-check"></i>
            </div>
            <h3 id="adminPopupTitle">Success!</h3>
            <p id="adminPopupMessage">Operation completed.</p>
            <div class="admin-popup-buttons" id="adminPopupButtons">
                <button class="admin-popup-btn admin-popup-btn-primary" id="adminPopupOk">OK</button>
            </div>
        </div>
    </div>`;

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .admin-popup-overlay {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 99999;
            align-items: center;
            justify-content: center;
        }
        .admin-popup-overlay.show {
            display: flex;
            animation: adminPopupFadeIn 0.2s ease;
        }
        @keyframes adminPopupFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .admin-popup-box {
            background: white;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            animation: adminPopupSlideUp 0.3s ease;
        }
        @keyframes adminPopupSlideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .admin-popup-icon {
            width: 60px; height: 60px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 15px;
            font-size: 24px; color: white;
        }
        .admin-popup-icon.success { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); }
        .admin-popup-icon.error { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); }
        .admin-popup-icon.warning { background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%); color: #333; }
        .admin-popup-icon.info { background: linear-gradient(135deg, #17a2b8 0%, #138496 100%); }
        .admin-popup-box h3 {
            margin: 0 0 8px; font-size: 20px; color: #333;
        }
        .admin-popup-box p {
            margin: 0 0 20px; color: #666; font-size: 14px; line-height: 1.5;
        }
        .admin-popup-buttons {
            display: flex; gap: 10px; justify-content: center;
        }
        .admin-popup-btn {
            padding: 10px 28px; border-radius: 8px; border: none;
            font-weight: 600; font-size: 14px; cursor: pointer;
            transition: all 0.2s;
        }
        .admin-popup-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        .admin-popup-btn-primary {
            background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
            color: white;
        }
        .admin-popup-btn-secondary {
            background: #f1f1f1; color: #333;
        }
        .admin-popup-btn-danger {
            background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
            color: white;
        }
    `;
    document.head.appendChild(style);

    // Inject HTML when DOM is ready
    function injectPopup() {
        if (!document.getElementById('adminPopupOverlay')) {
            document.body.insertAdjacentHTML('beforeend', popupHTML);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectPopup);
    } else {
        injectPopup();
    }

    // ========== showPopup (replaces alert) ==========
    window.showPopup = function(message, type = 'success') {
        return new Promise(resolve => {
            injectPopup();
            const overlay = document.getElementById('adminPopupOverlay');
            const icon = document.getElementById('adminPopupIcon');
            const title = document.getElementById('adminPopupTitle');
            const msg = document.getElementById('adminPopupMessage');
            const buttons = document.getElementById('adminPopupButtons');

            icon.className = 'admin-popup-icon ' + type;
            
            if (type === 'success') {
                icon.innerHTML = '<i class="fas fa-check"></i>';
                title.textContent = 'Success!';
                title.style.color = '#28a745';
            } else if (type === 'error') {
                icon.innerHTML = '<i class="fas fa-times"></i>';
                title.textContent = 'Error!';
                title.style.color = '#dc3545';
            } else if (type === 'warning') {
                icon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
                title.textContent = 'Warning!';
                title.style.color = '#e0a800';
            } else if (type === 'info') {
                icon.innerHTML = '<i class="fas fa-info-circle"></i>';
                title.textContent = 'Info';
                title.style.color = '#17a2b8';
            }

            msg.textContent = message;
            buttons.innerHTML = '<button class="admin-popup-btn admin-popup-btn-primary" id="adminPopupOk">OK</button>';
            overlay.classList.add('show');

            document.getElementById('adminPopupOk').onclick = () => {
                overlay.classList.remove('show');
                resolve(true);
            };
        });
    };

    // ========== showConfirm (replaces confirm) ==========
    window.showConfirm = function(message, confirmText = 'Yes', cancelText = 'Cancel') {
        return new Promise(resolve => {
            injectPopup();
            const overlay = document.getElementById('adminPopupOverlay');
            const icon = document.getElementById('adminPopupIcon');
            const title = document.getElementById('adminPopupTitle');
            const msg = document.getElementById('adminPopupMessage');
            const buttons = document.getElementById('adminPopupButtons');

            icon.className = 'admin-popup-icon warning';
            icon.innerHTML = '<i class="fas fa-question-circle"></i>';
            title.textContent = 'Confirm';
            title.style.color = '#e0a800';
            msg.textContent = message;

            buttons.innerHTML = `
                <button class="admin-popup-btn admin-popup-btn-secondary" id="adminPopupCancel">${cancelText}</button>
                <button class="admin-popup-btn admin-popup-btn-danger" id="adminPopupConfirm">${confirmText}</button>
            `;
            overlay.classList.add('show');

            document.getElementById('adminPopupConfirm').onclick = () => {
                overlay.classList.remove('show');
                resolve(true);
            };
            document.getElementById('adminPopupCancel').onclick = () => {
                overlay.classList.remove('show');
                resolve(false);
            };
        });
    };
})();
