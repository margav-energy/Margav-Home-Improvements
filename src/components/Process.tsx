import React from "react";
import { motion } from "framer-motion";
import { Search, FileCheck, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Free Survey",
    text: "We assess your property, take measurements and discuss the best options for your project.",
  },
  {
    icon: FileCheck,
    title: "Fixed Quote",
    text: "You receive clear pricing, realistic timescales and a written quote before work begins.",
  },
  {
    icon: Hammer,
    title: "Installation",
    text: "The work is completed safely, cleanly and with attention to detail from start to finish.",
  },
  {
    icon: CheckCircle,
    title: "Final Check",
    text: "We inspect the finish, tidy the site and make sure everything meets Margav standards.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#000000cc] px-6 py-24 text-white mt-16 md:mt-24"
    >
      <h2 className="pointer-events-none absolute -top-8 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-white/5">
        Process
      </h2>

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#3333cc]/30 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-[#00cc99]/20 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#66cc66]">
            Our Process
          </p>

          <h3 className="max-w-xl text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
            Simple from
            <span className="block bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99] bg-clip-text text-transparent">
              survey to finish.
            </span>
          </h3>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/65">
            A clear, organised approach that keeps your project moving smoothly
            from the first visit to the final check.
          </p>
        </div>

        {/* Right icon cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative min-h-[230px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#3333cc]/60 hover:bg-white/[0.1]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#3333cc]/30 blur-3xl transition duration-500 group-hover:bg-[#00cc99]/30" />

                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                  <Icon className="h-7 w-7 text-[#66cc66]" />
                </div>

                <p className="relative text-sm font-bold text-white/35">
                  0{index + 1}
                </p>

                <h4 className="relative mt-3 text-2xl font-bold tracking-tight">
                  {step.title}
                </h4>

                <p className="relative mt-4 text-sm leading-7 text-white/60">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
