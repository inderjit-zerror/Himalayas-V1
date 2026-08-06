// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ChevronRight, ChevronDown } from "lucide-react";

// /**
//  * "Choose Your Path" action bar + mega dropdown.
//  *
//  * - Explore Journeys  -> opens the Himalayan Journeys mega menu (GSAP animated)
//  * - Customise Journeys -> plain CTA (wire up to your route)
//  * - Read Journal       -> plain CTA (wire up to your route)
//  */

// const HIMALAYAN_JOURNEYS = [
//   { label: "Ladakh", href: "/journeys/ladakh" },
//   { label: "Zanskar", href: "/journeys/zanskar" },
//   { label: "Spiti & Kinnaur", href: "/journeys/spiti-kinnaur" },
//   { label: "Nepal", href: "/journeys/nepal" },
//   { label: "Bhutan", href: "/journeys/bhutan" },
// ];

// const BEYOND_HIMALAYAS = [
//   { label: "Rajasthan", href: "/journeys/rajasthan" },
//   { label: "Western Ghats", href: "/journeys/western-ghats" },
//   { label: "Konkan to Kanyakumari", href: "/journeys/konkan-to-kanyakumari" },
// ];

// export default function ChooseYourPath() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showBeyond, setShowBeyond] = useState(false);

//   const panelRef = useRef(null);
//   const beyondPanelRef = useRef(null);
//   const wrapperRef = useRef(null);

//   // Open / close the main mega menu
//   useEffect(() => {
//     if (!panelRef.current) return;

//     if (isOpen) {
//       gsap.set(panelRef.current, { display: "block" });
//       gsap.fromTo(
//         panelRef.current,
//         { autoAlpha: 0, y: -12 },
//         { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }
//       );
//     } else {
//       gsap.to(panelRef.current, {
//         autoAlpha: 0,
//         y: -12,
//         duration: 0.25,
//         ease: "power2.in",
//         onComplete: () => {
//           if (panelRef.current) gsap.set(panelRef.current, { display: "none" });
//         },
//       });
//       setShowBeyond(false);
//     }
//   }, [isOpen]);

//   // Slide-over "Beyond Himalayas" sub-panel
//   useEffect(() => {
//     if (!beyondPanelRef.current) return;

//     if (showBeyond) {
//       gsap.set(beyondPanelRef.current, { display: "block" });
//       gsap.fromTo(
//         beyondPanelRef.current,
//         { autoAlpha: 0, x: 16 },
//         { autoAlpha: 1, x: 0, duration: 0.3, ease: "power3.out" }
//       );
//     } else if (beyondPanelRef.current) {
//       gsap.to(beyondPanelRef.current, {
//         autoAlpha: 0,
//         x: 16,
//         duration: 0.2,
//         ease: "power2.in",
//         onComplete: () => {
//           if (beyondPanelRef.current) gsap.set(beyondPanelRef.current, { display: "none" });
//         },
//       });
//     }
//   }, [showBeyond]);

//   // Close on outside click
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <section className="bg-white px-6 border-t border-[#292929]/40 py-14 md:px-16 lg:px-10">
//       <div className="mx-auto ">
//         {/* Heading */}
//         <h2 className="text-xl font-bold tracking-wide text-neutral-900 md:text-2xl">
//           CHOOSE YOUR PATH
//         </h2>
//         <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
//           Whether you&apos;re joining a scheduled expedition or planning a
//           tailor-made adventure, we&apos;ll help you choose the right route,
//           season and experience.
//         </p>

//         {/* Action row */}
//         <div
//           ref={wrapperRef}
//           className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start"
//         >
//           {/* Explore Journeys (opens mega menu) */}
//           <div className="relative w-full sm:w-auto">
//             <button
//               type="button"
//               onClick={() => setIsOpen((v) => !v)}
//               aria-expanded={isOpen}
//               className="flex w-full items-center justify-between gap-8 border border-[#e0574a] px-6 py-4 text-xs font-semibold tracking-wider text-[#e0574a] transition-colors hover:bg-[#e0574a] hover:text-white sm:w-56"
//             >
//               EXPLORE JOURNEYS
//               <ChevronRight size={16} strokeWidth={2.5} />
//             </button>

//             {/* Mega dropdown panel */}
//             <div
//               ref={panelRef}
//               className="absolute left-0 top-full z-30 hidden w-full min-w-[280px] border border-neutral-200 bg-white shadow-xl sm:w-72"
//               style={{ visibility: "hidden" }}
//             >
//               {/* Panel header */}
//               <button
//                 type="button"
//                 onClick={() => setShowBeyond(false)}
//                 className="flex w-full items-center justify-between bg-neutral-900 px-5 py-4 text-xs font-semibold tracking-wider text-white"
//               >
//                 HIMALAYAN JOURNEYS
//                 <ChevronDown size={16} strokeWidth={2.5} />
//               </button>

//               {/* Journey list */}
//               <ul className="px-5 py-4">
//                 {HIMALAYAN_JOURNEYS.map((item) => (
//                   <li key={item.label} className="py-1.5">
//                     <a
//                       href={item.href}
//                       className="flex items-center gap-2 text-[13px] font-medium text-neutral-700 hover:text-[#e0574a]"
//                     >
//                       <span className="text-[10px] text-neutral-400">&#8226;</span>
//                       {item.label.toUpperCase()}
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               {/* Beyond Himalayas trigger */}
//               <button
//                 type="button"
//                 onClick={() => setShowBeyond((v) => !v)}
//                 className="flex w-full items-center justify-between border-t border-neutral-200 px-5 py-4 text-xs font-semibold tracking-wider text-neutral-800 hover:bg-neutral-50"
//               >
//                 BEYOND HIMALAYAS
//                 <ChevronRight size={16} strokeWidth={2.5} />
//               </button>

//               {/* Beyond Himalayas sub-panel */}
//               <div
//                 ref={beyondPanelRef}
//                 className="hidden border-t border-neutral-200 bg-white px-5 py-4"
//                 style={{ visibility: "hidden" }}
//               >
//                 <ul>
//                   {BEYOND_HIMALAYAS.map((item) => (
//                     <li key={item.label} className="py-1.5">
//                       <a
//                         href={item.href}
//                         className="flex items-center gap-2 text-[13px] font-medium text-neutral-700 hover:text-[#e0574a]"
//                       >
//                         <span className="text-[10px] text-neutral-400">&#8226;</span>
//                         {item.label.toUpperCase()}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Customise Journeys */}
//           <button
//             type="button"
//             className="flex w-full items-center justify-between gap-8 border border-neutral-300 px-6 py-4 text-xs font-semibold tracking-wider text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900 sm:w-56"
//           >
//             CUSTOMISE JOURNEYS
//             <ChevronRight size={16} strokeWidth={2.5} />
//           </button>

//           {/* Read Journal */}
//           <button
//             type="button"
//             className="ml-0 flex w-full items-center justify-between gap-8 bg-neutral-900 px-6 py-4 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-neutral-700 sm:ml-auto sm:w-56"
//           >
//             READ JOURNAL
//             <ChevronRight size={16} strokeWidth={2.5} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
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
    <section className="bg-white px-4 border-t border-[#292929]/40 py-10 sm:py-14 md:px-16 lg:px-10">
      <div className="mx-auto w-full">
        <h2 className="heading-lg  h-secondary text-neutral-900 uppercase">
          CHOOSE YOUR PATH
        </h2>
        <p className="mt-3 max-w-xl body-base text-neutral-600">
          Whether you&apos;re joining a scheduled expedition or planning a
          tailor-made adventure, we&apos;ll help you choose the right route,
          season and experience.
        </p>

        <div
          ref={wrapperRef}
          className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start w-full"
        >
          <div className="relative w-full sm:w-auto z-40">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-8 border border-[#e0574a] px-6 py-4 btn-text text-[#e0574a] transition-colors hover:bg-[#e0574a] hover:text-white sm:w-56"
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
                className="flex w-full items-center justify-between bg-neutral-900 px-5 py-4 btn-text text-white"
              >
                HIMALAYAN JOURNEYS
                <ChevronDown size={16} strokeWidth={2.5} />
              </button>
              <ul className="px-5 py-4">
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
                className="flex w-full items-center justify-between border-t border-neutral-200 px-5 py-4 btn-text text-neutral-800 hover:bg-neutral-50"
              >
                BEYOND HIMALAYAS
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
              <div
                ref={beyondPanelRef}
                className="hidden border-t border-neutral-200 bg-white px-5 py-4"
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
            className="flex w-full items-center justify-between gap-8 border border-neutral-300 px-6 py-4 btn-text text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900 sm:w-56"
          >
            CUSTOMISE JOURNEYS
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            className="ml-0 flex w-full items-center justify-between gap-8 bg-neutral-900 px-6 py-4 btn-text text-white transition-colors hover:bg-neutral-700 sm:ml-auto sm:w-56"
          >
            READ JOURNAL
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}