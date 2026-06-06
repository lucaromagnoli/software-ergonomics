---
layout: base.njk
title: "Not Now Mode — a proposal"
description: "A proposal for a system-wide, user-activated mode that suppresses non-essential interruptions during moments of urgency, stress, or high cognitive load."
permalink: not-now-mode.html
---

# Not Now Mode

<p class="tagline">A proposal for a system-wide signal that the user is dealing with something.</p>

<p class="lede">Not Now Mode is a user-activated mode for moments of urgency, stress, or high cognitive load. When enabled, the operating system and participating applications suppress non-essential interruptions — reminders, tips, educational messages, upsells, review requests, engagement-driven prompts — while preserving the communications and actions required to complete the user's task.</p>

*Do Not Disturb* protects you from other people. Not Now Mode protects you from the software itself.

## Where this came from

Like most design ideas, this one began with a specific moment rather than a theory.

A trip to Cannes. A confirmed hotel reservation that, on arrival, was not honoured. Evening, unfamiliar city, luggage in hand, accommodation to re-solve immediately — the textbook high-load situation. I opened the booking platform's app to fix it: the same platform that was partly responsible for the situation I was in.

Before I could do anything, the app had news for me. Today was my lucky day — I had reached a new loyalty tier. Celebratory copy, congratulations, an explanation of my new perks, all between me and the search box.

What makes the moment instructive is that nothing about it was malicious, or even unusual. The prompt was scheduled by an engagement calendar and triggered by an app launch. It was working exactly as designed. No one decided to congratulate a stranded customer; the system simply had no concept of *this user is in trouble right now* — and I had no way to tell it. No setting I could have configured in advance would have prevented it, because it wasn't a notification. It was the application itself.

It would be easy to file that under marketing excess. But the pattern shows up in sober contexts too. On another occasion, needing to transfer money urgently, I opened my banking app and was met with a prompt about setting up a PIN reminder before I could reach the transfer. A reasonable piece of security housekeeping — at almost any other moment. (The memorized PIN itself is [its own ergonomic failure](index.html#passwords-the-case-study-we-already-ran); even granting the PIN, the timing was the failure here.) It was timed by the app's checklist, not by my situation, and it stood directly on the path of the one task that mattered. When even the prompts *about* security get in the way of urgent banking, the problem is clearly not which prompts we show. It is that nothing in the system asks *whether now is the time*.

Everyone has a version of this story. The mode is named after the only thing I wanted to say to my phone that evening in Cannes.

## The gap it fills

Interruptions reach a user through three routes, and only two of them have controls today:

1. **Notifications from people** — calls, messages. Fully controllable: *Do Not Disturb* and *Focus* modes exist precisely for these.
2. **Push notifications from apps** — partially controllable, per app and per channel, at the cost of ongoing configuration work.
3. **Interruptions inherent to the application itself** — the onboarding tour, the launch-time modal, the rating prompt, the subscription offer, the "did you know?" tooltip, the badge engineered to be clicked. **No control exists for these.** They don't travel through the notification channel, so notification tools cannot reach them; they fire on app launch or screen entry, so they arrive precisely while you are using the phone.

The third category is the gap. Its interruptions are individually small and individually defensible, but they share three properties that make them disproportionately costly at the wrong moment:

1. **They are timed by the producer, not the user.** Release schedules and engagement cadences decide when they appear; the user's situation does not.
2. **They arrive mid-task by design.** Most are triggered by app launch or screen entry — which is to say, exactly when the user has just started doing something.
3. **They demand a decision.** Even dismissing a prompt requires reading it, classifying it, and finding the dismissal affordance. Under cognitive load, that is not free.

The user knows when they are under load. The software does not, and should not try to guess. So the proposal is simply to give the user a way to say it — once, system-wide — and to define what well-behaved software does in response.

## How it would work

**The user activates it.** One toggle, as prominent and as instantly understood as *airplane mode*. No configuration required to get sensible behavior.

**The OS handles its own surfaces.** System tips, setup reminders, software-update nags, feature promotions, and other OS-originated non-essentials are deferred while the mode is active.

**The OS exposes the state to applications.** A single read-only API — *is the user in Not Now Mode?* — analogous to how platforms expose "reduce motion" or "dark mode" today. Apps don't learn why; they only learn that now is not the time.

**Applications respond by deferring, not by degrading.** The app remains fully functional. Everything the user initiates works normally. What changes is what the *app* initiates: it stops volunteering things.

**The mode ends.** Manually, or after a chosen duration. Deferred material can be surfaced later — batched, in a place the user visits voluntarily — rather than dropped.

## What is suppressed, what is preserved

The dividing line is not "important vs. unimportant." It is **who needed this to happen right now — the user, or the software?**

| Suppressed (software-initiated) | Preserved (task- or user-essential) |
| --- | --- |
| Rating and review requests | Everything the user explicitly initiates |
| Feature tours, tips, "what's new" screens | Transaction confirmations and their results |
| Upsells, cross-sells, subscription offers | Security verifications required to complete the task |
| Re-engagement notifications ("we miss you") | Messages and calls from people (per existing notification settings) |
| Streak, badge, and gamification prompts | Errors, failures, and warnings about the current task |
| Non-critical update prompts | Time-critical information the user is depending on (gate changes, delivery updates, safety alerts) |
| Surveys and feedback requests | Accessibility features, in full |
| Promotional and marketing notifications | Genuine emergencies, always |

Hard cases exist — is a fraud warning task-essential? (Yes.) Is a "complete your profile for better security" prompt? (No: defer it.) The test that resolves most of them: *if this is suppressed for an hour, is the user's current task harmed?* If not, it waits.

## When it would be used

- **Transferring money urgently** — and needing the banking app to be an instrument, not a storefront.
- **Navigating an unfamiliar city** — where every glance at the screen is paid for in situational awareness.
- **Resolving a travel disruption** — rebooking a flight, finding a train, coordinating accommodation, often on a foreign network with limited battery.
- **Completing time-sensitive administrative tasks** — visa applications, insurance claims, tax deadlines.
- **Coordinating in a minor emergency** — a missed connection, a lost wallet, a family member who needs help now.

What these share: the phone is the critical tool, the task has a deadline, and the user's working memory is already fully committed. The marginal interruption that costs two seconds on a calm day costs a wrong turn, a misread digit, or an abandoned flow on a bad one.

## Prior art

The proposal is less novel than it might sound. It extends three patterns that already work:

- ***Do Not Disturb* and *Focus* modes** established that interruption is a user-controlled, OS-level concern — but they govern notifications from outside, not behavior from within apps, and they suppress by channel rather than by consequence, coupling calm to unreachability. Not Now Mode inverts the trade: people stay loud, software goes quiet.
- **`prefers-reduced-motion` and `prefers-color-scheme`** established the contract: the user declares a preference once, the platform exposes it as a queryable signal, and well-behaved software adapts. Not Now Mode is `prefers-reduced-interruption`.
- ***Airplane mode* and *reader mode*** established that users understand and value coarse, instantly-legible modes that trade capability for calm.

Each of these began as an unusual idea and became an expectation. The mechanism — a declared user state that software is expected to respect — is proven. What's missing is the cognitive-load instance of it.

## Open questions

An honest proposal names its hard problems:

- **Incentives.** Suppressed prompts are suppressed conversions. Why would app makers participate? Possible answers: platform policy (as with privacy and accessibility requirements), user trust as a competitive asset, and the observation that prompts shown at hostile moments convert badly and breed resentment anyway. None of these is automatic; this is the central difficulty.
- **Boundary enforcement.** What stops an app from classifying its upsell as "task-essential"? Platform review and policy can police the worst cases, as they do for notification abuse today — imperfectly, but meaningfully.
- **Defaults and duration.** Should the mode time out? Should some users — during a bereavement, a move, a crisis that lasts weeks — be able to live in it? Probably yes, which raises the question of whether "not now" is sometimes simply "not ever."
- **The deeper version.** If software is only tolerable with the interruptions turned off, the interruptions were the problem. Not Now Mode is a mitigation, not an absolution; the long-term goal is software that doesn't need a mode to behave this way.

## What you can do without waiting for a platform

Nothing prevents a single team from implementing the spirit of this today:

- **Audit your interrupt surface.** List every prompt, modal, tooltip, and notification your product can initiate. For each: who needed it to happen at that moment?
- **Add the deferral path.** Every software-initiated prompt should be dismissible in one action and should honor the dismissal — "later" that means later, not "again at next launch."
- **Gate non-essentials on task state.** If the user is mid-payment, mid-navigation, or mid-form, the answer to "should we show this now?" is no. You already know the user's task state; use it.
- **Walk your critical flows under load.** Test the rebooking flow at 8% battery on a throttled connection with a timer running. What you find will not require a platform API to fix.

---

If this proposal is wrong, the useful response is a better one. The premise it rests on — that users need a way to lower the cognitive volume of their tools during critical moments — seems harder to dispute than any particular mechanism. Argue with the mechanism.
