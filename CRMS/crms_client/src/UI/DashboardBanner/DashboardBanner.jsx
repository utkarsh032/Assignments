import React from 'react'

export const DashboardBanner = () => {
  return (
    <section className='w-full py-6 px-6'>
      <div className='flex flex-col items-start'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
          Candidate Dashboard
        </h2>
        <p className='text-gray-500 mt-1 text-sm sm:text-base'>
          Manage and track your candidate referrals with ease.
        </p>
      </div>
    </section>
  )
}
