import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, link }) => {
  return (
    <Link to={link}>
      <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <div className="relative h-80">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-sm text-gray-200 mb-4 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center text-sm font-medium group-hover:text-[#FF3278] transition-colors duration-300">
              <span>EXPLORE</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;