import React, { useState } from 'react';
import InstaImage from './photos/InstaImage.PNG';
import InstaName from './photos/InstaName.PNG';
import { FaFacebookSquare } from "react-icons/fa";
import GooglePlay from './photos/GooglePlay.png';
import Microsoft from './photos/Microsoft.png';
import { Link } from 'react-router-dom';
import axios from 'axios';




const InstagramLoginPage = () => {
  // State to hold input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dummy credentials (for demonstration purposes)
  const validUsername = "Patan";
  const validPassword = "12345";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5002/Newlogin', { username, password });
      if (response.status === 200) {
        alert('Login Successful');
        console.log('User logged in:', response.data.user);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code outside the range of 2xx
        console.error('Server responded with a status:', error.response.status);
        setError('Invalid username or password');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        setError('No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up request:', error.message);
        setError('Error in request setup');
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex bg-white rounded-lg overflow-hidden mt-20 mb-5">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={InstaImage}
            alt="Instagram Demo"
            className="object-fit w-30 h-90 mt-10"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="border border-gray-300 p-6 shadow-md">
            <img src={InstaName} alt="Instagram Logo" className="mb-6" />
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4 text-xs">
                <input
                  type="text"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:outline-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4 text-xs">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:outline-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <button className="w-full p-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Log In
                </button>
              </div>
              {error && (
                <div className={`mb-4 text-center ${error === 'Login Success' ? 'text-green-500' : 'text-red-500'}`}>
                  {error}
                </div>
              )}
              <div className="flex justify-between items-center mb-4">
                <hr className="w-1/4 border-gray-300" />
                <span className="text-gray-500">OR</span>
                <hr className="w-1/4 border-gray-300" />
              </div>
              <div className="flex justify-center items-center mb-4">
                <button type="button" className="flex items-center text-blue-800 font-semibold hover:underline">
                  <FaFacebookSquare className="mr-2" />
                  Log in with Facebook
                </button>
              </div>
              <div className="text-center text-gray-500 mb-4">
                <Link to="/Forgot" className="hover:underline">Forgot password?</Link>
              </div>
            </form>
            <div className="text-center mt-4 border-t border-gray-300 pt-4">
              <p className="text-gray-600">Don't have an account? <Link to="/signup" className="text-blue-500 font-semibold hover:underline">Sign up</Link></p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            <p>Get the app.</p>
            <div className="flex justify-center mt-4">
              <img src={GooglePlay} alt="Get it on Google Play" className="w-32 mr-2" />
              <img src={Microsoft} alt="Get it from Microsoft" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default InstagramLoginPage;

