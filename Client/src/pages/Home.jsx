import React from 'react'
import { assets } from '../assets/assets'
import Header from '../components/Header'

import SpecialityMenu from '../components/SpecialityMenu'
function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
    </div>
  )
}

export default Home