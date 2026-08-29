
'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ExtNav() {
  // Initialize to 0 so the first button is active/dark exactly like the reference image
  const [openIndex, setOpenIndex] = useState(null); 
  
  // Refs arrays to hold elements for GSAP animations
  const dropdownRefs = useRef([]);
  const contentRefs = useRef([]);
  
  // NEW: Ref to detect clicks outside the component
  const navContainerRef = useRef(null);

  const navData = [
    {
      title: "HIMALAYAN JOURNEYS",
      dropdownItems: ["Latest Journal Entries", "Sketchbook Archives", "Travel Logs", "Personal Thoughts"]
    },
    {
      title: "BEYOND HIMALAYAS",
      dropdownItems: ["Featured Guests", "Community Highlights", "Submit a Story", "Weekly Top 10"]
    },
   
  ];

  // NEW: Handle clicking outside of the navigation container
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the navContainer, close the dropdown
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    // Listen for mousedown events globally
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GSAP Animation handler
  useEffect(() => {
    dropdownRefs.current.forEach((el, index) => {
      if (!el) return;
      const isOpen = openIndex === index;
      const contentList = contentRefs.current[index]?.children;

      if (isOpen) {
        // Expand the dropdown
        gsap.to(el, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        });
        
        // Stagger in the dummy content links
        if (contentList) {
          gsap.fromTo(contentList, 
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: 'power2.out', delay: 0.1, overwrite: true }
          );
        }
      } else {
        // Collapse the dropdown
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.inOut',
        });
      }
    });
  }, [openIndex]);

  const toggleDropdown = (index) => {
    // If clicking the currently open one, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // NEW: Attached the navContainerRef to the outermost wrapper of the component
    <div ref={navContainerRef} className="w-full h-fit sm:w-1/2 sm:mx-auto bg-white flex flex-col items-center pt-20 mt-10 px-4 md:px-8 max-sm:mb-5">
      
      {/* Navigation Container */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row border border-[#2a2a2a] shadow-sm bg-white">
        
        {navData.map((item, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className="relative flex-1 border-b md:border-b-0 md:border-r border-[#2a2a2a] last:border-r-0 last:border-b-0"
            >
              {/* Main Button */}
              <button
                onClick={() => toggleDropdown(index)}
                className={`w-full h-full flex items-center justify-between px-4 py-4 md:py-3 transition-colors duration-300 ${
                  isOpen 
                    ? 'bg-[#333333] text-white' 
                    : 'bg-white text-[#333333] hover:bg-gray-100'
                }`}
              >
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
                  {item.title}
                </span>
                
                {/* Chevron Arrow */}
                <svg 
                  className={`w-3 h-3 ml-2 transition-transform duration-300 ${
                    isOpen ? 'rotate-90 text-white' : 'text-[#333333]'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                ref={el => dropdownRefs.current[index] = el} 
                className="relative md:absolute top-full left-[-1px] w-full md:w-[calc(100%+2px)] bg-white z-50 overflow-hidden h-0 opacity-0 md:border-x md:border-b md:border-[#2a2a2a] md:shadow-xl"
              >
                <div className="p-5" ref={el => contentRefs.current[index] = el}>
                  <ul className="flex flex-col gap-4">
                    {item.dropdownItems.map((link, i) => (
                      <li 
                        key={i} 
                        className="text-xs font-medium tracking-wide text-gray-600 hover:text-black hover:translate-x-1 cursor-pointer transition-all duration-200"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}