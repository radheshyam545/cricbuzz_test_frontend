import React from 'react';
import ScheduleComponent from './ScheduleComponent'; // Import the new ScheduleComponent

const LeftSection = () => {
  const newsData = [
    { title: "BCCI looking at Saudi cities for two-day mega IPL auction", time: "1d ago" },
    { title: "Ben Stokes out of first Pakistan Test; Carse to debut", time: "1d ago" },
    { title: "'A good ball is a good ball for any batter' - Tanzim Sakib", time: "1d ago" },
    { title: "India vs Australia: Pujara's gritty innings saves the day", time: "2d ago" },
    { title: "South Africa clinches ODI series against New Zealand", time: "3d ago" },
  ];

  const displayedNews = newsData.slice(0, 5); // Show only the first 5 items

  return (
    <div className="w-1/6">
      <div className="bg-white p-4 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-[#009270]">LATEST NEWS</h2>
        <ul>
          {displayedNews.map((news, index) => (
            <li key={index} className="text-sm text-gray-700">
              <div>{news.title}</div>
              <div className="text-xs text-gray-500">{news.time}</div>
              {index < displayedNews.length - 1 && (
                <hr className="my-4 border-gray-200" />
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline text-sm">More News..</a>
        </div>
      </div>

      {/* Add margin to create space between news and schedule */}
      <div className="mt-2 bg-white  border-r border-gray-200">
        {/* Include the ScheduleComponent with white background */}
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default LeftSection;
