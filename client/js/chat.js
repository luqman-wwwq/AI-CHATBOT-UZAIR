/**
 * Chat Module
 */
checkAuth();
let currentChatId = null;
let currentMessages = [];
document.addEventListener('DOMContentLoaded', () => {
    loadChatHistory();
    setupEventListeners();
});
function setupEventListeners() {
    const messageInput = document.getElementById('messageInput');
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}
async function loadChatHistory() {
    try {
        const response = await apiCall('/chat/history');
        const chatsList = document.getElementById('chatsList');
        if (response.chats.length === 0) {
            chatsList.innerHTML = '<div class="empty-state">No chats yet</div>';
            return;
        }
        chatsList.innerHTML = '';
        response.chats.forEach(chat => {
            const chatItem = document.createElement('div');
            chatItem.className = 'chat-item';
            chatItem.innerHTML = `
                <div class="chat-item-title">${chat.title}</div>
                <div class="chat-item-time">${formatDate(chat.updatedAt)}</div>
            `;
            chatItem.onclick = () => loadChat(chat._id);
            chatsList.appendChild(chatItem);
        });
    } catch (error) {
        console.error('Failed to load chat history:', error);
    }
}
async function createNewChat() {
    try {
        const response = await apiCall('/chat/new', {
            method: 'POST',
            body: JSON.stringify({})
        });
        currentChatId = response.chat._id;
        currentMessages = [];
        document.getElementById('chatTitle').textContent = 'New Chat';
        document.getElementById('messagesContainer').innerHTML = '';
        loadChatHistory();
    } catch (error) {
        showNotification('Failed to create chat', 'error');
    }
}
async function loadChat(chatId) {
    try {
        const response = await apiCall(`/chat/${chatId}`);
        currentChatId = chatId;
        currentMessages = response.messages || [];
        document.getElementById('chatTitle').textContent = response.chat.title;
        displayMessages();
        document.querySelectorAll('.chat-item').forEach(item => {
            item.classList.remove('active');
        });
        event.target.closest('.chat-item').classList.add('active');
    } catch (error) {
        showNotification('Failed to load chat', 'error');
    }
}
function displayMessages() {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = '';
    currentMessages.forEach(msg => {
        const messageEl = document.createElement('div');
        messageEl.className = `message ${msg.role}`;
        messageEl.innerHTML = `
            <div>
                <div class="message-bubble">${escapeHtml(msg.content)}</div>
                <div class="message-time">${formatDate(msg.createdAt)}</div>
                ${msg.role === 'user' ? `
                    <div class="message-actions">
                        <button class="message-btn" onclick="editMessage('${msg._id}')">✏️</button>
                        <button class="message-btn" onclick="copyToClipboard('${msg.content.replace(/'/g, "\\'")}')">📋</button>
                        <button class="message-btn" onclick="deleteMessage('${msg._id}')">🗑️</button>
                    </div>
                ` : ''}
            </div>
        `;
        container.appendChild(messageEl);
    });
    container.scrollTop = container.scrollHeight;
}
async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (!message) return;
    try {
        messageInput.value = '';
        messageInput.style.height = 'auto';
        const response = await apiCall('/messages/send', {
            method: 'POST',
            body: JSON.stringify({
                message,
                chatId: currentChatId
            })
        });
        currentChatId = response.chat._id;
        currentMessages.push(response.userMessage);
        currentMessages.push(response.assistantMessage);
        displayMessages();
        loadChatHistory();
    } catch (error) {
        showNotification('Failed to send message', 'error');
    }
}
async function editMessage(messageId) {
    const newContent = prompt('Edit your message:');
    if (!newContent) return;
    try {
        await apiCall(`/messages/${messageId}`, {
            method: 'PUT',
            body: JSON.stringify({ content: newContent })
        });
        const messageIndex = currentMessages.findIndex(m => m._id === messageId);
        if (messageIndex !== -1) {
            currentMessages[messageIndex].content = newContent;
            currentMessages[messageIndex].edited = true;
            displayMessages();
        }
        showNotification('Message updated', 'success');
    } catch (error) {
        showNotification('Failed to edit message', 'error');
    }
}
async function deleteMessage(messageId) {
    if (!confirm('Delete this message?')) return;
    try {
        await apiCall(`/messages/${messageId}`, {
            method: 'DELETE'
        });
        currentMessages = currentMessages.filter(m => m._id !== messageId);
        displayMessages();
        showNotification('Message deleted', 'success');
    } catch (error) {
        showNotification('Failed to delete message', 'error');
    }
}
function navigateTo(page) {
    window.location.href = page;
}
async function logout() {
    if (!confirm('Are you sure you want to logout?')) return;
    try {
        await apiCall('/auth/logout', { method: 'POST' });
        removeToken();
        window.location.href = 'index.html';
    } catch (error) {
        removeToken();
        window.location.href = 'index.html';
    }
}
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
