# Academic website deployment

## Audit (9 October 2026)

The original main head was `7804e0285aef00c7796cf2344c9155beb310cc86`.
The repository contained coursework/research files, three portrait assets, and a course notebook in test.md; the full recursive tree had no website entry point or site build configuration. Only main existed.

This repository already served GitHub Pages: the dynamic `pages build and deployment` run [32442685333](https://github.com/MinweiZhao/MinweiZhao.github.io/actions/runs/32442685333) succeeded for that head on 21 August 2026. Its build used Jekyll. No gh-pages branch or committed workflow is required for branch-based Pages. The connector cannot read the Pages settings endpoint, so the exact configured source path could not be verified. Existing successful deployment establishes Pages use, not historical intent for a complete academic homepage.

A separate, existing complete academic website was found at https://minwei-zhao.loganminweizhao.chatgpt.site (Sites project `appgprj_6a87140612048191939ada171e7766cb`, 9 versions). It has academic/publication pages, branded icons, blog pages, and authenticated create/update/delete controls with public/private post filtering. Its current audience is owner-only. This audit does not claim a runtime verification of every editing action.

## Architecture

GitHub Pages hosts the public static academic profile. Publication records and official brand SVGs are reused from the existing website; portrait paths reuse repository assets. Existing files are untouched. Bibliography and PDF/DOI links are preserved as recorded in that implementation; missing ECCV resources are explicitly identified, not fabricated. External publication URLs have not been revalidated in this change.

The original website remains the only blog and editor implementation. GitHub Pages cannot execute its server routes, D1 database, or ChatGPT authentication. The public blog landing page explains the access restriction; it does not export private posts or recreate a second editor. Making that blog public requires an explicit audience change on the existing website. Do not put private drafts into this public GitHub repository.

## Publishing

Preserve existing branch-based Pages publishing. In Settings → Pages, verify **Deploy from a branch**, **main**, **/(root)**. `.nojekyll` serves the entry points directly. Pushes to main then trigger GitHub's existing dynamic deployment. No second deployment workflow or gh-pages branch is needed. `pages-check.yml` validates local entry points/resources on pushes and pull requests; it is a check, not a deployment gate for the built-in Pages publisher. For gated publishing, switch Pages to GitHub Actions and replace the publisher deliberately.

Expected public URL: https://minweizhao.github.io/ . A successful GitHub deployment run is required before treating a new revision as live.

## Maintenance

Edit `index.html` publication articles and BibTeX details together. Add PDF and DOI anchors only when real URLs are available. Styling lives in `assets/site.css`. Add, edit, delete, or change visibility of blog posts in the existing site's `/studio` page after owner sign-in. The public website never includes database files, credentials, or private drafts.

Run `python scripts/check-pages.py` locally. A local preview is available with `python -m http.server 8000` from the repository root.
