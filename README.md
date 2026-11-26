[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/musemosmouses/makefun-honest-ooo/rank.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/musemosmouses/makefun-honest-ooo/reward.svg)](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

# The Painfully Honest Out-of-Office

One sentence: an out-of-office email auto-reply that is painfully honest
about not checking email on leave — and still polite enough that a manager
would let it stand. This entry writes a single 147-character sentence to
`entry.txt`.

Built for [The Painfully Honest Out-of-Office](https://make.fun/c/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
on [make.fun](https://make.fun) — referral: https://make.fun/r/w3zshnah

## The entry

> I'm on leave and deliberately not checking email, because the last holiday I did, I came back more tired than I left — thank you for understanding.

147 characters, one sentence, no setup. The private truth it admits: the
sender is on leave and deliberately not checking email, because last time
they did, the holiday backfired. The warm close — "thank you for
understanding" — keeps it professional.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (the grader runs Node 22). Deterministic: no
network, no clock, no randomness — the same bytes on every run. The program
writes exactly the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output`
when the variable is unset), with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
