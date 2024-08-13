import React, { useState } from 'react';
import InstaName from './photos/InstaName.PNG';
import Googleplay from './photos/GooglePlay.png';
import Microsoft from './photos/Microsoft.png';
import { Link } from 'react-router-dom';

const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

function InstagramSignup() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullNameRegex = /^[a-zA-Z\s]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; // Alphanumeric with underscores, 3-16 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number

    // Validate email
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate full name
    if (!fullNameRegex.test(fullName)) {
      alert('Full name should contain only letters and spaces.');
      return;
    }

    // Validate username
    if (!usernameRegex.test(username)) {
      alert('Username should be 3-16 characters long and can contain letters, numbers, and underscores.');
      return;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
      alert('Password should be at least 8 characters long and contain both letters and numbers.');
      return;
    }

    const user = { email, fullName, username, password };

  try {
    const response = await fetch('http://localhost:5002/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data)
    if (response.status === 201) {
      alert(data.message);
      // Clear the form fields
      setEmail('');
      setFullName('');
      setUsername('');
      setPassword('');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to sign up.');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center mt-56">
      <div className="bg-white shadow-md border border-gray-100 rounded-lg p-8 w-96 mt-20 mb-0">
        <img src={InstaName} className='block mx-auto mb-4' alt="Instagram Logo" />
        <p className="text-gray-600 text-center mb-6 text-sm font-bold">
          Sign up to see photos and videos from your friends.
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full w-full mb-4"
          onClick={() => {
            // Handle Facebook login logic
            console.log('Facebook Login');
          }}
        >
          <i className="mr-2 text-xs"></i> Log in with Facebook
        </button>

        <div className="flex justify-between items-center mb-4 mt-4">
          <hr className="w-1/4 border-gray-300" />
          <span className="text-gray-500">OR</span>
          <hr className="w-1/4 border-gray-300" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-sm relative">
            <label
              htmlFor="email"
              className={`absolute left-3 top-2 text-gray-500 text-xs transform transition-transform duration-300 ease-in-out ${
                email ? '-translate-y-5 scale-75' : ''
              }`}
            >
              Mobile Number or Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xs"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="fullName"
              className={`absolute left-3 top-2 text-gray-500 text-xs transform transition-transform duration-300 ease-in-out ${
                fullName ? '-translate-y-5 scale-75' : ''
              }`}
            >
              Full Name
            </label>
            <input
              type="text"
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="username"
              className={`absolute left-3 top-2 text-gray-500 text-xs transform transition-transform duration-300 ease-in-out ${
                username ? '-translate-y-5 scale-75' : ''
              }`}
            >
              Username
            </label>
            <input
              type="text"
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className={`absolute left-3 top-2 text-gray-500 text-xs transform transition-transform duration-300 ease-in-out ${
                password ? '-translate-y-5 scale-75' : ''
              }`}
            >
              Password
            </label>
            <input
              type="password"
              className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <p className="text-gray-600 text-center mt-4 mb-4 text-xs">
            People who use our service may have uploaded your contact information to Instagram{' '}
            <a href="#" className="underline">Learn More</a>.
          </p>
          <p className="text-gray-600 text-center mt-4 mb-4 text-xs">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">Terms</a>,{' '}
            <a href="#" className="underline">Privacy Policy</a> and{' '}
            <a href="#" className="underline">Cookies Policy</a>.
          </p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full w-full focus:outline-none focus-shadow-outline"
          >
            Sign up
          </button>
        </form>
        <div className="w-100 max-w-md p-5 bg-white rounded-md shadow-md border border-lightgrey-700 mt-4">
          <p className="text-center text-gray-600">
            Have an account?{' '}
            <Link to="/" className="text-blue-500 underline">Log in</Link>
          </p>
        </div>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-800">Get the app.</p>
        </div>
        <div className="flex justify-center mt-4">
          <img src={Googleplay} alt="Get it on Google Play" className="w-32 h-10 mr-2" />
          <img src={Microsoft} alt="Get it from Microsoft" className="w-32 h-10" />
        </div>
      </div>
    </div>
  );
}

export default InstagramSignup;
