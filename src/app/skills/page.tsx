"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Brain,
  Globe,
  Cloud,
  Database,
  BarChart3,
  Target,
  Users,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import Card3DTilt from "@/components/shared/Card3DTilt";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={24} suppressHydrationWarning />,
  brain: <Brain size={24} suppressHydrationWarning />,
  globe: <Globe size={24} suppressHydrationWarning />,
  cloud: <Cloud size={24} suppressHydrationWarning />,
  database: <Database size={24} suppressHydrationWarning />,
  chart: <BarChart3 size={24} suppressHydrationWarning />,
  target: <Target size={24} suppressHydrationWarning />,
  users: <Users size={24} suppressHydrationWarning />,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span
          className="text-sm font-medium text-[color:var(--text-primary)]"
        >
          {name}
        </span>
        <span
          className="text-xs font-mono text-[color:var(--text-muted)]"
        >
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : "0%" }}
          transition={{
            duration: 1.2,
            delay: delay * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Skills & Technologies"
          title="My Technical Arsenal"
          subtitle="A comprehensive toolkit spanning ML, DevOps, and beyond."
        />

        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
            {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.08} className="h-full">
              <Card3DTilt maxTilt={5} className="h-full">
                <div className="premium-card h-full">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--accent-light)] text-[color:var(--accent)]"
                    >
                      {iconMap[category.icon]}
                    </div>
                    <div>
                      <h3
                        className="font-serif text-lg font-bold text-[color:var(--text-primary)]"
                      >
                        {category.title}
                      </h3>
                      <p
                        className="text-xs text-[color:var(--text-muted)]"
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div>
                    {category.skills.map((skill, j) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={j}
                      />
                    ))}
                  </div>
                </div>
              </Card3DTilt>
            </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
