"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Calendar, Wrench, Lightbulb } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ProjectsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Projects" title="What I've Built" subtitle="Each project represents a unique challenge — and a step forward in my engineering journey." />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <div className="premium-card">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-72 h-48 lg:h-auto rounded-2xl flex-shrink-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--bg-secondary),var(--accent-light))] border border-[var(--border)]">
                    <div className="text-center p-6">
                      <span className="font-serif text-4xl font-bold text-[color:var(--accent)]">0{i + 1}</span>
                      <p className="text-xs mt-2 font-medium uppercase tracking-wider text-[color:var(--text-muted)]">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[color:var(--text-primary)]">{project.title}</h3>
                        <p className="text-base font-medium mt-1 text-[color:var(--accent)]">{project.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs flex-shrink-0 text-[color:var(--text-muted)]">
                        <Calendar size={12} suppressHydrationWarning />{project.date}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-4 text-[color:var(--text-secondary)]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (<span key={tech} className="tech-badge">{tech}</span>))}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl interactive bg-[var(--text-primary)] text-[color:var(--bg-primary)]">
                        <GithubIcon size={18} />GitHub
                      </a>
                      <button onClick={() => setExpandedId(expandedId === project.id ? null : project.id)} className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl interactive bg-transparent text-[color:var(--text-primary)] border-2 border-[var(--border)]">
                        {expandedId === project.id ? "Show Less" : "View Details"}
                        {expandedId === project.id ? <ChevronUp size={14} suppressHydrationWarning /> : <ChevronDown size={14} suppressHydrationWarning />}
                      </button>
                    </div>
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                          <div className="pt-4 border-t border-[var(--border)]">
                            <p className="text-sm leading-relaxed mb-6 text-[color:var(--text-secondary)]">{project.longDescription}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <div className="flex items-center gap-2 mb-3"><Wrench size={16} className="text-[color:var(--accent)]" suppressHydrationWarning /><h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--text-primary)]">Challenges</h4></div>
                                <ul className="space-y-2">{project.challenges.map((c, j) => (<li key={j} className="text-sm leading-relaxed pl-4 relative text-[color:var(--text-secondary)]"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{c}</li>))}</ul>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-3"><Lightbulb size={16} className="text-[color:var(--accent)]" suppressHydrationWarning /><h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--text-primary)]">Solutions</h4></div>
                                <ul className="space-y-2">{project.solutions.map((s, j) => (<li key={j} className="text-sm leading-relaxed pl-4 relative text-[color:var(--text-secondary)]"><span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{s}</li>))}</ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
