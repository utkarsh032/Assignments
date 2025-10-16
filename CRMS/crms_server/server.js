import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'

const PORT = process.env.PORT
const app = express()

// Application-Level Middleware
app.use(express.json())
app.use(cors())

// Base Route
app.get('/', (req, res) => {
  res.send({ message: 'Candidate Referral System API is running ...' })
})

// Server Connection
app.listen(PORT, () => {
  console.log(`Server Started successfully on PORT : ${PORT}`)
})
