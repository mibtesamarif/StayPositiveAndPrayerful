
import React, { useState } from 'react';
import { Image, ArrowRight, Loader, AlertCircle } from 'lucide-react';

// FeatureBox Component with enhanced image handling
const FeatureBox = ({ image, title, description, buttonText, link, isNew }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div id='expolre' className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden relative">
      {/* Image container with consistent aspect ratio */}
      <div className="relative w-full h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader className="w-8 h-8 text-purple-600 animate-spin" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
            <AlertCircle className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Image unavailable</p>
          </div>
        ) : (
          <img
            src={image}
            alt={`${title} feature`}
            className={`w-full h-48 object-cover rounded-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>
      
      {/* New feature badge */}
      {isNew && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-sm">
          NEW
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-purple-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <a
        href={link}
        className="inline-flex items-center bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-2 px-5 rounded-full shadow transition transform hover:scale-105"
      >
        {buttonText}
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default FeatureBox;