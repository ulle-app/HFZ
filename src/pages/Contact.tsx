import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['080888 64412'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@healfitnesszone.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['3115, Hoysala Circle, High Tension Double Rd', 'Mysuru, Karnataka 570017'],
      description: 'Visit our modern facility'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5:00 AM - 11:00 PM', 'Sat-Sun: 6:00 AM - 10:00 PM'],
      description: ''
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with blurred circles */}
      <section className="relative py-32 bg-[#15171C] text-white overflow-hidden">
        {/* Blurred circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-green opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-accent-green opacity-15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-primary-green opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Connect with us today. 
            We're here to answer your questions and help you take the first step.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#15171C] border border-gray-700 rounded-2xl p-8 text-center group hover:border-primary-green transition-all duration-300 transform hover:scale-105">
                <div className="bg-primary-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-green transition-colors">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-4">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-400 mb-2">{detail}</p>
                ))}
                {info.description && (
                  <p className="text-sm text-gray-500 mt-3">{info.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">SEND MESSAGE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#171A26] border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#171A26] border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#171A26] border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="+91-98765-43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#171A26] border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                    >
                      <option value="" className="bg-[#171A26]">Select a subject</option>
                      <option value="membership" className="bg-[#171A26]">Membership Inquiry</option>
                      <option value="personal-training" className="bg-[#171A26]">Personal Training</option>
                      <option value="group-classes" className="bg-[#171A26]">Group Classes</option>
                      <option value="corporate" className="bg-[#171A26]">Corporate Wellness</option>
                      <option value="general" className="bg-[#171A26]">General Question</option>
                      <option value="feedback" className="bg-[#171A26]">Feedback</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#171A26] border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none placeholder-gray-500"
                    placeholder="Tell us about your fitness goals, questions, or how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 px-8 rounded-xl text-lg font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Location Info */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">FIND US</h2>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <iframe
                  src="https://www.google.com/maps?q=Heal+Fitness+Zone+3115+Hoysala+Circle+Mysuru+Karnataka+570017&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heal Fitness Zone Location"
                  className="w-full h-96"
                ></iframe>
              </div>
              
              {/* Location Card */}
              <div className="bg-[#171A26] border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-black text-white mb-6">VISIT OUR LOCATION</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green p-2 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">ADDRESS</p>
                      <p className="text-gray-400">3115, Hoysala Circle, Mysuru, Karnataka 570017</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-green p-2 rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white">HOURS</p>
                      <p className="text-gray-400">Mon-Fri: 5:00 AM - 11:00 PM</p>
                      <p className="text-gray-400">Sat-Sun: 6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-green p-2 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">PHONE</p>
                      <p className="text-gray-400">080888 64412</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & CTA */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">STAY CONNECTED</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Follow us on social media for fitness tips, success stories, and community updates
            </p>
            
            <div className="flex justify-center space-x-8 mb-16">
              <div className="bg-[#15171C] border border-gray-700 p-4 rounded-xl hover:border-primary-green transition-colors cursor-pointer group">
                <Facebook className="h-8 w-8 text-gray-400 group-hover:text-primary-green transition-colors" />
              </div>
              <div className="bg-[#15171C] border border-gray-700 p-4 rounded-xl hover:border-primary-green transition-colors cursor-pointer group">
                <Twitter className="h-8 w-8 text-gray-400 group-hover:text-primary-green transition-colors" />
              </div>
              <div className="bg-[#15171C] border border-gray-700 p-4 rounded-xl hover:border-primary-green transition-colors cursor-pointer group">
                <Instagram className="h-8 w-8 text-gray-400 group-hover:text-primary-green transition-colors" />
              </div>
              <div className="bg-[#15171C] border border-gray-700 p-4 rounded-xl hover:border-primary-green transition-colors cursor-pointer group">
                <Youtube className="h-8 w-8 text-gray-400 group-hover:text-primary-green transition-colors" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-green to-accent-green p-10 rounded-2xl inline-block max-w-lg">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6">READY TO START?</h3>
              <p className="text-white mb-8 text-lg">
                Schedule a free tour and consultation with one of our fitness experts
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transition-colors transform hover:scale-105">
                Schedule Free Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;