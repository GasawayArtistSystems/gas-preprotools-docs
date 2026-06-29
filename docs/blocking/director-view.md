---
sidebar_position: 4
title: Director View
---

# Director View

The Director View is the main hub of GAS PrePro Tools. It gives you scene overview, shot management, and playback — all in one panel.

## Three modes

The Director View has three modes, switchable from the toolbar:

### Blocking mode
- **Left panel**: Scene list — all scenes in your script
- **Right panel**: Cast list for the selected scene
- Double-click a scene to enter a blocking session

### Shot Edit mode
- **Left panel**: Shot list for the current scene
- **Right panel**: Camera controls (stub — full controls coming)
- Manage shots, assign cameras, review shot types

### Watch mode
- Panels collapse
- The pre-vis sequence plays back in the UE viewport
- Click **Exit Watch** to return to your previous mode

## Switching modes

Use the mode buttons in the Director View toolbar to switch between Blocking, Shot Edit, and Watch.

## The scene list

Scenes are listed with their scene number and heading. The status dot next to each scene indicates the build state:

| Dot | Meaning |
|-----|---------|
| 🔴 Red | Not built |
| 🟡 Yellow | Shots have changed |
| 🟠 Orange | Blocking has changed since last build |
| 🟢 Green | In sync — ready to watch |
