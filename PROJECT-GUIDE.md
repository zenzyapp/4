# Calm Kids Project Guide

## Main App

- `index.html` contains the screens and page structure for the app.
- `app.js` controls navigation, activities, Zenzy, rewards, and saved progress. It is a large legacy script, so changes should be made in small, tested areas.
- `styles.css` contains the app's shared layout and visual styles.
- `manifest.json` describes the app when installed as a web app. `robots.txt` gives crawler instructions.

## Content And Images

- `SEMH TOOLKIT A4.docx` is the source book for the additional chapter activities.
- `Images/` contains the artwork used by the app, including the current Zenzy image and room items.
- `iloveimg-compressed.zip` is an image archive; check its contents and references before removing it.
- `Missions/` and `Pet/` are currently empty folders.

## Supporting Pages

- `calm-kids-app.html`, `calm-kids-daily-check-in.html`, `calm-kids-regulation-tools.html`, `calm-kids-zenzy-virtual-pet.html`, and `privacy-policy.html` are standalone information pages.
- `seo.css` styles those information pages.
- `historical/` holds older app code and experiments. It is not part of the active app and should be treated as an archive unless a specific file is confirmed unused and no longer needed.

## Safe Cleanup Steps

1. Search for a file's name, element IDs, and script/style references before deleting it.
2. Confirm the feature is not loaded by `index.html` or another page.
3. Remove one feature at a time, then test the affected screen, its navigation, and saved ZP/progress.
4. Keep archived work until the active app has been tested and there is a separate backup.

The app currently runs as static files: open `index.html` in a browser. There is no package/build setup in the project root.