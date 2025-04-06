'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonialsData = [
    {
      rating: 5,
      comment:
        'Gorgeous Bouquets! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
      customerName: 'Jenny Wilson',
      customerTitle: 'Happy Customer',
      customerImage:
        'https://i.fbcd.co/products/resized/resized-750-500/s211206-kids-avat001-mainpreview-68e535dc97667c8fffa14c6da9e6f5787447ab7513f0fee9a9a39b9856312c9c.jpg',
    },
    {
      rating: 5,
      comment:
        'Beautiful Flowers! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
      customerName: 'Dianne Russell',
      customerTitle: 'Happy Customer',
      customerImage:
        'https://i.fbcd.co/products/resized/resized-750-500/s211206-kids-avat001-mainpreview-68e535dc97667c8fffa14c6da9e6f5787447ab7513f0fee9a9a39b9856312c9c.jpg',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">
            Testimonial
          </h2>
          <p className="text-2xl font-bold text-gray-800">What Our Clients Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition hover:shadow-lg"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.customerImage}
                    alt={testimonial.customerName}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized // Needed for external image
                  />
                </div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    {testimonial.customerName}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.customerTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Dots */}
        {testimonialsData.length > 1 && (
          <div className="flex justify-center mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition ${
                  index === 0
                    ? 'bg-purple-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
