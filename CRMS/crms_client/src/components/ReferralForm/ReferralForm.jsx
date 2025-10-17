import React, { useState } from 'react'
import { RiUserAddLine } from 'react-icons/ri'
import axios from 'axios'

export const ReferralForm = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    status: '',
    resume: null
  })

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    payload.append('jobTitle', formData.jobTitle)
    payload.append('status', formData.status)
    if (formData.resume) payload.append('resume', formData.resume)

    try {
      const response = await axios.post(`${API_BASE_URL}`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('Submitted:', response.data)
    } catch (error) {
      console.error('Error submitting referral:', error)
      alert('Failed to submit referral')
    }
  }

  return (
    <div className='flex flex-col justify-center mx-auto mt-10 px-6 py-6 border border-gray-200 rounded-2xl shadow-sm bg-white w-full max-w-lg'>
      {/* Header */}
      <div className='mb-6'>
        <div className='flex items-center gap-3 text-xl sm:text-2xl font-semibold text-gray-800'>
          <div className='bg-[#0DA2E7] p-2 rounded-lg shadow-md flex items-center justify-center'>
            <RiUserAddLine className='text-white text-2xl' />
          </div>
          <p className='tracking-wide'>Submit a Referral</p>
        </div>
        <p className='text-gray-500 text-sm mt-1'>
          Help us find great talent by referring qualified candidates.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Full Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Utkarsh Raj'
            value={formData.name}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#0DA2E7]'
            required
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            placeholder='utkarsh@example.com'
            value={formData.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#0DA2E7]'
            required
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Phone Number
          </label>
          <input
            type='tel'
            inputMode='numeric'
            name='phone'
            placeholder='9876543210'
            value={formData.phone}
            onChange={e => {
              const value = e.target.value
              if (/^\d{0,10}$/.test(value)) {
                setFormData(prev => ({ ...prev, phone: value }))
              }
            }}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#0DA2E7]'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Job Title
          </label>
          <input
            type='text'
            name='jobTitle'
            placeholder='Software Engineer'
            value={formData.jobTitle}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#0DA2E7]'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>Status</label>
          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#0DA2E7]'
          >
            <option value=''>Select Status</option>
            <option value='Pending'>Pending</option>
            <option value='Hired'>Hired</option>
            <option value='Reviewed'>Reviewed</option>
          </select>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Resume (Optional)
          </label>
          <input
            type='file'
            name='resume'
            accept='.pdf'
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-lg px-3 py-2 bg-white file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-[#0DA2E7] file:text-white hover:file:bg-blue-600 cursor-pointer'
          />
        </div>

        <button
          type='submit'
          className='mt-4 bg-[#0DA2E7] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200'
        >
          Submit Referral
        </button>
      </form>
    </div>
  )
}
