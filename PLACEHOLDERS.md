# Placeholders

Everything on the site that is temporary. Each item is also marked with a `PLACEHOLDER` comment in the code, so `grep -rn PLACEHOLDER src index.html` finds them all.

| # | What | Where | To finish it |
|---|------|-------|--------------|
| 1 | OCTG agent name "Tally" (working title) | `src/data/now.ts` → `agent.name`, `subtitle`; also `src/data/experience.ts` (GrDev bullet) and `src/data/toolkit.ts` ("Tally ’26") | Pick the real name, replace all three, and remove `subtitle` if it's no longer a working title. |
| 2 | Agent screenshot and recording: a scripted replay with illustrative data (Odessa yard, lot numbers, footage) | `src/components/AgentDemo.tsx`, `src/data/now.ts` → `agentDemo` | Swap in a real screenshot or screen recording (e.g. an MP4/WebM in `src/assets`), or keep the replay but use a real transcript. |
| 3 | Agent progress (40%) and target date (late Nov 2026) | `src/data/now.ts` → `agent.progress`, `agent.when` | Update as it moves; when it ships, change `state` to "Live" and add links (repo, demo). |
| 4 | Gulf Coast Corgis v2: v1 screenshot and URL, domain TBD (gulfcoast-corgis.com or gulf-coast-corgis.com) | `src/data/projects.ts`, `src/data/now.ts` → `corgis` | Add a v2 screenshot, the final URL and the repo link; then move it out of "Now". |
| 5 | ~~Résumé PDF~~ **Done (Nov 2026)** | `public/resume.pdf`, `src/data/profile.ts` → `resumeUrl` | Replace `public/resume.pdf` whenever the résumé changes; the filename stays the same. |
| 6 | Contact form (temporary: Web3Forms → info@grdev-us.com) | `VITE_WEB3FORMS_KEY` (see `.env.example`) | Set the key as a GitHub Actions variable and in `.env.local`. Until it's set, the form asks people to email directly. Swap for a permanent service later if wanted. |
| 7 | GrDev experience bullets are general | `src/data/experience.ts` | Replace with specific client work as it happens. |
| 8 | Link-preview image (og:image) | `index.html` | Add a 1200×630 image, e.g. a screenshot of the title page, to `public/` and reference it. |
| 9 | Copy review | `src/data/*` | Job bullets were tightened from the old site; check them for accuracy. "AscendSC = OCTG supply chain" and "eight years" are worth a second look. |

## Launch checklist (GitHub Pages)

- [ ] Push the repo to GitHub (it's on Bitbucket today).
- [ ] Settings → Pages → Source: **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` deploys every push to `master`.
- [ ] Settings → Pages → Custom domain: `wrgcv.com`, then point DNS at GitHub Pages and tick **Enforce HTTPS**.
- [ ] Rotate or restrict the old Google Maps API key (it's still in git history).
- [x] Delete any recruiter uploads left on the old PythonAnywhere account.
