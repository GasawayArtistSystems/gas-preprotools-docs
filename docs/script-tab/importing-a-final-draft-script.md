---
sidebar_position: 1
title: Importing a Final Draft Script
---

# Importing a Final Draft Script

GAS PrePro Tools reads Final Draft `.fdx` files directly. You do not need Final Draft installed — only the exported file.

## Export from Final Draft

1. In Final Draft, go to **File → Save As**.
2. Set the format to **Final Draft Document (.fdx)**.
3. Save the file somewhere accessible.

## Import into GAS Tools

1. Open the GAS Tools plugin window.
2. Click the **Script Tab**.
3. Click **Import FDX**.
4. Browse to your `.fdx` file and select it.

The script will appear in the script panel, formatted to match Final Draft's layout: scene headings, action, character names, dialogue, and parentheticals.

## What gets imported

| Element | Imported |
|---------|----------|
| Scene headings | ✅ |
| Action lines | ✅ |
| Character names | ✅ |
| Dialogue | ✅ |
| Parentheticals | ✅ |
| Transitions | ✅ |
| Dual dialogue | ✅ |
| Script notes | ❌ (ignored) |

## After importing

Once imported, your script is saved as part of your UE project. You can now:

- [Edit the script](./editing-the-script) directly inside UE
- [Generate page breaks](./generating-page-breaks)
- [Generate scene markers](./generating-scene-markers)

:::tip
If your script doesn't import correctly, make sure it was saved as `.fdx` and not `.pdf` or `.fountain`. GAS Tools only reads the Final Draft XML format.
:::
