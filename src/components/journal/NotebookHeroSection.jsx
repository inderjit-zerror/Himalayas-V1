'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function NotebookHeroSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const notePaperRef = useRef(null);
  const polaroidRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background subtle zoom out
      tl.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 1.4 }
      )
      // Main title slide & fade in
      .fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=1.0'
      )
      // Notebook paper slide in from right
      .fromTo(
        notePaperRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        '-=0.7'
      )
      // Polaroid image pop & rotate entrance
      .fromTo(
        polaroidRef.current,
        { scale: 0.8, opacity: 0, rotate: 12 },
        { scale: 1, opacity: 1, rotate: 4, duration: 0.8, ease: 'back.out(1.5)' },
        '-=0.4'
      );

      // --- PARALLAX ON SCROLL ---

      // Background image drifts slower than scroll (classic parallax)
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Notebook paper drifts slightly, opposite-ish direction for depth
      gsap.to(notePaperRef.current, {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Polaroid drifts faster, creating a "closer to camera" feel
      gsap.to(polaroidRef.current, {
        yPercent: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[150vh] bg-stone-900 text-stone-900 overflow-hidden flex flex-col justify-between p-6 md:p-12 lg:p-16"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2000&auto=format&fit=crop"
          alt="Motorcycle on mountain road in Ladakh"
          className="w-full h-[120%] object-cover object-center will-change-transform"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10  w-full mx-auto flex flex-col h-full gap-8 items-start pt-20">
        
        {/* Left Column: Category & Hero Headline */}
        <div ref={titleRef} className="lg:col-span-7 flex flex-col justify-start pt-4">
          <p className="text-xs md:text-sm font-bold tracking-widest text-stone-800 uppercase mb-4 drop-shadow-sm">
            // VINOD'S NOTEBOOK / LADAKH / OCTOBER 2024
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-stone-800 leading-[0.88] max-w-2xl drop-shadow-sm">
            The Road I Never Grow Tired Of
          </h2>
        </div>

        {/* Right Column: Notebook Sheet & Overlapping Polaroid */}
        <div className="lg:col-span-5 relative flex justify-end lg:justify-start mt-8 lg:mt-0 ml-auto" >
          
          {/* Lined Notebook Paper Card */}
          <div 
            ref={notePaperRef}
            className="relative w-full max-w-xl bg-[#f7f4ea] text-stone-900 p-6 sm:p-8 shadow-2xl rounded-sm border border-stone-300/80 will-change-transform"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e2ded0 28px)',
              backgroundAttachment: 'local',
              lineHeight: '28px'
            }}
          >
            {/* Masking Tape Graphic (Top Right) */}
            <div className="absolute -top-3 right-8 w-24 h-7 bg-amber-100/70 border border-amber-200/50 backdrop-blur-sm shadow-sm rotate-2 z-20 pointer-events-none" />

            {/* Binder Hole Punches (Left Edge) */}
            <div className="absolute left-3 top-6 bottom-6 flex flex-col justify-between pointer-events-none">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-stone-700/80 shadow-inner" />
              ))}
            </div>

            {/* Notebook Content Container */}
            <div className="pl-6">
              
              {/* Bold Lead Paragraph */}
              <p className="font-extrabold text-xs sm:text-sm  uppercase tracking-wide leading-tight mb-6 text-stone-900">
                After thirty years of riding through Ladakh, people still ask me which road is my favourite. The answer has never stayed the same.
              </p>

              {/* Meta information */}
              <div className="text-[11px] font-bold tracking-wider uppercase text-stone-600 mb-1">
                12 MIN READ
              </div>
              <div className="text-[11px] font-bold tracking-wider uppercase text-stone-500 mb-4">
                [ NOTEBOOK ENTRY ]
              </div>

              {/* Hand-drawn style decorative underline */}
              <div className="w-16 h-0.5 bg-stone-800 mb-6 rounded-full" />

              {/* Section Subheading */}
              <h3 className="font-bold text-xs sm:text-sm text-stone-900 mb-2 leading-snug">
                Somewhere between Leh and Hanle
              </h3>

              {/* Body Paragraph */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                People often ask how many times I've ridden these roads. I stopped counting years ago. The number isn't important. What matters is that every journey still gives me a reason to stop, look around and stay a little longer than I planned.
              </p>
              
              {/* Extra spacing at bottom to allow polaroid overlap space */}
              <div className="h-24 sm:h-32" />
            </div>
          </div>

          {/* Overlapping Polaroid Image Frame */}
          <div 
            ref={polaroidRef}
            className="absolute -bottom-10 right-2 sm:-right-4 w-52 sm:w-64 bg-white p-3 pb-8 shadow-2xl border border-stone-200/80 z-20 transition-transform hover:scale-105 duration-300 will-change-transform"
          >
            <div className="w-full aspect-square overflow-hidden bg-stone-100 mb-2">
              <img 
                src="/img/26.jpg" 
                alt="White Stupa in Ladakh"
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}