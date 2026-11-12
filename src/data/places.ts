// Jovian system map. Facts trace to the Series Bible (Locations & Habitats MOC) and the
// approved store blurb. See docs/canon-check.md. Positions are stylized: not to scale.
import type { ExplorerItem } from '../components/Explorer.astro';

export const MAP_VIEW = { w: 800, h: 560 };

// Jupiter's orbit drawn as an arc around a Sun placed just off the bottom of the map.
export const SUN = { x: 400, y: 500 };
export const ORBIT_R = 320;
const onOrbit = (deg: number) => ({
  x: SUN.x + ORBIT_R * Math.cos((deg * Math.PI) / 180),
  y: SUN.y + ORBIT_R * Math.sin((deg * Math.PI) / 180),
});
// Screen y points down, so a counterclockwise orbit (seen from solar north) runs right-to-left
// across the top of the arc: L4 leads Jupiter on the left, L5 trails on the right.
export const JUPITER = onOrbit(-90);
export const L4 = onOrbit(-150);
export const L5 = onOrbit(-30);

export const MOONS = [
  { name: 'Io', r: 38, deg: 20 },
  { name: 'Europa', r: 56, deg: 100 },
  { name: 'Ganymede', r: 80, deg: -40 },
  { name: 'Callisto', r: 112, deg: 160 },
].map((m) => ({
  ...m,
  x: JUPITER.x + m.r * Math.cos((m.deg * Math.PI) / 180),
  y: JUPITER.y + m.r * Math.sin((m.deg * Math.PI) / 180),
}));

export const CALLISTO = MOONS.find((m) => m.name === 'Callisto')!;
export const MINERVA = { x: L4.x + 14, y: L4.y - 10 };

const pct = (p: { x: number; y: number }) => ({
  x: +((p.x / MAP_VIEW.w) * 100).toFixed(2),
  y: +((p.y / MAP_VIEW.h) * 100).toFixed(2),
});

export const placeItems: ExplorerItem[] = [
  {
    id: 'minerva',
    label: 'Minerva Station',
    ...pct(MINERVA),
    kicker: 'Jupiter L4 · leading Trojans',
    title: 'Minerva Station',
    html: `
      <p>Kade Holloway’s home port, out among the Trojans that run ahead of Jupiter on its orbit. It’s the last place in the system where a captain buried in debt can still make the math work.</p>
      <p>Hercules is under construction there.</p>`,
  },
  {
    id: 'callisto',
    label: 'Callisto',
    ...pct(CALLISTO),
    kicker: 'Galilean moon',
    title: 'Callisto',
    html: `
      <p>The anchor of United Solar Nations (USN) power in the Jovian system, and home of the claim registry.</p>`,
  },
  {
    id: 'l5',
    label: 'The Trojans (L5)',
    ...pct(L5),
    kicker: 'Jupiter L5 · trailing Trojans',
    title: 'The trailing Trojans',
    html: `
      <p>Habitats in the Trojan cloud that trails sixty degrees behind Jupiter.</p>`,
  },
];

/** Deterministic scatter for the Trojan clouds, so every build draws the same sky. */
export function trojanCloud(centerDeg: number, count: number, seed: number) {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: count }, () => {
    const deg = centerDeg + (rand() - 0.5) * 44;
    const r = ORBIT_R + (rand() - 0.5) * 70;
    return {
      x: +(SUN.x + r * Math.cos((deg * Math.PI) / 180)).toFixed(1),
      y: +(SUN.y + r * Math.sin((deg * Math.PI) / 180)).toFixed(1),
      size: +(0.8 + rand() * 1.4).toFixed(2),
    };
  });
}
