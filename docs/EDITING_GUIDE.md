# Website Editing Guide

## Content Editing
- Home page section order: `src/app/App.tsx`
- Header links/content source: Sanity `siteContent.navbarLinks`
- Footer links/services source: Sanity `siteContent.footer`
- Careers page layout/content source: Sanity `careersPage` document
- Shared content context: `src/app/context/SiteContentContext.tsx`
- Sanity fetch helpers/types: `src/app/lib/sanity.ts`, `src/app/lib/siteContent.ts`
- Sanity Studio schemas:
  - `sanity/schemaTypes/hero.ts`
  - `sanity/schemaTypes/careersPage.ts`
  - `sanity/schemaTypes/siteContent.ts`
- Legacy fallback careers data: `public/cms/careers.json` (used if CMS is unavailable)

## Careers CMS Schema
Each item in `positions` supports:
- `id`: unique string
- `title`: role name shown on page
- `department`: team name
- `location`: location text
- `type`: one of `Full-time`, `Part-time`, `Contract`, `Internship`
- `experience`: experience range text
- `summary`: short role summary
- `requirements`: string array
- `responsibilities`: string array
- `applyUrl`: URL or mailto link
- `postedDate`: `YYYY-MM-DD` (used for newest-first sorting)

## Sanity Setup
1. Frontend reads from:
   - `VITE_SANITY_PROJECT_ID` (defaults to `pyodekba`)
   - `VITE_SANITY_DATASET` (defaults to `production`)
   - `VITE_SANITY_API_VERSION` (defaults to `2026-02-26`)
2. Optional `.env` file in project root:
   - `VITE_SANITY_PROJECT_ID=pyodekba`
   - `VITE_SANITY_DATASET=production`
   - `VITE_SANITY_API_VERSION=2026-02-26`
3. Run Sanity Studio:
   - `cd sanity`
   - `npm i`
   - `npm run dev`
4. Create one `hero` document, one `careersPage` document, and one `siteContent` document in Studio.

## SiteContent Icon Keys
For `siteContent` arrays that include `icon`, use supported keys:
- `target`, `lightbulb`, `rocket`
- `globe`, `code`, `smartphone`, `cpu`, `brain`, `code2`
- `wifi`, `database`, `shield`, `cloud`, `zap`
- `beaker`, `trendingUp`, `users`, `award`, `bookOpen`

## Portfolio CMS Controls
In `siteContent -> portfolio -> items[]`:
- add/remove items to manage project cards
- set `isActive` to hide/show a project without deleting
- set `liveUrl` to enable the external-link icon
- set `repoUrl` to enable the GitHub icon

## Blog CMS Controls
In `siteContent -> blog -> posts[]`:
- add one post for each category/tag you want to display
- each post supports `content`, `metaTitle`, and `metaDescription` for SEO
- post links open on dedicated pages at `/blog/{slug}`

## SEO Editing
- Runtime SEO tags/schema: `src/app/components/SEO.tsx`
- Base metadata fallback: `index.html`
- Sitemap: `public/sitemap.xml`
- Robots rules: `public/robots.txt`
- Google Search Console verification: `index.html` (`google-site-verification`)
- Favicon files: `public/zenture-logo.png`, `public/apple-touch-icon.png`

## Add A New Top-Level Page
1. Add the component under `src/app/components/`.
2. Extend pathname handling in `src/app/App.tsx`.
3. Add nav/footer links (`Navbar.tsx`, `Footer.tsx`).
4. Add page URL to `public/sitemap.xml`.
5. Add SEO metadata with `<SEO ... />` in that page branch.
