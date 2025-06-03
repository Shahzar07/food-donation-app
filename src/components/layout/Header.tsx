import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              FoodShare
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}>
              How It Works
            </a>
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}>
              Features
            </a>
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}>
              Impact
            </a>
            <a href="#" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-500 transition-colors`}>
              About Us
            </a>
            <Button variant="primary" size="sm">
              Join Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
                Impact
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
                About Us
              </a>
              <Button variant="primary" size="sm" fullWidth>
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;