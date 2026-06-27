"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Filter, Star, Code, Shield, Trophy } from "lucide-react";
import { certificates, achievements } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Card3DTilt from "@/components/shared/Card3DTilt";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const iconMap: Record<string, React.ReactNode> = {
  star: <Star size={28} suppressHydrationWarning />,
  code: <Code size={28} suppressHydrationWarning />,
  shield: <Shield size={28} suppressHydrationWarning />,
};

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(certificates.map((c) => c.organization)))];
  const filtered = activeFilter === "All" ? certificates : certificates.filter((c) => c.organization === activeFilter);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Certifications" title="Credentials & Certificates" subtitle="Validated skills and knowledge through industry-recognized certification programs." />

        {/* Filter tabs */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all interactive border ${activeFilter === cat ? "bg-[var(--text-primary)] text-[color:var(--bg-primary)] border-[var(--text-primary)]" : "bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border-[var(--border)]"}`}>
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Certificate grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, i) => (
            <motion.div key={cert.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Card3DTilt maxTilt={6}>
                <div className="premium-card h-full flex flex-col">
                  {/* Icon area */}
                  <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center bg-[var(--accent-light)] text-[color:var(--accent)]">
                    <Award size={24} suppressHydrationWarning />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1 text-[color:var(--text-primary)]">{cert.title}</h3>
                  <p className="text-sm font-medium mb-2 text-[color:var(--accent)]">{cert.organization}</p>
                  <div className="flex items-center gap-1.5 text-xs mb-4 text-[color:var(--text-muted)]"><Calendar size={12} suppressHydrationWarning />{cert.date}</div>
                  <span className="tech-badge self-start mb-4">{cert.category}</span>
                  <div className="mt-auto">
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl w-full interactive bg-[var(--text-primary)] text-[color:var(--bg-primary)]">
                      <ExternalLink size={18} suppressHydrationWarning />Verify Certificate
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── ACHIEVEMENTS SECTION ─── */}
        <div className="mt-32">
          <SectionHeading label="Achievements" title="Milestones & Awards" subtitle="Recognition of skills, consistency, and competitive spirit across platforms." />
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              {achievements.map((ach, i) => (
              <ScrollReveal key={ach.id} delay={i * 0.15}>
                <Card3DTilt maxTilt={6}>
                  <div className="premium-card h-full text-center p-8">
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[var(--accent-light)] text-[color:var(--accent)]">
                      {iconMap[ach.icon] || <Trophy size={28} suppressHydrationWarning />}
                    </div>
                    {ach.metricValue && (
                      <p className="font-serif text-4xl font-bold mb-2 text-[color:var(--accent)]">
                        <AnimatedCounter value={ach.metricValue} suffix={ach.metric === "Problems Solved" ? "+" : ""} />
                      </p>
                    )}
                    <h3 className="font-serif text-lg font-bold mb-2 text-[color:var(--text-primary)]">{ach.title}</h3>
                    <p className="text-sm leading-relaxed mb-3 text-[color:var(--text-secondary)]">{ach.description}</p>
                    <span className="text-xs font-medium text-[color:var(--text-muted)]">{ach.date}</span>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
