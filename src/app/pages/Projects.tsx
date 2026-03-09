import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight, X } from 'lucide-react';

import ctaImage from '../../assets/stairs-seven.png';
import heroProjectsImage from '../../assets/projects.png';
import modernFloatingStairsImage from '../../assets/stairs-three.png';
import openFullTreadsImage from '../../assets/stairs-11.png';
import premiumStairNoseImage from '../../assets/light-stairs.png';
import contemporaryHomeImage from '../../assets/stairs-five.png';
import luxuryHardwoodFlooringImage from '../../assets/floor.png';
import stairNoseRefinishingImage from '../../assets/stairs-twelve.png';
import customWalnutStairNosesImage from '../../assets/my stairs.png';
import widePlankOakFlooringImage from '../../assets/living-room.png';
import europeanOakFlooringSuiteImage from '../../assets/floor-two.png';
import naturalOakStairNosesImage from '../../assets/stairs-one.png';
import { Link } from 'react-router-dom';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Floating Stairs',
      category: 'stairs',
      description: 'Sleek floating staircase with dark oak treads and black cable railing against a dramatic dark marble wall. A bold, contemporary statement piece for luxury interiors.',
      image: modernFloatingStairsImage,
      details: 'Material: White Oak, Glass | Style: Contemporary',
    },
    {
      id: 2,
      title: 'Open Full Treads',
      category: 'stairs',
      description: 'Modern open tread staircase featuring thick oak treads with central black metal support. Clean, minimalist design that creates an open and airy feel in contemporary homes.',
      image: openFullTreadsImage,
      details: 'Material: Oak, Steel | Style: Modern',
    },
    {
      id: 3,
      title: 'Stair Nose Installation',
      category: 'stair-noses',
      description: 'Custom stair nose installation featuring matching hardwood transitions. Provides a seamless finish with enhanced safety and durability for high-traffic areas.',
      image: premiumStairNoseImage,
      details: 'Material: Hardwood | Style: Custom Match',
    },
    {
      id: 4,
      title: 'Contemporary Home Design',
      category: 'stairs',
      description: 'Minimalist staircase design with clean lines and hidden lighting. Features engineered white oak and frameless glass panels for an airy, modern aesthetic.',
      image: contemporaryHomeImage,
      details: 'Material: Engineered Oak, Glass | Style: Minimalist',
    },
    {
      id: 5,
      title: 'Luxury Hardwood Flooring',
      category: 'flooring',
      description: 'Complete hardwood flooring installation featuring Brazilian cherry with custom stain. Expert craftsmanship ensuring perfect alignment and long-lasting beauty.',
      image: luxuryHardwoodFlooringImage,
      details: 'Material: Brazilian Cherry | Style: Luxury',
    },
    {
      id: 6,
      title: 'Stair Nose Refinishing',
      category: 'stair-noses',
      description: 'Professional stair nose refinishing with precision craftsmanship. Restores worn edges while maintaining consistency with existing hardwood floors.',
      image: stairNoseRefinishingImage,
      details: 'Material: Hardwood | Style: Refinished',
    },
    {
      id: 7,
      title: 'Custom Stair Noses',
      category: 'stair-noses',
      description: 'Premium stair nose installation with precision edging. Custom-crafted to provide seamless transitions and enhanced safety for this elegant home renovation.',
      image: customWalnutStairNosesImage,
      details: 'Material: Hardwood | Style: Custom',
    },
    {
      id: 8,
      title: 'Modern Open Concept Renovation',
      category: 'flooring',
      description: 'Complete home transformation featuring light oak flooring and contemporary metal stair railings. Two-story open layout showcases seamless integration of flooring, stairs, and modern design elements.',
      image: widePlankOakFlooringImage,
      details: 'Material: Light Oak | Style: Contemporary',
    },
    {
      id: 9,
      title: 'Light Hardwood Flooring Installation',
      category: 'flooring',
      description: 'Expansive open-concept design featuring seamless light hardwood flooring throughout kitchen and dining areas. Floor-to-ceiling windows and white cabinetry create a bright, airy atmosphere in this modern renovation.',
      image: europeanOakFlooringSuiteImage,
      details: 'Material: Light Hardwood | Style: Modern',
    },
        {
      id: 10,
      title: 'Natural Oak Stair Noses',
      category: 'stair-noses',
      description: 'Beautiful natural oak stair noses with white risers and black metal balusters. Clean, modern farmhouse aesthetic with precision-fitted treads that complement the wide-plank oak flooring throughout the home.',
      image: naturalOakStairNosesImage,
      details: 'Material: Natural Oak | Style: Modern Farmhouse',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'stairs', label: 'Stairs' },
    { id: 'stair-noses', label: 'Stair Noses' },
    { id: 'flooring', label: 'Flooring Installation' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            src={heroProjectsImage}
            alt="Staircase projects"
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
              Our Projects
            </h1>
            <p className="text-xl text-gray-200">
              A showcase of our finest staircase installations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-[#9A7D1A] text-white'
                    : 'bg-stone-100 text-gray-700 hover:bg-stone-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedProject(project.id)}
                    className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-stone-900 text-white px-3 py-1 rounded-full text-sm">
                          {project.category === 'stairs' ? 'Stairs' : project.category === 'stair-noses' ? 'Stair Noses' : 'Flooring Installation'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2 text-[#9A7D1A]">{project.title}</h3>
                      <p className="text-gray-600 line-clamp-2">{project.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {projects.find(p => p.id === selectedProject) && (
                <>
                  <div className="relative h-96">
                    <img
                      src={projects.find(p => p.id === selectedProject)!.image}
                      alt={projects.find(p => p.id === selectedProject)!.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <X size={24} className="text-gray-900" />
                    </button>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl text-stone-900">
                        {projects.find(p => p.id === selectedProject)!.title}
                      </h2>
                      <span className="bg-[#9A7D1A]/10 text-[#9A7D1A] px-4 py-1 rounded-full">
                        {projects.find(p => p.id === selectedProject)!.category === 'stairs' 
                          ? 'Stairs' 
                          : projects.find(p => p.id === selectedProject)!.category === 'stair-noses'
                          ? 'Stair Noses'
                          : 'Flooring Installation'}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {projects.find(p => p.id === selectedProject)!.description}
                    </p>
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-stone-900">Project Details</h4>
                      <p className="text-gray-600">
                        {projects.find(p => p.id === selectedProject)!.details}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            src={ctaImage}
            alt="Beautiful staircase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to Elevate Your Space?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's bring your vision to life with expert craftsmanship and attention to detail
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
