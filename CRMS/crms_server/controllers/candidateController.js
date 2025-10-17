import Candidate from '../schema/candidateSchema.js'

// Add Candidate
export const addCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, status } = req.body
    if (!name || !email || !phone || !jobTitle) {
      return res.status(400).json({ message: 'All Fields are required' })
    }

    const BASE_URL = `${req.protocol}://${req.get('host')}`

    const resumeUrl = req.file
      ? `${BASE_URL}/uploads/${req.file.filename}`
      : null

    const candidate = await Candidate.create({
      name,
      email,
      phone,
      jobTitle,
      resumeUrl,
      status
    })
    res.status(201).json({ message: 'Candidate Added Successfully', candidate })
  } catch (error) {
    console.error('Error in addCandidate:', error)
    res.status(500).json({ message: error.message })
  }
}

// Get All Candidates
export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find()
    res.status(200).json({ message: 'Fetched All Candidates', candidates })
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
      return res
        .status(404)
        .json({ message: `No Candidate Found with this id: ${id}` })
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
