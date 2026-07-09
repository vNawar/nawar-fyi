# Nawar.fyi Editable Static Website

This version is designed for easy editing through GitHub and automatic deployment through Cloudflare Pages.

## What to edit most of the time

Edit this file:

```text
assets/js/site-config.js
```

You can change:

- Email address
- Hero text
- Skill cards
- Project titles
- Project descriptions
- Project tags
- Project image paths

## How images work

The site currently uses SVG placeholder images in:

```text
assets/img/
```

For your real screenshots/photos, upload them to:

```text
assets/img/projects/
```

Then edit `assets/js/site-config.js` and point the project image to the new file:

```js
image: "assets/img/projects/homelab-rack.jpg"
```

Recommended image format:

- `.jpg` for photos
- `.png` for screenshots
- `.webp` for optimized images if available

Recommended image size:

- Around 1200px wide
- Keep each image preferably under 500 KB

## Local preview

Open `index.html` in your browser.

If your browser blocks local JavaScript file loading, run a small local server from the folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```
