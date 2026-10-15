# criticalhits-books

Author site for Robert Hasleton and *The Jovian Crisis*, Book One of The Capa Incident. Static Astro site, deployed to GitHub Pages at `books.criticalhits.net`.

© 2026 Robert Hasleton. All rights reserved. No license is granted for any part of this repository.

## Run it

```sh
npm install
npm run dev              # http://localhost:4321
npm run build            # static output in dist/
npm run check:spoilers   # fails if a banned term appears anywhere
```

Node 22.22 or newer.

## Placeholders still to fill

| What | Where | Until then |
|---|---|---|
| **Cover image** (approved `The_Jovian_Crisis_eCover_2.jpg`) | Copy it to `src/assets/cover.jpg` | A typographic stand-in renders. Once the file is there, it's picked up and optimized automatically. |
| **Kit form ID** | `KIT_FORM_ID` in `src/config.ts` | The sign-up form shows but is disabled, with "Sign-up opens shortly." |
| **Amazon pre-order link** `[AMAZON LINK]` | `AMAZON_URL` in `src/config.ts` | The Book page shows "Pre-order link coming soon." |

Also: once the cover is in, check the palette in `src/styles/global.css` against it. The current colors were chosen without the cover in hand.

## Kit setup

The sign-up is a plain HTML form that posts to `https://app.kit.com/forms/<KIT_FORM_ID>/subscriptions` with the field `email_address`. No Kit script is loaded, so the site sets no cookies. In Kit:

1. Create the form and copy its numeric ID into `src/config.ts`.
2. Under the form's settings, set the success action to redirect to `https://books.criticalhits.net/thank-you/`.
3. Set the incentive/confirmation email to the "quick hello" the thank-you page promises.

## Going live

1. Merge to `main`. The workflow in `.github/workflows/deploy.yml` builds, runs the spoiler check, and deploys.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. DNS: add a CNAME record `books` → `camelotnight.github.io`.
4. Back in **Settings → Pages**, confirm the custom domain `books.criticalhits.net` (it's also in `public/CNAME`), wait for the certificate, then tick **Enforce HTTPS**.

## Content rules

- Only approved marketing copy. No manuscript, ARC files or Beat Text in this repo.
- Nothing past the store blurb and Act 1. `npm run check:spoilers` guards the known terms (stored as hashes in `scripts/spoiler-check.mjs` so the script doesn't name them); CI runs it on every deploy.
- Every ship and world fact traces to the vault. See `docs/canon-check.md` before changing a number.
- The ship's spin gravity (0.6 g, 16 m drum, about 8.3 RPM, 7.2 s chirp) is locked canon. Thrust gravity is separate; don't mix them.

## Layout

```
src/config.ts               placeholders and site constants
src/data/ship.ts            Cooper's Reach hotspot facts
src/data/places.ts          Jovian map facts and geometry
src/components/Explorer     shared shell for the two interactive diagrams
src/components/ShipCutaway  ship side-profile SVG
src/components/JovianMap    system map SVG
src/pages/                  home, book, ship, world, about, thank-you, 404
docs/canon-check.md         fact-by-fact sources
```
