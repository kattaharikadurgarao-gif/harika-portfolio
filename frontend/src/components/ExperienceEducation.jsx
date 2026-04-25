import React from "react";
import { experience, education } from "../mock";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <>
      <section id="experience" className="py-24 bg-[#F4ECDC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">04 — Experience</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight">Where I've worked.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-[#D9C9A8]" />
            {experience.map((e) => (
              <div key={e.id} className="relative pl-12 sm:pl-16 mb-10 last:mb-0">
                <div className="absolute left-0 sm:left-2 top-1 w-9 h-9 rounded-full bg-[#0E1B2C] text-[#FAF7F2] grid place-items-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#E7DFD2] rounded-2xl p-6 lg:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl text-[#0E1B2C]">{e.role}</h3>
                    <span className="text-xs font-mono text-[#7A4F12] bg-[#F2E6D0] px-2.5 py-1 rounded-full">{e.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[#5C6477] mb-4">
                    <span className="font-medium text-[#1A2A3F]">{e.company}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {e.location}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {e.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-[#3A4A60] text-[15px] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C8893B] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E1B2C] text-[#FAF7F2]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">05 — Education</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight">Academic foundation.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {education.map((ed) => (
              <div key={ed.id} className="bg-white border border-[#E7DFD2] rounded-2xl p-6 hover:border-[#C8893B] btn-trans">
                <div className="w-10 h-10 rounded-full bg-[#F2E6D0] text-[#7A4F12] grid place-items-center mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-[#5C6477] mb-2">{ed.period}</div>
                <h3 className="font-display text-xl text-[#0E1B2C] leading-snug mb-1">{ed.school}</h3>
                <div className="text-sm text-[#3A4A60] mb-3">{ed.degree}</div>
                <div className="flex items-center justify-between pt-3 border-t border-[#EFE7D8]">
                  <span className="text-sm font-mono text-[#0E1B2C]">{ed.score}</span>
                  <span className="text-xs text-[#5C6477]">{ed.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
