"use client";

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface Product {
    id: number;
    imageUrl: string;
    discount?: string;
    title: string;
    rating: number;
    price: number;
    originalPrice?: number;
}

// Sample product data (replace with your actual data fetching)
const productsData: Product[] = [
    {
        id: 1,
        imageUrl: '/images/blue-white-bouquet.jpg', // Replace with actual image path
        discount: '30% off',
        title: 'Blue White Bouquets',
        rating: 4.8,
        price: 45.00,
        originalPrice: 60.00,
    },
    {
        id: 2,
        imageUrl: '/images/royal-pink-bouquet.jpg', // Replace with actual image path
        discount: '20% off',
        title: 'Royal Pink Bouquets',
        rating: 4.9,
        price: 48.00,
        originalPrice: 60.00,
    },
    {
        id: 3,
        imageUrl: '/images/lavender-bouquet.jpg', // Replace with actual image path
        discount: '20% off',
        title: 'Lavender Bouquets',
        rating: 4.9,
        price: 24.00,
        originalPrice: 30.00,
    },
    {
        id: 4,
        imageUrl: '/images/fresh-flower-basket.jpg', // Replace with actual image path
        discount: '30% off',
        title: 'Fresh Flower Basket',
        rating: 5.0,
        price: 42.00,
        originalPrice: 60.00,
    },
    {
        id: 5,
        imageUrl: '/images/red-white-rose.jpg', // Replace with actual image path
        discount: '30% off',
        title: 'Red White Rose',
        rating: 5.0,
        price: 30.00,
        originalPrice: 60.00,
    },
    {
        id: 6,
        imageUrl: '/images/rose-boutique.jpg', // Replace with actual image path
        discount: '50% off',
        title: 'Rose Boutique',
        rating: 4.8,
        price: 35.00,
        originalPrice: 70.00,
    },
    {
        id: 7,
        imageUrl: '/images/rose-bouquets.jpg', // Replace with actual image path
        discount: '30% off',
        title: 'Rose Bouquets',
        rating: 4.9,
        price: 35.00,
        originalPrice: 50.00,
    },
    {
        id: 8,
        imageUrl: '/images/flower-basket.jpg', // Replace with actual image path
        discount: '20% off',
        title: 'Flower Basket',
        rating: 5.0,
        price: 80.00,
        originalPrice: 100.00,
    },
    {
        id: 9,
        imageUrl: '/images/colorful-rose.jpg',  // Replace with actual image path
        discount: '10% off',
        title: 'Colorful Rose',
        rating: 4.8,
        price: 45.00,
        originalPrice: 50.00,
    },
    {
        id: 10,
        imageUrl: '/images/pink-flowers.jpg',    // Replace with actual image path
        discount: '30% off',
        title: 'Pink Flowers',
        rating: 4.9,
        price: 20.00,
        originalPrice: 40.00,
    },
    {
        id: 11,
        imageUrl: '/images/pink-bouquet.jpg',    // Replace with actual image path
        discount: '10% off',
        title: 'Pink Bouquet',
        rating: 4.9,
        price: 90.00,
        originalPrice: 100.00,
    },
    {
        id: 12,
        imageUrl: '/images/red-rose.jpg',      // Replace with actual image path
        title: 'Red Rose',
        rating: 4.8,
        price: 10.00,
        originalPrice: 20.00,
    },
    // Add more product data here
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="relative bg-white rounded-md shadow-md overflow-hidden transition-transform transform hover:scale-105">
            {product.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1 z-10">
                    {product.discount}
                </div>
            )}
            <div className="relative w-full aspect-w-1 aspect-h-1">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
                {/* Removed the buttons inside the image, implementing hover in the container */}
            </div>
            <div className="p-4">
                <h3 className="text-sm text-gray-700 truncate">
                    <a href={`/product/${product.id}`}> {/* Added Link */}
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                    </a>
                </h3>
                <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            className={`h-4 w-4 ${index < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                        />
                    ))}
                    <p className="ml-2 text-sm text-gray-500">{product.rating}</p>
                </div>
                <div className="mt-2 flex items-center text-sm font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                    {product.originalPrice && (
                        <span className="ml-2 text-gray-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const FilterOptions: React.FC = () => {
    const [flowerTypes, setFlowerTypes] = useState<{ [key: string]: boolean }>({
        Roses: false,
        Tulips: false,
        Lilies: false,
        Orchids: false,
        Hydrangeas: false,
        Sunflowers: false,
    });
    const [occasions, setOccasions] = useState<{ [key: string]: boolean }>({
        Weddings: false,
        Birthday: false,
        Anniversary: false,
        "Thank You": false,
        Graduation: false,
        "Get Well Soon": false,
    });
    const [priceRange, setPriceRange] = useState<{ [key: string]: boolean }>({
        "10-100": false,
    });
    const [reviewStars, setReviewStars] = useState<{ [key: string]: boolean }>({
        5: false,
        4: false,
        3: false,
        2: false,
        1: false,
    });
    const [colors, setColors] = useState<{ [key: string]: boolean }>({
        Red: false,
        Pink: false,
        White: false,
        Yellow: false,
        Purple: false,
        Mixed: false,
    });
    const [recipients, setRecipients] = useState<{ [key: string]: boolean }>({
        "For Her": false,
        "For Him": false,
        "For Kids": false,
        "Corporate Gifts": false,
    });
    const [availability, setAvailability] = useState<{ [key: string]: boolean }>({
        "In Stock": true,
        "Out of Stocks": false,
    });

    const handleCheckboxChange = (setState: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.checked,
        }));
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md w-full md:w-64">
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
            <div>
                <h3 className="text-sm font-semibold mb-2">By Flower Type</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(flowerTypes).map(([type, checked]) => (
                        <li key={type}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    name={type}
                                    checked={checked}
                                    onChange={handleCheckboxChange(setFlowerTypes)}
                                />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">By Occasion</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(occasions).map(([occasion, checked]) => (
                        <li key={occasion}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    name={occasion}
                                    checked={checked}
                                    onChange={handleCheckboxChange(setOccasions)}
                                />
                                {occasion}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Price</h3>
                <div className="text-sm text-gray-700">
                    {Object.entries(priceRange).map(([range, checked]) => (
                        <label key={range}>
                            <input
                                type="checkbox"
                                className="mr-2"
                                name={range}
                                checked={checked}
                                onChange={handleCheckboxChange(setPriceRange)}
                            />
                            ${range}
                        </label>
                    ))}
                    {/* Add a price range slider or input fields for more advanced filtering */}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Review</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(reviewStars).map(([stars, checked]) => {
                        const starCount = parseInt(stars, 10);
                        return (
                            <li key={stars}>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        name={stars}
                                        checked={checked}
                                        onChange={handleCheckboxChange(setReviewStars)}
                                    />
                                    {[...Array(starCount)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="inline-block h-4 w-4 text-yellow-400"
                                        />
                                    ))}
                                    {stars} Star
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">By Color</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(colors).map(([color, checked]) => (
                        <li key={color}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    name={color}
                                    checked={checked}
                                    onChange={handleCheckboxChange(setColors)}
                                />
                                {color}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">By Recipient</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(recipients).map(([recipient, checked]) => (
                        <li key={recipient}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    name={recipient}
                                    checked={checked}
                                    onChange={handleCheckboxChange(setRecipients)}
                                />
                                {recipient}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Availability</h3>
                <ul className="text-sm text-gray-700">
                    {Object.entries(availability).map(([label, checked]) => (
                        <li key={label}>
                            <label>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    name={label}
                                    checked={checked}
                                    onChange={handleCheckboxChange(setAvailability)}
                                />
                                {label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Pagination: React.FC = () => {
    return (
        <div className="flex justify-center items-center mt-8">
            <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button className="px-3 py-1 rounded-md text-blue-600 font-semibold hover:bg-blue-100">1</button>
            <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">3</button>
            <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};

const ProductListingPage: React.FC = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                        <FilterOptions />
                    </div>
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productsData.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default ProductListingPage;
