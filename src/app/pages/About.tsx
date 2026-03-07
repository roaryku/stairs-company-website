import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroImage from '../../assets/about.png';
import buildingImage from '../../assets/stairs-three.png';
import localServiceImage from '../../assets/stairs-13.png';
import installationImage from '../../assets/just corner.png';
import craftsmanshipImage from '../../assets/working-process.png';
import ctaImage from '../../assets/stairs-seven.png';
import materialsImage from '../../assets/wood.png';
import customManufacturingImage from '../../assets/stairnose.png';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every measurement, cut, and installation is executed with exacting precision.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We see beyond the stairs to understand how they enhance your entire space.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for craftsmanship drives us to exceed expectations on every project.',
    },
  ];

  const milestones = [
    { year: '2006', event: 'Company Founded', desc: 'Started with a passion for woodworking' },
    { year: '2010', event: '500th Project', desc: 'Celebrated our growing reputation' },
    { year: '2015', event: 'Expanded Services', desc: 'Added custom stair nose manufacturing' },
    { year: '2020', event: 'New Workshop', desc: 'Expanded facilities for increased production' },
    { year: '2026', event: '1000+ Projects', desc: 'Continuing to elevate spaces nationwide' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
        >
          <motion.img
            src={heroImage}
            alt="Modern floating staircase"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 
              className="text-5xl md:text-6xl mb-6"
              style={{ 
                background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4A6 50%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 30px rgba(212, 175, 55, 0.5)',
                filter: 'drop-shadow(0 4px 30px rgba(212, 175, 55, 0.5))'
              }}
            >
              Our Story
            </h1>
            <p className="text-xl text-gray-200">
              Two decades of craftsmanship, innovation, and dedication to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Part 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <AnimatedSection className="order-1 md:order-1">
              <h2 className="text-4xl mb-6 text-stone-900">
                Building Excellence Since 2006
              </h2>
              <p className="text-gray-600 mb-4">
                LuxStairs Pro was founded by master craftsman Dany Aryku, whose passion for woodworking 
                and architectural design inspired him to create a company dedicated to the art of staircase construction.
              </p>
              <p className="text-gray-600">
                Built on dedication to craftsmanship and quality, the company continues to focus on precise work, thoughtful design, and staircases that seamlessly blend beauty, durability, and attention to detail. The journey has been marked by continuous 
                learning, innovation, and an unwavering commitment to quality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="order-2 md:order-2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={craftsmanshipImage}
                  alt="Craftsman working with wood"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Part 2 - Reversed Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <AnimatedSection delay={0.3} className="order-2 md:order-1">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={localServiceImage}
                  alt="Interior staircase construction"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection className="order-1 md:order-2">
              <h2 className="text-4xl mb-6 text-stone-900">
                Local Service
              </h2>
              <p className="text-gray-600 mb-4">
                As a proud local business, we serve homeowners exclusively in the Vancouver and Portland area. 
                This focused approach allows us to provide personalized service, quick response times, and build 
                lasting relationships with our community.
              </p>
              <p className="text-gray-600">
                Being local means we understand the unique architectural styles and preferences of homes in our 
                region. We're never too far away for a consultation, and our clients become part of our extended family.
              </p>
            </AnimatedSection>
          </div>

          {/* Part 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-1 md:order-1">
              <h2 className="text-4xl mb-6 text-stone-900">
                Craftsmanship Meets Innovation
              </h2>
              <p className="text-gray-600 mb-4">
                Our commitment to quality, attention to detail, and customer satisfaction has remained unwavering 
                throughout the years. We combine time-honored woodworking techniques with modern design trends to 
                create staircases that stand the test of time.
              </p>
              <p className="text-gray-600">
                Today, our company continues to push the boundaries of design and craftsmanship, creating staircases 
                that are not just functional structures, but works of art that elevate every space they inhabit.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="order-2 md:order-2">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={buildingImage}
                  alt="Wooden staircase craftsmanship"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Our Core Values
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-[#9A7D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-[#9A7D1A]" size={32} />
                  </div>
                  <h3 className="text-2xl mb-3 text-stone-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4">
              How We Work
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Our streamlined process ensures quality craftsmanship from material to installation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Bring Your Materials', 
                description: 'You provide your wood and materials that match your home\'s aesthetic. We work with any wood type you choose to ensure perfect color and grain matching.',
                img: materialsImage,
                step: '01'
              },
              { 
                title: 'Custom Manufacturing', 
                description: 'We craft custom stair noses from your wood in our workshop, ensuring precise measurements and perfect finishes that seamlessly blend with your flooring.',
                img: customManufacturingImage,
                step: '02'
              },
              { 
                title: 'Professional Installation', 
                description: 'Our expert team installs your custom stair noses and can also handle complete staircase installations, ensuring flawless results and lasting durability.',
                img: installationImage,
                step: '03'
              },
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-stone-800 rounded-xl overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={process.img}
                      alt={process.title}
                      className={`w-full h-full object-cover ${index === 1 ? 'object-bottom md:object-center' : ''}`}
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#9A7D1A] rounded-full flex items-center justify-center text-white text-lg">
                      {process.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl mb-3">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-16 text-stone-900">
              Our Journey
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#9A7D1A] text-white rounded-lg flex items-center justify-center text-xl">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl mb-2 text-stone-900">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Infinity Animation */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={ctaImage}
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