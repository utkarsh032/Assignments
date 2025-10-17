import { FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const RefTrackLogo = () => {
  return (
    <Link
      to='/dashboard'
      className='flex items-center gap-3 text-xl sm:text-2xl font-semibold text-gray-800'
    >
      <div className='bg-primary p-2 rounded-lg shadow-md flex items-center justify-center'>
        <FiUsers className='text-white text-2xl' />
      </div>
      <p className='tracking-wide'>RefTrack</p>
    </Link>
  )
}
