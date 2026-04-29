import React from "react";

const heroImage = new URL("../assets/hero.png", import.meta.url).href;

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Modern House"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Huge blended title */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1
          className="
            text-[18vw] font-extrabold uppercase leading-none tracking-tighter
            text-white/35 mix-blend-overlay
            select-none
          "
        >
          MARGAV
        </h1>
      </div>

      {/* Small left content like the reference */}
      <div className="absolute bottom-24 left-8 z-20 text-white md:left-20">
        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em]">
          Home Improvements
          <br />
          Built For Life
        </p>

        <p className="mt-6 max-w-xs text-sm md:text-base text-white/70">
          Modern design. Quality finishes. Reliable home improvement services.
        </p>

        <button className="mt-8 border-b border-white pb-2 text-sm font-semibold uppercase tracking-widest">
          Discover More
        </button>
      </div>
    </section>
  );
}
