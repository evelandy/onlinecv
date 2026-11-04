# wrgcv.com

William Griffin's online CV: a single-page "field notes" site built with React, TypeScript and Vite.

Requires Node 22.22+ (`nvm use` reads `.nvmrc`).

```sh
yarn          # install
yarn dev      # dev server at http://localhost:5173
yarn build    # type-check and build to ./build
yarn preview  # serve the production build
```

## Editing content

All content lives in `src/data/`:

- `profile.ts`: name, status line, links, résumé URL
- `now.ts`: current work (the OCTG agent, GrDev, Gulf Coast Corgis)
- `experience.ts`: jobs, newest first
- `projects.ts`: the "Selected work" plates (images in `src/assets/`)
- `toolkit.ts`: the spec sheet

Design tokens (colors, fonts) are in `src/styles/tokens.css`.

## Deploying

Pushing to `master` on GitHub deploys to GitHub Pages via `.github/workflows/deploy.yml`. The contact form needs a Web3Forms key in `VITE_WEB3FORMS_KEY` (see `.env.example`).

Unfinished items are tracked in [PLACEHOLDERS.md](PLACEHOLDERS.md).
