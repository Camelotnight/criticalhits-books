# Canon check

Every fact the site states about the ship or the world, with where it comes from. Line numbers refer to the vault files as of 2026-10-15.

- **Dossier**: `Efforts/Projects/Fiction/Jovian/Series Bible/Locations/The Cooper's Reach.md` (updated 2026-10-08)
- **Locations MOC**: `Series Bible/Locations & Habitats MOC.md`
- **S1**: the approved store blurb (brief, "Approved copy")

If a number changes in the vault, change it here and in `src/data/` together.

## The Ship (`src/data/ship.ts`)

| Fact on the site | Source |
|---|---|
| *Lifeline*-class heavy rescue cutter, yard spec 8231 | Dossier L29 |
| Civilian search-and-rescue charter | Dossier L27 |
| Captain Kade Holloway, inherited from his father, Jack | Dossier L30 ("Inherited from Jack Holloway"); "father" from the brief |
| 74 m stem to stern, 24 m across the drone sponsons, 15 m high | Dossier L38 |
| Flattened, faceted double wedge | Dossier L38 |
| Sharp forward deflection wedge at the bow | Dossier L40 |
| Aft taper hides the radiators and drone bays | Dossier L41 |
| 1,050 t dry, about 1,380 t wet | Dossier L31 |
| The Pelt: three layers | Dossier L48 |
| Sacrificial boron-doped CNT tiles | Dossier L50 |
| 150 mm aerogel capture void | Dossier L51 |
| Titanium-composite spall backing | Dossier L52 |
| Oversized helium-3/deuterium torch | Dossier L59 |
| Routine cruise 0.2–0.5 g; emergency burns 1.2–1.5 g and up | Dossier L60 (thrust gravity) |
| Too non-standard to clear port certification | Dossier L61 |
| MMH thrusters on the four hull shoulders | Dossier L64 |
| Copper catalyst, emerald-green flash on hard burns | Dossier L65 |
| Liquid droplet radiators deployed in the aft shadow | Dossier L69 (and L41) |
| Spin ring: 16 m drum at the center of mass, about 8.3 RPM, 0.6 g | Dossier L76; **LOCKED** row in the Continuity Log (spin gravity) |
| Collapses and locks for hard burns | Dossier L76 |
| Galley, quarters, four-bed medbay on the ring | Dossier L77 |
| Command deck unspun, outside the ring | Dossier L77 |
| Bearing chirp once every 7.2 seconds | Dossier L76, L115 |
| 150 kW plasma lance in the bow | Dossier L91 |
| Three boarding umbilicals, "the lifelines" | Dossier L92 |
| Two crawler drones, *Biter* and *Claw* | Dossier L93–96 |
| Debris-clearing laser | Dossier L97 |
| No offensive weapons | Dossier L89 |
| Caretaker in a crash-rated black box on the keel | Dossier L105 |
| Caretaker advises; humans keep the levers | Dossier L106 |

Spin gravity (0.6 g) and thrust gravity (0.2–0.5 g cruise, 1.2–1.5 g+ emergency) appear in separate panels and are never mixed, per the LOCKED row.

Deliberately left off the site: the ring's crew couch assignments, the shotguns in the arms locker, replacement value, Caretaker's place in the wider mesh, and the dossier's Continuity Log rows beyond the crossing.

## The World (`src/data/places.ts`)

| Fact on the site | Source |
|---|---|
| Minerva Station is in the Jupiter L4 Trojans, Kade's home port | S1 ("Minerva Station in Jupiter's Trojans"); Dossier Continuity Log, crossing row ("Minerva (Jupiter L4)") |
| "The last place in the system where a captain buried in debt can still make the math work" | S1 |
| Hercules is under construction at Minerva | Brief (approved by Robert) |
| Callisto: anchor of USN power in the Jovian system; the claim registry | Locations MOC, Callisto entry |
| L5: trailing Trojan habitats | Locations MOC, L5 Trojan Enclave entry |
| Minerva → Callisto: 5.2 AU at half a g | Dossier Continuity Log, crossing row (R88) |

Astronomy, not canon: L4 leads Jupiter by 60°, L5 trails by 60°; Jupiter orbits about 5.2 AU from the Sun. The map is labeled "not to scale" and its positions are stylized.

## Copy

Tagline, store blurb (S1), comp line, sign-up block, thank-you text and long bio are used verbatim from the brief's approved copy. The home page uses S1's hook and first paragraph as its short blurb.

Written for the site and not in the approved copy (Robert to review):

- ARC callout: "Advance copies open around October 26. Join the list and you'll get the invitation first."
- Ship page intro: "Built to reach people in trouble and bring them home. Pick a system to look closer."
- Short connecting lines inside the ship panels (for example "More engine than a cutter this size should carry"), each a paraphrase of the dossier line cited above.
- The sign-up note "Sign-up opens shortly." shows only while the Kit form ID is a placeholder.
