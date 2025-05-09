import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { BiLogoMagento } from "react-icons/bi";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="z-10 bg-gradient-to-r from-purple-500 to-purple-800 py-4 px-4 md:px-8 shadow-md font-sans w-full fixed top-0 left-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className=" flex items-center space-x-2 bg-white/10 border border-white rounded-full px-4 py-2 shadow-inner">
            <BiLogoMagento className="text-white text-xl "/>          
          <span className="context text-white font-semibold text-sm">JETVANA</span>
        </div>

        <div className="hidden md:flex items-center space-x-4 bg-white/10 border border-white rounded-full px-4 py-2 shadow-inner">
          <button className="px-3 py-1 rounded-full bg-white text-purple-700 font-semibold text-sm cursor-pointer">About</button>
          <button className="px-3 py-1 text-white text-sm transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-purple-500 cursor-pointer">Technology</button>
          <button className="px-3 py-1 text-white text-sm transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-purple-500 cursor-pointer">Services</button>
          <button className="px-3 py-1 text-white text-sm transition-all duration-300 ease-in-out rounded-full hover:bg-white hover:text-purple-500 cursor-pointer">Support</button>
        </div>

        <div className="hidden md:flex items-center space-x-2 bg-white/10 border border-white rounded-full px-4 py-2 shadow-inner">
          <button className="px-3 py-1 text-white text-sm">Login</button>
          <button className="px-3 py-1 rounded-full bg-white text-purple-700 font-semibold text-sm">Sign Up</button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 space-y-3 flex flex-col items-center md:hidden">
          <div className="flex flex-col items-center space-y-2 bg-white/10 border border-white rounded-2xl p-4 shadow-inner w-full max-w-xs">
            <button className="px-4 py-1 rounded-full bg-white text-purple-700 font-semibold w-full text-center">About</button>
            <button className="px-4 py-1 text-white w-full text-center">Technology</button>
            <button className="px-4 py-1 text-white w-full text-center">Services</button>
            <button className="px-4 py-1 text-white w-full text-center">Support</button>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 border border-white rounded-full px-4 py-2 shadow-inner">
            <button className="text-white text-sm">Login</button>
            <button className="px-3 py-1 rounded-full bg-white text-purple-700 font-semibold text-sm">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
