import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#15171C] overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          opacity: 0.1
        }}
      ></div>
      
      {/* Cult.fit Style Blurred Color Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-green opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-green opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-green-light opacity-15 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            <span className="block mb-4">TRANSFORM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-green via-accent-green to-primary-green-light">
              YOUR LIMITS
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Experience the future of fitness with our premium training programs, 
            world-class facilities, and expert coaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/membership"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl min-w-[200px]"
            >
              GET STARTED
            </Link>
            
            <Link
              to="/services"
              className="flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
            >
              <Play className="h-5 w-5" />
              <span>EXPLORE</span>
            </Link>
          </div>
          
          {/* Hero Stats - Cult.fit Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wide">Years</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;