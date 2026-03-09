import { useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroContactImage from '../../assets/stairs-one.png';
import ctaImage from '../../assets/stairs-seven.png';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'stairs',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xgonwvga', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'stairs',
          message: '',
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        alert('There was a problem submitting your form. Please try again or call us directly.');
      }
    } catch (error) {
      alert('There was a problem submitting your form. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '(360) 356 - 8368',
      subdetails: 'Danylo Aryku',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'daryku@yahoo.com',
      subdetails: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'Vancouver WA 98682',
      subdetails: 'Vancouver/Portland',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 6pm',
      subdetails: 'Saturday: 9am - 3pm',
    },
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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroContactImage}
            alt="Contact us"
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
              }}
            >
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              Let's discuss your project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-stone-50 p-6 rounded-xl text-center"
                >
                  <div className="w-12 h-12 bg-[#9A7D1A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-[#9A7D1A]" size={24} />
                  </div>
                  <h3 className="text-lg mb-2 text-stone-900">{info.title}</h3>
                  {info.title === 'Phone' ? (
                    <button
                      onClick={() => setShowPhoneModal(true)}
                      className="text-gray-700 hover:text-[#9A7D1A] transition-colors block w-full cursor-pointer"
                    >
                      {info.details}
                    </button>
                  ) : info.title === 'Email' ? (
                    <a 
                      href="mailto:daryku@yahoo.com" 
                      className="text-gray-700 hover:text-[#9A7D1A] transition-colors block"
                    >
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.details}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">{info.subdetails}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Choose Us - Mobile Only (Above Form) */}
          <AnimatedSection className="lg:hidden">
            <div className="bg-[#9A7D1A] text-white p-8 rounded-xl mb-12">
              <h3 className="text-2xl mb-4">Why Work With Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                  <span>Free consultation and detailed quote</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                  <span>20+ years of expert craftsmanship</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                  <span>Professional and reliable service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                  <span>Quality guarantee on all work</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                  <span>Competitive pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl mb-6 text-stone-900">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center"
                  >
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-xl mb-2">Thank You!</h3>
                    <p>We've received your message and will respond shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A7D1A]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A7D1A]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A7D1A]"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A7D1A]"
                      >
                        <option value="stairs">Stairs</option>
                        <option value="floor-installation">Floor Installation</option>
                        <option value="renovation">Renovation</option>
                        <option value="stairnose">Stair Nose Only</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9A7D1A]"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-[#9A7D1A] hover:bg-[#7A6515]'
                      } text-white`}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      {!isSubmitting && <Send size={20} />}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map and Additional Info */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-6">
                {/* Map Placeholder */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89535.77186069308!2d-122.75524983715821!3d45.63873410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af63c85914f9%3A0x8456d5112c91e3f3!2sVancouver%2C%20WA%2098682!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location Map"
                  />
                </div>

                {/* Why Choose Us - Desktop Only */}
                <div className="hidden lg:block bg-[#9A7D1A] text-white p-8 rounded-xl">
                  <h3 className="text-2xl mb-4">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      <span>Free consultation and detailed quote</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      <span>20+ years of expert craftsmanship</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      <span>Professional and reliable service</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      <span>Quality guarantee on all work</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                      <span>Competitive pricing with no hidden fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
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