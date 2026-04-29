import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">Margav Home Improvements</h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Complete home improvements across Staffordshire — roofing,
              windows, doors, insulation, groundworks and landscaping.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Services
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>Roofing</li>
              <li>Windows</li>
              <li>Doors</li>
              <li>Insulation</li>
              <li>Groundworks</li>
              <li>Landscaping</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Company
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Contact
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                Unit 7-8, Kimberley Business Park, Kimberley Way, Rugeley WS15
                1RE
              </li>
              <li>
                <a href="tel:YOUR_NUMBER" className="hover:text-white">
                  01889 256069
                </a>
              </li>
              <li>
                <a
                  href="mailto:enquiries@margav.energy"
                  className="hover:text-white"
                >
                  enquiries@margav.energy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-[1px] w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Margav Home Improvements</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-6 text-center text-xs leading-6 text-white/40">
          <p>
            Margav Home Improvements is a trading style of Margav Renewables Ltd
          </p>
          <p>
            Margav Renewables Ltd | Company Number: 12580649 | Registered in
            England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
