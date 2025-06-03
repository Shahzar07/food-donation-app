import React from 'react';
import { Card, CardBody } from './Card';

interface StatCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, className = '' }) => {
  return (
    <Card className={`${className} transition-transform duration-300 hover:scale-105`}>
      <CardBody className="p-6 flex flex-col items-center text-center">
        {icon && <div className="mb-3 text-primary-600">{icon}</div>}
        <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
        <div className="text-sm font-medium text-gray-500">{label}</div>
      </CardBody>
    </Card>
  );
};

export default StatCard;