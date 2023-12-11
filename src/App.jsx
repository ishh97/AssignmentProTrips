import Navbar from './pages/NavBar'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/Contact'
import Registration from './pages/Registration'

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
