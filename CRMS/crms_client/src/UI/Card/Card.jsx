import React from 'react'
import { FiUser } from 'react-icons/fi'
import { BsSuitcaseLg } from 'react-icons/bs'

export const Card = ({ name, email, status, jobTitle }) => {
  // status color
  const statusColors = {
    Pending: 'bg-yellow-500 ',
    Hired: 'bg-green-500 ',
    Reviewed: 'bg-sky-500 '
  }

  const statusStyle = statusColors[status] || statusColors.Default

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
        <span
          className={` px-3 py-1 text-sm text-white font-medium  rounded-full ${statusStyle}`}
        >
          {status}
        </span>
      </div>

      {/* Job Info */}
      <div className='flex items-center gap-2 text-gray-700 text-sm'>
        <BsSuitcaseLg className='text-gray-500 text-base' />
        <span>{jobTitle}</span>
      </div>
    </div>
  )
}
