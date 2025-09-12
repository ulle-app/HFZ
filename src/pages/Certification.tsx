import { useState } from 'react';
import { GraduationCap, Award, Users, Star, CheckCircle, BookOpen, Dumbbell, Heart, Calendar, Phone, Mail, MapPin, IndianRupee, Target } from 'lucide-react';

const Certification = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTier, setSelectedTier] = useState('professional');

  const pricingTiers = [
    {
      id: 'basic',
      name: 'Basic Certification',
      price: '45,000',
      duration: '6 months',
      popular: false,
      features: [
        'All 6 core modules',
        'Digital study materials & video library',
        'Basic CPR/First Aid certification',
        'HFZ facility access during training',
        '50 hours practical training',
        'Basic business toolkit',
        'Job placement assistance',
        '1-year continuing education credits'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Certification',
      price: '75,000',
      duration: '6 months',
      popular: true,
      features: [
        'Everything in Basic tier',
        'Choose 2 advanced specializations',
        'Bollywood/Yoga/Kalaripayattu options',
        '100 hours practical training',
        'Advanced business development',
        'Guaranteed interview opportunities',
        '2-year continuing education credits',
        'Exclusive networking events'
      ]
    },
    {
      id: 'master',
      name: 'Master Trainer Certification',
      price: '1,25,000',
      duration: '8 months',
      popular: false,
      features: [
        'Everything in Professional tier',
        'All specialization modules included',
        'Advanced anatomy & physiology',
        'Train-the-trainer certification',
        '200 hours practical + teaching',
        'Business mentorship program',
        'Franchise opportunity consideration',
        'Lifetime continuing education access'
      ]
    }
  ];

  const modules = [
    {
      title: 'Anatomy & Physiology Fundamentals',
      duration: '4 weeks',
      description: 'Master human body systems, exercise physiology, and Indian constitutional considerations',
      icon: Heart
    },
    {
      title: 'Exercise Science & Biomechanics',
      duration: '4 weeks',
      description: 'Learn movement analysis, injury prevention, and functional training principles',
      icon: Target
    },
    {
      title: 'Program Design & Periodization',
      duration: '4 weeks',
      description: 'Design effective programs for diverse populations and goals',
      icon: Calendar
    },
    {
      title: 'Indian Fitness Traditions',
      duration: '4 weeks',
      description: 'Integrate yoga, martial arts, and Ayurvedic principles with modern fitness',
      icon: Award
    },
    {
      title: 'Specialized Training Methods',
      duration: '4 weeks',
      description: 'Master HIIT, strength training, and cultural fitness styles',
      icon: Dumbbell
    },
    {
      title: 'Business & Professional Skills',
      duration: '4 weeks',
      description: 'Develop client communication, marketing, and entrepreneurship skills',
      icon: Users
    }
  ];

  const specializations = [
    {
      name: 'Bollywood Fitness Instructor',
      description: 'Master high-energy Bollywood and Bhangra fitness choreography',
      image: 'https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Traditional Yoga & Meditation',
      description: 'Authentic yoga philosophy and practice integration',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Kalaripayattu Fitness',
      description: 'Ancient martial arts principles for modern conditioning',
      image: 'https://images.pexels.com/photos/7045434/pexels-photo-7045434.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Sports Nutrition Specialist',
      description: 'Ayurvedic nutrition principles with modern sports science',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Senior Fitness Expert',
      description: 'Specialized training for adults 55+ with cultural sensitivity',
      image: 'https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const careerBenefits = [
    {
      role: 'Personal Trainer',
      salary: '₹25,000 - ₹55,000/month',
      growth: 'Senior Trainer within 12-18 months'
    },
    {
      role: 'Group Fitness Instructor',
      salary: '₹20,000 - ₹45,000/month',
      growth: 'Department Head opportunities'
    },
    {
      role: 'Corporate Wellness Coach',
      salary: '₹35,000 - ₹75,000/month',
      growth: 'Consultant and trainer roles'
    },
    {
      role: 'Franchise Owner',
      salary: '₹50,000 - ₹2,00,000/month',
      growth: 'Multi-location ownership'
    }
  ];

  return (
    <div className="pt-16 bg-[#15171C] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-[#15171C] text-white relative overflow-hidden">
        {/* Cult.fit Style Blurred Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF3278] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FFDB17] opacity-15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <GraduationCap className="h-16 w-16 text-[#FF3278] mr-4" />
              <Award className="h-16 w-16 text-[#FFDB17]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">
              TRAINER CERTIFICATION
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering Fitness Leaders for India's Wellness Revolution
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-10 opacity-90">
              The only certification combining modern fitness science with authentic Indian wellness traditions - 
              Yoga, Bollywood fitness, Kalaripayattu, and Ayurvedic principles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('pricing')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105"
              >
                View Course Packages
              </button>
              <button 
                onClick={() => setActiveTab('curriculum')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                Explore Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-lg sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'curriculum', label: 'Curriculum', icon: GraduationCap },
              { id: 'specializations', label: 'Specializations', icon: Award },
              { id: 'pricing', label: 'Pricing', icon: IndianRupee },
              { id: 'careers', label: 'Career Benefits', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 border-b-2 transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'border-green-600 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-600 hover:text-green-600 hover:border-green-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose HFZ Certification?</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                India's first comprehensive fitness certification program that honors traditional wellness practices 
                while delivering world-class modern fitness education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Integration</h3>
                <p className="text-gray-600">
                  Unique blend of yoga, Bollywood fitness, Kalaripayattu, and Ayurvedic principles with modern exercise science
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Job Guarantee</h3>
                <p className="text-gray-600">
                  Guaranteed consideration for HFZ trainer positions with starting salaries up to ₹55,000/month
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Mentorship</h3>
                <p className="text-gray-600">
                  Learn from master trainers, yoga gurus, and martial arts experts with decades of experience
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hybrid Learning</h3>
                <p className="text-gray-600">
                  Flexible online modules combined with hands-on practical training at our world-class facilities
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Support</h3>
                <p className="text-gray-600">
                  Complete entrepreneurship training with ongoing mentorship for those wanting to start their own studios
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Lifetime Network</h3>
                <p className="text-gray-600">
                  Join India's largest network of culturally-trained fitness professionals with ongoing support
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive 8-Month Curriculum</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Progressive learning path combining theoretical knowledge with extensive practical application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <module.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                        <p className="text-green-600 font-medium">{module.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Practical Training Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Hands-On Experience</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      100-200 hours supervised practical training
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Real client interactions and sessions
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Group class instruction practice
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Cultural fitness class delivery
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Assessment Methods</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Written examinations (40%)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Practical demonstrations (35%)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Internship evaluation (25%)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      Capstone project presentation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specializations Tab */}
        {activeTab === 'specializations' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Specializations</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Professional and Master tier students can specialize in India's unique fitness traditions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={spec.image}
                    alt={spec.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.name}</h3>
                    <p className="text-gray-600 mb-4">{spec.description}</p>
                    <div className="flex items-center text-green-600 font-medium">
                      <Award className="h-4 w-4 mr-2" />
                      Certification Included
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-600 to-green-800 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Cultural Immersion Experiences</h3>
              <p className="text-lg mb-6">
                Enhance your specializations with authentic cultural experiences
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">Yoga Retreats</h4>
                  <p className="text-sm opacity-90">Traditional ashram experiences</p>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">Martial Arts Seminars</h4>
                  <p className="text-sm opacity-90">Learn from Kalari masters</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <h4 className="font-semibold">Bollywood Workshops</h4>
                  <p className="text-sm opacity-90">Industry choreographer sessions</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment in Your Future</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Flexible payment options and scholarship opportunities available
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.id}
                  className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    tier.popular ? 'ring-4 ring-green-600 transform scale-105' : ''
                  } ${selectedTier === tier.id ? 'bg-green-50' : 'bg-white'}`}
                >
                  {tier.popular && (
                    <div className="bg-green-600 text-white text-center py-2 font-semibold">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold text-green-600">₹{tier.price}</span>
                      <span className="text-gray-500 ml-2">/ {tier.duration}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setSelectedTier(tier.id)}
                      className={`w-full py-3 px-4 rounded-full font-semibold transition-all duration-200 ${
                        selectedTier === tier.id
                          ? 'bg-green-600 text-white'
                          : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                      }`}
                    >
                      {selectedTier === tier.id ? 'Selected' : 'Choose Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Options & Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Flexible Payment Plans</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      0% interest EMI options up to 12 months
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Early bird discount: 15% off (first 50 students)
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Student discount: 10% off with valid ID
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Corporate sponsorship programs available
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Scholarship Opportunities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Merit-based scholarships up to 50% off
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Need-based financial assistance
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Women empowerment scholarships
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3" />
                      Rural development program support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Careers Tab */}
        {activeTab === 'careers' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Launch Your Fitness Career</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Multiple career pathways with guaranteed placement support and ongoing mentorship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careerBenefits.map((career, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{career.role}</h3>
                  <div className="flex items-center text-green-600 font-semibold mb-2">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    {career.salary}
                  </div>
                  <p className="text-gray-600">{career.growth}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Career Support Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Job Placement</h4>
                  <p className="text-sm opacity-90">Guaranteed interviews with HFZ and partner gyms</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Business Mentorship</h4>
                  <p className="text-sm opacity-90">One-on-one guidance for entrepreneurs</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm opacity-90">Lifetime access to trainer network and resources</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">95%</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Job Placement Rate</h4>
                  <p className="text-gray-600">Within 3 months of graduation</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">40%</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Salary Increase</h4>
                  <p className="text-gray-600">Average increase for career switchers</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">25+</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Partner Gyms</h4>
                  <p className="text-gray-600">Guaranteed interview opportunities</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the next batch of India's most culturally-integrated fitness professionals
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Next Batch Starts</h3>
            <div className="text-6xl font-bold text-green-600 mb-2">15</div>
            <div className="text-xl text-gray-600 mb-4">Days Remaining</div>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800 font-medium">
                🎉 Early Bird Special: Save ₹10,000 - Only 12 spots left!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
            >
              Apply Now
            </a>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200">
              Schedule Info Session
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">certification@hfz.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Visit Us</p>
                <p className="text-gray-600">HFZ Training Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;