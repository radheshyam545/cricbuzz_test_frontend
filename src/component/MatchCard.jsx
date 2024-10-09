import React from 'react';
import { FaFlag } from 'react-icons/fa';

const MatchCard = ({ matchType, series, team1, team2, score1, score2, result, statusLinks }) => {
  return (
    <div className="w-[320px] bg-white shadow-md rounded-lg border border-gray-200 flex-shrink-0">
      {/* Series and Match Type */}
      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{series}</span>
          <span className="text-xs bg-gray-700 text-white py-1 px-2 rounded-full">{matchType}</span>
        </div>

        {/* Team 1 vs Team 2 */}
        <div className="mb-2">
          <div className="flex  items-center mb-1">
            <div className="flex items-center">
              <FaFlag className="mr-2 text-green-600" />
              <span className="text-lg font-semibold">{team1}</span>
            </div>
            <span className="text-lg font-semibold ml-[80px]">{score1}</span>
          </div>
          <div className="flex  items-center">
            <div className="flex items-center">
              <FaFlag className="mr-2 text-green-600" />
              <span className="text-lg font-semibold">{team2}</span>
            </div>
            <span className="text-lg font-semibold ml-[90px]">{score2}</span>
          </div>
        </div>

        {/* Result */}
        <div className="text-blue-600 text-sm mt-4">{result}</div>
      </div>

      {/* Bottom Links */}
      <div className="bg-gray-100 p-2 rounded-b-lg flex justify-end text-xs font-semibold text-gray-600">
        {statusLinks.map((link, index) => (
          <span key={index} className="cursor-pointer mx-2 hover:text-blue-600">
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
      result: 'Saint Lucia Kings won by 6 wkts',
      statusLinks: ['FANTASY', 'TABLE', 'SCHEDULE'],
    },
  ];

  return (
    <div className="flex overflow-x-scroll py-4 mx-auto max-w-[1185px] w-full" style={{ scrollbarWidth: 'none' }}>
      {matches.map((match, index) => (
        <div key={index} className={`flex-shrink-0 ${index === 0 ? 'ml-0' : 'ml-4'}`}>
          <MatchCard {...match} />
        </div>
      ))}
    </div>
  );
};

export default MatchList;
