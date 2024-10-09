import React from 'react';

// NewsCard component for rendering individual news items
const NewsCard = ({ news }) => {
  return (
    <div className="mb-4">
      {/* Title above the image */}
      <h4 className="text-xs text-[#666] mb-2">{news.title}</h4>
      
      <div className="flex items-start">
        {/* Image */}
        <img
          src={news.imageUrl}
          alt="news"
          className="w-24 h-16 object-cover rounded-md mr-4"
        />

        {/* Heading and time next to the image */}
        <div>
          <h2 className="text-[18px] font-semibold">{news.heading}</h2>
          <p className="text-xs text-[#666]">{news.time}</p>
        </div>
      </div>

      {/* Description on a new line */}
      <p className="text-sm text-[#666] mt-2">{news.description}</p>

      {/* Links below description */}
      {news.links && news.links.length > 0 && (
        <ul className="mt-2 space-y-1">
          {news.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.url} className="text-blue-600 hover:underline">{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// MainComponent where multiple NewsCard components will be rendered
const NewsComponent = () => {
  // Array for multiple news items
  const newsArray = [
    {
      title: 'CPL 2024',
      heading: 'Jones, Chase power Kings to maiden CPL title',
      time: '5h ago',
      description: 'In the chase of 139, Saint Lucia Kings cruised to a comfortable 6-wicket win',
      imageUrl: 'https://static.cricbuzz.com/a/img/v1/135x75/i1/c554979/jones-chase-power-kings-to-ma.jpg', // Replace with actual image URLs
      links: [
        { text: "Stubbs maiden ODI ton helps South Africa clinch series", url: "#" }
      ],
    },
    {
      title: 'IPL 2024',
      heading: 'Mumbai Indians on top with another win',
      time: '8h ago',
      description: 'Mumbai Indians secure another thrilling victory with a solid all-round performance',
      imageUrl: 'https://static.cricbuzz.com/a/img/v1/135x75/i1/c554979/jones-chase-power-kings-to-ma.jpg', // Replace with actual image URLs
      links: [],
    },
    // Add more news items as needed
  ];

  return (
    <div className="p-4">
      {/* Map over newsArray and display each NewsCard */}
      {newsArray.map((news, index) => (
        <div key={index}>
          <NewsCard news={news} />
          {/* Only show hr if it's not the last item */}
          {index < newsArray.length - 1 && (
            <hr className="my-4 border-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
