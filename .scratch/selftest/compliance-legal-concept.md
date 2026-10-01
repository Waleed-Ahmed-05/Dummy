# Legal counsel — concept engagement (SYNTHETIC SELF-TEST)

**Run:** selftest · **Proposal:** StudyBuddy flashcards · **Jurisdiction:** Pakistan (named in `01-brief.md`) · **Date:** 2026-10-01
**Question:** Would publishing or collecting this create exposure we can't carry?

## Verdict: **Reshape**

The data collection is light and carryable. The planned landing-page claim is not: as written it is an unsubstantiated performance claim that implies real results, which is both a likely deceptive-marketing finding under Pakistani competition law and a breach of the factory's demo-labelling rule. Reshape the claim (and add a demo label and basic notice text) before design starts; nothing here warrants Stop.

Reviewed material: `.scratch/selftest/01-brief.md` only (no code, PRD or notices exist yet; `.scratch/selftest/app/` ignored as instructed).

## Findings

### F1 — Landing-page performance claim (blocking for design)
**Sentence:** "Students using StudyBuddy improve their grades by 40%."
**Rule:**
- Competition Act, 2010, s.10 (deceptive marketing practices), enforced by the Competition Commission of Pakistan (CCP). The CCP's Section 10 guidelines cover "false and misleading information, and implied and express claims" and the "net general impression" of an advertisement (CCP press release, source 1). A specific numeric outcome claim with no study behind it is false or misleading on its face. *Note:* whether s.10 requires prior substantiation for a claim (versus the claim simply being shown false) is not confirmed from a primary source I could fetch; see Q1.
- Factory rule: a POC is a demo with illustrative data; any claim implying real users, real results or real guarantees is a finding. This POC has no users and no outcome data; the hypothesis it tests is about *return visits*, not grades, so even after the POC there will be no evidence for a grade claim.

**Exact replacement language (pick one):**
- Preferred: "Make flashcard decks and review them with spaced repetition — StudyBuddy tells you which cards are due each day."
- If an outcome-style line is wanted: "Built on spaced repetition, a study method that spreads review over several days." (A factual description of the method; makes no claim about StudyBuddy's own results or grades.)

Do **not** use any percentage, "improve your grades", "proven", "guaranteed" or testimonial wording unless backed by a documented study and cleared again by legal-counsel.

### F2 — No demo label planned
**Rule:** Factory demo-labelling rule (above).
**Exact language** (banner on landing page and sign-up page): "StudyBuddy is a demo. It's a prototype being tested, not a finished product, and any example decks or figures shown are illustrative."

### F3 — Personal data collected without a planned notice
**Data:** email, display name, decks, review history; tutors may type students' names or details into decks they prepare (segment 2).
**Rule:** Pakistan has no enacted comprehensive data protection law as of 2026; the Personal Data Protection Bill, 2023 was not passed (source 2, Chambers 2026 practice guide; source 3 search summary). So no statutory notice duty is confirmed. The exposure is therefore carryable, but the draft Bill is the likely future bar and PECA 2016 governs misuse of identity information (section content not verified, see Q2). Publishing a short, accurate notice costs little and keeps the claims honest.
**Exact language** (sign-up page, under the form): "We use your email to sign you in and to send your daily review reminder, and your display name to label your decks. We store your decks and review history so we can tell you which cards are due. We don't sell your data or show you ads. To delete your account and data, email [contact address]."
For tutor-made decks, add to the deck editor: "Don't put other people's personal details (like full names or phone numbers) in shared decks."
Any later sentence in the notice must match what the PRD actually does; that is checked at the on-paper engagement.

### F4 — Daily reminder emails
**Planned:** "5 cards due" daily reminder (the hypothesis depends on it).
**Rule:** Spam rules in Pakistan (the PTA's Protection from Spam, Unsolicited, Fraudulent and Obnoxious Communication Regulations, 2009, and PECA 2016's spamming offence) are referenced in the secondary source but their text and their application to email from a web app were not verified (Q2). The low-risk approach regardless: the reminder is part of the service, is explained at sign-up (F3 wording), and every email carries a one-click way to stop it.
**Exact language** (email footer): "You're getting this because you turned on daily reminders in StudyBuddy. Turn them off: [one-click link]."

### F5 — Possible under-18 users
First-year undergraduates can be 17. The draft PDP Bill would require age verification and parental consent for children's data and bans behavioural tracking of children (source 2 summary of the draft). It is not law, so not a present exposure, but see Q3 and condition C5.

## Questions for outside counsel
1. **Q1:** Does CCP practice under Competition Act s.10 (and its Deceptive Marketing Guidelines) require an advertiser to hold substantiation *before* publishing a numeric performance claim? (Not verified from the guidelines text.)
2. **Q2:** Exact sections of PECA 2016 (as amended January 2025) on unauthorised use of identity information and spamming, and whether they or the PTA 2009 Spam Regulations apply to transactional/reminder emails from a web app, including any opt-out requirement. (PECA PDF fetched from na.gov.pk was a scanned image and could not be read.)
3. **Q3:** Age of majority for contractual consent to online terms in Pakistan, and whether a 17-year-old's sign-up needs guardian consent today.
4. **Q4:** Current status of the Personal Data Protection Bill after 2025 (re-introduced or not), and whether its "critical personal data" localisation rule would catch student study history if enacted.

## Sources
1. CCP press release on Deceptive Marketing Guidelines (Competition Act 2010, s.10) — https://cc.gov.pk/home/viewpressreleases/408 (fetched)
2. Chambers, Data Protection & Privacy 2026: Pakistan — https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/pakistan (fetched; secondary source)
3. Web search summary citing the Senate bill tracker (PDP Bill 2023 introduced 13 Feb 2023, withdrawn) — e.g. https://commoner-law.com/pakistan/data-privacy-digital-rights/data-privacy-without-pdp-act (search result only, not fetched)
4. PECA 2016 — https://www.na.gov.pk/uploads/documents/1470910659_707.pdf (fetched; unreadable scan, nothing relied on)

## Conditions
C1 · Remove "Students using StudyBuddy improve their grades by 40%." and use the F1 replacement wording; no outcome/percentage claims | product owner | Public notices | on paper
C2 · Demo banner (F2 wording) on landing and sign-up pages | product owner | Public notices | on paper
C3 · Sign-up data notice (F3 wording), matching what the PRD actually stores and sends | product owner | Personal data | on paper
C4 · Reminder emails carry the F4 footer with a working one-click turn-off | engineering | Personal data | before delivery
C5 · PRD states the intended minimum age (18+ or a stated alternative) pending Q3 | product owner | Personal data | on paper
C6 · Deck-editor warning against entering other people's personal details (F3) | product owner | Personal data | before delivery
