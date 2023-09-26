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
