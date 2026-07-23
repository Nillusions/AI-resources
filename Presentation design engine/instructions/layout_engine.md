# Layout Engine

How to compose a slide. The design system (`design_system.md`) provides tokens; this file provides the rules for arranging them. Layout *patterns* to pick from live in `references/layout_patterns.md`.

---

## 1. Slide Anatomy

Every content slide has three functional zones. Zones are conceptual, not required in every layout — but every element on a slide belongs to one.

- **Header zone** — slide title, breadcrumb, section label. Top ~15% of slide.
- **Body zone** — main content. Middle ~70%.
- **Footer zone** — page number, brand mark, source citation. Bottom ~10%.

Zone positions can be inverted (title bottom, content top) as a deliberate style choice — but the choice must be consistent across the deck.

---

## 2. Safe Area

- Outer safe margin: **0.4"** on all sides.
- No primary text or content-bearing element crosses into this margin.
- Full-bleed elements (hero images, color blocks) ignore safe margin — that's the point.
- Page numbers and brand marks may sit within the outer 0.4"–0.6" band.

---

## 3. Grid Discipline

- Default grid: 12 columns, 24px gutter (see `design_system.md`).
- Every element's left/right edge aligns to a column edge.
- Every element's top/bottom aligns to a baseline (8px increments).
- Optical alignment allowed only for typography (hanging quotes, italic overhang, small-cap descender adjustment).
- **Never nudge by eye.** If it doesn't fit the grid, resize or reflow.

---

## 4. Focal Point Rule (mandatory)

**Every slide must have exactly one primary focal point.**

Determine the focal point *before* laying out the slide by asking: "If the audience remembers only one thing from this slide, what is it?"

- The focal point receives the most visual weight (size, contrast, position, isolation).
- Everything else supports it.
- If two things compete, pick one and demote the other.

Common focal points by slide role:

| Role | Focal point |
|---|---|
| Cover | Title (or hero image with title inset) |
| Section divider | Section number + name |
| Content | The one key sentence or image |
| Stat | The number itself |
| Chart | The insight (annotated) — not the chart in general |
| Quote | The quote itself |
| Comparison | The differentiator |
| Timeline | The current or most important moment |
| Closing | The call to action or the gratitude |

---

## 5. Reading Order

Default flow: **left-to-right, top-to-bottom** (Z-pattern for sparse layouts, F-pattern for text-dense).

- Break the default only when deliberate:
  - Large stat at center = center-out reading
  - Hero image top-half + text bottom-half = top-down
- If reading order is ambiguous, adjust size, color, or position until it isn't.
- Numbering (01, 02, 03) forces order and is fine to use.

---

## 6. Whitespace

- Target: **40-60% of slide area is empty** (surface color or background).
- Editorial and luxury styles skew toward 60%.
- Consulting and data-dense styles skew toward 30-40%.
- Whitespace is a positive element — do not fill it because it exists.
- Group related items with 8-12pt spacing; separate unrelated items with 32-48pt.

---

## 7. Composition Principles

### Rule of thirds
Place focal points on the intersections of thirds, not dead center (unless centered composition is the style).

### Asymmetric balance
Preferred over symmetric. Balance a heavy left element with a small, high-contrast right element rather than mirroring.

### Optical center
The optical center of a slide is ~5% above the geometric center. Text centered by geometry looks too low; nudge up.

### Proximity
Related items sit close (≤ 12pt apart). Unrelated items sit far (≥ 32pt). Never let two unrelated things touch.

### Alignment
All elements share alignment axes. If you can draw a vertical or horizontal line through 2+ element edges, they must actually share that line.

### Repetition
Repeated elements (list items, cards, columns) must be identical in structure. Card 1 and Card 3 must have the same padding, image aspect, type sizes.

### Contrast
Contrast is the engine of hierarchy. Small vs. large. Light vs. dark. Sparse vs. dense. Sans vs. serif. Deploy deliberately.

---

## 8. Hierarchy Signals

Ranked from strongest to weakest. Use at most **3 hierarchy levels** on any one slide.

1. **Size** — biggest thing wins.
2. **Weight** — bold vs. regular.
3. **Color contrast** — dark ink vs. neutral ink.
4. **Position** — top-left / center commands attention.
5. **Isolation (whitespace)** — a lone element in space is loud.
6. **Case & tracking** — ALL CAPS tracked labels signal micro-hierarchy.
7. **Accent color** — reserved for spotlighting.

Do not stack all seven signals on one element. Pick 2-3 to make it the focal point.

---

## 9. Element Sizing Guidelines

Fractions of slide area (16:9 = 96 sq in).

| Element | Suggested share |
|---|---|
| Hero image (full-bleed) | 100% (edge-to-edge) |
| Hero image (inset) | 50-70% |
| Body text column | 40-60% of slide width |
| Stat callout number | 40-60% of vertical height |
| Chart | 60-75% |
| Card in 2×2 grid | ~40% × 40% |
| Icon | 20-48pt |
| Title | 8-15% vertical height |

---

## 10. Density Limits

Per slide, upper caps:

- **Bullets:** max 6 (prefer 3-5). Above 6, split slide or reflow as prose.
- **Body words:** ~40 words soft cap for content slides. Cover/quote slides can be less.
- **Charts:** max 1 per slide.
- **Tables:** max 1 per slide (unless comparing two tiny 2×3 tables).
- **Icons:** if used, either 1 hero icon OR a set (3-6) with parallel structure.
- **Images:** 1 hero, or a set (2-4) with equal weight. Never 5+ images in a grid unless it's a "brand grid" cover.

If content genuinely exceeds a cap: **split into more slides**. Adding slides is allowed; removing content is not.

---

## 11. Consistent Chrome (across slides)

These must be identical on every content slide of a deck:

- Title position and size
- Body max-width
- Page number position and style
- Brand mark (if any) — position, size, color
- Section divider treatment
- Margins

The cover, section dividers, and closing slides may deviate; content slides may not.

---

## 12. Layout Pattern Selection

For each slide:

1. Identify slide role (cover / agenda / section / content / stat / chart / process / quote / comparison / closing).
2. Consult `references/layout_patterns.md`.
3. Pick a pattern that fits the role AND the content weight.
4. Log the pattern used (in-memory for the deck) so you don't repeat it for the same role.
5. Apply the style tokens from `design_system.md`.

### Variation rules within a deck
- If a deck has 3 content slides, use at least 2 different content patterns.
- If a deck has 2 stat slides, use different stat patterns.
- The cover, section dividers, and closing are one-offs — variety within one deck's covers isn't needed (there's only one cover).

### Variation rules across decks
- Keep a rotation log across the run of decks.
- Don't reuse the same visual style twice in a row.
- Don't reuse the same *cover pattern* three decks in a row.

---

## 13. Text Placement Rules

- Never place text over the busy part of an image without an overlay.
- Never place text within 24pt of an image edge — either overlap intentionally with contrast, or set clear separation.
- Callouts (large pull-quotes, stats) sit isolated with ≥ 48pt of whitespace on the sides that face the slide edge.
- Body text blocks max width: ~65 characters per line (readability optimum).

---

## 14. Layout Failure Modes to Avoid

- **Center-everything syndrome** — every element centered horizontally with no visual anchor.
- **Bullet-list default** — reflex bulleting when the content isn't a list.
- **Full-slide walls of text** — split, chart, or diagram instead.
- **Random floating elements** — nothing anchored to grid or nearby element.
- **Corner clutter** — logos, page numbers, and dates all crammed into one corner.
- **Chart + irrelevant image** — decorative image next to a chart adds noise.
- **Icon parade** — 6 icons in a row with nothing distinguishing them; if the icons don't add meaning, remove them.

---

## 15. When Content Doesn't Fit

Priority order:

1. Reduce redundancy in *visual* elements (drop decoration).
2. Rebalance sizes (title smaller, body smaller — but not below type-scale minimums).
3. Change layout pattern (a two-column can hold more than single-column).
4. **Split the content across two slides.**
5. If still doesn't fit, flag for human review.

Do **not**:
- Delete content.
- Shrink text below 10pt.
- Remove margins.
- Overflow the safe area.
