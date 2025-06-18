import React from 'react';
import { Mail, Phone, HelpCircle, FileText, Heart, Award, Youtube, Gift, Calendar, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-2xl mt-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* Column 1: Core Navigation/Quick Links */}
        <div className="footer-column">
          <h4 className="text-yellow-400 mb-5 text-xl font-semibold flex items-center">
            <Award className="mr-2 w-5 h-5" />
            Core Navigation
          </h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#puzzle-club" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Award className="mr-2 w-4 h-4" />Puzzle Club
            </a></li>
            <li><a href="#free-gifts" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Gift className="mr-2 w-4 h-4" />Free Gifts
            </a></li>
            <li><a href="#birthday-blessing" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Calendar className="mr-2 w-4 h-4" />Birthday Blessing Club
            </a></li>
            <li><a href="#youtube" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Youtube className="mr-2 w-4 h-4" />YouTube Channel
            </a></li>
            <li><a href="#support" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <Heart className="mr-2 w-4 h-4" />Support Our Mission
            </a></li>
          </ul>
        </div>
        
        {/* Column 2: Resources & Community */}
        <div className="footer-column">
          <div className="mb-6">
            <h4 className="text-yellow-400 mb-3 text-xl font-semibold flex items-center">
              <FileText className="mr-2 w-5 h-5" />
              Resources
            </h4>
            <ul className="space-y-2">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Daily Devotionals</a></li> */}
              <li><a href="https://Christianchurchstore.com">Prayer Guides</a></li>
              <li><a href="https://v.lemon8-app.com/al/OgMFwvhfbm">Bible Study Materials</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-Books</a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow-400 mb-3 text-xl font-semibold flex items-center">
              <Users className="mr-2 w-5 h-5" />
              Community
            </h4>
            <ul className="space-y-2">
              <li><a href="https://www.youtube.com/@staypositiveandprayerful" className="text-gray-400 hover:text-white transition-colors">Prayer Requests</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discussion Forums</a></li> */}
              <li><a href="https://ridgeway.vercel.app/" className="text-gray-400 hover:text-white transition-colors">Pray, Support and Share</a></li>
            </ul>
          </div>
        </div>
        
        {/* Column 3: Contact & Legal */}
        <div className="footer-column">
          <h4 className="text-yellow-400 mb-5 text-xl font-semibold flex items-center">
            <Mail className="mr-2 w-5 h-5" />
            Contact & Legal
          </h4>
          
          <div className="mb-6">
            <p className="text-gray-300 mb-2">Get in touch with us:</p>
            <a href="mailto:contact@staypositive.org" className="text-gray-400 hover:text-white transition-colors flex items-center mb-2">
              <Mail className="mr-2 w-4 h-4" />
              Investbuyown@gmail.com
            </a>
            <a href="tel:+18005551234" className="text-gray-400 hover:text-white transition-colors flex items-center mb-4">
              <Phone className="mr-2 w-4 h-4" />
              +1 248 467 2048
            </a>
          </div>
          
          {/* <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
              <HelpCircle className="mr-2 w-4 h-4" />Support & FAQ
            </a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
          </ul> */}
        </div>
      </div>
      
      {/* Social Media Icons */}
      <div className="border-t border-gray-800 pt-6 pb-4">
        <div className="flex justify-center mb-5">
          <div className="flex space-x-4">
            <a 
              href="#" 
              aria-label="Facebook"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.151 0-3.507.014-4.735.07-2.275.104-3.321 1.189-3.425 3.425-.057 1.228-.07 1.583-.07 4.735 0 3.151.013 3.507.07 4.735.104 2.235 1.149 3.321 3.425 3.425 1.228.057 1.584.07 4.735.07 3.152 0 3.507-.014 4.736-.07 2.235-.104 3.32-1.19 3.425-3.425.057-1.228.07-1.584.07-4.735 0-3.152-.014-3.507-.07-4.735-.105-2.237-1.19-3.321-3.425-3.425-1.229-.057-1.584-.07-4.736-.07zm2.445 3.026a1.168 1.168 0 100 2.336 1.168 1.168 0 000-2.336zm-6.585 5.48a5.586 5.586 0 117.792 5.119 5.586 5.586 0 01-7.792-5.119zm1.149 0a4.438 4.438 0 108.276-2.248 4.438 4.438 0 00-8.276 2.248z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666
                2.473c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616v.06a4.921 4.921 0 003.946 4.827 4.93 4.93 0 01-2.212.085 4.92 4.92 0 004.604 3.417 9.863 9.863 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="YouTube"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Pinterest"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="border-t border-gray-800 pt-6">
        <p className="text-center text-gray-400 text-sm">
          © 2025 Stay Positive And Prayerful. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;