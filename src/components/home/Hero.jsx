// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function Hero() {
//   const heroRef = useRef(null);
//   const parallaxImgRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Parallax Effect for the Hero Background
//     const parallaxAnim = gsap.to(parallaxImgRef.current, {
//       yPercent: 30, // Moves the image down slower than the scroll speed
//       ease: "none",
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true, // Smooth scrubbing effect linked to scroll
//       },
//     });

//     return () => {
//       parallaxAnim.kill(); // Cleanup on unmount
//     };
//   }, []);

//   return (
//     <section
//       ref={heroRef}
//       className="relative flex h-screen w-full flex-col justify-end overflow-hidden "
//     >
//       {/* Parallax Background */}
//       <div className="absolute inset-0 -z-10 h-[120%] w-full">
//         <video
//         muted loop autoPlay
//           ref={parallaxImgRef}
//           src="/videos/HomeHero.mp4" /* Make sure image is in your public folder */
//           // alt="Motorcycle Journey"
//           className="h-full w-full object-cover "
//         />
//       </div>

     

//       {/* Bottom Text */}
//       <div className="relative z-10 w-full pb-12 text-center px-4">
//         <h1 className="text-sm font-bold uppercase tracking-widest text-white md:text-base drop-shadow-md">
//           Creating Motorcycle and Overland Journeys Across the Himalayas and the Indian Subcontinent
//         </h1>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      parallaxAnim.kill(); 
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden "
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
        <h1 className="btn-text text-white drop-shadow-md max-w-4xl mx-auto leading-relaxed">
          Creating Motorcycle and Overland Journeys Across the Himalayas and the Indian Subcontinent
        </h1>
      </div>
    </section>
  );
}