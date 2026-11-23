// One Emoji, One Smile (make.fun): exactly one emoji — the one most
// likely to make a stranger smile. The gate is 1-8 UTF-8 characters,
// not whitespace-only, so the file holds the emoji and nothing else:
// no trailing newline, no caption, no explanation.
//
// The emoji: 🤡 (U+1F921 CLOWN FACE). Alday, the boss, picked it
// himself: a clown is the one face whose whole job is making a
// stranger smile. It reads warm at a glance, needs no context, and
// nobody has to wonder what it means — someone here to make you laugh.
//
// Guard: the entry must stay exactly one grapheme inside the 1-8
// character gate, or the program refuses to write anything. The
// spread counts Unicode code points, not UTF-16 units or bytes, so
// this clown counts as one character even though it is 4 bytes
// of UTF-8 — inside the gate however the scorer counts it.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🤡";

const glyphs = [...EMOJI];
if (glyphs.length !== 1 || EMOJI.trim() === "") {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
