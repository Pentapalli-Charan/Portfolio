import os, re

src_dir = r'c:\Users\pchar\OneDrive\Desktop\Portfolio AntiG\portfolio\src'

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    import_match = re.search(r'import\s+\{([^}]+)\}\s+from\s+[\'\"]lucide-react[\'\"]', content)
    if not import_match:
        return

    icons = [i.strip() for i in import_match.group(1).split(',')]
    icons = [i for i in icons if i]

    new_content = content
    for icon in icons:
        # Match <Icon ...> or <Icon> but not <IconSomething>
        pattern = r'(<'+icon+r'\b(?![A-Za-z0-9_])(?:[^>]*?))(?:\s*/>|>)'

        def repl(m):
            tag_start = m.group(1)
            if 'suppressHydrationWarning' in tag_start:
                return m.group(0)
            if m.group(0).endswith('/>'):
                return tag_start + ' suppressHydrationWarning />'
            else:
                return tag_start + ' suppressHydrationWarning>'

        new_content = re.sub(pattern, repl, new_content)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {path}')

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            process_file(path)
