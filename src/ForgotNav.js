// src/components/StickyNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import InstaName from './photos/InstaName.PNG'; // Adjust path as needed

const StickyNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
      <div className="flex items-center justify-start h-14 max-w-screen-xl mx-auto px-4 ">
        <Link to="/">
          <img src={InstaName} alt="Instagram" className="h-10 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default StickyNavbar;
