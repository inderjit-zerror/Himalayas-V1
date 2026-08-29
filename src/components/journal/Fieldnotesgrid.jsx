"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NOTES = [
  {
    category: "Field Notes",
    title: "Altitude Is Earned, Not Rushed.",
    body: "One of the most common mistakes first-time travellers make is trying to cover too much ground too quickly. In the Himalayas, every thousand metres changes how your body responds. Spending an extra day acclimatising often means enjoying the rest of the journey rather than simply enduring it. The mountains reward patience far more than speed.",
    href: "/field-notes/altitude",
  },
  {
    category: "Local Insight",
    title: "Tea Before Altitude",
    body: "Before asking about the road ahead, locals usually ask if you've had tea. It's more than hospitality—it's a reminder that every journey begins by slowing down.",
    href: "/field-notes/tea-before-altitude",
  },
];

function ArrowIcon() {
  return (
    <img src="/img/img1.png" alt="img" className="w-[20px] rotate-90" />
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
      x: 5,
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
      className="relative  w-full  px-6 py-16 sm:py-24 md:px-20 overflow-x-hidden text-neutral-800"
     
    >
      <div className="mx-auto  grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
        {NOTES.map((note, i) => (
          <a
            key={i}
            href={note.href}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="field-note-card group block"
          >
            {/* Header / Category row */}
            <div className="flex items-center gap-3">
              <ArrowIcon />
              <h5 className="font-mono text-xs font-semibold tracking-widest text-neutral-800 uppercase">
                [ {note.category} ]
              </h5>
            </div>

            {/* Title */}
            <h5 className="relative mt-8 text-base sm:text-lg font-bold text-black tracking-tight leading-snug inline-block">
              {note.title}
              
            </h5>

            {/* Body */}
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-neutral-700 font-normal">
              {note.body}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}