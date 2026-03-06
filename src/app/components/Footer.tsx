import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '../../assets/logo (1).svg';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Footer() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  return (
    <footer className="bg-stone-900 text-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-2">
              <img 
                src={logo} 
                alt="LuxStairs Pro" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Where luxury comes together in the final detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61587384030064" target="_blank" rel="noopener noreferrer" className="text-[#9A7D1A] hover:text-[#7A6515] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/custom_stairnoses/" target="_blank" rel="noopener noreferrer" className="text-[#9A7D1A] hover:text-[#7A6515] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#9A7D1A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#9A7D1A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#9A7D1A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#9A7D1A] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#9A7D1A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#9A7D1A]" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Vancouver+WA+98682" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#9A7D1A] transition-colors"
                >
                  Vancouver, WA 98682
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0 text-[#9A7D1A]" />
                <button
                  onClick={() => setShowPhoneModal(true)}
                  className="text-gray-400 hover:text-[#9A7D1A] transition-colors text-left cursor-pointer"
                >
                  (360) 356-8368
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0 text-[#9A7D1A]" />
                <a 
                  href="mailto:daryku@yahoo.com" 
                  className="text-gray-400 hover:text-[#9A7D1A] transition-colors"
                >
                  daryku@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LuxStairs Pro. All rights reserved.</p>
           <p>Website powered by
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#9A7D1A] hover:text-[#7A6515] transition-colors"> Design2Code Studio</a>
             </p>
        </div>
      </div>
    </footer>
  );
}