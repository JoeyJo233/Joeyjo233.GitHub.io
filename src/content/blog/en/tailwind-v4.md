---
title: "What's New in Tailwind CSS v4"
description: A focused review of what changed in v4 and what matters most if you are planning to upgrade an existing site.
date: "2024-11-20"
updatedDate: "2024-12-05"
category: frontend
readTime: 6
lang: en
---

## The shift from config-driven to style-driven

One of the biggest changes in Tailwind v4 is that more of the design system moves closer to CSS itself. Theme variables and design tokens feel less like a separate DSL and more like styling primitives you can reason about directly.

That is especially useful on content-first sites. Colors, spacing, and type can stay understandable in one place instead of being split across configuration files and utility usage.

## Upgrade only when the design system is ready

Not every project should upgrade immediately. For a personal site, it is more important to confirm that your tokens are already coherent, your dark mode is consistent, and your styling is not tightly coupled to old plugin behavior.

If the site has many page types but a relatively small component surface, v4 can simplify a lot. If the visual system is still in flux, stabilizing that first is usually the better tradeoff.

## Content pages need stronger layout rules than apps

Tailwind is excellent for building quickly, but content pages often fall apart when every block gets styled independently. Instead of improving readability, the page starts to feel visually noisy.

The stable approach is to define the reader skeleton first: title hierarchy, body width, paragraph rhythm, side metadata, and emphasis styles. Utility classes then reinforce the system instead of fragmenting it.
