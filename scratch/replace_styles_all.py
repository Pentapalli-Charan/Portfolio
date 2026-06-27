import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. Elements with style but no className
    # <span style={{ color: "var(--accent)" }}> -> <span className="text-[color:var(--accent)]">
    def repl_no_class_color(m):
        tag = m.group(1)
        color = m.group(2)
        return f'<{tag} className="text-[color:{color}]"'

    content = re.sub(
        r'<(\w+)\s+style={{\s*color:\s*"([^"]+)"\s*}}',
        repl_no_class_color,
        content
    )
    
    # 2. Elements with both className and style on SAME line or MULTIPLE lines
    # This is tricky because of arbitrary whitespace. We will use a more targeted approach.
    
    # Let's find all style={{ ... }} objects. 
    # But only ones that are simple string values.
    
    # Find all: className="something" style={{ color: "var(--x)" }}
    def repl_class_and_color(m):
        cls = m.group(1)
        color = m.group(2)
        return f'className="{cls} text-[color:{color}]"'

    content = re.sub(
        r'className="([^"]+)"\s+style={{\s*color:\s*"([^"]+)"\s*}}',
        repl_class_and_color,
        content
    )

    # className="something" \n style={{ color: "var(--x)" }}
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*color:\s*"([^"]+)"\s*}}',
        repl_class_and_color,
        content
    )
    
    # Find all: style={{ color: "var(--x)" }} className="something"
    def repl_color_and_class(m):
        color = m.group(1)
        cls = m.group(2)
        return f'className="text-[color:{color}] {cls}"'

    content = re.sub(
        r'style={{\s*color:\s*"([^"]+)"\s*}}\s+className="([^"]+)"',
        repl_color_and_class,
        content
    )

    # Background replacements
    # style={{ background: "var(--bg-secondary)" }} -> bg-[var(--bg-secondary)]
    def repl_no_class_bg(m):
        tag = m.group(1)
        bg = m.group(2)
        return f'<{tag} className="bg-[{bg}]"'

    content = re.sub(
        r'<(\w+)\s+style={{\s*background:\s*"([^"]+)"\s*}}',
        repl_no_class_bg,
        content
    )

    def repl_class_and_bg(m):
        cls = m.group(1)
        bg = m.group(2)
        return f'className="{cls} bg-[{bg}]"'

    content = re.sub(
        r'className="([^"]+)"\s+style={{\s*background:\s*"([^"]+)"\s*}}',
        repl_class_and_bg,
        content
    )
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*background:\s*"([^"]+)"\s*}}',
        repl_class_and_bg,
        content
    )

    # Background + Color
    def repl_class_bg_color(m):
        cls = m.group(1)
        bg = m.group(2)
        color = m.group(3)
        return f'className="{cls} bg-[{bg}] text-[color:{color}]"'

    content = re.sub(
        r'className="([^"]+)"\s*style={{\s*background:\s*"([^"]+)",\s*color:\s*"([^"]+)"\s*}}',
        repl_class_bg_color,
        content
    )
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*background:\s*"([^"]+)",\s*color:\s*"([^"]+)"\s*}}',
        repl_class_bg_color,
        content
    )
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*\n\s*background:\s*"([^"]+)",\s*\n\s*color:\s*"([^"]+)",\s*\n\s*}}',
        repl_class_bg_color,
        content
    )

    # Color + Border
    def repl_class_color_border(m):
        cls = m.group(1)
        color = m.group(2)
        border = m.group(3)
        return f'className="{cls} text-[color:{color}] border border-[{border.replace("1px solid ", "")}]"'

    content = re.sub(
        r'className="([^"]+)"\s*style={{\s*color:\s*"([^"]+)",\s*border:\s*"([^"]+)"\s*}}',
        repl_class_color_border,
        content
    )
    content = re.sub(
        r'className="([^"]+)"\s*\n\s*style={{\s*color:\s*"([^"]+)",\s*border:\s*"([^"]+)"\s*}}',
        repl_class_color_border,
        content
    )
    
    # Specific edge cases for Footer.tsx
    content = content.replace(
        'style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}',
        'className="bg-[var(--bg-secondary)] border-[var(--border)]"'
    )
    
    content = content.replace(
        'style={{ color: "var(--text-secondary)", lineHeight: 1.9, maxWidth: "360px" }}',
        'className="text-[color:var(--text-secondary)] leading-[1.9] max-w-[360px]"'
    )
    
    content = content.replace(
        'style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}',
        'className="text-[color:var(--text-secondary)] leading-[1.6]"'
    )
    
    content = content.replace(
        'style={{ borderColor: "var(--border)", marginTop: "4rem", paddingTop: "2rem" }}',
        'className="border-[var(--border)] mt-[4rem] pt-[2rem]"'
    )

    content = content.replace(
        'style={{\n                      background: "var(--bg-card)",\n                      color: "var(--text-secondary)",\n                      border: "1px solid var(--border)",\n                    }}',
        'className="bg-[var(--bg-card)] text-[color:var(--text-secondary)] border border-[var(--border)]"'
    )
    
    content = content.replace(
        'style={{\n              background: "var(--bg-card)",\n              color: "var(--text-secondary)",\n              border: "1px solid var(--border)",\n            }}',
        'className="bg-[var(--bg-card)] text-[color:var(--text-secondary)] border border-[var(--border)]"'
    )

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Modified {filepath}")

def main():
    src_dir = 'src'
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
