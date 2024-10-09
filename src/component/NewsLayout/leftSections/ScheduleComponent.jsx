import React from 'react';

// ScheduleCard component for rendering individual schedule items
const ScheduleCard = ({ schedule }) => {
  return (
    <div className="mb-2">
      <h3 className="font-semibold text-[14px] text-[#222]">{schedule.match}</h3>
      {/* Date and time on the same row */}
      <p className="text-xs text-gray-500">{`${schedule.date} • ${schedule.time}`}</p>
    </div>
  );
};

// Main ScheduleComponent
const ScheduleComponent = () => {
  const scheduleArray = [
    {
      match: 'Pakistan vs England, 1st Test, Day 1',
      date: 'Mon Oct 07',
      time: '10:30 AM GMT',
    },
    {
      match: 'Ireland vs South Africa, 3rd ODI',
      date: 'Mon Oct 07',
      time: '5:00 PM GMT',
    },
    {
      match: 'Pakistan vs England, 1st Test, Day 2',
      date: 'Tue Oct 08',
      time: '10:30 AM GMT',
    },
    {
      match: 'India vs Bangladesh, 2nd T20I',
      date: 'Wed Oct 09',
      time: '7:00 PM GMT',
    },
    {
      match: 'Chile vs Panama, 12th Match, Group A',
      date: 'Sat Oct 12',
      time: '9:30 PM GMT',
    },
    // Add more matches as needed
  ];

  const displayedSchedule = scheduleArray.slice(0, 5); // Show the first 5 items

  return (
    <div className="py-4 px-3">
      <h2 className="text-[#009270] font-bold mb-2 text-[16px]">SCHEDULE</h2>
      {displayedSchedule.map((schedule, index) => (
        <div key={index}>
          <ScheduleCard schedule={schedule} />
          {/* Only show hr if it's not the last item */}
          {index < displayedSchedule.length - 1 && (
            <hr className="my-2 border-gray-200" />
          )}
        </div>
      ))}
      {/* Show More Matches link after 5th match */}
      <div className="mt-4">
        <a href="#" className="text-blue-500 hover:underline text-sm">More Matches..</a>
      </div>
    </div>
  );
};

export default ScheduleComponent;
