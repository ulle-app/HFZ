import React from 'react';
import { Users, Award, Target, Heart, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import hamsinipic from '../assets/team/Hamsini.jpeg';
import namrathapic from '../assets/team/Namratha.jpeg';
import anithapic from '../assets/team/anitha-dance-teacher.jpeg';
import yatindrapic from '../assets/team/yatindra-coach.jpeg';
import abouthero from '../assets/team/Himanshu.jpeg';
import karnikpic from '../assets/team/karnik.jpeg';
import sachinpic from '../assets/team/Sachin.jpeg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

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
      name: 'Hamsini. H',
      role: 'Proprietor & Administration Head',
      image: hamsinipic,
      bio: 'Worked as Administration Executive in IBM and Business Development Executive in IPM & SL Bangalore for more than 6 years. Joined hands with Himanshu Shekhar in 2009 to build up Heal Fitness Zone. Takes care of supportive team and organizes events and programs.'
    },
    {
      name: 'Namrathashree',
      role: 'Nutritionist & Dietitian',
      image: namrathapic,
      bio: 'Bachelor\'s in Microbiology, Chemistry, Clinical Nutrition and Dietetics. Master\'s in Food Science and Nutrition. 5+ years experience as Dietitian at Bharath Hospital and Institute of Oncology. Specialized in Clinical Nutrition & Food Science. At Heal Fitness Zone for the past 2 years.'
    },
    {
      name: 'Guru Vidushi C N Anitha',
      role: 'Classical Dance - Bharatanatyam',
      image: anithapic,
      bio: 'Master\'s Degree in Bharatanatyam from KSGH Music and Performing Arts University. 20+ years of teaching experience with 500+ students. Established Nrutya Vidya Peeta in 2003. Multiple award winner including Sarvashree Award, Anjanasri Award, Kala Bharathi Award, and Hoysala Prashasti.'
    },
    {
      name: 'Dr. Sohan Singh',
      role: 'Physiotherapist',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Heads the physiotherapy department. Has been with Heal Fitness from day one, helping and curing people suffering from injuries, back pain, tennis elbow, frozen shoulder and many more conditions.'
    },
    {
      name: 'Mr. Yatindra',
      role: 'Wrestling Champion & Fitness Coach',
      image: yatindrapic,
      bio: 'Wrestling champion who has competed in more than 300 competitions including prestigious ones like Dasara Mat Match, Srirangapatana Dasara, Bastipura Kusti champion winning silver mace as 1st prize. Later entered bodybuilding and took fitness training certification courses.'
    },
    {
      name: 'Sachin',
      role: 'Fitness Trainer',
      image: sachinpic,
      bio: 'Worked as paramedical operation technician. Being passionate towards bodybuilding and fitness, entered the fitness field five years ago. Took bodybuilding training under renowned bodybuilders and now works as fitness trainer at Heal Fitness Zone.'
    },
    {
      name: 'Karnik Shivadas',
      role: 'Karate Instructor',
      image: karnikpic,
      bio: 'BLACK BELT 6th DAN with extensive experience in karate. WKF JUDGE & AKF REFEREE and REFEREE COMMISSION MEMBER(AKSKA). Dedicated to teaching traditional karate and self-defense techniques.'
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
            Your partners in transformation since 2009
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-span-2 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">ABOUT HEAL FITNESS ZONE</h2>
              <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Heal Fitness Zone was founded in 2009 and is a leader in the service industry that specializes in providing physical wellbeing to our members. With a strong commitment to educate, motivate, and empower people from all walks of life to embrace the philosophy that a strong and healthy mind dwells within a strong and healthy body.
                </p>
                <p>
                  Our team of experienced professionals and innovative approach enables us to deliver exceptional results and exceed client expectations.
                </p>
              </div>
              <div className="mt-12 flex justify-center">
                <div className="bg-gradient-to-br from-primary-green to-accent-green text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-4xl font-black mb-2">15+</div>
                  <div className="text-sm font-medium uppercase tracking-wide">Years of Excellence</div>
                  <div className="text-xs text-white/80 mt-1">Since 2009</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="py-20 bg-[#15171C] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-green opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent-green opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">OUR FOUNDER</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet the visionary behind Heal Fitness Zone
            </p>
          </div>

          <div className="bg-[#171A26] rounded-3xl border border-gray-800 p-8 lg:p-12 shadow-2xl hover:shadow-primary-green/10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-green/10 border border-primary-green/20 mb-6">
                  <span className="text-primary-green text-sm font-semibold">FOUNDER & FITNESS EXPERT</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                  Himanshu Shekhar Mahato
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-green to-accent-green rounded-full mb-6"></div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    <strong className="text-primary-green">25+ years</strong> of experience in the fitness field. Started his career as a gym trainer in Bangalore and completed certificate courses from <strong className="text-white">IFA, AFM, Reebok, Talwalkar, Gold's Gym and Fitness One</strong>.
                  </p>
                  <p>
                    He is the <strong className="text-primary-green">first person from Karnataka</strong> to take spin bike workout training and certificate course conducted by Gold's Gym Mumbai.
                  </p>
                  <p>
                    Worked as fitness expert in corporate companies like <strong className="text-white">Intel, ANZ, IBM, Accenture</strong>, and fitness companies like Snap Fitness, Gold's Gym, Talwalkar and Medifit.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/30 to-accent-green/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img
                    src={abouthero}
                    alt="Mr. Himanshu Shekhar Mahato - Founder"
                    className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">HISTORY</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Started on November 22nd, 2009, when the concept of gyms was different from what it is now. Heal Fitness Zone stood out from all other gyms with its space, scientifically proven equipment, certified trainers, physiotherapist, and dietician with programs like gym training, Tae-Bo aerobics, weight loss programs, taekwondo, karate, and western dance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-[#15171C] rounded-2xl p-8 text-center border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-primary-green to-accent-green w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-white font-black text-2xl">1st</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary-green transition-colors duration-300">Physiotherapy Pioneer</h3>
              <div className="w-12 h-1 bg-primary-green rounded-full mb-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
              <p className="text-gray-400 leading-relaxed text-sm">We were the first to introduce physiotherapy with gym services in Mysore.</p>
            </div>
            <div className="group bg-[#15171C] rounded-2xl p-8 text-center border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-primary-green to-accent-green w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary-green transition-colors duration-300">State Level Competition</h3>
              <div className="w-12 h-1 bg-primary-green rounded-full mb-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
              <p className="text-gray-400 leading-relaxed text-sm">In 2015-16, we conducted state-level bodybuilding competition, including categories for handicapped bodybuilders - first of its kind in Mysore.</p>
            </div>
            <div className="group bg-[#15171C] rounded-2xl p-8 text-center border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-primary-green to-accent-green w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary-green transition-colors duration-300">Continuous Evolution</h3>
              <div className="w-12 h-1 bg-primary-green rounded-full mb-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
              <p className="text-gray-400 leading-relaxed text-sm">In 2017-18, added Functional Training and classical dance. In 2024, introduced Zumba and renovated with upgraded equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">FACILITIES</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive fitness services under one roof
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'Gym', icon: '💪', description: 'State-of-the-art equipment' },
              { name: 'Zumba', icon: '💃', description: 'High-energy dance workouts' },
              { name: 'Functional Training', icon: '🏋️', description: 'Real-world movement patterns' },
              { name: 'Personal Training', icon: '👨‍⚕️', description: 'One-on-one coaching' },
              { name: 'Weight Programs', icon: '⚖️', description: 'Loss & gain programs' },
              { name: 'Karate', icon: '🥋', description: 'Traditional martial arts' },
              { name: 'Western Dance', icon: '🕺', description: 'Contemporary dance styles' },
              { name: 'Classical Dance', icon: '💃', description: 'Bharatanatyam training' },
              { name: 'Physiotherapy', icon: '🏥', description: 'Injury rehabilitation' },
              { name: 'Nutrition', icon: '🥗', description: 'Dietary consultation' }
            ].map((facility, index) => (
              <div key={index} className="group bg-[#15171C] rounded-2xl p-6 text-center hover:bg-primary-green/10 transition-all duration-300 border border-gray-800 hover:border-primary-green/50 hover:scale-105 hover:shadow-lg hover:shadow-primary-green/10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{facility.icon}</div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2 group-hover:text-primary-green transition-colors duration-300">
                  {facility.name}
                </h3>
                <p className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {facility.description}
                </p>
              </div>
            ))}
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
              <div key={index} className="group bg-[#171A26] rounded-2xl p-8 text-center border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-green/10">
                <div className="bg-gradient-to-br from-primary-green to-accent-green w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary-green transition-colors duration-300">
                  {value.title}
                </h3>
                <div className="w-12 h-1 bg-primary-green rounded-full mb-4 mx-auto group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">OUR TEAM</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-[#15171C] rounded-2xl overflow-hidden border border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-green/10">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-green/90 text-white backdrop-blur-sm">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-green transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Separator */}
                  <div className="w-12 h-1 bg-primary-green rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>

                  {/* Read More Button */}
                  <button className="mt-4 text-primary-green text-sm font-semibold hover:text-accent-green transition-colors duration-300 opacity-0 group-hover:opacity-100">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-green opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-green opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#171A26] rounded-3xl border border-gray-800 p-12 shadow-2xl hover:shadow-primary-green/10 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">READY TO START?</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands who have transformed their lives with us. Start your fitness journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary-green to-accent-green text-black hover:shadow-xl hover:shadow-primary-green/30 transform hover:scale-105 transition-all duration-300">
                <Link to="/membership" className="px-8 py-4 font-black uppercase tracking-wide inline-flex items-center">
                  JOIN NOW
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-black transform hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="px-8 py-4 font-black uppercase tracking-wide inline-flex items-center">
                  CONTACT US
                  <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;