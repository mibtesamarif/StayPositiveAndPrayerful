import React from 'react';
import BenefitCard from './BenefitCard';

const ClubSection = ({ 
  id, 
  title, 
  description, 
  benefits, 
  buttonText, 
  link, 
  isEven,
  icon: IconComponent,
  isPopular,
  isNew
}) => {
  const ClubIcon = IconComponent;
  
  return (
    <div 
      id={id} 
      className={`rounded-2xl p-8 mb-5 shadow-lg transition-all duration-500 transform hover:shadow-xl relative overflow-hidden ${
        isEven ? 'bg-white' : 'bg-blue-50'
      }`}
    >
      {/* Popular or New Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 rounded-bl-lg font-semibold z-10">
          POPULAR
        </div>
      )}
      
      {isNew && (
        <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg font-semibold z-10">
          NEW
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center mb-8">
        <div className="flex justify-center mb-6 md:mb-0 md:mr-6">
          <div className="bg-purple-100 p-4 rounded-full">
            <ClubIcon size={48} className="text-purple-600" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold text-purple-800 mb-2">{title}</h3>
          <p className="text-gray-600 md:max-w-3xl">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            iconName={benefit.iconName}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a
          href={link}
          className="inline-flex items-center bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105 hover:shadow-lg"
        >
          <ClubIcon size={18} className="mr-2" />
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ClubSection;