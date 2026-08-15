"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * ------------------------------------------------------------------
 *  CONTENT
 *  Swap this out for real CMS data — everything below just renders it.
 * ------------------------------------------------------------------
 */
const ENTRY = {
  eyebrow: ["Vinod's Notebook", "Ladakh", "October 2024"],
  headlineLines: ["THE ROAD I", "NEVER GROW", "TIRED OF"],
  intro:
    "After thirty years of riding through Ladakh, people still ask me which road is my favourite. The answer has never stayed the same.",
  readTime: "12 min read",
  sidebar: {
    label: "Notebook Entry",
    title: "Somewhere between Leh and Hanle",
    body: "People often ask how many times I've ridden these roads. I stopped counting years ago. The number isn't important. What matters is that every journey still gives me a reason to stop, look around and stay a little longer than I planned.",
  },
};

// Jagged "torn paper" edge, reused for both the top and bottom of the section.
function TornEdge({ flip = false, fill = "#ffffff", className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 40"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 h-8 w-full sm:h-10 ${flip ? "top-0 -translate-y-px rotate-180" : "bottom-0 translate-y-px"
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

export default function NotebookHero() {
  const rootRef = useRef(null);
  const tapeRef = useRef(null);
  const sidebarRef = useRef(null);
  const squiggleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const squiggle = squiggleRef.current;
      const squiggleLength = squiggle.getTotalLength();
      gsap.set(squiggle, {
        strokeDasharray: squiggleLength,
        strokeDashoffset: squiggleLength,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tapeRef.current,
        { y: -36, opacity: 0, rotate: -14 },
        { y: 0, opacity: 1, rotate: -6, duration: 0.55 }
      )
        .fromTo(
          ".headline-line",
          { yPercent: 115, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.09 },
          "-=0.25"
        )
        .fromTo(
          ".intro-copy",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          sidebarRef.current,
          { x: 24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55 },
          "-=0.45"
        )
        .to(
          squiggle,
          { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" },
          "-=0.3"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#efe9dd] py-10 sm:py-24"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 38px, rgba(84,101,140,0.16) 39px, rgba(84,101,140,0.16) 40px)",
      }}
    >
      {/* faint paper grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #000 0.5px, transparent 0.5px), radial-gradient(circle at 70% 60%, #000 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px, 4px 4px",
        }}
      />

      {/* dark bleed strip suggesting a photo above this page */}
      <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/50 to-transparent" />
      <TornEdge flip fill="#efe9dd" />

      {/* washi tape */}
      <div
        ref={tapeRef}
        className="absolute right-10 top-2 z-20 h-11 w-36 -rotate-6 border border-black/5 bg-[#d9c9a3]/80 shadow-md sm:right-24"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 8px)",
        }}
      />

      <div className="relative z-10 mx-auto grid  grid-cols-1 gap-14 px-6 pt-10 md:grid-cols-[1fr_20vw] md:gap-10 md:px-20">
        {/* ---------------------------------------------------------- */}
        {/* LEFT: eyebrow, headline, intro                              */}
        {/* ---------------------------------------------------------- */}
        <div>
          <p className=" uppercase flex">
            <p className="">// {ENTRY.eyebrow[0]}</p>
            <p className="mx-2 text-neutral-400">/</p>
            {ENTRY.eyebrow[1]}
            <p className="mx-2 text-neutral-400">/</p>
            {ENTRY.eyebrow[2]}
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-headline)] font-bold uppercase leading-[0.88] tracking-tight text-neutral-900 text-[clamp(2.75rem,8vw,6.25rem)]">
            {ENTRY.headlineLines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span className="headline-line block">{line}</span>
              </span>
            ))}
          </h2>

          <p className=" mt-8 max-w-xl ">
            {ENTRY.intro}
          </p>

          <p className=" mt-2">
            {ENTRY.readTime}
          </p>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* RIGHT: notebook entry sidebar                               */}
        {/* ---------------------------------------------------------- */}
        <div
          ref={sidebarRef}
          className="border-t border-neutral-400/40 pt-8  w-fit md:border-l md:border-t-0 md:pl-9 md:pt-0"
        >
          <p className="uppercase ">
            [ {ENTRY.sidebar.label} ]
          </p>

          <svg
            width="150"
            height="22"
            viewBox="0 0 150 22"
            fill="none"
            className="mt-3"
          >
            <path
              ref={squiggleRef}
              d="M2 14 C 30 2, 45 20, 72 10 S 118 2, 148 12"
              stroke="#111111"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <h3 className="mt-4 ">
            {ENTRY.sidebar.title}
          </h3>
          <p className="mt-2 ">
            {ENTRY.sidebar.body}
          </p>
        </div>
      </div>

      <TornEdge fill="#ffffff" />
    </section>
  );
}