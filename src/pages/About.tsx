import React from 'react';
import { Users, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our equipment to our service.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated.'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Fitness is for everyone, regardless of age, ability, or fitness level.'
    },
    {
      icon: Award,
      title: 'Results',
      description: 'We are committed to helping you achieve real, lasting results.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Head Trainer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '15+ years of experience in fitness training and gym management.'
    },
    {
      name: 'Priya Patel',
      role: 'Nutrition Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified nutritionist with expertise in sports nutrition and weight management.'
    },
    {
      name: 'Arjun Singh',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former professional athlete turned fitness coach specializing in strength training.'
    }
  ];

  return (
    <div className="pt-16 bg-[#15171C] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#15171C] text-white relative overflow-hidden">
        {/* Cult.fit Style Blurred Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-green opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-green opacity-15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">ABOUT US</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-400">
            Your partners in transformation since 2014
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">OUR STORY</h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  HEALFIT was born from a simple belief: everyone deserves access to quality fitness facilities and expert guidance, regardless of their starting point.
                </p>
                <p>
                  Founded in 2014 by fitness enthusiast Rajesh Sharma, our gym started as a small community center with big dreams. Today, we've grown into one of the most trusted fitness destinations.
                </p>
                <p>
                  Our mission remains unchanged: to provide a welcoming space where people of all fitness levels can pursue their health goals with confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our gym facility"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-green text-white p-6 rounded-2xl">
                <div className="text-3xl font-black">10+</div>
                <div className="text-sm font-medium uppercase">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">OUR VALUES</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-green w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-green transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">LEADERSHIP TEAM</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{member.name}</h3>
                    <p className="text-primary-green font-semibold mb-3 text-sm uppercase">{member.role}</p>
                    <p className="text-gray-200 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">READY TO START?</h2>
          <p className="text-lg text-gray-400 mb-12">
            Join thousands who have transformed their lives with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/membership"
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              JOIN NOW
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;