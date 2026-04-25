import React from "react";
import { skills } from "../mock";

function Bar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-[#0E1B2C]">{name}</span>
        <span className="text-[#5C6477] font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#EFE7D8] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0E1B2C] to-[#C8893B] rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">02 — Skills</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight">
              Tools I use<br />to ship reliable work.
            </h2>
          </div>
          <p className="max-w-md text-[#3A4A60]">
            A practical mix of programming fundamentals, ML / DL frameworks, and modern
            developer tooling — picked up through coursework, internships, and personal projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E7DFD2] rounded-2xl p-7">
            <div className="font-mono text-xs text-[#C8893B] mb-5">// languages</div>
            <div className="space-y-5">
              {skills.languages.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>

          <div className="bg-white border border-[#E7DFD2] rounded-2xl p-7">
            <div className="font-mono text-xs text-[#C8893B] mb-5">// core areas</div>
            <div className="space-y-5">
              {skills.core.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>

          <div className="bg-[#0E1B2C] text-[#FAF7F2] rounded-2xl p-7">
            <div className="font-mono text-xs text-[#C8893B] mb-5">// tools &amp; libraries</div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs bg-[#16263B] border border-[#23344B] hover:bg-[#C8893B] hover:text-[#0E1B2C] hover:border-[#C8893B] btn-trans cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-[#23344B]">
              <div className="font-mono text-xs text-[#C8893B] mb-3">// soft skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs text-[#D6DCE4] border border-[#23344B]">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
