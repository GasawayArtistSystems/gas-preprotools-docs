---
sidebar_position: 2
title: Animating Characters
---

# Animating Characters

Once you're in a blocking session, you can record character movement as keyframe animation directly in Unreal Engine's Sequencer.

## The blocking sequence

Each blocking session has an associated Level Sequence (named `SC_010_BLOCKING`, for example). This sequence is automatically opened when you start a blocking session.

## Recording a move

1. Select a stand-in actor in the viewport.
2. Set the Sequencer playhead to the time you want.
3. Move the actor to its position.
4. A keyframe is recorded automatically.

## Playing back blocking

Press **Spacebar** in the Sequencer to play back the blocking animation and review character movement.

## Editing keyframes

Select any keyframe in the Sequencer timeline and drag it to adjust timing. You can also right-click keyframes to change interpolation (linear, ease in/out, etc.).

## Multiple characters

Each stand-in actor has its own track in the blocking sequence. You can animate all characters independently within the same sequence.

:::note
Blocking animation is intentionally simple — position and rotation only. This is pre-visualization, not final animation.
:::
