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
| **Kit form ID** | `KIT_FORM_ID` in `src/config.ts` | The sign-up form shows but is disabled, with "Sign-up opens shortly." |

The cover lives at `src/assets/cover.jpg`; the home page, The Book page and link previews all use it.

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

## The encyclopedia

`/wiki/` is a spoiler-free encyclopedia of the world. Each article is one Markdown file in `src/content/wiki/`, with its facts, an "At a glance" box and an optional **Behind the science** note:

```md
<aside class="science">

## Behind the science

Real research goes here.

</aside>
```

An article can also carry an in-world sidebar, **Field notes**: a short evaluation report filed by Dr. Gavin Macaraeg, a USN materials researcher sent to Jupiter to test Belt gear for certification. Same shape, placed before the science box:

```md
<aside class="fieldnote">

## Field notes

### Title of the note

<p class="byline">Dr. Gavin Macaraeg · USN materials researcher</p>

*Site. Item. Who ran the test.*

**Method.** ... **Observation.** ... **Finding.** ... **Assessment.** ... **Note.** ...

</aside>
```

Gavin's register, so new notes match the first four:

- It is a report, not an anecdote. Run-in heads, short declaratives, about 250 to 300 words.
- The humor is understatement. He records something alarming or absurd in the same level voice as everything else. Nobody falls over.
- Everyone is competent. The Capa technician, crew chief or cladding fitter is the expert of record, runs the test, and gets one plain line of dialogue.
- The recurring joke is the form: the gear beats the standard and is still "nonconforming."
- The book's PROSE rulings apply to his prose: no negative contractions, no corrective reframes, no "shoulder", no em-dashes, real terms over invented ones, no new coined slang.
- No invented numbers. If the vault has no figure, the report does without one.

Each field note can carry its own audio: an MP3 in `public/audio/field-notes/<article-slug>.mp3`, linked by a `<div class="listen">` player placed right under the byline. One file per note, named after its article.

The `inshort` field in an article's front matter fills the "New to the book?" box: two or three `[label, sentence]` rows written for a first-time reader. In the glossary data, `start: n` puts a word in the "Start here" list and `more: 'slug'` links it to its article.

Rules: world facts only, never plot; nothing the book treats as a reveal; no Book 2. The `sources` field in each file records where every fact came from in the vault and is never shown on the site. The quick glossary (`/wiki/glossary/`) lives in `src/data/glossary.ts`.

## The World page

`/world/` is `src/components/WorldApproach.astro`: one self-contained file (markup, styles, script) with four scales, the system, the Trojans, the corridor and Minerva's tiers. Minerva, Hercules I and Hercules II sit at the corners of an equal-sided triangle, about 50,000 km a side; Hercules is drawn far larger than Minerva, never to scale.

Beside the map runs the **Minerva Traffic** channel: in-world radio calls that change with the scale (`AMBIENT` in the script). *Cooper's Reach* departs once per visit on the corridor (`REACH_ARC`), with Cassandra on comms, and her marker moves on the map. The channel stops when it is off screen, and stays still under reduced motion. Calls are new writing in the book's register, never manuscript text. Ship names: *Cooper's Reach* and *Haldane's Theorem* (canon), *Bad Penny*, *Dauntless* and *Cold Comfort*. Deep links: `?stop=2&calls=8`.

## Layout

```
src/config.ts               placeholders and site constants
src/data/ship.ts            Cooper's Reach hotspot facts
src/data/places.ts          old Jovian map facts (JovianMap, no longer on /world/)
src/components/Explorer     shared shell for the two interactive diagrams
src/components/ShipModel    ship page figure: 3D model, with the flat profile as fallback
src/scripts/ship-model.js   the 3D model (three.js), ported from the vault's working model
src/components/ShipProfile  flat side-profile SVG
src/components/JovianMap    system map SVG
src/pages/                  home, book, ship, world, about, thank-you, 404
docs/canon-check.md         fact-by-fact sources
```
