import React from "react";
import { skills } from "../mock";
import { Cloud, Container, GitBranch, Server, Settings } from "lucide-react";

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

const focusCards = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    desc: "AWS & Azure fundamentals — compute, storage, IAM and networking basics applied to real workloads.",
  },
  {
    icon: Container,
    title: "Docker & Containers",
    desc: "Multi-stage Dockerfiles, container registries and lightweight images for fast, repeatable deploys.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "GitHub Actions workflows that lint, test, build and ship — with rollback and health checks.",
  },
  {
    icon: Settings,
    title: "ServiceNow Admin",
    desc: "ITSM workflows, business rules, ACLs and form customisation across dev/test instances.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">
              02 — Skills
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight">
              Built around the<br />
              <em className="text-[#C8893B] not-italic">cloud stack</em>.
            </h2>
          </div>
          <p className="max-w-md text-[#3A4A60]">
            My primary focus is Cloud, DevOps automation, and ServiceNow administration —
            backed by solid fundamentals in Linux, scripting and data tooling.
          </p>
        </div>

        {/* Focus area cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {focusCards.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[#E7DFD2] rounded-2xl p-6 hover:border-[#C8893B] hover:-translate-y-0.5 btn-trans"
              style={{ transition: "transform 0.25s ease, border-color 0.25s ease" }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#0E1B2C] text-[#C8893B] grid place-items-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-lg text-[#0E1B2C] mb-1.5">{c.title}</div>
              <p className="text-sm text-[#3A4A60] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-white border border-[#E7DFD2] rounded-2xl p-7 lg:col-span-1">
            <div className="font-mono text-xs text-[#C8893B] mb-5">// primary stack</div>
            <div className="space-y-5">
              {skills.primary.map((s) => (
                <Bar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E7DFD2] rounded-2xl p-7 lg:col-span-1">
            <div className="font-mono text-xs text-[#C8893B] mb-5">// supporting skills</div>
            <div className="space-y-5">
              {skills.secondary.map((s) => (
                <Bar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="bg-[#0E1B2C] text-[#FAF7F2] rounded-2xl p-7 lg:col-span-1">
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
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs text-[#D6DCE4] border border-[#23344B]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
