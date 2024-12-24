import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="hover:bg-blue-500 hover:text-white text-black font-bold py-4 px-2 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white shadow-lg transform ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header */}
        <div className="py-4 px-2 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
          <h2 className="text-lg font-bold">SIPENA Menu</h2>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                onClick={closeSidebar}
                className="flex items-center py-2 px-3 hover:bg-blue-700 rounded transition-all text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3l8 7h-2v8h-4v-6H10v6H6v-8H4l8-7z" />
                </svg>
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link
                to="/penelitian"
                onClick={closeSidebar}
                className="flex items-center py-2 px-3 hover:bg-blue-700 rounded transition-all text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                  <line x1="7" y1="8" x2="17" y2="8" strokeWidth="2" />
                  <line x1="7" y1="12" x2="17" y2="12" strokeWidth="2" />
                  <line x1="7" y1="16" x2="14" y2="16" strokeWidth="2" />
                </svg>
                <span>Penelitian</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <footer className="absolute bottom-2 w-full text-center text-white text-xs">
          <p>&copy; 2024 Bogor University</p>
        </footer>
      </div>

      {/* Overlay */}
      {isSidebarVisible && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
