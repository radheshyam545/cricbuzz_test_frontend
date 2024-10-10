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

  // Function to truncate title if longer than 18 characters
  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  };

  return (
    <div className="bg-[#4a4a4a] text-white max-w-[1010px] mx-auto">
      <div className="flex items-center space-x-1 overflow-x-auto whitespace-nowrap">
        {/* Static Matches text */}
        <div className="font-bold text-[12px] bg-black text-white px-3 py-2 rounded-md">
          MATCHES
        </div>

        {/* Matches */}
        <div className="flex-grow flex overflow-x-auto">
          {matches.map((match, index) => (
            <div
              key={index}
              className={`text-sm text-white hover:bg-gray-800 cursor-pointer transition-colors duration-300 py-2 rounded-md ${index === 0 ? "pl-[10px]" : "px-[10px]"}`} 
              aria-label={`Match ${index + 1}`}
            >
              {truncateTitle(match.title, 18)}
            </div>
          ))}
        </div>

        {/* ALL dropdown - fixed at the right end */}
        <div className="flex-shrink-0 flex items-center space-x-1 text-sm text-white hover:bg-gray-950 cursor-pointer transition-colors duration-300 px-4 py-2">
          <span>ALL</span>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default MatchNavBar;
