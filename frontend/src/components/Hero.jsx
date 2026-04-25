import React from "react";
import { profile, stats } from "../mock";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Cloud,
  GitBranch,
  Container,
  Server,
  Workflow,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative pt-28 lg:pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#F2DEC0] to-[#FAF7F2] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#E7DFD2] to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2E6D0] border border-[#E2CFA8] text-[#7A4F12] text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Open to entry-level Cloud / DevOps / ServiceNow roles · 2026 grad
          </div>

          <h1 className="font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] text-[#0E1B2C] mb-6">
            Automating the <em className="text-[#C8893B] not-italic">cloud</em>,
            <br className="hidden sm:block" /> one pipeline at a time.
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

        {/* RIGHT: Terminal + cloud architecture card */}
        <div className="lg:col-span-5">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#C8893B] to-[#0E1B2C] opacity-15 blur-xl" />

            {/* Terminal window */}
            <div className="relative rounded-[20px] overflow-hidden border border-[#23344B] bg-[#0E1B2C] shadow-[0_30px_60px_-30px_rgba(14,27,44,0.5)]">
              <div className="flex items-center justify-between px-4 py-3 bg-[#16263B] border-b border-[#23344B]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex items-center gap-1.5 text-[#A8B3C2] text-[11px] font-mono">
                  <Terminal className="w-3 h-3" />
                  harika@cloud:~
                </div>
                <div className="w-10" />
              </div>

              <div className="p-5 font-mono text-[13px] leading-relaxed text-[#D6DCE4] space-y-1.5">
                <div><span className="text-[#C8893B]">$</span> whoami</div>
                <div className="text-[#9BD89B]">→ harika · cloud + devops engineer</div>
                <div className="pt-2"><span className="text-[#C8893B]">$</span> stack --primary</div>
                <div className="text-[#A8B3C2]">→ aws · docker · ci/cd · servicenow</div>
                <div className="pt-2"><span className="text-[#C8893B]">$</span> deploy --env=prod</div>
                <div className="text-[#9BD89B]">✓ build · test · push · release</div>
                <div className="text-[#9BD89B]">✓ deploy completed in 1m 47s</div>
                <div className="pt-2 flex items-center gap-1">
                  <span className="text-[#C8893B]">$</span>
                  <span className="inline-block w-2 h-4 bg-[#C8893B] animate-pulse" />
                </div>
              </div>

              {/* Architecture row */}
              <div className="px-5 pb-5">
                <div className="rounded-xl bg-[#16263B] border border-[#23344B] p-4">
                  <div className="text-[10px] uppercase tracking-wider text-[#A8B3C2] mb-3 font-mono">
                    // pipeline
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[#FAF7F2]">
                    <Node icon={GitBranch} label="Git" />
                    <Dash />
                    <Node icon={Container} label="Docker" />
                    <Dash />
                    <Node icon={Workflow} label="CI/CD" />
                    <Dash />
                    <Node icon={Cloud} label="Cloud" highlight />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="floaty absolute -right-6 -top-6 hidden md:block bg-white border border-[#E7DFD2] rounded-2xl px-4 py-3 shadow-lg">
              <div className="text-xs text-[#5C6477]">Deploy time</div>
              <div className="font-display text-2xl text-[#0E1B2C]">~2<span className="text-[#C8893B]">min</span></div>
            </div>

            {/* Status pill */}
            <div className="absolute -left-4 -bottom-5 hidden md:flex items-center gap-2 bg-white border border-[#E7DFD2] rounded-full pl-2 pr-4 py-2 shadow-lg">
              <span className="w-7 h-7 rounded-full bg-[#0E1B2C] grid place-items-center">
                <Server className="w-3.5 h-3.5 text-[#C8893B]" />
              </span>
              <div className="text-xs">
                <div className="text-[#5C6477] leading-none">status</div>
                <div className="text-[#0E1B2C] font-medium leading-tight flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
                  Available for hire
                </div>
              </div>
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

function Node({ icon: Icon, label, highlight }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-10 h-10 rounded-lg grid place-items-center border ${
          highlight
            ? "bg-[#C8893B] border-[#C8893B] text-[#0E1B2C]"
            : "bg-[#0E1B2C] border-[#23344B] text-[#C8893B]"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <span className="text-[10px] font-mono text-[#A8B3C2]">{label}</span>
    </div>
  );
}

function Dash() {
  return <span className="flex-1 h-px bg-[#23344B] relative top-[-9px]" />;
}
