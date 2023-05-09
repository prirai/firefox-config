user_pref("accessibility.force_disabled", 1);

user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.background.scheduling.enabled", false);

user_pref("beacon.enabled", false);

user_pref("breakpad.reportURL", "");

user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
user_pref("browser.discovery.enabled", false);
user_pref("browser.display.use_system_colors", false); // [DEFAULT false NON-WINDOWS]
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false]
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [FF79+]
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.sessionstore.interval", 30000); // [DEFAULT: 15000]
user_pref("browser.sessionstore.privacy_level", 1); // [DEFAULT: 0]
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.theme.dark-private-windows", false);
user_pref("browser.uidensity", 0);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.xul.error_pages.expert_bad_cert", true);

user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

user_pref("devtools.chrome.enabled", false);
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]

user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.ipc.processCount", 1000);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.storage.next_gen", true); // [DEFAULT: true FF92+]

user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]

user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]

user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.force-disabled", false);

user_pref("intl.accept_languages", "en-US, en");

user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]

user_pref("keyword.enabled", true);

user_pref("layers.gpu-process.enabled", true);
user_pref("layers.mlgpu.enabled", true);
user_pref("layers.mlgpu.sanity-test-failed", false);

user_pref("media.autoplay.blocking_policy", 2);
user_pref("media.eme.enabled", false);
user_pref("media.ffmpeg.dmabuf-textures.enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.gpu-process-decoder", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

user_pref("middlemouse.contentLoadURL", false);

user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
user_pref("network.IDN_show_punycode", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.proxy.socks_remote_dns", true);

user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]

user_pref("permissions.delegation.enabled", false);
user_pref("permissions.manager.defaultsUrl", "");

user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.cookies", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("privacy.clearOnShutdown.formdata", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.clearOnShutdown.sessions", false);  // [DEFAULT: true]
user_pref("privacy.cpd.cache", true);    // [DEFAULT: true]
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.formdata", true); // [DEFAULT: true]
user_pref("privacy.cpd.history", true);  // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
user_pref("privacy.partition.serviceWorkers", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

user_pref("security.ask_for_password", 2);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.csp.enable", true); // [DEFAULT: true]
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
user_pref("security.family_safety.mode", 0);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1]
user_pref("security.OCSP.require", true);
user_pref("security.password_lifetime", 5); // [DEFAULT: 30]
user_pref("security.pki.crlite_mode", 2);
user_pref("security.pki.sha1_enforcement_level", 1); // [DEFAULT: 1 FF102+]
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]

user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);

user_pref("svg.context-properties.content.enabled", true);

user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.winRegisterApplicationRestart", false);

user_pref("webchannel.allowObject.urlWhitelist", "");

user_pref("webgl.disabled", true);

user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]

