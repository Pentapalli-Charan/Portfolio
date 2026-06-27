import os

replacements = {
    'src/components/shared/ThreeBackground.tsx': [
        ('style={{ background: "transparent" }}', 'className="bg-transparent"')
    ],
    'src/components/layout/Navbar.tsx': [
        ('style={{ borderColor: "var(--border)" }}', 'className="border-[var(--border)]"')
    ],
    'src/components/layout/Footer.tsx': [
        ('<Heart size={13} style={{ color: "var(--accent)" }} fill="var(--accent)" />', '<Heart size={13} className="text-[color:var(--accent)]" fill="var(--accent)" />')
    ],
    'src/app/resume/page.tsx': [
        ('className="rounded-2xl overflow-hidden" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}', 'className="rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)]"'),
        ('className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}', 'className="p-4 flex items-center justify-between border-b border-[var(--border)]"'),
        ('<FileText size={16} style={{ color: "var(--accent)" }} />', '<FileText size={16} className="text-[color:var(--accent)]" />'),
        ('style={{ border: "none" }}', 'className="border-none"'),
        ('<FileText size={48} style={{ color: "var(--accent)", margin: "0 auto 1rem" }} />', '<FileText size={48} className="text-[color:var(--accent)] mx-auto mb-4" />')
    ],
    'src/app/projects/page.tsx': [
        ('className="w-full lg:w-72 h-48 lg:h-auto rounded-2xl flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--bg-secondary), var(--accent-light))", border: "1px solid var(--border)" }}', 'className="w-full lg:w-72 h-48 lg:h-auto rounded-2xl flex-shrink-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--bg-secondary),var(--accent-light))] border border-[var(--border)]"'),
        ('style={{ background: "transparent", color: "var(--text-primary)", border: "2px solid var(--border)" }}', 'className="bg-transparent text-[color:var(--text-primary)] border-2 border-[var(--border)]"'),
        ('className="pt-4 border-t" style={{ borderColor: "var(--border)" }}', 'className="pt-4 border-t border-[var(--border)]"'),
        ('<Wrench size={16} style={{ color: "var(--accent)" }} />', '<Wrench size={16} className="text-[color:var(--accent)]" />'),
        ('<Lightbulb size={16} style={{ color: "var(--accent)" }} />', '<Lightbulb size={16} className="text-[color:var(--accent)]" />')
    ],
    'src/app/page.tsx': [
        ('<ChevronDown size={20} style={{ color: "var(--accent)" }} suppressHydrationWarning />', '<ChevronDown size={20} className="text-[color:var(--accent)]" suppressHydrationWarning />')
    ],
    'src/app/education/page.tsx': [
        ('className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg, var(--accent-light), var(--accent-glow))", border: "1px solid var(--accent)" }}', 'className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--accent-light),var(--accent-glow))] border border-[var(--accent)]"')
    ],
    'src/app/contact/page.tsx': [
        ('className="p-3 rounded-xl transition-all interactive" style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}', 'className="p-3 rounded-xl transition-all interactive bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border border-[var(--border)]"'),
        ('style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "var(--border)" }}', 'style={inputStyle} className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all ${errors.name ? "border-[#ef4444]" : "border-[var(--border)]"} border`}'),
        ('className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all" style={{ ...inputStyle, borderColor: errors.name ? "#ef4444" : "var(--border)" }}', 'className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all border ${errors.name ? "border-[#ef4444]" : "border-[var(--border)]"}`} style={inputStyle}'),
        ('className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all" style={{ ...inputStyle, borderColor: errors.email ? "#ef4444" : "var(--border)" }}', 'className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all border ${errors.email ? "border-[#ef4444]" : "border-[var(--border)]"}`} style={inputStyle}'),
        ('className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none" style={{ ...inputStyle, borderColor: errors.message ? "#ef4444" : "var(--border)" }}', 'className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all resize-none border ${errors.message ? "border-[#ef4444]" : "border-[var(--border)]"}`} style={inputStyle}')
    ],
    'src/app/certificates/page.tsx': [
        ('className="px-4 py-2 rounded-full text-sm font-medium transition-all interactive" style={{ background: activeFilter === cat ? "var(--text-primary)" : "var(--bg-secondary)", color: activeFilter === cat ? "var(--bg-primary)" : "var(--text-secondary)", border: `1px solid ${activeFilter === cat ? "var(--text-primary)" : "var(--border)"}` }}', 'className={`px-4 py-2 rounded-full text-sm font-medium transition-all interactive border ${activeFilter === cat ? "bg-[var(--text-primary)] text-[color:var(--bg-primary)] border-[var(--text-primary)]" : "bg-[var(--bg-secondary)] text-[color:var(--text-secondary)] border-[var(--border)]"}`}')
    ]
}

def main():
    for file, replaces in replacements.items():
        if os.path.exists(file):
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
            for old, new in replaces:
                content = content.replace(old, new)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Replaced styles in {file}")
        else:
            print(f"File {file} not found!")

if __name__ == "__main__":
    main()
