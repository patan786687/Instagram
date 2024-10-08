import React from 'react';
import { FaHome, FaSearch, FaCompass, FaVideo, FaEnvelope, FaBell, FaPlus, FaUser, FaBars } from 'react-icons/fa';
import InstaName from './InstaName.PNG';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-blue-800 text-Black sticky top-0 z-50 border border-gray-300">
      <div className="flex items-center justify-center p-1">
        <img src={InstaName} alt="Instagram Logo" className="w-24" />
      </div>
      <nav className="flex flex-col flex-grow justify-items-start ">
        <ul className="space-y-1 mt-6 ">
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaHome size={24} />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaSearch size={24} />
            <span>Search</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaCompass size={24} />
            <span>Explore</span>
          </li>
          <li className="flex items-center space-x-4 p-4 cursor-pointer">
            <FaVideo size={24} />
            <span>Reels</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaEnvelope size={24} />
            <span>Messages</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaBell size={24} />
            <span>Notifications</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaPlus size={24} />
            <span>Create</span>
          </li>
          <li className="flex items-center space-x-4 p-4  cursor-pointer">
            <FaUser size={24} />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-start p-4 mt-auto">
        <FaBars size={24} />
        <span className='ml-4'>More</span>
      </div>
    </div>
  );
};

export default Sidebar;
