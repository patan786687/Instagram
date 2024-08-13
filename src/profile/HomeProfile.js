import React from 'react'
import Sidebar from './sidebar'
import InstaHeader from './profileinfo'
import ProfileSection from './UserProfile'
import { Outlet } from 'react-router-dom'

const HomeProfile = () => {
  return (
    <div className='flex flex row mt-10'>
        
    <Sidebar/>
    <InstaHeader/>
    <ProfileSection/>
    <Outlet/>
    
   
      
    </div>
  )
}

export default HomeProfile
