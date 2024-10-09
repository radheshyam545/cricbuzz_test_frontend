import React from 'react';

// SpecialCard component for rendering individual special items
const SpecialCard = ({ special }) => {
  return (
    <div className="mb-4">
      {/* Special Image */}
      <div className="relative">
        <img
          src={special.thumbnailUrl}
          alt={special.title}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Title and Description */}
      <div className="mt-2">
        <h3 className="text-[16px] font-bold">{special.title}</h3>
        <p className="text-[14px] text-gray-500">{special.description}</p>
      </div>
    </div>
  );
};

// Main SpecialsComponent
const SpecialsComponent = () => {
  const specialsArray = [
    {
      title: 'October 2024 - News Digest',
      description: 'News bytes that you may have missed otherwise',
      thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/420x235/i1/c555024/reddy-on-a-new-track-for-a-lon.jpg', // Replace with actual thumbnail
    },
    {
      title: 'Exclusive Insights: World Cup 2024',
      description: 'Deep dive into what’s happening behind the scenes',
      thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/300x170/i1/c509908/virat-kohli-signs-off-as-the-f.jpg', // Replace with actual thumbnail
    },
    // Add more special items as needed
  ];

  return (
    <div className="bg-white p-4">
      <h2 className="text-[#009270] font-bold mb-4 text-[16px]">SPECIALS</h2>
      {specialsArray.map((special, index) => (
        <SpecialCard key={index} special={special} />
      ))}
    </div>
  );
};

export default SpecialsComponent;
