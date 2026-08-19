"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Video() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);



  return (
    <section
  
      className="relative flex  w-full flex-col justify-end  overflow-hidden max-sm:h-[50vh] sm:h-[85vh] "
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10 h-[100%] max-sm:h-[50vh] w-[92vw] mx-auto overflow-hidden ">
        <video
        muted loop autoPlay
         
          src="/video/Yak Video.mp4" /* Make sure image is in your public folder */
          // alt="Motorcycle Journey"
          className="h-full w-full object-cover object-center "
        />
      </div>
    </section>
  );
}