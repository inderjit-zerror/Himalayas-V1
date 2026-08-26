"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HEADLINE_LINES = ["HOME FIRST.", "THEN THE", "ROAD."];

const STORY_COLUMNS = [
  {
    label: "Home",
    copy: "Born and raised in Naggar, Vinod didn't come to the Himalayas to explore them —they were home. Growing up in these mountains shaped a lifelong connection that would become the foundation of Discover Himalayas.",
  },
  {
    label: "The Road",
    copy: "Motorcycles opened up a world beyond home. Along the way came lifelong friendships, including Uwe Balser, and in 1999, Nadia, life partner. Together, they explored the Indian subcontinent on two wheels, discovering extraordinary places and people.",
  },
  {
    label: "Sharing the Journey",
    copy: "In 2008, those years of experience found a name: Discover Himalayas. Today, that same spirit continues through thoughtfully crafted journeys across the Himalayas and the Indian subcontinent.",
  },
];

export default function OurStoryHero() {
  const sectionRef = useRef(null);
  const connectorRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const connectors = connectorRefs.current.filter(Boolean);

      // Animate the dot-dash-arrow lines sequentially on scroll
      gsap.fromTo(
        connectors,
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          stagger: 0.5, // Draws them sequentially
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // Starts animating when the section hits the top of viewport
            end: "bottom bottom", // Finishes when the section ends
            scrub: 1, // Smoothly ties the animation to the scrollbar
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[165vh] w-full bg-ink overflow-hidden"
      aria-label="Our Story"
    >

      <div className="w-full sm:hidden h-full absolute top-0 left-0 bg-black/20 z-10" />

      {/* Background photo */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1721046547874-f62a19e8ee38?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Aerial view of a motorcyclist riding a mountain road through the Himalayan foothills"
          className="h-full w-full object-cover"
        />
        {/* Existing Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/25 to-ink/85" />
        
        {/* NEW: Bottom 50vh Black to Transparent Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* Content grid */}
      <div className="relative z-10 flex min-h-[165vh] w-full flex-col justify-between px-[5vw] py-[8vh] text-white">
        {/* Top: eyebrow + intro paragraph */}
        <div className="max-w-[26rem] mt-[20vh] ">
          <p className="eyebrow-tag text-white! ">// Our Story</p>
          <p className=" mt-[0.75rem]  text-white! max-w-[24rem]">
            Born from a lifelong connection to the Himalayas and enriched
            by decades of exploring the Indian subcontinent, Discover
            Himalayas creates journeys defined by local knowledge, lasting
            relationships and a genuine love for the road.
          </p>
        </div>

        <div>
          {/* Middle: headline */}
          <div className="flex items-center gap-[1.25rem] sm:gap-[2rem] py-12 h-primary">
            <h2 className="heading-hero sm:max-w-[40vw] text-[#D9D9D9]">
              {HEADLINE_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Bottom: three-column story */}
          <div className="relative pt-[2rem]">
            <div className="grid grid-cols-1 gap-y-[2.5rem] sm:grid-cols-3 sm:gap-x-[2rem]">
              {STORY_COLUMNS.map((column, i) => (
                <div key={column.label} className="flex flex-col">
                  {/* Red Label */}
                  <h5 className="text-[#c1441f] font-bold mb-2">
                    {column.label}
                  </h5>

                  {/* Timeline Connector (Dot, Dashed Line, Arrow) */}
                  <div 
                    ref={(el) => (connectorRefs.current[i] = el)}
                    className="flex items-center w-full mb-4 text-gray-300/80"
                  >
                    {/* Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></div>
                    {/* Dashed Line */}
                    <div className="flex-1 h-[1px] bg-transparent border-t border-dashed border-current mx-1"></div>
                    {/* Arrow */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 -ml-1"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>

                  {/* Paragraph Copy */}
                  <p className=" text-white!  max-w-[22rem]">
                    {column.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}