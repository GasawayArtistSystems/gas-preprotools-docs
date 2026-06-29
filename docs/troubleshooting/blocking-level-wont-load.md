---
sidebar_position: 2
title: Blocking Level Won't Load
---

# Blocking Level Won't Load

If double-clicking a scene doesn't open a blocking session, or if the blocking level fails to load, try these steps.

## 1. Check if a blocking level exists

If this is the first time opening the scene, GAS Tools will prompt you to create a new blocking level. If no prompt appears, try double-clicking the scene again.

## 2. Check for missing level asset

If the blocking level asset was moved or deleted outside of GAS Tools (e.g., via the Content Browser), the link will be broken. You'll need to re-create blocking for that scene.

## 3. Avoid opening levels manually

Do not open a blocking level directly from the Content Browser. Always open it through the Director View by double-clicking the scene. Opening it manually can cause GAS Tools to lose track of the level state.

## 4. Only one blocking session at a time

GAS Tools supports one active blocking session at a time. If you believe a session is still open, click **Exit Blocking** in the Director View toolbar before trying to open a different scene.

## 5. Check the Output Log

Go to **Window → Output Log** and look for lines starting with `GASPrePro`. Level load errors will appear there.

## 6. Restart the editor

If the blocking level appears to be stuck in a loading state, save your project and restart Unreal Engine.

If the problem persists, [report a bug on GitHub](https://github.com/GasawayArtistSystems/GAS_TestProjectCPP/issues).
