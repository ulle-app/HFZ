import React, { useState } from 'react';
import { Check, Star, Crown, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState('Premium');

  const plans = [
    {
      name: 'Basic',
      price: 999,
      period: 'month',
      description: 'Perfect for getting started with your fitness journey',
      features: [
        'Gym access during staffed hours',
        'Basic cardio and strength equipment',
        'Locker room access',
        'Free WiFi',
        'Mobile app access',
        'Community support'
      ],
      popular: false,
      icon: null
    },
    {
      name: 'Premium',
      price: 2499,
      period: 'month',
      description: 'Most popular plan with comprehensive fitness access',
      features: [
        'Everything in Basic',
        '24/7 gym access',
        'All group fitness classes',
        'Guest passes (2 per month)',
        'Personal training session (1 per month)',
        'Nutrition consultation',
        'Priority booking'
      ],
      popular: true,
      icon: Star
    },
    {
      name: 'Elite',
      price: 4999,
      period: 'month',
      description: 'Ultimate fitness experience with premium services',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Private training sessions',
        'Meal planning service',
        'Recovery services',
        'VIP locker room access',
        'Unlimited guest passes',
        'Exclusive member events'
      ],
      popular: false,
      icon: Crown
    }
  ];

  const addOns = [
    {
      name: 'Personal Training Session',
      price: 1500,
      description: 'One-on-one training session with certified trainer'
    },
    {
      name: 'Nutrition Consultation',
      price: 1000,
      description: 'Comprehensive nutrition assessment and meal plan'
    },
    {
      name: 'Massage Therapy',
      price: 1800,
      description: '60-minute therapeutic massage session'
    },
    {
      name: 'Body Composition Analysis',
      price: 500,
      description: 'Detailed body composition and fitness assessment'
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
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white">MEMBERSHIP</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-400">
            Choose the plan that fits your fitness goals and lifestyle
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-[#15171C] border-2 transition-all duration-300 cursor-pointer group ${
                  selectedPlan === plan.name
                    ? 'border-primary-green scale-105'
                    : 'border-gray-700 hover:border-gray-600'
                } ${plan.popular ? 'ring-2 ring-primary-green' : ''}`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-green text-white hover:bg-primary-green">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {plan.icon && (
                      <plan.icon className={`h-10 w-10 ${selectedPlan === plan.name ? 'text-primary-green' : 'text-gray-400'}`} />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4 text-white uppercase tracking-wide">{plan.name}</CardTitle>
                  <div className="flex justify-center items-end mb-6">
                    <span className="text-4xl font-black text-primary-green mr-2">₹{plan.price}</span>
                    <span className="text-gray-400 text-lg">/ {plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400 mb-8">{plan.description}</CardDescription>
                  <ul className="text-left mb-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <Check className="h-5 w-5 text-accent-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full font-bold text-lg transition-all duration-300 ${
                    selectedPlan === plan.name
                      ? 'bg-white text-black hover:bg-white'
                      : 'border-2 border-white text-white hover:bg-white hover:text-black'
                  }`} variant={selectedPlan === plan.name ? 'default' : 'outline'}>
                    {selectedPlan === plan.name ? 'SELECTED' : 'CHOOSE PLAN'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              All memberships include a 7-day free trial. No commitment required.
            </p>
            <p className="text-sm text-gray-500 mb-2">
              *Annual plans available with 15% discount
            </p>
            <p className="text-sm text-gray-400">
              <strong>Payment Options:</strong> UPI, Cards, Net Banking, EMI available
            </p>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">ADD-ON SERVICES</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Enhance your membership with additional premium services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-[#171A26] border-gray-700 hover:border-primary-green transition-all duration-300 text-center">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-white uppercase tracking-wide">{addon.name}</CardTitle>
                  <div className="text-2xl font-black text-primary-green">₹{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-400 mb-6">{addon.description}</CardDescription>
                  <Button variant="outline" className="text-white font-bold border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
                    ADD TO PLAN
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Memberships */}
      <section className="py-20 bg-[#171A26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">CORPORATE MEMBERSHIPS</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Invest in your team's health and productivity
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 uppercase">Benefits for Your Team</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent-green mr-3" />
                  <span className="text-gray-300">Discounted membership rates for employees</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent-green mr-3" />
                  <span className="text-gray-300">Flexible billing and payment options</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent-green mr-3" />
                  <span className="text-gray-300">Wellness workshops and seminars</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent-green mr-3" />
                  <span className="text-gray-300">Team building fitness challenges</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent-green mr-3" />
                  <span className="text-gray-300">Dedicated corporate account manager</span>
                </li>
              </ul>
            </div>
            <Card className="bg-primary-green border-primary-green">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white uppercase flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Get Started Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white mb-6 opacity-90">
                  Contact us to learn about our corporate wellness packages and how we can customize a program for your organization.
                </CardDescription>
                <Button className="bg-white text-primary-green hover:bg-gray-100 transition-colors uppercase tracking-wide">
                  Contact Sales Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#15171C]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">READY TO JOIN?</h2>
          <p className="text-lg text-gray-400 mb-12">
            Start your fitness journey today with our 7-day free trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              <span className="px-4 py-2 text-lg font-bold">
                START FREE TRIAL
              </span>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              <Link to="/contact" className="px-4 py-2 text-lg font-bold inline-flex items-center">
                CONTACT US
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;