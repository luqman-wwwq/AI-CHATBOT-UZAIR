/**
 * Authentication Module
 */
redirectIfAuthenticated();
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', handleRegister);
}
async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await apiCall('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        setToken(response.token);
        showNotification('Login successful!', 'success');
        setTimeout(() => {
            window.location.href = 'chat.html';
        }, 500);
    } catch (error) {
        showNotification(error.message || 'Login failed', 'error');
    }
}
async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        const response = await apiCall('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });
        setToken(response.token);
        showNotification('Account created successfully!', 'success');
        setTimeout(() => {
            window.location.href = 'chat.html';
        }, 500);
    } catch (error) {
        showNotification(error.message || 'Registration failed', 'error');
    }
}
