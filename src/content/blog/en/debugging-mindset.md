---
title: Debugging Is a Discipline, Not a Talent
description: The difference between developers who debug quickly and those who struggle is mostly method, not intuition. Here is how to build the method.
date: "2025-03-08"
updatedDate: "2025-03-08"
category: thoughts
readTime: 6
lang: en
---

## The myth of debugging intuition

Experienced developers seem to find bugs quickly, and this is often attributed to intuition or pattern recognition built from years of practice. That framing is misleading. What looks like intuition is usually a disciplined method applied fast enough that the steps become invisible.

The method is learnable. The speed comes later.

## Reproduce before you investigate

The first step is always to produce a minimal reproduction. If you cannot make the bug appear reliably, you do not understand what causes it yet. Debugging a bug you cannot reproduce is guesswork, and guesswork is expensive.

Start with the smallest possible input that still triggers the issue. Remove code, configuration, and data until the failure is isolated. This process is itself diagnostic — what you remove and what you have to keep tells you where the problem lives.

## Form a hypothesis before you change anything

The most common mistake in debugging is jumping straight to changing code. You change something, the bug disappears, and you do not know why. Now you have a fragile fix you do not understand and cannot explain.

Instead: read the error. Trace the execution path. Form a specific hypothesis about what is wrong. Then design a test that would falsify the hypothesis if you are wrong. Only then change something — and change exactly one thing.

If the bug persists, your hypothesis was wrong. Update it based on the new information and test again. This is the scientific method applied to code, and it is much faster than random changes even though it feels slower at first.

## Log what you expect, not what you see

A common logging mistake is logging to confirm that code is running. This tells you nothing useful. Instead, log the values you are about to assert against. If a condition check is failing, log both sides of the comparison right before the check. You want to see what the program believes, not just that it got to a certain line.

Better still, write the assertion first, then add logging only when the assertion fails in a way you do not understand.

## Understand the environment, not just the code

Many bugs are not in your code at all. They live in the interaction between your code and its environment: a library behaving differently across versions, a platform API with undocumented edge cases, a container with different locale settings than your development machine.

When a bug only appears in a specific environment and not locally, start by listing every difference between the two environments before changing code. A bug that only happens in production is often a configuration difference, not a logic error.

## The value of walking away

Debugging under time pressure is self-defeating. The cognitive load of a hard bug narrows focus in exactly the wrong direction. When you have been stuck for more than an hour, the most productive action is often a break.

This is not procrastination. Sleep and distance allow the brain to process the problem in a different mode. A good night's sleep has resolved more bugs than another hour of staring at the same stack trace.

The discipline is in recognizing when you are stuck and doing something about it, instead of grinding through the same mental paths hoping for a different result.
