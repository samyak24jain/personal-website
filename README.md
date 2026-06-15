# samyakj.com

Source for my personal website — [samyakj.com](https://samyakj.com).

Built with [Astro](https://astro.build) using the minimal
[Astro Nano](https://github.com/markhorn-dev/astro-nano) theme (MIT). It hosts a
short intro, my work experience, publications, projects, and a blog.

## Develop

```sh
npm install      # install dependencies
npm run dev      # start dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Content

- `src/content/work/` — work experience (Markdown, one file per role)
- `src/content/projects/` — projects
- `src/content/blog/` — blog posts
- `src/data/publications.ts` — publications list
- `src/consts.ts` — site config (name, socials, section metadata)

## Deployment

Pushing to `master` builds and deploys to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The custom domain
is configured through [`public/CNAME`](public/CNAME).
