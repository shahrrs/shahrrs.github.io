# rishi.shah portfolio site

Plain HTML/CSS/JS — no build step, no dependencies. Three pages:

- `index.html` — home
- `projects.html` — projects (best ball tracker, client work, GitHub repos, coursework)
- `about.html` — bio, experience log, education, skills, resume link

## Nothing left to fill in

Everything from your resume is in place, `assets/resume.pdf` is wired up,
and phone number is intentionally left off the public site for privacy.

The best ball tracker card doesn't link out anywhere — it's synced to your
own data, not a public dataset, so there's no demo URL that would make
sense to share. If that changes later, add a link back into the
`project-card featured` block in `projects.html`.

## Deploying to GitHub Pages (free, easiest for job applications)

1. Create a new repo, e.g. `shahrrs/portfolio` (or use a repo named
   `shahrrs.github.io` if you want it at the root of your GitHub Pages
   domain — `https://shahrrs.github.io`).
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/shahrrs/portfolio.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Source** → select `main` branch, `/root`
   folder → Save.
4. Your site goes live at `https://shahrrs.github.io/portfolio/` (or
   `https://shahrrs.github.io/` if you used the special repo name).

## Notes on the design

- Palette and type are deliberately not the usual "AI portfolio" cream +
  terracotta look — dark espresso base, deep teal + muted gold accents,
  Fraunces for display type, Inter for body, IBM Plex Mono for the
  terminal/commit-log details.
- The "commit log" motif on the about page and the terminal-style fact card
  on the home page are the site's one recurring visual idea — meant to read
  as "built by an engineer," without being gimmicky everywhere.
- Everything is responsive down to mobile, including a simple nav toggle in
  `script.js`.
