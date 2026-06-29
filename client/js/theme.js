/**
 * Theme Switcher
 */
const THEME_KEY = 'ai-chatbot-theme';
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    setTheme(savedTheme);
}
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}
function setTheme(theme) {
    const isDark = theme === 'dark';
    const icon = isDark ? '☀️' : '🌙';
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = icon;
    }
    localStorage.setItem(THEME_KEY, theme);
}
document.addEventListener('DOMContentLoaded', initTheme);
