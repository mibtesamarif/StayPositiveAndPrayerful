import React from 'react';
import { Heart, ExternalLink, Download, Users, Globe } from 'lucide-react';

const SupportSection = () => {
  return (
    <section id="support" className="bg-gradient-to-r from-green-600 to-blue-700 py-12 px-4 text-center rounded-2xl my-10 text-white shadow-xl">
      <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Help us continue providing free resources, prayer support, and community-building opportunities for people around the world. Your donation makes a difference!
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
        <a
          href="https://www.gofundme.com/f/aid-jason-ridgeways-journey-to-recovery"
          className="bg-white text-purple-800 hover:bg-yellow-400 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-xl inline-flex items-center animate-pulse hover:animate-none"
        >
          <Heart className="mr-2 h-5 w-5" />
          Donate Now
        </a>
        
        <a
          href="https://gofund.me/0d1c112a"
          className="bg-white text-green-800 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 text-xl inline-flex items-center"
        >
          <Users className="mr-2 h-5 w-5" />
          Community Empowerment
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Access Free Resources</h3>
          <p className="text-lg mb-4">
            Visit our RGI website for downloadable resources and to learn more about our mission.
          </p>
          <a
            href="https://ridgeway.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-yellow-200 font-medium transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resources
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="bg-white bg-opacity-20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Explore Our Platform</h3>
          <p className="text-lg mb-4">
            Discover additional resources and community features on our comprehensive platform.
          </p>
          <a
            href="https://ornate-kleicha-79269e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-yellow-200 font-medium transition-colors"
          >
            <Globe className="mr-2 h-5 w-5" />
            Visit Platform
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;