// import React from "react";
// import { motion } from "framer-motion";

// const reasons = [
//   {
//     title: "Complete Home Upgrades",
//     text: "Roofing, windows, doors, insulation, groundworks and landscaping delivered under one roof.",
//   },
//   {
//     title: "Built Around Quality",
//     text: "Premium materials, careful installation, and finishes designed to last.",
//   },
//   {
//     title: "Clear From Day One",
//     text: "Straightforward quotes, clear timelines, and no confusing handovers.",
//   },
//   {
//     title: "Local Staffordshire Team",
//     text: "Rugeley-based and working across Cannock, Lichfield, Stafford, Burntwood and nearby areas.",
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section
//       id="why-choose"
//       className="relative overflow-hidden bg-[#000000cc] px-6 py-28 text-white"
//     >
//       {/* Huge background word */}
//       <h2 className="pointer-events-none absolute -top-8 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-white/5">
//         Why
//       </h2>

//       {/* Gradient glow */}
//       <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#3333cc]/30 blur-[140px]" />
//       <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#00cc99]/20 blur-[130px]" />

//       <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
//         {/* Left */}
//         <div className="lg:sticky lg:top-28 lg:h-fit">
//           <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#66cc66]">
//             Why Choose Margav
//           </p>

//           <h3 className="max-w-xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
//             Not just home improvement.
//             <span className="block bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99] bg-clip-text text-transparent">
//               A better way to build.
//             </span>
//           </h3>

//           <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
//             A polished, dependable approach to upgrading your property — from
//             the first quote to the final finish.
//           </p>
//         </div>

//         {/* Right */}
//         <div className="space-y-5">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={reason.title}
//               initial={{ opacity: 0, y: 35 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.55, delay: index * 0.08 }}
//               className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#33cc66]/50 hover:bg-white/[0.1]"
//             >
//               <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#66cc66] via-[#33cc66] to-[#00cc99] opacity-70" />

//               <span className="text-sm font-bold text-[#66cc66]">
//                 0{index + 1}
//               </span>

//               <h4 className="mt-6 text-2xl font-bold tracking-tight md:text-3xl">
//                 {reason.title}
//               </h4>

//               <p className="mt-4 max-w-xl leading-7 text-white/60">
//                 {reason.text}
//               </p>

//               <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Home, ShieldCheck, FileText, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "Complete Upgrades",
    text: "Roofing, windows, doors, insulation, groundworks and landscaping handled under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    text: "Reliable workmanship, quality materials and finishes designed to last.",
  },
  {
    icon: FileText,
    title: "Clear Quotes",
    text: "Straightforward pricing, clear timelines and no hidden costs.",
  },
  {
    icon: MapPin,
    title: "Local Team",
    text: "Rugeley-based and serving Staffordshire and surrounding areas.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#000000cc] px-6 py-24 text-white"
    >
      {/* Background word */}
      <h2 className="pointer-events-none absolute -top-8 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-white/5">
        Why
      </h2>

      {/* Gradient glows */}
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#3333cc]/30 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#00cc99]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#66cc66]">
            Why Choose Margav
          </p>

          <h3 className="max-w-xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
            More than home improvement.
            <span className="block bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99] bg-clip-text text-transparent">
              A smarter way to build.
            </span>
          </h3>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
            A structured, well-managed approach that keeps your project running
            smoothly from the initial visit through to the final handover.
          </p>
        </div>

        {/* Right icon cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative min-h-[230px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#3333cc]/60 hover:bg-white/[0.1]"
              >
                {/* Animated soft glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3333cc]/30 blur-3xl transition duration-500 group-hover:bg-[#00cc99]/30" />

                {/* Icon */}
                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Icon className="h-7 w-7 text-[#66cc66]" />
                </div>

                <p className="relative text-sm font-bold text-white/35">
                  0{index + 1}
                </p>

                <h4 className="relative mt-3 text-2xl font-bold tracking-tight">
                  {reason.title}
                </h4>

                <p className="relative mt-4 text-sm leading-7 text-white/60">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}