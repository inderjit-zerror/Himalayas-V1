
"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  { label: "Beach Love", src: "/pic/M1.jpg", tall: false },
  { label: "Desert Destinations", src: "/pic/M3.jpg", tall: false },
  { label: "Himalayan Circuit", src: "/pic/M2.jpg", tall: true },
];

const HIMALAYAN_JOURNEYS = ["Ladakh", "Zanskar", "Spiti & Kinnaur", "Nepal", "Bhutan"];
const BEYOND_HIMALAYAS = ["Rajasthan", "Western Ghats", "Konkan to Kanyakumari"];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const bgRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll-driven compact/expanded nav bar
  useEffect(() => {
    const nav = navRef.current;
    const bg = bgRef.current;
    if (!nav || !bg) return;

    // Wrapped in gsap.context() for safe cleanup in Next.js/React Strict Mode
    const ctx = gsap.context(() => {
      gsap.set(bg, { yPercent: -150 });
      gsap.set(nav, { paddingTop: "2rem", paddingBottom: "2rem" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "150 top",
          scrub: 0.4,
        },
      });

      // Using ease: "none" is recommended for scrubbed animations
      tl.to(bg, { yPercent: 0, duration: 1, ease: "none" }, 0).to(
        nav,
        { paddingTop: "2rem", paddingBottom: "2rem", duration: 1, ease: "none" },
        0
      );

      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "150 top",
        onUpdate: (self) => {
          if (nav) nav.dataset.scrolled = self.progress > 0.05 ? "true" : "false";
        },
      });
    });

    // Clean up all GSAP instances properly
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      data-scrolled="false"
      className="fixed top-0 headerOG left-0 z-50 w-full px-4 sm:px-6 md:px-20  transition-shadow duration-300 data-[scrolled=true]:shadow-sm"
    >
      <div
        ref={bgRef}
        className="pointer-events-none flex absolute inset-0 -z-10 bg-white"
        aria-hidden="true"
      />

      <nav className="mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/img/logo1.png"
            alt="Discover Himalayas"
            width={140}
            height={48}
            priority
            className="h-8 w-auto sm:h-10 md:h-12"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 btn-text text-neutral-800">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative py-1 transition-colors hover:text-neutral-900 ${isActive ? "font-semibold text-neutral-900" : "text-neutral-800"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 block h-[2px] bg-neutral-900 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 btn-text pr-5 text-[1rem] text-neutral-900 sm:text-base cursor-pointer"
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
  const pathname = usePathname();

  const overlayRef = useRef(null);
  const backdropRef = useRef(null);
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const imagesRef = useRef([]);
  const navItemsRef = useRef([]);
  const listsRef = useRef(null);

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

  // Handle Journeys hover state (Desktop Only)
  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsJourneysHovered(true);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    hoverTimeoutRef.current = setTimeout(() => {
      setIsJourneysHovered(false);
    }, 150);
  };

  // Animate Desktop Sub-menu list in/out
  useEffect(() => {
    if (!isOpen || !listsRef.current) return;
    const isMobile = window.innerWidth < 1024;
    if (isMobile) return; // Managed separately for mobile

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
        x: 40,
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
        gsap.set(backdropRef.current, { opacity: 0 });
        gsap.set(panel, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.set([closeBtnRef.current, logoRef.current, socialRef.current], { opacity: 0, y: 12 });
        gsap.set(images, { opacity: 0, y: 24 });
        gsap.set(navItems, { opacity: 0, y: 24 });

        if (listsRef.current && window.innerWidth >= 1024) {
          gsap.set(listsRef.current, { autoAlpha: 0, x: 40, display: "none" });
        }

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(backdropRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0)
          .to(panel, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" }, 0)
          .to(
            [closeBtnRef.current, logoRef.current, socialRef.current],
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.06 },
            "-=0.25"
          )
          .to(images, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.2")
          .to(navItems, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.35");
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
          ],
          { opacity: 0, y: 12, duration: 0.25 }
        )
          .to(panel, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power4.inOut" }, "-=0.1")
          .to(backdropRef.current, { opacity: 0, duration: 0.35 }, "-=0.3");
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
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative flex h-full w-full flex-col overflow-y-auto bg-white sm:w-[95vw] sm:h-[85vh] sm:m-auto px-5 py-6 sm:overflow-hidden"
      >
        {/* Close Button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center text-neutral-700 transition-colors hover:text-neutral-400 cursor-pointer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 4L20 20M20 4L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mt-4 flex flex-1 flex-col gap-8 sm:px-5 lg:flex-row lg:items-stretch lg:gap-12 lg:h-[calc(100%-40px)] overflow-y-auto lg:overflow-hidden">

          {/* Images container (Desktop Grid) */}
          <div className="order-2 grid pt-2 w-full shrink-0 grid-cols-2 gap-3 sm:gap-4 hidden lg:grid lg:order-1 lg:h-[95%] lg:w-[55%] lg:gap-5">
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

          {/* Right Column / Main Content */}
          <div className="order-1 flex w-full flex-col justify-start items-center gap-6 sm:flex-row lg:order-2 lg:h-[95%] lg:w-[45%] overflow-y-auto sm:overflow-hidden">

            {/* Navigation links */}
            <nav className="w-full lg:w-1/3">
              <ul className="flex flex-col gap-1 sm:gap-2">
                {MENU_LINKS.map((link, i) => {
                  const isJourneys = link.label.toUpperCase() === "JOURNEYS";
                  const isActive = pathname === link.href;

                  return (
                    <li
                      key={link.href}
                      ref={(el) => (navItemsRef.current[i] = el)}
                      onMouseEnter={isJourneys ? handleMouseEnter : undefined}
                      onMouseLeave={isJourneys ? handleMouseLeave : undefined}
                    >
                      <div
                        className={`group flex items-center justify-between border-b border-neutral-200 py-3 text-2xl transition-colors sm:text-3xl ${isActive
                          ? "font-bold text-neutral-900 lg:font-bold"
                          : "font-normal text-neutral-800 hover:text-neutral-400"
                          }`}
                      >
                        {/* Text navigation link */}
                        <Link
                          href={link.href}
                          onClick={() => onClose()}
                          className="flex items-center flex-1"
                        >
                          <span>{link.label}</span>
                        </Link>

                        {/* Plus (+) symbol for JOURNEYS (Desktop/PC view) */}
                        {isJourneys && (
                          <span
                            className={`hidden lg:flex items-center scale-[2] justify-center text-xl font-light text-black transition-transform duration-300 ml-4 ${isJourneysHovered ? "rotate-45" : "rotate-0"
                              }`}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        )}

                        {/* Mobile Dropdown Arrow for Journeys */}
                        {isJourneys && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsJourneysHovered((prev) => !prev);
                            }}
                            className="flex items-center justify-center p-2 lg:hidden cursor-pointer"
                            aria-label="Toggle Journeys Sub-menu"
                          >
                            <svg
                              className={`h-6 w-6 transition-transform duration-300 ${isJourneysHovered ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Mobile Accordion Sub-menu inside Journeys tab */}
                      {isJourneys && (
                        <div
                          className={`overflow-hidden transition-all duration-300 lg:hidden ${isJourneysHovered ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                            }`}
                        >
                          <div className="flex flex-col gap-5 pl-4 bg-neutral-50/50 py-3 rounded-lg border-l-2 border-neutral-300">
                            <LinkList title="Himalayan journeys" items={HIMALAYAN_JOURNEYS} onClose={onClose} />
                            <LinkList title="Beyond Himalayas" items={BEYOND_HIMALAYAS} onClose={onClose} />
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Sub-menu Panel */}
            <div
              ref={listsRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hidden lg:flex w-1/2 flex-col gap-8 opacity-0"
            >
              <LinkList title="Himalayan journeys" items={HIMALAYAN_JOURNEYS} onClose={onClose} />
              <LinkList title="Beyond Himalayas" items={BEYOND_HIMALAYAS} onClose={onClose} />
            </div>
          </div>
        </div>

        {/* Mobile Images Container */}
        <div className="mt-8 grid grid-cols-3 gap-2.5 lg:hidden pt-4 border-t border-neutral-100">
          {MENU_IMAGES.map((img) => (
            <div key={img.label} className="relative h-28 w-full overflow-hidden rounded-md bg-neutral-200">
              <Image src={img.src} alt={img.label} fill className="object-cover" />
              <span className="absolute bottom-1.5 left-1.5 text-[10px] font-medium text-white drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
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
      <h5 className="border-b border-neutral-300 pb-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-neutral-900">
        {title}
      </h5>
      <ul className="mt-2.5 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
            <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
            <Link href="#" onClick={onClose} className="hover:text-neutral-400 transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}