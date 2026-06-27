import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # regex to find duplicate className
    # e.g. className="abc" className="xyz"
    # we want to merge them to className="abc xyz"
    
    def repl_dup(m):
        c1 = m.group(1)
        c2 = m.group(2)
        return f'className="{c1} {c2}"'
        
    content = re.sub(r'className="([^"]+)"\s*\n*\s*className="([^"]+)"', repl_dup, content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed duplicate in {filepath}")

def main():
    src_dir = 'src'
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    main()
