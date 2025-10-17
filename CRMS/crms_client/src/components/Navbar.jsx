import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RefTrackLogo } from '../UI/logo/RefTrackLogo'
import { FiMenu, FiX } from 'react-icons/fi'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='flex items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-50'>
      {/* Logo */}
      <RefTrackLogo />

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-6'>
        <NavLink
          to='/dashboard'
          className={({ isActive }) =>
            `transition-all duration-300 text-gray-700 hover:text-blue-600 ${
              isActive ? 'font-semibold text-blue-600' : ''
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to='/referral-form'
          className={({ isActive }) =>
            `transition-all duration-300 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${
              isActive ? 'bg-blue-600' : ''
            }`
          }
        >
          Referral Form
        </NavLink>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className='md:hidden text-gray-700 text-2xl focus:outline-none'
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-5 md:hidden transition-all duration-300'>
          <NavLink
            to='/dashboard'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-300 text-gray-700 hover:text-blue-600 ${
                isActive ? 'font-semibold text-blue-600' : ''
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to='/referral-form'
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `transition-all duration-300 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${
                isActive ? 'bg-blue-600' : ''
              }`
            }
          >
            Referral Form
          </NavLink>
        </div>
      )}
    </nav>
  )
}
