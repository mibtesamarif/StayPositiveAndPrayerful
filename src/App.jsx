import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Clubs from './components/Clubs';
import YoutubeSection from './components/YoutubeSection';
import Testimonials from './components/Testimonials';
import SupportSection from './components/SupportSection';
import CtaBoxes from './components/CtaBoxes';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Header />
      
      <div className="w-full max-w-7xl mx-auto px-4">
        <Hero />
        <Navigation />
        <Features />
        <Clubs />
        <YoutubeSection />
        <Testimonials />
        <SupportSection />
        <CtaBoxes />
        <Newsletter />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;