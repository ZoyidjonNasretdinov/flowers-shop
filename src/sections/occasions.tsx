'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

// Touch Scroll Carousel Component
const TouchScrollCarousel = ({
  items,
}: {
  items: {
    title: string;
    image?: string;
    description?: string;
    link?: string;
  }[];
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(event.currentTarget.scrollLeft);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'auto';
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust this multiplier for scroll speed
    carouselRef.current.scrollLeft = scrollPosition - walk;
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 200;
      }
    },
    onSwipedRight: () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= 200;
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.cursor = 'grab';
    }
    return () => {
      if (carousel) {
        carousel.style.cursor = '';
      }
    };
  }, []);

  return (
    <div
      {...swipeHandlers}
      ref={(el) => {
        carouselRef.current = el;
        swipeHandlers.ref(el);
      }}
      className="overflow-x-auto scroll-smooth whitespace-nowrap -mx-4 px-4 md:px-0"
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {items.map((item, index) => (
        <div key={index} className="inline-block w-48 sm:w-64 md:w-80 mr-6 last:mr-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {item.image && (
              <div className="relative h-32 sm:h-40 md:h-48">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              {item.description && <p className="text-sm text-gray-600 mb-2">{item.description}</p>}
              {item.link && (
                <a
                  href={item.link}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md text-center"
                >
                  View
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Occasions Section
const Occasions = () => {
  const occasionItems = [
    { title: 'Weddings', image: '/images/occasions/wedding.png', link: '/occasions/weddings' },
    { title: 'Birthday', image: '/images/occasions/birthday.png', link: '/occasions/birthday' },
    { title: 'Anniversary', image: '/images/occasions/anniversary.png', link: '/occasions/anniversary' },
    { title: 'Thank You', image: '/images/occasions/thank-you.png', link: '/occasions/thank-you' },
    { title: 'Graduation', image: '/images/occasions/graduation.png', link: '/occasions/graduation' },
    { title: 'Get Well Soon', image: '/images/occasions/get-well-soon.png', link: '/occasions/get-well-soon' },
    { title: 'Sympathy', image: '/images/occasions/sympathy.png', link: '/occasions/sympathy' },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Occasions</h2>
          <p className="text-2xl font-bold text-gray-800">Shop By Occasions</p>
        </div>
        <TouchScrollCarousel items={occasionItems} />
      </div>
    </section>
  );
};

// Deals Carousel Section
const DealsCarousel = () => {
  const dealItems = [
    {
      discount: 'Flat 20% Discount',
      title: 'Lovely Fresh Bouquets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/deals/bouquet1.jpg',
      link: '/shop/lovely-bouquets',
    },
    {
      discount: 'Flat 25% Discount',
      title: 'Pure Bloom Collection',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/images/deals/bouquet2.jpg',
      link: '/shop/pure-bloom',
    },
    {
      discount: 'Limited Time Offer',
      title: 'Spring Flower Specials',
      description: 'Discover our beautiful spring collection at discounted prices.',
      image: '/images/deals/bouquet3.jpg',
      link: '/shop/spring-specials',
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Featured Deals</h2>
        </div>
        <TouchScrollCarousel items={dealItems} />
      </div>
    </section>
  );
};

export { Occasions, DealsCarousel };
