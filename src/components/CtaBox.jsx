import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBox = ({ title, description, buttonText, link }) => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-purple-600 text-white p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Icon */}
      {/* Removed unused Icon prop */}
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-6 text-white/90 text-sm">{description}</p>
      
      {/* Button */}
      <a
        href={link}
        className="group bg-white text-purple-800 font-semibold py-2 px-6 rounded-full inline-flex items-center justify-center transition transform hover:scale-105 hover:bg-gray-100 hover:shadow-md hover:border-white/20 border border-transparent"
      >
        {buttonText}
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default CtaBox;