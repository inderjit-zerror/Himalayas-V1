"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = [
  { src: "/img/1.jpg" },
  { src: "/img/3.jpg" },
  { src: "/img/5.jpg" },
  { src: "/img/6.jpg" },
  { src: "/img/7.jpg" },
];

export default function CuratedItineraries() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      
      // Initialize states: All images hidden below screen except the first one
      gsap.set(images, { y: "100vh" });
      gsap.set(images[0], { y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true, // 1 provides a very smooth scrub tie to the scrollbar
        },
      });

      images.forEach((img, i) => {
        if (i === 0) return;

        // 1. Bring the new image up smoothly. 
        // Notice we REMOVED the 'i' parameter here so it sequences continuously without gaps.
        tl.to(img, {
          y: 0,
          ease: "none",
        });

        // 2. Scale down and fade the previous image.
        // We use the "<" parameter which tells GSAP to start this animation 
        // exactly at the SAME TIME as the previous tween (the slide up).
        tl.to(
          images[i - 1],
          {
            scale: 0.85, // Added the opacity fade you mentioned in your comments
            ease: "none",
          },
          "<"
        );
      });

      // Optional: Text reveal animation can be un-commented safely here
      // gsap.from(".ci-eyebrow, .ci-heading, .ci-copy, .ci-cta", { ... });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToNext = (e) => {
    e.preventDefault();
    const targetSection = document.getElementById("NEXTSHIFTSECTION");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={wrapperRef} className="relative h-[500vh] bg-white">
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-[100dvh] w-full items-center overflow-hidden px-4 sm:py-20 sm:px-20 lg:px-20"
      >
        <div className="mx-auto w-full grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 relative z-20">
            <p className="ci-eyebrow eyebrow-text mb-4 text-neutral-400 lg:mb-6">
              // DESTINATIONS 
            </p>

            <h2 className="ci-heading h-primary heading-xl mb-6 text-neutral-900 lg:mb-8">
              Curated 
              <br  className="max-sm:hidden" />
               itineraries
            </h2>

            <p className="ci-copy mb-8 max-w-md lg:mb-10 text-neutral-600 max-sm:pr-5">
              From the high-altitude deserts of Ladakh and the timeless
              villages of Spiti to the mountain kingdoms of Nepal and
              Bhutan, the dawn-lit landscapes of Arunachal Pradesh, the
              living heritage of Rajasthan, the backwaters of Kerala and
              the tropical shores of Goa, each region offers a distinct
              way of experiencing this remarkable part of the world. By
              returning to these places year after year, we&apos;ve
              refined every journey through experience.
            </p>

            <a href="#NEXTSHIFTSECTION" onClick={handleScrollToNext}>
              <div className="ci-cta flex items-center gap-4 cursor-pointer">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 5v14m0 0l-6-6m6 6l6-6"
                    />
                  </svg>
                </span>
                <span className="btn-text font-medium text-neutral-700">
                  EXPLORE JOURNEYS
                </span>
              </div>
            </a>
          </div>

          <div className="col-span-12 h-[45vh] w-full lg:col-span-7 lg:h-[75vh] xl:px-20">
            <div className="relative h-full w-full sm:w-[91%] sm:ml-auto lg:aspect-[4/5]">
              {IMAGES.map((item, i) => (
                <div
                  key={item.src}
                  ref={(el) => (imageRefs.current[i] = el)}
                  className="absolute inset-0 h-full w-full origin-top overflow-hidden rounded-2xl shadow-2xl will-change-transform"
                  style={{ zIndex: i + 1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={`Curated itinerary destination ${i + 1}`}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}