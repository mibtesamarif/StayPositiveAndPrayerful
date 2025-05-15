import React, { useState, useEffect } from 'react';
import { Puzzle, Gift, Cake, Youtube, Heart } from 'lucide-react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  // Determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'puzzle-club',
        'free-gifts',
        'birthday-blessing',
        'youtube',
        'support'
      ];

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink('#' + currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items with their icons
  const navItems = [
    { href: '#puzzle-club', label: 'Puzzle Club', icon: <Puzzle size={18} /> },
    { href: '#free-gifts', label: 'Free Gifts', icon: <Gift size={18} /> },
    { href: '#birthday-blessing', label: 'Birthday Blessing Club', icon: <Cake size={18} /> },
    { href: '#youtube', label: 'YouTube Channel', icon: <Youtube size={18} /> },
    { href: '#support', label: 'Support Our Mission', icon: <Heart size={18} /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-50 to-white py-4 shadow-lg rounded-xl mt-5 overflow-x-auto">
      <ul className="flex justify-center flex-wrap lg:flex-nowrap list-none min-w-full px-2">
        {navItems.map((item) => (
          <li key={item.href} className="mx-2 my-1 md:mx-4">
            <a
              href={item.href}
              className={`flex items-center text-purple-800 font-semibold text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-100 hover:scale-105 hover:shadow-sm relative ${
                activeLink === item.href ? 'bg-purple-100 font-bold' : ''
              }`}
              onClick={() => {
                setActiveLink(item.href);
              }}
            >
              <span className="mr-2 text-purple-600">{item.icon}</span>
              <span className="relative">
                {item.label}
                <span 
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-purple-600 transform origin-left transition-transform duration-300 ${
                    activeLink === item.href ? 'scale-x-100' : 'scale-x-0'
                  } ${
                    activeLink !== item.href ? 'group-hover:scale-x-100' : ''
                  }`}
                ></span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;