import React, { useState, useEffect } from 'react';
import { ChevronDown, Users } from 'lucide-react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative py-16 px-4 rounded-3xl mt-5 overflow-hidden min-h-[500px] flex items-center">
      {/* Dynamic Background with subtle animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-blue-800 z-0"
        style={{
          backgroundImage: `url('/api/placeholder/1200/600')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollPosition * 0.05}px) scale(${1 + scrollPosition * 0.0002})`,
          transition: 'transform 0.05s ease-out'
        }}
      ></div>
      
      {/* Refined overlay with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10"
        style={{ mixBlendMode: 'multiply' }}
      ></div>
      
      {/* Content with parallax effect */}
      <div 
        className="relative z-20 text-center text-white max-w-3xl mx-auto px-4"
        style={{ transform: `translateY(${-scrollPosition * 0.03}px)` }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            Stay Positive And Prayerful
          </span>
        </h1>
        
        {/* Enhanced quote styling */}
        <div className="relative italic text-lg md:text-xl mb-10 p-6 rounded-lg">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl transform -skew-y-1"></div>
          <p className="relative">
            "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and heal their land."
            <span className="block mt-2 font-bold text-yellow-400"> - 2 Chronicles 7:14</span>
          </p>
        </div>
        
        {/* Primary CTA with enhanced hover effects */}
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <a 
            href="https://youtube.com/@staypositiveandprayerful?si=7pG7P7IGGf2rG8-r" 
            className="group bg-gradient-to-r from-yellow-600 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center hover:shadow-yellow-500/30 hover:shadow-xl"
          >
            <Users size={20} className="mr-2" />
            Join Our Community
            <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300"></span>
          </a>
          
          {/* Secondary CTA */}
          <a 
            href="#expolre" 
            className="text-yellow-300 hover:text-yellow-200 font-medium transition-all duration-300 underline decoration-transparent hover:decoration-yellow-400 underline-offset-4"
          >
            Explore Resources
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce mt-16 hidden md:block">
          <ChevronDown size={24} className="text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Hero;