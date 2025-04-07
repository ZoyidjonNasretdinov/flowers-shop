import React from 'react';
import Link from 'next/link';
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
import { BsCurrencyExchange, BsFacebook, BsInstagram, BsTranslate, BsYoutube } from 'react-icons/bs';
import { RiPinterestFill, RiTelegram2Fill } from 'react-icons/ri';
import { FaShop } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className="bg-purple-700 text-white py-2">
      <div className="container mx-auto flex justify-between items-center py-[18px]">
        <div>
          card:
        </div>

        {/* Left Section */}
        <div className="flex items-center justify-center space-x-4">
          <p className="text-[18px]">GET 20% OFF for your first order. <Link href="/signup" className="underline">Sign up now</Link></p>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:opacity-75 text-[20px]"><BsFacebook /></Link>
          <Link href="#" className="hover:opacity-75 text-[20px]"><RiTelegram2Fill /></Link>
          <Link href="#" className="hover:opacity-75 text-[20px]"><BsInstagram /></Link>
          <Link href="#" className="hover:opacity-75 text-[20px]"><BsYoutube /></Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-semibold text-gray-800">
            <div className="bg-purple-600 text-white rounded-full p-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-2 5zm0-4L9 9m15 4l-2 5m-10-4l4-8m-9 4h14m-9-4a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            Flower Shop
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-gray-700 text-[18px]">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <Link href="/shop" className="hover:text-purple-600">Shop</Link>
            <Link href="/occasions" className="hover:text-purple-600">Occasions</Link>
            <Link href="/generetor" className="hover:text-purple-600">Generetor</Link>
            <Link href="/about" className="hover:text-purple-600">About Us</Link>
            <Link href="/contact" className="hover:text-purple-600">Contact Us</Link>
            <Link href="/blogs" className="hover:text-purple-600">Blogs</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-gray-700">
            <div className="flex space-x-1">
              <div className="flex items-center space-x-2">
                <label htmlFor="language"><BsTranslate /></label>
                <select
                  id="language"
                  className="bg-purple-600 border border-purple-500 text-white px-2 py-1 rounded-md focus:outline-none"
                >
                    <option>English</option>
                    <option>O‘zbekcha</option>
                    <option>العربية</option>
                    <option>Русский</option>
                    <option>Türkçe</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="currency"><BsCurrencyExchange /></label>
                <select
                  id="currency"
                  className="bg-purple-600 border border-purple-500 text-white px-2 py-1 rounded-md focus:outline-none"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>UZS</option>
                  <option>RUB</option>
                </select>
              </div>
            </div>
            <button className="hover:text-purple-600 focus:outline-none">
              <FaSearch />
            </button>
            <button className="hover:text-purple-600 focus:outline-none">
              <FaHeart />
            </button>
            <button className="hover:text-purple-600 focus:outline-none">
              <FaShoppingCart />
            </button>
            <Link href="/login" className="hover:text-purple-600 focus:outline-none">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;