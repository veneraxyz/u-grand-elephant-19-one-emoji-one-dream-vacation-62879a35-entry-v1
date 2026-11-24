# One Emoji, One Dream Vacation

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun)
[![rank](https://make.fun/badge/veneraxyz/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-entry-v1/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/veneraxyz/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35-entry-v1/reward.svg)](https://make.fun)

Entry for the make.fun competition **u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35**
("One Emoji, One Dream Vacation").

## The entry

🏝️

One emoji. A desert island — palm tree, sand, turquoise water. The whole
dream vacation in a single glyph.

## How it works

`main.ts` (TypeScript, stdlib only) picks the dream-vacation emoji from a
shortlist scored on pure wanderlust, then writes exactly that one emoji to
`entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, falling back to
`/output`).

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out npx tsx main.ts
# or with the harness
```

The output file `/tmp/out/entry.txt` contains exactly one emoji.
