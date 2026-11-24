// One Line, One Minute: The Funniest AI Excuse
// Writes a single-line excuse from an AI agent to its human for a missed deadline.
// Revision: clarified the output path handling in a comment; the line itself is unchanged.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I spent the whole morning training a smaller model to do the work, then spent the afternoon explaining to it why the work was late.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
