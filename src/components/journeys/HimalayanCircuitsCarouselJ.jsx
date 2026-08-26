"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

// Dummy Unsplash placeholders — swap the query keywords or drop in your own
// photo URLs later. `source.unsplash.com` serves a random matching image per
// unique URL, which is why each card has a distinct `sig` value.
const CIRCUITS = [
  {
    title: "Hidden Monasteries",
    description: "5 MIN READ",
    image: "/img/L1.png",
  },
  {
    title: "The Sacred Passes",
    description: "5 MIN READ",
    image: "/img/L2.png",
  },
  {
    title: "The Sacred Passes",
    description: "5 MIN READ",
    image: "/img/L3.png",
  },
  {
    title: "Living Cultures",
    description: "5 MIN READ",
    image: "/img/L1.png",
  },
  {
    title: "Remote Valleys",
    description: "5 MIN READ",
    image: "/img/L2.png",
  },
];

export default function HimalayanCircuitsCarouselJ() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateArrowState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 8
    );
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrowState();
    track.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    return () => {
      track.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, [updateArrowState]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const firstCard = cardRefs.current[0];
    if (!track || !firstCard) return;

    const gap = 24; // matches gap-6 below
    const distance = firstCard.offsetWidth + gap;
    const target =
      track.scrollLeft + (direction === "next" ? distance : -distance);

    gsap.to(track, {
      scrollLeft: target,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section className="w-full bg-white pl-4 py-5 sm:py-16 sm:py-24 md:pl-20 overflow-x-hidden">
      <div className="mx-auto w-full">
        {/* Header row */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-start pr-10">
          <h3 className="capitalize!">
            Stories from Ladakh
          </h3>

          <p className="max-w-xl ">
            <span className="font-semibold"> Go beyond the route </span> with travel notes, photography and stories from years of exploring Ladakh.
          </p>
        </div>

        {/* Arrows */}
        <div className="mb-8 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous circuit"
            onClick={() => scrollByCard("prev")}
            disabled={!canScrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next circuit"
            onClick={() => scrollByCard("next")}
            disabled={!canScrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {CIRCUITS.map((circuit, i) => (
            <article
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="w-[85%] flex-none sm:w-[46%] lg:w-[31%] group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Added relative positioning for absolute centering of play button */}
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={circuit.image}
                  alt={circuit.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Video Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center  transition-opacity duration-300 group-hover:bg-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 translate-x-0.5 sm:h-8 sm:w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <h5 className="mt-4 uppercase pb-2">
                {circuit.title}
              </h5>
              <span className="mt-5 ">
                {circuit.description}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}