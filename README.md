# Dorsa Nouri — Resume Website

A single-page static portfolio/resume site built with Vue 3, Vite, and Tailwind CSS. All content is driven by `resume_data.json`.

## Live Demo

After deploying to GitHub Pages, the site will be available at:

`https://<username>.github.io/dorsa-resume/`

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Updating Resume Content

1. Edit `resume_data.json` in the project root.
2. Preview locally with `npm run dev` — Vite hot-reloads when the file changes.
3. Commit and push to `main` — GitHub Actions will rebuild and deploy automatically.

## Deploy Notes

- **GitHub Pages:** Enable **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- **Base path:** `vite.config.ts` sets `base: '/dorsa-resume/'` for project pages. Change to `'/'` if using a user/org site (`username.github.io` repo).

## Production Build

```bash
npm run build
npm run preview
```

## Tech Stack

- Vue 3 (Composition API)
- TypeScript
- Vite
- Tailwind CSS
- Lucide Vue (icons)
- GitHub Actions → GitHub Pages

## License

Private / personal portfolio — all rights reserved.
