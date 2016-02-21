---
layout:     post
title:      Genymotion emulator with Google play services
date:       2016-02-25
summary:    Addin Google play services to the Genymotion Android emulator
comments:   true
categories:
---

This will be a quick one. I wanted to write up how I got play-services to work with [Genymotion](https://www.genymotion.com/). This can serve as a future reference to myself, and hopefully help someone else!

This information is relevant to the following versions:

* **Genymotion version:** 2.6.0
* **VirtualBox version:** 5.0.4

I wanted to get play-services working with Android 6.0 (Marshmellow, API 23). After creating a virtual device using the pre-configured Genymotion default of "Custom Phone - 6.0.0 - API 23 - 768x1280", and following some [instructions I found online ](http://stackoverflow.com/questions/20121883/how-to-install-google-play-services-in-a-genymotion-vm-with-no-drag-and-drop-su) I had little success.

Essentially these instructions will have you:

* Downloading then installing an ARM translation flashable image (a `*.zip`). By dragging it onto the running virtual machine (while it is showing the homescreen)
* Reboot the virtual machine (using `adb reboot`)
* Install a Google apps flashable image using the same procedure, and reboot again.

Its then expected that play-services and the other apps included with the newly flashed image will perform some updates. However, the result for me was an endless loading bar in Google Play and several crash dialogs.

After having already unsuccessfully tried the `ARM - Android 6.0 - nano` download option from [opengapps.org](http://opengapps.org/). I realised that [Genymotion uses the x86 architecture](https://www.genymotion.com/faq/#category-application-deployment) and found that their FAQ specifically says *"An ARM application running on Genymotion is less stable and efficient than an x86 application. Therefore, we strongly recommend that you only use x86 applications with Genymotion."*

Luckily [opengapps.org](http://opengapps.org/) also has a `x86 - Android 6.0 - nano` download option. Installing this (using the same approach as the other zip files) and rebooting the virtual machine has Google Play operating correctly and smoothly (so far!).
