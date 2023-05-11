```{=mediawiki}
{{preference|pref=breakpad.reportURL}}
```
## Background

Mozilla applications use a set of libraries called
[Breakpad](Breakpad "wikilink") to handle client-side crash reporting.
When an application crashes, a binary "dump" file is created and
submitted to a central server for analysis. By visiting <about:crashes>,
users may see a listing of the crash reports they've submitted. This
preference determines which report server is linked to on that page.

## Possible values and their effects {#possible_values_and_their_effects}

The breakpad report server linked to in <about:crashes>. Default value
for Firefox is **http://crash-stats.mozilla.com/report/index/**.

## First checked in {#first_checked_in}

[2008-01-24 by Dave
Townsend](http://bonsai.mozilla.org/cvsview2.cgi?command=DIFF&subdir=mozilla%2Ftoolkit%2Fcrashreporter%2Fcontent&file=crashes.xhtml&rev1=1.1&rev2=1.1&whitespace_mode=show&diff_mode=full)

## Has an effect in {#has_an_effect_in}

-   Firefox (nightly builds since 2008-01-24)

## Related bugs {#related_bugs}

-   [Bug 411490 -
    <about:crashes>](https://bugzilla.mozilla.org/show_bug.cgi?id=411490)

## See also {#see_also}

-   [Breakpad](Breakpad "wikilink")

## External links {#external_links}

-   [Breakpad (Mozilla Wiki)](http://wiki.mozilla.org/Breakpad)
-   [A Handy Way to access your list of Breakpad crashes
    (QMO)](http://archive.quality.mozilla.org/node/1277)

[Category:Preferences](Category:Preferences "wikilink")
