"use client";

export default function PullQuote() {
  return (
    <section className="w-full bg-white sm:h-screen px-6 py-5 sm:py-20 sm:px-20 flex justify-center items-center overflow-x-hidden ">
      <div className="mx-auto max-w-[80vw]">
        <blockquote className="text-4xl font-black uppercase h-primary  leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl">
          <span className="mr-1">&ldquo;</span>
          <h2>
          The first time I crossed this road there wasn&apos;t even a proper
          road.
        </h2>
          <span>&rdquo;</span>
        </blockquote>

        <h3 className="mt-4 text-right text-base font-extrabold uppercase tracking-wide text-neutral-900 max-sm:hidden">
          — Vinod
        </h3>
      </div>
    </section>
  );
}