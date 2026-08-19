"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronRight, ChevronDown } from "lucide-react";

const HIMALAYAN_JOURNEYS = [
  { label: "Ladakh", href: "/journeys/ladakh" },
  { label: "Zanskar", href: "/journeys/zanskar" },
  { label: "Spiti & Kinnaur", href: "/journeys/spiti-kinnaur" },
  { label: "Nepal", href: "/journeys/nepal" },
  { label: "Bhutan", href: "/journeys/bhutan" },
];

const BEYOND_HIMALAYAS = [
  { label: "Rajasthan", href: "/journeys/rajasthan" },
  { label: "Western Ghats", href: "/journeys/western-ghats" },
  { label: "Konkan to Kanyakumari", href: "/journeys/konkan-to-kanyakumari" },
];

export default function ChooseYourPath() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBeyond, setShowBeyond] = useState(false);

  const panelRef = useRef(null);
  const beyondPanelRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) {
      gsap.set(panelRef.current, { display: "block" });
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    } else {
      gsap.to(panelRef.current, {
        autoAlpha: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          if (panelRef.current) gsap.set(panelRef.current, { display: "none" });
        },
      });
      setShowBeyond(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!beyondPanelRef.current) return;
    if (showBeyond) {
      gsap.set(beyondPanelRef.current, { display: "block" });
      gsap.fromTo(
        beyondPanelRef.current,
        { autoAlpha: 0, x: 16 },
        { autoAlpha: 1, x: 0, duration: 0.3, ease: "power3.out" }
      );
    } else if (beyondPanelRef.current) {
      gsap.to(beyondPanelRef.current, {
        autoAlpha: 0,
        x: 16,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (beyondPanelRef.current) gsap.set(beyondPanelRef.current, { display: "none" });
        },
      });
    }
  }, [showBeyond]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="bg-white px-4 border-t border-[#292929]/40 py-10 sm:py-14 md:px-16 lg:px-20">
      <div className="mx-auto w-full">
        <h4 className="heading-lg h-secondary text-neutral-900 uppercase">
          CHOOSE YOUR PATH
        </h4>
        <p className="mt-3 max-w-xl">
          Whether you&apos;re joining a scheduled expedition or planning a
          tailor-made adventure, we&apos;ll help you choose the right route,
          season and experience.
        </p>

        <div
          ref={wrapperRef}
          className="relative mt-8 flex flex-col gap-4  sm:flex-row sm:flex-wrap sm: justify-between w-full"
        >
          <div className="relative w-full sm:w-auto z-40">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-8 border border-[#e0574a] px-6 py-4 btn-text text-[#e0574a] transition-colors hover:bg-[#e0574a] hover:text-white"
            >
              EXPLORE JOURNEYS
              <ChevronRight size={16} strokeWidth={2.5} />
            </button>

            <div
              ref={panelRef}
              className="absolute left-0 top-[105%] z-30 hidden w-full min-w-[280px] border border-neutral-200 bg-white shadow-xl sm:w-72"
              style={{ visibility: "hidden" }}
            >
              <button
                type="button"
                onClick={() => setShowBeyond(false)}
                className="flex w-full items-center justify-between bg-neutral-900 px-20 py-4 btn-text text-white"
              >
                HIMALAYAN JOURNEYS
                <ChevronDown size={16} strokeWidth={2.5} />
              </button>
              <ul className="px-20 py-4">
                {HIMALAYAN_JOURNEYS.map((item) => (
                  <li key={item.label} className="py-1.5">
                    <a
                      href={item.href}
                      className="flex items-center gap-2 btn-text text-neutral-700 hover:text-[#e0574a]"
                    >
                      <span className="text-[10px] text-neutral-400">&#8226;</span>
                      {item.label.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setShowBeyond((v) => !v)}
                className="flex w-full items-center justify-between border-t border-neutral-200 px-20 py-4 btn-text text-neutral-800 hover:bg-neutral-50"
              >
                BEYOND HIMALAYAS
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
              <div
                ref={beyondPanelRef}
                className="hidden border-t border-neutral-200 bg-white px-20 py-4"
                style={{ visibility: "hidden" }}
              >
                <ul>
                  {BEYOND_HIMALAYAS.map((item) => (
                    <li key={item.label} className="py-1.5">
                      <a
                        href={item.href}
                        className="flex items-center gap-2 btn-text text-neutral-700 hover:text-[#e0574a]"
                      >
                        <span className="text-[10px] text-neutral-400">&#8226;</span>
                        {item.label.toUpperCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex max-sm:w-full items-center justify-between gap-8 border border-neutral-300 px-6 py-4 btn-text text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900 w-fit"
          >
            CUSTOMISE JOURNEYS
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            className="flex max-sm:w-full items-center justify-between gap-8 bg-neutral-900 px-6 py-4 btn-text text-white transition-colors hover:bg-neutral-700 w-fit"
          >
            READ JOURNAL
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}