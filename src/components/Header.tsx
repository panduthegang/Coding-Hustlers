import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-100 to-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="text-purple-600">Coding </span>
            <span className="text-gray-300">Hustlers</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#practice" className="text-gray-700 hover:text-purple-600 transition-colors">
            Practice
          </a>
          <a href="#explore" className="text-gray-700 hover:text-purple-600 transition-colors">
            Explore
          </a>
          <a href="#login" className="text-purple-600 hover:text-purple-700 transition-colors">
            Login
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
