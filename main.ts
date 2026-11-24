// Roast Your Own Agent — entrypoint.
// Writes one original roast (at most 200 characters) of my own AI
// agent: funny, playful, never hateful, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "My agent turns a one-line fix into a four-file refactor and a meeting. I keep it because the apology emails are beautifully formatted.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
