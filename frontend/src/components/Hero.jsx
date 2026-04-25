import React from "react";
import { profile, stats } from "../mock";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#F2DEC0] to-[#FAF7F2] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#E7DFD2] to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2E6D0] border border-[#E2CFA8] text-[#7A4F12] text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Open to entry-level Data / ML roles · 2026 grad
          </div>

          <h1 className="font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] text-[#0E1B2C] mb-6">
            Building <em className="text-[#C8893B] not-italic">data-driven</em> products,
            <br className="hidden sm:block" /> one model at a time.
          </h1>

          <p className="text-lg text-[#3A4A60] max-w-2xl mb-8 leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              onClick={() => scrollTo("projects")}
              className="bg-[#0E1B2C] hover:bg-[#1A2A3F] text-[#FAF7F2] btn-trans rounded-full h-12 px-6 text-sm font-medium"
            >
              View my work
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              className="border-[#0E1B2C] text-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-[#FAF7F2] btn-trans rounded-full h-12 px-6 text-sm font-medium bg-transparent"
            >
              Get in touch
            </Button>
          </div>

          <div className="flex items-center gap-5 text-[#3A4A60]">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[#C8893B] btn-trans" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#C8893B] btn-trans" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-[#C8893B] btn-trans" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4" /> {profile.location}
            </span>
          </div>
        </div>

        {/* Portrait card */}
        <div className="lg:col-span-5">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#C8893B] to-[#0E1B2C] opacity-20 blur-xl" />
            <div className="relative rounded-[24px] overflow-hidden border border-[#E7DFD2] bg-white shadow-[0_30px_60px_-30px_rgba(14,27,44,0.35)]">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0E1B2C]/85 backdrop-blur text-[#FAF7F2] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-display text-lg leading-none">{profile.name}</div>
                  <div className="text-xs text-[#D9C9A8] mt-1">{profile.title}</div>
                </div>
                <span className="flex items-center gap-1.5 text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#9BD89B] animate-pulse" />
                  Available
                </span>
              </div>
            </div>
            <div className="floaty absolute -right-6 -top-6 hidden md:block bg-white border border-[#E7DFD2] rounded-2xl px-4 py-3 shadow-lg">
              <div className="text-xs text-[#5C6477]">Best model</div>
              <div className="font-display text-2xl text-[#0E1B2C]">95%<span className="text-[#C8893B]">.</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E7DFD2] rounded-2xl overflow-hidden border border-[#E7DFD2]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#FAF7F2] px-6 py-6">
              <div className="font-display text-3xl text-[#0E1B2C]">
                {s.value}
                <span className="text-[#C8893B]">{s.suffix}</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-[#5C6477] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
