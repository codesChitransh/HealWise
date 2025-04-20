import React from 'react'
import { assets } from '../assets/assets'
import Header from '../components/Header'
import TopDoctors from '../components/topDoctors'
import SpecialityMenu from '../components/SpecialityMenu'
function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>

    </div>
  )
}

export default Home