import React from 'react';
import { assets } from '../assets/assets';

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment<br />With Trusted Doctors
        </p>
        <div className='fex flex-col md:flex-row items-center gap-3 text-white font-light'>
          <img className='w-28'src={assets.group_profiles} alt="Group Profiles" />
          <p>
            Browse Through our list of doctors,<br />
            Track Your Progress and Talk with AI bot
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-white font-medium">
          Book Appointment <img src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto object-cover rounded-lg"
          src={assets.headerdoc}
          alt="Doctor Illustration"
        />
      </div>
    </div>
  );
}

export default Header;
