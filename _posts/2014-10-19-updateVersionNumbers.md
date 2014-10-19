---
layout:     post
title:      Lessons on version numbers
date:       2014-10-19
summary:	Set / update version numbers for each Android release
categories:
comments: true
---

I recently learned a lesson on the the importance of having a sensible versioning
scheme in Android.

### tl;dr

* Setting the version name for each Android release is important!
* If you update the `versionCode`, also update the `versionName`.

{% highlight c %}
versionCode 11
versionName "1.1"
{% endhighlight %}

### The Downlow

Android applications have two version identifiers available, `versionCode` and
`versionName`. In order for users to install a fresh release of your app, the
`versionCode` **must** be updated. This is used internally to uniquely identify
each release to the Android operating system. The `versionName` is simply the
user visible version string. It is easy and understandable to wish to have a
target set of features complete before setting a milestone version. However this
can cause problems further down the line.

{% img "right fixedWidth" /images/posts/updateVersionNumbers/crashVersionInfo.png 153 292 %}
Unfortunately the `versionCode` is not included in the **crash report**
information via the Play Developer Console. Which can make it very
hard to know which version someone was using when they encountered a problem.
Luckily the `versionName` _is_ included in the crash data allowing identification
of the release, _if_ it was updated

### A Release process?

My suggestion is to ensure that the `versionName` is updated whenever the
`versionCode` is updated. Perhaps this can be automated with a gradle script?
