"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ------------------------------------------------------------------
 *  CONTENT
 * ------------------------------------------------------------------
 */
const QUOTE_LINES = [
  '"THE MOUNTAINS ARE NEVER IN A HURRY. THE',
  'BEST JOURNEYS SHOULDN\'T BE EITHER."',
];
const ATTRIBUTION = "— Vinod";

// Jagged "torn paper" edge, filled to match whatever sits behind the strip.
function TornEdge({ flip = false, fill = "#ffffff", className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 h-6 w-full sm:h-9 ${
        flip ? "top-0 -translate-y-px rotate-180" : "bottom-0 translate-y-px"
      } ${className}`}
    >
      <path
        d="M0,32 L48,12 L96,28 L144,6 L192,24 L240,10 L288,30 L336,4 L384,26 L432,14
           L480,32 L528,8 L576,22 L624,4 L672,28 L720,12 L768,30 L816,6 L864,24 L912,10
           L960,32 L1008,4 L1056,26 L1104,14 L1152,30 L1200,8 L1248,24 L1296,6 L1344,28
           L1392,12 L1440,26 L1440,40 L0,40 Z"
        fill={fill}
      />
    </svg>
  );
}

export default function QuoteBanner() {
  const sectionRef = useRef(null);
  const starRef = useRef(null);
  const squiggleTopRef = useRef(null);
  const squiggleBottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = [
        starRef.current,
        squiggleTopRef.current,
        squiggleBottomRef.current,
      ];
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.to(starRef.current, { strokeDashoffset: 0, duration: 0.7 })
        .fromTo(
          ".quote-line",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.12, ease: "power3.out" },
          "-=0.2"
        )
        .fromTo(
          ".quote-attribution",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.15"
        )
        .to(
          [squiggleTopRef.current, squiggleBottomRef.current],
          { strokeDashoffset: 0, duration: 0.6, stagger: 0.08, ease: "power2.inOut" },
          "-=0.1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 ">
      {/* hand-drawn star, floats above the torn strip */}
      <div className="relative z-10 mb-6 flex justify-center">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path
            ref={starRef}
            d="M26 4 L31 20 L48 20 L34 30 L39 47 L26 37 L13 47 L18 30 L4 20 L21 20 Z"
            stroke="#111111"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* torn paper strip */}
      <div className="relative bg-[#e9e2d3] py-14 sm:py-16">
        <TornEdge flip fill="#ffffff" />
        <TornEdge fill="#ffffff" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h4 className="font-[900] uppercase leading-[1.15] tracking-tight text-neutral-900 text-2xl sm:text-3xl md:text-4xl">
            {QUOTE_LINES.map((line, i) => (
              <span key={i} className="quote-line block">
                {line}
              </span>
            ))}
          </h4>

          <h5 className="quote-attribution mt-6 text-sm font-bold uppercase tracking-[0.2em] text-neutral-800">
            {ATTRIBUTION}
          </h5>

          {/* hand-drawn flourish under the attribution */}
          <svg
            width="150"
            height="26"
            viewBox="0 0 150 26"
            fill="none"
            className="mx-auto mt-4"
          >
            <path
              ref={squiggleTopRef}
              d="M148 6 C 100 2, 60 4, 5 12"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              ref={squiggleBottomRef}
              d="M140 14 C 95 12, 55 13, 8 16"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}