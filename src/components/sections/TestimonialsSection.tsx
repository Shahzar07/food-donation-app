import React from 'react';
import { User, Users, Utensils, Store } from 'lucide-react';
import StatCard from '../ui/StatCard';
import Card, { CardBody } from '../ui/Card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardBody className="p-6">
        <div className="mb-4 text-secondary-500">
          "
        </div>
        <p className="text-gray-700 mb-6 italic">{quote}</p>
        <div className="flex items-center">
          {image ? (
            <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <User size={20} className="text-gray-500" />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-800">{author}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "As a restaurant owner, I used to throw away so much food at the end of the day. Now I can easily donate it to those in need, and the process couldn't be simpler.",
      author: "Michael Chen",
      role: "Restaurant Owner",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Our shelter has been able to serve 40% more meals since joining this platform. The real-time notifications about available food donations have been a game-changer.",
      author: "Sarah Johnson",
      role: "Shelter Coordinator",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The impact tracking feature gives me a sense of accomplishment. It's amazing to see how many meals my small café has contributed to the community.",
      author: "David Muller",
      role: "Café Owner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
  ];

  const stats = [
    {
      value: "250K+",
      label: "Meals Donated",
      icon: <Utensils size={24} />,
    },
    {
      value: "520",
      label: "Active Donors",
      icon: <Store size={24} />,
    },
    {
      value: "175",
      label: "Partner Organizations",
      icon: <Users size={24} />,
    },
    {
      value: "45K",
      label: "People Helped",
      icon: <User size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact & Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the difference we're making together in communities across the country, 
            and hear from the people who are part of our movement.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              icon={stat.icon} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;