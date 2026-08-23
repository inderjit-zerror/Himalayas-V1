"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import BTNB from "../common/BTNB";

// Dummy Unsplash placeholders — swap the query keywords or drop in your own
// photo URLs later. `source.unsplash.com` serves a random matching image per
// unique URL, which is why each card has a distinct `sig` value.
const CIRCUITS = [
  {
    title: "Hidden Monasteries",
    description:
      "A retreat into silent ancient stone sanctuaries and spiritual chants.",
    image: "/img/6.jpg",
  },
  {
    title: "The Sacred Passes",
    description:
      "High-altitude motorcycle passes and timeless geological lines.",
    image: "/img/7.jpg",
  },
  {
    title: "The Sacred Passes",
    description:
      "High-altitude motorcycle passes and timeless geological lines.",
    image: "/img/8.jpg",
  },
  {
    title: "Living Cultures",
    description:
      "Villages, prayer flags and the rhythms of everyday mountain life.",
    image: "/img/1.jpg",
  },
  {
    title: "Remote Valleys",
    description:
      "Wide, silent landscapes carved by rivers and centuries of wind.",
    image: "/img/3.jpg",
  },
];

export default function HimalayanCircuitsCarousel2() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateArrowState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrev(track.scrollLeft > 8);
    setCanScrollNext(
      track.scrollLeft + track.clientWidth < track.scrollWidth - 8,
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
    <section className="w-full bg-white pl-4 py-10 sm:py-24 md:pl-20">
      <div className="mx-auto w-full">
        {/* Header row */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-start pr-10">
          <h2 className="heading-lg h-primary text-[3rem]! text-neutral-900 uppercase font-medium!">
            Beyond the
            <br />
            Himalayas
          </h2>

          <p className="sm:w-[46vw] ">
           <apan className="font-extrabold!" >Journeys that Reveal a Different Side of India.</apan> From desert kingdoms and tropical coastlines to ancient cities and wildlife-rich forests, these journeys celebrate the remarkable diversity of the Indian subcontinent
          </p>
        </div>

        {/* Arrows */}
        <div className="mb-8 flex items-center gap-3 max-sm:hidden">
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
              className="w-[85%] flex-none sm:w-[46%] lg:w-[31%]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="aspect-[5/3] w-full overflow-hidden bg-neutral-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={circuit.image}
                  alt={circuit.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h5 className="mt-4 heading-sm text-neutral-900 uppercase">
                {circuit.title}
              </h5>
              <p className="mt-1 ">
                {circuit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer row */}
        <div className="mt-10 sm:mt-14 flex flex-col items-start justify-between gap-6 pr-10 md:flex-row md:items-center">
          <p className="">[ Est. 1994 ]</p>
          <p className=" text-center md:text-left normal-case">
            “Every region has its own landscape, its own rhythm and its own
            stories”
          </p>

          <BTNB txt={'Explore Destinations'} />
          
        </div>
      </div>
    </section>
  );
}
