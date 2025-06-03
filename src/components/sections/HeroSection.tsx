import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-primary-900/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Reduce Waste, Fight Hunger – Donate Food Today!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Connect with local organizations and individuals in need. Your excess food can make a real difference in someone's life.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="animate-pulse-slow"
            onClick={scrollToSignup}
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;