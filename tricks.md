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
lines = infile.read().splitlines()
infile.close()

lines = list(filter(None, lines))
print(lines)

outfol = 'mzpages'
# os.makedirs(outfol, exist_ok=True)

for line in lines:
    url = 'https://kb.mozillazine.org/index.php?title=' + line[0].upper() + line[1:] + '&action=edit'
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
        outfile = open(os.path.join(outfol, line + '.txt'), 'w')
        outfile.write(elems[0].getText())
        outfile.close()

print('Done')
```
