import React, { useState } from 'react';
import { Quote, CheckCircle } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, rating = 5, verified = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a consistent color based on the name
  const getInitialBgColor = (name) => {
    const colors = [
      'bg-purple-500', 'bg-blue-500', 'bg-green-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-red-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };
  
  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
        isHovered ? 'shadow-lg transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-6">
        <Quote 
          className="absolute -top-4 -left-2 text-purple-200 opacity-70" 
          size={32} 
        />
        <p className="italic text-gray-700 pl-6 text-lg">{quote}</p>
      </div>
      
      <div className="flex items-center mt-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-3 ${getInitialBgColor(name)}`}>
          {getInitials(name)}
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center">
            <h4 className="font-bold text-purple-800">{name}</h4>
            {verified && (
              <CheckCircle 
                size={16} 
                className="text-green-500 ml-2" 
                fill="white" 
              />
            )}
          </div>
          <small className="text-gray-500">{role}</small>
        </div>
        
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;