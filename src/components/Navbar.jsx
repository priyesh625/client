import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent px-4 py-2 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl flex gap-3 font-bold">
          <img src={logo} alt="ekko logo" className="h-8 rounded-xl" /><h1 className='heading text-white' >EKKO</h1>
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About</a>
          <a href="#services" className="text-white hover:text-gray-300">Services</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-transparent">
          <div className="absolute inset-0" onClick={closeMenu}></div>
          <div className="relative  p-4 rounded-lg z-50">
            <a href="#home" className="block text-white hover:text-gray-200 mb-4" onClick={closeMenu}>Home</a>
            <a href="#about" className="block text-white hover:text-gray-200 mb-4" onClick={closeMenu}>About</a>
            <a href="#services" className="block text-white hover:text-gray-200 mb-4" onClick={closeMenu}>Services</a>
            <a href="#contact" className="block text-white hover:text-gray200  mb-4" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
