// 1601: Allow cross-domain logins (e.g. Atlassian)
//user_pref("network.http.referer.XOriginPolicy", 0);

//usability
user_pref("keyword.enabled", true);

user_pref("privacy.clearOnShutdown.history", false);

user_pref("browser.sessionstore.privacy_level", 0);

user_pref("privacy.sanitize.sanitizeOnShutdown", false);

user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.formdata", false);

user_pref("privacy.clearOnShutdown.sessions", false);  // [DEFAULT: true]


//Performance
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.force-disabled", false);
user_pref("gfx.webrender.all", true);
user_pref("dom.ipc.processCount", 1000);
user_pref("layers.mlgpu.enabled", true);
user_pref("layers.mlgpu.sanity-test-failed", false);
user_pref("media.gpu-process-decoder", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.ffmpeg.dmabuf-textures.enabled", true);

//Persist logins
user_pref("privacy.clearOnShutdown.offlineApps", false);
user_pref("privacy.cpd.offlineApps", false);
