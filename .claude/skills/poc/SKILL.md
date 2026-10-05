---
name: poc
description: Run the POC factory on a project proposal — triage, brief, customer panel, compliance, PRD, design, plan, build, QA, reviews, ship and retro — stopping at checkpoints CP0–CP3 for the user. Also runs the fast path for a follow-up change to an existing POC. Invoke as /poc <proposal or change>.
disable-model-invocation: true
---

# POC runner

You are the line manager. You run the stages in order, keep the run board, hand each seat what it needs, and stop at every checkpoint for the user. You do not do a seat's work yourself, and you never skip a checkpoint: **only the user's word moves past CP0–CP3, and only the user's "ship" releases anything.**

## Files you own

| File | You | Template |
|---|---|---|
| `.scratch/<run>/RUN.md` | create at start; update after every stage | `factory/templates/RUN.md` |
| `OWED.md` (repo root) | **only writer**: add, merge and close rows | `factory/templates/OWED.md` |
| `WAIVERS.md` (repo root) | only writer | `factory/templates/WAIVERS.md` |
| `METRICS.md` (repo root) | create from template before the PRD stage | `factory/templates/METRICS.md` |

Copy a template only if the file doesn't exist. Read rules fresh from `factory/triage-rules.md` and `factory/estimates.md` every run.

## Every stage, the same way

1. **Before:** set the board row to `running`, write its estimate (from `factory/estimates.md`), and record a start reading: the time, plus `node factory/bin/tokens.js`.
2. **Hand over:** invoke the stage's skill or subagent with the run folder, the files it needs, the engagement (for compliance), the **jurisdiction**, and the **stage dates** (so seats don't invent due dates).
3. **After:** take an end reading. Spent = time delta / token delta **plus** the `subagent_tokens` reported by every subagent you called in that stage. Save the stage's main output in the run folder as `NN-<stage>.md` (or note the path the skill wrote to). Write the verdict on the board.
4. **2× stop:** if spent time or tokens passed 2× the estimate, stop at this boundary and ask the user for a new estimate (log it under "2× stops"). A third estimate for the same stage means the run has the wrong shape: stop and re-plan with the user.
5. **Stop verdicts:** any `STOP`, `NO_GO`, `HOLD` or `FIX_FIRST` ends forward progress. Show it to the user with the seat's one line; only the user can waive it, and every waiver goes into `WAIVERS.md`.

If a seat's reply has no final `STATUS:` line, re-invoke it once; if there's still none, stop and tell the user.

**Every seat is a subagent** in `.claude/agents/`, one per seat of the operating model: prototyper, strategist, customer-panel, product-manager, ux-designer, architect, engineer, qa-lead, measurement-editor, release-manager, risk-compliance, legal-counsel, security-engineer. Each charter wraps the skill the seat uses, names its first source, holds one gate and ends in the model's own verdict; write that verdict on the board. Pass each seat the run folder, the files it needs, the engagement, the jurisdiction and the stage dates. Subagents load at session start: if a seat isn't available by name yet (a new charter, no restart since), run a general-purpose agent with "Follow `.claude/agents/<seat>.md` exactly" and the same inputs.

**Nothing is fixed before CP2.** Review and QA seats report; their findings wait for the user's decision at CP2. The only fixes before CP2 are the user's own CP1 decisions.

## Checkpoints

Ask with AskUserQuestion. Show the short summary first, then the choices. Record the answer under "Checkpoint decisions" in RUN.md before doing anything else.

| CP | When | Choices |
|---|---|---|
| CP0 · path | after triage | go · change the class · add or cut a reviewer · prototype first |
| CP1 · plan + design | after plan + tickets, before any build | approve · cut items · send the plan or the design back |
| CP2 · findings | after QA and all reviews, merged | per finding: fix · waive · defer · owe |
| CP3 · ship | at the ship plan | "ship" · not yet |

When two seats disagree (e.g. risk says Stop, legal says Reshape), show both side by side; the disagreement is the finding.

## The ladder (class L: a new proposal)

### 0. Start the run
- Make a run name: `<yyyymmdd>-<short-slug>`. Create `.scratch/<run>/` and `RUN.md`; fill the header (proposal, jurisdiction, started) and one board row per stage in `factory/estimates.md`.
- If the proposal names no jurisdiction, ask the user now. Legal holds without one.
- Invoke `poc-triage` on the proposal. Put its TRIAGE block in `00-triage.md`.
- **CP0.** If the user picks "prototype first", run the optional stage, then come back to CP0.

### opt. Prototype
Invoke the `prototyper` subagent for one throwaway page with synthetic data; it returns `TOUCHABLE` or `BLOCKED`. The verdict on the idea is the user's: **Build it** (continue), **Reshape** (one more round, at most), **Park** (end the run, recording why). Nothing from the prototype's code is kept.

### 1. Brief
Invoke the `strategist` subagent with the proposal. The brief (`01-brief.md`) names 2–4 target customer segments, an objective with a number and a date, the hypothesis and a test that could prove it wrong. `RESHAPE` or `PARK` → show the user. Ask the user to confirm the segments.

### 2. Customer panel
Invoke the `customer-panel` subagent on `01-brief.md`. `RETURN` → back to stage 1 with its one line (at most 2 rounds), then stop and ask the user.

### 2c. Compliance: concept
Invoke `risk-compliance` and `legal-counsel` **in parallel**, engagement `concept`. Merge their `## Conditions` into `OWED.md` (see "The ledger"). `STOP` → stop the line. `RESHAPE` → back to stage 1.

### 3. PRD + metrics
Create `METRICS.md` from the template if it doesn't exist. Invoke the `product-manager` subagent on the brief: stories, testable acceptance criteria, and a proposed `METRICS.md` row for every figure a user will read (or none). Write those rows into `METRICS.md` yourself. `NOT_READY` → back to the seat once, then ask the user.

### 4. Design
Invoke the `ux-designer` subagent on the PRD; it writes `04-design.md` and returns `READY_FOR_ENGINEERING` or `NOT_READY`.

### 4c. Compliance: on paper
Invoke `risk-compliance` and `legal-counsel` in parallel, engagement `on paper`, on the PRD and the design. Merge the conditions. Stop verdicts stop the line.

### 5. Plan + tickets
Invoke the `architect` subagent on the PRD + design. It writes `05-plan.md` (architecture, data flow, test plan) and the tickets in `.scratch/<run>/issues/` per `docs/agents/issue-tracker.md`, and returns `READY_TO_BUILD` or `NOT_READY`.

**CP1.** Show the plan, the tickets and every seat's "Decisions for the user" (brief, PRD, design, plan). Nothing is built before the user approves.

### 6. Build
Run the ticket graph as `.claude/skills/implement-spec/SKILL.md` describes, with one `engineer` subagent per frontier ticket, each in its own worktree on the integration branch (parallel lanes). You merge each `BUILT` branch, re-run the tests, and move its ticket `ready-for-agent` → `claimed` → `resolved` only when they pass. When every ticket is merged, run `code-review` on the integration branch **report only**: its findings go into `11-findings.md` for CP2, not to a fix round. The POC uses **synthetic data only**, and every figure is labelled illustrative.

### 8. QA
Start the POC, then invoke the `qa-lead` subagent against it: every acceptance criterion, in each theme and at phone width, report only. It writes `08-qa.md` and returns `PASS` or `FAIL`; its findings go to CP2.

### 7–11. Reviews, in parallel
- `measurement-editor` subagent: only if `METRICS.md` has rows (otherwise mark it `skipped`)
- `risk-compliance` + `legal-counsel`, engagement `before delivery`
- `security-engineer` subagent: access, routes, secrets (the ladder always; the fast path when a protected area is touched)

Merge all findings (these, QA's and stage 6's code review) into one list in `11-findings.md`, each with its seat, severity and source. A `FIX_FIRST` stops the line like a No-go.

**CP2.** For each finding, the user picks: **fix** (one merged fix round; re-prove only what changed), **waive** (a row in `WAIVERS.md`), **defer** (a dated item with an owner), or **owe** (a row in `OWED.md`). Fixes go to one `engineer` subagent as one merged list, then the seats whose findings changed re-check: **two fix rounds at most**, then stop and ask the user.

### 12. Ship
Invoke the `release-manager` subagent, engagement `plan`. It proves the gates in a clean copy of the branch, checks `OWED.md` (an **open** row due before delivery in an area this change touches blocks shipping unless the user waived it), and writes the ship plan to `12-ship.md`: what is live, the demo steps, the proof (QA, reviews, clean copy), the open conditions, and the exact files and PR text. It returns `READY` or `HELD`.

**CP3.** Only on the user's word "ship": invoke `release-manager` again, engagement `ship` (it runs `gstack-ship`: commit, push, PR) and record `SHIPPED`. Without the word, nothing is pushed.

### 13. After delivery
Invoke `risk-compliance` and `legal-counsel`, engagement `after delivery`, on their open `OWED.md` rows. Update each row to `closed` (with the date and by whom) or leave it `open`.

### 14. Retro
1. Fill every board row's Spent. Update `factory/estimates.md`: replace each estimate with the average of its last 3 measured runs, and set Source to `measured (n runs)`.
2. Ask each seat that made a mistake in this run to propose an amendment to **its own** file (agent, skill or rule file). Show the user the diffs; apply the ones they accept.
3. Invoke `gstack-retro` and `gstack-learn` to save project patterns.
4. Write `14-retro.md`: what was slow, what broke, what changed.

## The fast path (classes 0–3: a change to an existing POC)

1. Start the run and triage as in stage 0. **CP0.**
2. Invoke one `engineer` subagent for the change.
3. Run only the reviewers the class names (none for 0–1; `measurement-editor` for 2; for 3, the area's named seat: `risk-compliance`, `legal-counsel` or `security-engineer`).
4. One fix round, then stop.
5. Commit with the proof in the message. Retro: update the class clock in `factory/triage-rules.md` only if this class has 3+ measured runs.

## The ledger (`OWED.md`)

You are its only writer. After any compliance stage:
- Read the `## Conditions` section of each seat's output.
- **Merge duplicates** (the same condition from two seats becomes one row, with both seats in "Set by").
- Give each new row the next free ID (`OWE-001`, … never reused) and a real **Due** date from the stage dates.
- State `open`. Close a row only when the seat that set it reports it `Closed` with evidence.
