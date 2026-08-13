"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * ------------------------------------------------------------------
 *  MENU DATA
 * ------------------------------------------------------------------
 */
const MENU = [
  {
    label: "Vinod's Notebook",
    items: [
      { label: "Ladakh", href: "/ladakh" },
      { label: "Zanskar", href: "/" },
      { label: "Spiti & Kinnaur", href: "/" },
      { label: "Nepal", href: "/" },
      { label: "Bhutan", href: "/" },
    ],
  },
  {
    label: "Traveller Stories",
    items: [
      { label: "Solo Journeys", href: "/" },
      { label: "Group Expeditions", href: "/" },
      { label: "Rider Diaries", href: "/" },
      { label: "Reader Submissions", href: "/" },
    ],
  },
  {
    label: "Field Notes",
    items: [
      { label: "Gear Guide", href: "/" },
      { label: "Route Maps", href: "/" },
      { label: "Permits & Paperwork", href: "/" },
      { label: "Season Guide", href: "/" },
    ],
  },
  {
    label: "Photo Essays",
    items: [
      { label: "Mountain Passes", href: "/" },
      { label: "Monasteries", href: "/" },
      { label: "Desert Roads", href: "/" },
      { label: "Village Life", href: "/" },
    ],
  },
];

const CLOSE_DELAY = 150; // ms grace period before a dropdown closes

export default function HeroNavbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const chevronRefs = useRef([]);
  const closeTimer = useRef(null);

  // Sync GSAP animations declaratively whenever activeIndex changes
  useEffect(() => {
    MENU.forEach((_, i) => {
      const isOpen = activeIndex === i;
      const dropdown = dropdownRefs.current[i];
      const chevron = chevronRefs.current[i];

      if (!dropdown) return;
      const items = dropdown.querySelectorAll(".dropdown-item");

      // Interrupt any currently running animations on these elements
      gsap.killTweensOf([dropdown, items, chevron]);

      if (isOpen) {
        // --- OPEN ANIMATION ---
        gsap.to(dropdown, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          pointerEvents: "auto",
        });

        gsap.to(items, {
          autoAlpha: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.05,
        });

        if (chevron) {
          gsap.to(chevron, {
            rotate: 180,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        // --- CLOSE ANIMATION ---
        gsap.to(items, {
          autoAlpha: 0,
          y: -6,
          duration: 0.15,
          ease: "power2.in",
        });

        gsap.to(dropdown, {
          autoAlpha: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.in",
          pointerEvents: "none",
        });

        if (chevron) {
          gsap.to(chevron, {
            rotate: 0,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      }
    });
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimer.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveIndex(null);
    }, CLOSE_DELAY);
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* HERO BACKGROUND IMAGE */}
      <div className="w-full h-[80vh] absolute bottom-0 left-0 bg-amber-700 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1631276893368-554b60393efb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="IMG"
        />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-30 flex w-full flex-wrap justify-center text-sm font-medium tracking-wide sm:justify-center pt-[15vh]">
        {MENU.map((menu, i) => {
          const isActive = activeIndex === i;
          return (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Top-level trigger */}
              <button
                type="button"
                onFocus={() => handleMouseEnter(i)}
                onBlur={handleMouseLeave}
                className={`flex items-center ${i === 0 && "border-l"} gap-2 border-r border-t border-b border-black/20 px-6 uppercase transition-colors duration-200 ${
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "bg-white/95 text-neutral-800 hover:bg-neutral-900 hover:text-white"
                }`}
                aria-haspopup="true"
                aria-expanded={isActive}
              >
                <p className="py-2">{menu.label}</p>
                <svg
                  ref={(el) => (chevronRefs.current[i] = el)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 shrink-0"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                ref={(el) => (dropdownRefs.current[i] = el)}
                className="absolute left-0 top-full w-64 origin-top border border-t-0 border-white/20 bg-white/95 py-1 shadow-xl backdrop-blur-sm"
              >
                {menu.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="dropdown-item group flex items-center justify-between px-5 py-3 text-neutral-700 transition-colors duration-150 hover:bg-neutral-900 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
    </section>
  );
}