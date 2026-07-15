# Jonathan Nguyen's Portfolio

A React and Vite portfolio configured for GitHub Pages at
[jonny9906.github.io](https://jonny9906.github.io/).

## Local development

```sh
npm ci
npm run dev
```

Vite serves the app from `/`, matching the GitHub Pages user site URL.

## Resume

The resume source is `resume/jonathan_nguyen_resume.tex`. Rebuild the public PDF
with [Tectonic](https://tectonic-typesetting.github.io/):

```sh
npm run resume:build
```

## Deployment

For the root URL to work, the GitHub repository must be named
`Jonny9906.github.io` (a GitHub user site repository). If the repository keeps
the name `personal-website`, GitHub Pages will serve it at
`/personal-website/` instead.

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which lints, builds,
and deploys `dist` through GitHub Actions. GitHub Free requires this repository to
be public before Pages can be enabled. Then, in **Settings > Pages**, set **Source**
to **GitHub Actions**.
