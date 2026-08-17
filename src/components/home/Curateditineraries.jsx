"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Convert the strings to objects to hold unique sizing and positioning classes for each image.
// Percentages ensure it remains perfectly responsive on mobile, while we use Tailwind to offset them.
const IMAGES = [
  { 
    src: "/img/1.jpg", 
    imgClass: "w-full h-full top-0 left-0" 
  },
  { 
    src: "/img/3.jpg", 
    imgClass: "w-[92%] h-[88%] bottom-0 right-0 lg:w-[85%] lg:h-[85%] rounded-lg" 
  },
  { 
    src: "/img/5.jpg", 
    imgClass: "w-[88%] h-[92%] top-4 left-4 lg:w-[80%] lg:h-[90%] rounded-lg" 
  },
  { 
    src: "/img/6.jpg", 
    imgClass: "w-[95%] h-[82%] bottom-6 left-0 lg:w-[90%] lg:h-[75%] lg:bottom-10 lg:left-4 rounded-lg" 
  },
  { 
    src: "/img/7.jpg", 
    imgClass: "w-[85%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[75%] lg:h-[80%] rounded-lg" 
  },
];

export default function CuratedItineraries() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      
      // Animate the wrappers down initially
      gsap.set(images, { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Slide each wrapper up
      images.forEach((img, i) => {
        tl.to(
          img,
          {
            yPercent: 0,
            ease: "none",
            duration: 1,
          },
          i
        );
      });

      gsap.from(".ci-eyebrow, .ci-heading, .ci-copy, .ci-cta", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[500vh] bg-white">
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-[100dvh] w-full items-center overflow-hidden px-4 sm:py-20 sm:px-10 lg:px-10"
      >
        <div className="mx-auto w-full grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="ci-eyebrow eyebrow-text mb-4 text-neutral-400 lg:mb-6">
              [ DESTINATIONS ]
            </p>

            <h2 className="ci-heading h-primary heading-xl mb-6 text-neutral-900 lg:mb-8">
              Curated
              <br />
              itineraries
            </h2>

            <p className=" mb-8 max-w-md lg:mb-10">
              From the high-altitude deserts of Ladakh and the timeless
              villages of Spiti to the mountain kingdoms of Nepal and
              Bhutan, the dawn-lit landscapes of Arunachal Pradesh, the
              living heritage of Rajasthan, the backwaters of Kerala and
              the tropical shores of Goa, each region offers a distinct
              way of experiencing this remarkable part of the world. By
              returning to these places year after year, we&apos;ve
              refined every journey through experience.
            </p>

            <div className="ci-cta flex items-center gap-4">
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
              <span className="btn-text text-neutral-700">
                EXPLORE JOURNEYS
              </span>
            </div>
          </div>

          <div className="col-span-12 h-[45vh] w-full lg:col-span-7 lg:h-[75vh] xl:px-20">
            {/* Removed the rounded-sm from this parent to allow inner images to handle their own rounding */}
            <div className="relative h-full w-full overflow-hidden lg:aspect-[4/5]">
              {IMAGES.map((item, i) => (
                <div
                  key={item.src}
                  ref={(el) => (imageRefs.current[i] = el)}
                  // The wrapper remains full-size and takes the animation
                  className="absolute inset-0"
                  style={{ zIndex: i + 1 }}
                >
                  {/* The image receives the unique sizing and offsets */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt=""
                    className={`absolute object-cover shadow-2xl transition-transform duration-500 ${item.imgClass}`}
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