---
title: "Water and closed loops"
section: science
order: 7
summary: "Every drop is used again: how a station turns sweat and graywater back into drinking water, and why Minerva’s cisterns roar."
aka: ["graywater", "cisterns", "reclamation", "the 99.9% loop"]
infobox:
  - ["Standard", "The 99.9 percent loop"]
  - ["Minerva", "Six-stage ionic reclamation; cavitating cisterns"]
  - ["Cooper’s Reach", "Catalytic oxidation, vacuum distillation, silver ions"]
  - ["Taste", "Flat, faintly metallic"]
related: ["minerva-station", "daily-life", "heat", "the-belt"]
sources: ["Minerva Station §2 (atmosphere & life support), §3", "The Cooper’s Reach dossier (hydrological recovery)", "SOL System Habitability §2.2–2.3", "Robert, 2026-11-19 (research account)"]
---

In the outer system nothing is thrown away. Air, water and nutrients run in **closed loops**, recovered and cleaned and used again. The standard for any serious habitat is the **99.9 percent loop**: lose no more than one part in a thousand per cycle.

## What water is for

Water is the working fluid of the whole civilization. It is drinking water, of course. It is also:

- the solvent for growing food,
- the feedstock for the oxygen people breathe,
- reaction mass for some engines,
- and very good radiation shielding, one more reason to keep a lot of it near the hull.

## On a ship

The *Cooper’s Reach* recovers 100 percent of its water. It catalytically oxidizes the impurities, distills them out under vacuum and treats what is left with silver ions to keep it sterile. It reclaims urine, graywater, and even the sweat in the air. The result is chemically pure, flat, and faintly metallic. Nobody likes it, and everybody drinks it.

## On a station

[Minerva](/wiki/minerva-station/) runs a **six-stage ionic reclamation** system. Its water is held in great **cisterns** around the station’s skin. Graywater, the used water from washing and industry, moves through them in an **annular matrix**: a ring-shaped channel where it is driven hard enough to **cavitate**. Bubbles form in the low-pressure flow and collapse violently, tearing apart contaminants and microbes.

It is the loudest structure on the station. Up close, the collapsing bubbles crackle like gravel in a pipe. Under that, the great pumps and the turning ring set up a roar that comes through as **infrasound**, a pressure below hearing. It makes people without augmented ears queasy. The pump rooms are walled in spun basalt to kill the sound. Near the cisterns the corridors grow humid, and the air smells of ozone.

<figure class="cav" id="cav" aria-labelledby="cav-title">
<style>
#cav{margin:2rem 0;padding:1rem 1rem .9rem;border:1px solid var(--line,#243142);border-radius:var(--radius,4px);background:#0d131b;font-family:var(--font-display,system-ui,sans-serif);color:var(--text,#dde3ea)}
#cav .cav-head{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.6rem}
#cav .cav-title{margin:0;font-size:.78rem;letter-spacing:.16em;text-transform:uppercase;color:var(--signal,#7cc8dc)}
#cav .cav-modes{display:flex;gap:.35rem}
#cav button{font-family:inherit;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;background:var(--bg,#0b0f15);color:var(--muted,#9aa7b6);border:1px solid var(--line-strong,#34465c);border-radius:3px;padding:.35rem .65rem;min-height:36px;cursor:pointer}
#cav button[aria-pressed="true"]{border-color:var(--accent,#e3a857);color:var(--text,#dde3ea)}
#cav button:focus-visible,#cav input:focus-visible{outline:2px solid var(--focus,#ffd48a);outline-offset:2px}
#cav svg{display:block;width:100%;height:auto}
#cav svg text{font-family:inherit}
#cav .cav-ctl{display:flex;flex-wrap:wrap;align-items:center;gap:.5rem .9rem;margin:.7rem 0 .4rem}
#cav .cav-ctl label{font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted,#9aa7b6)}
#cav input[type=range]{flex:1 1 12rem;min-width:10rem;accent-color:var(--accent,#e3a857);min-height:36px}
#cav output{font-size:.85rem;font-variant-numeric:tabular-nums;color:var(--text,#dde3ea);min-width:12.5rem}
#cav .cav-read{margin:.2rem 0 .5rem;font-size:.95rem;color:var(--text,#dde3ea)}
#cav .cav-read b{color:var(--accent,#e3a857);font-weight:600}
#cav .cav-cap{margin:0 0 .5rem;font-family:var(--font-text,system-ui,sans-serif);font-size:.95rem;line-height:1.55;color:var(--text,#dde3ea)}
#cav .cav-note{margin:0;font-size:.72rem;color:var(--muted,#9aa7b6);line-height:1.5}
#cav .wall{fill:none;stroke:#5f6f84;stroke-width:2.5;stroke-linejoin:round}
#cav .water{fill:rgba(124,200,220,.06)}
#cav .lbl{fill:#6d7f95;font-size:12px;letter-spacing:.12em}
#cav .lbl-a{fill:var(--accent,#e3a857);font-size:12px;letter-spacing:.12em}
#cav .axis{stroke:#34465c;stroke-width:1}
#cav .pcurve{fill:none;stroke:var(--signal,#7cc8dc);stroke-width:2}
#cav .vap{stroke:var(--accent,#e3a857);stroke-width:1.5;stroke-dasharray:6 4}
#cav .zone{fill:rgba(227,168,87,.16)}
#cav .streak{stroke:rgba(124,200,220,.55);stroke-width:1.6;stroke-linecap:round}
#cav .bub{fill:rgba(221,227,234,.18);stroke:#dde3ea;stroke-width:1}
#cav .pop{fill:none;stroke:var(--accent,#e3a857);stroke-width:1.4}
#cav .germ{fill:#8fbf6a}
#cav .frag{fill:#8fbf6a}
#cav .blade{fill:#2a3442;stroke:#7d8b9c;stroke-width:1}
#cav .pit{fill:#0b0f15;stroke:#9aa7b6;stroke-width:.6}
#cav .needle{stroke:var(--text,#dde3ea);stroke-width:2;stroke-linecap:round}
#cav .dial{fill:#0b0f15;stroke:#5f6f84;stroke-width:1.5}
#cav .noise{fill:none;stroke:#9aa7b6;stroke-width:1.2}
#cav .noise.hot{stroke:var(--accent,#e3a857)}
@media (max-width:520px){#cav{padding:.8rem .7rem}#cav output{min-width:0}}
</style>
<div class="cav-head">
<p class="cav-title" id="cav-title">Why the cisterns crackle: cavitation</p>
<div class="cav-modes" role="group" aria-label="Show cavitation in">
<button type="button" data-mode="cistern" aria-pressed="true">Cistern</button>
<button type="button" data-mode="sub" aria-pressed="false">Submarine</button>
</div>
</div>
<svg viewBox="0 0 640 330" aria-hidden="true" focusable="false">
<defs><clipPath id="cav-clip"><path d="M10 30 L220 30 L300 68 L330 68 L560 30 L630 30 L630 140 L560 140 L330 102 L300 102 L220 140 L10 140 Z"/></clipPath></defs>
<path class="water" d="M10 30 L220 30 L300 68 L330 68 L560 30 L630 30 L630 140 L560 140 L330 102 L300 102 L220 140 L10 140 Z"/>
<rect id="cav-zone-pipe" class="zone" x="296" y="30" width="0" height="110" opacity="0" clip-path="url(#cav-clip)"/>
<g id="cav-blade" style="display:none"><path class="blade" d="M340 104 L470 125 L470 146 L340 146 Z"/><g id="cav-pits"></g><text x="404" y="162" text-anchor="middle" class="lbl">BLADE SURFACE</text></g>
<g id="cav-streaks"></g>
<g id="cav-germs"></g>
<g id="cav-bubbles"></g>
<g id="cav-pops"></g>
<path class="wall" d="M10 30 L220 30 L300 68 L330 68 L560 30 L630 30"/>
<path class="wall" d="M10 140 L220 140 L300 102 L330 102 L560 140 L630 140"/>
<text x="16" y="22" class="lbl">INLET</text>
<text x="315" y="122" text-anchor="middle" class="lbl">THROAT</text>
<text x="624" y="22" text-anchor="end" class="lbl">DOWNSTREAM</text>
<line x1="315" y1="54" x2="315" y2="68" stroke="#5f6f84" stroke-width="1.5"/>
<circle class="dial" cx="315" cy="36" r="18"/>
<path d="M302.3 48.7 A18 18 0 0 1 300.6 46.4" stroke="var(--accent,#e3a857)" stroke-width="3" fill="none"/>
<line id="cav-needle" class="needle" x1="315" y1="36" x2="315" y2="22"/>
<text id="cav-gauge" x="340" y="30" class="lbl">··</text>
<text x="340" y="44" class="lbl">AT THE THROAT</text>
<text x="16" y="192" class="lbl">PRESSURE ALONG THE PIPE</text>
<line class="axis" x1="10" y1="286" x2="630" y2="286"/>
<line class="axis" x1="10" y1="196" x2="10" y2="286"/>
<rect id="cav-zone-graph" class="zone" x="296" y="196" width="0" height="90" opacity="0"/>
<path id="cav-curve" class="pcurve" d=""/>
<line id="cav-vap" class="vap" x1="10" x2="630" y1="284" y2="284"/>
<text id="cav-vap-lbl" x="624" y="278" text-anchor="end" class="lbl-a">VAPOR PRESSURE</text>
<text x="16" y="306" class="lbl">COLLAPSE NOISE</text>
<path id="cav-noise" class="noise" d=""/>
</svg>
<div class="cav-ctl">
<label for="cav-speed">Flow speed</label>
<input type="range" id="cav-speed" min="0" max="7" step="0.1" value="2.5" aria-describedby="cav-read">
<output id="cav-out" for="cav-speed"></output>
<button type="button" id="cav-pause" aria-pressed="false">Pause</button>
</div>
<p class="cav-read" id="cav-read" aria-live="polite"></p>
<p class="cav-cap" id="cav-cap"></p>
<p class="cav-note">Illustrative numbers: water at room temperature entering at 120 kPa, through a throat about a third as wide as the pipe. Real physics: water boils at about 2.3 kPa at 20 °C, its vapor pressure. The bubbles crackle; the low roar people feel near Minerva’s cisterns comes from the pumps and the turning ring.</p>
<script>
(() => {
  const root = document.getElementById('cav'); if (!root || root.dataset.ready) return; root.dataset.ready = '1';
  const $ = (id) => root.querySelector('#' + id), NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  // Geometry: walls as functions of x. Pipe 110 high, throat 34 high (x 300 to 330).
  const top = (x) => x <= 220 ? 30 : x <= 300 ? 30 + (x - 220) * 38 / 80 : x <= 330 ? 68 : x <= 560 ? 68 - (x - 330) * 38 / 230 : 30;
  const bot = (x) => 170 - top(x);
  const H = (x) => bot(x) - top(x);
  // Physics (illustrative): continuity and Bernoulli, with some loss in the diffuser. Pressures in kPa.
  const P_IN = 120, P_V = 2.3, RHO = 1000;
  const vAt = (x, v) => v * 110 / H(x);
  function pAt(x, v) {
    const drop = 0.5 * RHO * (vAt(x, v) ** 2 - v * v) / 1000;
    const loss = x > 330 ? 0.5 * RHO * (vAt(330, v) ** 2 - v * v) / 1000 * 0.18 * Math.min(1, (x - 330) / 230) : 0;
    return P_IN - drop - loss;
  }
  const pThroat = (v) => pAt(315, v);
  const onset = Math.sqrt((P_IN - P_V) * 1000 * 2 / (RHO * ((110 / 34) ** 2 - 1)));
  const gy = (p) => 286 - Math.max(0, Math.min(P_IN + 10, p)) / (P_IN + 10) * 90;
  const slider = $('cav-speed'), out = $('cav-out'), read = $('cav-read'), cap = $('cav-cap');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let mode = 'cistern', v = +slider.value, paused = false, visible = true, raf = 0, last = 0, popTimes = [], pits = 0, broken = 0;
  const CAPS = {
    cistern: 'Cistern: here cavitation is the point. Each collapsing bubble is a tiny implosion, with a shock wave, a hot spot and a burst of reactive hydroxyl radicals. Drive the graywater hard enough and the collapses shatter grime and tear microbes apart.',
    sub: 'Submarine: here cavitation is the enemy. The throat stands in for the low-pressure face of a propeller blade. Bubbles that collapse against metal fire tiny jets that pit it over time, and the crackle carries a long way through water, where any listening ear can hear it.',
  };
  function band() {
    const pt = pThroat(v);
    if (pt <= P_V) return 'fast: cavitating';
    if (pt < 30) return 'fast: close to the vapor line';
    if (v < 1.5) return 'slow: no cavitation';
    return 'steady: no cavitation';
  }
  function readouts() {
    const pt = Math.max(P_V, pThroat(v)), cav = pThroat(v) <= P_V;
    slider.setAttribute('aria-valuetext', `Flow ${v.toFixed(1)} meters per second, ${band()}`);
    out.textContent = `${v.toFixed(1)} m/s at the inlet · ${vAt(315, v).toFixed(1)} m/s in the throat`;
    $('cav-gauge').textContent = cav ? `${P_V} kPa · BOILING` : `${pt.toFixed(0)} kPa`;
    $('cav-gauge').setAttribute('class', cav ? 'lbl-a' : 'lbl');
    const ang = (-120 + 240 * Math.max(0, Math.min(1, pt / P_IN))) * Math.PI / 180;
    const n = $('cav-needle'); n.setAttribute('x2', (315 + 14 * Math.sin(ang)).toFixed(1)); n.setAttribute('y2', (36 - 14 * Math.cos(ang)).toFixed(1));
    read.innerHTML = cav
      ? `Throat pressure has hit the vapor line. <b>The water boils cold</b>: bubbles form in the throat and collapse as the pressure recovers downstream.`
      : pThroat(v) < 30 ? `Throat pressure ${pt.toFixed(0)} kPa and falling. Almost at the vapor line, about ${onset.toFixed(1)} m/s.`
      : `Throat pressure ${pt.toFixed(0)} kPa. Faster water, lower pressure, and still well above the vapor line.`;
    // pressure curve and the zone where it would dip below vapor pressure
    let d = '', zx0 = null, zx1 = null;
    for (let x = 10; x <= 630; x += 5) { const p = pAt(x, v); if (p <= P_V) { zx0 ??= x; zx1 = x; } d += (x === 10 ? 'M' : 'L') + x + ' ' + gy(Math.max(P_V, p)).toFixed(1) + ' '; }
    $('cav-curve').setAttribute('d', d);
    const y = gy(P_V); $('cav-vap').setAttribute('y1', y); $('cav-vap').setAttribute('y2', y);
    for (const id of ['cav-zone-pipe', 'cav-zone-graph']) { const z = $(id); z.setAttribute('opacity', zx0 ? 1 : 0); if (zx0) { z.setAttribute('x', zx0 - 4); z.setAttribute('width', zx1 - zx0 + 8); } }
  }
  // Moving parts
  const rnd = ((s) => () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646)(7);
  const streaks = Array.from({ length: 34 }, () => ({ x: 10 + rnd() * 620, f: 0.08 + rnd() * 0.84, el: mk('line', { class: 'streak' }, $('cav-streaks')) }));
  const germs = Array.from({ length: 9 }, () => ({ x: 10 + rnd() * 300, f: 0.12 + rnd() * 0.76, el: mk('g', {}, $('cav-germs')), dead: 0 }));
  germs.forEach((g) => mk('rect', { class: 'germ', x: -4, y: -1.6, width: 8, height: 3.2, rx: 1.6 }, g.el));
  let bubbles = [], pops = [];
  const yOf = (x, f) => top(x) + f * H(x);
  function spawnBubble() {
    const f = rnd() < 0.5 ? 0.06 + rnd() * 0.22 : 0.72 + rnd() * 0.22;
    bubbles.push({ x: 300 + rnd() * 28, f, r: 1 + rnd() * 1.5, el: mk('circle', { class: 'bub' }, $('cav-bubbles')) });
  }
  function collapse(b, now) {
    const x = b.x, y = yOf(b.x, b.f);
    popTimes = popTimes.filter((t) => now - t < 1000);
    if (popTimes.length < 3) { popTimes.push(now); pops.push({ x, y, t: now, el: mk('circle', { class: 'pop', cx: x, cy: y, r: 2 }, $('cav-pops')) }); }
    if (mode === 'sub' && b.f > 0.6 && x > 340 && x < 470 && pits < 60) { pits++; mk('circle', { class: 'pit', cx: x, cy: bot(x) + 2 + rnd() * 3, r: 0.8 + rnd() * 1.4 }, $('cav-pits')); }
    if (mode === 'cistern') germs.forEach((g) => { if (!g.dead && Math.hypot(g.x - x, yOf(g.x, g.f) - y) < 30) { g.dead = now; broken++; } });
    b.el.remove();
  }
  function noise(now, cav) {
    let d = 'M 150 302';
    for (let x = 150; x <= 630; x += 4) {
      const s = Math.sin(x / 9 + now / 400) * 1.2;
      const spike = cav && rnd() < 0.22 ? (rnd() - 0.5) * 22 : 0;
      d += ` L ${x} ${(302 + s + spike).toFixed(1)}`;
    }
    $('cav-noise').setAttribute('d', d); $('cav-noise').setAttribute('class', 'noise' + (cav ? ' hot' : ''));
  }
  function draw(now, dt) {
    const cav = pThroat(v) <= P_V;
    const k = dt / 1000 * 22;
    streaks.forEach((s) => {
      const sp = vAt(s.x, v) * k; s.x += sp; if (s.x > 630) { s.x = 10; s.f = 0.08 + rnd() * 0.84; }
      const y = yOf(s.x, s.f), len = Math.min(22, 2 + vAt(s.x, v) * 1.1);
      s.el.setAttribute('x1', s.x.toFixed(1)); s.el.setAttribute('y1', y.toFixed(1)); s.el.setAttribute('x2', (s.x - len).toFixed(1)); s.el.setAttribute('y2', y.toFixed(1));
      s.el.style.display = v < 0.05 ? 'none' : '';
    });
    germs.forEach((g) => {
      g.el.style.display = mode === 'cistern' ? '' : 'none';
      if (g.dead) { const age = now - g.dead; g.el.setAttribute('opacity', Math.max(0, 1 - age / 600)); if (age > 600) { g.dead = 0; g.x = 10; g.f = 0.12 + rnd() * 0.76; g.el.setAttribute('opacity', 1); } }
      g.x += vAt(g.x, v) * k * 0.9; if (g.x > 630) g.x = 10;
      g.el.setAttribute('transform', `translate(${g.x.toFixed(1)} ${yOf(g.x, g.f).toFixed(1)}) rotate(${(g.x * 3) % 360})`);
    });
    if (cav) { const excess = (onset ? (v - onset) / (7 - onset) : 0); if (rnd() < 0.25 + excess * 0.9) spawnBubble(); }
    bubbles = bubbles.filter((b) => {
      b.x += vAt(b.x, v) * k * 0.85;
      const p = pAt(b.x, v);
      if (p <= P_V) b.r = Math.min(7, b.r + 0.35); else b.r -= 0.12 + (p / P_IN) * 0.9;
      if (b.r <= 0.6 || b.x > 600) { collapse(b, now); return false; }
      b.el.setAttribute('cx', b.x.toFixed(1)); b.el.setAttribute('cy', yOf(b.x, b.f).toFixed(1)); b.el.setAttribute('r', b.r.toFixed(1));
      return true;
    });
    pops = pops.filter((p) => { const a = (now - p.t) / 260; if (a >= 1) { p.el.remove(); return false; } p.el.setAttribute('r', (2 + a * 7).toFixed(1)); p.el.setAttribute('opacity', (1 - a).toFixed(2)); return true; });
    noise(now, cav);
  }
  // Reduced motion, or paused: one still frame that shows the same state.
  function still() {
    cancelAnimationFrame(raf); raf = 0;
    bubbles.forEach((b) => b.el.remove()); bubbles = []; pops.forEach((p) => p.el.remove()); pops = [];
    const cav = pThroat(v) <= P_V;
    streaks.forEach((s, i) => { s.x = 10 + (i * 37) % 620; });
    draw(performance.now(), 0);
    if (cav) {
      const n = 6 + Math.round((v - onset) * 6);
      for (let i = 0; i < n; i++) { const x = 300 + i * (200 / n), f = i % 2 ? 0.15 : 0.82; const p = pAt(x, v); const r = p <= P_V ? 2 + i * 0.6 : Math.max(1, 5 - (x - 330) / 30);
        bubbles.push({ x, f, r, el: mk('circle', { class: 'bub', cx: x, cy: yOf(x, f), r }, $('cav-bubbles')) }); }
      mk('circle', { class: 'pop', cx: 470, cy: yOf(470, 0.82), r: 6, opacity: 0.8 }, $('cav-pops'));
      pops.push({ el: $('cav-pops').lastChild, t: Infinity, x: 0, y: 0 });
      if (mode === 'sub' && pits < 12) for (let i = 0; i < 12; i++) { pits++; const x = 350 + i * 9; mk('circle', { class: 'pit', cx: x, cy: bot(x) + 3, r: 1.1 }, $('cav-pits')); }
    }
  }
  function loop(now) {
    const dt = Math.min(50, now - (last || now)); last = now;
    draw(now, dt); raf = requestAnimationFrame(loop);
  }
  function run() {
    const moving = !reduce.matches && !paused && visible;
    $('cav-pause').hidden = reduce.matches;
    if (moving && !raf) { bubbles.forEach((b) => b.el.remove()); bubbles = []; pops.forEach((p) => p.el.remove()); pops = []; last = 0; raf = requestAnimationFrame(loop); }
    if (!moving) still();
  }
  slider.addEventListener('input', () => { v = +slider.value; readouts(); if (!raf) still(); });
  root.querySelectorAll('[data-mode]').forEach((b) => b.addEventListener('click', () => {
    mode = b.dataset.mode; root.querySelectorAll('[data-mode]').forEach((x) => x.setAttribute('aria-pressed', x === b));
    $('cav-blade').style.display = mode === 'sub' ? '' : 'none'; $('cav-pits').innerHTML = ''; pits = 0;
    cap.textContent = CAPS[mode]; if (!raf) still();
  }));
  $('cav-pause').addEventListener('click', () => { paused = !paused; $('cav-pause').setAttribute('aria-pressed', paused); $('cav-pause').textContent = paused ? 'Play' : 'Pause'; run(); });
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; run(); }).observe(root);
  reduce.addEventListener('change', run);
  const q = new URLSearchParams(location.search);
  if (q.has('flow')) { slider.value = q.get('flow'); v = +slider.value; }
  if (q.get('mode') === 'sub') root.querySelector('[data-mode=sub]').click();
  cap.textContent = CAPS[mode]; readouts(); run();
})();
</script>
</figure>

## Food

A habitat’s food is part of the same loop. See [Daily life](/wiki/daily-life/).


<aside class="science">

## Behind the science

The physics is real. **Hydrodynamic cavitation** happens when water is forced through a constriction fast enough that its pressure drops below its vapor pressure. Bubbles form, then collapse with local shock waves, hot spots and highly reactive hydroxyl radicals. Submarine designers fight cavitation because it is loud and it chews up propellers. Water engineers use it on purpose, as an advanced oxidation process to break down pollutants and kill bacteria.

The collapse itself is a sharp, high crackle; that is the sound sonar operators listen for. The deep sound in the book comes from somewhere else: heavy pumps and a large turning structure can drive infrasound, sound below about 20 hertz, which is known to cause unease and nausea in some people. Put those together and you get a cistern that cleans the water and makes the room sick.

</aside>
