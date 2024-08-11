import React from "react";
import { Link } from "react-router-dom";


const ProfileSection = () => {
  const suggestedUsers = [
    { username: "Pragya", status: "New to Instagram" },
    { username: "Sharukh", status: "New to Instagram" },
    { username: "Sharukh", status: "Popular", verified: true },
    { username: "Sharukh", status: "New to Instagram" },
    { username: "Pragya", status: "New to Instagram" },
  ];

  return (
    <div className="w-1/4 p-4 ml-10">
      {/* Profile */}
      <div className="flex items-center mb-4 mr-5">
        <img
          className="w-16 h-16 rounded-full"
          src="https://imgeng.jagran.com/images/2023/jan/ibrahim%20ali%20khan1675163352144.jpg" // Replace with actual path
          alt="Patan Ibrahim"
        />
        <div className="ml-3">
          <Link to="/profile" className="text-sm font-bold">
            patan.ibrahim.1
          </Link>
          <p className="text-sm text-gray-500">Patan Ibrahim</p>
          <Link to="/switch" className="text-blue-500 text-xs">
            Switch
          </Link>
        </div>
      </div>

      {/* Suggested for You */}
      <div className="mb-5 mt-5">
        <div className="flex justify-between mb-2">
          <p className="text-sm font-bold text-gray-500">Suggested for you</p>
          <Link to="/suggestions" className="text-xs text-blue-500">
            See All
          </Link>
        </div>
        <div className="space-y-5">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center mb-2">
              <img
                className="w-10 h-10 rounded-full"
                src={`/Images/${user.username}.jpg`} // Replace with actual path
                alt={user.username}
              />
              <div className="ml-3">
                <p className="text-sm font-bold">{user.username}</p>
                <p className="text-xs text-gray-500">{user.status}</p>
              </div>
              <button className="ml-auto text-blue-500 text-xs">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-xs text-gray-500">
        <Link to="/about" className="mr-2">About</Link> ·
        <Link to="/help" className="ml-2 mr-2">Help</Link> ·
        <Link to="/press" className="ml-2 mr-2">Press</Link> ·
        <Link to="/api" className="ml-2 mr-2">API</Link> ·
        <Link to="/jobs" className="ml-2 mr-2">Jobs</Link> ·
        <Link to="/privacy" className="ml-2 mr-2">Privacy</Link> ·
        <Link to="/terms" className="ml-2 mr-2">Terms</Link> ·
        <Link to="/locations" className="ml-2 mr-2">Locations</Link> ·
        <Link to="/language" className="ml-2 mr-2">Language</Link> ·
        <Link to="/meta-verified" className="ml-2">Meta Verified</Link>
      </div>
      <p className="text-xs text-gray-500 mt-4">© 2024 INSTAGRAM FROM META</p>
    </div>
  );
};

export default ProfileSection;
