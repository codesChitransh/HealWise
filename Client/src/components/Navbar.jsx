import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
      {/* Yellow background to check Tailwind is working */}
      <img className='w-44 cursor-pointer' src={assets.logo3} alt="HealWise Logo" />

      <ul className='hidden md:flex items-center gap-5 font-medium'>
        {/* Green background and red text for visibility */}
        <NavLink to="/">
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink >
        <NavLink to="/doctors">
          <li className='py-1'>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/about">
          <li className='py-1'>About</li>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/contact">
          <li className='py-1'>Contact</li>
          <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>

      <div className=' flex items-center gap-4'>
        <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default Navbar
