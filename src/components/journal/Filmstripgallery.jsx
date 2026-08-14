'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

export default function Filmstripgallery() {
  const trackRef = useRef(null);

  // GSAP Slider Logic
  const slide = (direction) => {
    if (!trackRef.current) return;
    
    const track = trackRef.current;
    const scrollAmount = 350; // Distance to scroll per click
    const currentX = gsap.getProperty(track, 'x');
    const maxScroll = -(track.scrollWidth - track.parentElement.clientWidth);

    // Calculate new position and clamp it within boundaries
    let newX = currentX + (direction === 'left' ? scrollAmount : -scrollAmount);
    newX = Math.min(0, Math.max(newX, maxScroll));

    gsap.to(track, {
      x: newX,
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  return (
    <div className="min-h-screen bg-white text-black   px-8 py-16 md:px-16 overflow-hidden flex flex-col justify-start">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-16  w-full mx-auto">
        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <button 
            onClick={() => slide('left')}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            onClick={() => slide('right')}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-normal text-gray-900">
          Along The Way
        </h1>
      </div>

      {/* Gallery Track Container */}
      <div className="w-full mx-auto overflow-visible  flex justify-center items-center">
        <div 
          ref={trackRef} 
          className="flex items-start gap-4 md:gap-6 w-max"
        >
          {/* Image 1: Tents */}
          <FilmFrame src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop" alt="Camping by the lake" />

          {/* Image 2: Goats */}
          <FilmFrame src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=800&auto=format&fit=crop" alt="Goats in the mountains" />

          {/* Image 3: Stupa (Featured/Larger) */}
          <FilmFrame src="https://images.unsplash.com/photo-1544634076-a90160ddf44e?q=80&w=800&auto=format&fit=crop" alt="Mountain Stupa" isLarge={true} />

          {/* Image 4: Portrait with metadata below */}
          <div className="flex flex-col">
            <FilmFrame src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" alt="Portrait of an older man" />
            <div className="mt-4 text-sm leading-relaxed text-gray-800">
              <p><span className="font-semibold">Subject:</span> Itsuki Takahashi</p>
              <p><span className="font-semibold text-gray-500 font-normal">Project: Feature in Yaraeleon Mag</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/**
 * Reusable component for the black film-style border frame 
 * seen in Screenshot 2026-08-13 122859.jpg
 */
function FilmFrame({ src, alt, isLarge = false }) {
  return (
    <div 
      className={`relative shrink-0 bg-black p-3 md:p-4 shadow-sm flex ${
        isLarge ? 'w-[320px] md:w-[420px] h-[450px] md:h-[600px]' : 'w-[260px] md:w-[320px] h-[360px] md:h-[480px]'
      }`}
    >
      <div className="relative w-full h-full overflow-hidden bg-gray-900">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover grayscale-[20%] contrast-125"
          draggable="false" 
        />
      </div>
      
      {/* Decorative vertical film text simulation */}
      <div 
        className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#d1d1d1] text-[7px] md:text-[9px] tracking-widest opacity-60 pointer-events-none" 
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="mb-8">400</span>
        <span className="mb-8">53</span>
        <span>KODAK PORTRA 400</span>
      </div>
    </div>
  );
}