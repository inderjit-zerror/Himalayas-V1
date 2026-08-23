"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnershipsSection() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRefs = useRef([]);
  const polaroidRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(eyebrowRef.current, {
          yPercent: 60,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        })
          .from(
            headlineRef.current.children,
            { yPercent: 110, duration: 0.8, stagger: 0.12, ease: "power3.out" },
            "<0.05"
          )
          .from(
            paraRefs.current,
            { y: "1.5rem", opacity: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" },
            "<0.2"
          )
          .fromTo(
            polaroidRef.current,
            { rotate: 0, scale: 0.85, opacity: 0, y: "3rem" },
            {
              rotate: 4,
              scale: 1,
              opacity: 1,
              y: "0rem",
              duration: 1,
              ease: "back.out(1.6)",
            },
            "<0.1"
          );

        const el = polaroidRef.current;
        const onEnter = () =>
          gsap.to(el, { rotate: 0, scale: 1.03, duration: 0.4, ease: "power2.out" });
        const onLeave = () =>
          gsap.to(el, { rotate: 4, scale: 1, duration: 0.5, ease: "power2.out" });

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-5 sm:px-20 py-[8vh] overflow-x-hidden"
      aria-label="Partnerships"
    >
      <div className="mx-auto  grid  grid-cols-1 items-center gap-y-[3rem] lg:grid-cols-2 lg:gap-x-[4rem]">
        {/* Text column */}
        <div className="max-w-[30rem]">
          <div className="overflow-hidden">
            <p
              ref={eyebrowRef}
              className="eyebrow-text text-neutral-500"
            >
              // Partnerships
            </p>
          </div>

          <h2
            ref={headlineRef}
            className="mt-[1rem] heading-xl  "
          >
            <span className="block overflow-hidden ">
              <span className="inline-block">BUILT ON</span>
              <span className="inline-block sm:hidden ml-2"> LASTING</span>
              
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block max-sm:hidden">LASTING</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block">FRIENDSHIPS</span>
            </span>
          </h2>

          <p
            ref={(el) => (paraRefs.current[0] = el)}
            className="mt-[1.75rem] body-base "
          >
            Over the years, Discover Himalayas has grown through enduring
            friendships with travellers, local communities and collaborators
            who share a deep respect for authentic travel. Among them is
            long-time friend and collaborator Uwe Balser, whose enduring
            association has helped introduce generations of European
            travellers to the Himalayas.
          </p>

          <p
            ref={(el) => (paraRefs.current[1] = el)}
            className="mt-[1.25rem] body-base "
          >
            These relationships continue to shape the way we travel
            today—opening doors, creating trust and reminding us that the
            most memorable journeys are always shared.
          </p>
        </div>

        {/* Polaroid photo column */}
        <div className="flex justify-center lg:justify-end pr-[5vw]">
          <div
            ref={polaroidRef}
            className="inline-block w-[min(26rem,80vw)] rounded-[0.125rem] bg-[#fbfaf7] p-[0.75rem] pb-[2.5rem] shadow-[0_0.25rem_0.75rem_rgba(0,0,0,0.12),0_1.5rem_3rem_rgba(0,0,0,0.14)]"
          >
            {/*
              Replace with your own asset, e.g.
              /images/uwe-balser-nakeela.jpg — placed in /public/images
            */}
            <img
              src="/img/19.jpg"
              alt="Uwe Balser standing beside the Himank Nakeela pass marker at 15,547 ft"
              className="block aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}