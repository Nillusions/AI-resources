# Asset Engine

All visual assets — imagery, icons, illustrations — are sourced online at runtime. This project holds no local asset library. This file defines the sources, selection rules, and embedding protocol.

**Toolchain:** all exports are produced with **[pptxgenjs](https://gitbrent.github.io/PptxGenJS/)** (Node.js, globally installed). All embedding snippets and API references below assume pptxgenjs.

---

## 1. Absolute Rules

- Every asset must be **royalty-free for commercial use**.
- Icons must come from **Phosphor**, **Lucide**, or **Google Material Symbols**. No exceptions.
- Illustrations must come from a **single style source** per deck. No mixing styles.
- Images must be **real photography or documentary in feel**. No cliché stock.
- **Never** use AI-generated imagery unless the deck's own topic is AI generation and the choice is deliberate and disclosed.
- **Never** use imagery with visible watermarks, brand logos (unless the deck is about that brand), or copyrighted characters.

---

## 2. Images (Photography)

### 2.1 Sources (in order of preference)

| Source | URL | License | Attribution |
|---|---|---|---|
| Unsplash | https://unsplash.com | Unsplash License (commercial OK) | Not required, appreciated |
| Pexels | https://www.pexels.com | Pexels License (commercial OK) | Not required |
| Pixabay | https://pixabay.com | Pixabay Content License | Not required |
| Burst | https://burst.shopify.com | CC0 / Shopify | Not required |
| StockSnap | https://stocksnap.io | CC0 | Not required |

Prefer Unsplash → Pexels → Pixabay in that order.

### 2.2 Search protocol

1. Derive concept keywords from the slide's message. Not the whole sentence — the underlying idea (e.g., "team collaboration" → "people in a workshop", "sticky notes on wall").
2. Query source (via public API or search page) with concept keywords.
3. Filter by orientation (landscape for horizontal layouts, portrait for vertical).
4. Filter by resolution: **minimum 1920 × 1080** for full-bleed use; 1200 × 800 for inset use.
5. Pick 3-5 candidates; select the one that best supports the message.
6. Download the largest reasonable size (typically 1920-2400px wide).

### 2.3 Selection rules

Prefer:
- Real people doing specific things (not posed stock)
- Environmental / documentary photography
- Natural lighting, imperfect framing
- Textures, materials, close-ups
- Architectural or object photography for abstract concepts

Reject:
- Handshakes in suits
- Groups of diverse professionals smiling at a laptop
- Person pointing at a floating hologram
- Isolated objects on white studio background (unless deck style calls for it)
- Overly saturated stock
- Any image with visible corporate logos or product branding not related to the deck

### 2.4 Treatment consistency

Pick ONE treatment for the deck:
- Full color (default)
- Muted / desaturated (-10 to -20%)
- B&W
- Duotone (using primary + secondary from palette)

Apply the same treatment to every photo in the deck.

### 2.5 Aspect and cropping

- Preserve source aspect ratio. **Never stretch.**
- Crop to fit the layout container. Prefer subject-preserving crops (people's faces, focal object retained).
- Full-bleed on hero slides only.

### 2.6 File hygiene

- Compress to target **< 400 KB** per image before embedding.
- JPEG quality 80-85 for photos; PNG only for images with transparency.
- Keep original dimensions embedded (don't downscale below 1920px for hero use, so it looks crisp on 4K screens).
- Total deck file size target: **< 15 MB**, hard cap 25 MB.

### 2.7 Attribution

Not required for Unsplash / Pexels / Pixabay commercial use. If the deck's style calls for editorial attribution (data journalism, academic), place caption in 9-10pt at bottom-left of image: `Photo: [name] / [source]`.

---

## 3. Icons

### 3.1 Sources

Pick ONE library for the deck. Never mix.

| Library | URL | Style | Weights |
|---|---|---|---|
| Phosphor | https://phosphoricons.com | Geometric, friendly | 6 weights (thin, light, regular, bold, fill, duotone) |
| Lucide | https://lucide.dev | Minimal, consistent line | 1 weight (adjustable stroke) |
| Google Material Symbols | https://fonts.google.com/icons | Systematic, comprehensive | 3 fills (outlined, rounded, sharp) × 3 weights |

Style-to-library guidance:
- Editorial Minimal / Academic / Consulting → Lucide or Phosphor (regular)
- Corporate Modern / Startup Sharp → Lucide or Phosphor (regular)
- Bold Monochrome → Phosphor (bold or fill)
- Tech Gradient / Nordic Minimal → Lucide or Material (outlined)
- Warm Human / Playful Geometric → Phosphor (duotone or fill)
- Data Journalism → Lucide
- Luxury / Dark Elegant → Phosphor (thin) or Lucide

### 3.2 Access

- Phosphor: https://phosphoricons.com — SVG download or `@phosphor-icons` npm; individual icons downloadable as SVG.
- Lucide: https://lucide.dev — SVG download from site; also `lucide` npm.
- Material Symbols: https://fonts.google.com/icons — SVG download from site.

Prefer downloading SVG directly. Embed via pptxgenjs:

```js
slide.addImage({
  data: 'image/svg+xml;base64,' + Buffer.from(svgString).toString('base64'),
  x: 1, y: 1, w: 0.5, h: 0.5   // inches
});
```

**Note the mime prefix has no `data:`** — pptxgenjs v4 expects `'image/svg+xml;base64,...'`, not `'data:image/svg+xml;base64,...'`. Passing the `data:` prefix produces a broken image reference.

For maximum recolorability, edit the SVG's `fill`/`stroke` attributes to the deck's palette hex (without `#`) before base64-encoding. Icons are usually monochrome — a simple string replace works. Some PowerPoint versions render SVG poorly; if fidelity matters, rasterize to PNG at 3× the display size first.

### 3.3 Usage rules

- One weight per deck. If Phosphor Regular is picked, every icon is Regular.
- One color treatment. Usually matches the surrounding text color; accent color for spotlight icons only.
- Same size within a set. If a slide has 4 feature icons, they are the same pt size and same visual weight.
- Minimum size: **20pt**. Prefer 24pt or 32pt for scannability.
- Icons carry meaning. If an icon doesn't reinforce the concept next to it, remove it.
- No decorative icons on cover or section dividers unless deliberately part of the visual style.

---

## 4. Illustrations

Use illustrations only when they add understanding that a photo cannot (abstract concepts, processes, imagined scenarios).

### 4.1 Sources

Pick ONE per deck.

| Source | URL | Style | Notes |
|---|---|---|---|
| unDraw | https://undraw.co | Flat, single-color tintable | Match tint to deck primary color |
| Storyset | https://storyset.com | Multiple styles (Amico, Bro, Cuate, Pana, Rafiki) — pick one | Free with attribution or paid without |
| Blush | https://blush.design | Customizable characters | Some free, some paid |
| Open Peeps | https://www.openpeeps.com | Hand-drawn people | CC0 |
| DrawKit | https://www.drawkit.com | Modern illustration | Free + premium |
| Humaaans | https://www.humaaans.com | Mix-and-match people | Free |

### 4.2 Rules

- One style per deck. If unDraw is chosen, every illustration is unDraw.
- Match illustration tint to deck primary color where the tool allows it (unDraw and Humaaans do).
- Never combine illustrations and stylized photography in the same deck unless the deck theme is playful and the combination is intentional.
- Illustrations must have a purpose on the slide — never as background decoration.

---

## 5. Charts and Data Viz

Charts are built, not sourced. See `design_system.md` §9 for style tokens.

### 5.1 Rebuilding source charts

If the input `.pptx` contains a chart:
- Extract the data values verbatim (preserve every number).
- Discard the source styling entirely.
- Rebuild via pptxgenjs native charts: `slide.addChart(pres.ChartType.bar, data, opts)`. Supported types: `bar`, `line`, `pie`, `doughnut`, `area`, `scatter`, `bubble`, `radar`.
- For layouts pptxgenjs charts can't express (slope, dumbbell, small multiples, custom annotations), build from shapes and text — `addShape`, `addText`, `addImage`.
- Apply deck palette via `chartColors` and per-series `color` options; disable defaults (`showLegend: false` when direct-labeling, `catAxisLineShow: false`, etc.).
- Add a single-sentence takeaway as a callout (not a title). Titles state the topic; callouts state the insight.

### 5.2 pptxgenjs chart style checklist

Every native pptxgenjs chart must have these options set explicitly (pptxgenjs defaults are ugly). Verified against `pptxgenjs@4.0.1` type definitions:

```js
const chartOpts = {
  // Palette — hex WITHOUT '#'
  chartColors: [/* from deck palette, e.g. '0B2545', 'F5A623', '5A6572' */],

  // Legend & title (we handle title as an addText call)
  showLegend: false,
  showTitle: false,

  // Category axis (x for column/line, y for bar)
  catAxisLineShow: true,
  catAxisLineColor: 'C4C7CC',
  catAxisLineSize: 0.5,
  catAxisLabelFontFace: /* deck body font */ 'Inter',
  catAxisLabelFontSize: 11,
  catAxisLabelColor: '333333',

  // Value axis
  valAxisLineShow: false,
  valAxisLabelFontFace: 'Inter',
  valAxisLabelFontSize: 11,
  valAxisLabelColor: '333333',
  valGridLine: { style: 'solid', size: 0.5, color: 'ECEEF1' },

  // Data labels (bar/column)
  showValue: true,
  dataLabelFontFace: 'Inter',
  dataLabelFontSize: 11,
  dataLabelColor: '111111',
  dataLabelPosition: 'outEnd',   // 'b'|'bestFit'|'ctr'|'l'|'r'|'t'|'inEnd'|'outEnd'

  // Bar geometry — bar : gap = ~2 : 1 => gap ~ 50
  barGapWidthPct: 50,

  // Chart area / plot area — remove pptxgenjs default borders
  chartArea: {
    fill:   { color: 'FFFFFF' },
    border: { type: 'none' },       // NOT { pt: 0 } — use type: 'none'
    roundedCorners: false
  },
  plotArea: {
    fill:   { color: 'FFFFFF' },
    border: { type: 'none' }
  }
};

slide.addChart(pres.ChartType.bar, data, { x: 0.5, y: 1.2, w: 8, h: 4.5, ...chartOpts });
```

- `pres.ChartType` values are lowercase: `bar`, `line`, `pie`, `doughnut`, `area`, `scatter`, `bubble`, `radar` (also `bar3d`, `bubble3d` — never use).
- Emphasize a single "story" bar/point by supplying a per-series `chartColors` array where non-story bars share a neutral color and the story bar uses the accent.
- Line charts: pass `lineSize: 2` (points) and set `lineDataSymbol: 'none'` unless the data point emphasis is deliberate.
- Doughnut charts: `holeSize: 60` (percent). Cap segments at 5.

### 5.2 Chart type selection

| Data | Preferred chart |
|---|---|
| Composition (parts of whole) | Donut (max 5 segments), stacked bar |
| Comparison of categories | Horizontal bar |
| Trend over time | Line (max 3 series) |
| Correlation | Scatter |
| Ranked list | Horizontal bar sorted |
| Change year-over-year | Slope chart or dumbbell |
| Distribution | Histogram |
| Geographic | Map (only if geography matters; else bar) |

Avoid pie charts with more than 3 segments (use donut with labels, or horizontal bar).
Avoid 3D anything.
Avoid dual y-axis (splits the reader's attention).

---

## 6. Diagrams / Process Graphics / SmartArt

Never use PowerPoint default SmartArt. Rebuild from primitives.

Common diagram types and their build patterns:

- **Process (linear):** numbered circles connected by 1pt lines with directional arrows at the end.
- **Cycle:** 3-6 nodes on a circle, arrows between, consistent gap.
- **Hierarchy:** tree with consistent horizontal spacing per level; connectors are 1pt right-angle lines.
- **Venn:** circles at 60-70% opacity for overlap visibility.
- **Matrix (2×2):** axes labeled, quadrants labeled, items placed with even margins.
- **Funnel:** trapezoids with proportional widths; labels outside.
- **Swimlane:** rows per actor, columns per phase, activities as pill cards.

Every diagram uses:
- Palette colors only
- Consistent stroke weights
- Consistent corner radii
- Text sized within the type scale

---

## 7. Fonts (as Assets)

### 7.1 Sourcing

All font pairings in `design_system.md` §3.2 are on Google Fonts:
- https://fonts.google.com

Download the specific weights needed for the deck. Do not download the entire family.

### 7.2 Embedding (pptxgenjs)

pptxgenjs does not embed font files. It sets `fontFace` on text runs, which resolves to whatever the viewer's system has. Handle this two ways:

- **Preferred — install Google Fonts on the runtime machine** where pptxgenjs runs, then reference them by name. When the recipient opens the file, PowerPoint substitutes via the fallback chain in `design_system.md` §3.2.
- **When portability matters — pick system-safe fonts.** If the deck must open identically on any Windows/Mac machine, choose pairings from `design_system.md` §3.2 that use fonts already common on both (Inter and Manrope now ship with recent Windows; otherwise fall back to Arial/Calibri and Georgia/Cambria).
- **Optional post-processing** — if true embedding is required, post-process the exported `.pptx` (which is a zip) and inject the TTFs into the `ppt/fonts/` folder + register in `presentation.xml`. Only do this if a deck must render pixel-perfect on unknown machines.

Every text run set via pptxgenjs must specify `fontFace` explicitly (no defaults) and a `fallback` chain via CSS-style comma list when supported by the pptxgenjs version.

### 7.3 Fallbacks

Always define a system-safe fallback in the run properties:
- Inter, Manrope, DM Sans, Space Grotesk, Source Sans, IBM Plex Sans → Calibri, Arial
- Fraunces, Playfair, Merriweather, EB Garamond, IBM Plex Serif → Georgia, Cambria
- JetBrains Mono → Consolas, Courier New

---

## 8. Runtime Asset Workflow

For each deck:

1. **Plan assets** — after slide analysis, list every asset needed: `[slide 3: photo of laboratory; slide 4: icon 'shield' + icon 'clock' + icon 'chart-up'; slide 6: illustration of remote work]`.
2. **Deduplicate** — if two slides need a similar photo, decide whether to use two different images or intentionally reuse.
3. **Batch fetch** — download all assets in parallel where possible.
4. **License verification** — confirm the URL / source license permits commercial use.
5. **Optimize** — compress images, convert SVGs to shape or high-quality PNG, verify sizes.
6. **Cache locally** — write to `output/<deck_id>/assets/` for the run. Delete after export if disk space matters.
7. **Embed via pptxgenjs** (all coordinates in inches):
   - Photo — full-bleed hero cropped to slide:
     ```js
     slide.addImage({
       path: 'output/<deck>/assets/img_xx.jpg',
       x: 0, y: 0, w: 13.333, h: 7.5,
       sizing: { type: 'cover', w: 13.333, h: 7.5 }
     });
     ```
   - Photo — inset with aspect preservation:
     ```js
     slide.addImage({ path: '...', x: 6.5, y: 1, w: 6, h: 4, sizing: { type: 'contain', w: 6, h: 4 } });
     ```
   - Icon SVG:
     ```js
     slide.addImage({
       data: 'image/svg+xml;base64,' + Buffer.from(svgStr).toString('base64'),
       x: 1, y: 1, w: 0.35, h: 0.35
     });
     ```
   - Illustration → same as photo or SVG depending on format.
   - Never omit `w` and `h`. Never omit `sizing` when the container aspect differs from the source — the default is to stretch.
   - Add `altText` on every image for the QA accessibility check.
8. **Verify** — post-embed, confirm no missing assets, no distortion, correct aspect ratio.

---

## 9. Fallbacks When a Source Fails

If a source is unavailable at runtime:

- Image: fall through Unsplash → Pexels → Pixabay → Burst → StockSnap in order.
- Icon: fall through Phosphor → Lucide → Material.
- Illustration: fall through unDraw → Open Peeps → Storyset.

If ALL sources fail for a specific slide's asset:
- Rebuild the slide layout without the asset (typography-only or shape-only).
- Do not ship a deck with a broken image placeholder.
- Do not ship a deck with a "photo goes here" note.

---

## 10. Asset Rejection Signals (fast filters)

Reject a candidate image immediately if:

- Visible watermark or "© photographer name" burn-in.
- Face-forward posed model in obvious studio setting (unless deck style is playful/marketing).
- Contains a brand or logo that isn't the deck's own subject.
- Contains readable text in the image that could be misread as slide content.
- Extreme color cast (heavy orange or blue) unless the deck style embraces it.
- More than 3 people in a "professional group" pose.
- Uses props that scream stock: whiteboards with generic scribbles, pointing at floating charts, holding a hologram.

---

## 11. Attribution and Metadata

Regardless of whether attribution is required, log per deck (for internal traceability):

- Every image URL, source, and photographer
- Every icon library, weight, and specific icon names
- Every illustration source and file

Log location: `output/<deck_id>/assets/manifest.json`. This is not embedded in the delivered pptx; it's a runtime record for audit and reuse.
