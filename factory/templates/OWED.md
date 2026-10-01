# Owed conditions

Copied by the `/poc` runner to the project root as `OWED.md` if it doesn't exist yet. Shared across runs.

A change may ship with a condition attached (a check or a reading due on a date). Each condition is one row. **While a row is `open`, it blocks the next release in its Area.** Only whoever set the condition can close it, proved against the running POC on its due date.

| ID | Condition | Set by | Owner | Area | Due | State | Closed (date, by) |
|---|---|---|---|---|---|---|---|

- ID: `OWE-001`, `OWE-002`, … never reused
- Area: one of the areas in `factory/triage-rules.md` (e.g. Personal data, Money, Sign-in) or a named page or feature
- State: `open` · `closed`
