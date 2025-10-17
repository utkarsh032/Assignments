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
  phone,
  resumeUrl
}) => {
  const [status, setStatus] = useState(initialStatus)
  const [loading, setLoading] = useState(false)

  // Status color mapping
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
      className='bg-white border border-gray-200 rounded-xl p-4 sm:p-5
                 shadow-sm hover:shadow-md transition-all duration-300
                 flex flex-col gap-4 cursor-pointer w-full'
    >
      {/* Top Section */}
      <div className='flex sm:flex-row justify-between gap-3 sm:gap-0'>
        {/* User Info */}
        <div className='flex items-start gap-3'>
          <div className='p-3 bg-gray-100 rounded-full flex-shrink-0'>
            <FiUser className='text-gray-500 text-2xl' />
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-800 text-lg break-words'>
              {name}
            </p>
            <p className='text-gray-500 text-sm break-words'>{email}</p>
            <p className='text-gray-500 text-sm'>{phone}</p>
          </div>
        </div>

        {/* Status Selector */}
        <div className='self-start '>
          <select
            value={status}
            onChange={handleStatusChange}
            disabled={loading}
            className={`appearance-none px-3 py-1 text-sm text-white font-medium rounded-full outline-none cursor-pointer ${statusColors[status]} `}
          >
            <option value='Pending'>Pending</option>
            <option value='Reviewed'>Reviewed</option>
            <option value='Hired'>Hired</option>
          </select>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 text-sm'>
        {/* Job Info */}
        <div className='flex items-center gap-2 text-gray-700'>
          <BsSuitcaseLg className='text-gray-500 text-base' />
          <span className='break-words'>{jobTitle}</span>
        </div>

        {/* Resume Link */}
        {resumeUrl && (
          <div className='flex items-center gap-2 text-blue-600 hover:underline'>
            <FiFileText className='text-base' />
            <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
              View Resume
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
