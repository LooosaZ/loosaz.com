# loosaz.com

A hand-built portfolio for **LoosaZ** — freelance Global Broadcast Manager, cybersecurity graduate and chronic tinkerer.

Built with [Astro](https://astro.build) and plain TypeScript, CSS and HTML. No UI framework, no runtime dependencies: every page ships as static HTML.

## Stack

- **Astro 5** — pages, components and static builds
- **TypeScript** — typed data for projects, partners and socials
- **Vanilla CSS** — design tokens, light/dark themes, responsive layout
- **Geist + Geist Mono** — self-hosted via Fontsource
- **@astrojs/sitemap** — sitemap generation at build time

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

Other scripts:

| Script                  | What it does                                      |
| ----------------------- | ------------------------------------------------- |
| `npm run build`         | Builds the static site into `dist/`               |
| `npm run preview`       | Serves the production build locally               |
| `npm run check`         | Runs `astro check` (types + template diagnostics) |
| `npm run sync:projects` | Refreshes star counts from the GitHub API         |

## Adding a project

Everything on the projects page comes from [`src/data/projects.ts`](src/data/projects.ts). Append an entry to the `projects` array:

```ts
{
  slug: "my-new-project",          // repo name, also the stable key
  name: "My New Project",
  description: "One or two sentences about what it does.",
  url: "https://github.com/LooosaZ/my-new-project",
  language: "TypeScript",          // drives the dot colour and label
  category: "Web",                 // Web | Minecraft | Security | Tooling | Themes
  tags: ["Astro", "API"],
  stars: 0,
  featured: true,                  // optional: shows on the home page
  archived: false,                 // optional
  contribution: false,             // optional: a repo you contributed to
  owner: "someone-else",           // optional: repo on another account
}
```

The filters on `/projects` are generated from the `categories` array, so a new category needs one more line there (and optionally a colour in `languageColors`).

Star counts can be refreshed automatically:

```bash
npm run sync:projects
GITHUB_TOKEN=ghp_xxx npm run sync:projects   # higher rate limit
```

The script only rewrites `stars`; descriptions, tags and categories stay manual.

## Other content

| File                                      | Contents                                              |
| ----------------------------------------- | ----------------------------------------------------- |
| [`src/data/site.ts`](src/data/site.ts)    | Site meta, nav, socials, partners, broadcasts, stack  |
| [`src/data/projects.ts`](src/data/projects.ts) | Projects, categories, language colours           |
| [`src/pages/about.astro`](src/pages/about.astro) | Bio, timeline, profile facts                    |
| [`src/pages/contact.astro`](src/pages/contact.astro) | Contact copy and "before you write" notes    |

To add a partner, drop the logo in `public/assets/partners/` and append an entry to `partners`. Icons for the tech stack live in `public/icons/stack/` and are referenced by file name, so a new stack item only needs `{ name, icon }`.

## Structure

```
public/
  assets/          avatar and partner logos
  icons/stack/     tech-stack SVGs
  og.png           social share image
src/
  components/      Header, Footer, ProjectCard, TechStack, Icon, …
  data/            site.ts, projects.ts
  layouts/         BaseLayout.astro (SEO, theme init, reveal animations)
  pages/           index, projects, about, contact, 404
  styles/          global.css (tokens, typography, shared styles)
scripts/
  sync-projects.mjs
```

## Theming

The palette lives in `:root` and `:root[data-theme="dark"]` in `src/styles/global.css`. The toggle persists to `localStorage`; the chosen theme is applied before paint to avoid a flash. Add `?theme=light` or `?theme=dark` to any URL to preview a theme without changing the saved preference.

## Deployment (GitHub Pages)

The site is built and deployed by GitHub Actions — see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which uses `withastro/action` + `actions/deploy-pages`. The workflow runs on pushes to `v2` (the rebuilt site), `main` and `master`, and can also be started manually.

### One-time repository setup

1. **Settings → Pages → Source:** choose **GitHub Actions** (not "Deploy from a branch" — that would publish the Astro source instead of the build).
2. **Settings → Pages → Custom domain:** `www.loosaz.com`, then enable **Enforce HTTPS** once the certificate is issued.
3. Push to `v2` (or run the workflow from the Actions tab) to trigger the first deploy.

The domain is also pinned by [`public/CNAME`](public/CNAME), which is copied into `dist/` on every build.

### Branches

`v2` holds the rebuilt site; `old` still contains the previous version. To make the new site the repository default, either merge `v2` into `main`/`master`, or go to **Settings → General → Default branch** and switch it to `v2`. If the branch is later renamed to `main`, the workflow already covers it.

### DNS records

The custom domain uses `www` as the canonical host, with the apex redirecting to it:

| Type  | Name | Value                     |
| ----- | ---- | ------------------------- |
| A     | @    | `185.199.108.153`         |
| A     | @    | `185.199.109.153`         |
| A     | @    | `185.199.110.153`         |
| A     | @    | `185.199.111.153`         |
| CNAME | www  | `looosaz.github.io`       |

These are already configured. DNS changes can take a while to propagate; GitHub provisions the TLS certificate automatically afterwards.

### Notes

- `site` in [`astro.config.mjs`](astro.config.mjs) is set to `https://www.loosaz.com` so canonical URLs, Open Graph tags and the sitemap all use the custom domain. If the domain ever changes, update it there and in [`public/robots.txt`](public/robots.txt).
- [`public/.nojekyll`](public/.nojekyll) keeps GitHub from running Jekyll over the build output.
- A custom `404.html` is generated automatically and served by GitHub Pages for unknown routes.
- Local builds still work with `npm run build`, and `dist/` can be deployed to any other static host.

## Credits

Design and code by LoosaZ. Partner logos belong to their respective owners. Tech icons from [Simple Icons](https://simpleicons.org).
