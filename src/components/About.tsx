import React from "react";
import { motion } from "framer-motion";

const aboutBg = new URL("../assets/about-bg.png", import.meta.url).href;

export default function About() {
  return (
    <section
      id="about"
      className="relative mt-12 h-[650px] w-full overflow-hidden md:mt-16"
    >
      <img
        src={aboutBg}
        alt="Modern UK Home"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="
            max-w-2xl rounded-3xl
            border border-white/30
            bg-white/15
            p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)]
            backdrop-blur-2xl
            md:p-12
          "
        >
          <h1 className="mb-5 text-3xl font-bold uppercase tracking-[0.3em] text-[#66cc66]">
            About Margav Home Improvements
          </h1>

          <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
            Margav Home Improvements provides full-scale home improvement
            services, covering roofing, windows, doors, insulation, groundworks,
            and landscaping. Every project is handled with precision, quality
            materials, and a commitment to long-lasting results.
          </p>

          <div className="mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99]" />
        </motion.div>
      </div>
    </section>
  );
}
