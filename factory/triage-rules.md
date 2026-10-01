# Triage rules

Read by the `poc-triage` skill. The skill applies these rules, shows which rule matched and why, and proposes a class. The user confirms or changes it at CP0. No agent makes the final call.

## Rule 0 — new proposals

A new project proposal is always **class L**. Triage below applies only to changes made to an existing POC.

## How to decide

Check the classes from the top down. The first class whose rule matches wins. If unsure between two classes, pick the higher one and say why.

| Class | The change touches | Path | Reviewed by | Clock |
|---|---|---|---|---|
| L · new surface | a new page, product, price or stored data field; or several surfaces that need a design | the ladder | compliance from concept to after delivery | hours |
| 3 · protected | any protected area (list below) | fast | the reviewer that area names | 30–50 min |
| 2 · figure | a number a customer reads | fast | measurement editor | 25–40 min |
| 1 · behaviour | an interaction, a control or a route — nothing stored, no figure | fast | — | 15–30 min |
| 0 · cosmetic | styling, copy, layout only | fast | — | 5–15 min |

## Protected areas (class 3)

| Area | Examples | Named reviewer |
|---|---|---|
| Personal data | names, emails, phone numbers, addresses, IDs, anything about a person | risk-compliance + legal-counsel |
| Money | prices shown, payments, billing, refunds | risk-compliance |
| Sign-in | login, sessions, passwords, roles and permissions | security-reviewer |
| A new route | a new API endpoint or URL that accepts input | security-reviewer |
| Secrets | API keys, tokens, `.env` files, credentials | security-reviewer |
| Public notices | privacy notice, terms, cookie banner, any public claim | legal-counsel |

## What the skill must output

- **Class:** L / 3 / 2 / 1 / 0
- **Matched rule:** the row above that matched
- **Evidence:** the files or areas the change touches
- **Path and reviewers:** from the tables above
- **Estimate:** from `factory/estimates.md`