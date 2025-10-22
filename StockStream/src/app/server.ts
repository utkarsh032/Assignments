import express from 'express';

const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

// Basic route to check server status
app.get('/', (req, res) => {
  res.send('Stock Stream Server is running')
})

export default app
