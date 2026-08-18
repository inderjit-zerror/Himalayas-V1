import React from 'react';

export default function QuoteSection() {
  return (
    <section className="flex items-center justify-center w-full min-h-[300px] bg-white px-4 py-16">
      <div className=" mx-auto flex flex-col items-center text-center px-[10vw]">
        {/* Quote Text */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold! text-black uppercase leading-snug tracking-tight">
          "The mountains are never in a hurry. The best journeys shouldn't be either."
        </h3>
        
        {/* Attribution */}
        <h5 className="mt-8 text-lg md:text-xl font-bold text-black uppercase tracking-wider">
          — Vinod
        </h5>
      </div>
    </section>
  );
}