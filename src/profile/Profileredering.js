import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Sidebar from './sidebar'
import HomeProfile from './HomeProfile'
import InstaHeader from './profileinfo'
import ProfileSection from './UserProfile'

const Profileredering = () => {
  return (
    
        <Routes>
            <Route path="/" element={<HomeProfile />} />
            <Route path="/profile" element={<Sidebar />} />
            <Route path='/Profileinfo' element={<InstaHeader/>}/>
            <Route path='/UserProfile' element={<ProfileSection/>}/>


        </Routes>
    
  )
}

export default Profileredering
