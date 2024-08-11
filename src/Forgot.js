// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import StickyNavbar from './ForgotNav';

const ForgotPassword = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Login link sent to ${input}`);
  };

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 mt-10">
        <StickyNavbar/>
      <div className="w-96 max-w-md mt-32 p-8 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="flex flex-col items-center">
          <FaLock size={48} className="text-gray-500 mb-4" />
          <h2 className="mb-4 text-xl font-semibold text-center text-gray-800">Trouble logging in?</h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email, phone, or username and we'll send you a link to get back into your account.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email, Phone, or Username"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Send login link
          </button>
        </form>
        <div className="my-6 text-center">
          <Link to="/reset" className="text-blue-500 hover:underline">Can't reset your password?</Link>
        </div>
        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          <Link to="/signup" className="text-gray-800 font-semibold hover:underline">Create new account</Link>
        </div>
      </div>
      <div className="w-96 h-10 mt-4 text-center bg-white shadow-lg border border-gray-300 ">
        <Link to="/NewLogin" className=" block text-gray-500 hover:underline mt-2">Back to login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
