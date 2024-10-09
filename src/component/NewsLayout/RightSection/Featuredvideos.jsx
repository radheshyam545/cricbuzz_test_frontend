import React from 'react'
import { FaPlay } from 'react-icons/fa'; // Import play icon from react-icons

// VideoCard component for rendering individual video items
const VideoCard = ({ video }) => {
    return (
      <div className="mb-4 relative">
        {/* Video Thumbnail */}
        <div className="relative">
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-auto object-cover rounded-md"
          />
  
          {/* Bottom-only black background with title and play icon */}
          <div className="absolute bottom-0 w-full flex items-center p-2" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)' }}>
            {/* Play icon */}
            <FaPlay className="mr-2 text-lg text-white" /> {/* Play icon with some right margin */}
            
            {/* Title next to the play icon */}
            <p className="text-sm font-semibold text-white px-2">{video.title}</p> {/* Increased text size and made it bold */}
          </div>
        </div>
      </div>
    );
  };


const Featured_Videos = () => {
    const videosArray = [
        {
          title: 'Match Story: Arshdeep & Hardik lead India to dominant win vs Bangladesh',
          thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/420x235/i1/c555024/reddy-on-a-new-track-for-a-lon.jpg', // Replace with actual thumbnail
        },
        {
          title: 'Match Story: India vs Bangladesh 2nd T20I',
          thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/290x164/i1/c553832/ipl-2025-srhs-likely-retenti.jpg', // Replace with actual thumbnail
        },
        {
          title: 'Match Story: India vs Sri Lanka',
          thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/290x164/i1/c553832/ipl-2025-srhs-likely-retenti.jpg', // Replace with actual thumbnail
        },
        {
          title: 'Match Story: Pakistan vs South Africa',
          thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/290x164/i1/c553832/ipl-2025-srhs-likely-retenti.jpg', // Replace with actual thumbnail
        },
        {
          title: 'Match Story: Australia vs West Indies',
          thumbnailUrl: 'https://static.cricbuzz.com/a/img/v1/290x164/i1/c553832/ipl-2025-srhs-likely-retenti.jpg', // Replace with actual thumbnail
        },
        // Add more video items as needed
      ];
    
      const displayedVideos = videosArray.slice(0, 5); // Show only the first 5 videos
    
  return (
    <>
      <h2 className="text-[#009270] font-bold mb-4 text-[16px]">FEATURED VIDEOS</h2>
      {displayedVideos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}

      <div className="flex justify-center mt-4">
        <button className="bg-[#009270] text-white px-4 py-2 rounded">More Videos</button>
      </div>
    </>
  )
}

export default Featured_Videos
