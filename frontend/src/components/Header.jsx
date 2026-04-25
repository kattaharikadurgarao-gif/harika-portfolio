import React, { useEffect, useState } from "react";
import { navLinks, profile } from "../mock";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF7F2]/85 backdrop-blur-md border-b border-[#E7DFD2]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav("top")}
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="w-9 h-9 rounded-full bg-[#0E1B2C] text-[#FAF7F2] grid place-items-center font-display font-semibold text-sm group-hover:bg-[#C8893B] transition-colors">
            HK
          </span>
          <span className="font-display text-lg text-[#0E1B2C] hidden sm:block">
            Harika <span className="text-[#C8893B]">Katta</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="text-sm font-medium text-[#1A2A3F] hover:text-[#C8893B] btn-trans link-underline"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button
            onClick={() => handleNav("contact")}
            className="bg-[#0E1B2C] text-[#FAF7F2] hover:bg-[#C8893B] hover:text-[#0E1B2C] btn-trans rounded-full px-5 h-10"
          >
            Hire me <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center text-[#0E1B2C]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E7DFD2]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-left py-2 text-[#1A2A3F] font-medium"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => handleNav("contact")}
              className="mt-2 bg-[#0E1B2C] text-[#FAF7F2] hover:bg-[#C8893B] hover:text-[#0E1B2C] rounded-full"
            >
              Hire me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
