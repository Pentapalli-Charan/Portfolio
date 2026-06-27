"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

const quickLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Skills",   href: "/skills"   },
  { label: "Contact",  href: "/contact"  },
  { label: "Resume",   href: "/resume"   },
];

const socialLinks = [
  { href: personalInfo.github,            label: "GitHub",   icon: <GithubIcon size={18} />,   external: true  },
  { href: personalInfo.linkedin,          label: "LinkedIn", icon: <LinkedinIcon size={18} />,  external: true  },
  { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: "Email",    icon: <Mail size={18} suppressHydrationWarning />, external: true },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t bg-[var(--bg-secondary)] border-[var(--border)]"
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "6rem 2.5rem 4rem" }}>

        {/* ─── Main columns ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 w-full">

          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col gap-6">
            <h3
              className="font-serif text-2xl font-bold text-[color:var(--text-primary)]"
            >
              Pentapalli{" "}
              <span className="text-[color:var(--accent)]">Charan</span>
            </h3>

            {/*
              maxWidth: 360px — wide enough so the bio paragraph
              wraps naturally (4–6 words per line) instead of 2–3.
            */}
            <p
              className="text-base text-[color:var(--text-secondary)] leading-[1.9] max-w-[360px]"
            >
              {personalInfo.shortBio}
            </p>

            <div className="flex items-center gap-2.5">
              <span className="availability-dot" />
              <span className="text-xs font-medium text-[color:var(--text-secondary)]">
                {personalInfo.availability}
              </span>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="flex flex-col gap-8 md:items-center">
            <h4
              className="text-[13px] font-bold uppercase tracking-[0.2em] text-[color:var(--text-primary)]"
            >
              Quick Links
            </h4>

            {/* 2-column link grid — gap-x-8 gap-y-5 for consistent rhythm */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base transition-all interactive group flex items-center gap-2 text-[color:var(--text-secondary)]"
                >
                  <span
                    className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shrink-0 bg-[var(--accent)]"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Column 3: Connect ── */}
          <div className="flex flex-col gap-8 md:items-end">
            <h4
              className="text-[13px] font-bold uppercase tracking-[0.2em] text-[color:var(--text-primary)]"
            >
              Connect
            </h4>

            {/* Icons + email stacked with gap-6 so email is clearly separated */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="p-3.5 rounded-xl transition-all interactive bg-[var(--bg-card)] text-[color:var(--text-secondary)] border border-[var(--border)]"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <p className="text-base text-[color:var(--text-secondary)] leading-[1.6]">
                {personalInfo.email}
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar — border-t with mt-16 breathing room ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[var(--border)] mt-[4rem] pt-[2rem]"
        >
          <p className="text-base flex items-center gap-1.5 text-[color:var(--text-muted)]">
            © {currentYear} Pentapalli Charan. Crafted with{" "}
            <Heart size={13} className="text-[color:var(--accent)]" fill="var(--accent)" suppressHydrationWarning />{" "}
            and code.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full transition-all interactive bg-[var(--bg-card)] text-[color:var(--text-secondary)] border border-[var(--border)]"
            aria-label="Back to top"
          >
            <ArrowUp size={17} suppressHydrationWarning />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
