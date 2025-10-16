import mongoose from 'mongoose'

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
    phone: { type: String, required: true, match: /^[0-9]{10}$/ },
    jobTitle: { type: String, required: true },
    status: {
      type: String,
      default: 'Pending',
      enum: ['Pending', 'Reviewed', 'Hired']
    },
    resumeUrl: { type: String }
  },
  { timeStamps: true }
)

const Candidate = mongoose.model('Candidate', candidateSchema)
export default Candidate
