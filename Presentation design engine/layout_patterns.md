# Layout Patterns

A bank of named layout patterns the layout engine picks from. Patterns are grouped by slide role. Each pattern has a code (e.g., `C1`, `L3`) that can be logged so the same pattern isn't reused for the same role within a deck.

Rules of use:

- Pick a pattern per slide based on role and content weight.
- Within a deck, do not repeat the exact same pattern twice for the same role (e.g., two content slides must use different `L*` patterns).
- Across decks, rotate liberally.
- Apply the deck's chosen visual style (from `visual_styles.md`) to whichever pattern is picked.
- All measurements are proportional; adjust to fit the 16:9 canvas and the safe area.

---

## Cover Patterns

### C1. Full-bleed hero + corner title
- Image: full slide, dark overlay (40-50%)
- Title: bottom-left, display size, light color
- Subtitle: below title, H2 size, accent or muted
- Small mark (date, deck ID): top-left or top-right, caption size
- **Use for:** decks with a strong visual anchor (person, product, place).

### C2. Split cover (60 / 40)
- Left 60%: solid color or subtle texture; title stacked; subtitle below
- Right 40%: full-bleed image
- **Use for:** balanced tone, portrait-oriented imagery.

### C3. Editorial magazine
- Title: massive, top-left, spanning multiple lines
- Small paragraph or subtitle: bottom-right
- Hairline rule: divides upper and lower zones
- **Use for:** editorial, thought leadership, high-end.

### C4. Minimal type-only
- Title: centered or top-left, generous whitespace (60%+)
- Subtitle: below, muted
- Small brand mark: bottom-center or bottom-left
- No image
- **Use for:** confident, quiet, luxury or Nordic feel.

### C5. Overlaid geometry
- Background: brand color with layered geometric shapes (circles, arcs, blocks) partially bleeding off canvas
- Title: over shapes, high contrast
- **Use for:** modern, playful, or tech-forward decks.

### C6. Split monochrome band
- Top 30% or 40%: solid brand color; title reversed on top
- Bottom 60%: white/neutral; subtitle + author + date
- Optional thin accent rule between
- **Use for:** consulting, corporate reports.

### C7. Off-set typography
- Title anchored to the right edge, right-aligned
- Small caption on the left
- Optional narrow vertical rule between
- **Use for:** editorial, magazine feel with asymmetry.

### C8. Dark cinematic
- Dark background (near-black)
- Small accent element (a horizontal line, a duotone image inset)
- Title in warm cream or gold
- Subtitle muted
- **Use for:** luxury, hospitality, cinematic launch.

---

## Agenda Patterns

### A1. Numbered vertical list
- Numbers 01–0X in large display type, accent color
- Section titles to the right of each number, H2 size
- Optional one-line description under each title
- **Use for:** 3-6 agenda items with room for detail.

### A2. Two-column grid
- Title top-left
- 3 items left column, 3 items right column
- Icon + title + one-line description per item
- **Use for:** 6 items, feature-density.

### A3. Horizontal timeline
- Dots on a line
- Section titles above or below dots, alternating
- **Use for:** sequential agendas.

### A4. Card stack
- 3-5 cards vertically stacked
- Each card: number, title, brief
- **Use for:** longer, richer descriptions per item.

### A5. Contents index
- Left: small "Contents" or "01 → 06" label
- Right: numbered list of section titles
- Ample whitespace between rows
- **Use for:** editorial or academic decks.

### A6. Two-tier grid
- Section titles in large type
- Sub-items in a lighter row underneath
- Numbers small, at top-left of each section
- **Use for:** decks with agenda + subsections visible.

---

## Section Divider Patterns

### S1. Massive number + title
- `01` in huge display type (200pt+)
- Section name below in H1
- Optional short description in body
- **Use for:** default modern divider.

### S2. Full-bleed color break
- Solid brand color background
- Small "Section 03" label top-left in micro
- Section title centered in large display type
- **Use for:** confident, momentum-driven decks.

### S3. Split image + label
- Left 50%: full-bleed image
- Right 50%: section label + title stacked
- **Use for:** decks with strong photography.

### S4. Word-mark overlay
- Section name in extra-large outline or thin type
- Small support paragraph inside or below
- **Use for:** editorial or magazine feel.

### S5. Rule + label
- Long thin horizontal rule near center
- Section number and title anchored to the rule
- Otherwise blank
- **Use for:** Nordic, minimal, quiet transitions.

### S6. Overlay type on dark
- Dark full-bleed background
- Large section title in bright accent
- Subtitle muted below
- **Use for:** dramatic transitions, keynote pacing.

---

## Content Layout Patterns (general)

### L1. Single column, one focal
- Title top
- Single hero paragraph, callout, or statement centered
- Vast whitespace
- **Use for:** slides with one important sentence.

### L2. Two-column (50 / 50)
- Title spans full width
- Left column: text
- Right column: image, chart, or diagram
- **Use for:** classic balanced content.

### L3. Two-column asymmetric (60 / 40)
- Title spans full width
- Left 60%: main content (text or chart)
- Right 40%: sidebar (stats, callout, small image)
- **Use for:** primary + supporting relationship.

### L4. Three-column
- Title top
- 3 equal columns, each with icon + heading + body
- **Use for:** three features, three principles, three phases.

### L5. Grid (2 × 2)
- Title top-left
- Four cards arranged 2 × 2
- Consistent card structure
- **Use for:** four items with equal weight.

### L6. Grid (2 × 3 or 3 × 2)
- Six cards or tiles in 2 × 3 or 3 × 2 layout
- **Use for:** six items with equal weight.

### L7. Editorial image + inset text
- Full-bleed image behind
- Inset text panel (white or dark card) with title + short paragraph
- Small caption bottom-left
- **Use for:** narrative content, human-centered stories.

### L8. Hierarchy stack
- Large statement top (H1 or Display)
- Supporting paragraph middle (H2/body)
- Detail row bottom (body/caption)
- **Use for:** cascading emphasis.

### L9. Highlight callout
- Large stat, phrase, or number centered
- Small supporting context below
- Minimal surrounding elements
- **Use for:** the "one memorable line" slide.

### L10. Left-anchored text + right-anchored image
- Title + body in left half
- Image in right half, aligned to right edge
- **Use for:** classic corporate content.

### L11. Full-bleed image + bottom text bar
- Image fills top 70%
- Text panel at bottom 30% with title + brief
- **Use for:** cinematic content slides.

### L12. Wrapped text around image
- Small square or circular image top-left
- Text flows around it
- **Use for:** portrait + quote or bio + intro.

### L13. Stat row
- Title top
- Row of 3-4 stats at center
- Optional context paragraph below
- **Use for:** dashboard-like at-a-glance data.

### L14. Vertical rule composition
- Thin vertical rule dividing the slide
- Content on either side aligned to the rule
- **Use for:** editorial or classic composition.

### L15. Diagonal composition
- Elements arranged along a subtle diagonal axis
- Title top-left, focal middle, secondary bottom-right
- **Use for:** dynamic, non-orthogonal decks (use sparingly).

---

## Comparison Patterns

### CO1. Side-by-side panels
- Two equal columns divided by rule or gap
- Header per column
- Consistent structure below (rows or bullet list)
- **Use for:** classic two-way comparison.

### CO2. Table comparison
- Feature rows × option columns
- Winning cells subtly highlighted (accent color at 20% opacity, or bold text)
- **Use for:** multi-feature comparison.

### CO3. Before / After
- Split with clear rule or gap
- Same aspect ratio and layout on each side
- Labels "Before" / "After" (or equivalents) at top
- **Use for:** transformations, redesigns, results.

### CO4. Matrix (2 × 2)
- 2 × 2 grid with axis labels
- Items placed within quadrants
- Optional colored quadrants
- **Use for:** positioning, prioritization.

### CO5. Radar
- Radar chart at center
- Two or three series overlaid
- Legend or direct labels
- **Use for:** multi-dimensional comparison.

### CO6. Stacked contrast
- Top half: item A with description
- Bottom half: item B with description
- Divider between
- **Use for:** vertical comparison, storytelling.

---

## Data / Stats Patterns

### D1. Single hero number
- One huge number (80-120pt display)
- Small label below in caption size
- Optional source citation smaller still
- **Use for:** the one big number.

### D2. Trio of stats
- Three columns, each with number (display) + label + brief support
- Divided by thin rules or generous whitespace
- **Use for:** three headline metrics.

### D3. Chart + insight callout
- Chart 60% of slide (left or right)
- Callout text 40% (headline insight + short context)
- **Use for:** every chart slide by default.

### D4. Chart-only immersive
- Chart fills most of the slide
- Title top
- Source citation bottom
- **Use for:** the chart IS the story.

### D5. Slope / dumbbell chart
- Two-column data showing change between two points
- Endpoint labels large; line connects
- **Use for:** year-over-year, before/after quantitative.

### D6. Small multiples
- Grid of 4-6 identical mini-charts
- Consistent axes and colors
- **Use for:** comparing the same metric across categories.

### D7. Big number + supporting bar
- Hero number top-left
- Horizontal bar showing composition or comparison below
- **Use for:** headline stat with quick context.

---

## Process / Timeline Patterns

### P1. Horizontal steps
- Numbered nodes on a horizontal line
- Labels below each node
- Connectors: thin line or arrow
- **Use for:** 3-6 linear steps.

### P2. Vertical steps
- Numbered nodes stacked vertically
- Description to the right of each node
- **Use for:** longer steps with detail per node.

### P3. Cycle
- 3-6 nodes arranged on a circle
- Curved arrows between
- Icon inside each node
- **Use for:** iterative or cyclical processes.

### P4. Swimlane
- Rows per actor
- Columns per phase
- Activity pills placed in grid
- **Use for:** cross-functional workflows.

### P5. Milestone timeline
- Long horizontal line with dated milestones
- Milestone labels alternating above/below the line
- **Use for:** roadmaps, history.

### P6. Branching flow
- Root node
- Two or three branches
- Sub-nodes per branch
- **Use for:** decision trees, org logic.

### P7. Stacked phases
- Horizontal bands from top to bottom
- Each band is a phase with title + brief inside
- **Use for:** layered progressions.

---

## Quote Patterns

### Q1. Large quote centered
- Quote in display serif or bold sans, 40-60pt
- Attribution below in body size, muted
- Generous whitespace
- **Use for:** the money quote.

### Q2. Quote + portrait
- Portrait on one side (circular or squared)
- Quote on the other side
- Attribution under quote
- **Use for:** attributed testimonials.

### Q3. Pull-quote editorial
- Quote large in accent color
- Small context paragraph above or below
- Rule between quote and context
- **Use for:** editorial-style quote with framing.

### Q4. Multi-quote panel
- 2-3 short quotes stacked or side-by-side
- Each with brief attribution
- **Use for:** testimonials cluster.

---

## Closing / Thank You Patterns

### TY1. Massive gratitude
- "Thank you" (or equivalent) huge, centered
- Contact details smaller below
- **Use for:** classic closer.

### TY2. Contact card
- Name, role, email, phone (whatever is in source)
- Optional small headshot or logo
- Minimal
- **Use for:** professional networking close.

### TY3. Question prompt
- "Questions?" (or "Discussion", "Let's talk") large
- Contact details below
- **Use for:** interactive session close.

### TY4. Call to action
- Single action verb or phrase in display size
- Supporting URL or contact
- **Use for:** decks that end in an ask.

### TY5. Recap
- 3-5 lines summarizing the deck's key takeaways
- Optional contact at bottom
- **Use for:** long-form or academic decks.

---

## Selection Heuristics

- **Deck of 6 slides:** use 4-5 different patterns overall.
- **Deck of 8 slides:** use 5-6 different patterns.
- **Deck of 12 slides:** use 7-9 different patterns.
- Same slide role occurring twice within one deck: always use two different patterns for that role.
- Match pattern weight to content weight — a one-sentence slide doesn't need L4 (three columns); a dense feature list doesn't fit L9 (highlight callout).
- If content strongly suggests a specific pattern (a quote → Q*), use it; don't force variety by picking a wrong pattern.

---

## Logging (in-run)

For each deck, maintain a lightweight in-run log:

```
deck_id: 2026-07-abcdef
visual_style: V3 (Corporate Modern)
slides:
  1. cover — C2
  2. agenda — A1
  3. content — L3
  4. section — S1
  5. stat — D2
  6. chart — D3
  7. content — L7
  8. quote — Q1
  9. process — P1
  10. content — L4
  11. section — S5
  12. thank you — TY2
```

This log is a runtime artifact; discard after export unless auditing.
