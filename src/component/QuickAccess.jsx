import React from 'react';
import { FaTrophy, FaRegFileAlt, FaUsers, FaPlusCircle } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';

const QuickAccess = () => {
  const quickLinks = [
    { icon: <FaTrophy />, label: 'Fantasy Handbook' },
    { icon: <FaRegFileAlt />, label: 'See Plans' },
    { icon: <FaUsers />, label: 'Team India' },
    { icon: <FaPlusCircle />, label: 'Cricbuzz Plus' },
    { icon: <AiOutlineFileText />, label: 'CB Plus & Times Prime' },
  ];

  return (
    <div className="flex items-center justify-start space-x-4 py-3 px-4 bg-white  max-w-[1010px] mx-auto">
      <span className="text-[18px] font-bold mr-4">Quick Access</span>
      {quickLinks.map((link, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 bg-[#f0f0f0] hover:bg-gray-300 px-[10px] py-2 "
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-sm font-[400] text-[#222] ">{link.label}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickAccess;
