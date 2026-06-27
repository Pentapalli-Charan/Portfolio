"use client";

import { Briefcase, BookOpen, Calendar, Award } from "lucide-react";
import { internships, trainings } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function InternshipPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Experience" title="Internship & Training" subtitle="Hands-on professional experience and intensive technical training programs." />

        {/* Internship */}
        <div className="w-full flex flex-col items-center mb-20">
          <div className="w-full max-w-4xl">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center gap-3 mb-10 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-light)] text-[color:var(--accent)]"><Briefcase size={24} suppressHydrationWarning /></div>
                <h3 className="font-serif text-3xl font-bold text-[color:var(--text-primary)]">Internship</h3>
              </div>
            </ScrollReveal>

          {internships.map((intern) => (
            <ScrollReveal key={intern.id} delay={0.1}>
              <div className="premium-card mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[color:var(--text-primary)]">{intern.company}</h4>
                    <p className="text-sm font-medium text-[color:var(--accent)]">{intern.role} — {intern.type}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-muted)]"><Calendar size={12} suppressHydrationWarning />{intern.duration}</div>
                    {intern.certificate && <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--accent-light)] text-[color:var(--accent)]"><Award size={10} suppressHydrationWarning />Certificate</span>}
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-[color:var(--text-secondary)]">{intern.description}</p>
                <ul className="space-y-2 mb-4">
                  {intern.highlights.map((h, i) => (
                    <li key={i} className="text-sm leading-relaxed pl-4 relative text-[color:var(--text-secondary)]">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {intern.techStack.map((tech) => (<span key={tech} className="tech-badge">{tech}</span>))}
                </div>
              </div>
            </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center gap-3 mb-10 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--accent-light)] text-[color:var(--accent)]"><BookOpen size={24} suppressHydrationWarning /></div>
                <h3 className="font-serif text-3xl font-bold text-[color:var(--text-primary)]">Training</h3>
              </div>
            </ScrollReveal>

          {trainings.map((training) => (
            <ScrollReveal key={training.id} delay={0.1}>
              <div className="premium-card mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-[color:var(--text-primary)]">{training.title}</h4>
                    <p className="text-sm font-medium text-[color:var(--accent)]">{training.organization}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-[color:var(--text-muted)]"><Calendar size={12} suppressHydrationWarning />{training.duration}</div>
                    {training.certificate && <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-[var(--accent-light)] text-[color:var(--accent)]"><Award size={10} suppressHydrationWarning />Certificate</span>}
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-[color:var(--text-secondary)]">{training.description}</p>
                <ul className="space-y-2 mb-4">
                  {training.highlights.map((h, i) => (
                    <li key={i} className="text-sm leading-relaxed pl-4 relative text-[color:var(--text-secondary)]">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{h}
                    </li>
                  ))}
                </ul>
                {training.certificateUrl ? (
                  <a href={training.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl interactive mt-4 bg-[var(--accent-light)] text-[color:var(--accent)]">View Certificate</a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[var(--bg-secondary)] text-[color:var(--text-muted)]">📄 Certificate PDF — Coming Soon</span>
                )}
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
