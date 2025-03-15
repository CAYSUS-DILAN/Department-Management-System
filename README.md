# Department Management System

## Overview
The **Department Management System** is a web-based application designed to manage internal assessments, attendance tracking, and timetable scheduling for an educational institution. It provides a user-friendly interface for teachers and students to interact with assessment records and schedules efficiently. The goal is to enhance transparency, improve record-keeping, and reduce the administrative burden on faculty by digitizing these processes.

## Features
### 1. Admin Panel
- Add and manage faculty and students.
- Add subjects and assign faculty to subjects.
- Manage student attendance.
- Add and update student marks.

### 2. Faculty Panel
- View student details.
- Manage and update student attendance.
- Update student marks.

### 3. Student Panel
- View attendance records.
- View marks for internal assessments.

## Tech Stack
### Frontend
- React.js
- React-DOM
- React-Scripts
- Axios (for API communication)
- React Context API / Redux (for state management)
- CSS (for UI styling)

### Backend
- Node.js
- Express.js
- Mongoose (MongoDB ORM)
- MongoDB (Database)
- dotenv (for environment variables)
- CORS (for cross-origin requests)
- bcrypt.js (for password hashing)
- JSON Web Token (JWT) for authentication

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **MongoDB Community Server** (local or cloud-based)
- **Modern Web Browser** (Chrome, Firefox, Edge)
- **Postman** (for API testing)

### Steps to Run the Project
1. **Clone the repository:**
   ```sh
   git clone https://github.com/CAYSUS-DILAN/department-management-system.git
   cd department-management-system
   ```

2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   npm start
   ```
   - The backend will run on `http://localhost:5000`
   - Ensure MongoDB is running before starting the backend.

3. **Frontend Setup:**
   ```sh
   cd frontend
   npm install
   npm start
   ```
   - The frontend will run on `http://localhost:3000`

## Project Structure
```
/department-management-system
 ├── /frontend  # React-based UI
 ├── /backend   # Node.js, Express, and Mongoose setup
 ├── /models    # MongoDB models
 ├── /routes    # API routes
 ├── /controllers # Business logic
 ├── README.md  # Project documentation
```

## API Endpoints
### Authentication
- `POST /api/auth/signup` - Register new users
- `POST /api/auth/login` - User login

### Admin Routes
- `POST /api/admin/addFaculty` - Add faculty
- `POST /api/admin/addStudent` - Add students
- `POST /api/admin/addSubject` - Add subjects
- `PUT /api/admin/assignFaculty/:subjectId` - Assign faculty to subjects
- `PUT /api/admin/updateMarks/:studentId` - Update student marks
- `PUT /api/admin/updateAttendance/:studentId` - Update attendance

### Faculty Routes
- `GET /api/faculty/students` - View student details
- `PUT /api/faculty/updateMarks/:studentId` - Update marks
- `PUT /api/faculty/updateAttendance/:studentId` - Update attendance

### Student Routes
- `GET /api/student/attendance` - View attendance
- `GET /api/student/marks` - View marks

## Testing
- **Unit Testing:** Jest, React Testing Library
- **Integration Testing:** API endpoint testing with Postman
- **User Acceptance Testing:** End-user testing and feedback
- **Error Handling Tests:** Ensures system stability

## Deployment
- **Frontend:** Vercel/Netlify
- **Backend:** Heroku/AWS
- **Optional:** Docker for containerized deployment

## Future Enhancements
- Implement AI-based student performance analysis to provide insights.
- Add push notifications for schedule changes.
- Introduce an admin panel with more advanced control options.
- Improve UX with drag-and-drop scheduling for timetables.



---
**Author:** Caysus Dilan Rodrigues  
**GitHub:**  CAYSUS-DILAN(https://github.com/CAYSUS-DILAN)  
**Email:** caysusdilanrodrigues@gmail.com

