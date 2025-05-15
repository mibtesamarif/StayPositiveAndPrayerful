import React, { useState, useEffect, useRef } from 'react';
import { Play, Mail, Bell, Video } from 'lucide-react';

const YoutubeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hoverTimerRef = useRef(null);
  
  const channelUrl = "https://youtube.com/@staypositiveandprayerful?si=BHys3UatjxKt6aDE";
  const videoId = "O1E6KRuj5BE"; // Extracted from https://youtu.be/O1E6KRuj5BE
  
  // Handle mouse enter with a slight delay to prevent accidental triggers
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear any existing timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    // Set a new timer to start playing after 800ms of continuous hover
    hoverTimerRef.current = setTimeout(() => {
      setIsPlaying(true);
    }, 800);
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Clear the timer if mouse leaves before timeout completes
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    // Stop playing when mouse leaves
    setIsPlaying(false);
  };
  
  // Clean up timer when component unmounts
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);
  
  return (
    <section id="youtube" className="bg-gradient-to-r from-red-600 to-orange-500 py-12 px-6 text-center rounded-2xl my-10 text-white">
      <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Join Our YouTube Community!</h2>
      
      <p className="text-xl max-w-3xl mx-auto mb-6">
        Grow your faith daily! Subscribe for uplifting messages, guided prayers, and a supportive community. 
        Submit your personal prayer requests and receive free spiritual resources.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
          <Bell size={20} className="mr-2" />
          <span>Daily inspiration</span>
        </div>
        <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full">
          <Mail size={20} className="mr-2" />
          <span>Prayer support</span>
        </div>
      </div>
      
      <div 
        className="relative max-w-3xl mx-auto rounded-lg shadow-2xl overflow-hidden mb-8 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isPlaying ? (
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            ></iframe>
          </div>
        ) : (
          <div
            className="w-full aspect-video bg-gray-300 rounded-lg"
            style={{
              backgroundImage: `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'bg-opacity-20' : 'bg-opacity-40'}`}>
              <div className={`relative flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                <div className="bg-red-600 rounded-full p-4 shadow-lg">
                  <Play size={48} fill="white" color="white" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-black bg-opacity-70 py-3 px-4 rounded-lg">
              <h3 className="text-xl font-bold text-left">Stay Positive And Prayerful</h3>
              <p className="text-left text-gray-200 text-sm mt-1">
                {isHovered ? "Video will play automatically..." : "Hover to watch our latest inspiring message"}
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 flex items-center"
        >
          <Video size={20} className="mr-2" />
          Subscribe to Our Channel
        </a>
        <a
          href="https://Christianchurchstore.com"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition transform hover:scale-105 flex items-center"
        >
          <Mail size={20} className="mr-2" />
          Submit Your Prayer
        </a>
      </div>
    </section>
  );
};

export default YoutubeSection;