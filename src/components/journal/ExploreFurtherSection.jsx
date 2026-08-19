'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const articles = [
  {
    id: 1,
    category: "From Vinod's Notebook",
    title: "The Morning Pangong Stood Completely Still",
    description: "Why the lake never looks the same twice, no matter how often you return.",
    action: "Read Article",
    image: "/pic/15.jpg"
  },
  {
    id: 2,
    category: "Field Notes",
    title: "Why We Always Spend Two Nights in Leh",
    description: "The mountains reward patience long before they reward altitude.",
    action: "Read Article",
    image: "/pic/16.jpg"
  },
  {
    id: 3,
    category: "Traveller Story",
    title: "A Crossing I'll Never Forget",
    description: "One rider's first experience of crossing Umling La.",
    action: "Read Article",
    image: "/pic/11.jpg"
  },
  {
    id: 4,
    category: "Related Journey",
    title: "To the Highest Road on Earth",
    description: "Explore the complete itinerary through the Indus Valley, Changthang and Umling La.",
    action: "View Journey",
    image: "/pic/13.jpg"
  }
];

export default function ExploreFurtherSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP entrance animation on component mount
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white text-black py-16 px-6 md:px-12 lg:px-16  ">
      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12 gap-4">
          <h4 className=" uppercase font-semibold!">
            Ready to explore further?
          </h4>
          <p className="">
            If this journey resonated with you, here are a few more places to continue exploring.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Tag
              <p className="text-xs text-gray-700 font-medium mb-3">
                [ {item.category} ]
              </p> */}

              {/* Title */}
              <h5 className="text-base font-bold capitalize! text-black leading-snug mb-2 group-hover:underline underline-offset-2">
                {item.title}
              </h5>

              {/* Description */}
              <p className="mt-3">
                {item.description}
              </p>

              {/* Call to Action */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-black mt-5">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
                <span>{item.action}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}