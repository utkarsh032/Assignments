import app from './app/server'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`StockStream Server is running on port ${PORT}`)
})
