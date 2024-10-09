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
    <div className="flex items-center justify-start space-x-4 p-4 bg-white  max-w-[1185px] mx-auto">
      <span className="text-lg font-bold mr-4">Quick Access</span>
      {quickLinks.map((link, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 p-2 "
        >
          <span className="text-xl">{link.icon}</span>
          <span className="text-sm font-medium text-[#222] ">{link.label}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickAccess;
