## Extract all the pref keys

```
awk -F'"' '{print $2}' user.js > keys.txt
```
