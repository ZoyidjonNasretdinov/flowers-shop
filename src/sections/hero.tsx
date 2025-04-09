import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { GiRose } from 'react-icons/gi';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto pt-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-2/5 text-center lg:text-left mb-8 lg:mb-0 animate-fade-in-left">
          <div className="inline-flex items-center bg-white text-purple-700 rounded-full px-6 py-4 mb-8 gap-4">
            {/* Replace with your actual flower shop icon */}
            <GiRose size={20}/>
            <span className="text-[16px] font-medium">Your Trusted Online Flower Shop</span>
          </div>
          <h1 className="text-[90px] md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-15">
            The Ultimate <span className="text-purple-600">Flower Shopping Destination</span>
          </h1>
          <p className="text-gray-600 mb-10 lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center">
              Shop Now <FaArrowRight className="ml-2" />
            </button>
            <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-full transition duration-300">
              View All Products
            </button>
          </div>
          <div className="mt-10 flex items-center">
            <div className="flex -space-x-6">
              {/* Replace with actual user profile images */}
              
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-1.jpg" alt="User 1" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-2.jpg" alt="User 2" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-3.jpg" alt="User 3" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-4.jpg" alt="User 4" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-5.jpg" alt="User 5" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image src="/assets/hero-avatar-6.jpg" alt="User 6" fill style={{ objectFit: 'cover' }} loading='lazy'/>
                </div>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white flex items-center justify-center bg-gray-200 text-gray-500">
                +
              </div>
            </div>
            <div className="ml-4">
              <span className="font-semibold text-gray-700">4.9+ Ratings</span>
              <p className="text-[18px] text-gray-500">Trusted by 95k+ Customers</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-3/5 relative animate-fade-in-right">
          <Image src="/assets/hero.png" alt="Hero Image" width={600} height={600}  className='ml-40 mb-[-95px]' loading='lazy'/>
          {/* Badges */}
          <div className="absolute top-35 right-35 bg-white rounded-full shadow-md p-2 flex items-center text-sm text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Secure Payment
          </div>
          <div className="absolute bottom-50 left-50 bg-white rounded-full shadow-md p-2 flex items-center text-sm text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 000-2H6z" clipRule="evenodd" />
            </svg>
            Fast Delivery
          </div>
          <div className="absolute bottom-40 right-40 transform translate-x-1/4 -translate-y-1/4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.793a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="absolute bottom-2">New</span>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-500 opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;