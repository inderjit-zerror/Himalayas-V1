"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ExpeditionPage() {
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
const dropdownRef = useRef(null);
const dropdownRef2 = useRef(null);
  // 2. Add an effect to listen for clicks outside the referenced element
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const glanceData = [
    { label: "Duration:", value: "(DH to confirm)" },
    { label: "Best Time:", value: "(DH to confirm)" },
    { label: "Highest Altitude:", value: "5,883 m (Umling La)" },
    { label: "Motorcycle:", value: "Royal Enfield" },
    { label: "Support Vehicle:", value: "(DH to confirm)" },
    {
      label: "Difficulty:",
      value: "Experienced Riders (DH to confirm wording)",
    },
    { label: "Private Departures:", value: "Available on request" },
    { label: "Upcoming Departure:", value: "20 Oct 2026" },
  ];

  return (
    <div className="min-h-screen bg-white text-black   selection:bg-gray-800 selection:text-white pt-[10vh] px-5 max-sm:pb-10  sm:px-20">
      {/* Navigation Header */}
    <header className="w-full pt-10 px-6 md:px-12 flex justify-center lg:justify-center z-20 relative">
  <div className="flex flex-col md:flex-row shadow-sm">
    {/* Tab 1: Himalayan Journeys */}
    <div className="relative w-full md:w-[260px]" ref={dropdownRef}>
      <button
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
          setIsDropdownOpen2(false);
        }}
        className="w-full bg-[#333333] text-white text-xs font-semibold tracking-[0.15em] px-6 py-4 flex justify-between z-[999] items-center outline-none transition-colors hover:bg-black border border-[#333333] hover:border-black"
      >
        HIMALAYAN JOURNEYS
        <span
          className={`text-lg leading-none ml-2 transition-transform duration-200 ${isDropdownOpen ? "rotate-90" : ""}`}
        >
          &rsaquo;
        </span>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full border border-gray-400 border-t-0 bg-white pt-6 pb-8 pl-10 pr-6 z-10 shadow-lg md:shadow-none origin-top animate-in fade-in slide-in-from-top-2">
          <ul className="list-disc marker:text-gray-500 text-xs font-semibold text-[#555555] tracking-widest space-y-3">
            <li className="hover:text-black cursor-pointer transition-colors">LADAKH</li>
            <li className="hover:text-black cursor-pointer transition-colors">ZANSKAR</li>
            <li className="hover:text-black cursor-pointer transition-colors">SPITI & KINNAUR</li>
            <li className="hover:text-black cursor-pointer transition-colors">NEPAL</li>
            <li className="hover:text-black cursor-pointer transition-colors">BHUTAN</li>
          </ul>
        </div>
      )}
    </div>

    {/* Tab 2: Beyond Himalayas */}
    <div className="relative w-full md:w-[260px]" ref={dropdownRef2}>
      <button
        onClick={() => {
          setIsDropdownOpen2(!isDropdownOpen2);
          setIsDropdownOpen(false);
        }}
        className="w-full bg-white text-gray-500 text-xs font-semibold tracking-[0.15em] px-6 py-4 border border-gray-400 border-t-0 md:border-t md:border-l-0 flex justify-between items-center outline-none transition-colors hover:bg-gray-50"
      >
        BEYOND HIMALAYAS
        <span
          className={`text-lg leading-none ml-2 transition-transform duration-200 ${isDropdownOpen2 ? "rotate-90" : ""}`}
        >
          &rsaquo;
        </span>
      </button>

      {isDropdownOpen2 && (
        <div className="absolute top-full left-0 w-full border border-gray-400 border-t-0 bg-white pt-6 pb-8 pl-10 pr-6 z-10 shadow-lg md:shadow-none origin-top animate-in fade-in slide-in-from-top-2">
          <ul className="list-disc marker:text-gray-500 text-xs font-semibold text-[#555555] tracking-widest space-y-3">
            <li className="hover:text-black cursor-pointer transition-colors">SIKKIM & DARJEELING</li>
            <li className="hover:text-black cursor-pointer transition-colors">KASHMIR</li>
            <li className="hover:text-black cursor-pointer transition-colors">TIBET</li>
            <li className="hover:text-black cursor-pointer transition-colors">MONGOLIA</li>
            <li className="hover:text-black cursor-pointer transition-colors">CENTRAL ASIA</li>
          </ul>
        </div>
      )}
    </div>
  </div>
</header>

      {/* Main Content Area */}
      <main className=" mx-auto  w-full   grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-0">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-8 flex flex-col justify-center pt-8 md:pt-0">
          <div className="text-sm md:text-base font-semibold tracking-[0.2em] text-[#333333] mb-8">
            // LADAKH
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[105px]  uppercase leading-[0.9] tracking-tighter mb-10 text-black">
            TO THE
            <br />
            HIGHEST ROAD
            <br />
            ON EARTH
          </h2>

          <p className="text-lg md:text-[22px]  leading-[1.6] max-w-[38rem]">
            Ladakh is Discover Himalayas' signature high-altitude expedition. An
            extraordinary Royal Enfield journey through the world's highest
            motorable passes, ancient Buddhist kingdoms and the vast
            high-altitude landscapes of Ladakh.
          </p>
        </div>

        {/* Right Column: At A Glance Sidebar */}
        <div className="lg:col-span-4 lg:pl-10 mt-8 lg:mt-24">
          <div className="mb-8">
            <h4 className=" uppercase  font-medium! ">AT A GLANCE</h4>
            <div className="h-[2px] bg-black w-[150px] mt-4"></div>
          </div>

          <div className="space-y-1">
            {glanceData.map((item, index) => (
              <div key={index} className="text-[17px] leading-relaxed">
                <p className="font-bold!  block ">{item.label}</p>
                <p className=" mb-3 mt-2">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
