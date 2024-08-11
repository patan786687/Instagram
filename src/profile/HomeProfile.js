import React from 'react'
import Sidebar from './sidebar'
import InstaHeader from './profileinfo'
import ProfileSection from './UserProfile'

const HomeProfile = () => {
  return (
    <div className='flex flex row'>
        
    <Sidebar/>
    <InstaHeader/>
    <ProfileSection/>
    
   
      
    </div>
  )
}

export default HomeProfile
