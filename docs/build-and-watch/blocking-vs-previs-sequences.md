---
sidebar_position: 3
title: Blocking vs Pre-vis Sequences
---

# Blocking vs Pre-vis Sequences

GAS Tools uses two distinct types of Level Sequence assets. Understanding the difference helps you avoid confusion.

## Blocking sequence

**Name format:** `SC_010_BLOCKING`

The blocking sequence is created automatically when you start a blocking session. It stores:

- Stand-in actor transforms (position + rotation)
- Keyframe animation for character movement
- Timing for character actions within the scene

This sequence is **not** meant to be watched as a film. It's the raw animation data.

## Pre-vis sequence (scene sequence)

**Name format:** `SC_010` *(built by GAS Tools)*

The pre-vis sequence is built by clicking **Build Scene Sequence**. It contains:

- The blocking animation (referenced from the blocking sequence)
- Camera cut tracks — one per shot
- Shot order and timing derived from your shot list and script page lengths

This is the sequence that plays in **Watch Mode**.

## Key rule

| | Blocking Sequence | Pre-vis Sequence |
|--|--|--|
| Created by | Starting a blocking session | Clicking Build Scene Sequence |
| Edit here | Character positions and timing | Don't edit manually |
| Watched in | Not for watching | Watch Mode |
| Overwritten on rebuild? | No | Yes |

## Why keep them separate

Keeping blocking and pre-vis as separate assets means you can freely adjust character animation without breaking your camera cut structure — and vice versa. Rebuild whenever you want to sync them.
