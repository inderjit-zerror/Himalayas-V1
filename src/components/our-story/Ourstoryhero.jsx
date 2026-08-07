"use client";

import { useLayoutEffect, useRef } from "react";
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
  const bgRef = useRef(null);
  const eyebrowRef = useRef(null);
  const introRef = useRef(null);
  const lineRefs = useRef([]);
  const playRef = useRef(null);
  const columnsRef = useRef(null);
  const connectorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Full experience for people who haven't asked for reduced motion
      mm.add(
        {
          isDesktop: "(min-width: 64rem)",
          isMobile: "(max-width: 63.9375rem)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reduceMotion } = context.conditions;

          const connectorLines = connectorRef.current
            ? connectorRef.current.querySelectorAll("[data-connector-line]")
            : [];
          const columnItems = columnsRef.current
            ? columnsRef.current.querySelectorAll("[data-column]")
            : [];

          if (reduceMotion) {
            // Show everything in place, skip motion entirely
            gsap.set(
              [
                eyebrowRef.current,
                introRef.current,
                ...lineRefs.current,
                playRef.current,
                ...columnItems,
              ],
              { clearProps: "all" }
            );
            gsap.set(connectorLines, { strokeDashoffset: 0 });
            return;
          }

          // Background: slow parallax drift tied to the full 200vh scroll
          // gsap.to(bgRef.current, {
          //   yPercent: 14,
          //   ease: "none",
          //   scrollTrigger: {
          //     trigger: sectionRef.current,
          //     start: "top top",
          //     end: "bottom bottom",
          //     scrub: true,
          //   },
          // });

          // Master reveal timeline, scrubbed across the pinned duration
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          });

          tl.from(eyebrowRef.current, {
            yPercent: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          })
            .from(
              introRef.current,
              { yPercent: 50, opacity: 0, duration: 1, ease: "power2.out" },
              "<0.1"
            )
            .from(
              lineRefs.current,
              {
                yPercent: 110,
                duration: 1,
                stagger: 0.18,
                ease: "power3.out",
              },
              "+=0.15"
            )
            .from(
              playRef.current,
              { scale: 0, opacity: 0, duration: 0.8, ease: "back.out(2)" },
              "<0.25"
            )
            .from(
              columnItems,
              {
                yPercent: 35,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
              },
              "+=0.2"
            )
            .fromTo(
              connectorLines,
              { strokeDashoffset: 100 },
              { strokeDashoffset: 0, duration: 1, ease: "power1.inOut" },
              "<0.1"
            );

          // Idle breathing loop on the play button once it has appeared
          gsap.to(playRef.current, {
            scale: 1.06,
            duration: 1.6,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 1.4,
          });
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] w-full bg-ink"
      aria-label="Our Story"
    >
      {/* Pinned viewport: CSS sticky keeps this filling the screen for
          the entire 200vh scroll distance of the parent section */}
      <div className="sticky top-0 h-[120vh] w-full overflow-hidden pt-[8vh] ">
        {/* Background photo + parallax layer */}
        <div
          ref={bgRef}
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full will-change-transform"
        >
          {/*
            Replace the src below with your own asset, e.g.
            /images/our-story-road.jpg — placed in /public/images
          */}
          <img
            src="https://images.unsplash.com/photo-1721046547874-f62a19e8ee38?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Aerial view of a motorcyclist riding a mountain road through the Himalayan foothills"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/25 to-ink/85" />
        </div>

        {/* Content grid, laid out with vw / vh / rem only */}
        <div className="relative z-10 flex h-full w-full flex-col text-white justify-between px-[5vw] py-[6vh]">
          {/* Top: eyebrow + intro paragraph */}
          <div className="max-w-[26rem] overflow-hidden">
            <p ref={eyebrowRef} className="eyebrow-tag">
              // Our Story
            </p>
            <p ref={introRef} className="intro-copy p-small mt-[0.75rem] max-w-[24rem]">
              Born from a lifelong connection to the Himalayas and enriched
              by decades of exploring the Indian subcontinent, Discover
              Himalayas creates journeys defined by local knowledge, lasting
              relationships and a genuine love for the road.
            </p>
          </div>

          {/* Middle: headline + play button */}
          <div className="flex items-center gap-[1.25rem] sm:gap-[2rem] h-primary ">
            <h1 className="heading-hero">
              {HEADLINE_LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <span
                    ref={(el) => (lineRefs.current[i] = el)}
                    className="inline-block"
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            {/* <button
              ref={playRef}
              type="button"
              aria-label="Play our story video"
              className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full border border-cream/40 bg-ink/40 backdrop-blur-sm transition-colors duration-300 hover:bg-cream/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust sm:h-[4.5rem] sm:w-[4.5rem]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[1.25rem] w-[1.25rem] translate-x-[0.1rem] fill-cream sm:h-[1.5rem] sm:w-[1.5rem]"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button> */}
          </div>

          {/* Bottom: three-column story with animated connector line */}
          <div ref={columnsRef} className="relative pt-[2rem]">
            {/* Connector line sits above the labels, hidden below sm */}
            <svg
              ref={connectorRef}
              viewBox="0 0 100 4"
              preserveAspectRatio="none"
              className="pointer-events-none absolute left-0 right-0 -top-[0.25rem] hidden h-[0.25rem] w-full sm:block"
              aria-hidden="true"
            >
              <line
                data-connector-line
                x1="15"
                y1="2"
                x2="49"
                y2="2"
                stroke="#c1441f"
                strokeWidth="0.3"
                strokeDasharray="1.6 1.6"
                strokeLinecap="round"
                pathLength="100"
              />
              <line
                data-connector-line
                x1="51"
                y1="2"
                x2="85"
                y2="2"
                stroke="#c1441f"
                strokeWidth="0.3"
                strokeDasharray="1.6 1.6"
                strokeLinecap="round"
                pathLength="100"
              />
            </svg>

            <div className="grid grid-cols-1 gap-y-[1.75rem] sm:grid-cols-3 sm:gap-x-[2rem]">
              {STORY_COLUMNS.map((column) => (
                <div key={column.label} data-column>
                  <p className="story-label">{column.label}</p>
                  <p className="story-copy mt-[0.6rem] max-w-[22rem]">
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