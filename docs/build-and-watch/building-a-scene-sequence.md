---
sidebar_position: 1
title: Building a Scene Sequence
---

# Building a Scene Sequence

Building a scene sequence compiles your blocking animation and shot list into a UE Level Sequence that can be played back as pre-vis.

## What gets built

- Character blocking animation (actor transforms from the blocking sequence)
- Camera cuts — one per shot, in shot list order
- Shot timing based on script page length (in eighths)

## How to build

1. In the **Director View**, select the scene you want to build.
2. Click **Build Scene Sequence** in the toolbar.
3. GAS Tools will create or update the scene's pre-vis Level Sequence asset.

The scene's status dot will turn **green** when the build completes successfully.

## Sequence naming

Built sequences follow the naming convention `SC_010_BLOCKING` — using the formatted scene number. They are saved in your project's Content folder.

## Rebuilding

If you change blocking or shots after building, the status dot will turn orange or yellow. Click **Build Scene Sequence** again to rebuild. Rebuilding overwrites the previous sequence.

## Sequence assets

You can open the built sequence directly in UE's Sequencer editor if you want to fine-tune camera cuts or timing manually. Be aware that manual changes will be overwritten the next time you rebuild.

:::note
Building a sequence requires that the blocking level for the scene is loadable. If the blocking level has been moved or deleted, the build will fail.
:::
