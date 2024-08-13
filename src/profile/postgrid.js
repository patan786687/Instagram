// src/Post.js

import React from "react";

const Post = () => {
  return (
    <div className="max-w-xl mx-auto bg-white border rounded-lg shadow-md overflow-hidden">
      {/* Top Section with User Icon and Name */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User"
          />
          <span className="ml-4 font-semibold">User Name</span>
        </div>
        <button className="text-gray-500">•••</button>
      </div>

      {/* Image or Video Section */}
      <div className="w-full bg-gray-200">
        <img
          className="w-full h-96 object-cover"
          src="https://via.placeholder.com/600"
          alt="Post Content"
        />
      </div>

      {/* Bottom Section with Icons */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="text-gray-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
            <button className="text-gray-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button className="text-gray-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5v10l4-4 4 4V5"
                />
              </svg>
            </button>
          </div>
          <button className="text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
              />
            </svg>
          </button>
        </div>

        {/* Likes */}
        <div className="mt-4 text-sm text-gray-700">
          Liked by <span className="font-semibold">User1</span> and{" "}
          <span className="font-semibold">others</span>
        </div>

        {/* User's Name */}
        <div className="mt-2 text-sm">
          <span className="font-semibold">User Name</span>{" "}
          <span className="text-gray-700">This is the post description</span>
        </div>

        {/* Comment Input */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full border-none focus:outline-none focus:ring-0 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
