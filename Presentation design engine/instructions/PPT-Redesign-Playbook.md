# PPTX Redesign Playbook

A reusable, battle-tested process for redesigning a PowerPoint deck to match a
reference "style image," while **keeping the content the same**, adding
**circle infographics**, and **adding images** where asked. This documents how
these decks were produced (carbon emission, environmental management, weather vs
climate, corporate sustainability, community garden, market ROI, patagonia,
consumer psychology, TikTok virality, smart city, understanding ADU, etc.) so
the same quality is repeatable.

---

## 0. Mental model — what a "redesign" actually is

The request is almost always three things bundled:

1. **Re-skin** — apply a *visual system* (palette, shapes, type, motifs) taken
   from a reference image, to the deck's existing content.
2. **Restructure into infographics** — turn walls of text / bullet lists into
   circle-based visuals (stat circles, rings, chains, radial hubs, process
   flows, donut charts).
3. **Preserve meaning** — every fact, number, name, and source stays. You may
   re-flow, split, or lightly tighten *connective* wording to fit a layout, but
   never drop or alter data.

The single most important habit: **build → render → look → fix → repeat.**
You cannot design this blind. Every deck had 1–3 real defects on the first
render that only a screenshot revealed (overlaps, overflow, a bad icon, an ugly
photo). The render loop is the whole game.

---

## 1. Environment & toolchain (Windows, this project)

Confirm these once at the start of a session. Paths/quirks that mattered here:

| Need | What worked |
|---|---|
| Generate the .pptx | **pptxgenjs** (Node). Installed in the project's local `node_modules`, NOT globally resolvable from the scratchpad. |
| Resolve pptxgenjs/sharp from scratchpad | `NODE_PATH="D:/…/Presentation design engine/node_modules" node gen.js` |
| Rasterize SVG icons / gradients | **sharp** (Node) — same `node_modules`. |
| Crop / duotone / grayscale photos, low-poly bg, hatch textures | **Pillow** via a real Python at `C:\Users\marki\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe` (the `python`/`python3` on PATH are Windows Store stubs — useless). |
| Read the .pptx text | Node script scanning `<a:t>` runs (markitdown/python-pptx not on PATH; a tiny regex dumper is enough). |
| **Render slides to PNG for QA** | **PowerPoint COM automation** via PowerShell (best quality on Windows; LibreOffice/pdftoppm not installed). |
| Validate file opens | `python-pptx` (`Presentation(path)`), from the codex python. |

### The QA render script (reused for every deck) — `render.ps1`
PowerPoint COM exports each slide to PNG at high res. This is the QA workhorse.

```powershell
param([string]$Pptx,[string]$OutDir)
$ErrorActionPreference="Stop"
$Pptx=(Resolve-Path $Pptx).Path
if(Test-Path $OutDir){Remove-Item "$OutDir\*.png" -Force -EA SilentlyContinue}else{New-Item -ItemType Directory $OutDir|Out-Null}
$OutDir=(Resolve-Path $OutDir).Path
$ppt=New-Object -ComObject PowerPoint.Application
try{
  $pres=$ppt.Presentations.Open($Pptx,$true,$false,$false)  # readonly, untitled, no window
  $i=0; foreach($s in $pres.Slides){$i++; $s.Export((Join-Path $OutDir ("slide-{0:D2}.png" -f $i)),"PNG",1600,900)}
  $pres.Close()
}finally{$ppt.Quit();[Runtime.Interopservices.Marshal]::ReleaseComObject($ppt)|Out-Null}
```

Run: `& render.ps1 -Pptx deck.pptx -OutDir qa`, then **Read every `qa/slide-*.png`**.

> Work in a **scratchpad** dir per deck (`scratch/<deck>/`). Unpack the original,
> keep `assets/`, the generator `*.js`, and `qa/` there. Deliver the final file
> to the project's `output/` folder with a clean name.

---

## 2. The repeatable 8-step workflow

For every deck I did exactly this:

1. **Locate & unpack.** Find the input `.pptx` (filenames are often misspelled —
   glob loosely, e.g. `*nviron*`, `*shycology*`). `unzip` it into `unpacked/`.
2. **Extract content.** Dump every slide's text runs + which media each slide
   references (from `slideN.xml.rels`). This is your source of truth for
   "content stays the same."
3. **Inventory media.** List `ppt/media`, note real photos (large jpg/png) vs
   icons/svg (small). View the promising ones with the image reader.
4. **Decode the reference style.** From the attached style image, extract:
   palette (hex), background treatment, signature shapes/motifs, how photos are
   masked, type treatment, light/dark rhythm. Write it down as a palette + a
   list of "signature elements" before touching code.
5. **Plan slides.** Map each content section to a layout. Decide light/dark per
   slide, which slides become circle infographics, where photos go. Pick the
   font (Arial for reliability — see §7).
6. **Generate assets.** Gradients/shapes/icons via sharp+SVG; photos (crop /
   grayscale / duotone) via Pillow; draw dot grids/rings/blobs in vector where
   cheap. Verify a couple of assets by eye before building.
7. **Write the generator.** One `gen.js` with a small set of **helpers** (bg,
   circle, ring, iconCircle, statCircle, photoCircle, card, pill, kicker, title,
   para, pageNum) then per-slide code. Set `pres.defineLayout` to 13.333×7.5.
8. **QA loop & deliver.** Render → inspect all slides → fix overlaps/overflow/
   ugly assets → re-render only if needed → validate opens → copy to `output/`.

---

## 3. Extracting content (the "don't change content" contract)

Node dumper (no external deps):

```js
const fs=require('fs');
for(const f of fs.readdirSync('unpacked/ppt/slides').filter(x=>/^slide\d+\.xml$/.test(x))
      .sort((a,b)=>parseInt(a.match(/\d+/))-parseInt(b.match(/\d+/)))){
  const x=fs.readFileSync('unpacked/ppt/slides/'+f,'utf8');
  const runs=[...x.matchAll(/<a:t>([\s\S]*?)<\/a:t>/g)].map(m=>m[1]
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'"));
  console.log(`\n== ${f} ==\n`+runs.join(' | '));
}
```
Also map images: `grep -o 'media/[^"]*' unpacked/ppt/slides/_rels/slideN.xml.rels`.

**Fidelity rules I followed:**
- Keep every number, currency, %, date, proper noun, and URL. When a figure is
  long for a circle (e.g. `$1,200–4,000`), **shrink the font**, don't abbreviate
  it to `$1.2–4K` (that's changing content — a user caught this once).
- Splitting a dense one-pager across several slides is fine — but if the user
  says "make it like the source file / only N slides," **match the source's
  slide count** (they pushed back on a 7-slide expansion of a 1-slide source).
- Sources/references are content — keep them (as a slide, or a small footer if
  forced to one slide).
- Light connective rewrites to fit a card ("Combined with…","— ") are OK; state
  that you did it and offer verbatim if they want.

---

## 4. Decoding a reference style into a spec

Look at the style image and answer, concretely, before coding:

- **Palette** → 3–6 hex values. Name a *dominant* color (60–70% weight), 1–2
  supports, 1 accent. Examples produced:
  - Charcoal + lime (`1E1F1C`/`C4F542`) — energy/carbon
  - Yellow + black + white + grey — brochure
  - CLUSSEO orange (`F26722`) + white; kids CLUSSEO too
  - Teal→green gradient (`0FA98F`→`57B846`) — sustainability
  - Cyan-teal→green + gold dots — "Wished" pitch
  - Magenta/crimson + navy (`E0176B`/`22263B`) — Patagonia
  - Purple→magenta gradient (`4A2597`→`D63B96`) — OBETRIX
  - Orange→purple gradient (`F15A24`→`5E2A9E`) — ad agency
  - Electric indigo (`4E22E6`) + white + near-black — CIRCLO
  - Multicolor red/yellow/green/navy blobs — "Son Light"
- **Background** → flat white? flat near-black? full-bleed gradient image?
  low-poly texture? light/dark *rhythm* (dark title+closing, light content is a
  safe default; or full gradient throughout for a premium feel).
- **Signature motif** → pick the ONE thing to repeat: gradient discs, hatch
  circles, dot grids, floating translucent circles, organic blobs, arch photo
  masks, offset-gradient photo circles, big flat circles. Repeat it everywhere.
- **Photo treatment** → full color / grayscale / duotone-to-brand / inside
  circle / inside arch / with a % pie badge.
- **Type** → one accent word per title colored; eyebrow/kicker in caps; big
  stat numbers 24–66pt.

If unsure whether to match the reference's exact colors or the *deck's* brand:
keep the deck cohesive — **adopt the reference's structure/motifs but harmonize
colors** (e.g. the Circle-Process infographics were rebuilt in each deck's own
palette, not the template's multicolor).

---

## 5. Asset generation recipes (the reusable arsenal)

All assets go to `scratch/<deck>/assets/`. Generate, then **eyeball 2–3** before
building the deck.

### 5a. Icons (sharp + hand-authored SVG) — the most reused asset
- 240×240 viewBox, `fill="none" stroke=<color> stroke-width=16 round caps`.
- Render **white** and **brand-color** variants (`icw_*`, `ic_*`) so the same
  icon works on colored circles (white) and on light bg (brand).
- Keep a growing library: check, search, chart, target, dollar, globe, shield,
  users, heart, leaf, recycle, briefcase, rocket, bulb, cart, envelope, cursor,
  play, bookmark, bolt, clock, calendar, home, building, car, cloud, sensor,
  wifi, chip, etc. **Verify hand-drawn ones** (recycle, handshake, bike, route)
  — they're the ones that render wrong. Swap a bad icon rather than ship it (a
  weak "handshake" → "shield"; a coral texture photo → a real photo).

```js
const sharp=require("sharp");
const wrap=(inner,c)=>`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'><g fill='none' stroke='${c}' stroke-width='16' stroke-linecap='round' stroke-linejoin='round'>${inner}</g></svg>`;
await sharp(Buffer.from(wrap(PATH,"#ffffff"))).resize(300,300).png().toFile("assets/icw_x.png");
```
Note: never put two `stroke-width` attrs on one node (sharp's SVG parser errors).

### 5b. Gradients & gradient shapes (sharp + SVG `linearGradient`)
Full-bleed backgrounds, gradient discs (behind photos / as stat circles),
corner blobs, arches. sharp renders SVG gradients perfectly.
```js
const G="<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#4A2597'/><stop offset='1' stop-color='#D63B96'/></linearGradient></defs>";
// disc: <circle cx r fill='url(#g)'/>   arch: <path d='M0 300 a300 300 0 0 1 600 0 V760 H0 Z' fill='url(#g)'/>
```
pptxgenjs can't gradient-fill a shape — so **bake gradients into PNGs** and
place them, OR use a full-bleed gradient image as the slide `background`.

### 5c. Textures (Pillow)
- **Diagonal-hatch circle:** draw 45° lines, mask to a circle, transparent
  outside. Grey + dark variants. (yellow brochure)
- **Low-poly background:** jittered grid of points, split each cell into 2
  triangles, fill each with a slightly varied near-white grey. (orange "Company")
- **Curved arrow:** PIL `arc` + a polygon arrowhead, supersampled ×4 then
  downscaled for smooth edges. (client feedback wanted curved arrows)

### 5d. Photos (Pillow) — crop + treat, then mask in pptx
- **Square center-crop** (or anchor left/right/top) → `rounding:true` in pptx
  makes it a circle and crops the dark corners of any pre-masked source.
- **Grayscale** (`ImageOps.grayscale` + `autocontrast`) for mono brochure looks.
- **Duotone to brand** (`ImageOps.colorize(im, black=DARK, mid=MID, white=LITE)`)
  to unify photos with a palette (purple OBETRIX, green sustainability).
- To place inside a **pptx circle:** `addImage({path, x, y, w, h, rounding:true})`
  (source must be square). For an **arch**, pre-render the arch gradient and set
  text over it, or mask the photo into an arch in Pillow.

### 5e. Vector-drawn (no asset) — cheapest, do in the generator
Dot grids (loops of tiny ellipses), concentric rings (ellipse no-fill), big flat
circles, translucent "bokeh" circles (`fill white, transparency:82`), pills
(`roundRect rectRadius:h/2`), connector lines/bars, chevrons.

---

## 6. The generator: pptxgenjs patterns & gotchas

### Skeleton
```js
const pptx=require("pptxgenjs"); const pres=new pptx();
pres.defineLayout({name:"W",width:13.333,height:7.5}); pres.layout="W";
pres.theme={headFontFace:"Arial",bodyFontFace:"Arial"};
const W=13.333,H=7.5,MX=0.6;
// helpers: cAt (centered ellipse), ring, iconCircle, statCircle, photoCircle,
//          card, pill, kicker, title(parts w/ accent color), para, pageNum, bg
// then per-slide IIFE blocks { const s=pres.addSlide(); ... }
pres.writeFile({fileName:OUT}).then(()=>console.log("WROTE"));
```

### Helpers that paid off everywhere
- `cAt(s,cx,cy,d,opts)` — **center-based** ellipse. Thinking in centers makes
  circle layouts sane.
- `statCircle(cx,cy,d,big,label,filled,dark,labelW)` — filled=brand circle+white
  number; else white/tinted circle + brand number; label below. **`labelW` must
  be ≤ the circle spacing** or captions overlap (a recurring bug — make it a
  parameter, don't hardcode 2.7).
- `iconCircle`, `photoCircle`, `title([{t,c}])` (per-word accent color), `kicker`
  (colored dot + tracked caps), `pageNum`.

### Gotchas that bit me (bake these into muscle memory)
- **Hex colors: no `#`, 6 digits only.** `"F0F0F0"`. `"#…"` or 8-digit alpha
  corrupts the file. For translucency use `transparency:0-100` on fills,
  `opacity` on shadows, and a `transparency` on image = fade.
- **`pres.layout` before `addSlide`.** Wide is 13.333×7.5. Off-canvas coords are
  written but invisible.
- **pptxgenjs mutates the options object** — build a fresh `shadow`/opts object
  per call (a `sh()` factory function).
- **`rectRadius` only on `roundRect`.**
- **Charts:** use native `addChart` (doughnut/bar/area). Set `chartColors`,
  `showValue`, hide the frame (`valGridLine`, `catGridLine:'none'`,
  axis label colors). Doughnut = your on-brand "circle" chart; overlay a big %
  text on top. On a **dark/gradient bg**, give doughnut slices a `dataBorder`
  matching the bg so segments separate.
- **Bullets:** `bullet:{characterCode:"2022",indent:12}` per paragraph; never a
  literal "•". Space paragraphs with `paraSpaceAfter`.
- **Text boxes have inner padding** — set `margin:0` when aligning text to a
  circle/line/edge.
- **Rich runs** (`[{text,options}]`) for per-word color / bold labels
  ("Issue: …", one accent word in a title).
- **NODE_PATH** must point at the `node_modules` that has pptxgenjs/sharp.

### Circle-infographic recipes (what "use circle elements" means)
- **Stat circles** — a row of circles, the emphasis one filled brand color,
  others white/tinted; big number inside, caption below (mind `labelW`).
- **Donut / pie** — native doughnut for weight/share distributions; % overlay.
- **Ring row / chain** — N circles across, connector bar behind, numbered dots,
  labels below (Circle-Process "style 3").
- **Radial hub + satellites** — a center hub circle + N around it with dashed
  connectors. **The top/bottom node needs its label placed ABOVE/BELOW, sides
  get side labels** — the classic failure is the top node's text landing on the
  circle. Lower the hub and shrink the ring so the top node clears the title.
- **Serpentine** — a sine-wave ribbon PNG (sharp) with circles at the zero
  crossings; labels alternate above/below. Great for a "process/best practices."
- **Figure-8 / infinity** — discrete dashed curved arrows (sharp) between nodes
  that cross in the center; numbering follows the loop, not left-to-right.
- **Offset gradient photo circle** — photo circle + a gradient disc offset behind
  it (a colored crescent peeks) + a dashed ring + scattered dots ("Wished").
- **Pie-on-photo stat** — photo circle + a brand circle badge with a % (CIRCLO
  "38%/15%").

---

## 7. Typography rule that saved QA

Fonts you write are rendered by the *viewer's* PowerPoint, but your QA renders
via PowerPoint/whatever is installed — substitutes can change widths and lie
about fit. **Default to Arial** for body and anything where fit matters (it
renders true-to-width and ships with Office). Use it throughout; offer to swap
in Poppins/Montserrat/etc. *if the user has it licensed*. This alone removed a
whole class of "looks fine here, overflows there" bugs.

---

## 8. Handling images (incl. "add at least 4 images")

Priority order for sourcing:
1. **Photos already in the deck** — often the best (topical, licensed). The
   TikTok deck already had the FYP mockup + brand images (Duolingo owl, Chipotle
   guac, Ryanair plane) — used as-is in circles.
2. **Photos from sibling decks in this project** — reused a carbon-emission
   skyscraper for "Barcelona," garden/family photos for an ADU/home deck,
   business-meeting photos for "consult a professional." Extract with `unzip
   '<deck>.pptx' 'ppt/media/*'`.
3. **Generated abstract art** — duotone the deck's own soft gradients, or make
   low-poly/gradient backgrounds. (No stock-photo download available offline.)

Rules:
- **Match the subject to the slide.** A random abstract texture on a homeowner
  slide reads as a mistake — swap it. Pick the *most on-topic* crop.
- **Treat photos to the palette** when the source colors clash (duotone), keep
  full color when they already match (blue IoT skyline on a blue deck; brand
  logos).
- **Circular / arch masks** are the on-style way to place them.
- To hit "≥4 images," count *distinct placements*; corner/header accent circles
  (bleeding slightly off-edge) are legitimate and don't disrupt dense slides.
- **Never fabricate or impersonate.** Using a brand's own logo/label in an
  *analysis* deck is fine; don't invent fake records.

---

## 9. QA — what to look for (in priority order)

Render, then scan each PNG fresh (you see what you *expect* right after coding,
so look adversarially):

1. **Text overflow / clipping** at a box or slide edge — most common defect.
2. **Overlaps** — text over shapes, labels over circles, decoration over titles
   (a corner blob/bars sitting on the eyebrow/title was a repeat offender — put
   decoration on the *opposite* corner from the title).
3. **Caption collisions** between adjacent stat circles (fix `labelW < spacing`).
4. **Radial top-node** label on its circle (re-place / lower the ring).
5. **Ugly/irrelevant assets** — a mis-rendered hand-drawn icon, an off-topic or
   abstract-texture photo, a duplicate element (I once drew the same text twice;
   once added two page numbers).
6. **Insufficient margins** (<0.5"), uneven gaps, low-contrast text.

Fix in the generator (never hand-edit packed XML), re-render, confirm. Then
`python-pptx` open-check and copy to `output/`.

---

## 10. Decision heuristics (the judgment calls)

- **Slide count:** expand a dense one-pager into a readable multi-slide deck by
  default — *unless* the user signals "like the source / N slides," then match.
- **Light vs dark:** sandwich (dark title/closing, light content) unless the
  reference commits to full gradient/dark throughout.
- **How many circle infographics:** convert the slides that are inherently
  process/among/distribution (steps, factors, weights, comparisons); leave
  genuinely tabular data as clean tables (styled), and text-heavy case studies
  as cards. Don't force every slide into a ring.
- **When the user points at an infographic template "you can copy":** rebuild
  those layouts *natively, aligned to the slide grid, in the deck's palette* —
  don't paste the template's placeholder-filled slides (keeps one cohesive
  system).
- **Vary layouts** (client feedback was "everything looks the same / too many
  boxes"): alternate photo side, alternate bg, mix rings/chains/hubs/timelines,
  and swap some card grids for image-led or radial layouts.
- **Ask vs proceed:** for reversible design choices with an obvious default,
  proceed and mention it; only ask when the answer changes the deliverable
  (e.g. slide count intent, specific brand colors/fonts they own).
- **Always end with**: a short summary of what changed, what was preserved, any
  transparency notes (font is Arial; photos treated/sourced; minor rewrites),
  and one concrete offer to adjust.

---

## 11. Reusable snippets index

- `render.ps1` (PowerPoint COM → PNGs) — §1
- content dumper — §3
- icon rasterizer (sharp) — §5a
- gradient/disc/arch generator (sharp) — §5b
- hatch / low-poly / curved-arrow (Pillow) — §5c
- photo crop / grayscale / duotone (Pillow) — §5d
- pptxgenjs helper set + circle recipes — §6

---

## 12. One-line checklist to run each time

```
[ ] unpack + dump text + map media
[ ] view real photos; note which slides they suit
[ ] write palette + signature-motif spec from the reference image
[ ] plan slides (light/dark, which become circle infographics, photo spots)
[ ] generate & eyeball assets (icons white+brand, gradients, treated photos)
[ ] write gen.js with helpers (Arial, 13.333x7.5, margin:0, fresh shadow objs)
[ ] render via PowerPoint COM; READ every slide PNG
[ ] fix overflow/overlap/ugly-asset/caption-overlap/top-node; re-render
[ ] python-pptx open-check; copy to output/ with a clean name
[ ] reply: what changed, what's preserved, transparency notes, one offer
```

**Golden rule:** the difference between "fine" and "excellent" was always the
render-and-look loop plus ruthless content fidelity. Everything else is reusable
plumbing.
