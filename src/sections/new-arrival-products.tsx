import Image from 'next/image';

const NewArrivalProducts = () => {
  const newArrivals = [
    {
      name: 'Fresh Flower Basket',
      category: 'Basket',
      image: '/assets/card-img.webp', // Replace with your image path
      discount: '30% off',
      originalPrice: 60.00,
      discountedPrice: 42.00,
      rating: 5.0,
    },
    {
      name: 'Red White Rose',
      category: 'Flowers',
      image: '/assets/card-img.webp',  // Replace with your image path
      discount: '50% off',
      originalPrice: 60.00,
      discountedPrice: 30.00,
      rating: 5.0,
    },
    {
      name: 'Colorful Spring Bouquet',
      category: 'Flowers',
      image: '/assets/card-img.webp',  // Replace with your image path
      discount: '50% off',
      originalPrice: 70.00,
      discountedPrice: 35.00,
      rating: 4.8,
    },
    // Add more new arrival products here
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">New Arrival</h2>
          <p className="text-2xl font-bold text-gray-800">New Arrival Products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-102">
                <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-semibold py-1 px-2 rounded-md">{product.discount}</div>
                )}
                {/* Optional: Add favorite/share icons */}
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-white rounded-full p-1 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring focus:ring-purple-300">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </button>
                  <button className="bg-white rounded-full p-1 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring focus:ring-purple-300">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2 4h.01M9 16h.01M12 16h.01M15 16h.01"></path></svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-gray-700 font-bold">${product.discountedPrice.toFixed(2)}</span>
                    {product.discount && (
                      <span className="text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.928c-.586-.243-1.548-.243-2.134 0l-1.094 2.228-2.54-1.293c-.566-.29-1.178.103-1.03 1.647l.879 2.565L.191 8.63c-.692.586-.6 1.69.103 2.228l2.54 1.293-1.094 2.228c-.586.243-.222 1.741.586 1.741h2.518l1.094 2.228c.24.982 1.63.982 1.871 0l1.094-2.228h2.518c.808 0 1.174-1.458.586-1.741l-1.094-2.228 2.54-1.293c.704-.538.796-1.642.103-2.228L15.809 6.27l.879-2.566c.148-1.544-.454-1.938-1.029-1.647l-2.54 1.293-1.094-2.228c-.586-.243-1.277-.243-1.863 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center">
                  Shop Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Deals Banner */}
        <div className="bg-purple-600 rounded-lg shadow-md overflow-hidden mt-8">
          <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
            <div className="text-white text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-semibold uppercase tracking-wide mb-2">Weekly Deals</h2>
              <p className="text-2xl font-bold mb-3">Unbeatable Weekly Offers <br className="hidden md:block" /> on Beautiful Flowers</p>
              <p className="text-sm opacity-80 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
              <a href="/weekly-deals" className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-md hover:bg-purple-100 transition duration-300 inline-flex items-center">
                Shop Now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
            <div className="relative w-128 h-128 md:w-80 md:h-80">
              <Image src="/assets/a.png" alt="Weekly Deals Banner" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProducts;