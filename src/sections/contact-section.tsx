// pages/contact.js (or app/contact/page.jsx in App Router)
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'; // Or use /24/outline for outlined icons

export default function ContactSection() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Form + Image */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {/* Image Section */}
          <div className="relative pt-10 pb-10 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            {/* Decorative background shape if needed - simplified here */}
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-full">
              {/* You can add decorative elements here */}
            </div>
            <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 lg:flex lg:items-center">
              {/* Sparkle elements (simplified) */}
              <span className="absolute top-4 left-4 text-purple-400 text-3xl transform -translate-x-4 -translate-y-4 sparkle">✨</span>
              <span className="absolute bottom-8 right-4 text-pink-400 text-2xl transform translate-x-4 translate-y-4 sparkle">💖</span>

              <Image
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                src="/assets/top-seller-img.jpg" // Replace with your image path
                alt="Woman holding flowers"
                width={500} // Provide appropriate width
                height={600} // Provide appropriate height
                priority // Add priority if it's LCP
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="py-10 px-6 sm:px-10 lg:py-16 lg:col-span-1 xl:p-20">
            <h2 className="text-lg font-medium text-gray-900">Contact us</h2>
            <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Ex. John"
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Ex. Doe"
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Enter Phone Number"
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter here..."
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter here..."
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Send a Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Middle Section: Info Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <MapPinIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="mt-2 text-base text-gray-500">
                8602 Preston Rd. Inglewood,<br/> Maine 98380
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <PhoneIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-base text-gray-500">
                +0023-456-789
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
                <EnvelopeIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-base text-gray-500">
                example@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Map Placeholder */}
        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
          {/* Replace this div with your actual map component (e.g., React Leaflet, Google Maps React) */}
          <div className="h-96 bg-gray-200 flex items-center justify-center relative">
             {/* Placeholder for map content */}
             <span className="text-gray-500">Map Area Placeholder</span>
             {/* Placeholder for map marker */}
             <div className="absolute" style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 shadow-lg">
                 <MapPinIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                {/* Optional: Pointer part of the marker */}
                <div className="absolute left-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-purple-600 transform -translate-x-1/2 translate-y-full"></div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Optional: Add some basic CSS for the sparkles if you want them animated
// You can add this to your global CSS file (e.g., styles/globals.css)
/*
@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.sparkle {
  animation: sparkle 1.5s infinite ease-in-out;
}
*/