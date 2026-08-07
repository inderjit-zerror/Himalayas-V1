"use client";

export default function PullQuote() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 ">
      <div className="mx-auto max-w-5xl">
        <blockquote className="text-4xl font-black uppercase h-primary  leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl">
          <span className="mr-1">&ldquo;</span>
          The first time I crossed this road there wasn&apos;t even a proper
          road.
          <span>&rdquo;</span>
        </blockquote>

        <p className="mt-4 text-right text-base font-extrabold uppercase tracking-wide text-neutral-900">
          — Vinod
        </p>
      </div>
    </section>
  );
}