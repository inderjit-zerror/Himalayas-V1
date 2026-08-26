'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export default function Filmstripgallery() {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const drag = useRef({ startX: 0, startScrollX: 0, dragging: false, moved: false });
  const [isMobile, setIsMobile] = useState(false);

  // Fix 1: Ensure getMaxScroll doesn't return a positive number if the screen is wider than the track
  const getMaxScroll = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const max = track.parentElement.clientWidth - track.scrollWidth;
    return Math.min(0, max); 
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      
      // Fix 2: Clamp slider on resize (like phone rotation) to prevent it from getting stuck out of bounds
      if (trackRef.current) {
        const maxScroll = getMaxScroll();
        const currentX = gsap.getProperty(trackRef.current, 'x');
        if (currentX < maxScroll) {
          gsap.set(trackRef.current, { x: maxScroll });
        } else if (currentX > 0) {
          gsap.set(trackRef.current, { x: 0 });
        }
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // GSAP Slider Logic (arrow buttons)
  const slide = (direction) => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const viewportWidth = track.parentElement.clientWidth;
    // Scroll roughly one frame's worth of width, scaled to viewport
    const scrollAmount = Math.min(350, viewportWidth * 0.85);
    const currentX = gsap.getProperty(track, 'x');
    const maxScroll = getMaxScroll();

    let newX = currentX + (direction === 'left' ? scrollAmount : -scrollAmount);
    newX = Math.min(0, Math.max(newX, maxScroll));

    gsap.to(track, {
      x: newX,
      duration: 0.8,
      ease: 'power3.out',
    });
  };

  // Touch / mouse drag support for mobile swiping
  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    gsap.killTweensOf(track);
    drag.current.startX = e.clientX;
    drag.current.startScrollX = gsap.getProperty(track, 'x');
    drag.current.dragging = true;
    drag.current.moved = false;
    track.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!drag.current.dragging || !trackRef.current) return;
    const track = trackRef.current;
    const dx = e.clientX - drag.current.startX;

    if (Math.abs(dx) > 4) drag.current.moved = true;

    let newX = drag.current.startScrollX + dx;
    const maxScroll = getMaxScroll();

    // rubber-band resistance past the edges
    if (newX > 0) newX = newX * 0.3;
    if (newX < maxScroll) newX = maxScroll + (newX - maxScroll) * 0.3;

    gsap.set(track, { x: newX });
  };

  const onPointerUp = (e) => {
    if (!drag.current.dragging || !trackRef.current) return;
    drag.current.dragging = false;
    const track = trackRef.current;
    track.releasePointerCapture?.(e.pointerId);

    const maxScroll = getMaxScroll();
    const currentX = gsap.getProperty(track, 'x');
    const clamped = Math.min(0, Math.max(currentX, maxScroll));

    gsap.to(track, { x: clamped, duration: 0.5, ease: 'power3.out' });
  };

  return (
    <div className="h-fit  text-black px-4 py-10 sm:px-8 sm:py-16 md:px-16 overflow-hidden flex flex-col justify-start overflow-x-hidden">

      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 sm:mb-16 w-full mx-auto">
        {/* Navigation Arrows */}
        <div className="flex gap-3 sm:gap-4">
          <button
            onClick={() => slide('left')}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label="Previous image"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={() => slide('right')}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label="Next image"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Title */}
        <h4 className="uppercase text-xs sm:text-sm md:text-base tracking-wide font-medium!">
          Along The Way
        </h4>
      </div>

      {/* Gallery Track Container */}
      {/* Fix 3: Changed justify-center to justify-start here so x: 0 aligns perfectly with the left edge */}
      <div
        ref={viewportRef}
        className="w-full mx-auto overflow-visible   flex max-sm:justify-start sm:justify-center items-center"
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerCancel={onPointerUp}
          onClickCapture={(e) => {
            if (drag.current.moved) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          className="flex items-start gap-3 sm:gap-4 md:gap-6  w-max cursor-grab active:cursor-grabbing select-none"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Image 1: Tents */}
          <FilmFrame src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=800&auto=format&fit=crop" alt="Camping by the lake" />

          {/* Image 2: Goats */}
          <FilmFrame src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=800&auto=format&fit=crop" alt="Goats in the mountains" />

          {/* Image 3: Stupa (Featured/Larger) */}
          <FilmFrame src="/pic/16.jpg" alt="Mountain Stupa" isLarge={true} />

          {/* Image 4: Portrait with metadata below */}
          <div className="flex flex-col">
            <FilmFrame src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop" alt="Portrait of an older man" />
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-gray-800">
              <p><span className="font-semibold">Subject:</span> Itsuki Takahashi</p>
              <p><span className="font-semibold">Project: </span> Feature in Yaraeleon Mag</p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile swipe hint */}
      {isMobile && (
        <p className="text-center text-[11px] text-gray-400 mt-6 tracking-wide uppercase">
          Swipe to explore
        </p>
      )}
    </div>
  );
}

function FilmFrame({ src, alt, isLarge = false }) {
  return (
    <div
      className={`relative shrink-0 bg-black p-2.5 sm:p-3 md:p-4 shadow-sm flex ${
        isLarge
          ? 'w-[220px] h-[310px] sm:w-[320px] sm:h-[450px] md:w-[420px] md:h-[600px]'
          : 'w-[180px] h-[250px] sm:w-[260px] sm:h-[360px] md:w-[320px] md:h-[480px]'
      }`}
    >
      <div className="relative w-full h-full overflow-hidden bg-gray-900">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale-[20%] contrast-125 pointer-events-none"
          draggable="false"
        />
      </div>

      <div
        className="absolute right-0.5 sm:right-1 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#d1d1d1] text-[6px] sm:text-[7px] md:text-[9px] tracking-widest opacity-60 pointer-events-none"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="mb-6 sm:mb-8">400</span>
        <span className="mb-6 sm:mb-8">53</span>
        <span>KODAK PORTRA 400</span>
      </div>
    </div>
  );
}