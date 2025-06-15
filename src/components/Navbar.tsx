import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Ideas', path: '/ideas' },
    { name: 'About', path: '/about' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`mx-auto max-w-4xl ${
          scrolled ? 'bg-navy/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        } rounded-full px-6 py-3 transition-all duration-300`}>
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Code size={28} className="text-skyblue group-hover:rotate-12 transition-transform" />
              <span className="text-white font-bold text-xl font-['SF Pro Display']">Arvana</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-skyblue'
                      : 'text-white hover:text-skyblue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-skyblue transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-20 p-4"
          >
            <div className="mx-4 bg-navy/50 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg overflow-hidden">
              <nav className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`py-3 px-6 text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-skyblue bg-white/5'
                        : 'text-white hover:text-skyblue hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;