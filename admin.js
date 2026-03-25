// Configuration
const BACKEND_URL = 'https://portafolio-backend-uq8p.onrender.com';

// Check if already logged in
window.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        showAdminPanel();
        loadMessages();
    }
});

// Toast notification
function showToast(title, message) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 5000);
}

// Login form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const loginBtnText = document.getElementById('loginBtnText');
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = loginBtnText.textContent;
    
    submitBtn.disabled = true;
    loginBtnText.textContent = 'Verificando...';
    
    const credentials = {
        email: document.getElementById('adminEmail').value,
        password: document.getElementById('adminPassword').value
    };
    
    try {
        const response = await fetch(`${BACKEND_URL}/api/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            localStorage.setItem('adminToken', data.token);
            showToast('Éxito', data.message);
            showAdminPanel();
            loadMessages();
        } else {
            throw new Error(data.detail || 'Credenciales incorrectas');
        }
    } catch (error) {
        showToast('Error', error.message);
    } finally {
        submitBtn.disabled = false;
        loginBtnText.textContent = originalText;
    }
});

// Show admin panel
function showAdminPanel() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('adminPanel').classList.remove('hidden');
}

// Logout
function logout() {
    localStorage.removeItem('adminToken');
    document.getElementById('adminPanel').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('loginForm').reset();
}

// Load messages
async function loadMessages() {
    const container = document.getElementById('messagesContainer');
    const token = localStorage.getItem('adminToken');
    
    if (!token) {
        logout();
        return;
    }
    
    try {
        const response = await fetch(`${BACKEND_URL}/api/admin/messages`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.status === 401) {
            showToast('Sesión expirada', 'Por favor inicia sesión nuevamente');
            logout();
            return;
        }
        
        const messages = await response.json();
        
        // Update total count
        document.getElementById('totalMessages').textContent = messages.length;
        
        // Display messages
        if (messages.length === 0) {
            container.innerHTML = `
                <div class="no-messages">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <p>No hay mensajes todavía</p>
                </div>
            `;
        } else {
            container.innerHTML = messages.map(msg => `
                <div class="message-card">
                    <div class="message-header">
                        <div class="message-user">
                            <h3 class="message-name">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                ${msg.name}
                            </h3>
                            <div class="message-meta">
                                <span class="message-email">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    ${msg.email}
                                </span>
                                <span class="message-date">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    ${formatDate(msg.timestamp)}
                                </span>
                            </div>
                        </div>
                        <span class="message-id">${msg.id.slice(0, 8)}</span>
                    </div>
                    <div class="message-body">${msg.message}</div>
                </div>
            `).join('');
        }
    } catch (error) {
        showToast('Error', 'No se pudieron cargar los mensajes');
        container.innerHTML = '<div class="loading-spinner">Error al cargar mensajes</div>';
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
