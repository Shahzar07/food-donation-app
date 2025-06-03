import React from 'react';
import { Calendar, RefreshCw, Truck, BarChart3 } from 'lucide-react';
import Card, { CardBody } from '../ui/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg group">
      <CardBody className="p-6 flex flex-col items-center text-center">
        <div className={`p-4 rounded-full ${color} mb-5 text-white transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardBody>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Calendar size={24} />,
      title: "Easy Donation Scheduling",
      description: "Schedule food pickups with just a few clicks. Choose dates and times that work for your schedule.",
      color: "bg-primary-500",
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Real-Time Food Matching",
      description: "Our intelligent system matches your food donations with the most suitable recipients in your area.",
      color: "bg-secondary-500",
    },
    {
      icon: <Truck size={24} />,
      title: "Safe & Hygienic Deliveries",
      description: "All food transfers follow strict safety protocols ensuring quality and hygiene standards are maintained.",
      color: "bg-primary-600",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Community Impact Tracking",
      description: "Track your contribution's impact with detailed stats on meals provided and people helped.",
      color: "bg-secondary-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Designed to make food donation simple, efficient, and impactful. Our platform connects 
            donors and recipients through these powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;