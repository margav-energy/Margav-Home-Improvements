import React from "react";
import { motion } from "framer-motion";

const aboutBg = new URL("../assets/about-bg.png", import.meta.url).href;

export default function About() {
  return (
    <section
      id="about"
      className="relative mt-12 md:mt-16 h-[650px] w-full overflow-hidden"
    >
      {/* Background */}
      <img
        src={aboutBg}
        alt="Modern UK Home"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Softer overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-20">
        <div
          className="
      max-w-xl rounded-2xl
      border border-white/30
      bg-white/15
      backdrop-blur-xl
      p-10 md:p-14
      shadow-[0_20px_60px_rgba(0,0,0,0.4)]
    "
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#66cc66]">
            About Margav
          </p>

          <p className="mt-6 text-2xl md:text-3xl leading-relaxed font-medium text-white">
            Margav Home Improvements delivers complete property upgrades across
            roofing, windows, doors, insulation, groundworks, and landscaping.
            Every project is handled with precision, quality materials, and a
            commitment to long-lasting results.
          </p>

          <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99]" />
        </div>
      </div>
    </section>
  );
}
