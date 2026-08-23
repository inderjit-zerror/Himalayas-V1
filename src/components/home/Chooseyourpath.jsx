"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronRight, ChevronDown } from "lucide-react";
import BTNA from "../common/BTNA";
import BTNB from "../common/BTNB";
import Link from "next/link";

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
          className="relative mt-8 flex flex-col gap-4  sm:flex-row sm:flex-wrap sm: justify-between w-full sm:py-8 "
        >
          
          <Link href="/journeys">
            <BTNA txt={'EXPLORE JOURNEYS'} />
          </Link>

          <Link href="/faqs">
            <BTNB txt={'CUSTOMISE JOURNEYS'} />
          </Link>

          <Link href="/journal">
            <BTNB txt={'READ JOURNALS'} />
          </Link>
           

            
          

         
        </div>
      </div>
    </section>
  );
}