#!/bin/bash

# Download the files, will not overwrite if they exist
wget -nc https://github.com/arkenfox/user.js/raw/refs/heads/master/user.js -O Arkenfox.js
wget -nc https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Fastfox.js
wget -nc https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Peskyfox.js
wget -nc https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Securefox.js
wget -nc https://github.com/yokoffing/Betterfox/raw/refs/heads/main/Smoothfox.js
wget -nc https://github.com/yokoffing/Betterfox/raw/refs/heads/main/user.js -O Betterfox.js

# Sort the files
find . -path './out/*' -name '*.js' -exec sh -c 'sort "$1" > "$1.tmp" && mv "$1.tmp" "$1"' _ {} \;

g++ remcomments.cpp -o remcomments

./remcomments

python differ.py
