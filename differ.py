import os
import re

def extract_key_value(line):
    line_part = line.split(';')[0] + ';'
    match = re.search(r'(".*?")', line_part)
    if match:
        return match.group(1), line_part
    return None, None

def read_js_file(filepath):
    content_dict = {}
    lines = []
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            key, value = extract_key_value(line)
            if key:
                content_dict[key] = value.strip()
                lines.append((key, value.strip()))
    return content_dict, lines

def read_blacklist(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            return [line.strip() for line in file if line.strip()]
    except FileNotFoundError:
        print("Warning: blacklist.txt not found")
        return []

def main():
    js_files = []
    for root, dirs, files in os.walk('./out'):
        js_files.extend([os.path.join(root, file) for file in files if file.endswith('.js')])

    blacklist = read_blacklist('./blacklist.txt')

    user_js = None
    other_js_files = []

    for js_file in js_files:
        if os.path.basename(js_file) == 'user.js':
            user_js = js_file
        else:
            other_js_files.append(js_file)

    if not user_js:
        print("user.js not found!")
        return

    user_content, user_lines = read_js_file(user_js)

    missing_entries = {}
    for other_file in other_js_files:
        other_content, _ = read_js_file(other_file)
        other_keys = set(other_content.keys())
        user_keys = set(user_content.keys())

        for key in other_keys - user_keys:
            if not other_content[key] in blacklist:
                missing_entries[key] = other_content[key]

    updated_lines = [line for key, line in user_lines]

    for key, value in missing_entries.items():
        updated_lines.append(value)

    new_path = os.path.join(os.path.dirname(user_js), 'user.js.new')
    with open(new_path, 'w', encoding='utf-8') as f:
        for line in updated_lines:
            f.write(line + '\n')

    print(f"Updated user.js.new written with {len(missing_entries)} new entries.")

if __name__ == "__main__":
    main()
