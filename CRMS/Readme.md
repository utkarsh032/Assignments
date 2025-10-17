# 🧭 RefTrack – Candidate Referral Tracking System

<div align="center">

![RefTrack Logo](https://img.shields.io/badge/RefTrack-Referral%20System-blue?style=for-the-badge)

**A modern, full-stack web application to streamline employee referrals and candidate management.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-success?style=flat-square)](https://reftrack-candidates.onrender.com/)
[![API Status](https://img.shields.io/badge/API-Online-brightgreen?style=flat-square)](https://reftrack-api.onrender.com)

[Features](#-features) • [Demo](#-live-demo) • [Tech Stack](#-tech-stack) • [Installation](#-installation-and-setup) • [API Reference](#-api-reference)

</div>

---

## 📋 Overview

RefTrack simplifies the employee referral process by providing an intuitive platform where users can easily refer candidates.

### ✨ Why RefTrack?

- **Effortless Referrals**: Clean, user-friendly interface for submitting candidate referrals
- **Real-time Tracking**: Monitor referral status from submission to hire
- **Centralized Management**: All referrals in one place for easy oversight
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

---

## 🚀 Live Demo

| Service                     | URL                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------- |
| 🌐 **Frontend Application** | [https://reftrack-candidates.onrender.com/](https://reftrack-candidates.onrender.com/) |
| ⚡ **Backend API**          | [https://reftrack-api.onrender.com](https://reftrack-api.onrender.com)                 |

> **Note**: The backend is hosted on Render's free tier and may take 30-60 seconds to wake up on first request.

---

## 🎯 Features

### 👥 Candidate Referral System

- ✅ Elegant and intuitive referral form with real-time validation
- ✅ Smart phone number validation (10-digit numeric format)
- ✅ Resume upload support (PDF, DOC, DOCX formats)
- ✅ Instant feedback with toast notifications using `react-toastify`
- ✅ Form validation to ensure data quality

### 🧾 Candidate Management Dashboard

- ✅ View all referred candidates in a comprehensive list
- ✅ Update candidate status through the referral pipeline:
  - 🟡 **Pending** → Initial submission
  - 🔵 **Under Review** → Being evaluated
  - ✅ **Hired** → Successfully hired
- ✅ Filter and search capabilities
- ✅ Delete candidate entries when needed

### 🎨 User Experience

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Smooth animations and transitions
- ✅ Loading states and error handling
- ✅ Mobile-first approach

---

## 🧱 Tech Stack

### 🖥️ Frontend

| Technology                                                                                                | Purpose       |
| --------------------------------------------------------------------------------------------------------- | ------------- |
| ![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)                      | UI Library    |
| ![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)                      | Build Tool    |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)     | Styling       |
| ![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=flat-square&logo=react-router) | Routing       |
| ![React Icons](https://img.shields.io/badge/React_Icons-Latest-E91E63?style=flat-square)                  | Icon Library  |
| ![React Toastify](https://img.shields.io/badge/React_Toastify-9.x-FF6B6B?style=flat-square)               | Notifications |

### ⚙️ Backend

| Technology                                                                                 | Purpose             |
| ------------------------------------------------------------------------------------------ | ------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js) | Runtime Environment |
| ![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express) | Web Framework       |
| ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat-square&logo=mongodb) | Database            |
| ![Mongoose](https://img.shields.io/badge/Mongoose-7.x-880000?style=flat-square)            | ODM                 |
| ![Multer](https://img.shields.io/badge/Multer-1.x-FF6B6B?style=flat-square)                | File Uploads        |

### ☁️ Deployment

- **Frontend**: Render (Static Hosting)
- **Backend**: Render (Web Service)
- **Database**: MongoDB Atlas

---

## 🔌 API Reference

### Endpoints

#### **Create Candidate Referral**

```http
POST /api/candidates
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "position": "Senior Developer",
  "resume": "file (multipart/form-data)"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Candidate referred successfully",
  "data": { ... }
}
```

---

#### **Get All Candidates**

```http
GET /api/candidates
```

**Response:**

```json
{
  "success": true,
  "count": 10,
  "data": [ ... ]
}
```

---

#### **Update Candidate Status**

```http
PUT /api/candidates/:id/status
```

**Request Body:**

```json
{
  "status": "Hired"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Status updated successfully",
  "data": { ... }
}
```

---

#### **Delete Candidate**

```http
DELETE /api/candidates/:id
```

**Response:**

```json
{
  "success": true,
  "message": "Candidate deleted successfully"
}
```

---

## 🛠️ Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- Git

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/reftrack.git
cd reftrack
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

**Configure Environment Variables**

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

**Run Backend Server**

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

✅ Backend will start on `http://localhost:3000`

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

**Configure Environment Variables** (if needed)

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

**Run Frontend Application**

```bash
npm run dev
```

✅ Frontend will start on `http://localhost:5173`

---

## 🧑‍💻 Developer

<div align="center">

**Utkarsh Raz**

Passionate Full-Stack Developer | AI Integration Specialist | Creative Problem Solver

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat-square&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/yourprofile)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF6B6B?style=flat-square&logo=google-chrome)](https://yourportfolio.com)

</div>

---

<div align="center">

**Made with ❤️ by Utkarsh Raz**

⭐ Star this repository if you find it helpful!

</div>
