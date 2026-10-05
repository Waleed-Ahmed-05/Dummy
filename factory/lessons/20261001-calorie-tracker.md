# Lessons: run 20261001-calorie-tracker (class L, removed after CP3)

The first full ladder run of the factory: a calorie and exercise tracker for fictional gym beginners, EU (GDPR), WHO guidelines. It ran from triage to CP3 (shipped, then removed at the user's request before after-delivery and the retro). The code and run record are gone; this page keeps what the run taught. Each lesson names the file that owns the fix.

## Measured stage times (minutes) against the estimates

| Stage | Estimate | Measured | Note |
|---|---|---|---|
| 0 Triage + CP0 | 5 | 3 | |
| 1 Brief | 8 | 21 | 2× stop fired; gstack office-hours asks ~10 questions and runs 2 spec-review rounds |
| 2 Customer panel | 10 | ~2 | the agent errored after writing its output |
| 2c Concept | 8 | ~4 | risk and legal in parallel |
| 3 PRD + metrics | 15 | ~19 | |
| 4 Design | 25 | ~8 | no rendered options (no designer API key) |
| 4c On paper | 8 | ~10 | two rounds (amend + re-check) |
| 5 Plan + tickets | 22 | ~28 | 6 engineering decisions, 7 tickets |
| 6 Build | 180 | ~130 active | 7 tickets in parallel lanes; 220 min on the clock including a usage-limit pause |
| 8 QA | 30 | ~25 | |
| 7–11 Reviews | 30 | ~25 | 5 seats in parallel |
| 12 Ship | 15 | ~10 | ship plan + push |

New tokens (input + output + cache writes, read from the transcripts) were about 5.4M for the run, plus 179M cache reads. The build was the largest stage (about 1.6M), followed by the reviews and QA.

## Rule breaks, and the fix in place
- **Findings were fixed before the user saw them** (the stage-6 code review was fixed before CP2). Fixed in `.claude/skills/poc/SKILL.md`: "Nothing is fixed before CP2"; code review and the `qa-lead` seat are report-only.
- **Spend was read from each agent's own report.** The `subagent_tokens` figure is the agent's final context size, not tokens processed, and `factory/bin/tokens.js` went stale mid-run. Still open: read spend from the transcripts instead.

## Runner and tooling lessons
- Seats that were skills had no charter to amend. Fixed: one agent per seat in `.claude/agents/` (13 of 21; the 8 Operate seats wait for a live product).
- `to-tickets` and `implement-spec` can only be invoked by a user. The runner and the `architect` seat follow their SKILL.md files directly.
- Agent worktrees can start from a stale commit, and untracked run files aren't in them. The `engineer` charter fast-forwards onto the integration branch; give agents absolute paths to the run files.
- Usage limits interrupted 3 agents. Resume them with SendMessage; they keep their context.
- Background servers stop at the task time limit (30 min by default). Start them with a 2 h limit, and check the port first: the user may already have one running.
- The ECC GateGuard hook asks for "facts" before every first write. Consider `GATEGUARD_EXEMPT_GLOBS` for `.scratch/**` and the session scratchpad.
- Not available on this machine: Codex (no outside reviewer), `jq`, `gh` (PRs are opened by the user from the compare link) and a designer API key.

## Seat lessons
- **Legal:** a concept-stage sentence ("Today's logged intake…") was false on the yesterday view, and later "Today" labels were too. Check every published sentence in every state it can show in.
- **Measurement editor:** the per-meal rounding, the legend for each figure and the stored-history limit were missing from `METRICS.md`. The PM's proposed rows should name rounding and denominators explicitly.
- **QA:** the 60-second timing can't be measured by a browser; the user's stopwatch is the evidence (or a recorded waiver).
- **Security engineer:** the first dedicated run found a validation gap the earlier reviews missed (impossible stored values). Keep a live probe in every review.
- **Compliance:** the same brief has drawn different verdicts on different runs. Add a fixed verdict table to the risk and legal charters (e.g. real personal data at concept = Stop).
