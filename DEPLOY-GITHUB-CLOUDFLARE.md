# Deployment: GitHub + Cloudflare Pages

This is the recommended workflow for easy editing.

## One-time setup

1. Create a GitHub repository named something like:

```text
nawar-fyi
```

2. Upload all files from this folder to the repository.

3. In Cloudflare, go to:

```text
Workers & Pages → Create → Pages → Connect to Git
```

4. Connect GitHub and select the `nawar-fyi` repository.

5. Use these build settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
Root directory: /
```

6. Deploy.

7. Add your custom domains in the Pages project:

```text
nawar.fyi
www.nawar.fyi
```

## Daily editing workflow

To change your email, project text, or project images:

1. Open GitHub.
2. Open your `nawar-fyi` repository.
3. Edit `assets/js/site-config.js`.
4. Commit the change.
5. Cloudflare Pages redeploys automatically.

## Uploading images through GitHub

1. Open the repository in GitHub.
2. Go to:

```text
assets/img/projects/
```

3. Click:

```text
Add file → Upload files
```

4. Upload your image.
5. Commit the change.
6. Edit `assets/js/site-config.js` and update the project image path.
7. Commit again.

Example:

```js
image: "assets/img/projects/gns3-topology.png"
```
