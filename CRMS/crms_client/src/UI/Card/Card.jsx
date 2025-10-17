import React, { useState } from 'react'
import { FiUser, FiFileText } from 'react-icons/fi'
import { BsSuitcaseLg } from 'react-icons/bs'
import axios from 'axios'

export const Card = ({
  _id,
  name,
  email,
  status: initialStatus,
  jobTitle,
  resumeUrl
}) => {
  const [status, setStatus] = useState(initialStatus)
  const [loading, setLoading] = useState(false)

  // status colors
  const statusColors = {
    Pending: 'bg-yellow-500',
    Hired: 'bg-green-500',
    Reviewed: 'bg-sky-500'
  }

  const handleStatusChange = async e => {
    const newStatus = e.target.value
    setStatus(newStatus)
    setLoading(true)
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/${_id}/status`, {
        status: newStatus
      })
    } catch (error) {
      console.error('Failed to update status:', error)
    }
    setLoading(false)
  }

  return (
    <div
      className='bg-white border border-gray-200 rounded-xl px-6 py-4 
                 shadow-sm hover:shadow-md transition-shadow duration-300 
                 flex flex-col gap-3 cursor-pointer'
    >
      {/* Top Section */}
      <div className='flex justify-between items-start'>
        {/* User Info */}
        <div className='flex gap-3 items-center'>
          <div className='p-3 bg-gray-100 rounded-full'>
            <FiUser className='text-gray-500 text-xl' />
          </div>
          <div>
            <p className='font-semibold text-gray-800 text-lg'>{name}</p>
            <p className='text-gray-500 text-sm'>{email}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div
          className={`px-3 py-1 text-sm text-white font-medium rounded-full ${statusColors[status]}`}
        >
          <select
            value={status}
            onChange={handleStatusChange}
            disabled={loading}
            className={`appearance-none bg-black outline-none cursor-pointer  ${statusColors[status]}`}
          >
            <option value='Pending'>Pending</option>
            <option value='Reviewed'>Reviewed</option>
            <option value='Hired'>Hired</option>
          </select>
        </div>
      </div>

      <div className='flex justify-between'>
        {/* Job Info */}
        <div className='flex items-center gap-2 text-gray-700 text-sm'>
          <BsSuitcaseLg className='text-gray-500 text-base' />
          <span>{jobTitle}</span>
        </div>

        {/* Resume */}
        {resumeUrl && (
          <div className='flex items-center gap-2  text-blue-600 hover:underline text-sm'>
            <FiFileText />
            <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
              View Resume
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
