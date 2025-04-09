import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/layout/layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="relative min-h-[80vh] bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1
            className="text-[140px] sm:text-[200px] md:text-[250px] font-extrabold text-transparent bg-clip-text 
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
      </div>
    </Layout>
  );
};

export default NotFound;
