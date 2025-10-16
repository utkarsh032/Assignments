import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export const dbConnection = async (req, res) => {
  try {
    const connection = await mongoose.connect(MONGODB_URI)
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
