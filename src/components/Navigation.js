import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clipart from '../assets/clipartBW.png';

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="cursor-pointer">
              <img 
                src={clipart} 
                alt="Logo" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </RouterLink>
          </div>
          <div className="flex items-center space-x-8">
            <RouterLink to="/" className="cursor-pointer hover:text-blue-600">Home</RouterLink>
            <RouterLink to="/about" className="cursor-pointer hover:text-blue-600">About</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 