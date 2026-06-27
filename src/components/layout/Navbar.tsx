"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { navLinks, personalInfo } from "@/lib/data";
import { Menu, X, Sun, Moon, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[var(--nav-height)] ${
          isScrolled ? "glass border-b border-[var(--border)]" : "border-b-0"
        }`}
      >
        {/* Wider inner container — px-10 on large screens */}
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2.5rem" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-[1.35rem] font-bold tracking-tight interactive shrink-0 text-[color:var(--text-primary)]"
          >
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="text-[color:var(--accent)]">
              {personalInfo.name.split(" ")[1]}
            </span>
          </Link>

          {/* Desktop Nav — true center, generous 2px gap between items */}
          <nav
            className="hidden lg:flex items-center flex-1 justify-center"
            id="desktop-nav"
            style={{ gap: "2px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[17px] font-bold transition-colors duration-300 interactive whitespace-nowrap group ${
                  pathname === link.href ? "text-[color:var(--accent)]" : "text-[color:var(--text-secondary)]"
                }`}
                style={{
                  letterSpacing: "0.05em",
                  padding: "0.5rem 0.875rem",
                }}
              >
                {/* Animated gold underline — active page */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 38 }}
                  />
                )}
                {/* Hover underline — slides in from left */}
                <span
                  className="absolute bottom-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-[var(--accent)]"
                  style={{
                    opacity: 0.8,
                    left: "0.875rem",
                    right: "0.875rem",
                  }}
                />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — theme toggle + CTA */}
          <div className="flex items-center gap-3 lg:gap-12 shrink-0">
            {mounted && (
              <button
                id="theme-toggle"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full transition-colors interactive text-[color:var(--text-secondary)] bg-[var(--bg-secondary)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={17} suppressHydrationWarning /> : <Moon size={17} suppressHydrationWarning />}
              </button>
            )}

            <Link
              href="/contact"
              id="nav-cta"
              className="hidden lg:inline-flex items-center justify-center gap-3 px-[1.75rem] py-[0.625rem] min-w-[120px] min-h-[44px] rounded-full text-[14px] font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-lg interactive whitespace-nowrap bg-[var(--accent)] text-[color:var(--bg-primary)]"
              style={{
                letterSpacing: "0.04em",
              }}
            >
              Let&apos;s Talk
            </Link>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg interactive text-[color:var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} suppressHydrationWarning /> : <Menu size={24} suppressHydrationWarning />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 z-40 lg:hidden bg-[var(--bg-primary)]"
          >
            <div className="flex flex-col h-full pt-24 px-8 pb-10">
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-4 font-serif text-2xl font-bold transition-colors border-b border-[var(--border)] ${
                        pathname === link.href ? "text-[color:var(--accent)]" : "text-[color:var(--text-primary)]"
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div
                className="flex items-center gap-4 pt-8 border-t border-[var(--border)]"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all bg-[var(--bg-secondary)] text-[color:var(--text-primary)] border border-[var(--border)]"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all bg-[var(--bg-secondary)] text-[color:var(--text-primary)] border border-[var(--border)]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-all bg-[var(--bg-secondary)] text-[color:var(--text-primary)] border border-[var(--border)]"
                  aria-label="Email"
                >
                  <Mail size={20} suppressHydrationWarning />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
