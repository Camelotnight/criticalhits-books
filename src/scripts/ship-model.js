// Cooper's Reach 3D model. Ported from Robert's working model in the vault
// (Series Bible/Locations/The Cooper's Reach — Working Model.html), trimmed to the ship facts the site
// already publishes. Before adding a part or a number, check it against docs/canon-check.md.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const DRUM_R = 8; // 16 m drum (canon)
const PERIOD = 7.2; // s per turn, the bearing chirp (canon)
const OMEGA = (2 * Math.PI) / PERIOD;
const DECK_H = 2.4; // ring deck height (inferred, as in the working model)
const DRUM_W = 5; // drum axial width (inferred)
const D2R = Math.PI / 180;
const LINE = 0x7fd4ff;
const AMBER = 0xe3a857;

/** Site panel id → model parts and camera. */
const FOCUS = {
  hull: { parts: [], cam: 'iso', state: 'coast' },
  pelt: { parts: ['hull'], cam: 'side' },
  torch: { parts: ['torch'], state: 'cruise' },
  rcs: { parts: ['rcs'], action: 'rcs' },
  radiators: { parts: ['ldr'], action: 'ldr' },
  ring: { parts: ['ring'], cam: 'drum', state: 'coast' },
  command: { parts: ['command'] },
  rescue: { parts: ['lance', 'sponson'] },
  caretaker: { parts: ['caretaker'] },
};

export function mountShip({ stage, root, toolbar, reducedMotion }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  } catch {
    return false;
  }
  const canvas = renderer.domElement;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute(
    'aria-label',
    'Three-dimensional model of the Cooper’s Reach. Drag to turn it; use the ship systems list to move between parts.',
  );
  stage.appendChild(canvas);
  const labelLayer = document.createElement('div');
  labelLayer.className = 'model-labels';
  labelLayer.setAttribute('aria-hidden', 'true');
  stage.appendChild(labelLayer);

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0b0f15);
  scene.fog = new THREE.Fog(0x0b0f15, 140, 280);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 600);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = !reducedMotion;
  controls.dampingFactor = 0.08;
  controls.enableZoom = false; // the wheel scrolls the page; views come from the buttons
  controls.enablePan = false;

  scene.add(new THREE.AmbientLight(0x6f8fa8, 0.75));
  const key = new THREE.DirectionalLight(0xdff2ff, 0.9);
  key.position.set(30, 40, 20);
  scene.add(key);
  const rimLight = new THREE.DirectionalLight(0x4aa0d8, 0.5);
  rimLight.position.set(-30, -10, -40);
  scene.add(rimLight);

  const grid = new THREE.GridHelper(160, 32, 0x1d3a52, 0x131f2c);
  grid.position.y = -13;
  scene.add(grid);

  const parts = {}; // id → meshes
  const pickables = [];
  const labels = [];
  const edges = (mesh, color = LINE, op = 0.7) => {
    const e = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry, 20),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: op }),
    );
    mesh.add(e);
    return e;
  };
  const mat = (color, op = 0.6, emissive = 0x000000) =>
    new THREE.MeshPhongMaterial({
      color, transparent: true, opacity: op, emissive, shininess: 20, side: THREE.DoubleSide, depthWrite: op > 0.9,
    });
  const tag = (mesh, id) => {
    mesh.userData.id = id;
    (parts[id] ||= []).push(mesh);
    pickables.push(mesh);
  };
  const label = (obj, text, anchor) => {
    const el = document.createElement('span');
    el.className = 'model-tag';
    el.textContent = text;
    labelLayer.appendChild(el);
    labels.push({ obj, anchor: anchor || new THREE.Vector3(), el });
  };
  const box = (id, sx, sy, sz, x, y, z, color, op = 0.55, parent = scene) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), mat(color, op));
    m.position.set(x, y, z);
    parent.add(m);
    edges(m, LINE, 0.55);
    if (id) tag(m, id);
    return m;
  };

  // ---------- Hull: faceted double wedge, hexagonal sections (z, half-width, half-height) ----------
  const sections = [[37, 1.2, 0.35], [31, 5.2, 3.6], [23, 8.6, 7.2], [13, 9.0, 7.5], [-10, 9.0, 7.5], [-22, 6.2, 5.4], [-33, 3.3, 3.3]];
  const hex = (w, h) => [[w, 0], [0.55 * w, h], [-0.55 * w, h], [-w, 0], [-0.55 * w, -h], [0.55 * w, -h]];
  const hv = [];
  const hi = [];
  sections.forEach(([z, w, h]) => hex(w, h).forEach(([x, y]) => hv.push(x, y, z)));
  for (let i = 0; i < sections.length - 1; i++)
    for (let k = 0; k < 6; k++) {
      const a = i * 6 + k, b = i * 6 + ((k + 1) % 6), c = (i + 1) * 6 + k, d = (i + 1) * 6 + ((k + 1) % 6);
      hi.push(a, c, b, b, c, d);
    }
  const last = (sections.length - 1) * 6;
  for (let k = 1; k < 5; k++) { hi.push(0, k, k + 1); hi.push(last, last + k + 1, last + k); }
  let hullGeo = new THREE.BufferGeometry();
  hullGeo.setAttribute('position', new THREE.Float32BufferAttribute(hv, 3));
  hullGeo.setIndex(hi);
  hullGeo = hullGeo.toNonIndexed();
  hullGeo.computeVertexNormals();
  const hullMat = new THREE.MeshPhongMaterial({
    color: 0x2a4c66, transparent: true, opacity: 0.13, side: THREE.DoubleSide, depthWrite: false, flatShading: true, shininess: 40,
  });
  const hull = new THREE.Mesh(hullGeo, hullMat);
  scene.add(hull);
  const hullEdges = edges(hull, LINE, 0.75);
  hull.userData.id = 'hull';
  parts.hull = [hull];

  // sponsons
  [1, -1].forEach((s) => {
    const sp = box('sponson', 3, 3.6, 16, s * 10.5, 0, 2, 0x2a4c66, 0.35);
    if (s > 0) label(sp, 'Drone sponsons', new THREE.Vector3(0, 2.4, 0));
  });

  // torch and nozzle
  const reactor = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 10, 20), mat(0x6a5a8c, 0.55));
  reactor.rotation.x = Math.PI / 2;
  reactor.position.set(0, 0, -27.5);
  scene.add(reactor); edges(reactor); tag(reactor, 'torch');
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 4.6, 5, 24, 1, true), mat(0x8a7ab0, 0.7));
  nozzle.rotation.x = Math.PI / 2;
  nozzle.position.set(0, 0, -35.2);
  scene.add(nozzle); edges(nozzle); tag(nozzle, 'torch');
  label(nozzle, 'Torch');

  const plumeMat = new THREE.MeshBasicMaterial({ color: 0xc9b8ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const plume = new THREE.Mesh(new THREE.ConeGeometry(4.2, 1, 32, 1, true), plumeMat);
  plume.rotation.x = Math.PI / 2;
  scene.add(plume);
  const plumeCore = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1, 24, 1, true), plumeMat.clone());
  plumeCore.rotation.x = Math.PI / 2;
  scene.add(plumeCore);
  const torchLight = new THREE.PointLight(0xb9a6ff, 0, 60);
  torchLight.position.set(0, 0, -42);
  scene.add(torchLight);

  // plasma lance at the bow
  const lance = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.5, 4, 10), mat(0xcfe8ff, 0.8));
  lance.rotation.x = Math.PI / 2;
  lance.position.set(0, -0.6, 38.5);
  scene.add(lance); edges(lance); tag(lance, 'lance');
  label(lance, 'Plasma lance');

  // RCS on the four hull shoulders (placement inferred in the working model)
  const rcsFlashes = [];
  [[9.2, 0, 13], [-9.2, 0, 13], [9.2, 0, -10], [-9.2, 0, -10]].forEach((p, i) => {
    const b = box('rcs', 1.1, 1.1, 1.1, p[0], p[1], p[2], 0x9fb8c8, 0.8);
    const fl = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0x35f0a0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    fl.position.set(p[0] + Math.sign(p[0]) * 1.4, p[1], p[2]);
    scene.add(fl);
    rcsFlashes.push({ m: fl, t: 0 });
    if (i === 0) label(b, 'RCS');
  });

  // liquid droplet radiators in the aft shadow
  const ldrGroup = new THREE.Group();
  scene.add(ldrGroup);
  const LDR_STOW_X = 5.2, LDR_STOW_Z = -29;
  const ldrCollectors = [];
  let ldrOn = false, ldrDeploy = 0;
  const DROPS = 1400;
  const dropPos = new Float32Array(DROPS * 3);
  const dropSeed = Array.from({ length: DROPS }, (_, i) => ({ side: i % 2 ? 1 : -1, u: Math.random(), v: Math.random() }));
  const dropGeo = new THREE.BufferGeometry();
  dropGeo.setAttribute('position', new THREE.BufferAttribute(dropPos, 3));
  const drops = new THREE.Points(dropGeo, new THREE.PointsMaterial({ color: 0xffb070, size: 0.16, transparent: true, opacity: 0.85 }));
  ldrGroup.add(drops);
  [1, -1].forEach((s) => {
    box('ldr', 0.5, 0.5, 6, s * 7.0, 0, -15, 0xffb070, 0.8, ldrGroup);
    const co = box('ldr', 0.5, 0.5, 6, s * LDR_STOW_X, 0, LDR_STOW_Z, 0xffb070, 0.8, ldrGroup);
    ldrCollectors.push({ m: co, s });
    if (s > 0) label(co, 'Droplet radiators');
  });

  // ---------- Interior ----------
  const cmd = box('command', 9, 3.4, 8, 0, 1.2, 24.5, 0x4c86b0, 0.45);
  label(cmd, 'Command deck', new THREE.Vector3(0, 2.2, 0));
  const scr = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 1.6),
    new THREE.MeshBasicMaterial({ color: LINE, transparent: true, opacity: 0.35, side: THREE.DoubleSide }),
  );
  scr.position.set(0, 0.4, 3.95);
  cmd.add(scr);

  const spine = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 17.5, 16, 1, true), mat(0x9fc6e0, 0.25));
  spine.rotation.x = Math.PI / 2;
  spine.position.set(0, 0.6, 11.75);
  scene.add(spine); edges(spine, LINE, 0.35);
  const aftSpine = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 8, 12, 1, true), mat(0x9fc6e0, 0.22));
  aftSpine.rotation.x = Math.PI / 2;
  aftSpine.position.set(0, 0.6, -7);
  scene.add(aftSpine); edges(aftSpine, LINE, 0.3);

  const caretaker = box('caretaker', 1.3, 1.0, 1.5, 0, -1.3, -6.2, AMBER, 0.9);
  label(caretaker, 'Caretaker');
  const eng = box(null, 8, 4, 9, 0, 0.4, -16.5, 0xc0704a, 0.4);
  label(eng, 'Engineering', new THREE.Vector3(0, 2.6, 0));

  // ---------- The spin ring ----------
  const drumMount = new THREE.Group();
  scene.add(drumMount);
  const drum = new THREE.Group();
  drumMount.add(drum);
  [DRUM_W / 2 + 0.25, -DRUM_W / 2 - 0.25].forEach((z) => {
    const pts = [];
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * (DRUM_R + 0.3), Math.sin(a) * (DRUM_R + 0.3), z));
    }
    drumMount.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x5d8aa6 })));
  });
  // the worn spot on the starboard guide race; the index mark on the drum passes it once a turn
  const wear = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff6b5e }));
  wear.position.set(-(DRUM_R + 0.3), 0, DRUM_W / 2 + 0.25);
  drumMount.add(wear);

  const sector = (r0, r1, a0, a1, depth) => {
    const s = new THREE.Shape();
    s.absarc(0, 0, r1, a0, a1, false);
    s.absarc(0, 0, r0, a1, a0, true);
    const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: Math.max(6, Math.round((a1 - a0) * 18)) });
    g.translate(0, 0, -depth / 2);
    return g;
  };
  // Arc order is the working model's inference; the dossier only puts these three on the ring.
  [
    [0, 110, 0xeaf3ff, 0.6, 'Medbay'],
    [110, 150, 0xe0a560, 0.65, 'Galley'],
    [150, 290, 0x5f8fb8, 0.55, 'Quarters'],
    [290, 360, 0x3a4f60, 0.3, null],
  ].forEach(([a0, a1, col, op, name]) => {
    const m = new THREE.Mesh(sector(DRUM_R - DECK_H, DRUM_R, a0 * D2R, a1 * D2R, DRUM_W), mat(col, op));
    drum.add(m); edges(m, LINE, 0.6); tag(m, 'ring');
    const mid = ((a0 + a1) / 2) * D2R;
    if (name) label(m, name, new THREE.Vector3(Math.cos(mid) * (DRUM_R - 1.2), Math.sin(mid) * (DRUM_R - 1.2), DRUM_W / 2));
  });
  const idx = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.8, 0.25), new THREE.MeshBasicMaterial({ color: 0xff6b5e }));
  idx.position.set(DRUM_R + 0.05, 0, DRUM_W / 2 + 0.25);
  drum.add(idx);
  const hubCyl = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, DRUM_W, 18, 1, true), mat(AMBER, 0.25));
  hubCyl.rotation.x = Math.PI / 2;
  drum.add(hubCyl); tag(hubCyl, 'ring');
  [110, 230, 350].forEach((deg, i) => {
    const a = deg * D2R, len = DRUM_R - DECK_H - 1.3, crew = i === 0;
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(crew ? 0.55 : 0.18, crew ? 0.55 : 0.18, len, 10, 1, crew),
      mat(crew ? AMBER : 0x7fa6c0, crew ? 0.5 : 0.7),
    );
    m.position.set(Math.cos(a) * (1.3 + len / 2), Math.sin(a) * (1.3 + len / 2), crew ? 0.8 : 0);
    m.rotation.z = a - Math.PI / 2;
    drum.add(m);
  });
  const spinArrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(DRUM_R + 1.2, 0, DRUM_W / 2), 2.4, 0x35f0a0, 0.7, 0.45);
  drum.add(spinArrow);
  label(hubCyl, 'Spin ring', new THREE.Vector3(0, DRUM_R + 1.6, 0));

  // gravity arrows: spin floor on the ring, thrust floor during a burn
  const ringArrows = new THREE.Group();
  drum.add(ringArrows);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + 0.2;
    const dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
    ringArrows.add(new THREE.ArrowHelper(dir, dir.clone().multiplyScalar(DRUM_R - DECK_H + 0.2), 1.6, 0xfff07a, 0.5, 0.35));
  }
  const burnArrows = new THREE.Group();
  scene.add(burnArrows);
  [[0, 4.5, 24.5], [0, 3, 12], [0, 3, 0], [0, 4, -16.5], [0, 9.5, 0]].forEach((p) => {
    burnArrows.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, -1), new THREE.Vector3(...p), 3, 0xfff07a, 0.8, 0.5));
  });

  // ---------- State ----------
  // coast: torch cold, ring spinning (spin gravity 0.6 g). cruise / emergency: thrust gravity, ring collapsed and locked.
  const STATES = { coast: 0, cruise: 0.5, emergency: 1.5 };
  let state = 'coast';
  let spinAngle = 0, spinRate = reducedMotion ? 0 : OMEGA, drumScale = 1, plumeLevel = 0;
  const setState = (s) => {
    state = s;
    toolbar?.querySelectorAll('[data-state]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.state === s)));
    const out = toolbar?.querySelector('[data-readout]');
    if (out) {
      out.textContent =
        s === 'coast'
          ? 'Coasting. Torch cold. The ring turns once every 7.2 s: six-tenths of a g on its floor, none on the command deck.'
          : s === 'cruise'
            ? 'Routine cruise burn, 0.2–0.5 g of thrust. The ring collapses and locks.'
            : 'Emergency burn, 1.2–1.5 g and up. The ring collapses and locks.';
    }
  };

  // ---------- Cameras ----------
  const cams = { iso: [[44, 26, 37], [0, -1, -2]], side: [[70, 4, -1], [0, 0, -1]], aft: [[0, 9, -80], [0, 0, 0]], drum: [[24, 10, 20], [0, 0, 0]] };
  let camTween = null;
  let aspectBoost = 1;
  const go = (to, target) => {
    if (reducedMotion) { camera.position.copy(to); controls.target.copy(target); return; }
    camTween = { from: camera.position.clone(), to, tf: controls.target.clone(), tt: target, t: 0 };
  };
  const goCam = (k) => {
    const [p, t] = cams[k];
    const target = new THREE.Vector3(...t);
    go(new THREE.Vector3(...p).sub(target).multiplyScalar(aspectBoost).add(target), target);
    toolbar?.querySelectorAll('[data-cam]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cam === k)));
  };
  const flyToParts = (ids) => {
    const ms = ids.flatMap((id) => parts[id] || []);
    if (!ms.length) return;
    const bx = new THREE.Box3();
    ms.forEach((m) => bx.expandByObject(m));
    const c = bx.getCenter(new THREE.Vector3());
    const r = bx.getSize(new THREE.Vector3()).length() / 2;
    const dir = camera.position.clone().sub(controls.target).normalize();
    go(c.clone().add(dir.multiplyScalar(Math.max(26, Math.min(55, r * 2.6)) * aspectBoost)), c);
  };

  // ---------- Focus ----------
  let focused = new Set();
  const focus = (ids) => {
    const on = (focused = new Set(ids));
    pickables.forEach((m) => {
      if (m.userData.base === undefined) m.userData.base = m.material.opacity;
      const dim = on.size && !on.has(m.userData.id);
      m.material.opacity = m.userData.base * (dim ? 0.25 : 1);
      m.material.emissive?.setHex(on.has(m.userData.id) ? 0x2a4a68 : 0x000000);
    });
    hullEdges.material.color.setHex(on.has('hull') ? AMBER : LINE);
    hullEdges.material.opacity = on.has('hull') ? 1 : 0.75;
  };
  const fireRCS = () => {
    const n = 3 + Math.floor(Math.random() * 3);
    for (let k = 0, dt = 0; k < n; k++) {
      dt += 0.12 + Math.random() * 0.25;
      const i = Math.floor(Math.random() * 4);
      setTimeout(() => { rcsFlashes[i].t = 0.35; }, dt * 1000);
    }
  };
  const select = (siteId) => {
    const f = FOCUS[siteId] || FOCUS.hull;
    focus(f.parts);
    if (f.state) setState(f.state);
    if (f.cam) goCam(f.cam);
    else flyToParts(f.parts);
    if (f.action === 'rcs') fireRCS();
    ldrOn = f.action === 'ldr';
  };

  root.addEventListener('explorer:select', (e) => select(e.detail.target.replace(/^ship-/, '')));
  toolbar?.querySelectorAll('[data-state]').forEach((b) => b.addEventListener('click', () => setState(b.dataset.state)));
  toolbar?.querySelectorAll('[data-cam]').forEach((b) => b.addEventListener('click', () => goCam(b.dataset.cam)));

  // clicking a part selects it in the systems list, which drives everything else
  const SITE_ID = { hull: 'pelt', sponson: 'rescue', lance: 'rescue', torch: 'torch', rcs: 'rcs', ldr: 'radiators', ring: 'ring', command: 'command', caretaker: 'caretaker' };
  const ray = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const pick = (ev) => {
    const r = canvas.getBoundingClientRect();
    mouse.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(pickables.filter((m) => m.visible), false)[0];
    return hit ? SITE_ID[hit.object.userData.id] : null;
  };
  let downAt = null;
  canvas.addEventListener('pointerdown', (e) => (downAt = [e.clientX, e.clientY]));
  canvas.addEventListener('pointerup', (e) => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 5) return;
    const id = pick(e);
    if (id) root.querySelector(`.sys[data-target="ship-${id}"]`)?.click();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!e.buttons) canvas.style.cursor = pick(e) ? 'pointer' : 'grab';
  });

  // ---------- Size ----------
  let w = 1, h = 1;
  const resize = () => {
    w = stage.clientWidth;
    h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const prev = aspectBoost;
    aspectBoost = camera.aspect < 1.2 ? 1.65 / camera.aspect : Math.max(1, 1.3 / camera.aspect);
    // keep the ship framed when the frame changes shape (e.g. the flat profile hands over on a phone)
    if (prev !== aspectBoost) {
      camera.position.sub(controls.target).multiplyScalar(aspectBoost / prev).add(controls.target);
      if (camTween) camTween.to.sub(camTween.tt).multiplyScalar(aspectBoost / prev).add(camTween.tt);
    }
  };
  const [p0, t0] = cams.iso;
  camera.position.set(...p0);
  controls.target.set(...t0);
  new ResizeObserver(resize).observe(stage);
  resize();
  setState('coast');

  // ---------- Loop ----------
  const clock = new THREE.Clock();
  const tmp = new THREE.Vector3();
  let visible = true;
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(stage);

  const frame = () => {
    requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const now = performance.now() / 1000;
    const burnG = STATES[state];
    const ease = (k) => (reducedMotion ? 1 : Math.min(1, dt * k));

    const targetRate = state === 'coast' && !reducedMotion ? OMEGA : 0;
    spinRate += (targetRate - spinRate) * ease(0.9);
    spinAngle += spinRate * dt;
    drum.rotation.z = spinAngle;
    drumScale += ((state === 'coast' ? 1 : 0.88) - drumScale) * ease(1.5);
    drum.scale.set(drumScale, drumScale, 1);
    ringArrows.visible = state === 'coast';
    burnArrows.visible = state !== 'coast';
    burnArrows.children.forEach((a) => a.setLength(1.2 + burnG * 1.3, 0.8, 0.5));

    plumeLevel += (burnG - plumeLevel) * ease(state !== 'coast' ? 2 : 6);
    const flicker = reducedMotion ? 1 : 1 + Math.sin(now * 37) * 0.04 + Math.sin(now * 13) * 0.03;
    const L = 4 + plumeLevel * 14;
    plume.scale.set(1, L * flicker, 1);
    plume.position.set(0, 0, -37.7 - (L * flicker) / 2);
    plume.material.opacity = Math.min(0.5, plumeLevel * 0.35);
    plumeCore.scale.set(1, L * 0.7 * flicker, 1);
    plumeCore.position.set(0, 0, -37.7 - (L * 0.7 * flicker) / 2);
    plumeCore.material.opacity = Math.min(0.9, plumeLevel * 0.7);
    plume.visible = plumeCore.visible = plumeLevel > 0.01;
    torchLight.intensity = plumeLevel * 1.4;

    rcsFlashes.forEach((r) => {
      r.t = Math.max(0, r.t - dt);
      r.m.material.opacity = r.t > 0 ? Math.min(1, r.t * 4) : 0;
      r.m.scale.setScalar(0.6 + r.t * 2);
    });

    ldrDeploy += ((ldrOn ? 1 : 0) - ldrDeploy) * ease(1.6);
    const xC = LDR_STOW_X + (12.5 - LDR_STOW_X) * ldrDeploy;
    const zCol = LDR_STOW_Z + (-33 - LDR_STOW_Z) * ldrDeploy;
    ldrCollectors.forEach((c) => c.m.position.set(c.s * xC, 0, zCol));
    drops.visible = ldrDeploy > 0.03;
    if (drops.visible) {
      for (let i = 0; i < DROPS; i++) {
        const s = dropSeed[i];
        if (!reducedMotion) { s.u += dt * 0.22; if (s.u > 1) s.u -= 1; }
        const zE = -12 - s.v * 6, zC = zCol + 3 - s.v * 6, xE = 7.3, xc = xC - 0.3;
        const u = Math.min(s.u, ldrDeploy);
        dropPos[i * 3] = s.side * (xE + (xc - xE) * u);
        dropPos[i * 3 + 1] = (s.v - 0.5) * 0.3;
        dropPos[i * 3 + 2] = zE + (zC - zE) * u;
      }
      dropGeo.attributes.position.needsUpdate = true;
    }

    if (camTween) {
      camTween.t = Math.min(1, camTween.t + dt * 1.2);
      const e = 1 - Math.pow(1 - camTween.t, 3);
      camera.position.lerpVectors(camTween.from, camTween.to, e);
      controls.target.lerpVectors(camTween.tf, camTween.tt, e);
      if (camTween.t >= 1) camTween = null;
    }
    controls.update();
    renderer.render(scene, camera);

    labels.forEach((l) => {
      tmp.copy(l.anchor);
      l.obj.localToWorld(tmp);
      tmp.project(camera);
      // with a part selected, or on a narrow screen, label only what's selected
      const quiet = focused.size || w < 560;
      if (tmp.z > 1 || (quiet && !focused.has(l.obj.userData.id))) { l.el.style.display = 'none'; return; }
      l.el.style.display = 'block';
      l.el.style.transform = `translate(${((tmp.x + 1) / 2) * w}px, ${((1 - tmp.y) / 2) * h}px) translate(-50%, -120%)`;
    });
  };
  frame();

  const current = root.dataset.selected;
  if (current) select(current.replace(/^ship-/, ''));
  return true;
}
