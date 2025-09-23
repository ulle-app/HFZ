import React from 'react';
import { Star, Award, Users, Dumbbell, Heart, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import hamsinipic from '../assets/team/namrathashree-nutritionist.jpeg';
import anithapic from '../assets/team/anitha-dance-teacher.jpeg';
import yatindrapic from '../assets/team/yatindra-coach.jpeg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Trainers = () => {
  const trainers = [
    {
      name: 'Hamsini. H',
      role: 'Proprietor & Administration Head',
      specialties: ['Administration', 'Event Organization', 'Program Management'],
      experience: '15+ years',
      certifications: ['IBM Certified', 'Business Development Expert'],
      image: hamsinipic,
      bio: 'Worked as Administration Executive in IBM and Business Development Executive in IPM & SL Bangalore for more than 6 years. Joined hands with Himanshu Shekhar in 2009 to build up Heal Fitness Zone. Takes care of supportive team and organizes events and programs.',
      rating: 4.9,
      sessions: 'Management'
    },
    {
      name: 'Namrathashree',
      role: 'Nutritionist & Dietitian',
      specialties: ['Clinical Nutrition', 'Food Science', 'Weight Management'],
      experience: '5+ years',
      certifications: ['B.Sc Microbiology', 'M.Sc Food Science & Nutrition', 'Clinical Nutrition'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Bachelor\'s in Microbiology, Chemistry, Clinical Nutrition and Dietetics. Master\'s in Food Science and Nutrition. 5+ years experience as Dietitian at Bharath Hospital and Institute of Oncology. At Heal Fitness Zone for the past 2 years.',
      rating: 4.9,
      sessions: '2+ years'
    },
    {
      name: 'Guru Vidushi C N Anitha',
      role: 'Classical Dance Teacher - Bharatanatyam',
      specialties: ['Bharatanatyam', 'Classical Dance', 'Cultural Arts'],
      experience: '20+ years',
      certifications: ['Master\'s in Bharatanatyam', 'Multiple Awards Winner'],
      image: anithapic,
      bio: 'Master\'s Degree in Bharatanatyam from KSGH Music and Performing Arts University. 20+ years of teaching experience with 500+ students. Established Nrutya Vidya Peeta in 2003. Multiple award winner including Sarvashree Award, Anjanasri Award, Kala Bharathi Award.',
      rating: 4.9,
      sessions: '500+ students'
    },
    {
      name: 'Dr. Sohan Singh',
      role: 'Physiotherapist',
      specialties: ['Injury Rehabilitation', 'Back Pain Treatment', 'Sports Medicine'],
      experience: '15+ years',
      certifications: ['Physiotherapy Degree', 'Sports Medicine Specialist'],
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Heads the physiotherapy department. Has been with Heal Fitness from day one, helping and curing people suffering from injuries, back pain, tennis elbow, frozen shoulder and many more conditions.',
      rating: 4.8,
      sessions: '15+ years'
    },
    {
      name: 'Mr. Yatindra',
      role: 'Wrestling Champion & Fitness Coach',
      specialties: ['Wrestling', 'Strength Training', 'Bodybuilding'],
      experience: '10+ years',
      certifications: ['Wrestling Champion', 'Fitness Training Certified'],
      image: yatindrapic,
      bio: 'Wrestling champion who has competed in more than 300 competitions including prestigious ones like Dasara Mat Match, Srirangapatana Dasara, Bastipura Kusti champion winning silver mace as 1st prize. Later entered bodybuilding and took fitness training certification courses.',
      rating: 4.8,
      sessions: '300+ matches'
    },
    {
      name: 'Sachin',
      role: 'Fitness Trainer',
      specialties: ['Bodybuilding', 'Fitness Training', 'Personal Training'],
      experience: '5+ years',
      certifications: ['Bodybuilding Training', 'Fitness Specialist'],
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Worked as paramedical operation technician. Being passionate towards bodybuilding and fitness, entered the fitness field five years ago. Took bodybuilding training under renowned bodybuilders and now works as fitness trainer at Heal Fitness Zone.',
      rating: 4.9,
      sessions: '5+ years'
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
    'Gym Training',
    'Zumba',
    'Functional Training',
    'Personal Training',
    'Weight Loss & Gain Programs',
    'Karate',
    'Western Dance',
    'Classical Dance - Bharatanatyam',
    'Physiotherapy',
    'Nutrition Counseling',
    'Wrestling Training',
    'Bodybuilding'
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">OUR EXPERT TEAM</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet our dedicated professionals who will guide you on your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Card key={index} className="group bg-[#15171C] border-gray-800 hover:border-primary-green/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-green/10 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-green/90 text-white backdrop-blur-sm hover:bg-primary-green/90">
                      {trainer.role}
                    </Badge>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-accent-green fill-current" />
                    <span className="text-sm font-bold text-white">{trainer.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-white mb-2 group-hover:text-primary-green transition-colors duration-300">
                    {trainer.name}
                  </CardTitle>

                  {/* Separator */}
                  <div className="w-12 h-1 bg-primary-green rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>

                  <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {trainer.bio}
                  </CardDescription>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-xs uppercase tracking-wide">SPECIALTIES</h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialties.slice(0, 3).map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          variant="secondary"
                          className="bg-[#171A26] border border-gray-700 text-gray-300 hover:border-primary-green"
                        >
                          {specialty}
                        </Badge>
                      ))}
                      {trainer.specialties.length > 3 && (
                        <span className="text-primary-green text-xs font-medium">+{trainer.specialties.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-accent-green" />
                      <span className="font-semibold">{trainer.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-primary-green" />
                      <span className="font-semibold">{trainer.sessions}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full bg-gradient-to-r from-primary-green to-accent-green text-black hover:shadow-lg hover:shadow-primary-green/30 transform hover:scale-105 hover:-translate-y-1 group-hover:opacity-100 opacity-0 transition-all duration-300">
                    <span className="flex items-center justify-center gap-2">
                      BOOK SESSION
                      <Dumbbell className="w-4 h-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
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
              <Card key={index} className="bg-[#171A26] border-gray-700 hover:border-primary-green transition-all duration-300 text-center">
                <CardHeader>
                  <div className="bg-gradient-to-r from-primary-green to-accent-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && <Users className="h-8 w-8 text-white" />}
                    {index === 1 && <Award className="h-8 w-8 text-white" />}
                    {index === 2 && <Star className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-xl font-black text-white">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">
                    {point.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Areas */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">AREAS OF EXPERTISE</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive fitness and wellness services offered at Heal Fitness Zone
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {expertiseAreas.map((expertise, index) => (
              <div key={index} className="group bg-[#15171C] border border-gray-800 p-4 rounded-2xl text-center hover:border-primary-green/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-green/10">
                <div className="mb-3">
                  {/* Dynamic icons based on expertise */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-green to-accent-green rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Dumbbell className="h-6 w-6 text-white" />}
                    {index === 1 && <Heart className="h-6 w-6 text-white" />}
                    {index === 2 && <Target className="h-6 w-6 text-white" />}
                    {index === 3 && <Users className="h-6 w-6 text-white" />}
                    {index === 4 && <Award className="h-6 w-6 text-white" />}
                    {index === 5 && <Star className="h-6 w-6 text-white" />}
                    {index === 6 && <Heart className="h-6 w-6 text-white" />}
                    {index === 7 && <Target className="h-6 w-6 text-white" />}
                    {index === 8 && <Users className="h-6 w-6 text-white" />}
                    {index === 9 && <Award className="h-6 w-6 text-white" />}
                    {index === 10 && <Dumbbell className="h-6 w-6 text-white" />}
                    {index === 11 && <Star className="h-6 w-6 text-white" />}
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-primary-green transition-colors duration-300 leading-tight">
                  {expertise}
                </h3>
                <div className="w-8 h-0.5 bg-primary-green rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">READY TO START YOUR JOURNEY?</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule your complimentary consultation and discover how our expert team can help you achieve your fitness goals at Heal Fitness Zone
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary-green to-accent-green text-black hover:shadow-xl hover:shadow-primary-green/30 transform hover:scale-105 transition-all duration-300">
                <Link to="/contact" className="px-8 py-4 font-black uppercase tracking-wide inline-flex items-center">
                  BOOK FREE CONSULTATION
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-black transform hover:scale-105 transition-all duration-300">
                <Link to="/services" className="px-8 py-4 font-black uppercase tracking-wide inline-flex items-center">
                  VIEW PROGRAMS
                  <Dumbbell className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;