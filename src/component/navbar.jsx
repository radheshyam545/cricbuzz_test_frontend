import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io"; // Importing the dropdown icon

const Navbar = () => {
  return (
    <nav className="pt-10">
      <div className="max-w-[1185px] mx-auto px-2 sm:px-4 lg:px-8 flex items-center justify-between bg-[#009270] py-3">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-8">
          <img src={"https://static.cricbuzz.com/images/cb_logo.svg"} className="h-10 w-[80px]" alt="Cricbuzz Logo" />
          <ul className="hidden md:flex space-x-6 text-white">
            <li className="hover:text-gray-300 cursor-pointer">Live Scores</li>
            <li className="hover:text-gray-300 cursor-pointer">Schedule</li>
            <li className="hover:text-gray-300 cursor-pointer">Archives</li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center relative">
              News
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />
            </li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center">
              Series
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />
            </li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center">
              Teams
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />
            </li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center">
              Videos
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />
            </li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center">
              Rankings
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />
            </li>
            <li className="hover:text-gray-300 cursor-pointer flex items-center">
              More
              <IoMdArrowDropdown className="ml-1 mt-[4px]" />


              
            </li>
          </ul>
        </div>

        {/* Right Section: Search, Button, and Profile */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <button className="bg-white text-green-600 px-4 py-1 rounded-2xl hover:bg-gray-100">
            Cricbuzz Plus
          </button>
          <FaSearch className="text-white cursor-pointer text-xl" />
          <FaUserCircle className="text-white cursor-pointer text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
