# Stage estimates

Read by the `/poc` runner for the 2× stop. Updated by the retro after every run.

## The 2× stop

- Before a stage starts, the runner writes its estimate on the run board.
- If a stage's actual time or tokens pass **2× the estimate**, the run stops at the next stage boundary and is re-estimated with the user.
- A run that needs a **third** estimate has the wrong shape: stop and re-plan, don't push on.
- While a stage's token estimate is blank, the 2× stop uses time only for that stage.

## Ladder stages (class L — a new proposal)

| # | Stage | Minutes | Tokens | Source |
|---|---|---|---|---|
| 0 | Triage + CP0 | 5 | — | guess |
| opt | Prototype | 25 | — | HTML (10–25 min) |
| 1 | Brief | 8 | — | HTML |
| 2 | Customer panel | 10 | — | HTML |
| 2c | Compliance: concept | 8 | — | HTML |
| 3 | PRD + metrics file | 15 | — | HTML |
| 4 | Design | 25 | — | HTML |
| 4c | Compliance: on paper | 8 | — | guess (same as concept) |
| 5 | Plan + tickets | 22 | — | HTML 12 for the plan + guess 10 for tickets |
| 6 | Build | 180 | — | guess |
| 8 | QA | 30 | — | guess |
| 7–11 | Reviews (in parallel) | 30 | — | guess |
| 12 | Ship (demo-ready + PR) | 15 | — | guess |
| 13 | After delivery | 10 | — | guess |
| 14 | Retro | 15 | — | guess |
|  | **Total** | **406 (~6h46m)** | — | must fit in one working day |

Fast-path class times (0–3) live in `triage-rules.md`; they are not repeated here.

## How the retro recalibrates

- After each run, record each stage's actual minutes and tokens on the run board.
- Replace an estimate with the **average of its last 3 actual runs** (after 1–2 runs, use the average of those).
- Change the stage's Source to `measured (n runs)`.
- If the Total no longer fits one working day, flag it to the user in the retro.