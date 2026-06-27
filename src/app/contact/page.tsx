"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import MagneticButton from "@/components/shared/MagneticButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    
    setStatus("submitting");
    
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Message from Portfolio",
          message: formData.message,
          _template: "box",
        })
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputStyle = {
    background: "var(--bg-card)",
    color: "var(--text-primary)",
    border: "1px solid var(--border)",
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading label="Contact" title="Let's Connect" subtitle="Have a project idea, collaboration opportunity, or just want to say hello? I'd love to hear from you." />

        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-5xl">
            {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left">
              <div className="premium-card">
                <h3 className="font-serif text-lg font-bold mb-4 text-[color:var(--text-primary)]">Get in Touch</h3>
                <div className="space-y-4">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-3 group interactive">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[var(--accent-light)] text-[color:var(--accent)]"><Mail size={18} suppressHydrationWarning /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[color:var(--text-muted)]">Email</p>
                      <p className="text-sm font-medium text-[color:var(--text-primary)]">{personalInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[var(--accent-light)] text-[color:var(--accent)]"><Phone size={18} suppressHydrationWarning /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[color:var(--text-muted)]">Phone</p>
                      <p className="text-sm font-medium text-[color:var(--text-primary)]">{personalInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[var(--accent-light)] text-[color:var(--accent)]"><MapPin size={18} suppressHydrationWarning /></div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[color:var(--text-muted)]">Location</p>
                      <p className="text-sm font-medium text-[color:var(--text-primary)]">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="premium-card">
                <h3 className="font-serif text-lg font-bold mb-4 text-[color:var(--text-primary)]">Social Links</h3>
                <div className="flex gap-3">
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all interactive bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border border-[var(--border)]" aria-label="GitHub"><GithubIcon size={20} /></a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all interactive bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border border-[var(--border)]" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl transition-all interactive bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border border-[var(--border)]" aria-label="Email"><Mail size={20} suppressHydrationWarning /></a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="premium-card">
                <div className="flex items-center gap-2 mb-2">
                  <span className="availability-dot" />
                  <span className="text-sm font-semibold text-[color:var(--text-primary)]">Availability Status</span>
                </div>
                <p className="text-sm text-[color:var(--text-secondary)]">{personalInfo.availability} — Open to internships, full-time roles, and freelance projects.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="premium-card">
                <h3 className="font-serif text-lg font-bold mb-6 text-[color:var(--text-primary)]">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider mb-1.5 font-semibold text-[color:var(--text-muted)]">Name *</label>
                    <input id="contact-name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={inputStyle} className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all ${errors.name ? "border-[#ef4444]" : "border-[var(--border)]"} border`} placeholder="Your full name" />
                    {errors.name && <p className="text-xs mt-1 text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider mb-1.5 font-semibold text-[color:var(--text-muted)]">Email *</label>
                    <input id="contact-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all border ${errors.email ? "border-[#ef4444]" : "border-[var(--border)]"}`} style={inputStyle} placeholder="your@email.com" />
                    {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider mb-1.5 font-semibold text-[color:var(--text-muted)]">Subject</label>
                    <input id="contact-subject" type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all" style={inputStyle} placeholder="What's this about?" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider mb-1.5 font-semibold text-[color:var(--text-muted)]">Message *</label>
                    <textarea id="contact-message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none border ${errors.message ? "border-[#ef4444]" : "border-[var(--border)]"}`} style={inputStyle} placeholder="Tell me about your project or opportunity..." />
                    {errors.message && <p className="text-xs mt-1 text-red-500">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={status === "submitting"} className="w-full inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl interactive bg-[var(--accent)] text-[color:var(--bg-primary)] disabled:opacity-70 disabled:hover:scale-100">
                    <Send size={18} suppressHydrationWarning />
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-3 rounded-xl bg-[rgba(34, 197, 94, 0.1)] text-[color:#22c55e]">
                      <CheckCircle size={16} suppressHydrationWarning /><span className="text-sm font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-3 rounded-xl bg-[rgba(239, 68, 68, 0.1)] text-[color:#ef4444]">
                      <span className="text-sm font-medium">Failed to send message. Please try again or use the email link directly.</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </ScrollReveal>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
