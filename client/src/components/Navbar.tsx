import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-500 p-2 rounded-xl">
            <Bot className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
            Kidrove<span className="text-blue-500">.</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="hero" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer transition-colors">Home</Link>
          <Link to="details" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer transition-colors">Details</Link>
          <Link to="outcomes" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer transition-colors">Outcomes</Link>
          <Link to="faq" smooth={true} duration={500} className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer transition-colors">FAQ</Link>
        </div>

        <Link to="register" smooth={true} duration={500} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 cursor-pointer transform hover:-translate-y-0.5">
          Enroll Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
