"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM = [
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "https://images.unsplash.com/photo-1549958909-db7599598400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "https://images.unsplash.com/photo-1573826687715-6af4633a84fd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "https://images.unsplash.com/photo-1613737692508-55e399ce07df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "https://images.unsplash.com/photo-1702571498033-73089afa26d0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "https://images.unsplash.com/photo-1664710696470-f6aa9de6d823?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const introRef = useRef(null);
  const cardRefs = useRef([]);
  const footerRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        headerTl
          .from(headlineRef.current.children, {
            yPercent: 110,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          })
          .from(
            introRef.current,
            { y: "1.25rem", opacity: 0, duration: 0.7, ease: "power2.out" },
            "<0.1"
          );

        const cards = cardRefs.current.filter(Boolean);

        cards.forEach((card, i) => {
          const photo = card.querySelector("[data-card-photo]");
          const details = card.querySelectorAll("[data-card-detail]");

          gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
            delay: i * 0.08,
          })
            .from(card, { y: "2rem", opacity: 0, duration: 0.7, ease: "power2.out" })
            .from(
              photo,
              { scale: 1.18, duration: 0.9, ease: "power2.out" },
              "<"
            )
            .from(
              details,
              { y: "0.75rem", opacity: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
              "<0.2"
            );
        });

        gsap.from(footerRef.current, {
          opacity: 0,
          y: "1rem",
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        });

        const btn = ctaRef.current;
        const onEnter = () =>
          gsap.to(btn, { scale: 1.04, duration: 0.25, ease: "power2.out" });
        const onLeave = () =>
          gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
        btn.addEventListener("mouseenter", onEnter);
        btn.addEventListener("mouseleave", onLeave);

        return () => {
          btn.removeEventListener("mouseenter", onEnter);
          btn.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-neutral-200 bg-white px-10 py-[7vh]"
      aria-label="The team on the road"
    >
      {/* Header row */}
      <div className="mx-auto grid grid-cols-1 gap-y-[1.5rem] lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-start lg:gap-x-[3rem]">
        <h2
          ref={headlineRef}
          className="heading-xl text-neutral-900 h-primary"
        >
          <span className="block overflow-hidden ">
            <span className="inline-block">THE TEAM ON</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">THE ROAD</span>
          </span>
        </h2>

        <p
          ref={introRef}
          className="ml-auto body-base text-neutral-600 lg:mt-[0.5rem] lg:max-w-[28rem]"
        >
          Every Discover Himalayas journey is supported by a close-knit team
          of guides, mechanics, coordinators and local experts who know
          these roads and landscapes intimately. Together, they ensure
          every journey is safe, seamless and deeply connected to the
          places we visit.
        </p>
      </div>

      {/* Team grid */}
      <div className="mx-auto mt-[3.5rem] grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.5rem] sm:grid-cols-2 lg:grid-cols-5">
        {TEAM.map((member, i) => (
          <div key={i} ref={(el) => (cardRefs.current[i] = el)}>
            <div className="overflow-hidden rounded-[0.375rem] bg-neutral-100">
              <img
                data-card-photo
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="aspect-square w-full object-cover"
              />
            </div>

            <p
              data-card-detail
              className="mt-[1rem] heading-sm text-neutral-900"
            >
              {member.name}
            </p>
            <p
              data-card-detail
              className="mt-[0.15rem] caption-text text-neutral-500"
            >
              {member.role}
            </p>
            <p
              data-card-detail
              className="mt-[0.6rem] body-sm text-neutral-600"
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        ref={footerRef}
        className="mx-auto mt-[3.5rem] flex flex-col items-center gap-y-[1.5rem] border-t border-neutral-200 pt-[1.75rem] text-center sm:flex-row sm:justify-between sm:gap-y-0 sm:text-left"
      >
        <p className="caption-text text-neutral-400">
          [ Est. 1994 ]
        </p>

        <p className="caption-text text-neutral-500 normal-case italic">
          "Every region has its own landscape, its own rhythm and its own
          stories."
        </p>

        <button
          ref={ctaRef}
          type="button"
          className="inline-flex items-center gap-[0.5rem] rounded-[0.25rem] bg-[#c1441f] px-[1.5rem] py-[0.50rem] btn-text text-white transition-colors duration-300 hover:bg-[#c1441f]/90"
        >
          Explore Journeys
          <svg
            viewBox="0 0 24 24"
            className="h-[0.9rem] w-[0.9rem] fill-none stroke-white stroke-[2.5]"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}