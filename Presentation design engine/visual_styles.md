# Visual Styles

A bank of visual directions. Pick **exactly ONE** per deck. Every slide in the deck inherits from that style.

Do not blend two styles in a single deck. Do not switch styles mid-deck. Rotate styles across decks to prevent the workload from looking like it came from one template.

Each style below is a preset — a starting point. The Deck Recipe (see `CLAUDE.md`) rolls each axis independently: style is one axis, font pairing is another, palette shift is another, icon library is another. Two decks in the same style must still differ in fonts, palette, icons, and radius.

Every style lists **2–3 compatible font pairings** — the Recipe picks one per deck.

Color codes are illustrative starting points. Adapt to deck topic (e.g., Corporate Modern for healthcare may lean navy + teal; for fintech may lean navy + gold). The *structure* of the style stays; exact hex codes shift per deck. Verify contrast (see `qa_engine.md` §3).

---

## Style Selection Process

1. Read the topic, audience, and tone determined in Step 1 of the workflow.
2. Match to one style below. Use the "Best for" line as guidance.
3. Commit. Every design choice on every slide now inherits from that style.
4. Log the style used for this deck.
5. On the next deck, do not repeat the last-used style. Rotate.

If two styles seem to fit, pick the one used less recently.

---

## V1. Editorial Minimal

- **Mood:** Quiet, considered, high-end, deliberate.
- **Palette starting point:** Near-black `#111214`, off-white `#F7F5F0`, muted accent (options: muted red `#B03A2E`, forest `#2E5D3A`, deep teal `#1F4E5F`, ochre `#B5892C`, aubergine `#5A2A3D`). Roll a different accent per deck.
- **Compatible font pairings** (roll one):
  - Fraunces (display) + Inter (body)
  - EB Garamond (display) + Source Sans (body)
  - Playfair Display (display) + Manrope (body)
- **Weights:** 400, 600. Occasional 700 for callouts.
- **Whitespace:** 50-60% of slide.
- **Imagery:** Documentary-feel photography, natural light, muted saturation.
- **Icons:** Lucide (regular) or Phosphor (thin/regular). Never bold or duotone.
- **Accents:** Hairline (0.5pt) rules, tiny-caps micro-labels (10pt +8% tracking).
- **Corner radius:** 0 or 4.
- **Elevation:** None or minimal.
- **Best for:** Strategy, thought leadership, executive briefings, magazine-style decks.

---

## V2. Bold Monochrome

- **Mood:** Confident, direct, impossible to ignore.
- **Palette starting point:** One dominant color (roll one: deep blue `#0B2545`, oxblood `#6B1D14`, near-black `#111`, dark forest `#1B3A2F`, indigo `#312E81`, burnt orange `#9A3412`), white `#FFFFFF`, one small accent (bright orange `#F5A623`, citrine `#F4E04D`, or ice blue `#93C5FD`).
- **Compatible font pairings** (roll one):
  - Space Grotesk (display bold) + Inter (body)
  - Archivo Black (display) + Manrope (body)
  - Inter Extra-Bold (display) + Inter (body)
- **Weights:** 400, 700 (or 800).
- **Whitespace:** 30-40%.
- **Imagery:** High-contrast B&W or duotone using the deck's primary + accent.
- **Icons:** Phosphor Bold or Fill, matching primary color or reversed.
- **Accents:** Large blocks of color, occasional full-bleed color slides.
- **Corner radius:** 0 or 4.
- **Elevation:** None.
- **Best for:** Brand launches, manifestos, keynote openers, campaign decks.

---

## V3. Corporate Modern

- **Mood:** Trustworthy, current, clean, professional-but-not-boring.
- **Palette starting point:** Roll primary from `#0B2545` navy, `#134E4A` teal, `#1E3A8A` blue, `#3F3D56` slate, or `#1E40AF` royal. White `#FFFFFF` + warm accent (soft gold `#F5A623`, coral `#FF6B6B`, amber `#F59E0B`, or coral-red `#F87171`). Surface: light gray `#F4F6F8`.
- **Compatible font pairings** (roll one):
  - Inter + Inter (weights only)
  - Manrope + Manrope
  - IBM Plex Sans + IBM Plex Sans
  - DM Sans + DM Sans
- **Weights:** 400, 600, 700.
- **Whitespace:** 40-50%.
- **Imagery:** Real workplace photography, natural moments, not staged.
- **Icons:** Lucide or Phosphor Regular.
- **Accents:** Subtle gradients OK on cover only, rounded corners.
- **Corner radius:** 4, 8, or 12.
- **Elevation:** Level 1 for cards on light backgrounds.
- **Best for:** SaaS pitches, board decks, investor updates, quarterly reviews.

---

## V4. Data Journalism

- **Mood:** Rigorous, transparent, insight-driven, credible.
- **Palette starting point:** Cream `#F4EDDE` or off-white `#FBF8F1` + editorial accent (roll: red `#C1272D`, mustard `#B58900`, teal `#2A9D8F`, or violet `#5D3FD3`) + navy `#0F2A44` or charcoal `#1A1A1A`.
- **Compatible font pairings** (roll one):
  - IBM Plex Serif + IBM Plex Sans
  - Source Serif + Source Sans
  - EB Garamond + Inter
- **Weights:** 400, 600, 700.
- **Whitespace:** 30-40%.
- **Imagery:** Charts as heroes; photography sparse and only when the data has a human subject.
- **Icons:** Lucide, thin or regular.
- **Accents:** Annotation callouts on charts, marked-up labels, footnote-style citations.
- **Corner radius:** 0 (sharp for editorial credibility).
- **Elevation:** None.
- **Best for:** Research reports, market analyses, policy briefs, analytics decks.

---

## V5. Warm Human

- **Mood:** Approachable, humane, story-driven, warm.
- **Palette starting point:** Warm off-white `#FAF6F0` + primary earth tone (roll: terracotta `#C36B4A`, ochre `#D69E48`, rust `#B54F35`, or peach `#EAB397`) + secondary (forest `#2E5D3A`, olive `#78814B`, dusty blue `#7DA0B8`) + soft accent (coral `#F4A261`, or dusty pink `#E5A9B4`).
- **Compatible font pairings** (roll one):
  - DM Serif Display + DM Sans
  - Fraunces + Manrope
  - Playfair Display + Source Sans
- **Weights:** 400, 500, 700.
- **Whitespace:** 40-50%.
- **Imagery:** Portrait-heavy, real people, natural light, warm tones.
- **Icons:** Phosphor Regular or Duotone.
- **Accents:** Occasional hand-drawn underlines, arcs, or organic shapes.
- **Corner radius:** 12, 16, or 24 (soft, humane).
- **Elevation:** Level 1 on cards.
- **Best for:** HR, education, nonprofit, healthcare, DEI, wellness.

---

## V6. Tech Gradient

- **Mood:** Forward, energetic, product-focused, developer-friendly.
- **Palette starting point:** Dark background (roll: `#0E1116`, `#0A0E1A`, `#111827`, `#0F172A`) + neon accent pair (roll: electric blue `#6EE7F9` → lavender `#A78BFA`; cyan `#22D3EE` → magenta `#EC4899`; lime `#A3E635` → violet `#8B5CF6`) + white text.
- **Compatible font pairings** (roll one):
  - Space Grotesk + Inter (with JetBrains Mono accents)
  - Inter + Inter (with JetBrains Mono accents)
  - Manrope + Manrope (with JetBrains Mono accents)
- **Weights:** 400, 600, 700.
- **Whitespace:** 30-40%.
- **Imagery:** Product UI screenshots, abstract 3D, subtle photography.
- **Icons:** Lucide or Material (outlined).
- **Accents:** Soft glow gradients (used sparingly on cover and section dividers), thin neon rules.
- **Corner radius:** 8 or 12.
- **Elevation:** Level 2 for elevated product cards; glow instead of shadow.
- **Best for:** Product launches, AI/tech briefings, developer conferences, dev-tool decks.

---

## V7. Nordic Minimal

- **Mood:** Calm, precise, quietly premium, restrained.
- **Palette starting point:** Cool grays (`#F5F5F5` surface, `#E5E5E5` divider) + off-white `#FAFAFA` + muted accent (roll: sage `#8FA98F`, dusty blue `#7A96B0`, blush `#D6BAB4`, taupe `#A79A8C`, or pale ochre `#C4A87C`) + charcoal text `#2A2A2A`.
- **Compatible font pairings** (roll one):
  - Manrope + Manrope
  - IBM Plex Sans + IBM Plex Sans
  - Inter + Inter
  - Fraunces (display) + Manrope (body) — for a subtle serif accent
- **Weights:** 400, 500, 700.
- **Whitespace:** 50-60%.
- **Imagery:** Architectural, restrained, lots of negative space, minimal color.
- **Icons:** Lucide, thin stroke, or Phosphor Thin.
- **Accents:** Subtle geometric shapes, thin rules, generous margins.
- **Corner radius:** 0 or 4.
- **Elevation:** None or Level 1.
- **Best for:** Design studios, architecture, wellness, premium consumer, quiet-luxury products.

---

## V8. Consulting Classic

- **Mood:** Authoritative, structured, comprehensive, exhaustive.
- **Palette starting point:** Primary (roll: navy `#0B2545`, deep green `#0F3B2E`, oxblood `#6B1D14`, or slate `#2C3E50`) + gray `#5A6572` + white + accent (roll: red `#C1272D`, mustard `#B58900`, or teal `#2A9D8F`).
- **Compatible font pairings** (roll one):
  - Merriweather + Source Sans Pro
  - IBM Plex Serif + IBM Plex Sans
  - EB Garamond + Source Sans Pro
- **Weights:** 400, 600, 700.
- **Whitespace:** 30%. Density is a feature.
- **Imagery:** Minimal — diagrams, matrices, and frameworks preferred over photography.
- **Icons:** Lucide, regular.
- **Accents:** Rules, framed boxes, matrix structures, footer citations.
- **Corner radius:** 0.
- **Elevation:** None.
- **Best for:** Management consulting, McKinsey/BCG/Bain-style decks, strategy frameworks, board packs.

---

## V9. Playful Geometric

- **Mood:** Energetic, optimistic, distinct, memorable.
- **Palette starting point:** Roll one of these coherent sets, or generate a new 4-5 color palette in a similar spirit:
  - Warm quartet: mustard `#E9C46A`, coral `#E76F51`, teal `#2A9D8F`, purple `#8E44AD`, cream `#F4EDDE`
  - Berry: raspberry `#D6336C`, peach `#FF8A5B`, blueberry `#4C6EF5`, cream `#FFF7E6`
  - Retro: burnt orange `#E76F51`, olive `#8A9A5B`, teal `#468C98`, mustard `#F2CC8F`
  - Playful cool: teal `#26547C`, coral `#EF476F`, yellow `#FFD166`, mint `#06D6A0`
- **Compatible font pairings** (roll one):
  - Space Grotesk 700 + DM Sans
  - Archivo Black + Nunito
  - Space Grotesk + Manrope
- **Weights:** 400, 700.
- **Whitespace:** 30-40%.
- **Imagery:** Geometric illustrations, patterns, occasional bold photography with color overlays.
- **Icons:** Phosphor Duotone or Fill.
- **Accents:** Shapes used as content containers (colored blobs, arcs, half-circles).
- **Corner radius:** 12 or 24 (soft, playful).
- **Elevation:** Level 1-2.
- **Best for:** Creative agencies, marketing decks, startup culture decks, campaign concepts.

---

## V10. Dark Elegant

- **Mood:** Premium, cinematic, quiet luxury, evening-formal.
- **Palette starting point:** Deep near-black (roll: `#0A0A0A`, `#111114`, dark burgundy `#2A0F14`, or midnight `#0A0F1F`) + warm off-white `#F5EEE0` + metallic accent (roll: gold `#C9A96B`, copper `#B87333`, champagne `#DFCEA1`, or bronze `#8C6A3D`).
- **Compatible font pairings** (roll one):
  - Playfair Display + Inter
  - Playfair Display + Manrope
  - Fraunces + Inter
  - EB Garamond + Manrope
- **Weights:** 400, 700.
- **Whitespace:** 50%.
- **Imagery:** Cinematic photography, low-key lighting, moody.
- **Icons:** Phosphor Thin or Lucide (light stroke).
- **Accents:** Thin gold rules, gilded numerals, small ornamental marks.
- **Corner radius:** 0 (classic) or 4.
- **Elevation:** None; use soft glows on dark surfaces if needed.
- **Best for:** Luxury brands, private wealth, hospitality, premium services, fine dining.

---

## V11. Startup Sharp

- **Mood:** Momentum, ambition, focused, no-fluff.
- **Palette starting point:** White `#FFFFFF` + single vivid brand (roll one: electric blue `#2563EB`, hot pink `#EC4899`, emerald `#10B981`, violet `#7C3AED`, coral `#F43F5E`, orange `#F97316`, amber `#F59E0B`) + charcoal text `#111`.
- **Compatible font pairings** (roll one):
  - Inter + Inter
  - Manrope + Manrope
  - Space Grotesk + Inter
  - DM Sans + DM Sans
- **Weights:** 400, 600, 700.
- **Whitespace:** 40%.
- **Imagery:** Product screens, real customers, no fluff, occasional headshots.
- **Icons:** Lucide or Phosphor Regular.
- **Accents:** Bold rules (2pt), big numbers, single-color emphasis.
- **Corner radius:** 4, 8, or 12.
- **Elevation:** Level 1 for cards, Level 2 for product mocks.
- **Best for:** Pitch decks (seed to Series B), YC-style, investor updates, startup all-hands.

---

## V12. Academic / Whitepaper

- **Mood:** Measured, referenced, expert, considered.
- **Palette starting point:** Cream `#F5F0E1` or ivory `#FDFAF3` + dark ink `#1A1A1A` + restrained accent (roll: deep green `#2C5F2D`, muted red `#8B2E2E`, navy `#0F2A44`, or aubergine `#553F5C`).
- **Compatible font pairings** (roll one):
  - EB Garamond + Source Sans Pro
  - Source Serif + Source Sans
  - IBM Plex Serif + IBM Plex Sans
- **Weights:** 400, 700.
- **Whitespace:** 40%.
- **Imagery:** Minimal; favor diagrams, charts, tables, illustrated frameworks.
- **Icons:** Lucide, thin.
- **Accents:** Footnote-style citations, thin rules between sections, small caps for section labels.
- **Corner radius:** 0.
- **Elevation:** None.
- **Best for:** Research summaries, policy briefs, academic decks, whitepapers, technical reports.

---

## Anti-Patterns (never do)

- Blend two visual styles in one deck.
- Change the palette mid-deck.
- Change the type pairing mid-deck.
- Use the PowerPoint default blue theme or any default template.
- Use rainbow gradients (unless the deck's topic is literally rainbows).
- Use Comic Sans. Ever.
- Use Papyrus. Ever.
- Use clip art.
- Use reflective 3D bevels, glossy buttons, or Word Art.
- Use drop shadows on text.
- Mix Phosphor + Lucide + Material icons within a deck.

---

## Rotation Guidance (multi-deck workload)

The Deck Recipe (in `CLAUDE.md`) rolls every axis independently. Two decks with the same style must still differ in fonts, palette, icons, and radius.

Guidelines:

- Do not use the same style twice in a row. Exclude the last 3 styles used.
- Do not use the same font pairing twice in a row. Exclude the last 2 pairings used.
- Do not use the same icon library on consecutive decks.
- Do not use the same illustration source on consecutive decks.
- Do not use the same primary accent hue on consecutive decks (rotate hue by ≥30°).
- If a client or topic strongly matches one style (e.g., consulting → V8), that's fine — but shift the palette accent and font pairing so the deck reads fresh.

The rotation log lives at `output/rotation_log.md`. Every export appends one row. Before rolling a new Recipe, read the last several rows and exclude the choices above.

---

## Choosing a Style from Content

Rough guidance to help matching:

| Content clue | Suggested styles |
|---|---|
| Investor pitch, growth startup | V11, V3, V2 |
| Board of directors, corporate report | V3, V8, V4 |
| Research, market data, policy | V4, V12, V1 |
| Consulting framework | V8, V1 |
| Product launch, feature announcement | V6, V11, V2 |
| Thought leadership essay | V1, V10, V12 |
| Marketing / campaign / creative brief | V9, V2, V11 |
| Nonprofit, healthcare, education | V5, V7, V12 |
| Luxury, hospitality, premium consumer | V10, V1, V7 |
| Culture deck, all-hands, internal comms | V5, V9, V11 |
| Design agency portfolio or process | V7, V1, V9 |
| Technical / engineering / AI | V6, V4, V2 |

If nothing fits perfectly, default to V3 (Corporate Modern) — it's the most adaptable — but only if you haven't used it in the last three decks.
