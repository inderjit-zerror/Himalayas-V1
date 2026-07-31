"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Video() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax Effect for the Hero Background
    const parallaxAnim = gsap.to(parallaxImgRef.current, {
      yPercent: 30, // Moves the image down slower than the scroll speed
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // Smooth scrubbing effect linked to scroll
      },
    });

    return () => {
      parallaxAnim.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen w-full flex-col justify-end overflow-hidden "
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 h-[120%] w-[95vw] mx-auto">
        <video
        muted loop autoPlay
          ref={parallaxImgRef}
          src="https://www.pexels.com/download/video/19674205/" /* Make sure image is in your public folder */
          // alt="Motorcycle Journey"
          className="h-full w-full object-cover "
        />
      </div>
    </section>
  );
}