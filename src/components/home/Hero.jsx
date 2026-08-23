"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// 1. Import TextPlugin
import { TextPlugin } from "gsap/TextPlugin"; 

export default function Hero() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);
  // 2. Create a ref for the text container
  const textRef = useRef(null); 

  useEffect(() => {
    // 3. Register both plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin); 

    const parallaxAnim = gsap.to(parallaxImgRef.current, {
      yPercent: 30, 
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, 
      },
    });

    // 4. Typewriter Animation
    const typeAnim = gsap.to(textRef.current, {
      text: "Creating Motorcycle and Overland Journeys Across the Himalayas and the Indian Subcontinent",
      duration: 4, // Adjust the duration to make the typing faster or slower
      ease: "none",
      delay: 0.5, // Slight delay before typing starts
    });

    return () => {
      parallaxAnim.kill();
      typeAnim.kill(); 
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[100dvh] w-full flex-col justify-center overflow-hidden max-sm:h-[50vh] "
    >
      <div className="absolute inset-0 -z-10 h-[120%] w-full">
        <video
          muted loop autoPlay playsInline
          ref={parallaxImgRef}
          src="/videos/HomeHero.mp4" 
          className="h-full w-full object-cover "
        />
      </div>

      <div className="relative z-10 w-full pb-10 sm:pb-12 text-center px-4">
        <h5 className="btn-text text-white drop-shadow-md mx-auto leading-relaxed">
          {/* 5. Attach ref to an empty span, and add a blinking cursor span */}
          <span ref={textRef}></span>
          <span className="animate-pulse">|</span>
        </h5>
      </div>
    </section>
  );
}
