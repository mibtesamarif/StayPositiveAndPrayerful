import React, { useState, useEffect } from 'react';
import { Sun, Heart } from 'lucide-react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax transformation
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
    transition: 'transform 0.1s ease-out'
  };

  return (
    <header 
      className={`bg-gradient-to-r from-purple-800 to-blue-500 text-white py-8 lg:py-12 text-center rounded-b-3xl shadow-lg relative overflow-hidden transition-all duration-300 ${isHovered ? 'from-purple-700 to-blue-400 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-white opacity-${Math.floor(Math.random() * 3) + 2} animate-pulse`}
            style={{
              width: `${Math.floor(Math.random() * 8) + 4}px`,
              height: `${Math.floor(Math.random() * 8) + 4}px`,
              top: `${Math.floor(Math.random() * 100)}%`,
              left: `${Math.floor(Math.random() * 100)}%`,
              animationDuration: `${Math.floor(Math.random() * 4) + 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div style={parallaxStyle}>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Sun className={`h-6 w-6 text-yellow-300 transition-transform duration-500 ${isHovered ? 'rotate-45' : ''}`} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold relative group">
              Stay Positive And Prayerful
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ${isHovered ? 'w-full' : ''}`}></span>
            </h1>
            <Heart className={`h-6 w-6 text-red-300 transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`} />
          </div>
          <p className="mt-2 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Find inspiration, community, and resources to strengthen your faith journey
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;