export const fetchCandidates = async () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const response = await fetch(`${API_BASE_URL}`)
  const data = await response.json()
  console.log(data.candidate)
  return data.candidate
}
