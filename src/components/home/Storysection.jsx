"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LEAD_LINE =
  "";

const BODY_TEXT =
  "For over three decades, Discover Himalayas has been exploring the mountain roads, hidden valleys and living cultures of the Himalayas. Every journey is shaped by experience, local relationships and a deep respect for the people who call them home. Whether you dream of riding legendary mountain passes or travelling slowly through the deserts, forests, and coastlines of India, Nepal, and Bhutan, every journey begins with curiosity—and leaves you with stories that stay with you long after you return home.";

export default function StorySection() {
  const sectionRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const para = paraRef.current;

    const ctx = gsap.context(() => {
      // Each <span class="word"> in the paragraph animates from dim to full
      // opacity, distributed across the scroll range — words light up one
      // by one as the section moves through the viewport, in either scroll
      // direction since it's scrubbed to scroll position, not a one-shot play.
      const words = para.querySelectorAll("span.word");

      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  // Split body copy into individually-animatable word spans, preserving
  // natural word spacing.
  const renderWords = (text) =>
    text.split(" ").map((word, i) => (
      <span className="word inline-block opacity-[0.15]" key={i}>
        {word}
        {i !== text.split(" ").length - 1 ? "\u00A0" : ""}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white min-h-svh px-6 py-24 md:px-10 flex flex-col justify-between md:py-20"
    >
      <div className="mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
        {/* Left: big headline */}
        <h2 className="h-primary text-neutral-900">
          The best journeys are shaped over time
        </h2>

        {/* Right: lead line + word-reveal paragraph */}
        <div className="flex justify-end ml-auto items-center md:pt-2">
          <p
            ref={paraRef}
            className="max-w-md p-large text-neutral-800"
          >
            <span className="font-semibold text-neutral-900">
              {LEAD_LINE}{" "}
            </span>
            {renderWords(BODY_TEXT)}
          </p>
        </div>
      </div>

      {/* Bottom row: est. date, quote, CTA */}
      <div className="mx-auto mt-24 flex w-full flex-col items-start justify-between gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-center md:gap-4">
        <span className="p-small uppercase tracking-[0.12em] font-medium text-neutral-500">
          [ EST. 1994 ]
        </span>

        <p className="p-small font-medium text-neutral-500 md:text-center">
          &ldquo;Every journey begins with curiosity. Over time, curiosity
          becomes experience.&rdquo;
        </p>

        <a
          href="/journeys"
          className="inline-flex items-center gap-2 bg-neutral-900 px-6 py-3 btn-text text-white transition-colors hover:bg-neutral-700"
        >
          Explore Journeys
          <span aria-hidden="true">&rsaquo;</span>
        </a>
      </div>
    </section>
  );
}