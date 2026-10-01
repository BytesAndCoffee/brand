# Bytes & Coffee brand

The single source for the Bytes & Coffee look and voice: colour tokens, type, fonts, components, logos and the shipped social images. bytes.coffee, the blog, Bad Decisions, Regret and Daily Regrets all draw from here.

**Start with the [brand book](docs/brand-book.md).** It covers the family of names, voice, colour rules, type, motifs, layout, media sizes, motion and accessibility.

## What's here

| Path | What |
|---|---|
| `tokens/tokens.json` | The source of truth: every colour (Espresso and Paper themes), type style, space, radius and shadow, each with a usage note |
| `tokens/tokens.css` | Generated CSS custom properties and type-style classes. Run `python3 scripts/build_tokens.py` after editing the JSON |
| `css/fonts.css` | `@font-face` rules for the self-hosted fonts |
| `css/components.css` | Wordmark, buttons, code chip, headline, card stack, command line (`bc-*` classes) |
| `fonts/` | Fraunces, Manrope and DM Mono, each with its OFL licence |
| `assets/logos/`, `assets/social/` | Avatars and the shipped link previews and banners |
| `docs/components/` | When and how to use each component |
| `examples/index.html` | Every component on one page, with a theme toggle |
| `sizzle/` | The brand on one page: `bytes-coffee-sizzle.pdf`, its PNG preview, and the `sizzle.html` source. Rebuild with `node scripts/build_sizzle.js` (needs Playwright) |

## Using it

```html
<link rel="stylesheet" href="css/fonts.css">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="css/components.css">
```

Set `data-theme="light"` or `data-theme="dark"` on `<html>` to force a theme; with neither, it follows the viewer's system setting. In Python (Pillow cards, bots), read `tokens/tokens.json` directly instead of copying hex values.

For a project in another repo, either vendor a tagged copy or, once this repo is public, load the CSS from a pinned tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BytesAndCoffee/brand@v1.0.0/tokens/tokens.css">
```

## Changing the brand

Edit `tokens/tokens.json` or the brand book, run `python3 scripts/build_tokens.py`, check `examples/index.html` in both themes, and tag a release. Keep every text colour pair at 4.5:1 or better in both themes, as the token notes describe.

## Licences

Fonts are under the SIL Open Font License 1.1 (see each `OFL.txt`). The Bytes & Coffee, Bad Decisions and Daily Regrets names, marks and images are Michael Yazdani's.
