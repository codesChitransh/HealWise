import React from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 bg-yellow-300'>
     
      

      <ul className='hidden md:flex items-center gap-5 font-medium bg-green-300 text-red-600'>
        
        <NavLink to="/">
          <li className='hover:text-blue-600'>Home</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className='hover:text-blue-600'>All Doctors</li>
        </NavLink>
        <NavLink to="/about">
          <li className='hover:text-blue-600'>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li className='hover:text-blue-600'>Contact</li>
        </NavLink>
      </ul>

      <div className='bg-pink-300 p-2 rounded'>
        <button className='bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700'>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default Navbar
