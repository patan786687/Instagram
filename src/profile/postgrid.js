// src/components/Post.js
import React from 'react';
import { FaHeart, FaComment, FaShare, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Post = ({ description }) => {
  return (
    <div className="max-w-xl mx-auto my-3 bg-white rounded-lg shadow-md ">
      {/* Post Image */}
      <img src="https://yespunjab.com/wp-content/uploads/2024/08/Ajay-Devgn.jpg" alt="Post" className="w-full h-auto rounded-t-lg" />

      {/* Post Description */}
      <div className="p-4">
        <p className="text-sm text-gray-800">{description}</p>
      </div>

      {/* Action Icons */}
      <div className="flex justify-end items-center p-4 space-x-4">
        <Link to="/like">
          <FaHeart size={24} className="text-gray-700 hover:text-red-500 cursor-pointer" />
        </Link>
        <Link to="/comment">
          <FaComment size={24} className="text-gray-700 hover:text-blue-500 cursor-pointer" />
        </Link>
        <Link to="/share">
          <FaShare size={24} className="text-gray-700 hover:text-green-500 cursor-pointer" />
        </Link>
        <Link to="/save">
          <FaBookmark size={24} className="text-gray-700 hover:text-yellow-500 cursor-pointer" />
        </Link>
      </div>
      
    </div>
  );
};

export default Post;
