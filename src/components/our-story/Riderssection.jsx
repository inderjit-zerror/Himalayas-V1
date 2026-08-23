"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTNA from "../common/BTNA";

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
      className="w-full bg-white px-5 sm:px-20 sm:py-[8vh] max-sm:pt-10 overflow-x-hidden "
      aria-label="Our riders"
    >
      <div className="mx-auto grid w-full  grid-cols-1 items-center gap-y-[3.5rem] lg:grid-cols-2 lg:gap-x-[4rem]">
        {/* Stamp photo column */}
        <div className="relative flex max-sm:hidden justify-center ">
          <div
            ref={stampRef}
            className="relative z-10 w-fit p-[1rem] "
          >
            <img
              src="/img/ODG.png"
              alt="A rider resting on rocks with a Himalayan mountain range behind him"
              className=" w-full object-cover object-center relative"
            />
          </div>


        </div>

        {/* Text column */}
        <div className="max-w-[30rem]">
          <h2
            ref={headlineRef}
            className="heading-xl text-neutral-900  sm:mb-20 max-sm:flex"
          >
            <span className="block overflow-hidden">
              <span className="inline-block">OUR</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block max-sm:ml-3">RIDERS</span>
            </span>
          </h2>

          <p
            ref={paraRef}
            className="mt-[1.75rem] mb-5 "
          >
            From experienced riders to first-time visitors, our travellers
            come from around the world to explore the Himalayas and the
            Indian subcontinent. They arrive with different dreams but
            leave with one thing in common—memories shaped by genuine
            local experiences.
          </p>

          <BTNA txt={'Travellers Stories'} />

          
          <p
            ref={quoteRef}
            className="mt-[2rem] font-bold! text-black! "
          >
            "Optate ditatem idenimp orionsed eosandem et volut omnimincto
            beraturem. Xerum is eum asi ulpa dolut rectur aspeditam".
          </p>
        </div>

        {/* Stamp photo column */}
        <div className="relative flex sm:hidden justify-center max-sm:mb-15 ">
          <div
            ref={stampRef}
            className="relative z-10 w-fit p-[1rem] "
          >
            <img
              src="/img/ODG.png"
              alt="A rider resting on rocks with a Himalayan mountain range behind him"
              className=" w-full object-cover object-center relative"
            />
          </div>


        </div>
      </div>
    </section>
  );
}