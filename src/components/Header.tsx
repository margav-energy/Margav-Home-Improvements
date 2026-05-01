import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const logo = new URL("../assets/logo.svg", import.meta.url).href;

export default function Header() {
  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "services", label: "SERVICES" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(link.id);
          return;
        }
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-200">
      {/* Main container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Margav logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveSection(link.id)}
              className={
                activeSection === link.id
                  ? "text-white bg-gradient-to-r from-[#66cc66] via-[#33cc66] to-[#00cc99] px-4 py-2 rounded-full shadow-sm"
                  : "text-neutral-700 hover:text-[#3333cc]"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <a
            href="tel:YOUR_NUMBER"
            className="hidden lg:flex items-center gap-2 text-sm text-neutral-700 hover:text-[#3333cc] transition"
          >
            <Phone className="w-4 h-4 text-[#3333cc]" />
            <span className="font-medium">01889 256069</span>
          </a>

          {/* CTA */}
          <button className="hidden sm:inline-flex bg-[#3333cc] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2a2aa8] transition">
            GET A QUOTE
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden w-10 h-10 rounded-full border border-neutral-300 text-neutral-800 flex items-center justify-center"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={
                  activeSection === link.id
                    ? "block text-[#3333cc] font-semibold text-lg"
                    : "block text-neutral-700 text-lg"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
