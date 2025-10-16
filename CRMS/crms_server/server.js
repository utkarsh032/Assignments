import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import multer from 'multer'

import { dbConnection } from './config/dbConnection.js'
import candidateRoute from './routes/candidateRoutes.js'

const PORT = process.env.PORT
const app = express()

// Application-Level Middleware
app.use(express.json())
app.use(cors('*'))
app.use('/uploads', express.static('uploads'))

// Base Route
app.get('/', (req, res) => {
  res.send({ message: 'Candidate Referral System API is running ...' })
})

// API Routes
app.use('/api/candidates', candidateRoute)

// Server Connection
app.listen(PORT, () => {
  console.log(`Server Started successfully on PORT : ${PORT}`)

  // Database Connection
  dbConnection()
})
