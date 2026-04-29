import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-6 py-28 text-neutral-950"
    >
      {/* Huge background text */}
      <h2 className="pointer-events-none absolute -top-6 left-4 text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-[#3333cc]/5">
        Contact
      </h2>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#3333cc]">
            Get a Quote
          </p>

          <h3 className="text-6xl font-extrabold uppercase leading-none tracking-tight md:text-8xl">
            Speak with
            <br />
            our team
          </h3>

          <div className="mt-16 space-y-3 text-lg">
            <p>Rugeley, Staffordshire</p>
            <p>
              <a href="tel:YOUR_NUMBER" className="hover:text-[#3333cc]">
                01889 256069
              </a>
            </p>
            <p>
              <a
                href="mailto:enquiries@margav.energy"
                className="hover:text-[#3333cc]"
              >
                enquiries@margav.energy
              </a>
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="grid gap-8 md:grid-cols-2">
          <input
            type="text"
            placeholder="FIRST NAME"
            className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
          />

          <input
            type="text"
            placeholder="LAST NAME"
            className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
          />

          <input
            type="email"
            placeholder="EMAIL"
            className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
          />

          <input
            type="tel"
            placeholder="PHONE"
            className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
          />

          <select className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]">
            <option>INQUIRY TYPE</option>
            <option>Roofing</option>
            <option>Windows</option>
            <option>Doors</option>
            <option>Insulation</option>
            <option>Groundworks</option>
            <option>Landscaping</option>
          </select>

          <select className="border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]">
            <option>ESTIMATED BUDGET</option>
            <option>Under £1,000</option>
            <option>£1,000 - £5,000</option>
            <option>£5,000 - £10,000</option>
            <option>£10,000+</option>
          </select>

          <textarea
            placeholder="YOUR MESSAGE"
            rows={4}
            className="md:col-span-2 border-b border-neutral-300 bg-transparent py-4 text-sm font-semibold outline-none transition focus:border-[#3333cc]"
          />

          <button
            type="submit"
            className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#3333cc] px-8 py-4 text-sm font-bold uppercase text-white transition hover:bg-[#00cc99]"
          >
            <span className="h-3 w-3 rounded-full bg-white" />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
