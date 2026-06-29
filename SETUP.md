# Installation & Setup Guide

## Prerequisites
- Node.js v14 or higher
- npm or yarn
- MongoDB (local or Atlas cloud)
- Git

## Backend Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` file:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-chatbot-uzair
JWT_SECRET=your_super_secret_key_here
CLIENT_URL=http://localhost:3000
API_BASE_URL=http://localhost:5000/api
```

### 3. Start MongoDB
```bash
mongod
```

### 4. Run Development Server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## Frontend Setup

### 1. Start Frontend Server
In another terminal:
```bash
cd client
python -m http.server 3000
```

Or using Node:
```bash
npx http-server -p 3000
```

Open browser: `http://localhost:3000`

## Features

✅ User Authentication (JWT)
✅ Chat Management
✅ Message Operations (Create, Edit, Delete)
✅ User Profiles
✅ Dark/Light Mode
✅ Responsive Design
✅ Beautiful UI with Glassmorphism

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Chat
- `POST /api/chat/new` - Create chat
- `GET /api/chat/history` - Get chat history
- `GET /api/chat/:chatId` - Get specific chat

### Messages
- `POST /api/messages/send` - Send message
- `PUT /api/messages/:messageId` - Edit message
- `DELETE /api/messages/:messageId` - Delete message

## Deployment

### Heroku (Backend)
```bash
heroku create your-app-name
heroku config:set JWT_SECRET=your_secret
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

### Vercel (Frontend)
1. Push to GitHub
2. Connect to Vercel
3. Deploy

## Support
For issues and questions, create an issue on GitHub.
