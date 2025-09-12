import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#171A26] border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-6 w-6 text-[#FF3278]" />
              <span className="text-xl font-black">
                HEAL<span className="text-[#FF3278]">FIT</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your body and mind with our state-of-the-art fitness center. 
              Professional trainers, modern equipment, and a supportive community await you.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#FF3278] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-[#FF3278] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-[#FF3278] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-[#FF3278] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-600 transition-colors">Services</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-green-600 transition-colors">Membership</Link></li>
              <li><Link to="/trainers" className="text-gray-300 hover:text-green-600 transition-colors">Trainers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Personal Training</li>
              <li className="text-gray-300">Group Classes</li>
              <li className="text-gray-300">Nutrition Coaching</li>
              <li className="text-gray-300">Weight Training</li>
              <li className="text-gray-300">Cardio Workouts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">080888 64412</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">info@healfitnesszone.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-300">3115, Hoysala Circle, Mysuru, Karnataka 570017</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Heal Fitness Zone. All rights reserved. Built with dedication to your fitness journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;