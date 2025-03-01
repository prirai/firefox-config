import os
import re

def extract_key_value(line):
    # Extract line up to first semicolon
    line_part = line.split(';')[0] + ';'
    # Extract text between double quotes
    match = re.search(r'(".*?")', line_part)
    if match:
        return match.group(1), line_part
    return None, None

def read_js_file(filepath):
    content_dict = {}
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            key, value = extract_key_value(line)
            if key:
                content_dict[key] = value.strip()
    return content_dict

def read_blacklist(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            return [line.strip() for line in file if line.strip()]
    except FileNotFoundError:
        print("Warning: blacklist.txt not found")
        return []

def main():
    # Get all JS files in ./out directory
    js_files = []
    for root, dirs, files in os.walk('./out'):
        js_files.extend([os.path.join(root, file) for file in files if file.endswith('.js')])

    # Read blacklist
    blacklist = read_blacklist('./blacklist.txt')

    # Separate user.js and other files
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

    # Read user.js content
    user_content = read_js_file(user_js)

    # Compare with each other file
    for other_file in other_js_files:
        other_content = read_js_file(other_file)

        # Find differences
        user_keys = set(user_content.keys())
        other_keys = set(other_content.keys())

        # Keys in other file but not in user.js
        for key in other_keys - user_keys:
            if not other_content[key] in blacklist:
                print(f"user.js: <missing>")
                print(f"{os.path.basename(other_file)}: {other_content[key]}")
                print()

        # Keys in both but with different values
        for key in user_keys & other_keys:
            if user_content[key] != other_content[key]:
                if not other_content[key] in blacklist:
                    print(f"user.js: {user_content[key]}")
                    print(f"{os.path.basename(other_file)}: {other_content[key]}")
                    print()

if __name__ == "__main__":
    main()
