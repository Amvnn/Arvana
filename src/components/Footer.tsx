import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Code, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code size={28} className="text-skyblue" />
              <span className="text-white font-bold text-xl">Arvana</span>
            </div>
            <p className="text-gray-400 max-w-md">
              We don't build apps, we build impact. Solving real problems through elegant software solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-skyblue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-skyblue transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-skyblue transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-skyblue transition-colors">About Us</Link></li>
              <li><Link to="/how-we-work" className="text-gray-400 hover:text-skyblue transition-colors">How We Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-skyblue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-skyblue mt-1" />
                <span className="text-gray-400">contact@arvana.tech</span>
              </div>
              
              <div className="pt-4">
                <h4 className="text-white font-medium mb-2">Subscribe to our newsletter</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-2 rounded-l-md bg-navy-light text-white flex-grow focus:outline-none"
                  />
                  <button className="bg-skyblue px-4 py-2 rounded-r-md hover:bg-skyblue-dark transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Powered by Arvana © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;