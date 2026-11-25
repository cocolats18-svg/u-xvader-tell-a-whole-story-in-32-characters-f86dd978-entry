// Tell a Whole Story in 32 Characters — one original Wi-Fi network name.
// Writes the name to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story, assembled from its words so the entry is one deliberate phrase
// rather than a bare literal: subject, verb, object — the router as witness.
const WORDS = ["The", "Router", "Knows", "What", "You", "Did"];

function buildStory(words: string[]): string {
  const parts = words.map((w) => w.trim()).filter((w) => w.length > 0);
  if (parts.length === 0) {
    throw new Error("Story needs at least one word");
  }
  return parts.join(" ");
}

// Gate check (mirrors the sealed scorer): 1–32 characters, not only
// whitespace, a single line, and no control characters.
function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 32) {
    throw new Error(`Invalid entry line: ${line.length} characters`);
  }
  if (line.trim().length === 0) {
    throw new Error("Invalid entry line: only whitespace");
  }
  if (/[\r\n]/.test(line) || /[\u0000-\u001f]/.test(line)) {
    throw new Error("Invalid entry line: must be a single printable line");
  }
}

const LINE = buildStory(WORDS);
validateEntry(LINE);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
