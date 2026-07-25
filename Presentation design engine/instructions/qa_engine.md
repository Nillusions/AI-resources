# QA Engine

Run this checklist before every export. Every item must pass. Auto-fix where possible; escalate to human review only when auto-fix has been attempted three times without success.

Order matters: content integrity first (highest cost of failure), then typography, then layout, then assets, then chart/table accuracy, then consistency, then file hygiene.

---

## 1. Content Integrity (highest priority — never skip)

Content preservation is the strictest rule in this engine. A design failure is fixable; a content failure is a broken deliverable.

- [ ] Every word from the source deck is present in the redesigned deck.
- [ ] Every number matches the source **exactly** (no rounding, no formatting drift).
- [ ] Every statistic matches the source exactly.
- [ ] Every proper noun spelled identically to source.
- [ ] Order of information preserved unless deliberately reorganized for hierarchy — and the meaning is unchanged.
- [ ] No content invented.
- [ ] No content silently removed.
- [ ] No text summarized.
- [ ] No text rewritten (even for grammar) — original wording preserved.
- [ ] Source text tokens ⊂ output text tokens (diff-check; ignore whitespace and line breaks).

**Auto-fix:** if content is missing, restore from source. If content is fabricated, remove it.

**Escalate:** if you cannot verify a number's origin, flag the slide for human review before shipping.

---

## 2. Typography

- [ ] No text below **10pt** anywhere on any slide.
- [ ] No text above **96pt** (cover display allowed at 72-96).
- [ ] Max **2 typefaces** across the deck.
- [ ] Max **3 weights** across the deck.
- [ ] Title size consistent across all content slides (e.g., 36pt everywhere or 32pt everywhere — one).
- [ ] Body size consistent across all content slides.
- [ ] No **overflow** past the safe area (0.4" margins).
- [ ] No **overlapping** text elements.
- [ ] No **orphan** lines (single word alone on the last line of a paragraph).
- [ ] No **widow** lines (single line of a paragraph at the top of the next column).
- [ ] Line height in the **1.15 – 1.5** range.
- [ ] No justified body text.
- [ ] No underlines except on hyperlinks.
- [ ] ALL CAPS used only for micro-labels with tracking (+5-10%).
- [ ] Line length within readable range: ~45-75 characters per line for body copy.
- [ ] Italic used only for quotes and titles of works.

**Auto-fix:** reflow, resize within scale, break to a new slide, adjust column width.

---

## 3. Color

- [ ] Body text contrast **≥ 4.5:1** vs. its background.
- [ ] Large text (≥ 24pt or ≥ 18pt bold) contrast **≥ 3:1**.
- [ ] Palette limited to the deck's 6 defined colors (primary, secondary, accent, neutral dark, neutral light, surface).
- [ ] No rogue colors from outside the palette.
- [ ] Accent color used sparingly (~10-15% of total ink).
- [ ] Chart palette derives from deck palette.
- [ ] Text over images has adequate overlay/scrim (min 40% opacity dark) or is on a solid inset panel.

**Auto-fix:** darken text, adjust background, add scrim.

---

## 4. Layout

- [ ] All primary content inside the 0.4" safe area.
- [ ] All elements aligned to the grid (12-col default).
- [ ] Consistent margins across slides.
- [ ] Consistent spacing (all values from the 4-8-12-16-24-32-48-64-96 scale).
- [ ] One clear primary focal point per slide, identifiable within one second.
- [ ] Reading order unambiguous.
- [ ] Related items grouped (proximity ≤ 12pt); unrelated items separated (≥ 32pt).
- [ ] Repeated elements (cards, columns, list items) are structurally identical.
- [ ] Balance is either intentional symmetric or intentional asymmetric — not accidental.
- [ ] Whitespace is 30-60% of slide area.
- [ ] No element *accidentally* clipped by slide edge. Deliberate overflow (shapes, arcs, decorative elements extending past the edge) is accepted and encouraged — judge in PowerPoint, not preview tools.
- [ ] Corner radii consistent (one token used throughout the deck).

### 4.1 Alignment & Centering (client-flagged — check carefully)

- [ ] **No text alignment issues.** Every text block has an intentional alignment (left, center, or right). No text that appears accidentally off-center or misaligned relative to its container or neighboring elements.
- [ ] **Elements intended to be centered are precisely centered** — verify x-position math: `x = (slideWidth - elementWidth) / 2`. Visually off-center elements are a top client complaint.
- [ ] **Parallel elements share alignment axes.** If two cards sit side by side, their tops align, their heights match, and their internal text starts at the same offset.
- [ ] **No content elements clipped by slide edges.** Content text, images carrying meaning, charts, tables, and data labels must not be cut off by the slide boundary. Only decorative shapes (arcs, circles, color blocks) may extend past the edge.
- [ ] **Vertical centering within containers is precise.** Text inside cards, badges, and banners must be vertically centered — not pushed to the top or bottom of the container.

**Auto-fix:** snap to grid, apply spacing scale, unify corner radii, recalculate center positions.

---

## 5. Images

- [ ] **No stretched or squished images** — aspect ratio preserved everywhere. Masks and uniform scaling only.
- [ ] No randomly adjusted image dimensions — width and height always scale by the same factor.
- [ ] Every image uses `sizing: { type: 'cover' }` or `sizing: { type: 'contain' }` when container aspect differs from source.
- [ ] Circular/curved masks preserve the image's native proportions inside the mask.
- [ ] No pixelated / low-resolution images (min 1200 × 800 for inset, 1920 × 1080 for full-bleed).
- [ ] No missing images (all placeholders replaced with real assets).
- [ ] Consistent treatment across the deck (all color, all muted, all B&W, or all duotone — one).
- [ ] Images support the slide message (not decorative filler).
- [ ] No generic stock. No stock clichés (see `asset_engine.md` §10 rejection list).
- [ ] No blurry or off-topic images.
- [ ] No visible watermarks.
- [ ] No embedded brand logos that aren't the deck subject.
- [ ] Attribution placed where the license or style requires it.

**Auto-fix:** re-fetch replacement image if quality fails; re-crop (never re-stretch) if aspect ratio was violated. Always use mask-based cropping for non-rectangular containers.

---

## 6. Icons

- [ ] Single icon family across the entire deck (Phosphor, Lucide, or Material — one).
- [ ] Single icon weight (e.g., Phosphor Regular everywhere).
- [ ] Consistent size within a set (all feature icons the same pt).
- [ ] Consistent color treatment.
- [ ] Every icon carries meaning; no purely decorative icons.
- [ ] Icons align to text baseline where inline.
- [ ] Minimum icon size 20pt.

**Auto-fix:** unify family/weight/size across the deck.

---

## 7. Illustrations

- [ ] Single illustration style across the deck.
- [ ] Illustration tint / color harmonizes with the deck palette.
- [ ] Each illustration adds meaning; not decorative.
- [ ] Aspect preserved (no stretch).

---

## 8. Charts

- [ ] Values match the source exactly (verify each data label).
- [ ] No default PowerPoint chart styling.
- [ ] No 3D. No gradients on data marks. No drop shadows on bars.
- [ ] Chart colors from deck palette.
- [ ] Accent color used only on the "story" bar/point.
- [ ] Axes labeled where needed; source labels preserved.
- [ ] Legend removed if direct labeling suffices.
- [ ] Data labels aligned consistently (all on-bar or all on-end).
- [ ] Value axis starts at 0 or the break is annotated.
- [ ] Max series counts respected: line ≤ 3, donut ≤ 5, bar categories reasonable.
- [ ] Gridlines light or removed (0.5pt, light neutral).
- [ ] Chart has a one-sentence takeaway (callout), not just a topic title.

**Auto-fix:** restyle chart to design system; re-label; regenerate.

---

## 9. Tables

- [ ] Every cell value matches the source exactly.
- [ ] Row height consistent (min 32pt body, 40pt header).
- [ ] Column padding consistent (12pt horizontal).
- [ ] Numeric columns right-aligned with tabular figures.
- [ ] Text columns left-aligned.
- [ ] Header treatment consistent (case, weight).
- [ ] Emphasis applied to key values only, using one of weight OR accent (not both).
- [ ] Row banding used only if it aids scanning; consistent choice across the deck.
- [ ] No vertical rules unless the table is very dense.
- [ ] Density reduced from source (fewer visual rules, more whitespace).

---

## 10. Diagrams / Flows

- [ ] Not default SmartArt (rebuilt from primitives).
- [ ] Arrows and connectors aligned to grid.
- [ ] Consistent shape treatment (same radius, same stroke, same fill logic).
- [ ] Labels sized within the type scale.
- [ ] Directional flow unambiguous.
- [ ] Colors from deck palette.

---

## 11. Consistency Across Slides

- [ ] Title position identical on all content slides.
- [ ] Page number position identical on all content slides.
- [ ] Brand mark (if any) in the same location and size on every content slide.
- [ ] Section dividers styled identically.
- [ ] Body max-width consistent.
- [ ] Icon treatment consistent.
- [ ] Image treatment consistent.
- [ ] Chart styling consistent.

Cover, section dividers, and closing may deviate from content chrome — content slides may not.

---

## 12. Variety Within the Deck (client's #1 feedback — enforce strictly)

- [ ] **No two content slides use the exact same layout pattern.** This is the most common client complaint. Each content slide must look individually designed.
- [ ] **Backgrounds vary across the deck** — mix of light, dark, tinted, and image-led. No monotone decks.
- [ ] **Composition approaches vary** — some slides left-anchored, some centered, some asymmetric, some full-bleed.
- [ ] **Element treatments vary** — cards on some slides, open layouts on others; icons on some, images on others.
- [ ] Section dividers use one consistent divider treatment (variety within dividers is not required).
- [ ] Chart slides vary in composition where the deck has more than one chart.
- [ ] The deck does not feel like a template applied 12 times. If you can describe the "template" used for 3+ slides, it fails.
- [ ] **List content has been evaluated for infographic conversion.** Any slide with bullets that could be a diagram, pyramid, cycle, radial, or callout pattern should have been converted.

**Auto-fix:** If variety fails, redesign the most repetitive slides using different layout patterns, different background treatments, and different composition approaches.

---

## 13. Accessibility

- [ ] Color contrast passes WCAG AA (see §3).
- [ ] Text is real text, not rasterized (avoid text baked into images).
- [ ] Reading order set correctly in the pptx (accessible reading order for screen readers).
- [ ] Alt text on every image and chart (short, descriptive).
- [ ] No information conveyed by color alone — always paired with position, label, or icon.

---

## 14. File Hygiene

- [ ] File is fully editable (no flattened images-of-text, no locked shapes).
- [ ] Fonts embedded, or a system-safe fallback chain defined in every run.
- [ ] No orphan objects placed off-slide.
- [ ] No hidden slides.
- [ ] No leftover placeholder text ("Click to add title", "Lorem ipsum").
- [ ] No leftover template graphics from the source pptx.
- [ ] Slide master is clean or replaced (no residual junk).
- [ ] Total file size **< 15 MB** target, **< 25 MB** hard cap.
- [ ] File name: `<original-filename>-redesigned.pptx` in `output/`.

**Auto-fix:** remove hidden slides, unused masters, embedded thumbnails; compress oversize images.

---

## 15. The Four Moves Audit

Before the senior-designer gate, verify the deck meets the Four Moves standard:

### Deck Math Check (per 10 slides — scale proportionally)

- [ ] AT LEAST 5 slides carry a real image (built into the layout, not dropped in a box).
- [ ] AT LEAST 5 slides use structural curvature (circles, arcs, curved cut-outs — not just rounded corners).
- [ ] AT LEAST 2 slides contain drawn explanations (infographics, maps, labelled diagrams, callouts, visual metaphors).
- [ ] AT MOST 1 slide is plain standalone (no move applied).

### Per-Slide Move Check

- [ ] Every slide hits at least one of the Four Moves (curvature, real images, drawn explanations, backgrounds).
- [ ] If you squint and lose the words, the slide still communicates visually — it doesn't fail.
- [ ] Text on images has a scrim, solid panel, or darker crop behind it. Body text ~4.5:1 contrast, big headings ~3:1.

### Background Variety

- [ ] Backgrounds change across the deck — not all-white.
- [ ] Mix of light, dark, and image-led backgrounds.
- [ ] No orange-heavy palettes (we have too many).

### List-to-Infographic Check

- [ ] Every slide with bullet/list content has been evaluated for infographic conversion.
- [ ] Slides containing process lists have been converted to flowcharts or curved-arrow process flows (IG4).
- [ ] Slides with feature/benefit lists have been converted to radial callouts (IG1) or hub-and-spoke (IG5) where appropriate.
- [ ] Slides with hierarchical content use pyramids (IG2) or similar visual structures.
- [ ] Curved arrows and pointers are used throughout the deck — not just straight lines and connectors.

**Auto-fix:** If a slide fails the move check, apply one of the Five Approved Patterns: curvature, images, drawn, callouts, or maps. If the deck math doesn't add up, redesign the weakest slides to hit the quotas. If list content remains as bullets, convert to an IG* infographic pattern.

---

## 16. Final Senior-Designer Gate

Ask, for the deck as a whole:

**"Would a senior corporate presentation designer sign off on this?"**

And then the harder question:

**"Would the model have made this?"** Ask it out loud before you submit. If yes, it isn't finished.

Sub-questions:
- Does the deck have a clear identity?
- Is every slide's focal point obvious?
- Would this feel out of place in a boardroom, a keynote, or a client meeting?
- Is there any slide that looks like an AI wrote it?
- Does the deck feel *designed*, or does it feel *generated*?

### Pre-Submit Checklist (all ten must pass)

1. [ ] **Reviewed in PowerPoint presentation mode** (full-screen slideshow), not just edit view or a preview tool. This is mandatory — preview tools misrepresent alignment, overflow, and text rendering.
2. [ ] Backgrounds change across the deck.
3. [ ] Half the slides carry a real image.
4. [ ] Every word is readable at a glance.
5. [ ] Curvature is structural, not rounded corners.
6. [ ] At least two drawn explanations.
7. [ ] **No text alignment issues** — all text blocks properly aligned.
8. [ ] **No element centering issues** — centered elements are precisely centered.
9. [ ] **No content elements clipped by slide edges** — only decorative shapes may overflow.
10. [ ] **Layout templates vary across slides** — no two content slides look like the same template.

If any answer is unsatisfying: iterate.

Max **3 iterations** across the QA loop. After 3, if issues remain:

- Ship the best version.
- Log the unresolved issues in `output/<deck_id>/qa_notes.md` for human follow-up.
- Never ship a deck with content-integrity failures — those always block export.

---

## 17. Auto-Fix vs. Escalate

| Issue | Auto-fix | Escalate |
|---|---|---|
| Text overflow | Yes — reflow, resize, or split slide | Only if content is untouchable and no split works |
| Missing image | Yes — re-fetch, or restructure slide without image | Only after 3 source fallbacks fail |
| Contrast fail | Yes — darken text, add scrim | Rare |
| Content missing | Restore from source | If source is ambiguous |
| Fabricated content | Remove | — |
| Broken chart | Rebuild | If source data is incomplete |
| Style inconsistency | Unify to deck standard | — |
| File too large | Compress images | If assets are already at min quality |

---

## 18. QA Loop Structure

```
loop {
  run_checks()
  if all_pass: export; break
  else if iteration >= 3: log unresolved; export best; break
  else: apply auto-fixes; iteration += 1
}
```

Content-integrity failures never allow export. Everything else has a limit.
