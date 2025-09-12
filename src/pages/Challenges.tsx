import React from 'react';
import { Trophy, Calendar, Users, Star, Clock, Award, TrendingUp } from 'lucide-react';

const Challenges = () => {
  const currentChallenges = [
    {
      id: 1,
      title: '30-Day Yoga Challenge',
      description: 'Traditional Hatha and Vinyasa yoga practice for mind-body wellness',
      duration: '30 days',
      participants: 156,
      startDate: '2024-01-15',
      endDate: '2024-02-14',
      difficulty: 'Beginner to Intermediate',
      prize: '₹5,000 voucher + yoga mat',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      daysLeft: 12,
      requirements: ['Daily 30-min practice', 'Weekly progress photos', 'Meditation tracking'],
      benefits: ['Improved flexibility', 'Stress reduction', 'Better sleep quality', 'Mental clarity']
    },
    {
      id: 2,
      title: 'Bollywood Dance Fitness',
      description: 'High-energy dance workouts featuring popular Bollywood hits',
      duration: '21 days',
      participants: 89,
      startDate: '2024-01-20',
      endDate: '2024-02-10',
      difficulty: 'All levels',
      prize: '₹3,000 voucher + premium playlist',
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Active',
      daysLeft: 8,
      requirements: ['3 sessions per week', 'Dance video submission', 'Social media sharing'],
      benefits: ['Cardio improvement', 'Coordination skills', 'Cultural connection', 'Fun fitness']
    },
    {
      id: 3,
      title: 'Mysore Marathon Prep',
      description: 'Prepare for the annual Mysore Marathon with structured training',
      duration: '60 days',
      participants: 234,
      startDate: '2024-02-01',
      endDate: '2024-04-01',
      difficulty: 'Intermediate to Advanced',
      prize: '₹10,000 + marathon kit',
      image: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Registration Open',
      daysLeft: 45,
      requirements: ['Weekly long runs', 'Speed work sessions', 'Recovery tracking'],
      benefits: ['Endurance building', 'Mental toughness', 'Community support', 'Marathon readiness']
    }
  ];

  const upcomingChallenges = [
    {
      title: 'Traditional Strength Challenge',
      description: 'Ancient Indian exercises combined with modern strength training',
      startDate: '2024-03-01',
      duration: '45 days',
      estimatedParticipants: 150,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Ayurvedic Wellness Program',
      description: 'Holistic health approach with diet, yoga, and lifestyle changes',
      startDate: '2024-03-15',
      duration: '30 days',
      estimatedParticipants: 100,
      image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Family Fitness Challenge',
      description: 'Fun activities for the whole family to stay fit together',
      startDate: '2024-04-01',
      duration: '21 days',
      estimatedParticipants: 80,
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const pastWinners = [
    {
      name: 'Priya Sharma',
      challenge: 'Weight Loss Challenge',
      achievement: 'Lost 15kg in 60 days',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'The community support and structured program helped me achieve what I thought was impossible!'
    },
    {
      name: 'Rajesh Kumar',
      challenge: 'Strength Building Challenge',
      achievement: 'Doubled his bench press',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'The combination of traditional and modern training methods gave amazing results.'
    },
    {
      name: 'Anita Reddy',
      challenge: 'Flexibility & Yoga Challenge',
      achievement: 'Achieved advanced poses',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      testimonial: 'My flexibility and mental peace improved tremendously through this challenge.'
    }
  ];

  const challengeStats = [
    { icon: Users, label: 'Active Participants', value: '500+' },
    { icon: Trophy, label: 'Challenges Completed', value: '48' },
    { icon: Award, label: 'Success Rate', value: '87%' },
    { icon: TrendingUp, label: 'Average Improvement', value: '65%' }
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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">FITNESS CHALLENGES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our exciting fitness challenges designed for the Mysore community. 
            Push your limits, win amazing prizes, and transform your lifestyle with like-minded individuals.
          </p>
        </div>
      </section>

      {/* Challenge Stats */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {challengeStats.map((stat) => (
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

      {/* Current Challenges */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">ACTIVE CHALLENGES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join these ongoing challenges and be part of Mysore's most active fitness community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentChallenges.map((challenge) => (
              <div key={challenge.id} className="group bg-[#171A26] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FF3278] transition-all duration-300">
                <div className="relative">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide ${
                      challenge.status === 'Active' 
                        ? 'bg-[#FF3278] text-white' 
                        : 'bg-[#FFDB17] text-black'
                    }`}>
                      {challenge.status}
                    </span>
                  </div>
                  
                  {/* Days Left Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-black">
                      {challenge.daysLeft} days left
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <h3 className="text-2xl font-black text-white leading-tight">{challenge.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-6 leading-relaxed">{challenge.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-[#FF3278]" />
                      <span className="text-sm font-semibold text-gray-300">{challenge.participants} joined</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-[#FFDB17]" />
                      <span className="text-sm font-semibold text-gray-300">{challenge.duration}</span>
                    </div>
                  </div>

                  {/* Prize Info */}
                  <div className="bg-[#15171C] border border-gray-600 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="h-5 w-5 text-[#FFDB17]" />
                      <span className="text-sm font-black text-white uppercase tracking-wide">Prize</span>
                    </div>
                    <p className="text-[#FF3278] font-bold">{challenge.prize}</p>
                    <p className="text-xs text-gray-400 mt-1">Difficulty: {challenge.difficulty}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="text-sm font-black text-white mb-3 uppercase tracking-wide">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {challenge.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="h-3 w-3 text-[#FFDB17] flex-shrink-0" />
                          <span className="text-xs text-gray-400">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-white text-black py-4 px-6 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    {challenge.status === 'Active' ? 'Join Challenge' : 'Register Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Challenges */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">COMING SOON</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay tuned for these exciting upcoming challenges. Register early to secure your spot!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingChallenges.map((challenge) => (
              <div key={index} className="bg-[#15171C] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FF3278] transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-black text-white mb-1">{challenge.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{challenge.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-[#FF3278]" />
                        <span className="text-sm text-gray-400">Starts</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{challenge.startDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-[#FFDB17]" />
                        <span className="text-sm text-gray-400">Duration</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{challenge.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-[#FF3278]" />
                        <span className="text-sm text-gray-400">Expected</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{challenge.estimatedParticipants}+</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#171A26] border-2 border-white text-white py-3 px-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
                    Notify Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">HALL OF FAME</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet our past challenge winners who achieved incredible results through dedication and community support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWinners.map((winner) => (
              <div key={index} className="bg-[#171A26] border border-gray-700 rounded-2xl p-8 text-center group hover:border-[#FF3278] transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF3278] to-[#FFDB17] p-2 rounded-full">
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">{winner.name}</h3>
                <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide mb-4 inline-block">
                  {winner.challenge}
                </div>
                <div className="text-[#FFDB17] font-black text-lg mb-4">{winner.achievement}</div>
                <p className="text-gray-300 text-sm italic leading-relaxed">"{winner.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO CHALLENGE YOURSELF?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join Mysore's most supportive fitness community and discover what you're capable of achieving. 
            Every challenge is an opportunity to become a better version of yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Join Active Challenge
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200">
              View All Challenges
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;