import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
function SpecialityMenu() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='w-1/3 text-center text-sm'>Easily find trusted and verified medical professionals.</p>
      <div className="flex sm:justify-center gap-4 w-full overflow-scroll">
        {specialityData.map((item,index)=>(
          <Link
          onClick={()=>scrollTo(0,0)}
          key={index}
          to={`/doctors/${item.speciality}`}
          className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:-translate-y-2 transition-all duration-500'
        >
          <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality} />
          <p>{item.speciality}</p>
        </Link>
        ))}

      </div>
    </div>
  )
}

export default SpecialityMenu