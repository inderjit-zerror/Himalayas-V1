"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NotebookHeroSection() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const notePaperRef = useRef(null);
  const polaroidRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background subtle zoom out
      tl.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 1.4 },
      )
        // Main title slide & fade in
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=1.0",
        )
        // Notebook paper slide in from right
        .fromTo(
          notePaperRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9 },
          "-=0.7",
        )
        // Polaroid image pop & rotate entrance
        .fromTo(
          polaroidRef.current,
          { scale: 0.8, opacity: 0, rotate: 12 },
          {
            scale: 1,
            opacity: 1,
            rotate: 4,
            duration: 0.8,
            ease: "back.out(1.5)",
          },
          "-=0.4",
        );

      // --- PARALLAX ON SCROLL ---

      // Background image drifts slower than scroll (classic parallax)
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Notebook paper drifts slightly, opposite-ish direction for depth
      gsap.to(notePaperRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Polaroid drifts faster, creating a "closer to camera" feel
      gsap.to(polaroidRef.current, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full max-sm:h-[100svh] sm:min-h-[300vh] bg-stone-900 text-stone-900 overflow-hidden flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-x-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          // ref={bgRef}
          src="/img/AZ3.jpeg"
          alt="Motorcycle on mountain road in Ladakh"
          className="w-full h-full object-cover object-center rotate-180 will-change-transform"
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 max-sm:text-white! pointer-events-none" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10  w-full mx-auto flex flex-col h-full gap-8 items-start pt-20">
        {/* Left Column: Category & Hero Headline */}
        <div
          ref={titleRef}
          className="lg:col-span-7 flex flex-col justify-start pt-4 z-20"
        >
          <p className="text-xs md:text-sm font-bold tracking-widest text-stone-800 max-sm:text-white! uppercase mb-4 drop-shadow-sm">
            // VINOD'S NOTEBOOK / LADAKH / OCTOBER 2024
          </p>
          <h1 className="text-[8vw]!  font-extrabold! uppercase tracking-tight text-stone-800 max-sm:text-white! leading-[0.88]  drop-shadow-sm">
            The Road
            <br />
            I Never Grow <br /> Tired Of
          </h1>
        </div>

        <div className=" h-fit absolute w-[60%] max-sm:w-[70%]  right-[-8%]  max-sm:top-[30%] sm:top-[50%] z-10">
          <img
            src="/img/Image110.png"
            alt="IMg"
            className="  w-full sm:h-full  object-cover object-center"
          />

          <img src="/img/IGB.jpeg" alt="img" className="w-1/2 h-fit absolute max-sm:-bottom-25 sm:-bottom-30 left-[45%] -translate-x-1/2 -rotate-15" />

          <div className="w-[320px] p-6  absolute max-sm:top-[-25%] sm:top-[20%] max-sm:-left-[25%] sm:left-[20%] max-sm:scale-[0.4] ">
            {/* <!-- Title --> */}
            <p className="text-[14px] font-extrabold! uppercase leading-[1.35] tracking-wide mb-5">
              AFTER THIRTY YEARS OF RIDING THROUGH LADAKH, PEOPLE STILL ASK ME
              WHICH ROAD IS MY FAVOURITE. THE ANSWER HAS NEVER STAYED THE SAME.
            </p>

            {/* <!-- Read Time --> */}
            <p className="text-[12px] font-extrabold! uppercase tracking-wide mb-5">
              12 MIN READ
            </p>

            {/* <!-- Tag --> */}
            <p className="text-[13px] font-semibold tracking-wide mb-2">
              [ NOTEBOOK ENTRY ]
            </p>

            {/* <!-- Hand-drawn underline effect --> */}
            <div className="w-28 h-2 bg-neutral-900 rounded-full mb-4 -rotate-1"></div>

            {/* <!-- Location Heading --> */}
            <h4 className="text-[13px] font-bold! leading-snug mb-1">
              Somewhere between Leh and Hanle
            </h4>

            {/* <!-- Body Text --> */}
            <p className="text-[13px] leading-[1.45] font-normal text-neutral-800">
              People often ask how many times I've ridden these roads. I stopped
              counting years ago. The number isn't important. What matters is
              that every journey still gives me a reason to stop, look around
              and stay a little longer than I planned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
