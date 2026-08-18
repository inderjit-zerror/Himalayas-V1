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
  { label: "JOURNAL", href: "/journal" },
  { label: "FAQS", href: "/faqs" },
];

// Links shown inside the full-screen menu overlay
const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Journeys", href: "/journeys" },
  { label: "Journal", href: "/journal" },
  { label: "FAQs", href: "/faqs" },
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

  // Scroll-driven compact/expanded nav bar
  useEffect(() => {
    const nav = navRef.current;
    const bg = bgRef.current;
    if (!nav || !bg) return;

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
        if (nav) nav.dataset.scrolled = self.progress > 0.05 ? "true" : "false";
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
          className="flex items-center gap-2 btn-text pr-5 text-[1rem] text-neutral-900 sm:text-base"
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
  const [isJourneysHovered, setIsJourneysHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

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

  // Handle Journeys hover state with delay to allow smooth mouse transition
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsJourneysHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsJourneysHovered(false);
    }, 150);
  };

  const handleJourneysClick = (e) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      e.preventDefault();
      setIsJourneysHovered((prev) => !prev);
    }
  };

  // Animate Journeys sub-menu list in/out responsive to screen size
  useEffect(() => {
    if (!isOpen || !listsRef.current) return;

    const isMobile = window.innerWidth < 1024;

    if (isJourneysHovered) {
      gsap.to(listsRef.current, {
        autoAlpha: 1,
        x: 0,
        display: "flex",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    } else {
      gsap.to(listsRef.current, {
        autoAlpha: 0,
        x: isMobile ? 0 : 40,
        display: "none",
        duration: 0.3,
        ease: "power2.in",
        overwrite: "auto",
      });
    }
  }, [isJourneysHovered, isOpen]);

  // Open / close menu animation
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
          [closeBtnRef.current, logoRef.current, socialRef.current, contactRef.current],
          { opacity: 0, y: 12 }
        );
        gsap.set(images, { opacity: 0, y: 24 });
        gsap.set(navItems, { opacity: 0, y: 24 });

        // Ensure sub-menu lists start completely hidden off to the right (desktop) or stacked (mobile)
        if (listsRef.current) {
          const isMobile = window.innerWidth < 1024;
          gsap.set(listsRef.current, { autoAlpha: 0, x: isMobile ? 0 : 40, display: "none" });
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(panel, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" })
          .to(
            [closeBtnRef.current, logoRef.current, socialRef.current],
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 },
            "-=0.25"
          )
          .to(images, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.2")
          .to(navItems, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.35")
          .to(contactRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3");
      }, overlay);

      return () => ctx.revert();
    } else if (hasMounted.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power2.in" },
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
            setIsJourneysHovered(false);
          },
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
        className="flex h-full w-full flex-col overflow-y-auto bg-white sm:w-[95vw] sm:h-[80vh]  sm:m-auto px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8"
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

        {/* Main content flex container */}
        <div className="mt-8 flex flex-1 flex-col gap-8 sm:mt-10 md:mt-12 lg:flex-row lg:items-stretch lg:gap-12 lg:h-[calc(100%-80px)]">
          
          {/* Images container — 55% Width and 100% Height on Desktop */}
          <div className="order-2 grid w-full shrink-0 grid-cols-2 gap-3 sm:gap-4 max-sm:hidden lg:order-1 lg:h-full lg:w-[55%] lg:gap-5">
            <div className="flex flex-col gap-3 sm:gap-4 lg:h-full lg:gap-5">
              {MENU_IMAGES.filter((img) => !img.tall).map((img, i) => (
                <MenuImage
                  key={img.label}
                  img={img}
                  setRef={(el) => (imagesRef.current[i] = el)}
                  className="h-28 sm:h-40 md:h-48 lg:h-1/2"
                />
              ))}
            </div>
            {MENU_IMAGES.filter((img) => img.tall).map((img, i) => (
              <MenuImage
                key={img.label}
                img={img}
                setRef={(el) => (imagesRef.current[2 + i] = el)}
                className="h-full min-h-[15rem] sm:min-h-[17.5rem] lg:min-h-full"
              />
            ))}
          </div>

          {/* Right Column — Nav Links & Vertical Sub-Menu Side-by-Side (45% Width) */}
          <div className="order-1 flex w-full flex-col justify-start gap-6 sm:flex-row lg:order-2 lg:h-full lg:w-[45%]">
            
            {/* Navigation links */}
            <nav className="w-full sm:w-1/2">
              <ul className="flex flex-col gap-1 sm:gap-2">
                {MENU_LINKS.map((link, i) => {
                  const isJourneys = link.label.toUpperCase() === "JOURNEYS";
                  return (
                    <li
                      key={link.href}
                      ref={(el) => (navItemsRef.current[i] = el)}
                      onMouseEnter={isJourneys ? handleMouseEnter : undefined}
                      onMouseLeave={isJourneys ? handleMouseLeave : undefined}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (isJourneys) handleJourneysClick(e);
                          else onClose();
                        }}
                        className="flex items-center justify-between border-b border-neutral-200 py-2.5 text-2xl font-normal text-neutral-800 transition-colors hover:text-neutral-400 sm:py-3 sm:text-3xl md:text-4xl"
                      >
                        <span>{link.label}</span>
                        {isJourneys && (
                          <svg 
                            className={`h-5 w-5 transition-transform duration-300 lg:hidden ${isJourneysHovered ? "rotate-180" : ""}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Sub-menu: Stacked Vertically, Slides in from Right */}
            <div
              ref={listsRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hidden w-full flex-col gap-6 opacity-0 sm:w-1/2 sm:gap-8"
            >
              <LinkList title="Himalayan journeys" items={HIMALAYAN_JOURNEYS} onClose={onClose} />
              <LinkList title="Beyond Himalayas" items={BEYOND_HIMALAYAS} onClose={onClose} />
            </div>
          </div>
        </div>

        {/* Footer Contact Link */}
        <div
          ref={contactRef}
          className="mt-8 flex shrink-0 justify-center border-t border-neutral-100 pt-4 lg:mt-6 lg:justify-end lg:border-t-0"
        >
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

function LinkList({ title, items, onClose }) {
  return (
    <div>
      <h5 className="border-b border-neutral-300 pb-2 text-sm font-semibold uppercase tracking-wide text-neutral-900">
        {title}
      </h5>
      <ul className="mt-3 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
            <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
            <Link href="#" onClick={onClose} className="hover:text-neutral-400">
              {item}
            </Link>
          </li>
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