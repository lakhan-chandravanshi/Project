# Project

# Project
# 🧾 Node RBAC Task Management App

This is a Node.js application for managing tasks with **Role-Based Access Control (RBAC)**. Users can create, view, and manage tasks based on their role (User, Admin, etc.).

---

## 🚀 Features

- JWT-based Authentication
- RBAC for Task creation
- Sequelize ORM with PostgreSQL
- API-ready backend
- Secure routes
- Error-handling middleware

---

## 🧑‍💻 Tech Stack

- Node.js
- Express
- PostgreSQL
- Sequelize
- JWT (Authentication)
- Dotenv (Environment management)

---


## 🛠️ Setup Instructions

1. **Clone the project**

```bash
git clone https://github.com/yourusername/node-rbac-task-app.git
cd node-rbac-task-app


2 Install dependencies

npm install


3 Create a .env file
PORT=5000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
JWT_SECRET=your_secret_key


4 npm run dev

✅ Register User
Endpoint:
POST /register

{
  "name": "Lakhan",
  "email": "lakhan@example.com",
  "password": "123456",
  "role": "admin"   // or "user"
}


📮 API Endpoints
🔐 Auth Routes (Example)
Login User


POST /login
{
  "email": "user@example.com",
  "password": "password"
}


✅ Create User
Endpoint:
POST /users

POST /api/tasks

| Key    | Value                                         | Type |
| ------ | --------------------------------------------- | ---- |
| name   | Admin User                                    | Text |
| email  | [admin@example.com](mailto:admin@example.com) | Text |
| gender | Female                                        | Text |
| role   | Admin                                         | Text |
| image  | (Choose a small image)                        | File |


{
  "message": "User created successfully",
  "user": {
    "id": 3,
    "name": "Admin User",
    "email": "admin@example.com",
    "gender": "Female",
    "role": "Admin",
    "image": "uploads/1629738923210_profile.png"
  }
}


{
  "name": "Task 1",
  "description": "Complete the report",
  "types": ["daily", "office"],
  "startDate": "2025-07-26T09:00:00Z",
  "endDate": "2025-07-26T17:00:00Z"
}


GET /api/tasks
