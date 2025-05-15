import React, { useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const sectionRef = useRef(null);
  
  // Animate cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(card);
    });
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  const testimonials = [
    {
      quote: "The daily prayers and resources have completely transformed my spiritual life. I feel more connected to God and my community than ever before.",
      name: "Sarah Johnson",
      role: "Community Member",
      rating: 5,
      verified: true
    },
    {
      quote: "The Puzzle Club helps my family bond and learn scripture. My kids love it and look forward to participating every single week!",
      name: "Michael Thomas",
      role: "Puzzle Club Member",
      rating: 5,
      verified: true
    },
    {
      quote: "During a difficult time, this community's support kept me positive and prayerful. The free resources were a tremendous blessing.",
      name: "Rebecca Davis",
      role: "Birthday Blessing Club Member",
      rating: 4,
      verified: true
    },
    {
      quote: "The Bible study groups have given me new insights and perspectives I never considered before. It's strengthened my faith journey immensely.",
      name: "David Wilson",
      role: "Bible Study Participant",
      rating: 5,
      verified: false
    },
    {
      quote: "I've been able to incorporate the prayer practices into my daily routine, and it's made such a difference in how I approach challenges.",
      name: "Jennifer Adams",
      role: "New Member",
      rating: 4,
      verified: true
    },
    {
      quote: "Finding this community was exactly what I needed during a time of spiritual searching. The welcoming atmosphere made all the difference.",
      name: "Robert Chen",
      role: "Community Member",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-purple-50 bg-opacity-50" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">What Our Community Is Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These testimonials reflect the experiences of members who have been part of our spiritual journey. 
            We're blessed to have such a wonderful and supportive community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{transitionDelay: `${index * 100}ms`}}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
                verified={testimonial.verified}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;