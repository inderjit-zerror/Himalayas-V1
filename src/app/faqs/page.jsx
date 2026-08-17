'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const categories = [
  'Welcome',
  'About Discover Himalayas',
  'Who Travels With Us?',
  'Choosing a Journey',
  'The Himalayas',
  'Altitude & Health',
  'Travel Essentials',
  'Motorcycles & Riding',
  'Safety & Support',
  'Accommodation',
];

const faqs = [
  {
    id: 1,
    question: 'What is Discover Himalayas?',
    answer: (
      <>
        <p className="mb-4">
          Discover Himalayas is an Indian adventure travel company specialising in motorcycle and overland journeys across India, Nepal and Bhutan.
        </p>
        <p>
          Founded by Vinod and his team after decades of exploration, the company combines local knowledge, authentic cultural experiences and carefully planned adventure to create journeys that go beyond traditional tourism.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: 'What is Discover Himalayas?',
    answer: (
      <p>
        We offer curated high-altitude motorcycle tours, 4x4 overland expeditions, and custom adventure itineraries crafted for passionate travelers.
      </p>
    ),
  },
  {
    id: 3,
    question: 'What is Discover Himalayas?',
    answer: (
      <p>
        Safety, local community support, and authentic cultural immersion are at the core of everything we plan and execute.
      </p>
    ),
  },
];

export default function FAQContactSection() {
  const [activeCategory, setActiveCategory] = useState('Welcome');
  const [openFaq, setOpenFaq] = useState(0); // Index 0 open by default
  const [searchQuery, setSearchQuery] = useState('');
  
  const contentRefs = useRef([]);

  // GSAP Accordion Animation
  const toggleFaq = (index) => {
    const isOpening = openFaq !== index;
    const nextIndex = isOpening ? index : null;

    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index && isOpening) {
        gsap.to(el, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }
    });

    setOpenFaq(nextIndex);
  };

  // Set initial height for open accordion on mount
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === openFaq) {
        gsap.set(el, { height: 'auto', opacity: 1 });
      } else {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-white text-black py-12 px-6 md:px-12 lg:px-10   pt-[20vh]">
      <div className=" mx-auto">
        
        {/* Header Title Section */}
        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-bold tracking-wider text-black uppercase mb-3">
            // FREQUENTLY ASKED QUESTIONS
          </p>
          <h4 className="text-xl md:text-2xl font-black text-black uppercase  text-[1.3rem]! font-semibold! tracking-tight mb-2 h-secondary">
            Three decades of questions. Three decades of answers.
          </h4>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            From first-time riders to seasoned overlanders, we've answered thousands of questions before journeys began. These are the ones that come up most often.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Column 1: Search & Navigation List (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Search Input */}
            <div className="relative border-b border-dashed border-gray-400 pb-2 mb-2 flex items-center justify-between">
              <div className="flex items-center w-full gap-2">
                <p className="text-xs font-semibold text-gray-800">Search:</p>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs focus:outline-none text-black"
                />
              </div>
              <svg
                className="w-4 h-4 text-black shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Category Items List */}
            <nav className="flex flex-col divide-y divide-gray-100">
              {filteredCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center justify-between py-2.5 text-xs text-left transition-colors ${
                    activeCategory === category
                      ? 'text-black font-semibold'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <p>{category}</p>
                  <p className="text-gray-400 text-[10px]">&gt;</p>
                </button>
              ))}
            </nav>
          </div>

          {/* Column 2: Ribbon Accordion (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.id} className="flex flex-col">
                  {/* Banner Ribbon Header */}
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => toggleFaq(index)}
                      className={`relative flex-1 cursor-pointer px-4 py-3 text-xs font-semibold transition-colors duration-200 ${
                        isOpen
                          ? 'bg-[#383838] text-white!'
                          : 'bg-[#e0e0e0] text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                      <p className={`${
                        isOpen
                          ? 'bg-[#383838] text-white!'
                          : 'bg-[#e0e0e0] text-gray-800 hover:bg-gray-300'
                      }`}>{faq.question}</p>

                      {/* Bottom-left triangular fold/notch effect */}
                      <div
                        className={`absolute left-0 -bottom-1.5 w-0 h-0 border-t-[6px] border-r-[6px] ${
                          isOpen
                            ? 'border-t-[#1f1f1f] border-r-transparent'
                            : 'border-t-[#b5b5b5] border-r-transparent'
                        }`}
                      />
                    </div>

                    {/* Plus / Minus Icon to the right */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="text-xl font-light text-gray-800 shrink-0 w-6 h-6 flex items-center justify-center focus:outline-none"
                    >
                      {isOpen ? '−' : '+'}
                    </button>
                  </div>

                  {/* Accordion Content Container */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden h-0 opacity-0"
                  >
                    <p className="pt-4 pb-2 px-1 text-[11px] leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 3: Contact Form (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col pt-1 pl-0 lg:pl-4">
            <p className=" mb-2">
              If your questions are not listed write to us
            </p>
            <h4 className="text-base  text-[1.3rem]! font-semibold! font-bold text-black mb-4 h-secondary">Contact us</h4>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              {/* First and Last Name */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-gray-700">
                  First and Last Name*
                </p>
                <input
                  type="text"
                  defaultValue="Christopher Montgomery"
                  className="w-full border border-gray-400 p-1.5 text-xs text-gray-800 focus:outline-none focus:border-black"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-gray-700">
                  Email address*
                </p>
                <input
                  type="email"
                  defaultValue="inquiry@discoverhimalayas.com"
                  className="w-full border border-gray-400 p-1.5 text-xs text-gray-800 focus:outline-none focus:border-black"
                />
              </div>

              {/* Telephone */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-gray-700">
                  Telephone*
                </p>
                <div className="flex gap-2">
                  <select className="border border-gray-400 p-1.5 text-xs text-gray-800 bg-white focus:outline-none focus:border-black w-20">
                    <option>+132</option>
                    <option>+91</option>
                    <option>+1</option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 border border-gray-400 p-1.5 text-xs text-gray-800 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-gray-700">
                  Subject*
                </p>
                <select className="w-full border border-gray-400 p-1.5 text-xs text-gray-700 bg-white focus:outline-none focus:border-black">
                  <option>Select the subject of your request</option>
                  <option>Booking Inquiry</option>
                  <option>Custom Tour</option>
                </select>
              </div>

              {/* Text / Message Box */}
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-semibold text-gray-700">
                  Text*
                </p>
                <textarea
                  rows={4}
                  className="w-full border border-gray-400 p-1.5 text-xs text-gray-800 focus:outline-none focus:border-black resize-none"
                />
              </div>

              {/* Disclaimer / Filler Text */}
              <p className="text-[9px] text-gray-500 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-fit max-sm:w-full sm:px-20 bg-[#424242] text-white text-xs font-semibold py-1.5 mt-1 hover:bg-black transition-colors"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}