"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTNA from "../common/BTNA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM = [
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "/pic/r1.png",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "/pic/r2.png",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "/pic/r3.png",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "/pic/r1.png",
  },
  {
    name: "Tenzin Gyatso",
    role: "Lead Trekking Specialist",
    bio: "22 years scaling Kashmir & Himachal ranges. Certified Wilderness First Responder.",
    image: "/pic/r4.png",
  },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const introRef = useRef(null);
  const cardRefs = useRef([]);
  const footerRef = useRef(null);

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

          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
              delay: i * 0.08,
            })
            .from(card, {
              y: "2rem",
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
            })
            .from(
              photo,
              { scale: 1.18, duration: 0.9, ease: "power2.out" },
              "<"
            )
            .from(
              details,
              {
                y: "0.75rem",
                opacity: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: "power2.out",
              },
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
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full border-t border-neutral-200 bg-white px-5 sm:px-20 py-[7vh]"
      aria-label="The team on the road"
    >
      {/* Header row */}
      <div className="mx-auto grid grid-cols-1 gap-y-[1.5rem] lg:grid-cols-2 lg:items-start lg:gap-x-[3rem]">
        <h2
          ref={headlineRef}
          className="w-fit flex flex-col text-neutral-900 h-primary"
        >
          <span className="block overflow-hidden">
            <span className="inline-block">THE TEAM ON</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block">THE ROAD</span>
          </span>
        </h2>

        <p ref={introRef} className="ml-auto lg:mt-[0.5rem] lg:max-w-[50vw]">
          Every Discover Himalayas journey is supported by a close-knit team of
          guides, mechanics, coordinators and local experts who know these roads
          and landscapes intimately. Together, they ensure every journey is
          safe, seamless and deeply connected to the places we visit.
        </p>
      </div>

      {/* Team grid */}
      <div className="mx-auto mt-[3.5rem] grid grid-cols-1 sm:gap-20 gap-x-[1.5rem] gap-y-[2.5rem] sm:grid-cols-2 lg:grid-cols-5">
        {TEAM.map((member, i) => (
          <div key={i} ref={(el) => (cardRefs.current[i] = el)}>
            <div className="overflow-hidden bg-neutral-100">
              <img
                data-card-photo
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="aspect-square w-full object-cover"
              />
            </div>

            <h5 data-card-detail className="mt-[1rem] text-neutral-900">
              {member.name}
            </h5>
            <p
              data-card-detail
              className="mt-[0.25rem] text-[0.9rem]! leading-[1.1rem]! text-[#202020]!"
            >
              {member.role}
            </p>
            <p
              data-card-detail
              className="mt-[0.6rem] text-[0.9rem]! leading-[1.1rem]! text-[#202020]!"
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        ref={footerRef}
        className="mx-auto sm:mt-[3.5rem] flex flex-col items-center gap-y-[1.5rem] sm:border-t sm:border-neutral-200 pt-[1.75rem] text-center sm:flex-row sm:justify-between sm:gap-y-0 sm:text-left"
      >
        <p className="max-sm:mr-auto">[ Est. 1994 ]</p>
        <p className="max-sm:text-start">
          "Every region has its own landscape, its own rhythm and its own
          stories."
        </p>
        {/* Wrapped in a transition div to handle hover smoothly without manual addEventListener refs */}
        <div className="transition-transform max-sm:w-full duration-300 ease-out hover:scale-[1.04]">
          <BTNA txt={"Explore Journeys"} />
        </div>
      </div>
    </section>
  );
}