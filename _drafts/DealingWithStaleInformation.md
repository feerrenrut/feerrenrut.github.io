---
layout:     post
title:      Dealing with stale information
date:       2014-09-27
summary:    Strategies for dealing with potentially stale information that you need to present to a user
comments:   true
categories:
---

* In order to speed up the presentation of the initial list of weather stations
in WindCast I have been working on caching this information. Storing the list of
stations in the applications database. However using this stale data presents
the possibility that the list of stations may no longer be valid. From my
observations this seems to be unlikely, but it's got me thinking generally about
strategies for dealing with stale data while maintaining good UX.

* Present the stale data
* If a reasonable period has passed since the data was gathered attempt to
  collect fresh data.
  * Merge this data in? Modifying the view?
  * Just update the cache, dont modify the view until it is reloaded?

* What do you do when a user selects an item that is incorrect, or no longer
  available?
