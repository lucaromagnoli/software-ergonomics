---
layout: base.njk
title: "The scope of Software Ergonomics"
description: "Where the discipline begins and ends: software ergonomics is responsible for the cognitive demands software imposes, not for human behavior itself."
permalink: scope.html
---

# The scope of Software Ergonomics

<p class="tagline">Where the discipline begins and ends.</p>

<p class="lede">One of the challenges in defining software ergonomics is determining its boundary. Software increasingly mediates activities in the physical world — navigating cities, transferring money, driving vehicles, travelling internationally, accessing healthcare — and poor software design can contribute to distraction, stress, mistakes, and even safety risks. It would be easy for a discipline concerned with cognition to sprawl into a general theory of human behavior. It should not.</p>

Software ergonomics focuses specifically on the cognitive demands imposed by software systems. Nothing more — and nothing less.

## The boundary

Software ergonomics is not responsible for human behavior.

Software ergonomics is responsible for **the cognitive demands software imposes on human behavior**.

The distinction matters because it separates two questions that are routinely conflated: *what people choose to do*, and *what software makes that choice cost*. The first belongs to individuals, and to fields — law, policy, psychology — equipped to address it. The second is a design question, and it belongs to the people who ship the software.

## A worked example: driving

Driving is where this boundary is tested hardest, because it is where the personal-responsibility objection is strongest — and largely correct.

The decision to make a call, read a message, or interact with a device while driving belongs to the driver. The conversation itself is not a software ergonomics problem; humans have conversations in every context, with or without technology. Software ergonomics does not attempt to eliminate that responsibility, and it does not seek to regulate the behavior.

What it examines is how software design *amplifies or reduces* the cognitive burden of the behavior that occurs:

- Does the interface encourage prolonged visual attention, when glances should be measured in fractions of a second?
- Does completing a common action require navigating menus while the vehicle is moving?
- Are notifications competing for attention during active navigation?
- Is voice interaction available, effective, and trusted enough to be the path of least resistance?
- Does the operating system recognize a driving context and suppress non-essential interruptions on its own?
- Are risky interactions frictionless while safer alternatives require additional effort?

The existence of a phone call is not a software ergonomics problem. The design of the software used to initiate, manage, and conduct that call is. The decision to send a message while driving is a human decision. A messaging interface that rewards prolonged visual interaction, complex input, and repeated attention shifts is a design decision — made by someone who was not in the car.

## Human factors vs. software ergonomics

Many real-world outcomes involve human factors that extend beyond software: fatigue, stress, emotional state, passenger conversations, environmental distraction, appetite for risk. These shape outcomes profoundly — and they are not the subject of this discipline. They are the *operating conditions* under which software runs.

Software ergonomics takes those conditions as given and asks one question of the design:

> How does the design of software affect a person's ability to perform real-world tasks safely, efficiently, and with minimal unnecessary cognitive burden?

The human factors are the environment. The software's response to that environment is the discipline.

## A practical test

When it is unclear whether a problem falls within scope, one question usually resolves it:

> If the software were redesigned, would the cognitive burden change?

If yes, it is a software ergonomics concern, because it arises from a design decision. For example:

- A banking app interrupts an urgent transfer with a non-essential reminder. *Redesignable — in scope.*
- A navigation app displays promotional content during active navigation. *Redesignable — in scope.*
- A messaging app demands visual interaction where voice would suffice. *Redesignable — in scope.*
- An operating system permits non-critical interruptions during moments of high load. *Redesignable — in scope.*
- A driver is tired at the end of a long shift. *Not redesignable by software — out of scope, but part of the operating conditions good design must assume.*

## The goal

The goal of software ergonomics is not to control users or to dissolve personal responsibility. It is to ensure that software respects the limits of human attention and cognition — particularly when people are engaged in important, stressful, or safety-critical activities.

In short: software ergonomics is concerned with how software affects human cognitive effort, not with every aspect of human behavior. The central question is always the same:

> How should software behave when the user's attention is already required elsewhere?
