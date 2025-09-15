import React from 'react';
import { Star, Calendar, Target, TrendingUp } from 'lucide-react';

const Transformations = () => {
  const transformations = [
    {
      name: 'Priya Sharma',
      age: 28,
      location: 'Mysore, Karnataka',
      program: '6-Month Weight Loss Program',
      duration: '6 months',
      weightLoss: '25 kg',
      beforeImage: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'After my marriage, I gained significant weight and lost confidence. The team at Heal Fitness Zone created a personalized program combining traditional yoga with modern strength training. The nutrition guidance helped me understand Indian cooking in a healthier way.',
      achievements: ['Lost 25kg', 'Reduced BP medication', 'Improved energy levels', 'Fit into pre-marriage clothes'],
      testimonial: 'The combination of Bollywood dance and strength training made fitness fun for me. I never thought I could enjoy working out!'
    },
    {
      name: 'Rajesh Kumar',
      age: 35,
      location: 'Mysore, Karnataka',
      program: 'Strength & Muscle Building',
      duration: '8 months',
      weightLoss: 'Gained 8kg muscle',
      beforeImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1638393/pexels-photo-1638393.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'As a software engineer, I was dealing with back pain and weak posture. The martial arts program and functional training not only built my strength but also improved my overall health and confidence.',
      achievements: ['Gained 8kg lean muscle', 'Eliminated back pain', 'Increased bench press by 40kg', 'Improved posture'],
      testimonial: 'Learning Kalaripayattu alongside modern gym training gave me a complete fitness experience rooted in our culture.'
    },
    {
      name: 'Anita Reddy',
      age: 42,
      location: 'Mysore, Karnataka',
      program: 'Holistic Wellness Program',
      duration: '10 months',
      weightLoss: '18 kg',
      beforeImage: 'https://images.pexels.com/photos/3768897/pexels-photo-3768897.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/3768900/pexels-photo-3768900.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'Post-pregnancy weight and hormonal changes affected my health. The yoga and meditation program, combined with nutritional guidance for vegetarian meals, helped me regain my health and confidence.',
      achievements: ['Lost 18kg sustainably', 'Improved flexibility', 'Better sleep quality', 'Reduced stress levels'],
      testimonial: 'The holistic approach addressing mind, body, and nutrition made all the difference in my transformation journey.'
    },
    {
      name: 'Arjun Singh',
      age: 26,
      location: 'Mysore, Karnataka',
      program: 'Athletic Performance',
      duration: '5 months',
      weightLoss: 'Improved performance by 40%',
      beforeImage: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      story: 'As a cricket player, I needed to improve my agility and endurance. The sports-specific training program helped me enhance my game performance significantly.',
      achievements: ['40% improvement in sprint time', 'Increased batting average', 'Better injury prevention', 'Enhanced agility'],
      testimonial: 'The cricket-specific training program helped me take my game to the next level. Now I am playing at district level!'
    }
  ];

  const stats = [
    { icon: Target, label: 'Success Rate', value: '95%' },
    { icon: TrendingUp, label: 'Average Weight Loss', value: '20kg' },
    { icon: Calendar, label: 'Average Duration', value: '6 months' },
    { icon: Star, label: 'Client Satisfaction', value: '4.8/5' }
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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">SUCCESS STORIES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real people, real results. Discover inspiring transformation stories from our Mysore community
            who achieved their fitness goals with our personalized programs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-primary-green to-accent-green w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">AMAZING RESULTS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every transformation is unique. Here are some inspiring journeys from our Heal Fitness Zone family.
            </p>
          </div>

          <div className="space-y-20">
            {transformations.map((transformation, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Before/After Images */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Before/After Comparison */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative group">
                        <img
                          src={transformation.beforeImage}
                          alt={`${transformation.name} before`}
                          className="w-full h-80 object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-lg font-black">BEFORE</span>
                        </div>
                      </div>
                      <div className="relative group">
                        <img
                          src={transformation.afterImage}
                          alt={`${transformation.name} after`}
                          className="w-full h-80 object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-primary-green text-white px-4 py-2 rounded-full text-lg font-black">AFTER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Stats Card */}
                  <div className="bg-[#171A26] border border-gray-700 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-black text-primary-green mb-2">{transformation.duration}</div>
                        <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Duration</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black text-accent-green mb-2">{transformation.weightLoss}</div>
                        <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">Result</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story & Details */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{transformation.name}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 mb-6">
                      <span>Age: {transformation.age}</span>
                      <span>•</span>
                      <span>{transformation.location}</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary-green to-accent-green text-white px-6 py-3 rounded-full inline-block font-black text-sm uppercase tracking-wide mb-8">
                      {transformation.program}
                    </div>
                  </div>

                  <div className="bg-[#171A26] border border-gray-700 rounded-2xl p-8">
                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-wide">SUCCESS STORY</h4>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                      "{transformation.story}"
                    </p>
                    
                    <div className="border-l-4 border-primary-green pl-6 mb-8 bg-[#15171C] rounded-r-xl p-4">
                      <p className="text-gray-300 italic text-lg">
                        "{transformation.testimonial}"
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-black text-white mb-4 uppercase tracking-wide">Key Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {transformation.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-3 bg-[#15171C] p-3 rounded-xl">
                            <Star className="h-5 w-5 text-accent-green flex-shrink-0" />
                            <span className="text-gray-300 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY FOR YOUR STORY?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Mysore residents who transformed their lives at Heal Fitness Zone. 
            Your transformation journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Start Your Transformation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transformations;