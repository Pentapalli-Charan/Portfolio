import re
import sys

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all JSX elements with className="..." and style={{...}}
    # This requires careful parsing. Let's do a simpler regex that matches the common patterns in page.tsx
    
    # 1. Simple color replacements: style={{ color: "var(--something)" }}
    # We want to remove the style prop and append text-[color:var(--something)] to the preceding className.
    
    def replace_color_style(match):
        class_name = match.group(1)
        color_val = match.group(2)
        return f'className="{class_name} text-[color:{color_val}]"'
        
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*color:\s*"([^"]+)"\s*}}',
        replace_color_style,
        content
    )
    
    # 2. Simple color replacements on same line: className="xyz" style={{ color: "var(--something)" }}
    content = re.sub(
        r'className="([^"]+)"\s*style={{\s*color:\s*"([^"]+)"\s*}}',
        replace_color_style,
        content
    )

    # 3. Simple color and lineHeight
    def replace_color_lh_mw_style(match):
        class_name = match.group(1)
        color_val = match.group(2)
        return f'className="{class_name} text-[color:{color_val}] leading-[1.85] max-w-[460px]"'
        
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*color:\s*"([^"]+)",\s*lineHeight:\s*1\.85,\s*maxWidth:\s*"460px"\s*}}',
        replace_color_lh_mw_style,
        content
    )

    # 4. Color and border
    def replace_color_border_style(match):
        class_name = match.group(1)
        color_val = match.group(2)
        border_val = match.group(3)
        return f'className="{class_name} text-[color:{color_val}] border border-[var(--border)]"'
        
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*color:\s*"([^"]+)",\s*border:\s*"([^"]+)"\s*}}',
        replace_color_border_style,
        content
    )

    # 5. Background and border for the section
    content = re.sub(
        r'className="py-12 border-y"\s*\n\s*style={{\s*\n\s*background:\s*"var\(--bg-secondary\)",\s*\n\s*borderColor:\s*"var\(--border\)",\s*\n\s*}}',
        'className="py-12 border-y bg-[var(--bg-secondary)] border-[var(--border)]"',
        content
    )

    # 6. Specific background replacements
    content = content.replace(
        '''className="w-20 h-20 rounded-2xl rotate-12 opacity-30"
            style={{
              background:
                "linear-gradient(135deg, var(--accent), transparent)",
            }}''',
        '''className="w-20 h-20 rounded-2xl rotate-12 opacity-30 bg-[linear-gradient(135deg,var(--accent),transparent)]"'''
    )
    
    content = content.replace(
        '''className="w-14 h-14 rounded-full opacity-20"
            style={{ border: "2px solid var(--accent)" }}''',
        '''className="w-14 h-14 rounded-full opacity-20 border-2 border-[var(--accent)]"'''
    )
    
    content = content.replace(
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl"
                  style={{
                    background: "var(--text-primary)",
                    color: "var(--bg-primary)",
                    border: "2px solid transparent",
                    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                  }}''',
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl bg-[var(--text-primary)] text-[color:var(--bg-primary)] border-2 border-transparent shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"'''
    )

    content = content.replace(
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-black/5 dark:hover:bg-white/5"
                  style={{
                    background: "transparent",
                    color: "var(--text-primary)",
                    border: "2px solid var(--border)",
                  }}''',
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-black/5 dark:hover:bg-white/5 bg-transparent text-[color:var(--text-primary)] border-2 border-[var(--border)]"'''
    )

    content = content.replace(
        '''className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--bg-secondary), var(--bg-card))",
                    border: "1px solid var(--border)",
                  }}''',
        '''className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden bg-[linear-gradient(135deg,var(--bg-secondary),var(--bg-card))] border border-[var(--border)]"'''
    )

    content = content.replace(
        '''className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-serif font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--accent), var(--accent-hover))",
                          color: "#FFFFFF",
                        }}''',
        '''className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-serif font-bold bg-[linear-gradient(135deg,var(--accent),var(--accent-hover))] text-white"'''
    )
    
    content = content.replace(
        '''className="section-padding"
        style={{ background: "var(--bg-secondary)" }}''',
        '''className="section-padding bg-[var(--bg-secondary)]"'''
    )
    
    content = content.replace(
        '''className="w-14 h-14 rounded-[1.125rem] mb-5 flex items-center justify-center shrink-0"
                      style={{
                        background: "var(--accent-light)",
                        color: "var(--accent)",
                      }}''',
        '''className="w-14 h-14 rounded-[1.125rem] mb-5 flex items-center justify-center shrink-0 bg-[var(--accent-light)] text-[color:var(--accent)]"'''
    )
    
    content = content.replace(
        '''className="relative overflow-hidden rounded-3xl text-center"
              style={{
                background: "linear-gradient(135deg, var(--text-primary) 0%, #333333 100%)",
                padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 5rem)",
              }}''',
        '''className="relative overflow-hidden rounded-3xl text-center bg-[linear-gradient(135deg,var(--text-primary)_0%,#333333_100%)] p-[clamp(2rem,5vw,5rem)] py-[clamp(4rem,8vw,7rem)]"'''
    )
    
    content = content.replace(
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl"
                  style={{
                    background: "var(--accent)",
                    color: "#FFFFFF",
                  }}''',
        '''className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:shadow-xl bg-[var(--accent)] text-white"'''
    )

    content = content.replace(
        '''className="text-[11px] font-mono font-bold tracking-widest"
                        style={{ color: "var(--accent)", opacity: 0.8 }}''',
        '''className="text-[11px] font-mono font-bold tracking-widest text-[color:var(--accent)] opacity-80"'''
    )

    content = content.replace(
        '''className="text-sm font-medium"
                      style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}''',
        '''className="text-sm font-medium text-[color:var(--text-secondary)] leading-[1.6]"'''
    )

    content = content.replace(
        '''className="flex items-center gap-3 pt-5 border-t mt-auto" style={{ borderColor: "var(--border)" }}''',
        '''className="flex items-center gap-3 pt-5 border-t mt-auto border-t-[var(--border)]"'''
    )

    content = content.replace(
        '''className="text-lg md:text-xl max-w-2xl mx-auto mt-4 mb-8 font-medium"
                  style={{ color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.85 }}''',
        '''className="text-lg md:text-xl max-w-2xl mx-auto mt-4 mb-8 font-medium text-[rgba(255,255,255,0.9)] leading-[1.85]"'''
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    process_file('src/app/page.tsx')
    print("Replacements done for page.tsx")
