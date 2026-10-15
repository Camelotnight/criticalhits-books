// The Cooper's Reach. Every fact here traces to the Series Bible dossier
// (Series Bible/Locations/The Cooper's Reach.md). See docs/canon-check.md before changing any number.
import type { ExplorerItem } from '../components/Explorer.astro';

// Drawing coordinates live in an 840 × 250 viewBox (10 units = 1 m along the hull).
export const SHIP_VIEW = { w: 840, h: 250 };
const at = (x: number, y: number) => ({ x: +((x / SHIP_VIEW.w) * 100).toFixed(2), y: +((y / SHIP_VIEW.h) * 100).toFixed(2) });

export const shipItems: ExplorerItem[] = [
  {
    id: 'hull',
    label: 'Hull',
    ...at(255, 186),
    kicker: 'Yard spec 8231',
    title: 'Lifeline-class heavy rescue cutter',
    html: `
      <p>A flattened, faceted double wedge. The bow comes to a sharp deflection wedge; the stern tapers inward to hide the radiators and drone bays in its shadow.</p>
      <dl>
        <dt>Length</dt><dd>74 m stem to stern</dd>
        <dt>Beam</dt><dd>24 m across the drone sponsons</dd>
        <dt>Height</dt><dd>15 m</dd>
        <dt>Mass</dt><dd>1,050 t dry · about 1,380 t wet</dd>
        <dt>Charter</dt><dd>Civilian search and rescue</dd>
      </dl>
      <p>Captain: Kade Holloway, who inherited the ship from his father, Jack.</p>`,
  },
  {
    id: 'pelt',
    label: 'The Pelt',
    ...at(470, 50),
    kicker: 'Armor',
    title: 'The Pelt',
    html: `
      <p>Three layers between the crew and anything moving fast enough to matter:</p>
      <ol class="layers">
        <li><strong>Sacrificial tiles.</strong> Boron-doped CNT, meant to shatter what hits them.</li>
        <li><strong>Capture void.</strong> 150 mm of aerogel that catches what gets through.</li>
        <li><strong>Spall backing.</strong> Titanium composite to stop the fragments.</li>
      </ol>`,
  },
  {
    id: 'torch',
    label: 'Fusion torch',
    ...at(40, 125),
    kicker: 'Main drive',
    title: 'Oversized helium-3/deuterium torch',
    html: `
      <dl>
        <dt>Routine cruise</dt><dd>0.2–0.5 g</dd>
        <dt>Emergency burns</dt><dd>1.2–1.5 g and up</dd>
      </dl>
      <p>More engine than a cutter this size should carry, and too non-standard to clear port certification.</p>`,
  },
  {
    id: 'rcs',
    label: 'RCS',
    ...at(604, 62),
    kicker: 'Attitude control',
    title: 'Reaction control',
    html: `
      <p>Monomethylhydrazine thrusters on the four hull shoulders. The copper catalyst throws an emerald-green flash on hard burns.</p>`,
  },
  {
    id: 'radiators',
    label: 'Radiators',
    ...at(92, 66),
    kicker: 'Heat rejection',
    title: 'Liquid droplet radiators',
    html: `
      <p>Deployed in the aft shadow, where the tapered hull keeps them out of the way of debris.</p>`,
  },
  {
    id: 'ring',
    label: 'Spin ring',
    ...at(410, 125),
    kicker: 'Habitat',
    title: 'The spin ring',
    html: `
      <dl>
        <dt>Drum</dt><dd>16 m, at the center of mass</dd>
        <dt>Spin</dt><dd>about 8.3 RPM</dd>
        <dt>Spin gravity</dt><dd>six-tenths of a g</dd>
      </dl>
      <p>The galley, the quarters and a four-bed medbay live on the ring. It collapses and locks for hard burns.</p>
      <p>A worn bearing makes it chirp once every 7.2 seconds.</p>
      <div class="chirp" aria-hidden="true"><span class="arm"></span></div>`,
  },
  {
    id: 'command',
    label: 'Command deck',
    ...at(560, 92),
    kicker: 'Ops',
    title: 'Command deck',
    html: `
      <p>Unspun, outside the ring. When the ship is coasting the ring has weight and the command deck doesn't.</p>`,
  },
  {
    id: 'rescue',
    label: 'Rescue kit',
    ...at(772, 128),
    kicker: 'Search and rescue',
    title: 'Rescue kit',
    html: `
      <ul>
        <li>150 kW plasma lance in the bow</li>
        <li>Three boarding umbilicals: “the lifelines”</li>
        <li>Two crawler drones, <em>Biter</em> and <em>Claw</em></li>
        <li>A debris-clearing laser</li>
      </ul>
      <p>No offensive weapons.</p>`,
  },
  {
    id: 'caretaker',
    label: 'Caretaker',
    ...at(335, 186),
    kicker: 'Ship’s mind',
    title: 'Caretaker',
    html: `
      <p>The ship’s mind lives in a crash-rated black box on the keel. Caretaker advises; humans keep the levers.</p>`,
  },
];
