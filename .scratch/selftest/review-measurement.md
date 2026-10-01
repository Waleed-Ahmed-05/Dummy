# Measurement review (SYNTHETIC SELF-TEST)

Sources read: `.scratch/selftest/METRICS.md`, `.scratch/selftest/app/dashboard.js`, `.scratch/selftest/app/data.json`.
Recomputed with `node` directly against `data.json` (5 cards: ids 1-5; ease 2.7, 2.6, 1.3, 2.5, 2.5; reviewed true, true, true, false, false). Running `dashboard.js` prints `You know 67% of your cards` and `Cards due today: 2`.

## Tracked figures

| ID | Claims | Code measures | Recomputed | Denominator OK | Labelled | Verdict |
|---|---|---|---|---|---|---|
| M-001 | "You know X% of your cards": share of **all** the user's cards with ease >= 2.5 | Reviewed cards with ease >= 2.5 / **reviewed cards only** (`dashboard.js:3,5`) = 2/3, shown as 67% | Per definition: 4/5 = **80%**. The code's output (67%) does not match. | **No.** It divides by `reviewed.length` (3), but the definition says all of the user's cards (`data.cards.length`, 5). The numerator also leaves out unreviewed cards 4 and 5 (ease 2.5). | **No.** Not marked illustrative. The ID is cited only in a code comment (`// M-001`), not in the UI. | **Correct before ship** |

**Fix for M-001.** Choose one of these:
- Keep the definition and fix the code: `const knownWell = data.cards.filter(c => c.ease >= 2.5).length / data.cards.length;` (gives 80%), **or**
- Keep the code and change the definition and label: METRICS.md formula becomes "reviewed cards with ease >= 2.5 / reviewed cards", denominator "reviewed cards", and the UI text becomes "You know 67% of the cards you've reviewed".

Either way, add an "illustrative (synthetic data)" label next to the figure and cite M-001 where it is shown.
(Note: unreviewed cards keep the default ease of 2.5, so counting them as "known well" is a questionable definition. That is a reason to prefer the second option.)

## Untracked figures (no row in METRICS.md)

| Where | Figure | Code measures | Recomputed | Verdict |
|---|---|---|---|---|
| `dashboard.js:7` | "Cards due today: 2" | Count of cards with `reviewed == false`. There are no due dates and no "today" check. | 2 (cards 4, 5) | **Correct before ship**: add a METRICS.md row (e.g. M-002). Either compute "due today" from a real due date, or relabel it "Cards not yet reviewed". Mark it illustrative. |

## Note (outside the code, not counted)

`01-brief.md` plans a public landing-page claim: "Students using StudyBuddy improve their grades by 40%." It has no METRICS.md row, and nothing in the code or the synthetic data measures grades. If it ships in the UI, it needs a definition and a data source, or it must be removed.

## Verdict

2 figures need correcting before ship: M-001 and the untracked "Cards due today".
