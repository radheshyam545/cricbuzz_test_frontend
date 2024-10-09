import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io"; // Importing the dropdown icon

const MatchNavBar = () => {
  const matches = [
    { title: "SLW vs AUSW - Live" },
    { title: "BANW vs ENGW - Preview" },
    { title: "BR vs GAW - GAW Won" },
    { title: "MUM vs ROI - Match drawn" },
    { title: "RSA vs IRE - RSA Won" }
  ];

  return (
    <div className="bg-gray-800 text-white max-w-[1185px] mx-auto">
      <div className="flex items-center px-4 py-2 space-x-6 overflow-x-auto whitespace-nowrap">
        {/* Static Matches text */}
        <div className="font-bold text-sm text-green-400">
          MATCHES
        </div>
        
        {/* Matches */}
        <div className="flex-grow flex space-x-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
            >
              {match.title}
            </div>
          ))}
        </div>

        {/* ALL dropdown - fixed at the right end */}
        <div className="flex-shrink-0 flex items-center space-x-1 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors duration-300">
          <span>ALL</span>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default MatchNavBar;
