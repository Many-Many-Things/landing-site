# Many Many Things — landing site

A playful landing site for **Many Many Things**: a portfolio
studio for side projects (apps, games and tools).

Built as a dependency-free **static site** (vanilla HTML/CSS/JS — no framework, no build
step) and hosted on **GitHub Pages** at [manymanythings.co.uk](https://manymanythings.co.uk).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Single-page markup (hero, projects, advice, contact, footer) |
| `styles.css` | Palette, type, paper-grain texture, animations, responsive layout |
| `script.js` | Footer year, reveal-on-scroll |
| `assets/` | Mascot cut-outs and project banners |
| `favicon.png`, `apple-touch-icon.png` | Mascot app icon |
| `CNAME` | Custom domain for GitHub Pages |

Design: deep teal background, clay mascot, Fredoka display font, Outfit body font.
All motion respects `prefers-reduced-motion`.

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
