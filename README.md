# 🤖 AI with Uzair - Complete AI Chatbot Web Application

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-brightgreen)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue)](https://expressjs.com/)

A complete, production-ready AI chatbot web application with user authentication, chat history, and a beautiful glassmorphism UI.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API Docs](#-api-endpoints) • [Deployment](#-deployment)

</div>

---

## ✨ Features

### 🎨 UI/UX
- ✅ Beautiful responsive landing page with glassmorphism design
- ✅ Smooth animations and transitions
- ✅ Dark/Light mode with persistent storage
- ✅ Blue, Purple, and Black gradient theme
- ✅ Mobile-first responsive design
- ✅ SEO optimized pages

### 🔐 Authentication
- ✅ User registration with validation
- ✅ Secure login with JWT tokens
- ✅ Password hashing with bcryptjs
- ✅ Protected API routes
- ✅ Token refresh functionality
- ✅ Account deactivation option

### 💬 Chat Features
- ✅ ChatGPT-like chat interface
- ✅ Real-time message sending
- ✅ Typing animation effects
- ✅ Message copy functionality
- ✅ Edit messages
- ✅ Delete messages
- ✅ Chat history management
- ✅ Multiple independent chats

### 📝 Advanced Features
- ✅ Markdown support with live preview
- ✅ Code syntax highlighting
- ✅ Message timestamps
- ✅ User profiles
- ✅ Settings management
- ✅ Theme preferences
- ✅ Chat search functionality
- ✅ Message export

---

## 📚 Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Glassmorphism, gradients, animations
- **JavaScript (ES6+)** - Vanilla JS, no frameworks

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Additional Libraries
- **marked** - Markdown parsing
- **highlight.js** - Code syntax highlighting
- **CORS** - Cross-origin requests
- **Helmet** - Security headers
- **Validator** - Input validation

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB** (local or cloud)
- **Git**

### Step 1: Clone Repository

```bash
git clone https://github.com/luqman-wwwq/AI-Chatbot-Uzair.git
cd AI-Chatbot-Uzair
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` file with your configuration.

### Step 4: Start MongoDB

**Local MongoDB:**
```bash
mongod
```

### Step 5: Start Development Server

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Step 6: Open in Browser

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Chat
- `GET /api/chats` - Get all chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:chatId` - Get specific chat
- `PUT /api/chats/:chatId` - Update chat
- `DELETE /api/chats/:chatId` - Delete chat

### Messages
- `POST /api/messages` - Send message
- `GET /api/messages/:chatId` - Get messages
- `PUT /api/messages/:messageId` - Edit message
- `DELETE /api/messages/:messageId` - Delete message

### User
- `GET /api/user/profile` - Get profile
- `PUT /api/user/profile` - Update profile
- `PUT /api/user/password` - Change password
- `DELETE /api/user/account` - Delete account

---

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 👨‍💻 Author

Created by **Uzair**

<div align="center">

Made with ❤️ for the community

</div>
