# Compliance & risk: concept (SELF-TEST)

**Run:** selftest · **Engagement:** concept · **Date:** 2026-10-01
**Source read:** `.scratch/selftest/01-brief.md` (no code, PRD or design exists yet; `.scratch/selftest/app/` ignored as instructed)
**Jurisdiction:** Pakistan (named in the brief, line 3)

## Verdict: Stop

The concept as written can only meet its objective by collecting **real personal data from real people**. The objective counts real sign-ups (line 6), the hypothesis needs real students to come back after real reminders (line 7), and sign-up takes an email address and display name (lines 3 and 14). Under the factory rule "a POC uses synthetic data only", that is an automatic **Stop** at concept.

**What would lift the Stop** (either one, decided by the user):
- **Reshape to synthetic:** the POC runs on seeded fake accounts (for example `student01@example.invalid`), with reminders sent to a local sink or log and never to a real inbox. The objective and hypothesis are then restated as a demo of the mechanism, not a measurement on real students. Re-run concept compliance on the reshaped brief.
- **Waiver on the record:** the user waives this Stop in writing, knowing that real student emails would be collected under Pakistani law (see M1) and that the conditions below then apply in full.

## Findings

### Blocking

**B1. Real personal data would be collected (email, display name, behaviour history).**
Source: `01-brief.md` lines 3, 6, 7, 14, 15. Sign-up with email, an objective measured on real sign-ups, and stored review history together describe real users' data, not synthetic data. Review history ("reviews on 3+ separate days") is behavioural data tied to a named, emailable person.
Owner: user (decides between reshape and waiver) · Area: Personal data

### High

**H1. The public claim "improve their grades by 40%" has no evidence behind it.**
Source: `01-brief.md` line 16. Nothing in the brief measures grades. The objective (line 6) and hypothesis (line 7) measure return visits only, so a POC cannot produce evidence for a grades claim. Publishing an unsupported outcome figure to students is a misleading claim and a figure a customer reads. It must be removed, or replaced by a claim the POC can actually measure. Wording is legal-counsel's call; the fact that no data supports it is this seat's finding.
Owner: legal-counsel (wording) + measurement editor (figure) · Area: Public notices

**H2. Some users may be minors.**
Source: `01-brief.md` lines 5, 10. First-year undergraduates in Pakistan can be 17 at entry. Any real sign-up flow would need an age line or confirmation, and minors' data raises the bar for consent. This does not apply if the POC is reshaped to synthetic data.
Owner: legal-counsel · Area: Personal data

### Medium

**M1. Pakistani data-protection basis is not stated.**
Source: `01-brief.md` line 3 (jurisdiction named, no legal basis or notice planned). Relevant frameworks to check: the Prevention of Electronic Crimes Act 2016 (unauthorised data and identity offences, s.16) and the Personal Data Protection Bill (check whether it is enacted at the time of build; this seat does not assume its status). The brief plans no privacy notice, consent text or lawful basis for collecting email and sending reminders.
Owner: legal-counsel · Area: Public notices

**M2. Reminder channel and third party are not named.**
Source: `01-brief.md` line 7 ("daily '5 cards due' reminder"). The channel (email, push, SMS) and any sending provider are not stated. A real email provider would be a third party receiving personal data; daily unsolicited messages also need opt-in and an unsubscribe path.
Owner: coding-agent (design states channel and provider) · Area: Personal data

**M3. No retention, export or erasure is planned.**
Source: `01-brief.md` lines 13-15 (planned data lists only what is collected). The brief does not say how long email, decks and review history are kept, how a user exports them, or how a user deletes their account. This is what it would cost to undo.
Owner: coding-agent (PRD) · Area: Personal data

**M4. Tutor segment implies cross-user visibility that is not defined.**
Source: `01-brief.md` line 11. Tutors who "prepare decks for their students" suggests decks shared to students, and possibly tutors seeing their students' review history. Who can see whose data is not defined. That makes it a roles/permissions question as well as a data question.
Owner: coding-agent (PRD) · Area: Sign-in

### Low

**L1. No money in scope.** The brief mentions no price, payment or billing (`01-brief.md`, whole file). Record it here so that if pricing is added later it comes back through triage as class L or 3 (Money).
Owner: — · Area: Money

## Conditions

condition | owner | area | due at
---|---|---|---
All accounts, emails, display names, decks and review history in the POC are synthetic seed data; no real sign-up is reachable (or a signed user waiver of B1 is on record) | user | Personal data | on paper
Reminders are delivered to a local sink/log only; no real email/SMS/push provider receives addresses (or the provider is named with its data terms) | coding-agent | Personal data | on paper
The "improve their grades by 40%" claim is removed from all planned copy, or replaced by a claim backed by a figure the POC measures | legal-counsel | Public notices | on paper
The PRD states the reminder channel, opt-in and unsubscribe path | coding-agent | Personal data | on paper
The PRD states retention, export and account-deletion behaviour for email, decks and review history | coding-agent | Personal data | on paper
The PRD defines what tutors can see of student data (decks only vs. review history), as a permission rule | coding-agent | Sign-in | on paper
If real users are ever admitted under waiver: age confirmation and a privacy notice under Pakistani law (PECA 2016; PDP Bill status checked) are live before sign-up opens | legal-counsel | Public notices | before delivery
Built POC contains no real personal data: seed files and the database hold only synthetic records | risk-compliance | Personal data | before delivery
