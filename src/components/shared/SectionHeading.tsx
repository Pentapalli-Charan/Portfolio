"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-20 ${className}`}>
      <div className={align === "center" ? "text-center" : "text-left"}>
        {label && (
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.25em] mb-5 text-[color:var(--accent)]"
          >
            {label}
          </span>
        )}
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-[color:var(--text-primary)]"
          style={{ marginBottom: subtitle ? "1.25rem" : "1.5rem" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-lg md:text-xl max-w-2xl font-medium mt-6 mb-2 text-[color:var(--text-primary)] opacity-85 leading-[1.75]"
            style={{
              margin: align === "center" ? "0 auto" : undefined,
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          className="mt-8 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]"
          style={{
            width: "100px",
            margin: align === "center" ? "2rem auto 0" : "2rem 0 0",
          }}
        />
      </div>
    </ScrollReveal>
  );
}
