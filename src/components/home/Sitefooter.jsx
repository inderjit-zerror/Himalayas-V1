// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { Instagram, Facebook, Youtube } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const FOOTER_COLUMNS = [
//   {
//     title: "Himalayan Journeys",
//     links: ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"],
//   },
//   {
//     title: "Beyond Himalayas",
//     links: ["Rajasthan", "Western Ghats", "Konkan to Kanyakumari"],
//   },
//   {
//     title: "Plan Your Journey",
//     links: [
//       "How It Works",
//       "FAQs",
//       "Visa Information",
//       "Travel Insurance",
//       "Health & Safety",
//       "Packing Lists",
//     ],
//   },
// ];

// const FLORUP = [
//   {
//     title: "Himalayan Journeys",
//     links: ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"],
//   },
// ];

// // const SOCIALS = [
// //   { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
// //   { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
// //   { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
// // ];

// export default function SiteFooter() {
//   const footerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".footer-reveal",
//         { autoAlpha: 0, y: 24 },
//         {
//           autoAlpha: 1,
//           y: 0,
//           duration: 0.7,
//           ease: "power3.out",
//           stagger: 0.08,
//           scrollTrigger: {
//             trigger: footerRef.current,
//             start: "top 85%",
//           },
//         },
//       );
//     }, footerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="relative min-h-[80vh] overflow-hidden  px-6 flex justify-end items-end py-16 text-white md:px-16 lg:px-10"
//     >
//       {/* Background artwork */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//         aria-hidden="true"
//       />
//       <div className="absolute inset-0 bg-neutral-900/55" aria-hidden="true" />


//       <div className="relative mx-auto ">

//          {FLORUP.map((col) => (
//             <div key={col.title} className="footer-reveal mb-10">
//               <h3 className="mb-2 text-[15px] font-semibold">{col.title}</h3>
//               <ul className="space-y-0">
//                 {col.links.map((link) => (
//                   <li key={link} className="flex items-center gap-2">
//                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                     <a
//                       href="#"
//                       className="text-sm text-white/85 transition-colors hover:text-white"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}


//         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Link columns */}
//           {FOOTER_COLUMNS.map((col) => (
//             <div key={col.title} className="footer-reveal">
//               <h3 className="mb-2 text-[15px] font-semibold">{col.title}</h3>
//               <ul className="space-y-0">
//                 {col.links.map((link) => (
//                   <li key={link} className="flex items-center gap-2">
//                     <div className="w-1 h-1 bg-white rounded-full"></div>
//                     <a
//                       href="#"
//                       className="text-sm text-white/85 transition-colors hover:text-white"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Newsletter / social block */}
//           <div className="footer-reveal sm:col-span-2 lg:col-span-1">
//             <div className="mb-5 flex items-center gap-3">
//               {/* {SOCIALS.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-neutral-900"
//                 >
//                   <Icon size={16} strokeWidth={1.75} />
//                 </a>
//               ))} */}
//             </div>

//             <h3 className="text-[17px] font-semibold leading-snug">
//               Stay Connected with Discover Himalayas
//             </h3>
//             <p className="mt-3 text-sm leading-relaxed text-white/80">
//               Stories from across the Himalayas and the Indian subcontinent, new
//               journeys and expedition updates&mdash;shared occasionally, never
//               excessively.
//             </p>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="footer-reveal mt-14 flex flex-col items-start justify-between gap-3 pt-6 text-xs text-white/70 sm:flex-row sm:items-center">
//           <p>Privacy Policy | Terms | Copyright</p>
//           <p>Designed &amp; Developed by MAd Earth Designs</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        },
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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1176&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full ">
        {FLORUP.map((col) => (
          <div key={col.title} className="footer-reveal mb-10">
            <h3 className="mb-3 sm:mb-2 heading-sm font-semibold">{col.title}</h3>
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
              <h3 className="mb-3 sm:mb-2 heading-sm font-semibold">{col.title}</h3>
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

          <div className="footer-reveal sm:col-span-2 lg:col-span-1 mt-6 sm:mt-0">
            <h3 className="heading-sm font-semibold leading-snug">
              Stay Connected with Discover Himalayas
            </h3>
            <p className="mt-3 body-sm leading-relaxed text-white/80">
              Stories from across the Himalayas and the Indian subcontinent, new
              journeys and expedition updates&mdash;shared occasionally, never
              excessively.
            </p>
          </div>
        </div>

        <div className="footer-reveal mt-12 sm:mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/20 pt-6 caption-text text-white/70 sm:flex-row sm:items-center">
          <p className="text-center sm:text-left w-full sm:w-auto">Privacy Policy | Terms | Copyright</p>
          <p className="text-center sm:text-left w-full sm:w-auto">Designed &amp; Developed by MAd Earth Designs</p>
        </div>
      </div>
    </footer>
  );
}