import React from 'react';
import Link from 'next/link';
import { IoFlowerSharp } from 'react-icons/io5';

const OccasionBar = () => {
  const occasions = [
    { name: 'Birthday', href: '/occasions/birthday' },
    { name: 'Weddings', href: '/occasions/weddings' },
    { name: 'Anniversary', href: '/occasions/anniversary' },
    { name: 'Thank You', href: '/occasions/thank-you' },
    { name: 'Graduation', href: '/occasions/graduation' },
    { name: 'Get Well', href: '/occasions/get-well' },
  ];

  return (
    <section className="py-5">
      <div className="bg-purple-600 text-white py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...occasions, ...occasions].map((occasion, idx) => (
          <Link
            key={idx}
            href={occasion.href}
            className="inline-flex items-center space-x-3 mr-10 hover:text-purple-200"
          >
            <span className="text-[24px] font-medium">{occasion.name}</span>
            <IoFlowerSharp size={20}/>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
};

export default OccasionBar;
