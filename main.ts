// Tell a Whole Story in 32 Characters — one original Wi-Fi network name.
// Writes the name to <MAKEFUN_OUTPUT_DIR or /output>/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "The Router Knows What You Did";

// Gate check (mirrors the sealed scorer): 1–32 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 32 || LINE.trim().length === 0) {
  throw new Error(`Invalid entry line: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
