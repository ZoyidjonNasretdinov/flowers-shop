import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/layout/layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="relative min-h-[80vh] bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1
            className="text-[100px] sm:text-[200px] md:text-[250px] font-extrabold text-transparent bg-clip-text 
                       bg-[url('/assets/text-bg.jpg')] bg-cover bg-center bg-no-repeat leading-none"
          >
            404
          </h1>

          <h2 className="text-3xl font-bold text-gray-900">
            Oops! <span className='text-purple-600'>Page not found</span>
          </h2>
          <p className="text-gray-500">
            The page you're looking for doesn’t exist. Maybe it was moved or never created.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6-6 6 6-6 6" />
            </svg>
            Go To Home Page
          </Link>
        </div>

        {/* Decorative Flower Icons */}
        <div className="absolute top-12 left-12 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 011 1v1.26a2 2 0 001.528 1.956l1.23.246a1 1 0 01.707 1.38l-.49 1.176a2 2 0 00.36 2.1l.928.928a1 1 0 010 1.414l-.928.928a2 2 0 00-.36 2.1l.49 1.176a1 1 0 01-.707 1.38l-1.23.246A2 2 0 0113 19.74V21a1 1 0 01-2 0v-1.26a2 2 0 00-1.528-1.956l-1.23-.246a1 1 0 01-.707-1.38l.49-1.176a2 2 0 00-.36-2.1l-.928-.928a1 1 0 010-1.414l.928-.928a2 2 0 00.36-2.1l-.49-1.176a1 1 0 01.707-1.38l1.23-.246A2 2 0 0111 4.26V3a1 1 0 011-1z" />
          </svg>
        </div>

        <div className="absolute top-24 right-14 animate-spin-slow">
          <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a1 1 0 011 1v2a3 3 0 002.995 2.824l2-.001a1 1 0 110 2h-2a3 3 0 00-2.995 2.824L13 13v2a1 1 0 11-2 0v-2a3 3 0 00-2.824-2.995L6 11H4a1 1 0 010-2h2a3 3 0 002.824-2.995L9 4V3a1 1 0 011-1z" />
          </svg>
        </div>

        <div className="absolute bottom-16 right-20 animate-pulse">
          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8 2 5 5 5 9c0 3.1 2.2 5.8 5.5 6.7V22l1.5-1 1.5 1v-6.3C16.8 14.8 19 12.1 19 9c0-4-3-7-7-7z" />
          </svg>
        </div>

        <div className="absolute bottom-20 left-16 animate-bounce">
          <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.995 12c0-2.206 1.79-4 3.995-4s3.995 1.794 3.995 4-1.79 4-3.995 4-3.995-1.794-3.995-4z" />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
