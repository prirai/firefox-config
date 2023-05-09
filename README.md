# firefox-config
Firefox configs for security, privacy, usability and performance

Install UBlock Origin, Sponsorblock and Containers (eg. Google container, facebook container).

## Change user js

You can make firefox suited to your needs and for the maximum security, privacy, usability and performance without very much tweaking by changing the user js in your browser profile.

Firefox profiles are located by default in `~/.mozilla/firefox/` in Linux and `%APPDATA%\Mozilla\Firefox\Profiles\` in Windows.

The following steps are required to initialize or update a Firefox profile.

- Create a new Firefox profile or use an existing one and move to the profile directory. You can navigate to `about:profiles` and find the location for your current profile's root directory as well as find the option to create a new profile. If you want to try this out, you can go with creating a new profile, try it out and make changes and finally delete it make the required changes in your original profile.
- For changing some prefs you can create a new file in profile's Root Directory, `user-overrides.js` and fill it with the prefs you want to override.
- Done! Happy browsing.

If you really liked the project, star it and also contribute back.
