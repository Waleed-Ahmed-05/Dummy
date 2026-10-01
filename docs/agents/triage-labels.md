# Triage Labels

The skills speak in terms of five canonical triage roles. This file maps those roles to the actual label strings used in this repo's issue tracker (local markdown: the `Status:` line of each ticket file).

| Label in mattpocock/skills | Label in our tracker | Meaning                                  |
| -------------------------- | -------------------- | ---------------------------------------- |
| `needs-triage`             | `needs-triage`       | Maintainer needs to evaluate this issue  |
| `needs-info`               | `needs-info`         | Waiting on reporter for more information |
| `ready-for-agent`          | `ready-for-agent`    | Fully specified, ready for an AFK agent  |
| `ready-for-human`          | `ready-for-human`    | Requires human implementation            |
| `wontfix`                  | `wontfix`            | Will not be actioned                     |

When a skill mentions a role (e.g. "apply the AFK-ready triage label"), use the corresponding label string from this table.

## Ticket lifecycle (POC factory addition)

`ready-for-agent` → `claimed` → `resolved`

- `to-tickets` creates tickets as `ready-for-agent`.
- An agent sets `claimed` before it starts work on a ticket.
- `resolved` closes a ticket. It is only set once the ticket's tests pass.
- A ticket that will not be built is set to `wontfix`, with one line of reason under `## Comments`.
