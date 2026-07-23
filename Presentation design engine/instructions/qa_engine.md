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
- [ ] No element accidentally clipped by slide edge.
- [ ] Corner radii consistent (one token used throughout the deck).

**Auto-fix:** snap to grid, apply spacing scale, unify corner radii.

---

## 5. Images

- [ ] No stretched images (aspect ratio preserved everywhere).
- [ ] No pixelated / low-resolution images (min 1200 × 800 for inset, 1920 × 1080 for full-bleed).
- [ ] No missing images (all placeholders replaced with real assets).
- [ ] Consistent treatment across the deck (all color, all muted, all B&W, or all duotone — one).
- [ ] No stretched or distorted crops.
- [ ] Images support the slide message (not decorative filler).
- [ ] No stock clichés (see `asset_engine.md` §10 rejection list).
- [ ] No visible watermarks.
- [ ] No embedded brand logos that aren't the deck subject.
- [ ] Attribution placed where the license or style requires it.

**Auto-fix:** re-fetch replacement image if quality fails; re-crop if aspect ratio was violated.

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

## 12. Variety Within the Deck

- [ ] No two content slides use the exact same layout pattern.
- [ ] Section dividers use one consistent divider treatment (variety within dividers is not required).
- [ ] Chart slides vary in composition where the deck has more than one chart.
- [ ] The deck does not feel like a template applied 12 times.

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

## 15. Final Senior-Designer Gate

Ask, for the deck as a whole:

**"Would a senior corporate presentation designer sign off on this?"**

Sub-questions:
- Does the deck have a clear identity?
- Is every slide's focal point obvious?
- Would this feel out of place in a boardroom, a keynote, or a client meeting?
- Is there any slide that looks like an AI wrote it?
- Does the deck feel *designed*, or does it feel *generated*?

If any answer is unsatisfying: iterate.

Max **3 iterations** across the QA loop. After 3, if issues remain:

- Ship the best version.
- Log the unresolved issues in `output/<deck_id>/qa_notes.md` for human follow-up.
- Never ship a deck with content-integrity failures — those always block export.

---

## 16. Auto-Fix vs. Escalate

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

## 17. QA Loop Structure

```
loop {
  run_checks()
  if all_pass: export; break
  else if iteration >= 3: log unresolved; export best; break
  else: apply auto-fixes; iteration += 1
}
```

Content-integrity failures never allow export. Everything else has a limit.
