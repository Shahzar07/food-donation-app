import React from 'react';
import { UserPlus, ClipboardList, Handshake, Utensils } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({ icon, step, title, description, isLast = false }) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center z-10 relative">
          {icon}
        </div>
        {!isLast && (
          <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-primary-200 hidden md:block" 
               style={{ transform: 'translateY(-50%)' }} />
        )}
      </div>
      <div className="text-center mt-4">
        <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block">
          Step {step}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus size={28} />,
      step: 1,
      title: "Sign Up as Donor/Recipient",
      description: "Create your account as a food donor or recipient. Complete your profile with relevant details.",
    },
    {
      icon: <ClipboardList size={28} />,
      step: 2,
      title: "Post/Request Food",
      description: "Donors list available food with details. Recipients browse listings or post specific needs.",
    },
    {
      icon: <Handshake size={28} />,
      step: 3,
      title: "Match & Deliver",
      description: "Our system matches compatible donors and recipients. Arrange pickup or delivery details.",
    },
    {
      icon: <Utensils size={28} />,
      step: 4,
      title: "Feed the Hungry",
      description: "Food reaches those who need it most. Track your impact and contribute to reducing food waste.",
      isLast: true,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process makes food donation and distribution efficient and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;