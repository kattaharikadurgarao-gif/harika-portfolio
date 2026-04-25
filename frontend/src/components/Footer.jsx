import React from "react";
import { profile, navLinks } from "../mock";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const handle = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-[#0E1B2C] text-[#FAF7F2] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 pb-10 border-b border-[#23344B]">
          <div className="lg:col-span-5">
            <div className="font-display text-4xl leading-tight mb-3">
              Let's work together.
            </div>
            <p className="text-[#A8B3C2] max-w-md">
              Currently open to entry-level Cloud / DevOps and ServiceNow Administrator roles.
              Available remotely or on-site across India.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 mt-6 text-[#C8893B] hover:text-[#FAF7F2] btn-trans link-underline"
            >
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-4">Navigate</div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => handle(l.id)} className="text-[#D6DCE4] hover:text-[#C8893B] btn-trans">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-4">Elsewhere</div>
            <div className="flex gap-3 mb-6">
              <a href={profile.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#23344B] grid place-items-center hover:bg-[#C8893B] hover:text-[#0E1B2C] hover:border-[#C8893B] btn-trans"><Github className="w-4 h-4" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[#23344B] grid place-items-center hover:bg-[#C8893B] hover:text-[#0E1B2C] hover:border-[#C8893B] btn-trans"><Linkedin className="w-4 h-4" /></a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm border border-[#23344B] rounded-full px-4 h-10 hover:bg-[#FAF7F2] hover:text-[#0E1B2C] btn-trans"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#A8B3C2]">
          <div>© {new Date().getFullYear()} Harika Katta. Crafted with care.</div>
          <div className="font-mono">v1.0 · built with React + Tailwind</div>
        </div>
      </div>
    </footer>
  );
}
