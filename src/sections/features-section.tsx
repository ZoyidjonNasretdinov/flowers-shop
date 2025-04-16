import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
        <Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          }
          title="Free Shipping"
          description="Free shipping for order above $50"
        />
        <Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.707-.707a2 2 0 012.828 0l.707.707A2 2 0 009.07 7.07H10a2 2 0 012-2h4a2 2 0 012 2h.93a2 2 0 001.664.89l.707.707a2 2 0 012.828 0l.707-.707A2 2 0 0014.93 7.07H14a2 2 0 01-2-2h-4a2 2 0 01-2 2h-.93a2 2 0 00-1.664.89l-.707.707a2 2 0 01-2.828 0l-.707-.707A2 2 0 005.07 7.07H5a2 2 0 01-2 2z"
              />
            </svg>
          }
          title="Flexible Payment"
          description="Multiple secure payment options"
        />
        <Feature
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          title="24x7 Support"
          description="We support online all days."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;