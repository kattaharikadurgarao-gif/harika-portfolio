import React from "react";
import { profile } from "../mock";
import { Quote } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0E1B2C] text-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-4">01 — About</div>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            A builder who lives in the<br />
            <em className="text-[#C8893B] not-italic">cloud terminal</em>.
          </h2>
        </div>

        <div className="lg:col-span-8">
          <p className="text-lg text-[#D6DCE4] leading-relaxed mb-6">{profile.longBio}</p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="border-l-2 border-[#C8893B] pl-5">
              <div className="text-sm uppercase tracking-wider text-[#C8893B] mb-1">What I do</div>
              <p className="text-[#D6DCE4] text-sm leading-relaxed">
                Build and operate cloud-native systems. Containerise services with Docker,
                automate delivery via CI/CD, and administer ServiceNow ITSM platforms end-to-end.
              </p>
            </div>
            <div className="border-l-2 border-[#C8893B] pl-5">
              <div className="text-sm uppercase tracking-wider text-[#C8893B] mb-1">What I value</div>
              <p className="text-[#D6DCE4] text-sm leading-relaxed">
                Reliability, reproducibility and clean runbooks. If a deploy isn't boring,
                the pipeline still has work to do.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#16263B] border border-[#23344B] flex gap-4">
            <Quote className="w-8 h-8 text-[#C8893B] shrink-0" />
            <p className="text-[#D6DCE4] italic text-base leading-relaxed">
              “A good cloud engineer makes the deploy boring on purpose — that's where reliability lives.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
