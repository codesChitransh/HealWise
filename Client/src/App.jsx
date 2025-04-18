import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>
      <main className='container mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/myprofile' element={<MyProfile />}/>
          <Route path='/myappointments' element={<MyAppointment />}/>
          <Route path='/appointment/:docId' element={<Appointment/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
