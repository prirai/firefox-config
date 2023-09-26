# firefox-config
Firefox configs for security, privacy, usability and performance

Install UBlock Origin, Sponsorblock, Decentraleyes and Containers (eg. Google container, facebook container).

## Change user js

You can make firefox suited to your needs and for the maximum security, privacy, usability and performance without very much tweaking by changing the user js in your browser profile.

Firefox profiles are located by default in `~/.mozilla/firefox/` in Linux and `%APPDATA%\Mozilla\Firefox\Profiles\` in Windows.


- Create a new Firefox profile or use an existing one and move to the profile directory. You can navigate to `about:profiles` and find the location for your current profile's root directory as well as find the option to create a new profile. 
- If you want to try this out, you can go with creating a new profile.
- Copy user.js to your profile's root directory test it out for sometime and make the required changes in your original profile.
- For changing some prefs you can create a new file in profile's Root Directory, `user-overrides.js` and fill it with the prefs you want to override. Now, append the content at the end of `user.js` file.
- Done! Happy browsing.

## Manual Hardening

Refer to this guide - [The Hitchhiker’s Guide to Online Anonymity](https://anonymousplanet.org/guide.html#firefox-1)

## Extensions for Themes

- KDE Theme - [Here](https://addons.mozilla.org/en-US/firefox/addon/astitva-kde/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
- Blue - [Here](https://addons.mozilla.org/en-US/firefox/addon/astitva-blue/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
- Matte Glow - [Here](https://addons.mozilla.org/en-US/firefox/addon/astitva-matte-glow/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
- OpenSUSE - [Here](https://addons.mozilla.org/en-US/firefox/addon/astitva-opensuse/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

## Custom UserChrome

- If you also want to change the appearance of Firefox to give it a look you prefer, you can try searching for some userchrome projects on [GitHub](https://github.com/search?q=firefox%20userchrome&type=repositories) or elsewhere and give them a try.

If you really liked this project, star it and also contribute back.

