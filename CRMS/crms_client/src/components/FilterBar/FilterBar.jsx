import React from 'react'
import { FiSearch } from 'react-icons/fi'

export const FilterBar = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter
}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-3 w-full px-6 py-3 '>
      {/* Search Bar */}
      <div className='flex items-center gap-3 w-full  border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#0DA2E7] '>
        <FiSearch className='text-gray-500 text-lg' />
        <input
          type='text'
          placeholder='Search candidate...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className='w-full bg-transparent outline-none text-gray-700 placeholder-gray-400'
        />
      </div>

      {/* Filter Dropdown */}
      <select
        value={statusFilter}
        onChange={e => setStatusFilter(e.target.value)}
        className='w-full sm:w-1/4 border border-gray-300 rounded-lg px-3 py-2  text-gray-700 focus:ring-2 focus:ring-[#0DA2E7] outline-none transition'
      >
        <option value='All'>All Status</option>
        <option value='Pending'>Pending</option>
        <option value='Hired'>Hired</option>
        <option value='Reviewed'>Reviewed</option>
      </select>
    </div>
  )
}
