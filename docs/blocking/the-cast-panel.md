---
sidebar_position: 3
title: The Cast Panel
---

# The Cast Panel

The cast panel shows the characters in the current scene, and lets you manage casting for your whole script. It appears as part of the Cast window, opened from Director View when you're in Blocking mode.

## Layout

The panel is split into two sections:

- **Cast** — every character defined in your script (derived from Character Name blocks).
- **In Scene** — only the characters currently placed in the selected scene.

Each character is shown as a tile with a headshot image (or a placeholder "?" if none is set) and their name.

## Adding a character

Click **+ Add Character** above either section:

- In **Cast**, this creates a brand-new character — set their name, default mesh, and stand-in type (Adult - Average, Adult - Tall, Adult - Short, or Child).
- In **In Scene**, you can either pick an existing character from your Cast to add to this scene, or create a new one from scratch.

## Swapping or removing a character

Right-click any character tile to bring up options:

- **Swap Actor** — change the mesh and/or stand-in type. Changing the mesh or type from the **In Scene** side only affects this scene — other scenes keep their own settings. Changing it from the **Cast** side updates the character's default everywhere.
- **Remove Actor** — in **In Scene**, this removes the character from just this scene. In **Cast**, this deletes the character entirely from the script — you'll get a warning if they're used in other scenes, since this removes them everywhere.

## Stand-in types

Each character can be assigned a stand-in type, which controls their physical size in the blocking level:

- Adult - Average
- Adult - Tall
- Adult - Short
- Child

Changing a character's stand-in type in a scene replaces their stand-in actor with the correctly-sized version, without affecting how they appear in other scenes.

## Headshots

Headshot images are optional. If a texture asset exists matching your mesh's exact name (for example, a mesh named `SKM_Manny_Simple` paired with a texture also named `SKM_Manny_Simple`, stored in `/Game/UI/Headshots/`), it will automatically be used as that character's headshot. Otherwise, the tile shows a placeholder "?".
