"use client";

import { useState } from 'react';

const FAQsSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState('same-day-delivery');

  const faqData = [
    {
      id: 'flower-types',
      question: 'What types of flowers do you offer?',
      answer: 'We offer a wide variety of fresh flowers including roses, lilies, tulips, orchids, sunflowers, and seasonal blooms. Our selection changes regularly to ensure the freshest and most beautiful options are available.',
    },
    {
      id: 'same-day-delivery',
      question: 'Do you offer same-day delivery?',
      answer: 'Yes, we do offer same-day delivery for orders placed before a certain time (please check our delivery policy for the cutoff time). Same-day delivery is subject to availability and may depend on your location.',
    },
    {
      id: 'outside-local',
      question: 'Do you deliver outside your local area?',
      answer: 'We deliver to a wide area within [Specify your general delivery radius or areas]. Please check our delivery zone map or enter your postcode at checkout to see if we deliver to your location. For deliveries outside our standard area, please contact us to discuss options.',
    },
    {
      id: 'payment-methods',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), as well as PayPal and [Mention any other payment methods you accept]. All transactions are secure and encrypted.',
    },
    {
      id: 'office-events',
      question: 'Do you deliver to offices or event venues?',
      answer: 'Yes, we are happy to deliver to offices, event venues, hospitals, and other locations. Please ensure you provide detailed delivery instructions, including the recipient\'s name, department/room number, and any specific access requirements.',
    },
    {
      id: 'track-order',
      question: 'How do I track my order?',
      answer: 'Once your order has been dispatched, you will receive a confirmation email with a tracking number and a link to our tracking portal where you can monitor the progress of your delivery.',
    },
  ];

  const toggleQuestion = (id : any ) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">FAQs</h2>
          <p className="text-2xl font-bold text-gray-800">Question? Look here.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-white rounded-md shadow-sm overflow-hidden">
                <button
                  className={`w-full text-left py-3 px-4 font-semibold text-gray-800 flex items-center justify-between ${expandedQuestion === faq.id ? 'bg-purple-100' : 'hover:bg-gray-100'}`}
                  onClick={() => toggleQuestion(faq.id)}
                  aria-expanded={expandedQuestion === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${expandedQuestion === faq.id ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedQuestion === faq.id && (
                  <div id={`faq-answer-${faq.id}`} className="py-3 px-4 text-gray-600 bg-purple-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-purple-600 text-white rounded-md shadow-md p-6 flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9h6v2H7V9z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-semibold mb-2">You have different questions?</h3>
            <p className="text-sm opacity-80 mb-4 text-center">Our team will answer all your questions. We ensure a quick response.</p>
            <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-md hover:bg-purple-100 transition duration-300 focus:outline-none">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
