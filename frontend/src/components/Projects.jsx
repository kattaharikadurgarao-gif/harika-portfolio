import React, { useState } from "react";
import { projects } from "../mock";
import { Github, ExternalLink, ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function Projects() {
  const [active, setActive] = useState(null);
  const project = projects.find((p) => p.id === active);

  return (
    <section id="projects" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#C8893B] mb-3">03 — Selected Work</div>
            <h2 className="font-display text-4xl lg:text-5xl text-[#0E1B2C] leading-tight">
              Projects that prove<br />the patterns work.
            </h2>
          </div>
          <p className="max-w-md text-[#3A4A60]">
            A curated set of recent builds in machine learning, computer vision and DevOps.
            Click any card to see the details, metrics and stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className="proj-card text-left bg-white border border-[#E7DFD2] rounded-2xl overflow-hidden hover:border-[#C8893B] hover:shadow-[0_20px_40px_-20px_rgba(14,27,44,0.25)] btn-trans group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0E1B2C]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="proj-img w-full h-full object-cover opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur text-[10px] font-mono uppercase tracking-wider text-[#0E1B2C]">
                  0{idx + 1} · {p.year}
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FAF7F2] grid place-items-center group-hover:bg-[#C8893B] group-hover:text-[#0E1B2C] btn-trans">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[#C8893B] mb-2">{p.category}</div>
                <h3 className="font-display text-2xl text-[#0E1B2C] mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-[#3A4A60] leading-relaxed mb-4">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F2E6D0] text-[#7A4F12]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl bg-[#FAF7F2] border-[#E7DFD2] p-0 overflow-hidden">
          {project && (
            <>
              <div className="relative h-64 bg-[#0E1B2C]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B2C] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-[#FAF7F2]">
                  <div className="text-xs uppercase tracking-wider text-[#E2CFA8]">{project.category}</div>
                  <DialogTitle className="font-display text-3xl mt-1 text-[#FAF7F2]">{project.title}</DialogTitle>
                </div>
              </div>
              <div className="p-6">
                <DialogHeader className="text-left mb-4">
                  <DialogDescription className="text-[#3A4A60] text-base leading-relaxed">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-white border border-[#E7DFD2] rounded-xl p-4">
                      <div className="text-xs uppercase tracking-wider text-[#5C6477]">{m.label}</div>
                      <div className="font-display text-2xl text-[#0E1B2C]">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-[#F2E6D0] text-[#7A4F12]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="bg-[#0E1B2C] hover:bg-[#C8893B] hover:text-[#0E1B2C] text-[#FAF7F2] btn-trans rounded-full">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Code
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-[#0E1B2C] text-[#0E1B2C] hover:bg-[#0E1B2C] hover:text-[#FAF7F2] btn-trans rounded-full bg-transparent">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
