import { Apple, BookOpen, CheckCircle, Star, Utensils, Heart, Target } from 'lucide-react';

const Nutrition = () => {
  const services = [
    {
      icon: Apple,
      title: 'Personalized Diet Plans',
      description: 'Customized nutrition plans based on your goals, preferences, and Indian dietary habits.',
      features: ['Vegetarian/Non-vegetarian options', 'Regional cuisine integration', 'Portion control guidance', 'Meal timing optimization'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Utensils,
      title: 'Indian Meal Planning',
      description: 'Healthy meal plans featuring traditional Indian foods and cooking methods.',
      features: ['Dal-rice combinations', 'Regional specialties', 'Festival-friendly meals', 'Family meal planning'],
      image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Target,
      title: 'Weight Management',
      description: 'Nutritional strategies for healthy weight loss or gain tailored to Indian lifestyle.',
      features: ['Sustainable weight loss', 'Muscle building nutrition', 'Metabolism boosting foods', 'Portion size education'],
      image: 'https://images.pexels.com/photos/4099111/pexels-photo-4099111.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Heart,
      title: 'Therapeutic Nutrition',
      description: 'Specialized nutrition for managing health conditions common in Indian population.',
      features: ['Diabetes management', 'Heart-healthy diets', 'PCOS nutrition', 'Thyroid support'],
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const mealPlans = [
    {
      name: 'South Indian Vegetarian',
      calories: '1200-1500 kcal',
      duration: '4 weeks',
      price: '₹2,999',
      features: [
        'Traditional recipes with healthy twists',
        'Sambar, rasam, and curry variations',
        'Millet-based alternatives',
        'Regional vegetable integration',
        'Weekly grocery lists',
        'Cooking instructions'
      ],
      popular: false
    },
    {
      name: 'Balanced Indian Meals',
      calories: '1500-1800 kcal',
      duration: '4 weeks',
      price: '₹3,499',
      features: [
        'Mix of vegetarian and non-vegetarian',
        'North and South Indian cuisines',
        'Protein-rich meal combinations',
        'Healthy snack options',
        'Weekend treat meals',
        'Nutritionist consultations'
      ],
      popular: true
    },
    {
      name: 'High Protein Fitness',
      calories: '1800-2200 kcal',
      duration: '4 weeks',
      price: '₹3,999',
      features: [
        'Muscle building focused',
        'Pre and post workout meals',
        'Protein shake recipes',
        'Lean meat preparations',
        'Egg-based meal options',
        'Supplement guidance'
      ],
      popular: false
    }
  ];

  const indianSuperfoods = [
    { name: 'Quinoa', benefits: 'Complete protein, gluten-free', image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Turmeric', benefits: 'Anti-inflammatory, immunity booster', image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Moringa', benefits: 'Rich in vitamins, antioxidants', image: 'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Millets', benefits: 'High fiber, diabetes-friendly', image: 'https://images.pexels.com/photos/4198016/pexels-photo-4198016.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Coconut Oil', benefits: 'Healthy fats, brain health', image: 'https://images.pexels.com/photos/2202722/pexels-photo-2202722.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { name: 'Ghee', benefits: 'Vitamin A, digestive health', image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=300' }
  ];

  const nutritionTips = [
    {
      category: 'Morning Rituals',
      tips: [
        'Start with warm water and lemon',
        'Include protein in breakfast',
        'Traditional porridges with nuts',
        'Avoid heavy fried foods'
      ]
    },
    {
      category: 'Indian Cooking Methods',
      tips: [
        'Steam over deep frying',
        'Use minimal oil techniques',
        'Incorporate more raw foods',
        'Traditional fermentation benefits'
      ]
    },
    {
      category: 'Portion Control',
      tips: [
        'Traditional thali concept',
        'Mindful eating practices',
        'Smaller frequent meals',
        'Listen to hunger cues'
      ]
    },
    {
      category: 'Hydration',
      tips: [
        'Coconut water post-workout',
        'Herbal teas and kadhas',
        'Buttermilk with meals',
        'Seasonal fruit juices'
      ]
    }
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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">NUTRITION GUIDANCE</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the power of traditional Indian nutrition combined with modern dietary science. 
            Achieve your fitness goals with culturally-appropriate meal plans designed for the Mysore lifestyle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">OUR SERVICES</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive nutrition guidance that respects Indian culture while achieving modern fitness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-[#15171C] border border-gray-700 rounded-2xl overflow-hidden hover:border-[#FF3278] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF3278] to-[#FFDB17] p-3 rounded-xl">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-black text-white mb-4 text-sm uppercase tracking-wide">FEATURES</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-[#FFDB17] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">MEAL PLANS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our expertly designed meal plans that celebrate Indian cuisine while supporting your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <div key={index} className={`bg-[#171A26] border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 ${plan.popular ? 'ring-2 ring-[#FF3278] transform scale-105' : 'hover:border-[#FF3278]'}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] text-white text-center py-3 font-black uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <div className="text-[#FF3278] font-bold mb-2">{plan.calories}</div>
                  <div className="text-gray-400 mb-8">{plan.duration}</div>
                  
                  <div className="text-4xl font-black text-white mb-8">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-400">/month</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#FFDB17] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-xl font-black uppercase tracking-wide transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-100' 
                      : 'bg-[#15171C] border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Superfoods */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">INDIAN SUPERFOODS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the nutritional powerhouses that have been part of Indian tradition for centuries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {indianSuperfoods.map((food, index) => (
              <div key={index} className="bg-[#15171C] border border-gray-700 rounded-2xl p-6 text-center group hover:border-[#FF3278] transition-all duration-300 transform hover:scale-105">
                <div className="relative mb-4 overflow-hidden rounded-full">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-16 h-16 mx-auto object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-black text-white mb-3 text-sm uppercase tracking-wide">{food.name}</h3>
                <p className="text-xs text-gray-400 leading-tight">{food.benefits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">NUTRITION TIPS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, practical advice rooted in Indian culture and modern nutrition science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nutritionTips.map((section, index) => (
              <div key={index} className="bg-[#171A26] border border-gray-700 rounded-2xl p-8 hover:border-[#FF3278] transition-all duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-[#FF3278] to-[#FFDB17] p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">{section.category}</h3>
                </div>
                
                <ul className="space-y-4">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Star className="h-4 w-4 text-[#FFDB17] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">START YOUR JOURNEY</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get a personalized nutrition plan that fits your Indian lifestyle and supports your fitness goals. 
            Schedule a consultation with our certified nutritionists.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
              Book Nutrition Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-black uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200">
              Download Meal Plan Sample
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;