# Shravan Dev — Art Portfolio

A simple static site: `index.html`, `styles.css`, `script.js`.

## Adding your work

1. Drop image files into `images/traditional/` or `images/blender/`.
2. Open `script.js` and edit the `artworks` array at the top — for each
   piece, set `title`, `medium`, `year`, and `file` (the path to your image).
   Add or remove entries as needed; the gallery renders automatically.
3. Any card whose image file is missing shows a dashed placeholder with the
   expected filename, so you can see what still needs an image.

## Editing text

- Hero tagline: `index.html`, the `.hero-sub` paragraph.
- Artist statement: `index.html`, the `#statement` section.
- About/bio: `index.html`, the `#about` section.
- Contact links (email, Instagram, resume): `index.html`, the `#contact` section.

## Previewing locally

Just open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Putting it online for college apps

Easiest free option is GitHub Pages:

1. Create a GitHub repo and push this folder to it.
2. In the repo settings, enable GitHub Pages (source: main branch, root).
3. You'll get a URL like `https://yourusername.github.io/repo-name` to include
   in your application.

Netlify is another good option — drag-and-drop this folder at app.netlify.com/drop
for an instant live link, no git required.
