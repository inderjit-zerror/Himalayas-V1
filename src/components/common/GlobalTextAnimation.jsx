"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalTextAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable heading text animations on mobile devices
    if (window.innerWidth < 768) return;

    // A small delay to ensure DOM is fully painted
    const timeout = setTimeout(() => {
      // Select all heading tags
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

      headings.forEach((heading) => {
        // Prevent re-splitting
        if (heading.classList.contains("split-animated")) return;
        heading.classList.add("split-animated");

        // Split text by words
        const text = new SplitType(heading, { types: "words" });

        // Set initial state
        gsap.set(text.words, {
          yPercent: 100,
          opacity: 0,
        });

        // Add overflow hidden to the heading or word wrappers to create a reveal effect
        // We can wrap words or just use y/opacity. Let's do a simple y+opacity reveal.

        // Animate on scroll
        gsap.to(text.words, {
          scrollTrigger: {
            trigger: heading,
            start: "top 90%", // Trigger animation when top of heading hits 90% of viewport
            toggleActions: "play none none none",
          },
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
