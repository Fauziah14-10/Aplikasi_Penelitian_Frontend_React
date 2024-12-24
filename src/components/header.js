import React, { useState } from 'react';
import Sidebar from './sidebar';

const Header = () => {
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white py-4 px-8 fixed top-0 left-0 right-0 z-50 w-full shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sidebar Toggle (Hamburger Icon) */}
        <Sidebar />

        {/* SIPENA Logo (Left) */}
        <div className="flex items-center space-x-2 text-left ">
          <h1 className="text-4xl font-bold text-white cursor-pointer transition-transform hover:scale-105">
            SIPENA
          </h1>
          <span className="text-sm text-gray-200 italic">Sistem Informasi Penelitian</span>
        </div>

        {/* Profile Menu & Notifications */}
        <div className="flex items-center space-x-4 relative">
          {/* Notifications Icon (optional) */}
          <svg
            className="w-6 h-6 text-gray-200 cursor-pointer hover:text-white transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zM19 17V7c0-4-3-7-7-7s-7 3-7 7v10l-2 2v1h18v-1l-2-2z"
            ></path>
          </svg>

          {/* Profile Picture and Menu */}
          <div className="flex items-center cursor-pointer" onClick={toggleProfileMenu}>
            <span className="ml-2 text-white font-medium hover:underline">Siti Fauziah</span>
          </div>
          {isProfileMenuVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
              <p className="block w-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 flex items-center">
                Profil
              </p>
              <p className="block w-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 flex items-center">
                Pengaturan
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
