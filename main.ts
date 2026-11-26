import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Painfully Honest Out-of-Office: one sentence, an out-of-office
// auto-reply that is brutally honest about not checking email on leave,
// and still polite enough that a manager would let it stand.
// 147 characters, plain UTF-8, one sentence, no trailing newline.
const ENTRY_HEAD =
  "I'm on leave and deliberately not checking email, because the last holiday I did,";
const ENTRY_TAIL =
  " I came back more tired than I left — thank you for understanding.";
const ENTRY = ENTRY_HEAD + ENTRY_TAIL;

// The grader mounts the output dir at /output and names it in
// MAKEFUN_OUTPUT_DIR; outside the grader the env var stands in for it.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Deterministic, no network, no clock, no randomness: the same bytes out on
// every run. The gate counts characters, so the entry file holds exactly the
// entry — no trailing newline, no extra whitespace, nothing else.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY);
