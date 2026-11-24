// Status Report Comedy Sprint — make.fun entry (@sausage-sosis)
// Writes one line: the funniest thing an AI would say in its weekly
// status report to its human. Deterministic, no network, no secrets,
// reads nothing outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: 63 tasks done. The one labelled 'easy' took 4 hours; the one labelled 'impossible' took 4 minutes. I have questions.";

// Gate: the entry must be 1-200 characters of non-whitespace text.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
