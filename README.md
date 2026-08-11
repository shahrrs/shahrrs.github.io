# rishi.shah portfolio site

Plain HTML/CSS/JS — no build step, no dependencies. Three pages:

- `index.html` — home
- `projects.html` — projects (best ball tracker, client work, GitHub repos, coursework)
- `about.html` — bio, experience log, education, skills, resume link

This site is set up to live at the root of your GitHub Pages domain:
`https://shahrrs.github.io/`. All internal links are relative, so it'll
also work fine from a subfolder — just double check the `og:url` meta tag
in each page's `<head>` matches wherever it actually ends up.

## Nothing left to fill in

Everything from your resume is in place, `assets/resume.pdf` is wired up,
and phone number is intentionally left off the public site for privacy.

The best ball tracker card doesn't link out anywhere — it's synced to your
own data, not a public dataset, so there's no demo URL that would make
sense to share. If that changes later, add a link back into the
`project-card featured` block in `projects.html`.

## What's included

- Three screenshots from the best ball tracker (`assets/screens/`), shown
  in a gallery on the tracker's project card — click any of them to open
  a full-size lightbox view
- The Crimson Dusk trailer (`assets/video/crimson-dusk-trailer.mp4`),
  compressed from 86MB down to ~36MB and embedded directly on the
  coursework entry with a native HTML5 player
- Open Graph + Twitter card meta tags on all three pages, plus a generated
  banner image (`assets/og-banner.png`) so the link looks right when pasted
  into email, Slack, or a job application field
- A generated favicon (`favicon.ico`, `assets/apple-touch-icon.png`)
- An impact stats row on the home page (10,000+ lines, 300+ users, 10+
  engineers led, 75% faster incident resolution)
- A short paragraph on the about page describing your actual AI workflow

## Deploying to GitHub Pages

1. Push these files to the root of your `shahrrs/shahrrs.github.io` repo:
   ```
   git init
   git add .
   git commit -m "portfolio site"
   git branch -M main
   git remote add origin https://github.com/shahrrs/shahrrs.github.io.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source** → select `main` branch, `/root`
   folder → Save.
3. Your site goes live at `https://shahrrs.github.io/`.

A heads up: the video file is ~36MB, which pushes the repo size up.
That's still well within GitHub's limits and fine for a one-off push, but
if you add more video later, consider hosting it on YouTube (unlisted)
instead and swapping in an iframe embed — repos with a lot of binary
media get slow to clone over time.

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
