import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone, CalendarHeart } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Enhanced helper for open/closed/about
function getBusinessStatus(now, hours) {
  const day = now.getDay(); // 0=Sun, ..., 6=Sat
  let range;
  if (day === 0) {
    range = hours.sunday.time;
  } else {
    range = hours.weekdays.time;
  }

  // Parse time like '5:30 AM - 9:30 PM'
  const [startStr, endStr] = range.split(' - ');
  const parse = (s) => {
    const [time, period] = s.trim().split(' ');
    let [h] = time.split(':').map(Number);
    const [, m] = time.split(':').map(Number);
    if (period === 'PM' && h !== 12) h += 12;
    if (period === 'AM' && h === 12) h = 0;
    return { h, m };
  };
  const { h: startH, m: startM } = parse(startStr);
  const { h: endH, m: endM } = parse(endStr);
  const start = new Date(now);
  start.setHours(startH, startM, 0, 0);
  const end = new Date(now);
  end.setHours(endH, endM, 0, 0);

  const ms30 = 30 * 60 * 1000;
  if (now < start && start - now <= ms30) {
    return { status: "aboutToOpen", color: "text-yellow-600" }; // within 30 min before open
  }
  if (now >= start && now <= end) {
    if (end - now <= ms30) {
      return { status: "aboutToClose", color: "text-yellow-700" }; // within 30 min to closing
    }
    return { status: "open", color: "text-green-700" };
  }
  return { status: "closed", color: "text-red-600" };
}

// Move static data outside component to prevent recreating on every render
const businessInfo = {
  hours: {
    weekdays: { label: 'Mon-Sat', time: '5:30 AM - 9:30 PM' },
    sunday: { label: 'Sunday', time: '7:00 AM - 2:00 PM' }
  },
  popularTimes: 'Peak Hours: 6-8 AM, 6-8 PM',
  phone: '080888 64412',
  address: '3115, Hoysala Circle, Mysuru'
};

const Home = () => {
  const services = [
    { title: 'Personal Training', description: 'One-on-one training sessions with certified personal trainers.', image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/services' },
    { title: 'Group Classes', description: 'High-energy group fitness classes for all fitness levels.', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/services' },
    { title: 'Strength Training', description: 'Build muscle and increase strength with our equipment.', image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/services' },
    { title: 'Yoga & Meditation', description: 'Traditional yoga practices for mind-body wellness and spiritual growth.', image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800', link: '/services' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Member since 2022', content: 'Heal Fitness Zone completely transformed my life. The yoga classes and personal trainers are amazing, and the community is so supportive!', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Rajesh Kumar', role: 'Member since 2021', content: 'Best fitness center I\'ve joined in Mysore. The Bollywood dance classes are fantastic and the equipment is world-class.', image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Anita Reddy', role: 'Member since 2023', content: 'The combination of traditional yoga and modern fitness training is perfect. The trainers understand Indian lifestyle and dietary needs.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  // Real-time status (updates every minute)
  const [status, setStatus] = useState({ status: "open", color: "text-green-700" });
  useEffect(() => {
    function updateStatus() {
      const now = new Date();
      // IST conversion
      const localOffset = now.getTimezoneOffset() * 60000;
      const istOffset = 5.5 * 60 * 60 * 1000;
      const ist = new Date(now.getTime() + istOffset + localOffset);
      setStatus(getBusinessStatus(ist, businessInfo.hours));
    }
    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array since businessInfo is now stable

  function getStatusMessage(statusCode) {
    switch (statusCode) {
      case "aboutToOpen":
        return "We're about to open!";
      case "open":
        return "We're Open!";
      case "aboutToClose":
        return "We're about to close!";
      case "closed":
      default:
        return "We're Closed";
    }
  }

  return (
    <div className="pt-20">

      <Hero />

      {/* Stats Section - Removed for cleaner Cult.fit style */}

      {/* Services Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">PROGRAMS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Choose from our range of premium fitness experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              <Link to="/services" className="inline-flex items-center px-8 py-4 text-lg font-bold">
                VIEW ALL PROGRAMS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">WHY CHOOSE US?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Trainers",
                    desc: "Our certified trainers bring years of experience and dedication to help you succeed."
                  },
                  {
                    title: "Modern Equipment",
                    desc: "State-of-the-art equipment maintained to the highest standards for your safety and results."
                  },
                  {
                    title: "Community Support",
                    desc: "Join a supportive community of like-minded individuals on their fitness journey."
                  }
                ].map((it, i) => (
                  <div className="flex items-start space-x-4" key={i}>
                    <div className="w-6 h-6 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{it.title}</h3>
                      <p className="text-gray-400">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern gym equipment"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-green text-black p-6 rounded-2xl">
                <div className="text-2xl font-black">24/7</div>
                <div className="text-sm font-medium uppercase tracking-wide">Access Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">WHAT MEMBERS SAY</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Real stories from real people who transformed their lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">VISIT US TODAY</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Your fitness journey starts here</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Hours Card */}
            <Card className="bg-[#15171C] border-gray-700 hover:border-primary-green transition-all duration-300">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <CardTitle className="text-2xl font-black text-white uppercase tracking-wide">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-full max-w-[220px] mx-auto text-gray-300 mb-4">
                  <div className="flex justify-between py-1 border-b border-gray-600">
                    <span className="font-semibold">{businessInfo.hours.weekdays.label}</span>
                    <span>{businessInfo.hours.weekdays.time}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-accent-green">{businessInfo.hours.sunday.label}</span>
                    <span className="text-accent-green">{businessInfo.hours.sunday.time}</span>
                  </div>
                </div>
                <Badge className="bg-primary-green text-black hover:bg-primary-green/90 mb-2">
                  <CalendarHeart className="w-4 h-4 mr-1" /> {businessInfo.popularTimes}
                </Badge>
                <div className={`block mt-2 font-semibold text-sm ${status.color}`}>
                  {getStatusMessage(status.status)}
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-[#15171C] border-gray-700 hover:border-primary-green transition-all duration-300">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <CardTitle className="text-2xl font-black text-white uppercase tracking-wide">
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-gray-300 mb-2 font-semibold">{businessInfo.address}</div>
                <CardDescription className="text-gray-400 mb-4">
                  Mysuru, Karnataka 570017
                </CardDescription>
                <Badge variant="secondary" className="bg-accent-green text-black hover:bg-accent-green/90">
                  Near Krishna Devaraya Circle
                </Badge>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-[#15171C] border-gray-700 hover:border-primary-green transition-all duration-300">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-primary-green mx-auto mb-4" />
                <CardTitle className="text-2xl font-black text-white uppercase tracking-wide">
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-2 font-semibold text-xl text-accent-green">{businessInfo.phone}</div>
                <CardDescription className="text-gray-400 mb-4">
                  Call for membership details
                </CardDescription>
                <Badge className="bg-primary-green text-black hover:bg-primary-green/90">
                  Online classes available
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO TRANSFORM?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of members who have already started their fitness journey with us
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              <Link to="/membership" className="px-8 py-4 font-black uppercase tracking-wide">
                View Membership Plans
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200">
              <Link to="/contact" className="px-8 py-4 font-black uppercase tracking-wide">
                Schedule a Tour
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
