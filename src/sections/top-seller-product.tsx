"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IoMdStar } from 'react-icons/io';

const TopSellerProducts = () => {
  const products = [
    {
      name: 'Blue White Bouquets',
      image: '/assets/card-img.webp',
      discount: '50% off',
      originalPrice: 90.00,
      discountedPrice: 45.00,
      rating: 4.9,
    },
    {
      name: 'Royal Pink Bouquets',
      image: '/assets/card-image-2.png',
      discount: '20% off',
      originalPrice: 60.00,
      discountedPrice: 48.00,
      rating: 4.9,
    },
    {
      name: 'Lavenders Bouquets',
      image: '/assets/card-image-3.png',
      discount: '20% off',
      originalPrice: 30.00,
      discountedPrice: 24.00,
      rating: 4.9,
    },
    {
      name: 'Rose Bouquets',
      image: '/assets/card-image-4.png',
      discount: '30% off',
      originalPrice: 50.00,
      discountedPrice: 35.00,
      rating: 4.9,
    },
  ];

  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 48, seconds: 18 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                clearInterval(interval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      
      <div className="container mx-auto px-4 relative">
        {/* Top Seller Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[22px] font-semibold text-gray-600 uppercase tracking-wide mb-4">Our Products</h2>
            <p className="text-[48px] font-bold text-purple-800">Our Top Seller Products</p>
          </div>
          <a href="/products" className="hidden md:inline-block bg-purple-500 border border-purple-300 hover:bg-purple-300 text-white font-semibold py-3 px-4 rounded-full transition duration-300">
            View All Products
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-gray rounded-lg shadow-md overflow-hidden">
              <div className="relative h-102">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover"  className='bg-white'/>
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold py-1 px-2 rounded-md">{product.discount}</div>
                )}
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 bg-purple-600 bg-opacity-75 text-white text-xs font-semibold p-2 flex justify-around w-[70%] mx-auto">
                    <div>{timeLeft.days.toString().padStart(2, '0')} <br /><span className="text-xxs">Days</span></div>
                    <div>{timeLeft.hours.toString().padStart(2, '0')} <br /><span className="text-xxs">Hours</span></div>
                    <div>{timeLeft.minutes.toString().padStart(2, '0')} <br /><span className="text-xxs">Mins</span></div>
                    <div>{timeLeft.seconds.toString().padStart(2, '0')} <br /><span className="text-xxs">Sec</span></div>
                  </div>
                )}
              </div>
              <div className="p-4 bg-[url['/assets/top-seller-main']] bg-cover bg-center bg-no-repeat">
                <h3 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">Bouquets</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-700 font-bold">${product.discountedPrice.toFixed(2)}</span>
                    {product.discount && (
                      <span className="text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                     <IoMdStar className='w-4 h-4 text-yellow-400' />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Holiday Sales Banner */}
        <div className="relative rounded-lg overflow-hidden shadow-md h-[800px]">
          <div className="relative  md:h-72 grid grid-cols-6  gap-4">
            <div className="col-span-1 relative">
              <Image src="/assets/top-seller-left-image.jpg" alt="Holiday Sales Banner" layout="fill" objectFit="cover" />
            </div>
            <div className="col-span-4 h-[800px] bg-purple-600 bg-opacity-80 flex flex-col items-center justify-center text-white text-center p-6 bg-[url('/assets/top-seller-main-bg.png')] bg-cover bg-center bg-no-repeat">
              <h2 className="text-[144px] md:text-2xl font-bold mb-2">Holiday Sales</h2>
              <p className="mb-4">Get 50% off - Limited Time Offer!</p>
              <div className="flex gap-4 mb-4">
                <div>
                  <span className="text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                  <p className="text-sm">Days</p>
                </div>
                <span className="text-xl">:</span>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <p className="text-sm">Hours</p>
                </div>
                <span className="text-xl">:</span>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <p className="text-sm">Minutes</p>
                </div>
                <span className="text-xl">:</span>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
              <a href="/sale" className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-md hover:bg-purple-100 transition duration-300">
                Shop Now <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="col-span-1 relative">
              <Image src="/assets/top-seller-right-image.jpg" alt="Holiday Sales Banner" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        {/* Mobile View Button */}
        <div className="mt-8 md:hidden text-center">
          <a href="/products" className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-300">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopSellerProducts;
