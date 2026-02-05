# 🧠 TaskMind - My First Full-Stack Application
> **A milestone project:** My first React frontend, first Spring Boot backend, first PostgreSQL database, first REST API, first deployed application.

## 🌟 The Journey
This project represents my journey into full-stack development. Every line of code here represents a "first":
- ✅ **First React + TypeScript application**
- ✅ **First Spring Boot REST API**  
- ✅ **First PostgreSQL database integration**
- ✅ **First JPA/Hibernate ORM implementation**
- ✅ **First API deployment (Vercel)**
- ✅ **First complete CRUD operations**
- ✅ **First professional project structure**

## 🚀 Live Applications
| Component | URL | Status |
|-----------|-----|--------|
| **Frontend (React)** | https://taskmind-4xjxm4ssj-geoffreys-projects-adff859c.vercel.app | ✅ Live |
| **Backend API (Spring Boot)** | http://localhost:8080 | 🏠 Local |
| **GitHub Repository** | https://github.com/yourusername/taskmind | 📦 Source |

## 🏗️ Architecture┌─────────────────┐ HTTP/REST ┌─────────────────┐ JDBC ┌─────────────────┐
│ React Frontend │ ◄───────────────► │ Spring Boot API │ ◄────────────► │ PostgreSQL DB │
│ (TypeScript) │ JSON API │ (Java 17) │ JPA/Hib. │ 16.11 │
│ Vercel Hosted │ │ Local/Cloud │ │ Local/Cloud │
└─────────────────┘ └─────────────────┘ └─────────────────┘

## 📚 What I Learned Building This

### Frontend Skills
- React component architecture
- TypeScript type safety
- Tailwind CSS for styling
- Vite build tool
- Vercel deployment

### Backend Skills  
- Spring Boot auto-configuration
- REST controller design
- JPA/Hibernate ORM mapping
- PostgreSQL database design
- Maven dependency management
- UUID primary keys
- Enum persistence

### Full-Stack Concepts
- CORS configuration
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- JSON request/response handling
- Database migrations
- Environment configuration
- Git workflow for full-stack

## 🛠️ Tech Stack Deep Dive

### Frontend (Modern React Stack)React 18 ── TypeScript ── Tailwind CSS ── Vite ── Vercel
│ │ │ │ │
Components Type Safety Utility CSS Fast Build Hosting
### Backend (Enterprise Java Stack)Spring Boot ── JPA/Hibernate ── PostgreSQL ── Maven ── Tomcat
│ │ │ │ │
REST API ORM Layer Database Build Tool Server

## 🗂️ Project Structure
taskmind/
├── frontend/ # React + TypeScript application
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── pages/ # Page components
│ │ └── App.tsx # Main application
│ ├── package.json # Dependencies
│ └── vite.config.ts # Build configuration
│
├── backend/ # Spring Boot application
│ ├── src/main/java/com/taskmind/
│ │ ├── controller/ # REST controllers
│ │ ├── model/ # JPA entities
│ │ ├── repository/ # Data access layer
│ │ └── TaskmindApiApplication.java
│ ├── src/main/resources/
│ │ └── application.properties
│ └── pom.xml # Maven dependencies
│
└── README.md # This documentation

## 📡 API Documentation

### Health & Information
```http
GET /ping
Response: "pong"

GET /api/health
Response: {"status": "healthy", "service": "TaskMind API"}

GET /api/info  
Response: Complete API documentation
# Create - POST
POST /api/v1/tasks
Body: {"title": "Task title", "description": "Task details", "priority": "HIGH"}

# Read All - GET  
GET /api/v1/tasks
Response: Array of tasks

# Read One - GET
GET /api/v1/tasks/{uuid}
Response: Single task

# Update - PUT
PUT /api/v1/tasks/{uuid}
Body: {"title": "Updated title", "priority": "URGENT"}

# Delete - DELETE
DELETE /api/v1/tasks/{uuid}

# Complete - PATCH
PATCH /api/v1/tasks/{uuid}/complete
CREATE TABLE tasks (
    id UUID PRIMARY KEY,                -- UUID for security
    title VARCHAR(255) NOT NULL,        -- Task title
    description TEXT,                   -- Detailed description  
    status VARCHAR(50) NOT NULL,        -- PENDING/IN_PROGRESS/COMPLETED/ARCHIVED
    priority VARCHAR(20) NOT NULL,      -- LOW/MEDIUM/HIGH/URGENT
    due_date TIMESTAMP,                 -- Optional due date
    completed_at TIMESTAMP,             -- When task was completed
    created_at TIMESTAMP NOT NULL,      -- Auto-generated
    updated_at TIMESTAMP NOT NULL,      -- Auto-updated
    user_id VARCHAR(255) NOT NULL       -- User association
);# Install PostgreSQL (Ubuntu/Debian)
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql -c "CREATE DATABASE taskmind_db;"
sudo -u postgres psql -c "CREATE USER taskmind WITH PASSWORD 'devpass123';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE taskmind_db TO taskmind;"
cd backend

# Configure database (edit application.properties if needed)
# Default: localhost:5432/taskmind_db, user: taskmind, password: devpass123

# Run the application
./mvnw spring-boot:run
# Server starts at: http://localhost:8080
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend runs at: http://localhost:5173
# Quick test with curl
curl http://localhost:8080/api/health

# Create a task
curl -X POST http://localhost:8080/api/v1/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "My first API task", "priority": "HIGH"}'

# List all tasks
curl http://localhost:8080/api/v1/tasks
🧭 Development Journey Timeline

    Day 1: React frontend with drag-and-drop UI → Deployed to Vercel

    Day 2: Spring Boot backend with PostgreSQL → Full CRUD API

    Day 3: Connecting frontend to backend (in progress)

    Future: Authentication, AI features, deployment, monitoring

📖 Lessons & Challenges
Key Learnings:

    Spring Boot auto-configuration is powerful but needs proper setup

    PostgreSQL with JPA requires correct dependencies

    UUID handling in URLs needs proper Spring conversion

    CORS must be configured for frontend-backend communication

    Component scanning affects controller registration

Challenges Overcome:

    Multiple Spring Boot main class conflicts

    JPA dependency issues

    Database connection configurations

    Git structure in monorepo setup

    First-time deployment processes

🎯 Future Roadmap

    Connect React frontend to Spring Boot API

    Add JWT authentication

    Implement AI task categorization

    Add real-time updates

    Dockerize application

    Deploy backend to cloud (AWS/Render)

    Add unit tests

    Implement CI/CD pipeline

🙏 Acknowledgments

This project was built as a learning exercise with guidance from AI assistants. Every error fixed and every feature implemented represents a step forward in my full-stack development journey.

Built with passion, persistence, and a lot of Googling.
This README serves as a time capsule of where I began my software development career.
