import React from 'react';
import Link from 'next/link';
import {
  BsFacebook,
  BsPinterest,
  BsTwitter,
  BsInstagram,
  BsYoutube
} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-10">
      <div className="container mx-auto flex flex-wrap gap-10 justify-between">
        {/* Company Info */}
        <div className="w-full md:w-1/5 space-y-4">
          <div className="flex items-center">
            <div className="bg-purple-600 text-white rounded-full p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-2 5zm0-4L9 9m15 4l-2 5m-10-4l4-8m-9 4h14m-9-4a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Flower Shop.</h3>
          </div>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-white text-xl shadow-md p-2 rounded-full hover:bg-purple-800">
              <BsFacebook />
            </Link>
            <Link href="#" className="text-white text-xl shadow-md p-2 rounded-full hover:bg-purple-800">
              <BsPinterest />
            </Link>
            <Link href="#" className="text-white text-xl shadow-md p-2 rounded-full hover:bg-purple-800">
              <BsTwitter />
            </Link>
            <Link href="#" className="text-white text-xl shadow-md p-2 rounded-full hover:bg-purple-800">
              <BsInstagram />
            </Link>
            <Link href="#" className="text-white text-xl shadow-md p-2 rounded-full hover:bg-purple-800">
              <BsYoutube />
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Career</Link></li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Customer Services</h4>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><Link href="/my-account" className="hover:text-white">My Account</Link></li>
            <li><Link href="/track-order" className="hover:text-white">Track Your Order</Link></li>
            <li><Link href="/returns" className="hover:text-white">Return</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Our Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Our Information</h4>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-white">User Terms & Condition</Link></li>
            <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Contact Info</h4>
          <p className="text-sm text-gray-200">+0123-456-789</p>
          <p className="text-sm text-gray-200">example@gmail.com</p>
          <p className="text-sm text-gray-200">
            8502 Preston Rd. <br /> Inglewood, Maine 98380
          </p>
        </div>
      </div>

      {/* Copyright and Select */}
      <div className="container mx-auto mt-10 py-6 border-t border-purple-600 flex flex-wrap justify-between items-center text-sm text-gray-200">
        <p>© {new Date().getFullYear()} Flower Shop. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="language">🌐</label>
            <select
              id="language"
              className="bg-purple-600 border border-purple-500 text-white px-2 py-1 rounded-md focus:outline-none"
            >
              <option>English</option>
              <option>Русский</option>
              <option>Español</option>
              <option>Français</option>
              <option>O‘zbekcha</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="currency">💱</label>
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
      </div>
    </footer>
  );
};

export default Footer;
