import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { HiOutlineBadgeCheck, HiOutlineSupport } from 'react-icons/hi';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4">
    <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const features: FeatureProps[] = [
  {
    icon: <FaShippingFast className="text-[30px] text-purple-600" />,
    title: 'Free Shipping',
    description: 'Free shipping for orders above $50',
  },
  {
    icon: (
      <HiOutlineBadgeCheck className="text-[30px] text-purple-600" />
    ),
    title: 'Flexible Payment',
    description: 'Multiple secure payment options',
  },
  {
    icon: <HiOutlineSupport className="text-[30px] text-purple-600" />,
    title: '24x7 Support',
    description: 'We support online all days.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center flex-wrap gap-6">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
