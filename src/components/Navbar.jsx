// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center py-4">
        
        {/* Menu Icon for Mobile */}
        <div className="md:hidden text-3xl cursor-pointer text-cyan-400 absolute left-4" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Centered Menu Links */}
        <ul className={`md:flex md:space-x-10 text-lg absolute md:static bg-black w-full left-0 md:justify-center transition-transform duration-300 ease-in-out 
          ${isOpen ? 'top-16' : '-top-96'}`}>
          <li className="text-center py-2 md:py-0">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'text-gray-300 hover:text-cyan-400 transition duration-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-center py-2 md:py-0">
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'text-gray-300 hover:text-cyan-400 transition duration-300'
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-center py-2 md:py-0">
            <NavLink 
              to="/skills" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'text-gray-300 hover:text-cyan-400 transition duration-300'
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="text-center py-2 md:py-0">
            <NavLink 
              to="/projects" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'text-gray-300 hover:text-cyan-400 transition duration-300'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="text-center py-2 md:py-0">
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? 'text-cyan-400 font-semibold border-b-2 border-cyan-400 pb-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                  : 'text-gray-300 hover:text-cyan-400 transition duration-300'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
