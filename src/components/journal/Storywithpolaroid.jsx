// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /**
//  * ------------------------------------------------------------------
//  *  CONTENT
//  * ------------------------------------------------------------------
//  */
// const PARAGRAPHS = [
//   {
//     lead: "The Road Changes Every Year.",
//     rest: "The Road Changes Every Year. People often imagine Himalayan roads as fixed lines on a map, but they are constantly changing. A landslide reshapes a bend, a new bridge replaces an old river crossing, and a remote village becomes connected by road for the first time. The seasons transform familiar landscapes, weather rewrites the conditions of every pass, and roads that seemed effortless one year can demand patience and respect the next.",
//   },
//   {
//     lead: null,
//     rest: "That's why I never feel like I'm riding the same journey twice. The route may be familiar, but the experience never is. The mountains have their own rhythm, and over the years I've learned that the best journeys come from travelling with that rhythm rather than trying to control it.",
//   },
//   {
//     lead: null,
//     rest: "People often ask if I ever get tired of returning to Ladakh. The truth is, I return because it continues to surprise me. Every season reveals something different, every journey introduces me to new people, and every road reminds me that exploration isn't about finding somewhere new—it's about seeing familiar places with fresh eyes.",
//   },
// ];

// const PHOTO_SRC = "https://images.unsplash.com/photo-1632050592122-6b730e1ac63f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
// const PHOTO_ALT = "Kettles brewing tea on a roadside stove";

// export default function StoryWithPolaroid() {
//   const sectionRef = useRef(null);
//   const polaroidRef = useRef(null);
//   const tapeLeftRef = useRef(null);
//   const tapeRightRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const scrollTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           once: true,
//         },
//       });

//       scrollTl
//         .fromTo(
//           ".story-paragraph",
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out" }
//         )
//         .fromTo(
//           polaroidRef.current,
//           { y: 40, opacity: 0, rotate: -12, scale: 0.94 },
//           {
//             y: 0,
//             opacity: 1,
//             rotate: -3,
//             scale: 1,
//             duration: 0.8,
//             ease: "power3.out",
//           },
//           "-=0.4"
//         )
//         .fromTo(
//           [tapeLeftRef.current, tapeRightRef.current],
//           { y: -24, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: "power2.out" },
//           "-=0.35"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   // Subtle hover "lift and straighten" interaction on the polaroid.
//   const handleEnter = () => {
//     gsap.to(polaroidRef.current, {
//       rotate: 0,
//       scale: 1.03,
//       boxShadow: "0 30px 50px -12px rgba(0,0,0,0.35)",
//       duration: 0.45,
//       ease: "power2.out",
//     });
//   };

//   const handleLeave = () => {
//     gsap.to(polaroidRef.current, {
//       rotate: -3,
//       scale: 1,
//       boxShadow: "0 20px 35px -15px rgba(0,0,0,0.3)",
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="mx-auto grid  grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-20 md:py-28 overflow-x-hidden  relative"
//     >

//       <div className="absolute top-0 w-full h-full left-0 z-[-1] overflow-hidden">
//       <img src="/img/BBG2.png" alt="IMG" className="w-full h-full " />
//       </div>

//       {/* ---------------------------------------------------------- */}
//       {/* LEFT: body copy                                             */}
//       {/* ---------------------------------------------------------- */}
//       <div className="space-y-6 text-[15px] leading-relaxed  sm:text-base max-sm:text-black!">
//         {PARAGRAPHS.map((p, i) => (
//           <p key={i} className="max-sm:text-black!">
//             {p.lead && (
//               <span className="mb-5 font-bold!  max-sm:text-black!">
//                 {p.lead}
//               </span>
//             )}
//             {p.rest}
//           </p>
//         ))}
//       </div>

//       {/* ---------------------------------------------------------- */}
//       {/* RIGHT: taped polaroid photo                                 */}
//       {/* ---------------------------------------------------------- */}
//       <div className="relative flex  sm:h-[50vh]  items-start justify-center md:justify-end">
//         <div className=" h-full rotate-8 ">
//           <img src="/img/BGCO.png" alt="IMG" className="w-full h-full object-cover object-center" />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ------------------------------------------------------------------
 *  CONTENT
 * ------------------------------------------------------------------
 */
const PARAGRAPHS = [
  {
    lead: "The Road Changes Every Year.",
    rest: "The Road Changes Every Year. People often imagine Himalayan roads as fixed lines on a map, but they are constantly changing. A landslide reshapes a bend, a new bridge replaces an old river crossing, and a remote village becomes connected by road for the first time. The seasons transform familiar landscapes, weather rewrites the conditions of every pass, and roads that seemed effortless one year can demand patience and respect the next.",
  },
  {
    lead: null,
    rest: "That's why I never feel like I'm riding the same journey twice. The route may be familiar, but the experience never is. The mountains have their own rhythm, and over the years I've learned that the best journeys come from travelling with that rhythm rather than trying to control it.",
  },
  {
    lead: null,
    rest: "People often ask if I ever get tired of returning to Ladakh. The truth is, I return because it continues to surprise me. Every season reveals something different, every journey introduces me to new people, and every road reminds me that exploration isn't about finding somewhere new—it's about seeing familiar places with fresh eyes.",
  },
];

const PHOTO_SRC =
  "https://images.unsplash.com/photo-1632050592122-6b730e1ac63f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const PHOTO_ALT = "Kettles brewing tea on a roadside stove";

export default function StoryWithPolaroid() {
  const sectionRef = useRef(null);
  const polaroidRef = useRef(null);
  const tapeLeftRef = useRef(null);
  const tapeRightRef = useRef(null);

  useEffect(() => {
    // Guard: don't run GSAP against a null context root.
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const paragraphs = gsap.utils.toArray(".story-paragraph");
      const polaroid = polaroidRef.current;
      const tapes = [tapeLeftRef.current, tapeRightRef.current].filter(Boolean);

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      if (paragraphs.length) {
        scrollTl.fromTo(
          paragraphs,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out" }
        );
      }

      if (polaroid) {
        scrollTl.fromTo(
          polaroid,
          { y: 40, opacity: 0, rotate: -12, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            rotate: -3,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      if (tapes.length) {
        scrollTl.fromTo(
          tapes,
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: "power2.out" },
          "-=0.35"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Subtle hover "lift and straighten" interaction on the polaroid.
  const handleEnter = () => {
    if (!polaroidRef.current) return;
    gsap.to(polaroidRef.current, {
      rotate: 0,
      scale: 1.03,
      boxShadow: "0 30px 50px -12px rgba(0,0,0,0.35)",
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!polaroidRef.current) return;
    gsap.to(polaroidRef.current, {
      rotate: -3,
      scale: 1,
      boxShadow: "0 20px 35px -15px rgba(0,0,0,0.3)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="mx-auto grid grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-20 md:py-28 overflow-x-hidden relative"
    >
      <div className="absolute top-0 w-full h-full left-0 z-[-1] overflow-hidden">
        <img src="/img/BBG2.png" alt="IMG" className="w-full h-full" />
      </div>

      {/* ---------------------------------------------------------- */}
      {/* LEFT: body copy                                             */}
      {/* ---------------------------------------------------------- */}
      <div className="space-y-6 text-[15px] leading-relaxed sm:text-base max-sm:text-black!">
        {PARAGRAPHS.map((p, i) => (
          <p key={i} className="story-paragraph max-sm:text-black!">
            {p.lead && (
              <span className="mb-5 font-bold! max-sm:text-black!">
                {p.lead}
              </span>
            )}
            {p.rest}
          </p>
        ))}
      </div>

      {/* ---------------------------------------------------------- */}
      {/* RIGHT: taped polaroid photo                                 */}
      {/* ---------------------------------------------------------- */}
      <div className="relative flex sm:h-[50vh] items-start justify-center md:justify-end">
        <div
          ref={polaroidRef}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="relative h-full rotate-[-3deg] shadow-[0_20px_35px_-15px_rgba(0,0,0,0.3)] bg-white p-2"
        >
          {/* Tape pieces */}
          <span
            ref={tapeLeftRef}
            className="absolute -top-3 left-4 h-6 w-14 -rotate-12 bg-white/70 shadow-sm"
          />
          <span
            ref={tapeRightRef}
            className="absolute -top-3 right-4 h-6 w-14 rotate-12 bg-white/70 shadow-sm"
          />

          <img
            src={PHOTO_SRC}
            alt={PHOTO_ALT}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}