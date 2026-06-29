---
sidebar_position: 1
title: Starting a Blocking Session
---

# Starting a Blocking Session

A blocking session opens a dedicated 3D level for a specific scene where you place and animate your cast.

## Opening a scene

In the **Director View**, double-click any scene in the scene list on the left. If no blocking exists for that scene yet, you'll be prompted to create one.

## What opens

GAS Tools will:

1. Create (or load) a blocking level for the scene
2. Populate it with stand-in actors for the scene's cast members
3. Switch the viewport to the blocking level

## The blocking level

The blocking level is a separate UE level — it doesn't affect your main persistent level. Stand-in actors (simple mesh placeholders) represent each cast member in your scene.

## Navigating the viewport

Use standard UE viewport controls while in a blocking session:

| Action | Control |
|--------|---------|
| Fly around | Right-click + WASD |
| Pan | Middle-click drag |
| Orbit | Alt + Left-click drag |
| Focus on actor | F key |

## Ending a session

Click **Exit Blocking** in the Director View toolbar. GAS Tools will save the blocking level and return to your persistent level.

:::tip
You can have multiple scenes blocked independently. Each scene has its own blocking level asset.
:::
