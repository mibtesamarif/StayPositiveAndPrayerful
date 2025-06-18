import React from 'react';
import CtaBox from './CtaBox';

const CtaBoxes = () => {
  const ctaItems = [
    {
      title: "Prayer Requests",
      description: "Share your prayer needs with our community and receive support during challenging times.",
      buttonText: "Submit Request",
      link: "https://Christianchurchstore.com"
    },
    {
      title: "Volunteer Opportunities",
      description: "Use your gifts and talents to serve others and make a positive impact in our community.",
      buttonText: "Contact Us",
      link: "https://Christianchurchstore.com"
    },
    {
      title: "Pray, Support and Share",
      description: "Join us in our mission to empower communities through prayer, support, and shared resources.",
      buttonText: "Get Empowered",
      link: "https://ridgeway.vercel.app/"
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {ctaItems.map((item, index) => (
        <CtaBox 
          key={index}
          title={item.title}
          description={item.description}
          buttonText={item.buttonText}
          link={item.link}
        />
      ))}
    </section>
  );
};

export default CtaBoxes;