---
layout:     post
title:      Genymotion emulator with Google play services
date:       2016-02-22
summary:    Addin Google play services to the Genymotion Android emulator
comments:   true
categories:
---

This will be a quick one, a simple write up of how I got play-services to work in an emulator. This can serve as a future reference to myself, and hopefully help someone else!

Emulator options:

* [Genymotion](https://www.genymotion.com/)
* Android emulator using Google APIs

I wanted to get play-services working with Android 6.0 (Marshmallow, API 23). Play-services are available when using the Android emulator (for virtual devices with a target that includes "Google APIs"). It is straight forward to get started with the emulator, however my experience has been that it is slow and unstable (even with HAXM). So instead I have decided to try and install Google Apps onto Genymotion. Genymotion previously had Google apps included in their virtual device image but they were [removed due to copyright concerns](https://plus.google.com/u/0/+GenymotionEmulator/posts/jNF8Kwu5p1c).

This information is relevant to the following versions:

* **Genymotion version:** 2.6.0
* **VirtualBox version:** 5.0.4

After creating a virtual device using the pre-configured Genymotion default of `Custom Phone - 6.0.0 - API 23 - 768x1280`, and following some [instructions I found online ](http://stackoverflow.com/questions/20121883/how-to-install-google-play-services-in-a-genymotion-vm-with-no-drag-and-drop-su) I had little success.

Essentially these instructions will have you:

* Downloading then installing an ARM translation flashable image (a `*.zip`). By dragging it onto the running virtual machine (while it is showing the homescreen)
* Reboot the virtual machine (using `adb reboot`)
* Install a Google apps flashable image using the same procedure, and reboot again.

Its then expected that play-services and the other apps included with the newly flashed image will perform some updates. However, the result for me was an endless loading bar in Google Play and several crash dialogs.

After having already unsuccessfully tried the `ARM - Android 6.0 - nano` download option from [opengapps.org](http://opengapps.org/). I realised that [Genymotion uses the x86 architecture](https://www.genymotion.com/faq/#category-application-deployment) and found that their FAQ specifically says *"An ARM application running on Genymotion is less stable and efficient than an x86 application. Therefore, we strongly recommend that you only use x86 applications with Genymotion."*

Luckily [opengapps.org](http://opengapps.org/) also has a `x86 - Android 6.0 - nano` download option. Installing this (using the same approach as the other zip files) and rebooting the virtual machine has Google Play operating correctly and smoothly (so far!).

### Update Android 5.1

I have found this same process does not work with the Genymotion Android 5.1 image. A message is displayed fairly quickly to tell you that flashing failed. I extracted the logs to inspect the error and found the following:

    02-21 23:27:48.119 I/check-archive.sh( 3233): [check-archive.sh] update-binary found in /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip; return 0
    02-21 23:27:50.391 I/flash-archive.sh( 3239): /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip seems to be a zip archive
    02-21 23:27:50.395 I/flash-archive.sh( 3241): [flash_archive] Creating tmp dir
    02-21 23:27:50.414 I/flash-archive.sh( 3245): [flash_archive] Unzip archive
    02-21 23:27:50.526 I/flash-archive.sh( 3247): [flash_archive] Remount /system/ in rw
    02-21 23:27:50.531 I/flash-archive.sh( 3249): [flash_archive] Start file install
    02-21 23:27:50.536 I/flash-archive.sh( 3253): [flash_archive] META-INF/com/google/android/update-binary is a shell script, executing it
    02-21 23:27:50.545 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.547 I/update-binary( 3255):   inflating: app_densities.txt
    02-21 23:27:50.549 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.550 I/update-binary( 3255):   inflating: app_sizes.txt
    02-21 23:27:50.552 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.554 I/update-binary( 3255):   inflating: bkup_tail.sh
    02-21 23:27:50.555 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.557 I/update-binary( 3255):   inflating: gapps-remove.txt
    02-21 23:27:50.559 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.561 I/update-binary( 3255):   inflating: g.prop
    02-21 23:27:50.563 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.565 I/update-binary( 3255):   inflating: installer.sh
    02-21 23:27:50.567 I/update-binary( 3255): Archive:  /sdcard/Download/open_gapps-x86-5.1-nano-20160216.zip
    02-21 23:27:50.569 I/update-binary( 3255):   inflating: busybox
    02-21 23:27:50.573 I/update-binary( 3255): Bad mode
    02-21 23:27:50.574 I/update-binary( 3255): META-INF/com/google/android/update-binary[34]: /tmp/busybox: can't execute: Permission denied
    02-21 23:27:50.575 I/update-binary( 3255): META-INF/com/google/android/update-binary[35]: /tmp/busybox: can't execute: Permission denied
    02-21 23:27:50.575 I/update-binary( 3255): update-binary terminated by exit(126)
    02-21 23:27:50.577 E/flash_archive( 3267): [ERROR][execute_update_binary] execution of update-binary ended with errors


The [opengapps GitHub pages has some more information](https://github.com/opengapps/opengapps/issues/135). The useful part (for me) is that Genymotion have been asked about this, and they are in the process of supporting this method of flashing Google apps. Android 6.0 support will come first, with support coming for other virtual device versions later.

### Getting Google apps to work on Android 5.1.

After some messing around I found that the old method DOES work for Android 5.1. However given the feedback on the opengapps github issue, I would suggest trying that method first. For one thing the x86 Google apps flashable archive results in a much faster and smoother user experience. It's also possible that after a future update of the older Android 5.1 image may no longer support this method.

* Install the `ARM translation v1.1` flashable archive, then reboot.
* Install `ggapps-lp-20150314-signed.zip` from  [teamandroid](http://www.teamandroid.com/gapps/) (and reboot).
* Sign in to the Google Play store.
* Google play may need to update, to check:
   * Open the Play store.
   * Go to settings
   * Tap on `Build version`
   * A message will be displayed to let you know if it is up to date. If it is not, wait a while then reboot and check again.
