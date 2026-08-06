// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /**
//  * Replace these with your own images (5 recommended — one per
//  * "stack" step). They render in this order, bottom of the array
//  * on top at the end of the scroll.
//  */
// const IMAGES = [
//   "https://images.unsplash.com/photo-1637009800201-101d788999eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1766852254215-ec02eeec50fa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1758468205216-ca17e22848bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
//   "https://images.unsplash.com/photo-1630693145761-2d357b684fda?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1780584523955-ced3f93e573b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// export default function CuratedItineraries() {
//   const wrapperRef = useRef(null); // tall scroll-distance container
//   const stickyRef = useRef(null); // pinned viewport-height inner container
//   const imageRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const images = imageRefs.current.filter(Boolean);

//       // Start every image below the frame, stacked in DOM order.
//       gsap.set(images, { yPercent: 100 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1,
//           // pin: true, // optional — CSS `sticky` on stickyRef already
//           //             handles the pin; enable this instead if you'd
//           //             rather let GSAP own the pinning.
//         },
//       });

//       // Bring each image up into place, one after another.
//       images.forEach((img, i) => {
//         tl.to(
//           img,
//           {
//             yPercent: 0,
//             ease: "none",
//             duration: 1,
//           },
//           i // each image gets its own equal slice of the scroll timeline
//         );
//       });

//       // Subtle fade-in for the left copy as the section arrives.
//       gsap.from(".ci-eyebrow, .ci-heading, .ci-copy, .ci-cta", {
//         opacity: 0,
//         y: 24,
//         duration: 0.9,
//         stagger: 0.08,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top 70%",
//           toggleActions: "play none none none",
//         },
//       });
//     }, wrapperRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     // Height controls how long the stack effect takes to play out —
//     // roughly 100vh per image works well. Tune to taste.
//     <div ref={wrapperRef} className="relative h-[500vh] bg-white">
//       <div
//         ref={stickyRef}
//         className="sticky top-0 flex h-screen w-full items-center overflow-hidden px-6 sm:px-10 lg:px-10"
//       >
//         <div className="mx-auto grid w-full  grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
//           {/* Left: copy */}
//           <div className="col-span-12 lg:col-span-5">
//             <p className="ci-eyebrow mb-6 text-xs font-medium tracking-[0.2em] text-neutral-400">
//               [ DESTINATIONS ]
//             </p>

//             <h2 className="ci-heading mb-8 font-sans text-[52px] font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-900 sm:text-[64px] lg:text-[56px] xl:text-[64px]">
//               Curated
//               <br />
//               itineraries
//             </h2>

//             <p className="ci-copy mb-10 max-w-md text-[15px] text-justify leading-relaxed text-neutral-500 sm:text-base">
//               From the high-altitude deserts of Ladakh and the timeless
//               villages of Spiti to the mountain kingdoms of Nepal and
//               Bhutan, the dawn-lit landscapes of Arunachal Pradesh, the
//               living heritage of Rajasthan, the backwaters of Kerala and
//               the tropical shores of Goa, each region offers a distinct
//               way of experiencing this remarkable part of the world. By
//               returning to these places year after year, we&apos;ve
//               refined every journey through experience.
//             </p>

//             <div className="ci-cta flex items-center gap-4">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   className="h-4 w-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 5v14m0 0l-6-6m6 6l6-6"
//                   />
//                 </svg>
//               </span>
//               <span className="text-xs font-semibold tracking-[0.15em] text-neutral-700">
//                 EXPLORE JOURNEYS
//               </span>
//             </div>
//           </div>

//           {/* Right: stacking image frame */}
//           <div className="col-span-12 lg:col-span-7 px-40 h-full ">
//             <div className="relative h-full w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[4/5]">
//               {IMAGES.map((src, i) => (
//                 <div
//                   key={src}
//                   ref={(el) => (imageRefs.current[i] = el)}
//                   className="absolute inset-0"
//                   style={{ zIndex: i + 1 }}
//                 >
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img
//                     src={src}
//                     alt=""
//                     className="h-full w-full object-cover"
//                     draggable={false}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = [
  "https://images.unsplash.com/photo-1637009800201-101d788999eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1766852254215-ec02eeec50fa?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1758468205216-ca17e22848bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1630693145761-2d357b684fda?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1780584523955-ced3f93e573b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function CuratedItineraries() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = imageRefs.current.filter(Boolean);
      gsap.set(images, { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      images.forEach((img, i) => {
        tl.to(
          img,
          {
            yPercent: 0,
            ease: "none",
            duration: 1,
          },
          i
        );
      });

      gsap.from(".ci-eyebrow, .ci-heading, .ci-copy, .ci-cta", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[500vh] bg-white">
      <div
        ref={stickyRef}
        className="sticky top-0 flex min-h-[100dvh] w-full items-center overflow-hidden px-4 py-20 sm:px-10 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="ci-eyebrow eyebrow-text mb-4 text-neutral-400 lg:mb-6">
              [ DESTINATIONS ]
            </p>

            <h2 className="ci-heading h-primary heading-xl mb-6 text-neutral-900 lg:mb-8">
              Curated
              <br />
              itineraries
            </h2>

            <p className="ci-copy body-base mb-8 max-w-md text-neutral-500 lg:mb-10">
              From the high-altitude deserts of Ladakh and the timeless
              villages of Spiti to the mountain kingdoms of Nepal and
              Bhutan, the dawn-lit landscapes of Arunachal Pradesh, the
              living heritage of Rajasthan, the backwaters of Kerala and
              the tropical shores of Goa, each region offers a distinct
              way of experiencing this remarkable part of the world. By
              returning to these places year after year, we&apos;ve
              refined every journey through experience.
            </p>

            <div className="ci-cta flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </span>
              <span className="btn-text text-neutral-700">
                EXPLORE JOURNEYS
              </span>
            </div>
          </div>

          <div className="col-span-12 h-[45vh] w-full lg:col-span-7 lg:h-[75vh] xl:px-20">
            <div className="relative h-full w-full overflow-hidden rounded-sm lg:aspect-[4/5]">
              {IMAGES.map((src, i) => (
                <div
                  key={src}
                  ref={(el) => (imageRefs.current[i] = el)}
                  className="absolute inset-0"
                  style={{ zIndex: i + 1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}