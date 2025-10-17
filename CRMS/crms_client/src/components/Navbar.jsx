import { RefTrackLogo } from '../UI/logo/RefTrackLogo'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-50'>
      <RefTrackLogo />

      <div className='flex items-center gap-3 sm:gap-5'>
        <NavLink
          to='/dashboard'
          className={({ isActive }) =>
            `navLink transition-all duration-300 ${isActive ? 'active' : ''}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to='/referral-form'
          className={({ isActive }) =>
            `navLink btn transition-all duration-300 ${
              isActive ? 'active' : ''
            }`
          }
        >
          Referral Form
        </NavLink>
      </div>
    </nav>
  )
}
