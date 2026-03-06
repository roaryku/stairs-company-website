import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Wrench, Star, Phone } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useState } from 'react';

import luxuryStairsImage from '../../assets/stairs-seven.png';
import contemporaryStairsImage from '../../assets/light-stairs.png';
import lightStairsImage from '../../assets/light-stairs.png';
import StairsImage from '../../assets/modern-stairs.png';

export function Home() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only-top-grade materials and precision craftsmanship go into every project. Finished with flowless detail for durability, beauty, and long-term performance.',
    },
    {
      icon: Users,
      title: 'Luxury Specialists',
      description: 'Over 20 years of experience in custom staircase design and installation.Trusted expeertise focused on refined details, premium finishes, and flowless execution.',
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Tailored designs to match your unique space and style preferences. Every project is treated as a custom build, not a shortcut job.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '20+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Design Options' },
  ];

  return (
    <div className="min-h-screen">
      {/* Phone Modal */}
      {showPhoneModal && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setShowPhoneModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9A7D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-[#9A7D1A]" size={32} />
              </div>
              <h3 className="text-2xl mb-2 text-stone-900">Call Us Now</h3>
              <p className="text-gray-600 mb-6">Danylo Aryku</p>
              <p className="text-3xl mb-8 text-[#9A7D1A]">(360) 356 - 8368</p>
              
              <div className="space-y-3">
                <a
                  href="tel:+13603568368"
                  className="block w-full bg-[#9A7D1A] hover:bg-[#7A6515] text-white py-4 rounded-lg transition-colors text-lg"
                >
                  Call Now
                </a>
                <button
                  onClick={() => setShowPhoneModal(false)}
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 12, 
            ease: [0.16, 1.0, 0.3, 1.0],
            opacity: { duration: 5 }
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={lightStairsImage}
            alt="Modern wooden staircase"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 50%', filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </motion.div>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight font-light" style={{ color: '#F5F1E8' }}>
              <span className="text-3xl md:text-4xl lg:text-5xl block mb-4 tracking-wide" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)', color: '#F5F1E8' }}>Elevate your space with</span>
              <span 
                className="tracking-wider" 
                style={{ 
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4A6 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 30px rgba(212, 175, 55, 0.5)',
                  filter: 'drop-shadow(0 4px 30px rgba(212, 175, 55, 0.5))'
                }}
              >
                LuxStairs Pro
              </span>
            </h1>
            <div className="mb-12">
              <p className="text-2xl md:text-3xl max-w-3xl tracking-wide font-light mb-6" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.4)', color: '#F5F1E8' }}>
                The Final Step in Luxury
              </p>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '120px' }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-[2px]"
                style={{ 
                  background: 'linear-gradient(90deg, #D4AF37 0%, #F4E4A6 100%)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)'
                }}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9A7D1A] hover:bg-[#7A6515] text-white px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors w-[180px] border-2 border-[#9A7D1A] hover:border-[#7A6515]"
                >
                  Contact Us
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPhoneModal(true)}
                className="bg-transparent hover:bg-white/10 px-8 py-4 rounded border-2 text-sm uppercase tracking-wider transition-colors w-[180px]"
                style={{ color: '#F5F1E8', borderColor: '#F5F1E8' }}
              >
                Call Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Why Choose LuxStairs Pro
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Because details matter - and stairs are more than just steps.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-8 bg-stone-50 rounded-xl hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#9A7D1A]/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-[#9A7D1A]" size={28} />
                  </div>
                  <h3 className="text-2xl mb-3 text-stone-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#9A7D1A]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-2 text-[#9A7D1A]">{stat.number}</div>
                  <div className="text-stone-600">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-16 text-stone-900">
              Our Craftsmanship
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-96 overflow-hidden rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-1 gap-2 h-full">
                  <img
                    src={StairsImage}
                    alt="Luxury staircase"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-start justify-end">
                  <div className="p-6 text-right bg-black/50 mt-[10px] mr-[10px]" style={{ borderRadius: '5px' }}>
                    <h3 className="text-2xl text-white mb-2">Luxury Designs</h3>
                    <p className="text-gray-200">Sophisticated elegance for modern homes</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-96 overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={contemporaryStairsImage}
                  alt="Contemporary stairs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-end">
                  <div className="p-6 bg-black/50 mr-[10px] mb-[10px]" style={{ borderRadius: '5px' }}>
                    <h3 className="text-2xl text-white mb-2">Contemporary Style</h3>
                    <p className="text-gray-200">Clean lines and minimalist aesthetics</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              What Our Clients Say
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Hear from homeowners who trusted us to transform their spaces
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'Portland, OR',
                rating: 5,
                text: 'LuxStairs Pro completely transformed our home! The custom stair noses they created perfectly matched our hardwood floors. Their attention to detail and craftsmanship is unmatched.'
              },
              {
                name: 'Michael Chen',
                location: 'Vancouver, WA',
                rating: 5,
                text: 'From start to finish, the team was professional and efficient. They worked with the wood we provided and the results exceeded our expectations. Highly recommend!'
              },
              {
                name: 'Emily Rodriguez',
                location: 'Vancouver, WA',
                rating: 5,
                text: 'We needed a complete staircase installation and LuxStairs Pro delivered flawlessly. The quality of their work is outstanding and they completed everything on schedule.'
              },
            ].map((review, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-[#9A7D1A] fill-[#9A7D1A]" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow italic">"{review.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-stone-900">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.location}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Our Process
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              From concept to completion, we ensure every step is executed with precision
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Create custom design plans for your space' },
              { step: '03', title: 'Fabrication', desc: 'Handcraft with premium materials' },
              { step: '04', title: 'Installation', desc: 'Professional on-site setup and finishing' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative text-center">
                  <div className="text-7xl text-[#9A7D1A]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl mb-2 text-stone-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Infinity Animation */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={luxuryStairsImage}
            alt="Premium staircase installation"
            className="w-full h-full object-cover"
            animate={{ 
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Ready to Elevate Your Space?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Serving Vancouver and Portland with premium staircase solutions
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9A7D1A] hover:bg-[#7A6515] text-white px-10 py-5 rounded text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 border-2 border-[#9A7D1A] hover:border-[#7A6515]"
              >
                Get Your Free Quote
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}