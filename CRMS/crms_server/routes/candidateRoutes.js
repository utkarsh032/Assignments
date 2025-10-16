import express from 'express'
import {
  addCandidate,
  getAllCandidates,
  removeCandidate,
  updateCandidateStatus
} from '../controllers/candidateController.js'

const candidateRoute = express.Router()

candidateRoute.post('/', addCandidate)
candidateRoute.get('/', getAllCandidates)
candidateRoute.put('/:id/status', updateCandidateStatus)
candidateRoute.delete('/:id', removeCandidate)

export default candidateRoute
