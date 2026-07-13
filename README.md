# Nawar.fyi project showcase

Static portfolio site for Nawar Alhussain.

Main positioning: **IT Infrastructure Engineer**.

The site keeps the original visual style: Home page, Projects page, tabs, cards, and image asset visuals. Content was updated from the comprehensive master CV to emphasize job-market-relevant areas: infrastructure, networking, systems, ERP/data, technical operations, virtualization, data center readiness, and ISP/WISP direction.

## Edit content

Most text, skills, project cards, and image paths are controlled from:

```text
assets/js/site-data.js
```

## Replace images

Image asset images are under:

```text
assets/img/image assets/
```

Add your real screenshots/photos under:

```text
assets/img/projects/
```

Then update the image paths in `assets/js/site-data.js`.

## Deploy

Push changes to the GitHub repo connected to Cloudflare Pages. No build command is required.

## Image update

This version includes processed project images in `assets/img/projects/` and notes in `IMAGE_NOTES.md`.
