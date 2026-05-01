import React from "react";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

const logo = new URL("../assets/logo.svg", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="bg-[#24262a] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Brand / Contact */}
          <div>
            <img
              src={logo}
              alt="Margav Home Improvements logo"
              className="h-16 w-auto object-contain"
            />

            <p className="mt-10 max-w-md text-sm leading-7 text-white/70">
              Complete home improvements across Staffordshire — roofing,
              windows, doors, insulation, groundworks and landscaping.
            </p>

            <ul className="mt-8 space-y-5 text-sm text-white/80">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#3333cc]" />
                <span>
                  Unit 7-8, Kimberley Business Park, Kimberley Way, Rugeley WS15
                  1RE
                </span>
              </li>

              <li className="flex gap-4">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#3333cc]" />
                <a href="tel:01889256069" className="hover:text-white">
                  01889 256069
                </a>
              </li>

              <li className="flex gap-4">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#3333cc]" />
                <a
                  href="mailto:enquiries@margav.energy"
                  className="hover:text-white"
                >
                  enquiries@margav.energy
                </a>
              </li>

              <li className="flex gap-4">
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#3333cc]" />
                <span>Trusted home improvement specialists</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold">Stay Updated</h3>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Subscribe to our newsletter for home improvement tips, project
              updates and seasonal advice.
            </p>

            <form className="mt-6 space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#3333cc]"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-[#3333cc] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#00cc99]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-[1px] w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-8 flex flex-col justify-between gap-6 text-sm text-white/50 md:flex-row">
          <div>
            <p>
              © {new Date().getFullYear()} Margav Home Improvements. All rights
              reserved.
            </p>

            <div className="mt-3 text-xs leading-5 text-white/40">
              <p>
                Margav Home Improvements is a trading style of Margav Renewables
                Ltd
              </p>
              <p>
                Margav Renewables Ltd | Company Number: 12580649 | Registered in
                England & Wales
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
