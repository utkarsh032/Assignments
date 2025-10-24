# Employee Referral System - Project Plan

## Frontend (React-Vite)

3 main parts:

### 1. Dashboard Page

- Show all referred candidates (from backend)
- Each card shows:
  - Candidate Name
  - Job Title
  - Status (Pending / Reviewed / Hired)
- Include a search bar to filter by job title or status
- Add a dropdown/button to change candidate status

### 2. Referral Form Page

A form to add a new candidate with fields:

- Name
- Email
- Phone Number
- Job Title
- Resume (PDF only, optional)

On submit → send POST request to backend and refresh the dashboard

### 3. State Management

Use React Hooks (useState, useEffect) or Redux for managing candidates and API calls

## ⚙️ Backend (Node.js + Express)

APIs:

| Method            | Endpoint                 | Description             |
| ----------------- | ------------------------ | ----------------------- |
| POST              | `/candidates`            | Add new candidate       |
| GET               | `/candidates`            | Get all candidates      |
| PUT               | `/candidates/:id/status` | Update candidate status |
| DELETE (optional) | `/candidates/:id`        | Delete a candidate      |

### Database (Prefer MongoDB)

Each candidate has:

```javascript
{
  name: String,
  email: String,
  phone: String,
  jobTitle: String,
  status: String, // Pending, Reviewed, or Hired
  resumeUrl: String // optional
}
```

### Validation

- Email & phone format should be correct
- Resume upload only in .pdf format

### Error Handling

Return proper error messages for invalid inputs or server errors

## ⭐ Bonus (Optional but Impressive)

- **Authentication** → JWT-based login
- **Deployment** → Host frontend (Vercel/Netlify) + backend (Render/Heroku)
- **Resume Upload** → Use cloud (AWS S3, Firebase, etc.)
- **Metrics Dashboard** → Show total candidates and counts by status
