"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusIcon,
  MinusIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

// Sample Data
const faqData = [
  {
    category: "General Information",
    question: "What types of flowers do you offer?",
    answer:
      "We offer a wide variety of fresh flowers including roses, lilies, tulips, orchids, seasonal blooms, and more. Check our catalog for the full selection.",
  },
  {
    category: "Products and Availability",
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we offer same-day delivery for orders placed before 2 PM local time.",
  },
  {
    category: "Delivery",
    question: "Do you deliver outside your local area?",
    answer:
      "Currently, we primarily deliver within the local metropolitan area. Please contact us with the specific address to confirm if delivery is possible.",
  },
  {
    category: "Ordering and Payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and sometimes local payment options depending on your region.",
  },
  {
    category: "Delivery",
    question: "Do you deliver to offices or event venues?",
    answer:
      "Yes, we deliver to residential addresses, offices, hospitals, event venues, and funeral homes. Please provide accurate delivery details when ordering.",
  },
  {
    category: "Account & Profile",
    question: "How do I track my order?",
    answer:
      "Once your order is shipped or out for delivery, you will receive a tracking link via email or SMS, if provided.",
  },
];

const categories = [
  "General Information",
  "Products and Availability",
  "Ordering and Payment",
  "Account & Profile",
  "Delivery",
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Products and Availability"
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqData.filter(
    (faq) => faq.category === selectedCategory
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 flex flex-col space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null); // reset open accordion on category change
              }}
              className={`p-3 rounded-md text-left text-sm font-medium transition-colors duration-150 ease-in-out ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}

          {/* Contact Box */}
          <div className="mt-8 bg-purple-600 rounded-lg p-6 text-white text-center flex flex-col items-center space-y-4">
            <ChatBubbleLeftEllipsisIcon className="h-10 w-10 text-white" />
            <h3 className="font-semibold">You have different questions?</h3>
            <p className="text-sm text-purple-100">
              Our team will answer all your questions. We ensure a quick
              response.
            </p>
            <button className="mt-4 bg-white text-purple-600 hover:bg-gray-100 font-medium py-2 px-5 rounded-md text-sm transition-colors duration-150 ease-in-out">
              Contact Us
            </button>
          </div>
        </aside>

        {/* FAQ Section */}
        <section className="md:col-span-3 space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              {/* Header */}
              <button
                id={`faq-question-${index}`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <MinusIcon className="h-5 w-5 transition" />
                  ) : (
                    <PlusIcon className="h-5 w-5 transition" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-sm text-purple-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
