// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /** Team bios. `tag` renders bold in the accent color, `text` in regular gray. */
// const TEAM = [
//   {
//     name: "Vinod",
//     tag: "Knows the Mountains.",
//     text: "For over three decades, Vinod has explored the Himalayas beyond the guidebooks, building friendships and gathering experiences that continue to shape every Discover Himalayas journey.",
//   },
//   {
//     name: "Nadia",
//     tag: "Knows the traveller.",
//     text: "Growing up in Belgium and having travelled extensively across India herself, Nadia helps bridge cultures and ensures every traveller feels at home from the moment they arrive.",
//   },
// ];

// export default function PeopleBehindJourneys() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Polaroid drops/settles in with a slight rotation overshoot
//       gsap.from(".pbj-polaroid", {
//         opacity: 0,
//         y: 60,
//         rotate: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//           toggleActions: "play none none none",
//         },
//       });

//       // Right column content staggers in
//       gsap.from(
//         ".pbj-eyebrow, .pbj-heading, .pbj-bio, .pbj-cta",
//         {
//           opacity: 0,
//           y: 24,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full bg-white px-6 py-20 sm:px-10 lg:px-20 lg:py-28"
//     >
//       <div className="mx-auto max-w-[1200px]">
//         {/* Top Eyebrow */}
//         <p className="pbj-eyebrow mb-12 text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
//           // This is Us
//         </p>

//         <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
//           {/* Left: Polaroid photo */}
//           <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
//             <div
//               className="pbj-polaroid w-full max-w-[500px] -rotate-3 bg-[#fdfdfc] p-4 pb-20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-neutral-100"
//               style={{ transformOrigin: "center" }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1644945581764-66b9e8ed4893?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Vinod and Nadia"
//                 className="h-full w-full object-cover"
//                 draggable={false}
//               />
//             </div>
//           </div>

//           {/* Right: Heading + Bios + CTA */}
//           <div className="flex w-full flex-col lg:w-1/2 lg:pl-10 xl:pl-0">
//             <h2 className="pbj-heading mb-12   text-[48px] font-black uppercase leading-[1.05] tracking-wide text-neutral-900 sm:text-[56px] lg:text-[64px]">
//               The people
//               <br />
//               behind the
//               <br />
//               journeys
//             </h2>

//             <div className="max-w-lg space-y-8">
//               {TEAM.map((member) => (
//                 <div key={member.name} className="pbj-bio">
//                   <h3 className="mb-1 text-lg font-bold text-neutral-900">
//                     {member.name}
//                   </h3>
//                   <p className="text-[15px] leading-relaxed text-neutral-600 sm:text-[16px]">
//                     <span className="font-bold text-[#e14032]">
//                       {member.tag}
//                     </span>{" "}
//                     {member.text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="pbj-cta mt-14 flex max-w-lg justify-end">
//               <button className="group flex items-center gap-4 bg-[#e14032] px-8 py-2 text-[13px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-[#c5362a]">
//                 MEET THE TEAM
//                 <span className="text-lg transition-transform group-hover:translate-x-1">
//                   &rsaquo;
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TEAM = [
  {
    name: "Vinod",
    tag: "Knows the Mountains.",
    text: "For over three decades, Vinod has explored the Himalayas beyond the guidebooks, building friendships and gathering experiences that continue to shape every Discover Himalayas journey.",
  },
  {
    name: "Nadia",
    tag: "Knows the traveller.",
    text: "Growing up in Belgium and having travelled extensively across India herself, Nadia helps bridge cultures and ensures every traveller feels at home from the moment they arrive.",
  },
];

export default function PeopleBehindJourneys() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pbj-polaroid", {
        opacity: 0,
        y: 60,
        rotate: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(
        ".pbj-eyebrow, .pbj-heading, .pbj-bio, .pbj-cta",
        {
          opacity: 0,
          y: 24,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-4 py-16 sm:px-10 lg:px-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto ">
        <p className="pbj-eyebrow eyebrow-text mb-10 sm:mb-12 text-neutral-400">
          // This is Us
        </p>

        <div className="flex flex-col gap-12 sm:gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full justify-center lg:w-1/2 lg:justify-start pt-6 sm:pt-0">
            <div
              className="pbj-polaroid w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] h-[70vh] -rotate-3 bg-[#fdfdfc] p-3 pb-16 sm:p-4 sm:pb-20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-neutral-100"
              style={{ transformOrigin: "center" }}
            >
              <img
                src="/img/9.jpg"
                alt="Vinod and Nadia"
                className="h-full w-full object-cover "
                draggable={false}
              />
            </div>
          </div>

          <div className="flex w-full flex-col lg:w-1/2 lg:pl-10 xl:pl-0">
            <h2 className="pbj-heading h-primary heading-xl mb-8 sm:mb-12 text-neutral-900">
              The people
              <br className="hidden sm:block" />
              behind the
              <br className="hidden sm:block" />
              journeys
            </h2>

            <div className="max-w-lg space-y-6 sm:space-y-8">
              {TEAM.map((member) => (
                <div key={member.name} className="pbj-bio">
                  <h5 className="mb-1 heading-md text-neutral-900">
                    {member.name}
                  </h5>
                  <p className="">
                    <p className=" text-[#e14032]">
                      {member.tag}
                    </p>{" "}
                    {member.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pbj-cta mt-10 sm:mt-14 flex max-w-lg justify-start ">
              <button className="group flex w-full sm:w-auto justify-center items-center gap-4 bg-[#e14032] px-8 py-4 sm:py-3 btn-text text-white transition-colors hover:bg-[#c5362a]">
                MEET THE TEAM
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  &rsaquo;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}