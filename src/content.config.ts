import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The encyclopedia. One Markdown file per article in src/content/wiki/.
// Rules: world facts only, never plot. Nothing the book treats as a reveal. No Book 2.
// Run `npm run check:spoilers` after every edit.
export const SECTIONS = {
  powers: { title: 'Powers and peoples', blurb: 'Who holds the fuel, who does the work, and what they call each other.' },
  places: { title: 'Places', blurb: 'From the warrens of Luna to the Trojan camps sixty degrees off Jupiter.' },
  science: { title: 'Science and technology', blurb: 'The physics the world runs on, and the machines built to cheat it.' },
  gear: { title: 'Suits, ships and rescue', blurb: 'What keeps a body alive outside, and the code that says who comes for you.' },
  life: { title: 'Life and money', blurb: 'What it costs, what it tastes like, and how a shift goes.' },
} as const;

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['powers', 'places', 'science', 'gear', 'life']),
    order: z.number().default(50),
    summary: z.string(),
    aka: z.array(z.string()).optional(),
    infobox: z.array(z.tuple([z.string(), z.string()])).optional(),
    related: z.array(z.string()).default([]),
    // Where each fact came from in the vault. Not shown on the site.
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { wiki };
