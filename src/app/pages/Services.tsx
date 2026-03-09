import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Ruler, Hammer, Palette, Wrench, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import ctaStairsImage from '../../assets/stairs-seven.png';
import heroStairsImage from '../../assets/stairs-twelve.png'; // changed-available
import customDesignImage from '../../assets/details.png'; // changed-available
import stairInstallationImage from '../../assets/stairs-eight.png';
import stairNoseImage from '../../assets/stairs-nine.png';
import stairRenovationImage from '../../assets/wood-2.png';
import maintenanceRepairImage from '../../assets/stairs-from top.png';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Staircase Design',
      description: 'Every project begins with understanding your vision. We create custom staircase solutions that perfectly complement your space, style, and functional needs.',
      features: [
        'Personalized design consultations',
        'Material and finish selection',
        'Compliance with building codes',
      ],
      image: customDesignImage,
    },
    {
      icon: Hammer,
      title: 'Stair Installation',
      description: 'Professional installation ensuring structural integrity, safety, and lasting beauty.',
      features: [
        'Experienced installation',
        'Minimal disruption to your home',
        'Quality craftsmanship guarantee',
      ],
      image: stairInstallationImage,
    },
    {
      icon: Ruler,
      title: 'Stair Nose Manufacturing',
      description: 'Premium quality stair noses in various materials, profiles, and finishes.',
      features: [
        'Custom profile matching',
        'Wide material selection',
        'Precise edge finishing',
      ],
      image: stairNoseImage,
    },
    {
      icon: Wrench,
      title: 'Stair Renovation',
      description: 'Transform existing staircases with updates, repairs, and complete makeovers.',
      features: [
        'Tread and riser replacement',
        'Railing upgrades',
        'Finish restoration',
      ],
      image: stairRenovationImage,
    },
    {
      icon: Shield,
      title: 'Maintenance & Repair',
      description: 'Keep your stairs in perfect condition with our maintenance and repair services.',
      features: [
        'Inspection services if needed',
        'Preventive maintenance',
        'Emergency repairs',
      ],
      image: maintenanceRepairImage,
    },
  ];

  const materials = [
    { name: 'Flush Stair Nose', desc: 'Square edge profile, clean modern look' },
    { name: 'Bullnose', desc: 'Rounded edge, classic and safe design' },
    { name: 'Return Nosing', desc: 'Wraparound profile for finished edges' },
  ];

  const premiumMaterials = [
    { name: 'Engineering', desc: 'Offers stronger, more stable real wood beauty' },
    { name: 'Laminate', desc: 'Delivers durable, affordable wood-look performance.' },
    { name: 'LVP', desc: 'Brings comfort, durability, and delivers waterproof protection.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroStairsImage}
            alt="Carpentry workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive staircase solutions from design to installation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              What We Offer
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Full-service staircase solutions tailored to your needs
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.2}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="w-14 h-14 bg-[#9A7D1A]/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="text-[#9A7D1A]" size={28} />
                    </div>
                    <h3 className="text-3xl mb-4 text-stone-900">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#9A7D1A] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover ${index === 0 ? 'object-left md:object-cover' : ''}`}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Types of Stair Noses
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              We manufacture various stair nose profiles to match your flooring and design preferences
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl mb-2 text-stone-900">{material.name}</h3>
                  <p className="text-gray-600">{material.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Materials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Hardwood Type
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Choose from high-quality materials to enhance the durability and aesthetics of your staircase
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {premiumMaterials.map((material, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="text-xl mb-2 text-stone-900">{material.name}</h3>
                  <p className="text-gray-600">{material.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-center mb-4 text-stone-900">
              Our Process
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              A streamlined approach from initial consultation to final installation
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Consultation',
                desc: 'Discuss your vision, requirements, and budget',
              },
              {
                number: '02',
                title: 'Design & Planning',
                desc: 'Create detailed designs with 3D visualizations',
              },
              {
                number: '03',
                title: 'Fabrication',
                desc: 'Handcraft components with precision and care',
              },
              {
                number: '04',
                title: 'Installation',
                desc: 'Professional on-site installation and finishing',
              },
            ].map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative">
                  <div className="text-7xl text-[#9A7D1A]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl mb-2 text-stone-900">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-[35px] left-full w-full h-0.5 bg-[#9A7D1A]/20" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
        >
          <img
            src={ctaStairsImage}
            alt="Beautiful staircase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-xl md:text-2l mb-8 text-gray-200 max-w-2xl mx-auto">
            Expert stair services for homes across the Portland & Vancouver area.
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
        </AnimatedSection>
      </section>
    </div>
  );
}