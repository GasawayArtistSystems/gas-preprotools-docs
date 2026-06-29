---
sidebar_position: 5
title: Saving and Exiting Blocking
---

# Saving and Exiting Blocking

## Saving

Your blocking level is saved when you save the UE project (**Ctrl+S**). You can save at any time during a blocking session.

## Exiting a blocking session

Click **Exit Blocking** in the Director View toolbar. GAS Tools will:

1. Save the current blocking level
2. Unload the blocking level
3. Return to your persistent level
4. Restore the viewport to its previous state

## Returning to a scene

Your blocking is preserved between sessions. Double-click the same scene in the scene list and your existing blocking will load exactly as you left it.

## What's saved

- Stand-in actor positions and rotations
- All keyframes in the blocking sequence
- Camera placements and assignments

:::tip
If you accidentally exit a blocking session without saving, immediately press **Ctrl+Z** in the main editor — UE's undo history may recover recent changes.
:::
