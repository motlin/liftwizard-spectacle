## Agenda
* Define "temporal"
* Goals
* Demo of temporal services
* Focus on what, more than why or how
---

## Define: temporal
* Edits are non-destructive
* All previous versions of the data are saved and accessible
* Technically: unitemporal
* Out of scope: bitemporal
---

## Goals
* Add temporal features to our real services (already started)
* Build interest in unitemporal services in data
* Start thinking about the future of framework support
---

## My Timeline
* 2009 - 2015: Worked temporal applications, then temporal frameworks.
* 2016: UI lead quit, needed to learn react, built a side project with non-temporal firebase backend.
* Also 2017: Joined TS in Data Engineering, working on a bitemporal data platform. Exposure to MSSQL temporal features.
---

## My Timeline Continued
* 2018: Joined Services Engineering as the tech lead
* 2020: Side project popularity growing. Hosting costs growing faster than O(n). Rewrote with a temporal relational schema.
* Also 2020: Merge wrote code review microservices using postgres temporal extensions.
* 2021: Experiments with GraphQL at work and in side project.
---

## Demos
* Side-project: Factorio Blueprints
  * Temporal REST and GraphQL endpoints, not really used by the UI
* Stack Overflow
  * Real life temporal services, but they're not REST
* Liftwizard (the open source bits)
* Focus on **UI** and **services** but happy to discuss the database
---

## Factorio

https://www.factorio.com/

> Factorio is a game in which you build and maintain factories.
>
> You will be mining resources, researching technologies, building infrastructure, automating production, and fighting enemies. Use your imagination to design your factory, combine simple elements into ingenious structures, apply management skills to keep it working, and protect it from the creatures who don't really like you.
>
> The game is very stable and optimized for building massive factories. You can create your own maps, write mods in Lua, or play with friends via Multiplayer.
---

## Factorio Blueprints

https://wiki.factorio.com/Blueprint
> Blueprints are items that contain building layouts. Blueprints are used to 'copy & paste' parts of a factory. Built areas can be selected for inclusion in a blueprint. When a blueprint is placed, a ghost of the layout appears on the ground. This can be used as a guide for manually placing factory pieces, or, more commonly, handed over to construction robots for automated completion.
---

## factorio.school

🎮 My site for Factorio players to share their in-game designs

🕒 [Most recent blueprints](https://www.factorio.school/)

❤️ [Most favorited blueprints](https://www.factorio.school/top)

🔥 [The top blueprint](https://www.factorio.school/view/-KnQ865j-qQ21WoUPbd3)

---

## First look at services

* Most-favorited blueprint as our example.
* We'll change our focus from the UI 
* `./view/-KnQ865j-qQ21WoUPbd3`
* to the REST api
* `./api/blueprint/-KnQ865j-qQ21WoUPbd3`

