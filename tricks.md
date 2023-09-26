## Extract all the pref keys

### Using AWK
```
awk -F'"' '{print $2}' user.js > keys.txt
```

### Using python

```
with open('user.js', 'r') as f:
    file_content = f.read()

keys = [line.split('=')[0] for line in file_content.split('\n') if '=' in line]

with open('keys.txt', 'w') as f:
    f.write('\n'.join(keys))
```

## Mozillazine Scraper

```python
import requests, os, bs4

infile = open('keys.txt', 'r')
# Read input file and the lines after stripping \n and blank lines
lines = infile.read().splitlines()
infile.close()

# Remove empty lines
lines = list(filter(None, lines))
print(lines)

outfol = 'mzpages'
# Don't make the folder
# os.makedirs(outfol, exist_ok=True)

for line in lines:
    # For line 'layers.gpu-process.enabled', go to 'https://kb.mozillazine.org/index.php?title=Layers.gpu-process.enabled&action=edit'. First character of the line is made capital
    url = 'https://kb.mozillazine.org/index.php?title=' + line[0].upper() + line[1:] + '&action=edit'
    # If page title has 'Login required' print 'login required' otherwise print 'found'
    print('Checking ' + url)
    res = requests.get(url)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')
    elems = soup.select('title')
    print(elems[0].getText())
    if 'Login required' in elems[0].getText():
        print('Login required')
    else:
        print('Found')
        # Save the content only inside textarea tag
        elems = soup.select('textarea')
        # Write the content to a file
        outfile = open(os.path.join(outfol, line + '.txt'), 'w')
        outfile.write(elems[0].getText())
        outfile.close()

print('Done')
```
