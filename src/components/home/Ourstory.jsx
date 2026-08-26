// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /**
//  * Stat config — edit values/labels here.
//  * `end`      : final numeric value to count up to
//  * `format`   : "number" (adds thousands separators) or "plain"
//  * `suffix`   : text appended after the number (e.g. "+")
//  */
// const STATS = [
//   { label: "Since", end: 1994, format: "plain", suffix: "", duration: 1.6 },
//   { label: "Travellers", end: 15000, format: "number", suffix: "+", duration: 2 },
//   { label: "Countries hosted", end: 40, format: "plain", suffix: "+", duration: 1.2 },
// ];

// export default function OurStory() {
//   const sectionRef = useRef(null);
//   const statRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Fade / rise entrance for the header block
//       gsap.from(".ost-eyebrow, .ost-heading, .ost-copy", {
//         opacity: 0,
//         y: 28,
//         duration: 0.9,
//         stagger: 0.08,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           toggleActions: "play none none none",
//         },
//       });

//       // Count-up animation for each stat, triggered on scroll into view
//       statRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const { end, format, suffix, duration } = STATS[i];
//         const counter = { val: 0 };

//         gsap.to(counter, {
//           val: end,
//           duration: duration || 1.8,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//             toggleActions: "play none none reverse",
//           },
//           onUpdate: () => {
//             const current = Math.round(counter.val);
//             const display =
//               format === "number"
//                 ? current.toLocaleString("en-US")
//                 : String(current);
//             el.textContent = display + suffix;
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white px-6 py-20 sm:px-20 lg:px-20 lg:pb-10 lg:pt-20 "
//     >
//       <div className="mx-auto ">
//         {/* Eyebrow */}
//         <p className="ost-eyebrow mb-6 text-xs font-medium tracking-[0.2em] text-neutral-400">
//           // Our Story
//         </p>

//         {/* Heading + copy row */}
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
//           <h2 className="ost-heading col-span-12   text-[52px] font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-900 sm:text-[64px] lg:col-span-7 lg:text-[72px]">
//             More than
//             <br />a journey
//           </h2>

//           <div className="ost-copy col-span-12 flex items-center lg:col-span-5">
//             <p className="text-[15px] leading-relaxed text-neutral-500 sm:text-base">
//               <span className="font-semibold text-neutral-900">
//                 For over three decades, we&apos;ve explored the Himalayas,
//                 returning season after season to the places, people and
//                 stories that continue to shape every journey we create,
//               </span>{" "}
//               sharing not only remarkable landscapes but the stories,
//               cultures and friendships that make these mountains
//               unforgettable. Before we introduced travellers to the
//               Himalayas, the Himalayas were already teaching us.
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-16 border-t border-neutral-200 lg:mt-20" />

//         {/* Stats row */}
//         <div className="grid grid-cols-1 divide-y divide-neutral-200 py-12 sm:grid-cols-3 sm:divide-y-0">
//           {STATS.map((stat, i) => (
//             <div
//               key={stat.label}
//               className={`flex flex-col items-center py-8 text-center sm:py-0 ${
//                 i !== 0 ? "sm:border-l sm:border-neutral-200" : ""
//               }`}
//             >
//               <span className="mb-4 text-xs font-semibold tracking-[0.15em] text-neutral-400">
//                 {stat.label.toUpperCase()}
//               </span>
//               <span
//                 ref={(el) => (statRefs.current[i] = el)}
//                 className="  text-5xl font-extrabold tabular-nums text-neutral-900 sm:text-6xl"
//               >
//                 0
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Divider */}
//         <div className="border-t border-neutral-200" />

//         {/* Bottom row */}
//         <div className="flex flex-col items-center justify-between gap-6 pt-10 sm:flex-row">
//           <p className="text-sm text-neutral-400">[ Est. 1994 ]</p>

//           <p className="text-center text-[13px] text-neutral-500 sm:text-sm">
//             &ldquo;The mountains were home before Discover Himalayas
//             existed&rdquo;{" "}
//             <span className="font-semibold italic text-neutral-800">
//               - Vinod
//             </span>
//           </p>

//           <button className="group flex items-center gap-2 bg-neutral-900 px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-neutral-800">
//             MEET THE TEAM
//             <span className="transition-transform group-hover:translate-x-1">
//               &rsaquo;
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BTNB from "../common/BTNB";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { label: "Since", end: 1994, format: "plain", suffix: "", duration: 1.6 },
  {
    label: "Travellers",
    end: 15000,
    format: "number",
    suffix: "+",
    duration: 2,
  },
  {
    label: "Countries hosted",
    end: 40,
    format: "plain",
    suffix: "+",
    duration: 1.2,
  },
];

export default function OurStory() {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ost-eyebrow, .ost-heading, .ost-copy", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      statRefs.current.forEach((el, i) => {
        if (!el) return;
        const { end, format, suffix, duration } = STATS[i];
        const counter = { val: 0 };

        gsap.to(counter, {
          val: end,
          duration: duration || 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            const current = Math.round(counter.val);
            const display =
              format === "number"
                ? current.toLocaleString("en-US")
                : String(current);
            el.textContent = display + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white h-fit px-4 py-16 sm:px-20 lg:px-20 lg:pb-10 lg:pt-20 overflow-x-hidden "
    >
      <div className="mx-auto w-full  sm:min-h-[90vh] flex flex-col justify-between ">
        <p className="ost-eyebrow eyebrow-text mb-6 max-sm:mb-2 text-neutral-400">
          // Our Story
        </p>

        <div className="flex justify-between items-start  max-sm:flex-col ">
          <h2 className="ost-heading max-w-xl  h-primary text-neutral-900  max-sm:mb-5">
            More than
            <br className="max-sm:hidden" /> a journey
          </h2>

          <div className="  sm:w-[44vw]  flex items-center ">
            <p className="">
              <span className="font-extrabold">
                For over three decades, we&apos;ve explored the Himalayas,
                returning season after season to the places, people and stories
                that continue to shape every journey we create,
              </span>
              sharing not only remarkable landscapes but the stories, cultures
              and friendships that make these mountains unforgettable. Before we
              introduced travellers to the Himalayas, the Himalayas were already
              teaching us.
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 border-t border-neutral-200 lg:mt-20" />

        <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:py-10 sm:py-12 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-8 text-center sm:py-0`}
            >
              <p className="mb-2 sm:mb-4  uppercase ">
                {stat.label.toUpperCase()}
              </p>
              <h2
                ref={(el) => (statRefs.current[i] = el)}
                className="h-primary tabular-nums text-neutral-900 max-sm:text-[3rem]!"
              >
                0
              </h2>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 " />

        <div className="flex flex-col items-center   justify-between  gap-6 pt-8 sm:pt-10 sm:flex-row">
          <p className="  max-sm:mr-auto ">[ Est. 1994 ]</p>

          <p className="text-cente sm:text-start p-small ">
            &ldquo;The mountains were home before Discover Himalayas
            existed&rdquo;{" "}
            <span className="font-semibold italic text-neutral-800">
              - Vinod
            </span>
          </p>

          <Link href="/our-story" className="max-sm:w-full">
         
            <BTNB txt={"MEET THE TEAM"} />
          </Link>
        </div>
      </div>
    </section>
  );
}
