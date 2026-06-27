"use client";

import { Download, FileText, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import MagneticButton from "@/components/shared/MagneticButton";

export default function ResumePage() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Resume" title="My Resume" subtitle="View or download my complete resume with detailed experience, skills, and qualifications." />

        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl">
          <ScrollReveal>
            {/* Download CTA */}
            <div className="text-center mb-8">
              <MagneticButton
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-[2.25rem] py-[1rem] rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl bg-[var(--accent)] text-[color:var(--bg-primary)]"
              >
                <Download size={18} suppressHydrationWarning />
                Download Resume (PDF)
              </MagneticButton>
            </div>

            {/* PDF Viewer */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)]">
              <div className="p-4 flex items-center justify-between border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-[color:var(--accent)]" suppressHydrationWarning />
                  <span className="text-sm font-medium text-[color:var(--text-primary)]">Pentapalli_Charan_Resume.pdf</span>
                </div>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs interactive text-[color:var(--accent)]">
                  <ExternalLink size={12} suppressHydrationWarning />Open in new tab
                </a>
              </div>
              <div className="relative" style={{ height: "80vh", minHeight: "500px" }}>
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full border-none"
                  title="Resume PDF Viewer"
                />
              </div>
            </div>
          </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
