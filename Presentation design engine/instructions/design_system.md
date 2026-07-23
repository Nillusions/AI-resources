# Design System

Concrete tokens the design engine draws from. These are invariant — they apply to every deck. What changes per deck is the *style* pulled from `references/visual_styles.md`; what stays constant is the *system* below.

---

## 1. Slide Dimensions

- Default: **16:9 widescreen** — 13.333" × 7.5" (33.87 cm × 19.05 cm / 12192000 × 6858000 EMU).
- Only switch to 4:3 if the input deck is 4:3 and the user asks to preserve aspect ratio.
- Safe area: **0.4" margin** on all sides. No primary content may cross into this margin.
- Bleed: full-bleed elements (hero images, color blocks) run edge-to-edge, ignoring safe margin.

---

## 2. Grid

- Primary grid: **12 columns**, 24 px gutter, side margins 40 px equivalent.
- Alternative grids per style (pick one, keep for the whole deck):
  - **6-column asymmetric** — editorial layouts
  - **8-column narrow** — text-heavy decks
  - **Broken grid** — for hero moments only (not the default)
- Every element snaps to grid. Optical alignment allowed only for typography (hanging punctuation, italic slant).

---

## 3. Typography

### 3.1 Type scale (pt)

| Role | Range | Typical |
|---|---|---|
| Display (cover title) | 60 – 96 | 72 |
| H1 (slide title) | 32 – 44 | 36 |
| H2 (section head) | 22 – 28 | 24 |
| H3 (subhead) | 18 – 22 | 20 |
| Body | 14 – 18 | 16 |
| Caption / label | 10 – 12 | 11 |
| Footer / page # | 9 – 10 | 10 |

- **Never below 10pt.** Never above 96pt.
- Line height: **1.15** for display and H1, **1.3** for H2/H3, **1.4** for body, **1.2** for captions.
- Letter spacing: 0 by default; -0.5% to -1% for large display; +5% to +10% (tracked) for ALL CAPS labels.

### 3.2 Font pairings

Pick ONE pairing per deck based on the visual style chosen. All fonts listed are free (Google Fonts or system-safe).

| Pairing | Display | Body | Feel |
|---|---|---|---|
| Editorial | Fraunces | Inter | Considered, high-end |
| Modern | Inter | Inter | Clean, corporate |
| Bold | Space Grotesk | Inter | Confident, momentum |
| Classic | Playfair Display | Source Sans Pro | Elegant, traditional |
| Humanist | DM Serif Display | DM Sans | Warm, approachable |
| Tech | Space Grotesk | JetBrains Mono (accents) + Inter (body) | Product, developer |
| Data | IBM Plex Serif | IBM Plex Sans | Rigorous, editorial |
| Nordic | Manrope | Manrope | Calm, precise |
| Consulting | Merriweather | Source Sans Pro | Authoritative |
| Luxury | Playfair Display | Manrope | Premium, cinematic |
| Academic | EB Garamond | Source Sans Pro | Measured, referenced |

Fallbacks required in the pptx (embed or reference): Inter → Arial; Fraunces / Playfair / EB Garamond → Georgia; Source Sans / DM Sans / Manrope → Calibri.

### 3.3 Weights

- Max **3 weights** across the entire deck.
- Typical set: Regular 400, Semibold 600, Bold 700.
- Or: Regular 400, Medium 500, Bold 700.
- Never mix more than 3.
- **Italic** is allowed for quotes and titles of works only — not for emphasis.
- **Underline** is never used except on hyperlinks.
- **ALL CAPS** is allowed for micro labels only (max 20pt, +5–10% tracking).

### 3.4 Text alignment

- Body: left-aligned. Never justified (creates rivers).
- Centered text: only for cover, quote, and closing slides.
- Right-aligned: only for numeric columns in tables.

---

## 4. Color System

### 4.1 Palette structure (per deck)

Every deck has exactly this palette shape:

| Role | Count | Purpose | Ink share |
|---|---|---|---|
| Primary | 1 | Dominant theme color | 30-50% |
| Secondary | 1 | Support / mid-emphasis | 15-25% |
| Accent | 1 | Highlight / spotlight | 5-15% |
| Neutral dark | 1 | Body text on light | — |
| Neutral light | 1 | Background on light | — |
| Surface | 1 | Secondary background / card fill | — |

Total: **6 colors max**. No rogue colors. Charts derive from primary + secondary + accent, tinted/shaded if more series needed.

### 4.2 Color rules

- Contrast: **body text ≥ 4.5:1**, large text (≥ 24pt or ≥ 18pt bold) ≥ 3:1. Verify before export.
- Never place text on busy image without an overlay (min 40% opacity dark scrim, or solid panel).
- Accent color is for emphasis only — do not spread it across a slide.
- Backgrounds: prefer surface / neutral-light. Full-color backgrounds only on cover, section dividers, and rare hero moments.

### 4.3 Palette derivation per deck

If the input has brand hints (logo, existing brand colors in the source): honor them.
Otherwise: derive palette from the visual style picked in `references/visual_styles.md`.

Example primary picks by style:
- Editorial Minimal → deep near-black (#111) + off-white (#F7F5F0)
- Corporate Modern → navy (#0B2545) + white + warm accent (#F5A623)
- Data Journalism → cream (#F4EDDE) + editorial red (#C1272D) + navy (#0F2A44)
- Tech Gradient → charcoal (#0E1116) + neon (#6EE7F9 to #A78BFA)

Each visual style in `visual_styles.md` recommends a palette starting point; adapt to deck topic.

---

## 5. Spacing Scale

Use these values only. Multiples of 4.

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

- Element-to-element: 24 or 32
- Section-to-section: 48 or 64
- Card interior padding: 24 or 32
- Related items (icon + label): 8 or 12
- Never use 15, 27, 33, or any non-scale value.

---

## 6. Corner Radii

Choose **one radius token per deck**; use everywhere.

`0, 4, 8, 12, 16, 24`

- 0 = sharp, editorial, classic consulting
- 4-8 = modern default
- 12-16 = soft, humane, consumer
- 24 = playful, marketing

Never mix radii within a deck.

---

## 7. Elevation / Shadow

Use sparingly. Never on text.

| Level | Use | Value (approx.) |
|---|---|---|
| 0 | Flat surfaces | none |
| 1 | Cards on light bg | 0 2px 4px rgba(0,0,0,0.06) |
| 2 | Elevated cards | 0 4px 12px rgba(0,0,0,0.08) |
| 3 | Modal / highlight | 0 8px 24px rgba(0,0,0,0.12) |

For dark backgrounds, use subtle glow (light-colored, low opacity) instead of shadow.

Editorial and consulting styles typically use no elevation. Startup and product styles may use levels 1-2.

---

## 8. Line & Stroke

- Rules and dividers: **0.5pt** or **1pt** only.
- Chart axes: **1pt**, mid-gray (30-40% ink).
- Chart grid lines: **0.5pt**, light gray (10-15% ink), or omitted.
- Icon strokes: 1.5pt – 2pt (Lucide/Phosphor defaults are fine; keep the same weight across the deck).
- Never use dashed lines except for annotation callouts.

---

## 9. Charts — Style Tokens

- Bars/columns: solid fill from palette; no gradients, no 3D, no shadows.
- Bar width : gap = 2 : 1.
- Corner radius: match deck radius token (0 for editorial, 4 for modern, etc.).
- Data labels: on-bar or on-end, 11pt, never floating disconnected.
- Legend: prefer direct labeling. If a legend is unavoidable, place it top-right, 10pt.
- Value axis: start at 0 unless narrative requires otherwise (then annotate the break).
- Emphasis: use accent color on the single "story" bar/point; keep others in neutral.
- Line charts: max 3 series; 2pt stroke; end-of-line labels instead of legend.
- Donut/pie: max 5 segments; label directly.

---

## 10. Tables — Style Tokens

- Row height: min 32pt for body rows, 40pt for header.
- Column padding: 12pt horizontal.
- Header: uppercase micro-label (11pt, +5% tracking) OR sentence case bold — pick one for the deck.
- Row banding: allowed only if it improves scanability; use surface color, not primary.
- Numeric columns: right-aligned, tabular figures.
- Text columns: left-aligned.
- Emphasis: use weight (Bold) or accent color for key values, not both.
- Dividers: 0.5pt between rows if no banding; no vertical rules unless dense data table.

---

## 11. Icon Tokens

- Size: 20pt, 24pt, 28pt, 32pt, 40pt, 48pt (pick tier per role; keep tier constant).
- Weight: one weight per deck (Phosphor: `regular` or `bold`; Lucide: default; Material: `Rounded`, `Sharp`, or `Outlined` — pick one).
- Color: matches text color at that hierarchy level. Accent color only for spotlight icons.
- Never colorize icons in gradients.
- Icons appear inline with text at the same height as the cap height.

---

## 12. Image Treatment Tokens

- Corner radius: match deck radius token, or 0 for full-bleed hero images.
- Overlay for text-on-image: 40-60% dark scrim, or solid inset panel.
- Filter: never add heavy filters. Subtle desaturation (-10 to -20% saturation) is allowed for tonal cohesion.
- Duotone: allowed as a deliberate deck-wide treatment (must apply to all photos in deck if used).
- Aspect: preserve source aspect. Crop, never stretch.

---

## 13. Hierarchy Ink Budget

Each slide has an "ink budget" — the amount of visual weight you spend.

- **1 primary focal point** — full ink (largest, boldest, most saturated).
- **1-2 secondary points** — half ink.
- **Supporting content** — quarter ink (small, regular weight, neutral color).

Never let three elements compete for primary attention.

---

## 14. Motion (For Export)

- No slide transitions unless explicitly requested. Default = None.
- No object animations unless requested. Default = None.
- Rationale: exported decks may be printed, embedded in emails, or opened in Google Slides — animation should not carry meaning.

---

## 15. Global Constraints

- Never use PowerPoint default templates or default color themes.
- Never use Comic Sans, Papyrus, or clip art.
- Never use rainbow gradients unless the deck topic is literally rainbows.
- Never use "PowerPoint 2010 blue" default palette.
- Never use bevels, reflections, glows, or 3D effects.
- Never nest more than 3 levels of hierarchy on a single slide.
