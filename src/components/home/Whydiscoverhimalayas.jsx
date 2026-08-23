"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTNB from "../common/BTNB";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    id: 1,
    question: "Is Discover Himalayas right for me?",
    answer:
      "If you're drawn to remote mountain roads, real culture, and journeys that ask something of you, yes. We're not built for every rider, and we'll tell you honestly if we're not the right fit.",
  },
  {
    id: 2,
    question: "Why do so many travellers choose Discover Himalayas?",
    answer:
      "Three decades of running these exact routes, small groups, experienced lead riders, and a level of on-ground support most operators can't match once you're above 4,000 metres.",
  },
  {
    id: 3,
    question: "How do I know which journey is right for me?",
    answer:
      "Tell us your riding experience, the time you have, and what you want to feel by the end of it. We'll match you to a route rather than sell you the one we have space on.",
  },
  {
    id: 4,
    question: "I'm travelling from Europe. What should I expect?",
    answer:
      "Having welcomed travellers from Europe and around the world for more than three decades, we'll guide you through everything from visas and weather to riding conditions, accommodation and packing.",
  },
  {
    id: 5,
    question: "What happens after I get in touch?",
    answer:
      "You'll hear from a real person within a day, not a chatbot. We'll ask a few questions, recommend a route, and walk you through dates, cost, and what to prepare before you commit.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  const answerRef = useRef(null);

  useEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.set(el, { height: "auto" });
      const fullHeight = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: fullHeight,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => gsap.set(el, { height: "auto" }),
        }
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <p
          className={`heading-sm transition-colors ${
            isOpen ? "text-red-600!" : "text-neutral-800!"
          }`}
        >
          {item.question}
        </p>
        <span
          className={`flex h-6 w-6 flex-none items-center justify-center transition-colors ${
            isOpen ? "text-red-600" : "text-neutral-500"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 fill-none stroke-current stroke-[2.5] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div ref={answerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="pt-4 pr-10 ">{item.answer}</p>
      </div>
    </div>
  );
}

export default function WhyDiscoverHimalayas() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // Changed from useState(4) to useState(null)
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { x: -24, opacity: 0 });
      gsap.set(rightRef.current, { x: 24, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(leftRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      }).to(
        rightRef.current,
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6  py-16 md:px-12 md:py-20 lg:px-20 relative"
    >

     

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 z-10">
        {/* Left column */}
        <div ref={leftRef}>
          <p className="mb-10 eyebrow-text text-neutral-400">
            // Why Discover Himalayas 
          </p>
          <h4 className="mb-6 max-w-xl h-secondary font-medium! capitalize! heading-lg text-neutral-800">
            Before we start planning your journey, there&apos;s one question
            worth asking&hellip; are we the right people to take you there?
          </h4>
          <p className="mb-8 max-w-xl ">
            Here are some of the questions travellers usually ask us before
            they decide. If your question isn&apos;t here, let&apos;s
            talk&hellip;
          </p>
          <Link href="/faqs" className="max-sm:hidden">
          <BTNB txt={'View All FAQs'} />
            
          </Link>
        </div>

        {/* Right column: accordion */}
        <div ref={rightRef} className="border-t border-gray-300">
          {FAQS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}

          

          <Link href="/faqs" className="sm:hidden ">
             <BTNB txt={'View All FAQs'} />
          </Link>
        </div>
      </div>
    </section>
  );
}