// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const NAV_LINKS = [
//   { label: "OUR STORY", href: "/our-story" },
//   { label: "JOURNEYS", href: "/journeys" },
//   { label: "DESTINATIONS", href: "/destinations" },
//   { label: "FAQS", href: "/faqs" },
//   { label: "JOURNAL", href: "/journal" },
// ];

// export default function Header() {
//   const navRef = useRef(null);
//   const bgRef = useRef(null);

//   useEffect(() => {
//     const nav = navRef.current;
//     const bg = bgRef.current;

//     // Starting state: transparent bg, sitting at its normal (taller) height,
//     // background panel translated up and out of view.
//     gsap.set(bg, { yPercent: -100 });
//     gsap.set(nav, { paddingTop: "1.75rem", paddingBottom: "1.75rem" });

//     // Scrub timeline tied to scroll position: as the user scrolls down from
//     // the very top, the white panel slides down from behind the nav and the
//     // nav itself compresses slightly (moves "down"/shrinks in height).
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: document.body,
//         start: "top top",
//         end: "150 top", // fully "scrolled" state reached after 150px
//         scrub: 0.4,
//       },
//     });

//     tl.to(bg, { yPercent: 0, duration: 1, ease: "power2.out" }, 0).to(
//       nav,
//       {
//         paddingTop: "0.85rem",
//         paddingBottom: "0.85rem",
//         duration: 1,
//         ease: "power2.out",
//       },
//       0
//     );

//     // Also toggle a class at a hard breakpoint for shadow / text color if needed.
//     const st = ScrollTrigger.create({
//       trigger: document.body,
//       start: "top top",
//       end: "150 top",
//       onUpdate: (self) => {
//         nav.dataset.scrolled = self.progress > 0.05 ? "true" : "false";
//       },
//     });

//     return () => {
//       tl.scrollTrigger?.kill();
//       st.kill();
//       tl.kill();
//     };
//   }, []);

//   return (
//     <header
//       ref={navRef}
//       data-scrolled="false"
//       className="fixed top-0 left-0 z-50 w-full px-6 md:px-10 transition-shadow duration-300 data-[scrolled=true]:shadow-sm"
//     >
//       {/* Sliding white background panel — sits behind the content, animated by GSAP */}
//       <div
//         ref={bgRef}
//         className="pointer-events-none absolute inset-0 -z-10 bg-white"
//         aria-hidden="true"
//       />

//       <nav className="mx-auto flex  items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 shrink-0">
//           <Image
//             src=""
//             alt="Discover Himalayas"
//             width={140}
//             height={48}
//             priority
//             className="h-10 w-auto md:h-12"
//           />
//         </Link>

//         {/* Center links */}
//         <ul className="hidden lg:flex items-center gap-8 btn-text text-neutral-800">
//           {NAV_LINKS.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className="relative py-1 transition-colors hover:text-neutral-500"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Menu button */}
//         <button
//           type="button"
//           className="flex items-center gap-2 btn-text text-neutral-900"
//           aria-label="Open menu"
//         >
//           MENU
//         </button>
//       </nav>
//     </header>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Links shown in the compact top nav (desktop, before the menu is opened)
const NAV_LINKS = [
  { label: "OUR STORY", href: "/our-story" },
  { label: "JOURNEYS", href: "/journeys" },
  { label: "FAQS", href: "/faqs" },
  { label: "JOURNAL", href: "/journal" },
];

// Links shown inside the full-screen menu overlay
const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "OUR STORY", href: "/our-story" },
  { label: "JOURNEYS", href: "/journeys" },
  { label: "FAQS", href: "/faqs" },
  { label: "JOURNAL", href: "/journal" },
];

const MENU_IMAGES = [
  { label: "Beach Love", src: "", tall: false },
  { label: "Desert Destinations", src: "", tall: false },
  { label: "Himalayan Circuit", src: "", tall: true },
];

const HIMALAYAN_JOURNEYS = ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"];
const BEYOND_HIMALAYAS = ["Rajasthan", "Western Ghats", "Konkan to Kanyakumari"];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Header() {
  const navRef = useRef(null);
  const bgRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll-driven compact/expanded nav bar (unchanged behavior)
  useEffect(() => {
    const nav = navRef.current;
    const bg = bgRef.current;

    gsap.set(bg, { yPercent: -100 });
    gsap.set(nav, { paddingTop: "1.75rem", paddingBottom: "1.75rem" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "150 top",
        scrub: 0.4,
      },
    });

    tl.to(bg, { yPercent: 0, duration: 1, ease: "power2.out" }, 0).to(
      nav,
      { paddingTop: "0.85rem", paddingBottom: "0.85rem", duration: 1, ease: "power2.out" },
      0
    );

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "150 top",
      onUpdate: (self) => {
        nav.dataset.scrolled = self.progress > 0.05 ? "true" : "false";
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      st.kill();
      tl.kill();
    };
  }, []);

  return (
    <header
      ref={navRef}
      data-scrolled="false"
      className="fixed top-0 left-0 z-50 w-full px-4 sm:px-6 md:px-10 transition-shadow duration-300 data-[scrolled=true]:shadow-sm"
    >
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 -z-10 bg-white"
        aria-hidden="true"
      />

      <nav className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src=""
            alt="Discover Himalayas"
            width={140}
            height={48}
            priority
            className="h-8 w-auto sm:h-10 md:h-12"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 btn-text text-neutral-800">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-1 transition-colors hover:text-neutral-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 btn-text text-sm text-neutral-900 sm:text-base"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          MENU
        </button>
      </nav>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

function FullScreenMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const imagesRef = useRef([]);
  const navItemsRef = useRef([]);
  const listsRef = useRef(null);
  const contactRef = useRef(null);

  const hasMounted = useRef(false);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Open / close animation
  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    const images = imagesRef.current.filter(Boolean);
    const navItems = navItemsRef.current.filter(Boolean);

    if (isOpen) {
      hasMounted.current = true;

      const ctx = gsap.context(() => {
        gsap.set(overlay, { display: "flex" });
        gsap.set(panel, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.set(
          [closeBtnRef.current, logoRef.current, socialRef.current, listsRef.current, contactRef.current],
          { opacity: 0, y: 12 }
        );
        gsap.set(images, { opacity: 0, y: 24 });
        gsap.set(navItems, { opacity: 0, y: 24 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(panel, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" })
          .to(
            [closeBtnRef.current, logoRef.current, socialRef.current],
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 },
            "-=0.25"
          )
          .to(images, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.2")
          .to(navItems, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.35")
          .to(
            [listsRef.current, contactRef.current],
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
            "-=0.3"
          );
      }, overlay);

      return () => ctx.revert();
    } else if (hasMounted.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.in" },
          onComplete: () => gsap.set(overlay, { display: "none" }),
        });

        tl.to(
          [
            closeBtnRef.current,
            logoRef.current,
            socialRef.current,
            ...images,
            ...navItems,
            listsRef.current,
            contactRef.current,
          ],
          { opacity: 0, y: 12, duration: 0.25 }
        ).to(panel, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power4.inOut" }, "-=0.1");
      }, overlay);

      return () => ctx.revert();
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div
        ref={panelRef}
        className="flex h-full w-full flex-col overflow-y-auto bg-white px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8"
      >
        {/* Top bar: close / logo / socials */}
        <div className="flex shrink-0 items-center justify-between">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center text-neutral-700 transition-colors hover:text-neutral-400 sm:h-9 sm:w-9"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
              <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <Link ref={logoRef} href="/" className="flex items-center">
            <Image src="" alt="Discover Himalayas" width={120} height={44} className="h-7 w-auto sm:h-9 md:h-11" />
          </Link>

          <div ref={socialRef} className="flex items-center gap-2 sm:gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-500 sm:h-9 sm:w-9"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Main content grid — stacked and reordered (nav first) on mobile, full layout from lg up */}
        <div className="mt-8 grid flex-1 grid-cols-1 gap-8 sm:mt-10 md:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Nav links — shown first on mobile since it's the primary job of the menu */}
          <nav className="order-1 lg:order-2 lg:col-span-3">
            <ul className="flex flex-col gap-1 sm:gap-2">
              {MENU_LINKS.map((link, i) => (
                <li key={link.href} ref={(el) => (navItemsRef.current[i] = el)}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block border-b border-neutral-200 py-2.5 text-2xl transition-colors hover:text-neutral-400 sm:py-3 sm:text-3xl md:text-4xl ${link.active ? "font-semibold text-neutral-900" : "font-normal text-neutral-800"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Image cards */}
          <div className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:order-1 lg:col-span-5 lg:gap-5">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {MENU_IMAGES.filter((img) => !img.tall).map((img, i) => (
                <MenuImage
                  key={img.label}
                  img={img}
                  setRef={(el) => (imagesRef.current[i] = el)}
                  className="h-28 sm:h-40 md:h-48"
                />
              ))}
            </div>
            {MENU_IMAGES.filter((img) => img.tall).map((img, i) => (
              <MenuImage
                key={img.label}
                img={img}
                setRef={(el) => (imagesRef.current[2 + i] = el)}
                className="h-full min-h-[15rem] sm:min-h-[17.5rem] lg:min-h-[21rem]"
              />
            ))}
          </div>

          {/* Destination lists + contact */}
          <div
            ref={listsRef}
            className="order-3 grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-4 lg:flex lg:flex-col"
          >
            <LinkList title="Himalayan journeys" items={HIMALAYAN_JOURNEYS} />
            <LinkList title="Beyond Himalayas" items={BEYOND_HIMALAYAS} />
          </div>
        </div>

        <div ref={contactRef} className="mt-8 flex shrink-0 justify-center border-t border-neutral-100 pt-4 lg:mt-6 lg:justify-end lg:border-t-0">
          <a href="/contact" onClick={onClose} className="text-sm text-neutral-600 hover:text-neutral-400">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuImage({ img, setRef, className }) {
  return (
    <div ref={setRef} className={`relative overflow-hidden rounded-md bg-neutral-200 ${className}`}>
      {img.src ? (
        <Image src={img.src} alt={img.label} fill className="object-cover" />
      ) : (
        <div className="h-full w-full bg-neutral-200" />
      )}
      <span className="absolute bottom-2 left-2 text-xs font-medium text-white drop-shadow sm:bottom-3 sm:left-3 sm:text-sm">
        {img.label}
      </span>
    </div>
  );
}

function LinkList({ title, items }) {
  return (
    <div>
      <h3 className="border-b border-neutral-300 pb-2 text-sm font-semibold uppercase tracking-wide text-neutral-900">
        {title}
      </h3>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <p key={item} className="flex items-start gap-2 text-sm text-neutral-700">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
            <Link href="#" className="hover:text-neutral-400">
              {item}
            </Link>
          </p>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  if (name === "Instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13.5 9h1.5V7h-1.5c-1.4 0-2.5 1.1-2.5 2.5V11H9.5v2H11v4h2v-4h1.5l.5-2H13v-1.3c0-.4.3-.7.5-.7Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.5L15 12L10.5 14.5V9.5Z" fill="currentColor" />
    </svg>
  );
}