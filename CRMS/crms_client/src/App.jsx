import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Navbar } from './components/Navbar'
import { ReferralForm } from './components/ReferralForm/ReferralForm'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/referral-form' element={<ReferralForm />} />
      </Routes>
    </>
  )
}

export default App
