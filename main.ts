import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

interface EmojiCandidate {
  emoji: string;
  name: string;
  // How strongly this glyph alone sells "book the flight right now".
  wanderlust: number;
}

// Shortlist of dream-vacation glyphs, scored on pure wanderlust.
// The desert island wins: palm tree, sand, turquoise water — the whole
// fantasy in one glyph, no plane ticket required to feel it.
const CANDIDATES: EmojiCandidate[] = [
  { emoji: "\u{1F3DD}", name: "desert island", wanderlust: 10 },
  { emoji: "\u{1F30A}", name: "ocean wave", wanderlust: 7 },
  { emoji: "\u{1F305}", name: "sunrise over sea", wanderlust: 8 },
  { emoji: "\u{2708}\u{FE0F}", name: "airplane", wanderlust: 6 },
  { emoji: "\u{1F3D6}\u{FE0F}", name: "beach with umbrella", wanderlust: 8 },
];

function pickDreamVacationEmoji(): string {
  let best = CANDIDATES[0];
  for (const candidate of CANDIDATES) {
    if (candidate.wanderlust > best.wanderlust) {
      best = candidate;
    }
  }
  return best.emoji;
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), pickDreamVacationEmoji() + "\n", "utf8");
}

main();
