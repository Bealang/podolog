with open('galeria.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the block to remove (the one that starts with <!-- REMOVED --> or the original one)
new_lines = []
skip = 0
for i, line in enumerate(lines):
    if skip > 0:
        skip -= 1
        continue
    if '<!-- REMOVED -->' in line:
        # skip this line and the next 5 lines
        skip = 5
        continue
    new_lines.append(line)

# Now find where to insert the new block (before contact.html)
final_lines = []
galeria_block = """            <a href="galeria.html"
                class="mobile-nav-link flex items-center gap-5 py-5 border-b border-emerald-100 group opacity-0 translate-y-5 transition-all duration-300">
                <span class="material-symbols-outlined text-emerald-600 text-[24px]">photo_library</span>
                <span
                    class="text-emerald-900 text-2xl font-bold tracking-tight group-hover:text-emerald-600 transition-colors">Galeria</span>
            </a>
"""

for line in new_lines:
    if 'href="contact.html"' in line and 'mobile-nav-link' in line:
        final_lines.append(galeria_block)
    final_lines.append(line)

with open('galeria.html', 'w', encoding='utf-8') as f:
    f.writelines(final_lines)
print("File updated successfully")
