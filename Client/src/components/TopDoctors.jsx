import React from 'react'
import { doctors } from '../assets/assets'

function TopDoctors() {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
      <h1 className='text-3xl font-medium'>
        Top Doctors Available
      </h1>

      <p className='text-center text-sm'>
        Browse doctors and schedule your consultation with ease.
      </p>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 sm:px-0 px-3'>
        {doctors.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow-sm'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-40 object-contain bg-blue-50'
            />
            <div className='p-4'>
              <div className='flex items-center justify-center gap-2 text-sm text-green-500'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <p>Available</p>
              </div>
              <p className='mt-2 text-sm font-medium text-center'>{item.name}</p>
              <p className='text-center text-xs text-gray-500'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
        More
      </button>
    </div>
  )
}

export default TopDoctors
