import React from 'react';
import NewsComponent from './NewsComponent';

const CenterSection = () => {
  // Array of content objects
  const newsArticles = [
    {
      title: 'ICC WOMEN\'S T20 WORLD CUP 2024',
      heading: "Reddy on a new track for a longer return journey",
      description:
        "Since being left out of the Indian team three years ago, the Indian pace-bowling all-rounder has given up on the financial security of her job, opting for greater game-time and freedom in order to enhance her skills and revive her career.",
      links: [
        { text: "Arundhati Reddy, Shreyanka Patil star as India get off the mark", url: "#" },
      ],
      imageUrl: 'https://static.cricbuzz.com/a/img/v1/420x235/i1/c555024/reddy-on-a-new-track-for-a-lon.jpg', // Updated image URL
    },
    {
      title: 'BANGLADESH TOUR OF INDIA, 2024',
      heading: "Overspin and opportunity: Varun Chakaravarthy's road to redemption",
      description:
        "With the technical tweaks in place and support from within the team, Varun's 'rebirth' as a bowler could serve him well for the long term, potentially earning him an extended run in the Indian team this time.",
      links: [
        { text: "Our batters don't know how to score 180 - Najmul", url: "#" },
        { text: "India school Bangladesh to go up 1-0", url: "#" },
      ],
      imageUrl: 'https://static.cricbuzz.com/a/img/v1/420x235/i1/c554913/overspin-and-opportunity-varu.jpg',
    },
  ];

  return (
    <div className="w-[45.5%]">
      <div className="bg-white">
        {newsArticles.map((article, index) => (
          <div key={index} className={`px-3  ${index==0 && 'pt-4'} rounded-lg mb-4`}>
            {/* Card Content */}
            <div>
              {/* Heading above the image */}
              <h4 className="text-sm text-gray-500 mb-2">{article.title}</h4>
              <img src={article.imageUrl} alt="news" className="rounded-md mb-4 w-full pt-1" /> {/* Added w-full */}
              <h2 className="text-[24px] font-bold mb-2">{article.heading}</h2>
              <p className="text-gray-600 mb-2 text-[14px]">{article.description}</p>
              {/* Links */}
              <ul className="space-y-1">
                {article.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="text-blue-500 hover:underline font-bold">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Horizontal Line */}
            {index <= newsArticles.length - 1 && (
              <hr className="my-4  border-gray-200 w-full" />
            )}
          </div>
        ))}
        {/* Render the NewsComponent below the newsArticles */}
        <NewsComponent />  {/* This will show the new NewsComponent below newsArticles */}
      </div>
    </div>
  );
};

export default CenterSection;
