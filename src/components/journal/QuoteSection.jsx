import React from "react";

export default function QuoteSection() {
  return (
    <section className="flex items-center justify-center w-full min-h-[300px] px-4 py-16 overflow-x-hidden relative">
      <div className=" mx-auto flex flex-col items-center text-center px-[10vw]">
        {/* Quote Text */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold! text-black uppercase leading-snug tracking-tight">
          "The mountains are never in a hurry. The best journeys shouldn't be
          either."
        </h3>

        {/* Attribution */}
        <h5 className="mt-8 text-lg md:text-xl font-bold text-black uppercase relative tracking-wider flex justify-center items-center flex-col">
          — Vinod

          <img src="/img/Img2.png" alt=" imgh" className="w-[30px] rotate-90" />
        </h5>
      </div>

      <div className="absolute top-[60%] w-full h-[60vh] left-0 z-[-1] overflow-hidden ">
        <img
          src="/img/BBG2.png"
          alt="IMG"
          className="w-full h-full rotate-180 "
        />
      </div>

    </section>
  );
}
