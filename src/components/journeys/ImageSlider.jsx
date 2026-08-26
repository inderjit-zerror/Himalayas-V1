"use client";

import { useState } from "react";

// Default array of image URLs
const defaultImages = [
  "/images/thanglangla.jpg",
  "/images/pangong.jpg",
  "/images/nubra.jpg",
];

export default function ImageSlider({
  images = defaultImages,
  tag = "// LADAKH / ALONG THE JOURNEY /",
  location = "Thanglangla",
  title = "The High Passes",
  quote = "The road climbs steadily above the tree line until only rock, sky and snow remain. Every pass feels like crossing into another world.",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full  mx-auto  px-5 sm:px-20 py-5 sm:py-20  overflow-x-hidden  ">
      {/* Top Bar - Fixed Header Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-4 mb-6">

        {/* Left Header Tag */}
        <div className="  text-sm md:text-base tracking-wide uppercase pt-2.5">
          <h5>{tag} </h5>
          {/* <p className=" mt-3">{location}</p> */}
        </div>

        {/* Right Header Text / Quote */}
        <div className="max-w-md text-xs md:text-sm text-neutral-800 leading-relaxed">
          
          <p className="mt-2"> <span className="font-bold">{title}: </span>"{quote}"</p>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-200 overflow-hidden">

        {/* Image - Only this updates on click */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Prev Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/90 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all duration-200 focus:outline-none active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/90 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all duration-200 focus:outline-none active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

      </div>
    </section>
  );
}