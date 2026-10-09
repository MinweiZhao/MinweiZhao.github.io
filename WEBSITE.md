# Public academic website

The public homepage is https://minweizhao.github.io/ .

This repository contains the approved academic website, exported from the existing implementation rather than redesigned. It retains the visual design, Scholar avatar, education and mentor marks, nine publication records with PDF/DOI/BibTeX, twelve student/peer collaborators, and thirteen illustrated news entries. News shows five items per page, supports up to twenty-five items, and supports multiple images with an accessible enlarged view.

The former private-blog landing page has been removed. This export contains no blog editor, database, authentication handlers or private posts.

## Deployment

Keep the existing **Settings → Pages → Deploy from a branch → main → /(root)** configuration. GitHub's built-in `pages build and deployment` workflow publishes committed static files automatically. The `.nojekyll` marker makes the entry point and assets serve directly.

The `Check academic website` workflow independently verifies the source, committed output and local resources. It does not change the existing publishing configuration.

## Source and maintenance

- `website/app/page.tsx`: academic homepage, education and publication records.
- `website/data/news.ts`: news records, newest first, at most twenty-five displayed.
- `website/data/news-media.ts`: image paths, dimensions, captions and original sources.
- `website/data/collaborators.ts`: students and peers.
- `website/components/`: reused logos, news pagination and image gallery.
- `website/site.css`: compiled stylesheet from the approved website, usable directly by browsers.
- `website/static-image.tsx`: normal HTML images for GitHub Pages.
- `assets/academic/`: website images and generated CSS/JavaScript.

Use Node.js 24:

```sh
npm ci --prefix website
npm run build --prefix website
python3 scripts/check-pages.py _site
```

Commit both changed source and generated `index.html`, `assets/academic/`, `robots.txt`, `sitemap.xml`, and `.nojekyll`. A push to main publishes the update. Preview the website artifact with `python3 -m http.server 8000 --directory _site`.

The original coursework and research directories are retained unchanged. The build exports only the academic page and its referenced assets into `_site`.

## Image provenance

Publication screenshots are direct crops of actual PDFs. The ECCV screenshot is explicitly marked as an author proof. The Cities preview comes from the lab's publication announcement; two older articles currently use journal covers. CUPUM photos are reused from the conference report and LinkedIn announcement; Hangzhou photos come from the organizer. Source links remain visible beside each news image.
