"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ------------------------------------------------------------------
 *  CONTENT
 *  Add as many notes as you like — the grid and animations adapt.
 * ------------------------------------------------------------------
 */
const NOTES = [
  {
    title: "Altitude Is Earned, Not Rushed.",
    body: "One of the most common mistakes first-time travellers make is trying to cover too much ground too quickly. In the Himalayas, every thousand metres changes how your body responds. Spending an extra day acclimatising often means enjoying the rest of the journey rather than simply enduring it. The mountains reward patience far more than speed.",
    href: "/field-notes/altitude",
  },
  {
    title: "Altitude Is Earned, Not Rushed.",
    body: "One of the most common mistakes first-time travellers make is trying to cover too much ground too quickly. In the Himalayas, every thousand metres changes how your body responds. Spending an extra day acclimatising often means enjoying the rest of the journey rather than simply enduring it. The mountains reward patience far more than speed.",
    href: "/field-notes/altitude",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="field-note-arrow shrink-0 transition-transform duration-300 ease-out"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function FieldNotesGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".field-note-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector(".field-note-arrow"), {
      x: 4,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(card.querySelector(".field-note-underline"), {
      scaleX: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector(".field-note-arrow"), {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(card.querySelector(".field-note-underline"), {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="mx-auto  px-6 py-16 sm:py-20 md:px-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
        {NOTES.map((note, i) => (
          <a
            key={i}
            href={note.href}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="field-note-card group block"
          >
            {/* label row */}
            <div className="flex items-center gap-2 text-neutral-800">
              <ArrowIcon />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em]">
                [ Field Notes ]
              </span>
            </div>

            {/* title with animated underline */}
            <p className="relative mt-4 inline-block text-[15px]  text-neutral-900 sm:text-base font-extrabold! ">
              {note.title}
              <span className="field-note-underline absolute -bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-neutral-900" />
            </p>

            <p className="mt-3 max-w-md ">
              {note.body}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}