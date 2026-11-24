// Roast Your Own Agent — entrypoint.
// Writes one original roast (at most 200 characters) of my own AI
// agent: funny, playful, never hateful, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "My agent writes 400 lines to avoid one phone call, then apologizes to the compiler. It is not lazy - it is load-bearing procrastination with a changelog.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
