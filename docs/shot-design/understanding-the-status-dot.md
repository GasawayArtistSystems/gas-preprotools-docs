---
sidebar_position: 3
title: Understanding the Status Dot
---

# Understanding the Status Dot

Each scene in the scene list shows a small colored dot. This dot tells you at a glance whether the scene's pre-vis sequence is up to date.

## States

| Color | State | Meaning |
|-------|-------|---------|
| 🔴 Red | Not built | No sequence has been built for this scene yet |
| 🟡 Yellow | Shots changed | Shots were added, removed, or reordered since the last build |
| 🟠 Orange | Blocking changed | Character positions or timing changed since the last build |
| 🟢 Green | In sync | The sequence matches current blocking and shots — ready to watch |

## What triggers each state

**Red** — Scene is new, or the sequence was never built.

**Yellow** — You added a shot, deleted a shot, changed shot order, or changed a shot's camera assignment after the last build.

**Orange** — You moved a character, adjusted keyframes, or changed timing in the blocking session after the last build.

**Green** — You ran **Build Scene Sequence** and nothing has changed since.

## Keeping scenes green

After making blocking or shot changes, run **Build Scene Sequence** from the Director View toolbar to bring the scene back to green.

:::tip
You don't have to keep every scene green all the time — it's a workflow indicator, not a warning. Red just means "not built yet."
:::
