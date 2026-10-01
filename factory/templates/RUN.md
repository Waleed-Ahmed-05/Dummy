# Run: {{run-name}}

Copied by the `/poc` runner to `.scratch/{{run-name}}/RUN.md` at the start of a run. The runner keeps it current; the user reads it at every checkpoint.

**Class:** {{L / 0–3}} · **Proposal:** {{one line}} · **Jurisdiction:** {{from the proposal}}
**Started:** {{YYYY-MM-DD HH:MM}} · **Elapsed:** {{h m}} of ~{{total estimate}} · **Next:** {{stage or checkpoint}}

## Board

One row per stage, created from `factory/estimates.md` when the run starts. Est = the estimate at the start; Spent = actual minutes / tokens.

| # | Stage | Who | State | Est (min / tokens) | Spent (min / tokens) | Verdict |
|---|---|---|---|---|---|---|

State is one of: `next` · `running` · `done` · `stopped` · `skipped`

## Checkpoint decisions

| Checkpoint | Decision | Notes | Time |
|---|---|---|---|

- CP0 · path: go / change the class / add or cut a reviewer / prototype first
- CP1 · plan + design: approve / cut items / send the plan or the design back
- CP2 · findings: per finding, fix / waive / defer / owe
- CP3 · ship: "ship", or not

## 2× stops

| Stage | Estimate | Actual at stop | New estimate | Reason |
|---|---|---|---|---|

A third estimate for the same stage means the run has the wrong shape: stop and re-plan with the user.
