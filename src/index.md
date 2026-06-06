---
layout: base.njk
title: Designing software that works with human cognition, not against it
description: "Software Ergonomics is the practice of designing software around human cognitive limits — especially under stress, urgency, fatigue, and high cognitive load."
permalink: index.html
---

# Software Ergonomics

<p class="tagline">Designing software that works with human cognition, not against it.</p>

<p class="lede">Physical ergonomics asks how tools fit the human body — its reach, its strength, its limits. Software ergonomics asks the same question of the mind: how well does software fit human attention, memory, and judgment, especially in the moments when those resources are scarcest?</p>

This site is the start of a conversation, not a campaign. It is addressed to the people who make software — engineers, designers, product managers, researchers, accessibility advocates, and platform providers — about a constraint we routinely underweight: the cognitive cost of using what we build.

## What is Software Ergonomics?

Software ergonomics is the practice of treating **cognitive load as a first-class design constraint** — alongside performance, security, accessibility, and correctness — and of designing for the user's actual cognitive state, not an idealized one.

The discipline it draws from is older than software. Human factors engineering emerged when investigators realized that many "pilot errors" were really design errors: identical levers placed side by side, critical gauges positioned where eyes don't go under stress. The insight was not that pilots should try harder. It was that *the machine should carry more of the burden*, because human capacity is a fixed input, not a variable to be optimized away.

Software ergonomics applies that insight to the interfaces we now use to run our lives. Its core premises:

- **Human attention is a finite resource.** Every prompt, badge, banner, and modal spends some of it. That spending should be accounted for, the way we account for memory or battery.
- **Cognitive capacity varies with context.** Working memory is small at the best of times; under stress, fatigue, or time pressure it shrinks further and attention narrows. Software that assumes a calm, focused user fails precisely when the stakes are highest.
- **Interruption has a real cost.** Task-switching research consistently shows that recovering from an interruption takes far longer than the interruption itself. Costs that are invisible in a usability lab compound in real life.
- **The user's goal is the unit of design.** Not the session, not the funnel, not the feature — the task the person is actually trying to complete.

A discipline is also defined by what it is *not*: software ergonomics is responsible for the cognitive demands software imposes, not for human behavior itself. [Where the discipline begins and ends →](scope.html)

## Why does it matter?

Because software stopped mediating only work and entertainment and started mediating **life**. Consequential real-world tasks — moving money, proving identity, navigating, coordinating care, operating vehicles — now run through software on every surface: phones, desktops, web apps, cars, kiosks, hospital systems, the tools people use under deadline at work.

The smartphone is the sharpest example, not the whole story. The same pocket computer used for casual browsing is now the instrument for payments and banking, boarding passes and train tickets, turn-by-turn navigation in unfamiliar cities, two-factor authentication, medical information, and emergency coordination — critical infrastructure that happens to share a screen with entertainment, running interfaces designed, in large part, around engagement. But the same pattern appears wherever software meets a consequential task: the airline kiosk during a disruption, the in-car screen at a junction, the claims portal after the accident it exists for.

This creates a mismatch. The moments when software matters most — transferring money urgently, rebooking a cancelled flight, finding a place to stay tonight — are exactly the moments when the user has the least cognitive capacity to spare. Stress narrows attention. Urgency degrades working memory. Fatigue erodes impulse control and error-checking. A design that is merely mildly annoying to a relaxed user can be genuinely failure-inducing to a stressed one.

Meanwhile, most software is evaluated under the opposite conditions: a focused user, a single task, a quiet room. We measure conversion, retention, and engagement with precision, while the cognitive burden imposed on the user goes largely unmeasured — and what isn't measured tends to grow.

None of this requires bad intent. Each prompt, tip, rating request, and upsell is locally reasonable and individually small. The problem is aggregate and systemic: dozens of teams, each optimizing its own surface, sharing a single user's attention budget that none of them can see.

Stress is where the case is clearest, though — not where the discipline ends. Like physical ergonomics, software ergonomics is about reducing unnecessary strain under *all* conditions; a chair is not ergonomic only when you are injured. [Beyond stress →](beyond-stress.html)

## What problems is it trying to solve?

Software ergonomics names a category of failure that currently falls between existing disciplines. Some recurring patterns:

### Interruption at the worst possible moment

A rating prompt during navigation. A feature announcement mid-payment. A "what's new" tour blocking the screen someone opened to do one urgent thing. The interruption is scheduled by the software's calendar — release dates, engagement cadences — with no model of the user's current state.

### Engagement optimization in task-critical contexts

Mechanisms designed to extend sessions and drive discovery are defensible in entertainment contexts. Applied to banking, travel, and logistics, the same mechanisms tax users who came to complete a task and leave.

### Security ceremony that ignores cognitive state

Authentication and confirmation flows are often hardest exactly when users are least equipped for them — roaming on a foreign network, on a low battery, under time pressure. Security and usability are then framed as a trade-off, when a flow that confuses a legitimate user under stress is itself a security failure: confused users fall back to insecure workarounds.

### Cognitive load as an externality

Attention spent re-finding a buried setting, dismissing a prompt, or re-orienting after an interruption is a cost paid entirely by the user. It appears on no team's dashboard, so no team is accountable for it.

### Designing for the average moment, not the critical one

Most testing assumes a calm, attentive user on a good network. But software's value is often concentrated in its worst-case moments — and that is the case we test least.

These are not complaints about any particular product. They are properties of the current equilibrium — one that individual teams cannot easily exit alone, which is why this needs to be a shared conversation rather than a private discipline.

## Passwords: the case study we already ran

If software ergonomics needs empirical grounding, it has one — fifty years of it. The memorized secret — the password, the PIN, the "memorable word," the security question — is the purest example of anti-ergonomic design in computing, and the most consequential. It takes the human faculty that is weakest, most variable, and most degraded by stress — recall of arbitrary information — and makes it load-bearing for security.

Humans responded the way humans predictably respond to impossible demands: they routed around them. Passwords reused across accounts. Predictable patterns. Secrets written down, stored in notes apps, told to family members. Recovery flows built on still weaker secrets — a pet's name, a mother's maiden name — that are often public information. Attackers noticed long ago that the cheapest way through a system is not the cryptography but the human holding the secret: stolen and reused credentials remain, year after year, among the most common entry points in real-world breaches. Phishing works because a memorized secret is, by its nature, phishable.

The instructive part is how the industry tried to fix it — and what finally worked. For decades the response was to demand *more* cognition: longer passwords, mandatory rotation, composition rules. These policies measurably backfired — users responded with `Password1!`, then `Password2!` — and official guidance has since reversed. What actually moved the needle was removing the cognitive burden altogether: password managers, biometric unlock, hardware keys, passkeys. Every one of these is an ergonomic correction — the same security goal, relocated from human memory to a machine.

The lesson generalizes well beyond authentication. When software demands more cognition than humans reliably have, humans improvise; improvisation under load is where both errors and breaches live. Cognitive load is not a comfort metric. It is an attack surface.

## What might better software look like?

Better is concrete and largely achievable with what we already know. Some working principles:

- **Budget attention like memory.** Treat every interruption as an allocation from a finite budget. Make the spending visible internally: how many prompts does a user see per task? Per week? Who approved them?
- **Design for the stressed path, not just the happy path.** Walk critical flows assuming a distracted user, a deadline, a foreign network, 8% battery. If the flow only works for a calm user, it doesn't work.
- **Defer everything non-essential.** Tips, tours, ratings, upsells, and announcements rarely need to happen *now*. "Later" should be the default, not a button the user has to find.
- **Make state legible at a glance.** Under load, users lose track of where they are in a process. Show progress, confirm outcomes unambiguously, and make "did that work?" answerable without investigation.
- **Treat security, accessibility, usability, and cognitive load as one system.** They are complementary, not competing: designs that reduce confusion reduce error, and reducing error is what security and accessibility are for. The password's collapse, above, is what ignoring this looks like; the passkey is what honoring it looks like.
- **Let the user declare their state.** Software cannot reliably infer stress — but it can offer an honest way for users to say "not now." Which brings us to a concrete proposal.

## Should critical-use software be held to a higher bar?

One implication of the critical-infrastructure argument deserves to be stated — carefully, and as a question rather than a demand.

Every other engineering field scales scrutiny to consequence. Software that flies aircraft or runs an infusion pump passes certification a game never faces. App platforms already apply a version of the same logic: financial, health, and children's apps face additional review requirements today, and accessibility law in several jurisdictions applies specifically to banking and public services. The principle — higher stakes, stricter checks — is not new. What's missing is its application to cognitive load.

If an app is the instrument for moving money, boarding a flight, or coordinating in an emergency, it is critical-use software in any meaningful sense — and its ergonomic properties are as consequential as its privacy or accessibility properties. Does it interrupt mid-task? Does its critical path survive a stressed user on a foreign network at 8% battery? These are testable questions, and nothing currently requires anyone to ask them.

Three refinements keep this idea honest:

- **The unit of classification should be the flow, not the app.** The same application is leisure when browsing and critical when rebooking a cancelled flight at midnight. App-level labels invite boundary disputes; designated *critical flows* — payments, booking changes, authentication, emergency features — match how software is actually built and used.
- **The mechanism already exists.** Platforms review apps today for privacy, safety, and notification abuse. Extending review to ergonomic properties of critical flows — no software-initiated interruptions on the task path, legible state, stressed-path performance — is an increment to an existing practice, not a new regime.
- **The bar must be ergonomic, not bureaucratic.** Certification has known failure modes: compliance costs that entrench incumbents, checklists that ossify. What's proposed for discussion is a small set of testable properties, not paperwork.

Framed this way, it is less a policy proposal than a question to the platforms: you already hold apps to category-specific standards for privacy, safety, and accessibility. Is cognitive load on a payment flow any less reviewable?

<section class="proposal" aria-labelledby="a-proposal-not-now-mode">

## A proposal: Not Now Mode

A system-wide, user-activated mode for moments of urgency, stress, or high cognitive load. When enabled, the operating system and participating applications suppress everything non-essential — reminders, tips, review requests, upsells, engagement prompts, feature announcements — while preserving the communications and actions the user needs to complete their task.

*Do Not Disturb* protects you from other people. Not Now Mode protects you from the software itself.

It is deliberately modest: no inference, no machine-learned guessing about your mental state. You declare "I am dealing with something"; the system and its applications respond by getting out of the way.

<p><a class="button" href="not-now-mode.html">Read the full proposal →</a></p>

</section>

## Doesn't Do Not Disturb already solve this?

No — and the reason why is the heart of the matter.

*Do Not Disturb*, *Focus* modes, and notification settings all govern the **notification channel**: things pushed at you from outside while your attention is elsewhere. They were designed to protect you from the outside world, and within that scope they work — but only bluntly.

**Blunt, because they suppress by channel, not by consequence.** To *Do Not Disturb*, an emergency call and a promotional blast are the same kind of object — a notification — and silencing one means risking the other. The workarounds (allowed contacts, repeated-call exceptions) are approximations the user must configure in advance, guessing who might need to reach them in a crisis. This has a perverse result: a genuine emergency is exactly when you *cannot* afford *Do Not Disturb*, because staying reachable is part of the task — and exactly when you most need everything else to be quiet. The one control we have couples calm to unreachability, when the situations that matter most demand both calm *and* reachability at once.

And blunt in a second way: a large share of the interruptions that matter never travel through the notification channel at all. They are **inherent to the application itself**: the modal that opens on launch, the rating request that appears mid-task, the feature tour laid over the screen you came for, the upsell placed between you and the confirm button. These fire *when you open the app to do something* — which is exactly the moment notification controls cannot help, because you are actively using the phone. There is no setting for them. There has never been a setting for them.

Careful notification curation shares the same blind spot, and adds two limits of its own:

- **It is configuration work.** Per app, per channel, revisited every time an app adds a new notification type. Managing the controls is itself a cognitive task — paid by the user, again.
- **It is static.** Settings express *never* or *always*. The actual need is situational: this prompt might be welcome on a quiet Sunday and intolerable while rebooking a cancelled flight. "Not now" is not expressible in any current control.

So the problem cannot be configured away with existing tools. The interruptions that cost the most in critical moments live inside the apps, on the task path itself — and addressing them requires treating them as a design concern, not a settings concern.

## Start the conversation

Software ergonomics will not be established by one site, one team, or one platform feature. It becomes real the way accessibility and security did: through shared vocabulary, accumulated evidence, design patterns, and eventually expectations.

If you build software — write the code, design the flows, decide the roadmap, research the users, or run the platform — this concerns the thing you ship. Argue with it, extend it, test it against your own product. The discussion is the point.
