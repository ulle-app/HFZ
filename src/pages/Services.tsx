import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Users, Heart, Target, Clock, Zap, Apple, Shield, Activity, Music, Monitor, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one training sessions with certified personal trainers tailored to your specific goals.',
      features: ['Customized workout plans', '1-on-1 attention', 'Progress tracking', 'Nutritional guidance'],
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Group Fitness Classes',
      description: 'High-energy group classes that make working out fun and keep you motivated.',
      features: ['HIIT workouts', 'Yoga & Pilates', 'Spin classes', 'Bollywood Dance'],
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Target,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      features: ['Free weights area', 'Machine training', 'Powerlifting section', 'Functional training'],
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Cardio Workouts',
      description: 'Improve cardiovascular health with our variety of cardio equipment and programs.',
      features: ['Treadmills & ellipticals', 'Rowing machines', 'Stationary bikes', 'Stair climbers'],
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Apple,
      title: 'Nutrition Coaching',
      description: 'Professional nutrition guidance to complement your fitness journey and maximize results.',
      features: ['Meal planning', 'Dietary assessments', 'Supplement guidance', 'Lifestyle coaching'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum calorie burn and fitness improvement.',
      features: ['Circuit training', 'Tabata workouts', 'Metabolic conditioning', 'Fat burning focus'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Activity,
      title: 'Yoga & Meditation',
      description: 'Traditional and modern yoga practices for mind-body wellness and spiritual growth.',
      features: ['Hatha Yoga', 'Vinyasa Flow', 'Pranayama', 'Meditation sessions'],
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Music,
      title: 'Dance Fitness',
      description: 'Fun and energetic dance workouts including Bollywood, Bhangra, and Zumba.',
      features: ['Bollywood Dance', 'Bhangra Fitness', 'Classical Dance', 'Zumba'],
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Martial Arts',
      description: 'Traditional Indian and international martial arts for self-defense and fitness.',
      features: ['Kalaripayattu', 'Karate', 'Taekwondo', 'Self-defense'],
      image: 'https://images.pexels.com/photos/7045434/pexels-photo-7045434.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Monitor,
      title: 'Online Classes',
      description: 'Join our virtual fitness sessions from the comfort of your home with live streaming classes.',
      features: ['Live streaming workouts', 'Interactive sessions', 'Flexible scheduling', 'Home workout guidance'],
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const specialPrograms = [
    {
      icon: Clock,
      title: '6-Week Transformation',
      description: 'Intensive 6-week program combining training, nutrition, and lifestyle coaching.',
      duration: '6 weeks',
      sessions: '18 sessions'
    },
    {
      icon: Shield,
      title: 'Senior Fitness',
      description: 'Safe, effective fitness programs designed specifically for adults 55+.',
      duration: 'Ongoing',
      sessions: 'Flexible'
    },
    {
      icon: Target,
      title: 'Athletic Performance',
      description: 'Sport-specific training for athletes looking to improve their performance.',
      duration: '12 weeks',
      sessions: '36 sessions'
    }
  ];

  return (
    <div className="pt-16 bg-[#15171C] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#15171C] text-white relative overflow-hidden">
        {/* Cult.fit Style Blurred Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#FF3278] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FFDB17] opacity-15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">PROGRAMS</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-400">
            Comprehensive fitness solutions designed to transform your lifestyle
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">CORE PROGRAMS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-3">
                      <service.icon className="h-6 w-6 text-[#FF3278] mr-3" />
                      <h3 className="text-xl font-bold uppercase tracking-wide">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-xs bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized programs for specific goals and populations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                  <span><strong>Duration:</strong> {program.duration}</span>
                  <span><strong>Sessions:</strong> {program.sessions}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment and amenities for the ultimate fitness experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Equipment</h3>
                    <p className="text-gray-600">Latest fitness equipment from top brands, regularly maintained and updated.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Access</h3>
                    <p className="text-gray-600">Work out on your schedule with round-the-clock gym access for members.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean & Safe</h3>
                    <p className="text-gray-600">Rigorous cleaning protocols and safety measures to ensure your wellbeing.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern gym facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <GraduationCap className="h-16 w-16 text-white mr-4" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Become a Certified Fitness Professional</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              Join India's first culturally-integrated fitness trainer certification program. 
              Combine modern exercise science with traditional wellness practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹45,000</div>
                <div className="text-sm opacity-90">Starting from</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Job placement rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6-8</div>
                <div className="text-sm opacity-90">Months duration</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/certification"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Explore Certification Program
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-200"
              >
                Book Info Session
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Choose the service that fits your goals and start your transformation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/membership"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              View Membership Plans
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;