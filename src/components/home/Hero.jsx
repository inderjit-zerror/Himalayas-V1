"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default function Hero() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    gsap.set('.headerOG', {
      opacity:0
    })

    const tl = gsap.timeline();

    // 1. Logo is visible immediately, sitting centered over a black backdrop
    tl.set(logoRef.current, { opacity: 1 })
      // 2. Hold for 1s, then fade the logo out smoothly
      .to(logoRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
        pointerEvents: "none",
      })
      // 3. Video slides up from below the viewport into its resting position
      .fromTo(
        videoWrapperRef.current,
        { yPercent: 100 },
        { yPercent: 0, duration: 1.2, ease: "power3.out" },
        "-=0.3" // starts slightly before logo fully fades, feels smoother
      )
       .to('.headerOG', {
      opacity:1
    })
      // 4. Typewriter text kicks in once the video has landed
      .to(
        textRef.current,
        {
          text: "Creating Motorcycle and Overland Journeys Across the Himalayas and the Indian Subcontinent",
          duration: 4,
          ease: "none",
        },
        "-=0.2"
      )
     ;

    // Separate scroll-driven parallax on the video itself
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

    return () => {
      tl.kill();
      parallaxAnim.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[100dvh] w-full flex-col justify-center overflow-hidden max-sm:h-[50vh]"
    >
      {/* Logo splash - covers everything, fades out after 1s */}
      <div
        ref={logoRef}
        className="absolute inset-0 z-20 flex items-center justify-center bg-white"
      >
        <img src="/img/logo1.png" alt="Logo" className="w-40 sm:w-56" />
      </div>

      {/* Video wrapper - slides up from bottom into place */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 -z-10 h-[120%] w-full"
      >
        <video
          muted
          loop
          autoPlay
          playsInline
          ref={parallaxImgRef}
          src="/videos/HomeHero.mp4"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full pb-10 sm:pb-12 text-center px-4">
        <h5 className="btn-text text-white drop-shadow-md mx-auto leading-relaxed">
          <span ref={textRef}></span>
          <span className="animate-pulse">|</span>
        </h5>
      </div>
    </section>
  );
}