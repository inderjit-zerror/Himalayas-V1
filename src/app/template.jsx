"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial state
    gsap.set(containerRef.current, {
      opacity: 0,
      y: 20,
    });

    // Enter animation
    gsap.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen">
      {children}
    </div>
  );
}
