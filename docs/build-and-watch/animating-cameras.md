---
sidebar_position: 4
title: Animating Cameras (Coming Soon)
---

# Animating Cameras

:::caution Coming Soon
Camera animation is planned for a future release of GAS PrePro Tools. This page describes the intended workflow.
:::

## Planned features

- Keyframe camera position, rotation, and focal length over time
- True camera piloting via actor lock — take direct control of a camera in the viewport
- Dolly and crane path visualization
- Animated focus pulls

## Current workaround

In the current release, you can manually keyframe camera transforms in UE's Sequencer after building a scene sequence. However, note that these manual keyframes will be overwritten the next time you rebuild the sequence.

For persistent camera animation, pilot and keyframe your cameras directly in the blocking sequence (`SC_010_BLOCKING`) before building.
