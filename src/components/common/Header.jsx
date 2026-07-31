"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "OUR STORY", href: "/our-story" },
  { label: "JOURNEYS", href: "/journeys" },
  { label: "DESTINATIONS", href: "/destinations" },
  { label: "FAQS", href: "/faqs" },
  { label: "JOURNAL", href: "/journal" },
];

export default function Header() {
  const navRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const bg = bgRef.current;

    // Starting state: transparent bg, sitting at its normal (taller) height,
    // background panel translated up and out of view.
    gsap.set(bg, { yPercent: -100 });
    gsap.set(nav, { paddingTop: "1.75rem", paddingBottom: "1.75rem" });

    // Scrub timeline tied to scroll position: as the user scrolls down from
    // the very top, the white panel slides down from behind the nav and the
    // nav itself compresses slightly (moves "down"/shrinks in height).
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "150 top", // fully "scrolled" state reached after 150px
        scrub: 0.4,
      },
    });

    tl.to(bg, { yPercent: 0, duration: 1, ease: "power2.out" }, 0).to(
      nav,
      {
        paddingTop: "0.85rem",
        paddingBottom: "0.85rem",
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    // Also toggle a class at a hard breakpoint for shadow / text color if needed.
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "150 top",
      onUpdate: (self) => {
        nav.dataset.scrolled = self.progress > 0.05 ? "true" : "false";
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      st.kill();
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={navRef}
      data-scrolled="false"
      className="fixed top-0 left-0 z-50 w-full px-6 md:px-10 transition-shadow duration-300 data-[scrolled=true]:shadow-sm"
    >
      {/* Sliding white background panel — sits behind the content, animated by GSAP */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
        aria-hidden="true"
      />

      <nav className="mx-auto flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src=""
            alt="Discover Himalayas"
            width={140}
            height={48}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-neutral-800">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-1 transition-colors hover:text-neutral-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu button */}
        <button
          type="button"
          className="flex items-center gap-2 text-[13px] font-semibold tracking-widest text-neutral-900"
          aria-label="Open menu"
        >
          MENU
        </button>
      </nav>
    </header>
  );
}