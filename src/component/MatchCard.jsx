import React from 'react';

const MatchCard = ({ matchType, series, team1, team2, score1, score2, result, statusLinks, team1_image, team2_image }) => {
  return (
    <div className="w-[250px] bg-white shadow-md rounded-[4px] border border-gray-200 flex-shrink-0">
      {/* Series and Match Type */}
      <div className="p-2">
        <div className="flex justify-between mb-2">
          <span className="text-[10px] text-gray-500">{series}</span>
          <span className="text-[10px] bg-[#464646] text-white py-[1px] px-[9px] rounded-full">{matchType}</span>
        </div>

        {/* Team 1 vs Team 2 */}
        <div className="mb-2">
          <div className="flex items-center mb-1">
            <div className="flex items-center">
              <img src={team1_image} alt={team1} className="w-4 h-3 mr-2" />
              <span className="text-sm font-[400] text-[#666]">{team1}</span>
            </div>
            <span className="text-sm font-semibold ml-[40px]">{score1}</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <img src={team2_image} alt={team2} className="w-4 h-3 mr-2" />
              <span className="text-[14px] font-semibold text-[#222]">{team2}</span>
            </div>
            <span className="text-sm font-semibold ml-[50px]">{score2}</span>
          </div>
        </div>

        {/* Result */}
        <div className="text-blue-600 text-[12px] mt-2">{result}</div>
      </div>

      {/* Bottom Links */}
      <div className="bg-[#F0F0F0] py-2 rounded-b-lg flex justify-end text-xs font-semibold text-gray-600">
        {statusLinks.map((link, index) => (
          <span key={index} className="cursor-pointer text-[10px] mx-[5px] hover:text-blue-600">
            {link}
          </span>
        ))}
      </div>
    </div>
  );
};

const MatchList = () => {
  const matches = [
    {
      matchType: 'T20',
      series: 'Final • Caribbean Premier League 2024',
      team1: 'GAW',
      team2: 'SLK',
      score1: '138-8 (20)',
      score2: '139-4 (18.1)',
      team1_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg',
      team2_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg',
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
    {
      matchType: 'T20',
      series: 'Final • Caribbean Premier League 2024',
      team1: 'GAW',
      team2: 'SLK',
      score1: '138-8 (20)',
      score2: '139-4 (18.1)',
      team1_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg',
      team2_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg',
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
    {
      matchType: 'T20',
      series: 'Final • Caribbean Premier League 2024',
      team1: 'GAW',
      team2: 'SLK',
      score1: '138-8 (20)',
      score2: '139-4 (18.1)',
      team1_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg',
      team2_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg',
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
    {
      matchType: 'T20',
      series: 'Final • Caribbean Premier League 2024',
      team1: 'GAW',
      team2: 'SLK',
      score1: '138-8 (20)',
      score2: '139-4 (18.1)',
      team1_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg',
      team2_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg',
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
    {
      matchType: 'T20',
      series: 'Final • Caribbean Premier League 2024',
      team1: 'GAW',
      team2: 'SLK',
      score1: '138-8 (20)',
      score2: '139-4 (18.1)',
      team1_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172116/pakistan.jpg',
      team2_image: 'https://static.cricbuzz.com/a/img/v1/25x18/i1/c172115/india.jpg',
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
    // You can add more match objects similarly
  ];

  return (
    <div className="flex overflow-x-scroll py-2 mx-auto max-w-[1010px] w-full" style={{ scrollbarWidth: 'none' }}>
      {matches.map((match, index) => (
        <div key={index} className={`flex-shrink-0 ${index === 0 ? 'ml-0' : 'ml-2'}`}>
          <MatchCard {...match} />
        </div>
      ))}
    </div>
  );
};

export default MatchList;
