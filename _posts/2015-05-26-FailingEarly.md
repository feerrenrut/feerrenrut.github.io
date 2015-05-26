---
layout:     post
title:      Failing Early
date:       2015-05-26
summary:    Iterating a ideas.
comments:   true
categories: game dev
---

An idea is rarely as good as initially imagined. In order for the idea to become interesting and valuable it must be molded and shaped until it fits its purpose.

## The initial Idea

Recently I was thinking about simple mobile games like Flappy Bird. For those who don't know, it's notoriously challenging whilst also being simple to play. Because the user interface is just a single tap it's very easy to get started. The challenge is getting the timing of the taps right, too late and the bird will collide with the lower pipe, too early and the bird will collide with the top pipe.

![Picture of Flappy Bird game play.](/images/posts/failingEarly/flap.jpg
"Flappy Bird game play.")

Based on my thoughts around this, I have started developing an idea for a mobile (and web) game. The goal is to avoid moving obstacles. The player has to draw a path for the hero to take so that the hero does not come into contact with any of the enemies which are moving in a predictable way. The players score increases the longer they are playing while the number of obstacles would increase, and the obstacles movement (speed / direction) would become increasingly varied. The player would be able to collect powerups that would aid their survival, and boost their points.

## Prototype

<img
class="right fixedWidth"
src="/images/posts/failingEarly/gameplay_path_small.png"
height="188"
alt="Image of the spaceship and path."
title="Spaceship and path.">
The prototype was put together in a few hours using libGdx with Box2d. I chose a spaceship for the hero character, and asteroids for the obstacles. These seemed like choices that would very quickly indicate the goal of the game to the player, since its natural for spaceships to try to avoid asteroids right?

<img
class="right fixedWidth"
src="/images/posts/failingEarly/gameplay2_small.png"
height="150"
alt="Image of the Spaceship exploding when colliding with an asteroid."
title="Spaceship exploding when colliding with an asteroid.">
While far from complete, the mechanic is testable. The path drawn on the screen shows the player where the spaceship will go. If the spaceship collides with the deceptively friendly asteroids, its game over!

## Results

In its current state I don't think the mechanic is very fun. There are regular periods where the player just waits for some obstacles to arrive. The game play is slow and without purpose. Then suddenly an impenetrable wall of asteroids is coming at you and you lose. Interestingly, it is easier to go against the flow of the asteroids than to overtake. When going against the flow, the spaceship only really needs to move side to side. However to go with the flow of obstacles the player must more carefully predict where the asteroid will be once the spaceship has caught up with it. Obviously the player could always attempt to match the speed of the asteroid by weaving back and forth, just following behind it. Another consideration is the control method of the spaceship. Originally I liked the idea that the player had to plan a path and stick with it. However when playing this way it is actually fairly frustrating; an impending collision can be identified far before it happens, and from there it is just a matter of waiting for it to happen with no way to stop it.  

## And to progress?

Based on the assessment of the game in its current state, its clear the game needs some work. Let's not despair, there are still options to explore to improve the gameplay. Perhaps a different control approach, or more careful control of how the asteroids arrive, or the addition of an extra goal to encourage movement when there is no imminent danger. A fourth option is to end development of the project, however while there are still several easy and unexplored ideas I think it is worthwhile to continue.

### Alternative control mechanisms

An alternative approach to control of the ship may make the controls less frustrating. One idea is to let the player use swiping movements to cause 'thrust' from the ship, sending it in the direction of the swipe. The player gains instant feedback of the direction the ship is going to take. A mistake can be spotted and avoided. This approach does not encourage the player to plan ahead, they only need to be able to react to new danger effectively.

As a side note, this scheme could tie in nicely with the idea of adding  extra goals. The ship could have a fuel limit and each swipe might use some fuel. This would likely require a level based game, with a goal. Or fuel canisters that the ship can collect.

### Asteroid movement

The logic controlling the spawning of the asteroids should be improved so that the gaps between the asteroids is more consistent. There should be no periods waiting for something to happen. This also applies to the start of the game, it should start promptly. There should be a short very easy period (for the player to understand the controls) then increase to a moderate difficulty. Games should be short and quickly rewarding.

### Extra goals

The existing goal of staying 'alive' by avoiding the asteroids is perhaps enough. But perhaps adding one or more goals for the player seek out could influence risk taking.

One way to achieve this is to make the game level based. The spaceship may have to make it to a port, wormhole or safety zone. This could be interesting if the asteroids were also attracted to this goal (in the case of the wormhole for instance). The player would then have to get to the goal while avoiding the asteroids.

Another approach could be the introduction of collectible items. These may boost the players score, replenish some depleting resource such as fuel or shield power, speed them up, or perhaps make them invincible for a period.

## Next

For now I think I have enough ideas to continue with, I will post a further update once I have tried out some of these ideas.
