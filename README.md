# Jonathan Nguyen's Portfolio

A React and Vite portfolio configured for GitHub Pages at
[jonny9906.github.io/personal-website](https://jonny9906.github.io/personal-website/).

## Local development

```sh
npm ci
npm run dev
```

Vite serves the app under `/personal-website/` so local and GitHub Pages asset
paths behave the same way.

## Resume

The resume source is `resume/jonathan_nguyen_resume.tex`. Rebuild the public PDF
with [Tectonic](https://tectonic-typesetting.github.io/):

```sh
npm run resume:build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which lints, builds,
and deploys `dist` through GitHub Actions. GitHub Free requires this repository to
be public before Pages can be enabled. Then, in **Settings > Pages**, set **Source**
to **GitHub Actions**.
