import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Image with Play Button and Icons */}
        <div className="lg:w-1/2 relative rounded-full overflow-hidden shadow-xl aspect-square bg-gray-100 animate-fade-in-left">
          <Image
            src="/assets/about-image.jpg"
            alt="Woman holding flowers"
            fill
            className="object-cover "
            priority
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 shadow-lg rounded-full w-156 h-156 flex items-center justify-center transition border-6 border-purple-600 hover:border-purple-700">
           
          </div>

          {/* Decorative Icons */}
          <div className="absolute bottom-6 left-6 text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-6 right-6 text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin-slow" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.928c-.586-.243-1.548-.243-2.134 0l-1.094 2.228-2.54-1.293c-.566-.29-1.178.103-1.03 1.647l.879 2.565L.191 8.63c-.692.586-.6 1.69.103 2.228l2.54 1.293-1.094 2.228c-.586.243-.222 1.741.586 1.741h2.518l1.094 2.228c.24.982 1.63.982 1.871 0l1.094-2.228h2.518c.808 0 1.174-1.458.586-1.741l-1.094-2.228 2.54-1.293c.704-.538.796-1.642.103-2.228L15.809 6.27l.879-2.566c.148-1.544-.454-1.938-1.029-1.647l-2.54 1.293-1.094-2.228c-.586-.243-1.277-.243-1.863 0z" />
            </svg>
          </div>
        </div>

        {/* Right - Text */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-right">
          <h2 className="text-[24px] font-semibold text-gray-600 uppercase tracking-wider mb-4">About Us</h2>
          <h1 className="text-[36px] md:text-5xl font-extrabold text-gray-800 mb-8 leading-tight">
          <span className="text-purple-600">Delivering Nature's</span> Beauty to Your Door
          </h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Experience the joy of fresh, vibrant florals from the comfort of your home. Our passion for flowers is rooted in nature, sustainability, and love.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3  mb-8 bg-purple-500 rounded-lg shadow-lg">
            {[
              { number: '20+', label: 'Categories' },
              { number: '1000+', label: 'Products' },
              { number: '99%', label: 'Happy Customers' },
            ].map((item, index) => (
              <div key={index} className="text-center py-6">
                <div className="text-[48px] font-extrabold text-white">{item.number}</div>
                <div className="text-sm text-white">{item.label}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 font-medium italic">Jenny Alexander</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
