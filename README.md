# firefox-config
Firefox configs for security, privacy, usability and performance

Install UBlock Origin, Sponsorblock and Containers (eg. Google container, facebook container).

## Change user js

You can make firefox suited to your needs and for the maximum security, privacy, usability and performance without very much tweaking by changing the user js in your browser profile.

Firefox profiles are located by default in `~/.mozilla/firefox/` in Linux and `%APPDATA%\Mozilla\Firefox\Profiles\` in Windows.

The following steps are required to initialize or update a Firefox profile.

- Create a new Firefox profile
- Copy `prefsCleaner.bat` (Windows) / `prefsCleaner.sh` (Linux) to profile's Root Directory
- Copy `updater.bat` (Windows) / `updater.sh` (Linux) to profile's Root Directory
- Copy `user-overrides.js` to profile's Root Directory
- Execute updater script
