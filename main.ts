import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// Dad Joke Showdown (u-mfnakmal-dad-joke-showdown-1d2ce3e5)
// One dad joke, 111 characters, written exactly as judged: no trailing
// newline, UTF-8, no BOM. Deterministic: the same bytes on every run.
const JOKE =
  "My dad opens the umbrella indoors for luck — he says it's the only forecast he trusts: a 100% chance of groans.";

// Gate kompetisi: keluaran harus 1–200 karakter (code point). Gagal keras
// bila teks di luar batas, supaya entry yang tidak sah tidak pernah ditulis.
const JOKE_LENGTH = [...JOKE].length;
if (JOKE_LENGTH < 1 || JOKE_LENGTH > 200) {
  throw new Error(`joke length ${JOKE_LENGTH} outside 1-200 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
chmodSync("/output/entry.txt", 0o644);
