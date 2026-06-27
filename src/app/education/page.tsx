"use client";

import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { education } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function EducationPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Education" title="Academic Background" subtitle="A strong academic foundation across institutions that shaped my engineering mindset." />

        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-3xl space-y-8">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.id} delay={i * 0.15}>
                <div className="premium-card">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Score badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--accent-light),var(--accent-glow))] border border-[var(--accent)]">
                        <span className="font-serif text-2xl font-bold text-[color:var(--accent)]">
                          <AnimatedCounter value={edu.scoreValue} decimals={edu.scoreType === "CGPA" ? 2 : 1} />
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[color:var(--accent)]">
                          {edu.scoreType === "CGPA" ? "CGPA" : "%"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold mb-1 text-[color:var(--text-primary)]">{edu.institution}</h3>
                      <p className="text-sm font-medium mb-3 text-[color:var(--accent)]">
                        {edu.degree}{edu.field ? ` — ${edu.field}` : ""}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[color:var(--text-muted)]">
                        <span className="flex items-center gap-1"><Calendar size={12} suppressHydrationWarning />{edu.duration}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} suppressHydrationWarning />{edu.location}</span>
                        <span className="flex items-center gap-1"><Award size={12} suppressHydrationWarning />{edu.scoreType}: {edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
