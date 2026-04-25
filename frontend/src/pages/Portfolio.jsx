import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ExperienceEducation from "../components/ExperienceEducation";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const marqueeWords = [
  "Python", "Machine Learning", "Deep Learning", "Scikit-learn", "PyTorch",
  "OpenCV", "Docker", "CI/CD", "SQL", "Power BI", "Data Analytics", "Cloud",
];

export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Header />
      <main>
        <Hero />

        {/* Marquee strip */}
        <div className="border-y border-[#E7DFD2] bg-[#F2E6D0] overflow-hidden py-4">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span
                key={i}
                className="font-display text-2xl text-[#0E1B2C] flex items-center gap-12"
              >
                {w}
                <span className="text-[#C8893B]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="reveal"><About /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><ExperienceEducation /></div>
        <div className="reveal"><Credentials /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
