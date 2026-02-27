
  # Responsive Tech Company Website

  This is a code bundle for Responsive Tech Company Website. The original project is available at https://www.figma.com/design/GYdyuq4iio9son3h3qgXJi/Responsive-Tech-Company-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Editing Content & SEO

  See `docs/EDITING_GUIDE.md` for:
  - CMS-driven careers updates
  - navigation/content editing points
  - SEO metadata, sitemap, and robots configuration

  ## Sanity CMS

  The project includes a Sanity Studio in `sanity/` with schemas for:
  - Hero section content
  - Careers page content and positions
  - Global site content (navbar/about/services/portfolio/blog/research/testimonials/contact/footer/trusted-by)
  - Frontend env template: `.env.example`

  Run Studio locally:
  1. `cd sanity`
  2. `npm i`
  3. `npm run dev`

  In Sanity Studio, create these documents:
  - `siteContent` (global homepage + shared content)
  - `hero` (hero section content)
  - `careersPage` (careers page + positions)

  Deploy Studio from project root:
  - `npm run deploy:sanity`
  
