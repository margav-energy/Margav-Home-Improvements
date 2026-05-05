import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roofingImg = new URL("../assets/roofing.png", import.meta.url).href;
const windowsImg = new URL("../assets/windows.png", import.meta.url).href;
const doorsImg = new URL("../assets/doors.png", import.meta.url).href;
const insulationImg = new URL("../assets/insulation.png", import.meta.url).href;
const groundworksImg = new URL("../assets/groundworks.png", import.meta.url)
  .href;
const landscapingImg = new URL("../assets/landscaping.png", import.meta.url)
  .href;

const services = [
  {
    title: "Roofing",
    image: roofingImg,
    description:
      "Roof replacement & repairs, fascias, soffits, and guttering; protecting your home from the elements while improving durability and reducing long-term maintenance costs.",
  },
  {
    title: "Windows",
    image: windowsImg,
    description:
      "A-rated double and triple glazing with uPVC, aluminium, and timber frame options; designed to improve energy efficiency, reduce heat loss, and help lower your energy bills.",
  },
  {
    title: "Doors",
    image: doorsImg,
    description:
      "Secure composite front doors, bi-fold doors, sliding doors and French doors expertly fitted.",
  },
  {
    title: "Insulation",
    image: insulationImg,
    description:
      "Loft and cavity wall insulation to reduce bills and improve your property’s EPC rating.",
  },
  {
    title: "Groundworks",
    image: groundworksImg,
    description:
      "Driveways, block paving, drainage, foundations and excavation with a clean professional finish.",
  },
  {
    title: "Landscaping",
    image: landscapingImg,
    description:
      "Patios, decking, fencing, turfing and garden design to transform your outdoor space.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="bg-white px-6 py-24 text-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left services list */}
          <div>
            <p className="mb-16 text-3xl md:text-6xl font-extrabold uppercase tracking-tight text-[#3333cc]">
              Services
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={`group block text-left text-2xl md:text-3xl font-semibold uppercase transition-all duration-300 ${
                    activeIndex === index
                      ? "translate-x-4 text-[#3333cc]"
                      : "text-neutral-400 hover:translate-x-2 hover:text-neutral-700"
                  }`}
                >
                  <span
                    className={`mr-3 inline-block transition-all duration-300 ${
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right image/content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, x: 40, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-[460px] w-full object-cover"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                <div className="mt-8">
                  <h2 className="text-4xl font-extrabold uppercase leading-tight text-[#3333cc]">
                    {activeService.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-lg leading-8 text-[#3333cc]">
                    {activeService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}