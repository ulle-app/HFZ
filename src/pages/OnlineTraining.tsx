import React, { useState } from 'react';
import { Play, Users, Clock, Star, Download, Wifi, Calendar, CheckCircle, Monitor, Smartphone } from 'lucide-react';

const OnlineTraining = () => {
  const [selectedPackage, setSelectedPackage] = useState('Premium Online');

  const onlinePrograms = [
    {
      id: 1,
      title: 'Live Yoga Sessions',
      instructor: 'Priya Sharma',
      description: 'Traditional Hatha and Vinyasa yoga classes streamed live from our Mysore studio',
      duration: '60 minutes',
      schedule: 'Mon, Wed, Fri - 6:30 AM & 7:00 PM',
      price: '₹1,999/month',
      participants: 45,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Live interactive sessions', 'Pose corrections', 'Meditation guidance', 'Sanskrit mantras'],
      level: 'All levels'
    },
    {
      id: 2,
      title: 'Bollywood Dance Fitness',
      instructor: 'Rajesh Kumar',
      description: 'High-energy dance workouts featuring popular Bollywood and regional hits',
      duration: '45 minutes',
      schedule: 'Tue, Thu, Sat - 7:30 PM',
      price: '₹1,499/month',
      participants: 67,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Latest Bollywood hits', 'Regional dance styles', 'Cardio workouts', 'Cultural fusion'],
      level: 'Beginner to Intermediate'
    },
    {
      id: 3,
      title: 'HIIT & Strength Training',
      instructor: 'Arjun Singh',
      description: 'Intense home workouts using minimal equipment for maximum results',
      duration: '30 minutes',
      schedule: 'Mon-Sat - 6:00 AM',
      price: '₹2,499/month',
      participants: 38,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Equipment-free workouts', 'Progressive difficulty', 'Strength building', 'Fat burning focus'],
      level: 'Intermediate to Advanced'
    },
    {
      id: 4,
      title: 'Family Fitness Fun',
      instructor: 'Anita Reddy',
      description: 'Fun fitness activities that the whole family can enjoy together at home',
      duration: '30 minutes',
      schedule: 'Weekends - 10:00 AM',
      price: '₹999/month',
      participants: 52,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Child-friendly exercises', 'Family bonding', 'Game-based fitness', 'All ages welcome'],
      level: 'All levels'
    }
  ];

  const packages = [
    {
      name: 'Basic Online',
      price: '₹999',
      duration: 'per month',
      features: [
        'Access to 2 classes per week',
        'Basic workout library',
        'Mobile app access',
        'Community support',
        'Progress tracking'
      ],
      popular: false
    },
    {
      name: 'Premium Online',
      price: '₹1,999',
      duration: 'per month',
      features: [
        'Unlimited class access',
        'Complete workout library',
        'Personal diet consultation',
        'One-on-one sessions (2/month)',
        'Priority support',
        'Offline video downloads'
      ],
      popular: true
    },
    {
      name: 'Family Package',
      price: '₹2,999',
      duration: 'per month',
      features: [
        'Up to 4 family members',
        'All premium features',
        'Family challenges',
        'Customized family plans',
        'Weekend family sessions',
        'Nutrition guidance for all'
      ],
      popular: false
    }
  ];

  const features = [
    { icon: Monitor, title: 'HD Live Streaming', description: 'Crystal clear video quality with professional camera setup from our Mysore studio' },
    { icon: Smartphone, title: 'Multi-Device Access', description: 'Join from any device - phone, tablet, laptop, or smart TV for maximum convenience' },
    { icon: Users, title: 'Interactive Sessions', description: 'Real-time interaction with trainers, form corrections, and personalized guidance' },
    { icon: Download, title: 'Offline Access', description: 'Download classes for offline viewing when internet connectivity is limited' },
    { icon: Calendar, title: 'Flexible Scheduling', description: 'Multiple time slots to fit your schedule, with morning and evening options' },
    { icon: Wifi, title: 'Low Bandwidth Option', description: 'Optimized streaming for slower internet connections common in Indian households' }
  ];

  const testimonials = [
    { name: 'Meera Patel', location: 'Mysore', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300', testimonial: 'The online yoga classes helped me maintain my practice during the lockdown. The instructor\'s guidance through the screen felt just like being in the studio.', program: 'Live Yoga Sessions' },
    { name: 'Vikram Singh', location: 'Mysore', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300', testimonial: 'HIIT classes at home saved me commute time while giving me incredible results. Lost 8kg in 3 months!', program: 'HIIT & Strength Training' },
    { name: 'Sunita Sharma', location: 'Mysore', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300', testimonial: 'Bollywood dance classes are so much fun! My kids join in sometimes and it\'s become our family activity.', program: 'Bollywood Dance Fitness' }
  ];

  const stats = [
    { icon: Users, label: 'Online Members', value: '500+' },
    { icon: Play, label: 'Classes Conducted', value: '2000+' },
    { icon: Star, label: 'Average Rating', value: '4.8/5' },
    { icon: Clock, label: 'Hours Trained', value: '10,000+' }
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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">ONLINE TRAINING</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Train from anywhere with our live-streamed fitness classes. 
            Professional instruction, community support, and flexible scheduling for modern lifestyles.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Programs */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">LIVE PROGRAMS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our expert trainers for live, interactive fitness sessions from the comfort of your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onlinePrograms.map((program) => (
              <div key={program.id} className="group bg-[#171A26] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FF3278] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-[#FF3278] px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-black uppercase tracking-wide">Live</span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#FFDB17] fill-current" />
                    <span className="text-sm font-bold text-white">{program.rating}</span>
                  </div>
                  
                  {/* Bottom info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-2">{program.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-300" />
                        <span className="text-sm text-gray-300">{program.participants} members</span>
                      </div>
                      <div className="text-[#FFDB17] font-black">{program.price}</div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-gray-300 text-sm mb-2">with {program.instructor}</p>
                    <p className="text-gray-400 leading-relaxed mb-4">{program.description}</p>
                  </div>

                  {/* Schedule & Duration */}
                  <div className="bg-[#15171C] border border-gray-600 rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="h-4 w-4 text-[#FF3278]" />
                          <span className="font-semibold text-white">Schedule</span>
                        </div>
                        <p className="text-gray-400">{program.schedule}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="h-4 w-4 text-[#FFDB17]" />
                          <span className="font-semibold text-white">Duration</span>
                        </div>
                        <p className="text-gray-400">{program.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-black text-white mb-3 uppercase tracking-wide">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-[#FFDB17] flex-shrink-0" />
                          <span className="text-xs text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-white text-black py-3 px-6 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Join Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">TRAINING PACKAGES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                onClick={() => setSelectedPackage(pkg.name)}
                className={`bg-[#15171C] border border-gray-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedPackage === pkg.name
                    ? 'ring-2 ring-[#FF3278] border-[#FF3278]'
                    : pkg.popular
                      ? 'ring-2 ring-[#FFDB17] border-[#FFDB17]'
                      : 'hover:border-[#FF3278]'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] text-white text-center py-3 font-black uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-8">
                    {pkg.price}
                    <span className="text-lg font-normal text-gray-400">/{pkg.duration}</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#FFDB17] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-xl font-black uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                    selectedPackage === pkg.name
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-[#171A26] border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}>
                    {selectedPackage === pkg.name ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">TECH FEATURES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets fitness for the ultimate online training experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#171A26] border border-gray-700 rounded-2xl p-8 text-center group hover:border-[#FF3278] transition-all duration-300">
                <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">SUCCESS STORIES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real members sharing their online training journey and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#15171C] border border-gray-700 rounded-2xl p-8 hover:border-[#FF3278] transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-black text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                    <div className="bg-[#FF3278] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mt-1 inline-block">
                      {testimonial.program}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">START TRAINING TODAY</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of members who are achieving their fitness goals from home. 
            Professional guidance, flexible scheduling, and proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200">
              View Schedule
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineTraining;