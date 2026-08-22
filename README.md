# Ecommerce Store

A full-stack e-commerce application with a React frontend and a Node.js/Express backend.

## Tech Stack

### Frontend

- React
- Redux
- React Router
- Axios
- SCSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- PM2

---

# Project Structure

```text
ecommerce-store/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── model/
│   ├── routes/
│   ├── app.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# Manual Setup and Deployment

This project was manually set up and run locally using Node.js, npm, PM2, and MongoDB.

## Prerequisites

Make sure the following are installed:

- Git
- Node.js
- npm
- PM2
- Access to MongoDB

Check the installations:

```bash
git --version
node --version
npm --version
pm2 --version
```

---

# 1. Clone the Repository

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd ecommerce-store
```

---

# 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

The dependencies are installed based on:

```text
backend/package.json
```

---

# 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```env
DB_CONNECTION=<your-mongodb-connection-string>
TOKEN_SECRET=<your-jwt-secret>
```

These environment variables are used by the backend for:

- Connecting to MongoDB
- JWT authentication

> **Important:** Do not commit the `.env` file or actual credentials to GitHub.

---

# 4. Start the Backend Using PM2

Start the backend application:

```bash
pm2 start app.js --name backend
```

Check whether the backend process is running:

```bash
pm2 status
```

View backend logs:

```bash
pm2 logs backend
```

Restart the backend after making backend changes:

```bash
pm2 restart backend
```

---

# 5. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd ecommerce-store/frontend
```

Install the frontend dependencies:

```bash
npm install
```

The dependencies are installed based on:

```text
frontend/package.json
```

---

# 6. Start the Frontend

Start the React application:

```bash
npm start
```

This starts the React application locally.

Open the URL displayed in the terminal to access the application.

---

# Application Flow

The application works as follows:

```text
User
  ↓
React Frontend
  ↓
Axios API Request
  ↓
Node.js / Express Backend
  ↓
MongoDB
  ↓
API Response
  ↓
Redux Store
  ↓
React Components
  ↓
Products Displayed
```

---

# Backend Process Flow

The backend application is managed using PM2.

```text
PM2
 ↓
backend
 ↓
app.js
 ↓
Node.js / Express
 ↓
MongoDB
```

PM2 helps manage the backend process and provides commands to check status, logs, restart, stop, and delete the process.

---

# Useful PM2 Commands

Check all PM2 processes:

```bash
pm2 status
```

View backend logs:

```bash
pm2 logs backend
```

Restart the backend:

```bash
pm2 restart backend
```


---

# Complete Manual Setup Flow

```text
GitHub Repository
        ↓
git clone
        ↓
Local Machine
        ↓
Backend Setup
        ↓
npm install
        ↓
Configure .env
        ↓
Start Backend with PM2
        ↓
Frontend Setup
        ↓
npm install
        ↓
npm start
        ↓
Access Application
```

---

# Updating the Application

After making changes locally, check the modified and newly created files:

```bash
git status
```

Add the changes:

```bash
git add .
```

Commit the changes:

```bash
git commit -m "Update application"
```

Push the changes to GitHub:

```bash
git push origin main
```

---

# Complete Git Workflow

```text
GitHub Repository
        ↓
git clone
        ↓
Local Repository
        ↓
Make Changes
        ↓
git status
        ↓
git add .
        ↓
git commit
        ↓
git push
        ↓
GitHub Repository
```

---

# Quick Setup Commands

## Backend

```bash
git clone <repository-url>

cd ecommerce-store/backend

npm install

pm2 start app.js --name backend

pm2 status

pm2 logs backend
```

## Frontend

Open another terminal:

```bash
cd ecommerce-store/frontend

npm install

npm start
```

---

# Quick Update Commands

After making changes:

```bash
git status

git add .

git commit -m "Update application"

git push origin main
```

If backend files were changed:

```bash
pm2 restart backend
```

---

# Important Notes

> Make sure MongoDB connection details are correctly configured in the `.env` file.

> Do not commit `.env` files or secrets to GitHub.

> The backend is run and managed using PM2.

> The frontend is started using `npm start`.

> After backend changes, restart the PM2 process using:

```bash
pm2 restart backend
```

---

# Summary

```text
Clone Repository
       ↓
Install Backend Dependencies
       ↓
Configure Environment Variables
       ↓
Start Backend with PM2
       ↓
Install Frontend Dependencies
       ↓
Start Frontend with npm start
       ↓
Access Application
```
