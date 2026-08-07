"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

// Dummy Unsplash placeholders — swap the query keywords or drop in your own
// photo URLs later. `source.unsplash.com` serves a random matching image per
// unique URL, which is why each card has a distinct `sig` value.
const CIRCUITS = [
  {
    title: "Hidden Monasteries",
    description:
      "A retreat into silent ancient stone sanctuaries and spiritual chants.",
    image: "https://images.unsplash.com/photo-1780584523947-14ebc50723c7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Sacred Passes",
    description:
      "High-altitude motorcycle passes and timeless geological lines.",
    image: "https://images.unsplash.com/photo-1780584523960-30c59e847629?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Sacred Passes",
    description:
      "High-altitude motorcycle passes and timeless geological lines.",
    image: "https://images.unsplash.com/photo-1647143351654-d8c9c2f26e1b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Living Cultures",
    description:
      "Villages, prayer flags and the rhythms of everyday mountain life.",
    image: "https://images.unsplash.com/photo-1544735716-87fa59a45b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Remote Valleys",
    description:
      "Wide, silent landscapes carved by rivers and centuries of wind.",
    image: "https://images.unsplash.com/photo-1600700753517-07561297dc34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="w-full bg-white px-4 py-16 sm:py-24 md:px-10">
      <div className="mx-auto w-full">
        {/* Header row */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-start">
          <h2 className="heading-lg h-secondary text-neutral-900 uppercase">
           Stories from Ladakh
          </h2>

          <p className="max-w-xl body-base text-neutral-700">
            <span className="font-semibold text-neutral-900">
              Every Journey Begins with a Different Dream.{" "}
            </span>
            Some seek legendary mountain roads. Others are drawn to remote
            landscapes, living cultures or the joy of travelling slowly
            through extraordinary places.
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
              <h3 className="mt-4 heading-sm text-neutral-900 uppercase">
                {circuit.title}
              </h3>
              <p className="mt-1 body-sm text-neutral-600">
                {circuit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer row */}
        {/* <div className="mt-10 sm:mt-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="caption-text text-neutral-500">
            [ Est. 1994 ]
          </p>
          <p className="caption-text text-neutral-500 text-center md:text-left normal-case">
            “Every region has its own landscape, its own rhythm and its own stories”
          </p>
          <a
            href="/destinations"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-neutral-900 px-6 py-4 sm:py-3 btn-text text-white transition-colors hover:bg-neutral-700"
          >
            Explore Destinations
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}