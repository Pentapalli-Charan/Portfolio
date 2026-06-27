"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ChevronDown,
  Code,
  Brain,
  Cloud,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo, projects, stats } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import MagneticButton from "@/components/shared/MagneticButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import FloatingElement from "@/components/shared/FloatingElement";
import Card3DTilt from "@/components/shared/Card3DTilt";
import SectionHeading from "@/components/shared/SectionHeading";

const ThreeBackground = dynamic(
  () => import("@/components/shared/ThreeBackground"),
  { ssr: false }
);

// Typing effect hook
function useTypingEffect(texts: string[], speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentText.substring(0, displayText.length - 1)
              : currentText.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
}

export default function HomePage() {
  const typedText = useTypingEffect([
    "Machine Learning Engineer",
    "MLOps Engineer",
    "AI Enthusiast",
    "Problem Solver",
  ]);

  return (
    <>
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeBackground />

        {/* Decorative elements */}
        <FloatingElement
          className="absolute top-20 right-[15%] hidden lg:block"
          delay={0.5}
        >
          <div
            className="w-20 h-20 rounded-2xl rotate-12 opacity-30 bg-[linear-gradient(135deg,var(--accent),transparent)]"
          />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-32 left-[10%] hidden lg:block"
          delay={1}
          duration={4}
        >
          <div
            className="w-14 h-14 rounded-full opacity-20 border-2 border-[var(--accent)]"
          />
        </FloatingElement>

        <div className="container-custom w-full pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Text content — single flex-col, gap-8 drives all vertical rhythm */}
            <div className="order-2 lg:order-1 flex flex-col gap-8 items-start">
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]"
              >
                Hi, I&apos;m {personalInfo.firstName}
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] text-[color:var(--text-primary)]"
              >
                I build intelligent systems that{" "}
                <span className="font-accent italic text-[color:var(--accent)]">
                  solve
                </span>{" "}
                real problems.
              </motion.h1>

              {/* Bio */}
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="text-base md:text-lg text-left text-[color:var(--text-secondary)] leading-[1.85] max-w-[460px]"
              >
                {personalInfo.shortBio}
              </motion.p>

              {/* Typed Role */}
              <motion.p
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.6}
                className="text-2xl font-mono h-10 flex items-center text-[color:var(--accent)]"
              >
                {typedText}
                <span className="animate-pulse ml-0.5">|</span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.8}
                className="flex flex-wrap items-center gap-5"
              >
                <MagneticButton
                  href="/projects"
                  className="inline-flex items-center justify-center gap-3 px-[2.5rem] py-[0.875rem] min-w-[150px] min-h-[52px] rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl bg-[var(--accent)] text-[color:var(--bg-primary)] border-2 border-transparent shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                >
                  View My Work
                  <ArrowRight size={18} suppressHydrationWarning />
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-[2.5rem] py-[0.875rem] min-w-[150px] min-h-[52px] rounded-full text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-black/5 dark:hover:bg-white/5 bg-transparent text-[color:var(--text-primary)] border-2 border-[var(--border)]"
                >
                  Let&apos;s Talk
                </MagneticButton>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="flex items-center gap-4"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl transition-all interactive text-[color:var(--text-secondary)] border border-[var(--border)]"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} suppressHydrationWarning />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl transition-all interactive text-[color:var(--text-secondary)] border border-[var(--border)]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} suppressHydrationWarning />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl transition-all interactive text-[color:var(--text-secondary)] border border-[var(--border)]"
                  aria-label="Email"
                >
                  <Mail size={20} suppressHydrationWarning />
                </a>
              </motion.div>
            </div>

            {/* Right: Profile area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Profile card */}
                <div
                  className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-[linear-gradient(135deg,var(--bg-secondary),var(--bg-card))] border border-[var(--border)] group"
                >
                  <Image
                    src="/profile.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 288px, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                </div>

                {/* Floating badges */}
                <FloatingElement
                  className="absolute -top-4 -right-4"
                  delay={0.8}
                >
                  <div
                    className="glass-card px-4 py-2 flex items-center gap-2 text-xs font-medium"
                  >
                    <span className="availability-dot" />
                    <span className="text-[color:var(--text-primary)]">
                      Available for Projects
                    </span>
                  </div>
                </FloatingElement>

                <FloatingElement
                  className="absolute -bottom-2 -left-6"
                  delay={1.2}
                  duration={4}
                >
                  <div
                    className="glass-card px-4 py-2 text-xs font-medium text-[color:var(--text-primary)]"
                  >
                    📍 {personalInfo.location.split(",")[0]}
                  </div>
                </FloatingElement>
              </div>
            </motion.div>
          </div>


        </div>

        {/* Scroll indicator — anchored to the section, not the container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs uppercase tracking-widest text-[color:var(--text-muted)]"
          >
            Scroll to explore
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={20} className="text-[color:var(--accent)]" suppressHydrationWarning />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section
        className="py-12 border-y bg-[var(--bg-secondary)] border-[var(--border)]"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-[color:var(--text-primary)]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p
                    className="text-sm mt-1 text-[color:var(--text-secondary)]"
                  >
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            subtitle="A selection of my recent work in AI, ML, and MLOps engineering."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={staggerItem} className="h-full">
                <Card3DTilt className="relative h-full">
                  <div className="premium-card h-full flex flex-col gap-6" style={{ padding: "2.5rem" }}>
                    {/* Top Row: Project number + Category badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-mono font-bold tracking-widest text-[color:var(--accent)] opacity-80"
                      >
                        0{projects.indexOf(project) + 1}
                      </span>
                      <span className="tech-badge">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle Group */}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="font-serif text-2xl font-bold text-[color:var(--text-primary)]"
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm font-semibold text-[color:var(--accent)]"
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description - Concise for homepage */}
                    <p
                      className="text-sm font-medium text-[color:var(--text-secondary)] leading-[1.6]"
                    >
                      {project.id === "pixit" ? "AI image stylization platform using OpenCV and FastAPI." :
                       project.id === "legal-assistant" ? "NLP legal assistant powered by OpenAI." :
                       project.id === "drone-anomaly" ? "ML system for anomaly detection in autonomous drones." :
                       project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="chip whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="chip whitespace-nowrap" style={{ opacity: 0.7 }}>
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links - pinned to bottom */}
                    <div className="flex items-center gap-3 pt-5 border-t mt-auto border-t-[var(--border)]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-[13px] font-bold transition-all interactive hover:opacity-80 text-[color:var(--text-primary)]"
                      >
                        <GithubIcon size={16} suppressHydrationWarning />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </Card3DTilt>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal className="text-center mt-24">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-sm font-bold transition-colors interactive hover:opacity-80 text-[color:var(--text-primary)]"
            >
              View All Projects
              <ArrowRight size={16} suppressHydrationWarning />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SKILLS OVERVIEW ─── */}
      <section
        className="section-padding bg-[var(--bg-secondary)]"
      >
        <div className="container-custom">
          <SectionHeading
            label="What I Do"
            title="Core Expertise"
            subtitle="From intelligent systems to scalable infrastructure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={28} suppressHydrationWarning />,
                title: "ML & AI",
                desc: "TensorFlow · PyTorch · Scikit-Learn",
              },

              {
                icon: <Cloud size={28} suppressHydrationWarning />,
                title: "DevOps & Cloud",
                desc: "Docker · Kubernetes · Terraform",
              },
              {
                icon: <Code size={28} suppressHydrationWarning />,
                title: "Problem Solving",
                desc: "85+ problems · C++ · DSA",
              },
            ].map((skill, i) => (
              <ScrollReveal key={skill.title} delay={i * 0.1}>
                <Card3DTilt>
                  <div className="premium-card text-center p-8 h-full flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-[1.125rem] mb-5 flex items-center justify-center shrink-0 bg-[var(--accent-light)] text-[color:var(--accent)]"
                    >
                      {skill.icon}
                    </div>
                    <h3
                      className="font-serif text-lg font-bold mb-3 text-[color:var(--text-primary)]"
                    >
                      {skill.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mt-auto text-[color:var(--text-secondary)]"
                    >
                      {skill.desc}
                    </p>
                  </div>
                </Card3DTilt>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
