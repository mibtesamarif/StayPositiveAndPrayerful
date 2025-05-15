import React from 'react';
import FeatureBox from './FeatureBox';

// Features Component with section title and intro
const Features = () => {
  const features = [
    {
      image: "https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg",
      fallbackImage: "/api/placeholder/400/300",
      title: "Daily Prayer",
      description: "Start each day with our guided prayer sessions and reflections to center your heart and mind.",
      buttonText: "Learn More",
      link: "https://youtube.com/@staypositiveandprayerful?si=7pG7P7/GGf2rG8-r",
      isNew: true
    },
    {
      image: "https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg",
      fallbackImage: "/api/placeholder/400/300",
      title: "Bible Study",
      description: "Dive deeper into scripture with our comprehensive study guides and discussion forums.",
      buttonText: "Join Study",
      link: "https://helpusjesus.quora.com/"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
      fallbackImage: "/api/placeholder/400/300",
      title: "Pray, Support and Share",
      description: "Join us in our mission to uplift and empower communities through prayer, support, and shared resources.",
      buttonText: "Get Empowered",
      link: "https://ridgeway.vercel.app/"
    }
  ];

  // Function to get an appropriate image source
  const getImageSource = (feature) => {
    // Note: In a real implementation, you'd handle environment variables or config
    // to determine if external images should be used or not
    
    // For demo purposes, we're using the placeholder API as a fallback
    // In a production environment, you would handle this differently
    try {
      // Return the actual image URL or fallback to placeholder
      return feature.image || feature.fallbackImage;
    } catch {
      return feature.fallbackImage;
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Grow Your Faith</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of resources designed to help you deepen your spiritual journey and connect with others.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              image={getImageSource(feature)}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              link={feature.link}
              isNew={feature.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;