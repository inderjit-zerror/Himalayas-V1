"use client";

import React, { useState, useEffect, useRef } from "react";
import ExtNav from "./ExtNav";

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
    <div className="min-h-screen bg-white text-black   selection:bg-gray-800 selection:text-white pt-[10vh] px-5 max-sm:pb-0  sm:px-20 overflow-x-hidden">
    

      <ExtNav />

      {/* Main Content Area */}
      <main className=" mx-auto  w-full   grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 relative z-0 max-sm:mt-5">
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-8 flex flex-col justify-center pt-8 md:pt-0">
          <div className="text-sm md:text-base font-semibold tracking-[0.2em] text-[#333333] mb-8">
            // LADAKH
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[105px]  uppercase leading-[0.9] tracking-tighter  mb-5 sm:mb-10 text-black">
            TO THE
            <br className=" max-sm:hidden" />
            <span className="max-sm:ml-2">HIGHEST ROAD</span>
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
        <div className="lg:col-span-4 lg:pl-10 sm:mt-8 lg:mt-24">
          <div className="mb-8">
            <h4 className=" uppercase  font-medium! ">AT A GLANCE</h4>
            <div className="h-[2px] bg-black w-[150px] mt-4"></div>
          </div>

          <div className="space-y-1">
            {glanceData.map((item, index) => (
              <div key={index} className="text-[17px] leading-relaxed">
                <p className="font-bold!  block ">{item.label}</p>
                <p className="">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
