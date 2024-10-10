import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from "react-icons/io"; // Importing the dropdown icon

const Navbar = () => {
  return (
    <nav className="pt-2">
      <div className="max-w-[1010px] mx-auto px-2 flex items-center justify-around bg-[#009270] py-2 h-[50px]"> {/* Fixed height */}
        
        {/* Logo */}
        <img src={"https://static.cricbuzz.com/images/cb_logo.svg"} className="h-full w-auto object-contain" alt="Cricbuzz Logo" /> {/* Increased image size without increasing container height */}

        {/* Links */}
        <ul className="flex space-x-4 text-white text-sm">
          <li className="hover:text-gray-300 cursor-pointer">Live Scores</li>
          <li className="hover:text-gray-300 cursor-pointer">Schedule</li>
          <li className="hover:text-gray-300 cursor-pointer">Archives</li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center relative">
            News
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center">
            Series
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center">
            Teams
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center">
            Videos
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center">
            Rankings
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
          <li className="hover:text-gray-300 cursor-pointer flex items-center">
            More
            <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </li>
        </ul>

        {/* Cricbuzz Plus Button */}
        <button className="bg-white text-green-600 text-sm px-3 py-1 rounded-2xl hover:bg-gray-100">
          Cricbuzz Plus
        </button>

        {/* Search Icon */}
        <FaSearch className="text-white cursor-pointer text-lg" />

        {/* Profile Icon */}
        <FaUserCircle className="text-white cursor-pointer text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
