# Website Editing Guide

## Content Editing
- Home page section order: `src/app/App.tsx`
- Header links: `src/app/components/Navbar.tsx` (`navLinks` array)
- Footer links/services: `src/app/components/Footer.tsx`
- Careers page layout: `src/app/components/Careers.tsx`
- Careers CMS data (job positions): `public/cms/careers.json`

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
