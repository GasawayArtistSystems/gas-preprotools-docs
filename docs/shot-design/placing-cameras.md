---
sidebar_position: 1
title: Placing Cameras
---

# Placing Cameras

Cameras in GAS Tools are CineCameraActors placed inside your blocking level and associated with specific shots.

## Adding a camera

In the **Shot Edit** mode of the Director View:

1. Select a shot from the shot list.
2. Click **Place Camera**.
3. A CineCameraActor is spawned in the blocking level at the current viewport position.
4. The camera is automatically assigned to the selected shot.

## Positioning a camera

Select the camera actor in the viewport and use the standard UE transform tools to position and aim it:

- **W** — Move
- **E** — Rotate
- **R** — Scale (not typically used for cameras)

## Camera settings

Select the CineCameraActor and use the **Details** panel to adjust:

- **Focal Length** — controls lens angle
- **Focus Distance** — where the lens is focused
- **Filmback** — sensor size / aspect ratio

## Piloting a camera

To see through the camera while positioning it, select the CineCameraActor in the viewport and press **Ctrl+Shift+P** to pilot it. Press **Esc** to exit pilot mode.

:::tip
Name your cameras to match your shot list (e.g., `CAM_A`, `CAM_B`) to keep your blocking level organized.
:::
