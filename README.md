# Many Many Things — landing site

A warm, cozy, tasteful-2000s studio landing site for **Many Many Things** — an umbrella
for our software, apps and video games (Sudo Games, coming soon) plus software & AI
consultancy.

Built as a dependency-free **static site** (vanilla HTML/CSS/JS — no framework, no build
step) and hosted on **GitHub Pages** at [manymanythings.co.uk](https://manymanythings.co.uk).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Single-page markup (hero, projects, consultancy, contact, footer) |
| `styles.css` | Palette, type, paper-grain texture, animations, responsive layout |
| `script.js` | Visitor counter, ribbon loop, copy-email, reveal-on-scroll, logo easter egg |
| `favicon.svg` | Shape-cluster brand mark |
| `CNAME` | Custom domain for GitHub Pages |

Design settings baked into `<html>`: Terracotta & Teal palette · Gabarito display font ·
paper grain on · animations on. All motion respects `prefers-reduced-motion`.

## Local preview

No build needed — serve the folder statically:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

GitHub Pages serves from `main` / root. Push to `main` and it rebuilds automatically:

```bash
git add -A && git commit -m "Update site"
git push origin main
```

DNS for the custom domain is managed on Cloudflare (apex A/AAAA → GitHub Pages,
`www` CNAME → `many-many-things.github.io`).
