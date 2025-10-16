import express from 'express'
import {
  addCandidate,
  getAllCandidates,
  removeCandidate,
  updateCandidateStatus
} from '../controllers/candidateController.js'
import multer from 'multer'

const candidateRoute = express.Router()

// Resume Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true)
    else cb(new Error('Only PDF files allowed'), false)
  }
})

candidateRoute.post('/', upload.single('resume'), addCandidate)
candidateRoute.get('/', getAllCandidates)
candidateRoute.put('/:id/status', updateCandidateStatus)
candidateRoute.delete('/:id', removeCandidate)

export default candidateRoute
