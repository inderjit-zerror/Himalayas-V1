import React from 'react';
import Image from 'next/image';

export default function StoriesSection() {
  const journalLinks = [
    {
      id: 1,
      title: "Vinod's Notebook",
      description: "Three decades of observations, memories and roads worth returning to.",
      link: "#"
    },
    {
      id: 2,
      title: "Traveller Stories",
      description: "Journeys experienced through the eyes of those who travelled with us.",
      link: "#"
    },
    {
      id: 3,
      title: "Field Notes",
      description: "Practical advice to help you prepare for your next adventure.",
      link: "#"
    },
    {
      id: 4,
      title: "Photo Essays",
      description: "Moments captured across the Himalayas and the Indian subcontinent.",
      link: "#"
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden py-10 px-5 sm:px-20">
      {/* 
        Background Topographic Map 
        Replace '/images/topo-bg.png' with your actual background pattern image path 
      */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('/images/topo-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="relative z-10  mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Content & Links */}
        <div className="flex flex-col space-y-10">
          
          {/* Header Text */}
          <div className="space-y-4">
            <p className="text-[#a0a0a0] text-sm tracking-wider font-medium">
              // Stories from the Road
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-lg">
              <span className="font-bold text-black">Not everything worth knowing is marked on a map.</span> The Journal brings together Vinod&apos;s decades of exploring the Himalayas, sharing the places, people and discoveries that have shaped Discover Himalayas.
            </p>
          </div>

          {/* List of Links */}
          <div className="flex flex-col">
            {journalLinks.map((item) => (
              <a 
                key={item.id} 
                href={item.link}
                className="group flex items-center justify-between py-5 border-t border-gray-300 first:border-t-0 last:border-b transition-colors duration-300 hover:border-gray-400"
              >
                <div className="pr-6">
                  <p className="text-black!  font-bold! text-base mb-1">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div>
            <button className="bg-[#e84e40] hover:bg-[#d03d30] text-white px-8 py-3.5 text-sm font-bold tracking-wider uppercase flex items-center justify-center transition-colors duration-300  group">
              Visit The Journal
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Right Column: Image Composites */}
        <div className="relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
          
          {/* 
            Main Stamp Image Container 
            Note: For the exact scalloped "stamp" border, it is best to export that frame 
            as a transparent PNG from your design tool and use it as the image. 
            Here is a structural wrapper for it.
          */}
          <div className="relative w-full max-w-md xl:max-w-lg aspect-[3/4]  bg-transparent drop-shadow-2xl">
            {/* Replace with your actual stamp + painting composite image */}
            <div className="w-full h-full relative overflow-hidden rounded-md bg-gray-100 flex items-center justify-center border-8 border-white shadow-lg">
               
                  {/* Fallback text if image is missing. 
                  Use Next.js <Image /> here in production: */}
                  <Image src="/img/8.jpg" alt="Motorcycle in Himalayas" layout="fill" objectFit="cover" />
              
               
            </div>

            {/* 
              Circular Stamp/Badge Overlay 
              Positioned to overlap the top right of the main image
            */}
            <div className="absolute -top-12 -right-6 sm:-top-16 sm:-right-12 w-32 h-32 sm:w-48 sm:h-48 z-20 pointer-events-none drop-shadow-md">
              {/* Replace with your transparent circular logo badge */}
              <div className="w-full h-full rounded-full border border-dashed border-gray-400 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                 {/* <span className="text-gray-500 text-xs text-center p-2">Place Circular Badge Here</span> */}
              </div>
            </div>
            
            {/* Postmark Lines Overlay (Optional) */}
            <div className="absolute top-12 -left-12 sm:-left-20 w-24 h-16 sm:w-32 sm:h-24 z-20 pointer-events-none opacity-60">
              {/* Add your wavy postmark PNG here */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}