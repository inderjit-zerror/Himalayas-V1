"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RidersSection() {
  const sectionRef = useRef(null);
  const stampRef = useRef(null);
  const badgeRef = useRef(null);
  const marksRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const quoteRef = useRef(null);


  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-5 sm:px-10 py-[8vh]"
      aria-label="Our riders"
    >
      <div className="mx-auto grid w-full grid-cols-1 items-center gap-y-[3.5rem] lg:grid-cols-2 lg:gap-x-[4rem]">
        {/* Stamp photo column */}
        <div className="relative flex justify-center lg:justify-start">
          <div
            ref={stampRef}
            className="relative z-10 w-[min(24rem,80vw)] bg-white p-[1rem] shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.12)]"
          >
            <img
              src="https://images.unsplash.com/photo-1632050592122-6b730e1ac63f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A rider resting on rocks with a Himalayan mountain range behind him"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>


        </div>

        {/* Text column */}
        <div className="max-w-[30rem]">
          <h2
            ref={headlineRef}
            className="heading-xl text-neutral-900 "
          >
            <span className="block overflow-hidden">
              <span className="inline-block">OUR</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block">RIDERS</span>
            </span>
          </h2>

          <p
            ref={paraRef}
            className="mt-[1.75rem] "
          >
            From experienced riders to first-time visitors, our travellers
            come from around the world to explore the Himalayas and the
            Indian subcontinent. They arrive with different dreams but
            leave with one thing in common—memories shaped by genuine
            local experiences.
          </p>

          <button
            ref={ctaRef}
            type="button"
            className="mt-[1.75rem] inline-flex items-center gap-[0.5rem] rounded-[0.25rem] border border-neutral-300 px-[1.5rem] py-[0.75rem] btn-text text-neutral-500 transition-colors duration-300 hover:border-neutral-400 hover:text-neutral-700"
          >
            Travellers Stories
            <svg
              viewBox="0 0 24 24"
              className="h-[0.85rem] w-[0.85rem] fill-none stroke-current stroke-[2.5]"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p
            ref={quoteRef}
            className="mt-[2rem] "
          >
            "Optate ditatem idenimp orionsed eosandem et volut omnimincto
            beraturem. Xerum is eum asi ulpa dolut rectur aspeditam".
          </p>
        </div>
      </div>
    </section>
  );
}