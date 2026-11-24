import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown (u-mfnakmal-dad-joke-showdown-1d2ce3e5)
// One dad joke, 111 characters, written exactly as judged: no trailing
// newline, UTF-8, no BOM. Deterministic: the same bytes on every run.
const JOKE =
  "My dad opens the umbrella indoors for luck — he says it's the only forecast he trusts: a 100% chance of groans.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
