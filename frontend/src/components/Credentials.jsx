import React from "react";
import { certifications, achievements } from "../mock";
import { Award, Trophy, BadgeCheck } from "lucide-react";

export default function Credentials() {
  return (
    <section className="py-24 bg-[#0E1B2C] text-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">06 — Credentials</div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Certifications &amp;<br />
              <em className="text-[#C8893B] not-italic">recognition</em>.
            </h2>
          </div>
          <p className="lg:col-span-7 text-[#D6DCE4] text-lg leading-relaxed">
            Validations that complement my coursework and personal projects — covering data analytics,
            ITSM administration and competitive coding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-[#16263B] border border-[#23344B] rounded-2xl p-7">
            <div className="flex items-center gap-2 text-[#C8893B] mb-5">
              <BadgeCheck className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Certifications</span>
            </div>
            <ul className="divide-y divide-[#23344B]">
              {certifications.map((c) => (
                <li key={c.id} className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-lg leading-snug">{c.name}</div>
                    <div className="text-sm text-[#A8B3C2] mt-0.5">{c.issuer}</div>
                  </div>
                  <span className="font-mono text-xs text-[#C8893B] bg-[#23344B] px-2 py-1 rounded">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#16263B] border border-[#23344B] rounded-2xl p-7">
            <div className="flex items-center gap-2 text-[#C8893B] mb-5">
              <Trophy className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Achievements</span>
            </div>
            <ul className="space-y-5">
              {achievements.map((a) => (
                <li key={a.id} className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#C8893B] text-[#0E1B2C] grid place-items-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-lg leading-snug">{a.title}</div>
                    <div className="text-sm text-[#A8B3C2] mt-0.5">{a.detail}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
