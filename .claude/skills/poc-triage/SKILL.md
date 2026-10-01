---
name: poc-triage
description: Classify a change to a POC (class L / 3 / 2 / 1 / 0) by applying factory/triage-rules.md, showing which rule matched and why, so the user can confirm the path at CP0. Used by the /poc runner at the start of every run; also usable on its own for a follow-up change.
---

# POC triage

Apply the written rules. Don't judge. The class decides the path and the reviewers; the user confirms it at CP0, and no agent makes the final call.

The rules live in `factory/triage-rules.md`. Read it fresh every time; never work from memory of an earlier version, because the retro amends it.

## Process

### 1. Gather the change

Work from what you are given: a proposal, a change request, a diff, or a list of files. If it's a proposal for a new project, **Rule 0 applies: class L**. Skip to step 4.

If you were given only a description, find the files it will touch (Grep / Glob). Triage is about **what the change touches**, not how big it sounds.

### 2. Check classes top down

Go down the class table in order (L, 3, 2, 1, 0). The **first** class whose rule matches wins. For class 3, check every row of the protected-areas table; a change can touch several areas, and each one adds its named reviewer.

If you're unsure between two classes, pick the **higher** one and say what made you unsure.

### 3. Collect evidence

For the matched class, list the concrete evidence: file paths, the field, route or text being changed, and which rule row it matches. A class with no evidence is not a class.

### 4. Report

Output exactly this block (the /poc runner reads it):

```
TRIAGE
Class: <L | 3 | 2 | 1 | 0>
Matched rule: <the row of triage-rules.md that matched>
Evidence:
- <file or area> — <what about it matches>
Path: <the ladder | fast>
Reviewers: <from the tables; "—" if none>
Estimate: <ladder: total from factory/estimates.md | fast: the class clock from triage-rules.md>
Unsure: <"no", or what could change the class>
```

Then stop. Don't start the work: the runner takes the class to CP0 for the user to confirm, change, or add/cut a reviewer.
