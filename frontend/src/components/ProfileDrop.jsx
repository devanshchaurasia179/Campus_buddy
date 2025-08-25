import React, { useState } from 'react';
import Profile from '../assets/profileicon.webp'; 

const ProfileDrop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-right z-[100]">
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-2xl text-blue-600 font-bold"
      >
        <img
          src={Profile}
          alt="Profile"
          className="h-10 w-auto max-w-full rounded-full" 
        />
      </span>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">LogOut</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account Details</a>

          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDrop;