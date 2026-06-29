---
sidebar_position: 3
title: Render Settings (Coming Soon)
---

# Render Settings

:::caution Coming Soon
Full render settings configuration is planned for a future release. This page describes the intended workflow.
:::

## Current render behavior

Renders currently use the quality and format set in [Project Preferences](./project-preferences):

- **Format:** PNG or EXR (chosen at render time via dialog)
- **Resolution:** Derived from your aspect ratio setting at 1080p base height
- **Output path:** `Saved/MovieRenders/` inside your UE project

## Planned settings

- Custom resolution override
- Frame rate selection
- Anti-aliasing quality
- Depth of field on/off toggle for pre-vis renders
- Motion blur on/off
- Custom output path per project
