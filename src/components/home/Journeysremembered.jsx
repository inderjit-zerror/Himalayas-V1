// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Replace these with your own hosted images/videos.
// const STORIES = [
//   {
//     id: 1,
//     title: "Deep Spiritual Belonging",
//     author: "Natsumi Satoru",
//     trip: "SLOW ESCAPE, 2025",
//     image:
//       "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "A Life-Altering Crossing",
//     author: "Marcus Vance",
//     trip: "SPITI EXPLORER, 2025",
//     image:
//       "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Deep Spiritual Belonging",
//     author: "Natsumi Satoru",
//     trip: "SLOW ESCAPE, 2025",
//     image:
//       "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     title: "A Life-Altering Crossing",
//     author: "Marcus Vance",
//     trip: "SPITI EXPLORER, 2025",
//     image:
//       "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     title: "Roads That Remember You",
//     author: "Priya Nair",
//     trip: "HIMALAYAN LOOP, 2024",
//     image:
//       "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     title: "Deep Spiritual Belonging",
//     author: "Natsumi Satoru",
//     trip: "SLOW ESCAPE, 2025",
//     image:
//       "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 7,
//     title: "A Life-Altering Crossing",
//     author: "Marcus Vance",
//     trip: "SPITI EXPLORER, 2025",
//     image:
//       "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1200&auto=format&fit=crop",
//   },
//   {
//     id: 8,
//     title: "Roads That Remember You",
//     author: "Priya Nair",
//     trip: "HIMALAYAN LOOP, 2024",
//     image:
//       "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export default function JourneysRemembered() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const trackRef = useRef(null);
//   const cardRefs = useRef([]);
//   const footerRef = useRef(null);

//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);

//   // Scroll-triggered entrance animation
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.set(headingRef.current, { y: 24, opacity: 0 });
//       gsap.set(cardRefs.current, { y: 40, opacity: 0 });
//       gsap.set(footerRef.current, { y: 16, opacity: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           once: true,
//         },
//       });

//       tl.to(headingRef.current, {
//         y: 0,
//         opacity: 1,
//         duration: 0.7,
//         ease: "power3.out",
//       })
//         .to(
//           cardRefs.current,
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.7,
//             ease: "power3.out",
//             stagger: 0.12,
//           },
//           "-=0.35"
//         )
//         .to(
//           footerRef.current,
//           { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
//           "-=0.3"
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const updateArrowState = () => {
//     const el = trackRef.current;
//     if (!el) return;
//     setCanScrollPrev(el.scrollLeft > 8);
//     setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
//   };

//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     updateArrowState();
//     el.addEventListener("scroll", updateArrowState, { passive: true });
//     window.addEventListener("resize", updateArrowState);
//     return () => {
//       el.removeEventListener("scroll", updateArrowState);
//       window.removeEventListener("resize", updateArrowState);
//     };
//   }, []);

//   const scrollByCard = (direction) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const card = el.querySelector("[data-card]");
//     const cardWidth = card ? card.getBoundingClientRect().width + 24 : 320;
//     gsap.to(el, {
//       scrollLeft: el.scrollLeft + direction * cardWidth,
//       duration: 0.5,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20"
//     >
//       {/* Eyebrow + heading */}
//       <div ref={headingRef} className="mb-10 max-w-3xl md:mb-14">
//         <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
//           // Journeys Remembered
//         </p>
//         <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
//           <span className="font-semibold text-neutral-900">
//             Every traveller returns with a different story.
//           </span>{" "}
//           Some remember the challenge of a high mountain pass. Others
//           remember a conversation, a remote village, a sunrise over the
//           peaks, or a shared meal around a table. Read the stories that
//           continue long after the roads.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative">
//         <div
//           ref={trackRef}
//           className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//         >
//           {STORIES.map((story, i) => (
//             <article
//               key={story.id}
//               data-card
//               ref={(el) => (cardRefs.current[i] = el)}
//               className="group w-[78%] flex-none snap-start sm:w-[48%] lg:w-[23%]"
//             >
//               <button
//                 type="button"
//                 aria-label={`Play story: ${story.title}`}
//                 className="relative mb-4 block aspect-[5/4] w-full overflow-hidden rounded-sm bg-neutral-100"
//               >
//                 <img
//                   src={story.image}
//                   alt={story.title}
//                   className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />
//                 <span className="absolute inset-0 flex items-center justify-center">
//                   <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 text-white backdrop-blur-[1px] transition-transform duration-300 group-hover:scale-110">
//                     <svg
//                       viewBox="0 0 24 24"
//                       className="ml-1 h-5 w-5 fill-current"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </span>
//                 </span>
//               </button>

//               <h3 className="mb-1 text-base font-semibold  text-neutral-900">
//                 &quot;{story.title}&quot;
//               </h3>
//               <p className="text-sm font-semibold text-neutral-900">
//                 {story.author}
//               </p>
//               <p className="text-xs tracking-wide text-neutral-500">
//                 {story.trip}
//               </p>
//             </article>
//           ))}
//         </div>

//         {/* Nav buttons */}
//         <div className="mt-6 flex justify-end gap-3">
//           <button
//             type="button"
//             onClick={() => scrollByCard(-1)}
//             disabled={!canScrollPrev}
//             aria-label="Previous stories"
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-neutral-700"
//           >
//             <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
//               <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//           <button
//             type="button"
//             onClick={() => scrollByCard(1)}
//             disabled={!canScrollNext}
//             aria-label="Next stories"
//             className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-neutral-300 disabled:hover:bg-transparent disabled:hover:text-neutral-700"
//           >
//             <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
//               <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Footer row */}
//       <div
//         ref={footerRef}
//         className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-neutral-200 pt-8 md:mt-16 md:flex-row md:items-center"
//       >
//         <span className="text-xs tracking-wide text-neutral-400">
//           [ Est. 1994 ]
//         </span>
//         <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
//           &quot;Every region has its own landscape, its own rhythm and its
//           own stories&quot;
//         </p>
//         <button
//           type="button"
//           className="flex items-center gap-2 bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-neutral-700"
//         >
//           Read Their Stories
//           <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
//             <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STORIES = [
  {
    id: 1,
    title: "Deep Spiritual Belonging",
    author: "Natsumi Satoru",
    trip: "SLOW ESCAPE, 2025",
    image:
      "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "A Life-Altering Crossing",
    author: "Marcus Vance",
    trip: "SPITI EXPLORER, 2025",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Deep Spiritual Belonging",
    author: "Natsumi Satoru",
    trip: "SLOW ESCAPE, 2025",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "A Life-Altering Crossing",
    author: "Marcus Vance",
    trip: "SPITI EXPLORER, 2025",
    image:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function JourneysRemembered() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const footerRef = useRef(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 24, opacity: 0 });
      gsap.set(cardRefs.current, { y: 40, opacity: 0 });
      gsap.set(footerRef.current, { y: 16, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          cardRefs.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.35"
        )
        .to(
          footerRef.current,
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const updateArrowState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrowState();
    el.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    return () => {
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 320;
    gsap.to(el, {
      scrollLeft: el.scrollLeft + direction * cardWidth,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 py-12 sm:py-16 md:px-12 md:py-20 lg:px-20"
    >
      <div ref={headingRef} className="mb-8 sm:mb-10  md:mb-14">
        <p className="eyebrow-text mb-4 text-neutral-400">
          // Journeys Remembered
          
        </p>
         
        <p className=" ml-auto max-w-3xl">
         
            <span className=" font-extrabold!" >Every traveller returns with a different story.</span>
          
          Some remember the challenge of a high mountain pass. Others
          remember a conversation, a remote village, a sunrise over the
          peaks, or a shared meal around a table. Read the stories that
          continue long after the roads.
        </p>
      </div>
      <div className="mt-4 sm:mt-6 flex justify-start gap-3 mb-4 pr-2 max-sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous stories"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            aria-label="Next stories"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      <div className="relative w-full">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story, i) => (
            <article
              key={story.id}
              data-card
              ref={(el) => (cardRefs.current[i] = el)}
              className="group w-[85%] flex-none snap-start sm:w-[48%] lg:w-[23%]"
            >
              <button
                type="button"
                aria-label={`Play story: ${story.title}`}
                className="relative mb-4 block aspect-[5/4] w-full overflow-hidden rounded-sm bg-neutral-100"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 text-white backdrop-blur-[1px] transition-transform duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-5 w-5 fill-current"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>

              <h5 className="mb-1 heading-sm text-neutral-900">
                &quot;{story.title}&quot;
              </h5>
              <p className=" ">
                {story.author}
              </p>
              <p className="">
                {story.trip}
              </p>
            </article>
          ))}
        </div>

        {/* <div className="mt-4 sm:mt-6 flex justify-end gap-3 pr-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollPrev}
            aria-label="Previous stories"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollNext}
            aria-label="Next stories"
            className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div> */}
      </div>

      <div
        ref={footerRef}
        className=" sm:mt-14 flex flex-col items-start justify-between gap-6 sm:border-t  sm:border-neutral-200 pt-6 sm:pt-8 md:mt-16 md:flex-row md:items-center"
      >
        <p className="">
          [ Est. 1994 ]
        </p>
        <p className=" text-center sm:text-left w-full sm:w-auto normal-case">
          &quot;Every region has its own landscape, its own rhythm and its
          own stories&quot;
        </p>
        <button
          type="button"
          className="flex w-full sm:w-auto justify-center items-center gap-2 bg-neutral-900 px-20 py-4 sm:py-3 btn-text text-white transition-colors hover:bg-neutral-700"
        >
          Read Their Stories
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}