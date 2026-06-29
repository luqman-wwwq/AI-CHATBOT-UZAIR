/**
 * Utility Functions
 */
const API_BASE_URL = 'http://localhost:5000/api';
async function apiCall(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = localStorage.getItem('token');
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        }
    };
    const finalOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    };
    try {
        const response = await fetch(url, finalOptions);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'API Error');
        }
        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
function formatDate(date) {
    return new Date(date).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'error' ? '#EF4444' : type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
function getToken() {
    return localStorage.getItem('token');
}
function setToken(token) {
    localStorage.setItem('token', token);
}
function removeToken() {
    localStorage.removeItem('token');
}
function isAuthenticated() {
    return !!getToken();
}
function checkAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
    }
}
function redirectIfAuthenticated() {
    if (isAuthenticated()) {
        window.location.href = 'chat.html';
    }
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Copied to clipboard!', 'success');
    } catch (error) {
        console.error('Copy failed:', error);
        showNotification('Failed to copy', 'error');
    }
}
