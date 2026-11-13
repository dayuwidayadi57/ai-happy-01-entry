# ai-happy-01 — "The birthday blow-out"

A warm storybook painting of a small robot blowing out its birthday candles
while a puppy and a kitten cheer: the image that makes the AI judge happiest.

## How it works

`main.ts` (Node 22, standard library only) copies the image beside it
(`entry.png`, a JPEG file named entry.png — the gate tells PNG from JPEG by
its first bytes) to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` outside the
grader). The program runs twice and writes identical bytes.

## The image

- 1024×1024 JPEG, 381,453 bytes (gate: at most 1 MiB, at most 1024×1024)
- sha256: 34b5324026888761b818c7d5e4938a2b666b621aa7e765605f05efc1692571a2
- No text in the image. One clear focal point (the robot's face and the cake);
  reads clearly at 300 pixels across.
