"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 1. IMPORT FROM REACT-ICONS INSTEAD OF LUCIDE
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FOOTER_COLUMNS = [
  {
    title: "Himalayan Journeys",
    links: ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"],
  },
  {
    title: "Beyond Himalayas",
    links: ["Rajasthan", "Western Ghats", "Konkan to Kanyakumari"],
  },
  {
    title: "Plan Your Journey",
    links: [
      "How It Works",
      "FAQs",
      "Visa Information",
      "Travel Insurance",
      "Health & Safety",
      "Packing Lists",
    ],
  },
];

const FLORUP = [
  {
    title: "Himalayan Journeys",
    links: ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"],
  },
];

// 2. UPDATE THE ARRAY TO USE THE NEW ICONS
const SOCIALS = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function SiteFooter() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-reveal",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative min-h-[80vh] overflow-hidden px-4 sm:px-6 flex flex-col justify-end pt-32 pb-10 text-white md:px-16 lg:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/img/15.jpg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full">
        {FLORUP.map((col) => (
          <div key={col.title} className="footer-reveal mb-10">
            <h5 className="mb-3 sm:mb-2 heading-sm font-semibold">{col.title}</h5>
            <ul className="space-y-2 sm:space-y-0">
              {col.links.map((link) => (
                <li key={link} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <a
                    href="#"
                    className="body-sm text-white/85 transition-colors hover:text-white py-1 sm:py-0"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="footer-reveal">
              <h5 className="mb-3 sm:mb-2 heading-sm font-semibold">{col.title}</h5>
              <ul className="space-y-2 sm:space-y-0">
                {col.links.map((link) => (
                  <li key={link} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <a
                      href="#"
                      className="body-sm text-white/85 transition-colors hover:text-white py-1 sm:py-0"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / social block */}
          <div className="footer-reveal sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-neutral-900"
                >
                  {/* 3. REMOVED strokeWidth AS REACT-ICONS (FA) DOESN'T NEED IT */}
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-6 sm:mt-0">
              <h5 className="heading-sm font-semibold leading-snug">
                Stay Connected with Discover Himalayas
              </h5>
              <p className="mt-3 body-sm leading-relaxed text-white!">
                Stories from across the Himalayas and the Indian subcontinent, new
                journeys and expedition updates&mdash;shared occasionally, never
                excessively.
              </p>
            </div>
          </div>
        </div> 

        <div className="footer-reveal mt-12 sm:mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/20 pt-6 caption-text text-white sm:flex-row sm:items-center">
          <p className="text-center sm:text-left w-full sm:w-auto text-white!">
            Privacy Policy | Terms | Copyright
          </p>
          <p className="text-center sm:text-left w-full sm:w-auto text-white!">
            Designed &amp; Developed by MAd Earth Designs
          </p>
        </div>
      </div>
    </footer>
  );
}