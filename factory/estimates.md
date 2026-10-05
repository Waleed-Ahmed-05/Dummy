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
| 0 | Triage + CP0 | 3 | — | measured (1 run) |
| opt | Prototype | 25 | — | HTML (10–25 min) |
| 1 | Brief | 21 | — | measured (1 run) |
| 2 | Customer panel | 10 | — | HTML (the 1 run's ~2 min is unreliable: the agent errored) |
| 2c | Compliance: concept | 4 | — | measured (1 run) |
| 3 | PRD + metrics file | 19 | — | measured (1 run) |
| 4 | Design | 8 | — | measured (1 run, no rendered options) |
| 4c | Compliance: on paper | 10 | — | measured (1 run) |
| 5 | Plan + tickets | 28 | — | measured (1 run) |
| 6 | Build | 130 | — | measured (1 run, active time; 7 tickets) |
| 8 | QA | 25 | — | measured (1 run) |
| 7–11 | Reviews (in parallel) | 25 | — | measured (1 run) |
| 12 | Ship (demo-ready + PR) | 10 | — | measured (1 run) |
| 13 | After delivery | 10 | — | guess |
| 14 | Retro | 15 | — | guess |
|  | **Total** | **343 (~5h43m)** | — | must fit in one working day |

Token column: the 1 run's new tokens per stage are in `factory/lessons/20261001-calorie-tracker.md`; leave this column blank until the runner reads spend from transcripts.

Fast-path class times (0–3) live in `triage-rules.md`; they are not repeated here.

## How the retro recalibrates

- After each run, record each stage's actual minutes and tokens on the run board.
- Replace an estimate with the **average of its last 3 actual runs** (after 1–2 runs, use the average of those).
- Change the stage's Source to `measured (n runs)`.
- If the Total no longer fits one working day, flag it to the user in the retro.