---
sidebar_position: 1
title: Script Won't Import
---

# Script Won't Import

If your Final Draft script won't import, work through these checks.

## 1. Check the file format

GAS Tools only reads `.fdx` files — the Final Draft XML format. It does not read:

- `.pdf`
- `.fountain`
- `.fdxt` (Final Draft template)
- `.docx`

In Final Draft, go to **File → Save As** and confirm the format is **Final Draft Document (.fdx)**.

## 2. Check for special characters in the file path

Avoid paths with special characters, accented letters, or very long folder names. Save your `.fdx` to a simple path like `C:\Scripts\MyScript.fdx` and try again.

## 3. Check the script content

If your script file is empty or contains only title page content with no scene headings, GAS Tools may import successfully but show nothing in the panel. Add at least one Scene Heading block in Final Draft and re-export.

## 4. Check the output log

In Unreal Engine, go to **Window → Output Log** and look for lines starting with `GASPrePro`. Error messages there will give a more specific reason for the failure.

## 5. Report a bug

If none of the above resolves the issue, please [report a bug on GitHub](https://github.com/GasawayArtistSystems/GAS_TestProjectCPP/issues) with your `.fdx` file attached (if possible) and the relevant Output Log lines.
