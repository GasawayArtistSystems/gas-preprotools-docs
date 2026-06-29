---
sidebar_position: 2
title: Scene and Shot Numbering
---

# Scene and Shot Numbering

GAS Tools gives you control over how scenes and shots are numbered throughout the plugin.

## Scene numbering style

| Style | Example |
|-------|---------|
| Sequential | 1, 2, 3, 4… |
| Final Draft style | 1, 2, 2A, 2B, 3… |

Final Draft style supports inserted scenes (2A, 2B) which is common on productions where scenes are added after initial breakdown.

## Scene start number

Sets the number of the first scene. Defaults to 1. Change this if your script is part of a larger production with a different scene range.

## Shot numbering

Shots are numbered within each scene using letters: Scene 10 produces shots `10A`, `10B`, `10C`, etc.

Shot letters reset at each scene. There is no global shot numbering — shots are always relative to their scene.

## Sequence naming

Built Level Sequence assets use the scene number in their name:

```
SC_010_BLOCKING   ← blocking sequence for scene 10
SC_010            ← pre-vis sequence for scene 10
```

Changing your scene numbering style will affect new sequence names but will not rename existing assets.
