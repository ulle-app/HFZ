import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Alex Rodriguez',
      role: 'Head Trainer & Founder',
      specialties: ['Strength Training', 'Athletic Performance', 'Weight Loss'],
      experience: '15+ years',
      certifications: ['NASM-CPT', 'CSCS', 'FMS'],
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former professional athlete turned fitness expert. Alex has helped thousands achieve their fitness goals through personalized training programs.',
      rating: 4.9,
      sessions: 5000
    },
    {
      name: 'Maria Santos',
      role: 'Nutrition & Wellness Coach',
      specialties: ['Nutrition Coaching', 'Weight Management', 'Lifestyle Coaching'],
      experience: '12+ years',
      certifications: ['RD', 'NASM-CPT', 'Precision Nutrition'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Registered dietitian and certified trainer specializing in sustainable nutrition strategies for optimal health and performance.',
      rating: 4.9,
      sessions: 3500
    },
    {
      name: 'David Kim',
      role: 'Strength & Conditioning Coach',
      specialties: ['Powerlifting', 'Olympic Lifting', 'Functional Training'],
      experience: '10+ years',
      certifications: ['NSCA-CSCS', 'USAW', 'FRC'],
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former competitive powerlifter with expertise in strength development and movement quality. Passionate about helping clients lift safely and effectively.',
      rating: 4.8,
      sessions: 4200
    },
    {
      name: 'Sarah Thompson',
      role: 'Group Fitness Instructor',
      specialties: ['HIIT', 'Yoga', 'Dance Fitness'],
      experience: '8+ years',
      certifications: ['ACE-GFI', 'RYT-200', 'ACSM'],
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Dynamic group fitness instructor who brings energy and motivation to every class. Specializes in creating inclusive, fun workout experiences.',
      rating: 4.9,
      sessions: 2800
    },
    {
      name: 'Michael Johnson',
      role: 'Sports Performance Coach',
      specialties: ['Athletic Training', 'Injury Prevention', 'Recovery'],
      experience: '14+ years',
      certifications: ['NSCA-CSCS', 'ATC', 'SFMA'],
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Licensed athletic trainer with extensive experience working with professional and amateur athletes. Expert in injury prevention and performance optimization.',
      rating: 4.8,
      sessions: 3900
    },
    {
      name: 'Jessica Chen',
      role: 'Senior Personal Trainer',
      specialties: ['Weight Loss', 'Muscle Building', 'Senior Fitness'],
      experience: '9+ years',
      certifications: ['NASM-CPT', 'NASM-CES', 'SilverSneakers'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Compassionate trainer specializing in working with diverse populations. Known for creating personalized programs that accommodate all fitness levels.',
      rating: 4.9,
      sessions: 3200
    }
  ];

  const philosophyPoints = [
    {
      title: "PERSONALIZED APPROACH",
      description: "Every program is tailored to your unique goals, fitness level, and lifestyle. No cookie-cutter solutions."
    },
    {
      title: "EVIDENCE-BASED METHODS", 
      description: "Our trainers use scientifically-proven methods and continuously update their knowledge with the latest research."
    },
    {
      title: "SUPPORTIVE ENVIRONMENT",
      description: "We create a positive, encouraging atmosphere where you feel comfortable challenging yourself and growing."
    }
  ];

  const expertiseAreas = [
    'Weight Loss & Fat Loss',
    'Muscle Building',
    'Strength Training',
    'Athletic Performance',
    'Injury Prevention',
    'Senior Fitness',
    'Nutrition Coaching',
    'Functional Movement'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with blurred circles */}
      <section className="relative py-32 bg-[#15171C] text-white overflow-hidden">
        {/* Blurred circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF3278] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-[#FFDB17] opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#FF3278] opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">MEET OUR TRAINERS</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our certified fitness professionals are here to guide, motivate, and support you 
            every step of the way on your fitness journey.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-[#15171C] border border-gray-700 hover:border-[#FF3278] transition-all duration-300">
                {/* Image with overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#FFDB17] fill-current" />
                    <span className="text-sm font-bold text-white">{trainer.rating}</span>
                  </div>
                  
                  {/* Bottom overlay with name and role */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-1">{trainer.name}</h3>
                    <p className="text-[#FF3278] font-bold text-lg">{trainer.role}</p>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">{trainer.bio}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-black text-white mb-3 text-sm uppercase tracking-wide">SPECIALTIES</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-[#171A26] border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:border-[#FF3278] transition-colors"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-[#FFDB17]" />
                      <span className="font-semibold">{trainer.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-[#FF3278]" />
                      <span className="font-semibold">{trainer.sessions.toLocaleString()}+ sessions</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <h4 className="font-black text-white mb-2 text-sm uppercase tracking-wide">CERTIFICATIONS</h4>
                    <p className="text-sm text-gray-400">{trainer.certifications.join(', ')}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-white text-black py-3 px-6 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transition-colors transform hover:scale-105">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">OUR PHILOSOPHY</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every trainer at Heal Fitness Zone shares our core commitment to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="bg-[#171A26] border border-gray-700 rounded-2xl p-8 text-center group hover:border-[#FF3278] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <Users className="h-8 w-8 text-white" />}
                  {index === 1 && <Award className="h-8 w-8 text-white" />}
                  {index === 2 && <Star className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-black text-white mb-4">{point.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">AREAS OF EXPERTISE</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our trainers specialize in various fitness disciplines to meet all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="bg-[#15171C] border border-gray-700 p-6 rounded-2xl text-center hover:border-[#FF3278] transition-all duration-300 group">
                <h3 className="font-black text-white mb-3 group-hover:text-[#FF3278] transition-colors">{expertise}</h3>
                <p className="text-sm text-gray-400">
                  Expert guidance and proven strategies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO START?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule your complimentary consultation and discover how our trainers can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200">
              View Training Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;