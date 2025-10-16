import Candidate from '../schema/candidateSchema.js'

// Add Candidate
export const addCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, status } = req.body
    if (!name || !email || !phone || !jobTitle) {
      res.status(400).json({
        message: 'All Fields are required'
      })
    }
    const candidate = await Candidate.create({
      name,
      email,
      phone,
      jobTitle,
      status
    })
    res.status(201).json({ message: 'Candidate Added Successfully', candidate })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get All Candidates
export const getAllCandidates = async (req, res) => {
  try {
    const candidate = await Candidate.find()
    res.status(200).json({ message: 'Fetched All Candidates', candidate })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update Candidate Status
export const updateCandidateStatus = async (req, res) => {
  try {
    const { id } = req.params
    const { status } = req.body

    const candidate = await Candidate.findById(id)
    if (!candidate) {
      res.status(404).json({ message: `No Candidate Found with this id: `, id })
    }
    candidate.status = status || candidate.status
    await candidate.save()
    res
      .status(200)
      .json({ message: `${candidate.name}'s status udpated`, candidate })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Remove Candidate
export const removeCandidate = async (req, res) => {
  try {
    const { id } = req.params
    const candidate = await Candidate.findByIdAndDelete(id)
    if (!candidate) {
      res.status(404).json({ message: `No Candidate Found with this id: `, id })
    }
    res.status(200).json({ message: `${candidate.name} is removed` })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
