---
sidebar_position: 3
title: Scene Sequence Out of Sync
---

# Scene Sequence Out of Sync

If your pre-vis sequence doesn't match your current blocking or shots, it needs to be rebuilt.

## The status dot tells you

Check the colored dot next to the scene in the scene list:

- 🟠 **Orange** — blocking has changed since the last build
- 🟡 **Yellow** — shots have changed since the last build
- 🔴 **Red** — never been built

## Solution: rebuild the sequence

Select the scene in the Director View and click **Build Scene Sequence**. This will regenerate the pre-vis sequence from your current blocking and shots.

## Sequence plays old animation

If Watch Mode is playing back stale animation after you've rebuilt, try closing and reopening the sequence:

1. Exit Watch Mode
2. Rebuild the scene sequence
3. Re-enter Watch Mode

If the problem persists, close the Sequencer editor manually (**Window → Cinematics → Sequencer**) and re-enter Watch Mode.

## Camera cuts are wrong order

If the camera cuts in Watch Mode don't match your shot list order, rebuild the scene sequence. Shot order is baked into the sequence at build time — reordering shots in the Shot List requires a rebuild to take effect.

## Missing cameras in the sequence

If a shot's camera actor was deleted or renamed after the last build, that shot's camera cut may reference a missing actor. Re-assign the camera in the Shot List and rebuild.
