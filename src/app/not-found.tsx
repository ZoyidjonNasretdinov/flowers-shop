import React from 'react';
import Link from 'next/link';
import Layout from '@/layout/layout/layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="relative min-h-[80vh] bg-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1 className="text-[100px] sm:text-[200px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700 leading-none">
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

        {/* Decorative SVGs */}
        <div className="absolute top-10 left-10 animate-pulse">
          <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z..." clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 animate-bounce">
          <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0..." clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 animate-pulse delay-1000">
          <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.049 2.928c..." />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-500">
          <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0..." clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
