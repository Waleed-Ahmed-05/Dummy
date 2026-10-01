# POC Factory

A predefined agentic workflow that turns a **project proposal into a working POC within a day**, with a person deciding at four checkpoints. Based on *Idea to Cleared Release* (the operating-model HTML). Built on gstack skills, mattpocock skills, ECC agents and four custom seats. Paperclip will take over orchestration later.

## How to start

- New proposal: `/poc <the proposal text, or a path to it>` (class L: the full ladder)
- Change to an existing POC: `/poc <the change>` (triage decides class 0–3: the fast path)

The runner stops at **CP0** (path), **CP1** (plan + design), **CP2** (findings: fix / waive / defer / owe) and **CP3** ("ship"). Nothing is built before CP1, and nothing is pushed before CP3.

## Ground rules

- Synthetic data only. Every figure is labelled illustrative.
- A `STOP`, `NO_GO`, `HOLD` or `FIX_FIRST` from a seat stops the line. Only the user can waive it, and every waiver is recorded in `WAIVERS.md`.
- The `/poc` runner is the only writer of `OWED.md`, `WAIVERS.md` and `METRICS.md`.
- Each rule lives in one file. The retro amends that file; don't copy rules into other places.

## File map

| Path | What it is |
|---|---|
| `.claude/skills/poc/` | the runner |
| `.claude/skills/poc-triage/` | applies `factory/triage-rules.md` |
| `.claude/agents/` | custom seats: customer-panel, risk-compliance, legal-counsel, measurement-editor |
| `.claude/skills/` (others) | mattpocock: prototype, to-tickets, implement, implement-spec, tdd, code-review, setup |
| `factory/triage-rules.md` | classes 0–3 / L and protected areas |
| `factory/estimates.md` | stage estimates for the 2× stop (the retro recalibrates them) |
| `factory/templates/` | RUN, OWED, METRICS, WAIVERS |
| `factory/bin/tokens.js` | the session's token reading for the 2× stop |
| `.scratch/<run>/` | one folder per run: RUN.md board, stage outputs, tickets |
| `.scratch/selftest/` | synthetic sample with planted issues, used to re-test seats after changes |

gstack skills are installed globally (`~/.claude/skills/gstack`, with the `gstack-` prefix). `/gstack-cso` is not used; security review uses `ecc:security-reviewer`.

## Agent skills

### Issue tracker

Issues are tracked as local markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default mattpocock labels, plus the lifecycle ready-for-agent → claimed → resolved. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
