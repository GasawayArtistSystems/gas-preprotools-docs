---
sidebar_position: 3
title: Installation
---

# Installation

## Step 1 — Download the plugin

Download the latest release of GAS PrePro Tools from the [GitHub releases page](https://github.com/GasawayArtistSystems/GAS_TestProjectCPP/releases).

## Step 2 — Add to your project

1. Open your Unreal Engine project folder in Windows Explorer.
2. If a `Plugins` folder doesn't exist, create one at the root of your project.
3. Copy the `GAS_PreProTools` folder into `YourProject/Plugins/`.

Your folder structure should look like this:

```
YourProject/
├── Content/
├── Plugins/
│   └── GAS_PreProTools/
├── Source/
└── YourProject.uproject
```

## Step 3 — Enable the plugin

1. Open your project in Unreal Engine.
2. Go to **Edit → Plugins**.
3. Search for **GAS PrePro Tools**.
4. Check **Enabled** and restart the editor when prompted.

## Step 4 — Confirm it's working

After restart, you should see the **GAS Tools** toolbar button in your main editor toolbar. Click it to open the plugin window.

:::tip
If the toolbar button doesn't appear, go to **Edit → Plugins** and confirm GAS PrePro Tools is enabled and that there are no load errors listed beneath it.
:::
