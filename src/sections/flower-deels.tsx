import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const FlowerDeals = () => {
  const deals = [
    {
      discount: 'Flat 20% Discount',
      title: 'Lovely Fresh Bouquets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/occasions-1.jpg',
      buttonText: 'Shop Now',
      buttonLink: '#',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      discount: 'Flat 25% Discount',
      title: 'Pure Bloom Collection',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/assets/occasions-1.jpg',
      buttonText: 'Shop Now',
      buttonLink: '#',
      bgColor: 'bg-purple-600',
      textColor: 'text-white',
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 mt-[100px] container mx-auto justify-center">
      {deals.map((deal, index) => (
        <div
          key={index}
          className={`relative rounded-2xl shadow-lg overflow-hidden ${deal.bgColor} ${deal.textColor} w-full md:w-[48%] h-[500px] `}
        >
          <div className="p-8 w-1/2 h-full flex flex-col justify-center z-10 relative">
            <div className="mb-6">
              <span className="bg-gray-200 text-gray-700 py-3 px-3 rounded-md text-base font-semibold">
                {deal.discount}
              </span>
            </div>
            <h3 className="text-[25px] font-bold mb-2">{deal.title}</h3>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-4">{deal.description}</p>
            <button
              className="bg-purple-500 flex items-center gap-3 text-white py-4 px-5 rounded-md text-base font-semibold hover:bg-purple-700 transition duration-200 w-max"
            >
              {deal.buttonText} <FaArrowRightLong />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2">
            <img
              src={deal.image}
              alt={deal.title}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowerDeals;
