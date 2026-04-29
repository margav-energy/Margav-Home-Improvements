import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const project1 = new URL("../assets/project-1.png", import.meta.url).href;
const project2 = new URL("../assets/project-2.png", import.meta.url).href;
const project3 = new URL("../assets/project-3.png", import.meta.url).href;
const project4 = new URL("../assets/project-4.png", import.meta.url).href;
const project5 = new URL("../assets/project-5.png", import.meta.url).href;
const project6 = new URL("../assets/project-6.png", import.meta.url).href;

const projects = [
  { title: "Roofing", image: project1 },
  { title: "Windows", image: project2 },
  { title: "Doors", image: project3 },
  { title: "Insulation", image: project4 },
  { title: "Groundworks", image: project5 },
  { title: "Landscaping", image: project6 },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-28 text-[#3333cc]"
    >
      {/* Background word */}
      <h2 className="pointer-events-none absolute -top-6 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-[#3333cc]/5">
        Projects
      </h2>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left text */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#3333cc]">
            Recent Work
          </p>

          <h3 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Our Recent
            <span className="block">Projects</span>
          </h3>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#3333cc]/70">
            Explore our transformation gallery, showcasing real projects across
            roofing, windows, doors, insulation, groundworks, and landscaping
            throughout Staffordshire.
          </p>
        </div>

        {/* Right gallery */}
        <div className="grid auto-rows-[220px] grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.title}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`
                group relative overflow-hidden rounded-xl text-left
                shadow-[0_20px_60px_rgba(51,51,204,0.15)]
                ${index === 1 ? "row-span-2" : ""}
                ${index === 4 ? "col-span-2" : ""}
              `}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Margav Project
                </p>
                <h4 className="mt-1 text-2xl font-bold">{project.title}</h4>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <motion.div
              key={projects[activeIndex].image}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-6xl"
            >
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="max-h-[78vh] w-full rounded-2xl object-contain"
              />

              <div className="mt-5 text-center text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                  Margav Project
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  {projects[activeIndex].title}
                </h3>
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
