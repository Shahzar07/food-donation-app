import React, { useState } from 'react';
import Button from '../ui/Button';
import Card, { CardBody } from '../ui/Card';
import { UserCircle, Store, Heart } from 'lucide-react';

const LoginSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'donor' | 'recipient'>('donor');

  return (
    <section id="signup" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have food to share or are in need, our platform connects you with the right people. 
            Choose your path below to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Selector */}
          <div className="flex flex-col sm:flex-row justify-center mb-8 gap-4">
            <Button
              variant={activeTab === 'donor' ? 'primary' : 'outline'}
              size="lg"
              className="flex items-center justify-center gap-2 flex-1 sm:flex-auto animate-slide-up sm:min-w-[200px]"
              onClick={() => setActiveTab('donor')}
            >
              <Store size={20} />
              I Want to Donate Food
            </Button>
            <Button
              variant={activeTab === 'recipient' ? 'secondary' : 'outline'}
              size="lg"
              className="flex items-center justify-center gap-2 flex-1 sm:flex-auto animate-slide-up sm:min-w-[240px]"
              onClick={() => setActiveTab('recipient')}
            >
              <Heart size={20} />
              I Need Food / Represent an NGO
            </Button>
          </div>

          {/* Card Content based on Tab */}
          <Card className="transition-all duration-500 animate-fade-in">
            <CardBody className="p-8">
              {activeTab === 'donor' ? (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Store size={48} className="mx-auto text-primary-500 mb-2" />
                    <h3 className="text-2xl font-semibold text-gray-800">Food Donor Registration</h3>
                    <p className="text-gray-600">Restaurants, caterers, grocery stores, and individuals with excess food</p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name or Business Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                      </div>
                      <div>
                        <label htmlFor="donorType" className="block text-sm font-medium text-gray-700 mb-1">Donor Type</label>
                        <select id="donorType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option>Restaurant</option>
                          <option>Grocery Store</option>
                          <option>Catering Service</option>
                          <option>Individual</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input type="text" id="address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                      <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="terms" className="rounded text-primary-600 focus:ring-primary-500 h-4 w-4" />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    <Button variant="primary" size="lg" fullWidth className="mt-6">
                      Create Donor Account
                    </Button>
                  </form>
                  <div className="text-center mt-4 text-sm text-gray-600">
                    Already have an account? <a href="#" className="text-primary-600 hover:underline">Sign In</a>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Heart size={48} className="mx-auto text-secondary-500 mb-2" />
                    <h3 className="text-2xl font-semibold text-gray-800">Recipient Registration</h3>
                    <p className="text-gray-600">NGOs, shelters, community kitchens, and individuals in need</p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">Full Name or Organization Name</label>
                        <input type="text" id="recipientName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500" />
                      </div>
                      <div>
                        <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="recipientEmail" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="recipientPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="recipientPhone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500" />
                      </div>
                      <div>
                        <label htmlFor="recipientType" className="block text-sm font-medium text-gray-700 mb-1">Recipient Type</label>
                        <select id="recipientType" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500">
                          <option>Food Bank</option>
                          <option>Homeless Shelter</option>
                          <option>Community Kitchen</option>
                          <option>Individual/Family</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="recipientAddress" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input type="text" id="recipientAddress" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500" />
                    </div>
                    <div>
                      <label htmlFor="recipientPassword" className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                      <input type="password" id="recipientPassword" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="recipientTerms" className="rounded text-secondary-600 focus:ring-secondary-500 h-4 w-4" />
                      <label htmlFor="recipientTerms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-secondary-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-secondary-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    <Button variant="secondary" size="lg" fullWidth className="mt-6">
                      Create Recipient Account
                    </Button>
                  </form>
                  <div className="text-center mt-4 text-sm text-gray-600">
                    Already have an account? <a href="#" className="text-secondary-600 hover:underline">Sign In</a>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;