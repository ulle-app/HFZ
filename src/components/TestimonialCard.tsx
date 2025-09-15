import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, image }) => {
  return (
    <div className="group bg-black/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl hover:shadow-primary-green/25 transition-all duration-500 border border-gray-700/50 hover:bg-black transform hover:scale-105 hover:-rotate-1">
      <div className="flex mb-6 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-0.5 group-hover:animate-pulse" />
        ))}
      </div>
      
      <div className="relative mb-8">
        <div className="absolute -top-4 -left-2 text-6xl text-primary-green/40 font-serif">"</div>
        <p className="text-gray-300 text-lg leading-relaxed italic pl-8 pr-4">
          {content}
        </p>
        <div className="absolute -bottom-4 -right-2 text-6xl text-primary-green/40 font-serif rotate-180">"</div>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-primary-green/40 group-hover:ring-primary-green transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-green/20 to-transparent rounded-full group-hover:from-primary-green/40 transition-all duration-300"></div>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg group-hover:text-primary-green transition-colors duration-300">{name}</h4>
          <p className="text-primary-green font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;