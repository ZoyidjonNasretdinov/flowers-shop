import Image from 'next/image';
import { IoMdStar } from 'react-icons/io';

const DealsOfTheDay = () => {
  const deals = [
    {
      name: 'Rose Boutique',
      category: 'Bouquets',
      image: '/assets/card-img.webp',
      discount: '50% off',
      originalPrice: 70.0,
      discountedPrice: 35.0,
      rating: 4.8,
    },
    {
      name: 'Rose Bouquets',
      category: 'Bouquets',
      image: '/assets/card-image-2.png',
      discount: '30% off',
      originalPrice: 50.0,
      discountedPrice: 35.0,
      rating: 4.9,
    },
    {
      name: 'Flower Basket',
      category: 'Basket',
      image: '/assets/card-image-3.png',
      discount: '20% off',
      originalPrice: 100.0,
      discountedPrice: 80.0,
      rating: 5.0,
    },
    {
      name: 'Colorful Rose',
      category: 'Bouquets',
      image: '/assets/card-image-4.png',
      discount: '10% off',
      originalPrice: 50.0,
      discountedPrice: 45.0,
      rating: 4.8,
    },
    {
      name: 'Pink Flowers',
      category: 'Flowers',
      image: '/assets/card-img.webp',
      discount: '50% off',
      originalPrice: 40.0,
      discountedPrice: 20.0,
      rating: 4.9,
    },
    {
      name: 'Rose Bouquets',
      category: 'Bouquets',
      image: '/assets/card-img.webp',
      discount: '10% off',
      originalPrice: 100.0,
      discountedPrice: 90.0,
      rating: 4.8,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-[24px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Best Seller</h2>
          <p className="text-[42px] font-bold text-purple-800">Deals of the Day</p>
          <p className="text-gray-600 text-[16px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* ✅ Banner - egallaydi 2 qatorni birinchi ustunda */}
          <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden shadow-md h-full bg-[url('/assets/top-seller-img.jpg')] bg-cover bg-center">
            <div className="relative h-full min-h-[100%]">
              <div className="absolute inset-4  border-white border-4 rounded-md flex flex-col items-center justify-center text-white text-center p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Limited Time Offer</h2>
                <p className="mb-4">Get up to 50% off on selected bouquets!</p>
                <a
                  href="/sale"
                  className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-md hover:bg-purple-100 transition duration-300"
                >
                  Shop Now
                </a>
                <div className="absolute flex flex-col items-center bottom-3 text-white text-sm text-left">
                  <p className="font-semibold">06 DEC - 18 DEC</p>
                  <p>50% Off</p>
                  <a href="/sale" className="inline-flex items-center mt-2">
                    Shop Now
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {deals.map((deal, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-102">
            <Image src={deal.image} alt={deal.name} layout="fill" objectFit="cover" />
            {deal.discount && (
              <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold py-1 px-2 rounded-md">{deal.discount}</div>
            )}
            <div className="absolute top-2 right-2 flex space-x-2">
              {/* Icons */}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-md font-semibold text-gray-800 mb-1">{deal.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{deal.category}</p>
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-gray-700 font-bold">${deal.discountedPrice.toFixed(2)}</span>
                {deal.discount && (
                  <span className="text-gray-400 line-through ml-2">${deal.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <div className="flex items-center">
                <IoMdStar className='w-4 h-4 text-yellow-400' />
                <span className="text-sm text-gray-600">{deal.rating}</span>
              </div>
            </div>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center">
              View Deal <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default DealsOfTheDay;