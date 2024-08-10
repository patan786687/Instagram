import React, { useState } from 'react';

const InstagramFooter = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <footer className="bg-white-100 text-gray-600 py-4">
      <div className="container mx-auto flex flex-wrap justify-center space-x-6 text-sm">
        <a href="#" className="hover:underline">Meta</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Blog</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">API</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">Locations</a>
        <a href="#" className="hover:underline">Instagram Lite</a>
        <a href="#" className="hover:underline">Threads</a>
        <a href="#" className="hover:underline">Contact Uploading & Non-Users</a>
        <a href="#" className="hover:underline">Meta Verified</a>
      </div>

      <div className="mt-4 flex justify-center ">
        <div className="relative inline-block">
          <select 
            value={language} 
            onChange={handleLanguageChange} 
            className="bg-white border border-lightgray-300 rounded-md shadow-sm py-0 pl-1 pr-10 text-xs leading-5 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>中文</option>
            <option>日本語</option>
            <option>한국어</option>
            <option>Português</option>
            <option>Italiano</option>
          </select>
        </div>
        <p className='text-sm text-gray-600 ml-4 pt-1'>
        © 2024 Instagram from Meta
        </p>
      </div>
    </footer>
  );
};

export default InstagramFooter;
