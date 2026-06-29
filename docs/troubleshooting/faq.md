---
sidebar_position: 4
title: Frequently Asked Questions
---

# Frequently Asked Questions

## Do I need Final Draft installed?

No. You only need a `.fdx` file exported from Final Draft. The file can be on any machine. GAS Tools reads the file format directly — Final Draft does not need to be installed on the same machine as Unreal Engine.

## Does this work with Blueprint-only projects?

No. GAS PrePro Tools is a C++ plugin. Your UE project must be a C++ project. If you have a Blueprint-only project, you'll need to add a C++ class first to convert it.

## Can I use this on multiple scenes at once?

You can have many scenes blocked and built in the same project. However, only one blocking session can be active at a time.

## Where are my files saved?

- **Script data** — saved inside your UE project as a Data Asset in the Content folder
- **Blocking levels** — saved as `.umap` files in your Content folder
- **Built sequences** — saved as Level Sequence assets in your Content folder
- **Renders** — saved to `Saved/MovieRenders/` inside your UE project folder

## Will edits to the built sequence be overwritten?

Yes. Every time you click **Build Scene Sequence**, the pre-vis sequence is regenerated from scratch. Don't make manual edits to the built sequence that you want to keep — make those changes in the blocking session or shot list instead.

## Can I export the pre-vis as a video?

Yes — use UE's **Movie Render Queue** to render the pre-vis sequence to PNG frames or EXR. GAS Tools will eventually have a one-click render button for this. For now, open the built sequence and use MRQ directly.

## How do I report a bug?

Click the **Report Bug** button (🐛) in the GAS Tools toolbar. This will open a pre-filled GitHub issue form in your browser.
