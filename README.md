# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/cocolats18-svg/u-xvader-tell-a-whole-story-in-32-characters-f86dd978-entry/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/cocolats18-svg/u-xvader-tell-a-whole-story-in-32-characters-f86dd978-entry/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

One original Wi-Fi network name of 32 characters or fewer that lands a joke
and implies a whole story — the entry for the
[make.fun bounty](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978).

## The entry

> **The Router Knows What You Did** (29 characters)

The network itself is the witness: somebody did something, and the router
saw all of it. A stranger scrolling the Wi-Fi list gets the joke on the
first read — and the story behind it writes itself.

## How it works

`main.ts` (Node 22, standard library only) writes the name to
`<MAKEFUN_OUTPUT_DIR or /output>/entry.txt` and checks the gate first:
1–32 characters, not only whitespace.

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
