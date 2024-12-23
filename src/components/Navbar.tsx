import React from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">Iqra Schools</span>
          </NavLink>
          
          <div className="flex space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-200 transition-colors ${isActive ? 'text-blue-300' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-200 transition-colors ${isActive ? 'text-blue-300' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-200 transition-colors ${isActive ? 'text-blue-300' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;