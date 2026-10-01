Bytes & Coffee is Michael Yazdani's independent studio name: things he makes, writes, and stays up too late for. The brand is warm, dark, and bookish on the outside, and precise on the inside. It should feel like a well-made thing someone built for fun: care you can see, stakes you can laugh at.

> A little code. A *lot* of coffee.

## The family

One parent brand, with sub-brands that borrow its palette and type.

| Name | What it is | Where | How to set the name |
|---|---|---|---|
| **Bytes & Coffee** | The parent brand and studio | bytes.coffee | B tile + two-line wordmark: `BYTES &` in `ink`, `COFFEE` in `orange` |
| **Bytes & Coffee** (blog) | Notes, links, and longer thoughts | blog.bytes.coffee | Same wordmark; tagline "Notes, links, and longer thoughts." |
| **Bad Decisions** | An absurdly overengineered party game engine | bytes.coffee/bad-decisions | B tile + `BAD` / `DECISIONS`, second line in `orange` |
| **Peer Pressure** | Bad Decisions' real-time multiplayer | …/peerpressure | Plain type, sentence case. Never its own logo. |
| **Regret** | The terminal client | `brew install bytesandcoffee/tap/regret` | Lowercase `regret` in `code` when it's the command; "Regret" in prose |
| **Daily Regrets** | A Bluesky bot, one card every morning | @regret.bytes.coffee | Calendar-page tile with an italic *R*; `DAILY` / `REGRETS` |

Write the parent as **Bytes & Coffee** in prose (ampersand, spaced). `BytesAndCoffee` is only the GitHub handle; `bytes.coffee` is only the domain and the Bluesky handle.

## Voice

Dry, self-aware, and exact. The joke is always the mismatch between how silly the thing is and how seriously it was built. The writing is never cruel, and never hypes.

- **Understate, then commit.** "An absurdly overengineered open-source party game engine." "Questionable ideas executed with unreasonable care." "Durable embarrassment."
- **Say it plainly and briefly.** Short declarative sentences. Headlines end with a period, even the fragments: "Make a terrible decision." "Same room. Full screen." "Good things. Freshly brewed."
- **First person on the blog, second person in products.** Michael writes as "I" ("I made a joke based on a picture on Discord"). Products speak to "you" ("Deal your own", "Regret alone").
- **Keep the game's own vocabulary.** A result is a *consequence*. The judge is the *Responsible Adult*. Leaving is *Regret alone*. Winning is *Peer pressure worked on Sam.* Errors *falter*: "Peer Pressure faltered: …". Use these words consistently; don't swap in generic UI terms.
- **Be honest about the machinery.** Say which agent did what (Claude, Codex), what's local and what's live, and what isn't done yet. Never claim a feature, number, or user that doesn't exist.
- **Code is a word too.** `new()` can sit inside a sentence. Commands are shown exactly as typed.

Don't: exclamation marks in product copy; "revolutionary", "seamless", "supercharge"; emoji as decoration (one ☕ at the end of a bio is the whole allowance); ALL CAPS outside the `kicker` style; punching down. The game's cards are adult, and the brand around them is not.

## Colour

The brand is **espresso, cream, and burnt orange**. Dark (`Espresso`) is the primary theme and every piece of collateral uses it; the website also ships a light `Latte` theme with the same tokens.

- Grounds: `page` for the page, with a radial glow from `page-a` (top-left) through `page-b` to `page-c`. Raised things sit on `panel`; inset wells on `panel-sunk`.
- Text: headlines in `ink`, running text in `text-body`, metadata in `muted`.
- **Orange is for fills and big type.** `orange` is the exact brand value: wipes, cover blocks and the one italic accent word in a headline. As text it is display-only (24px and up).
- **Orange that carries small text uses `orange-fill`**: primary buttons, card fronts, tags. It is a hair deeper in the dark theme so `on-accent` reads at 4.8:1; in the light theme it is the same as `orange`.
- **Small orange text uses `orange-dark`**: links, kickers, the `$` prompt, the letters in the code chip. (It reads peach in the dark theme and deep rust in the light.)
- Text on orange is always `on-accent`, set on `orange-fill` unless it is 24px or larger.
- `accent-deep` is for the underline under a card's answer, pressed states, and Daily Regrets' calendar strip.
- `signal-good` and `signal-bad` appear only with a word ("Posted", "faltered"), never as colour alone.
- Budget: roughly 70% ground, 20% ink and cream, 10% orange. There is never more than one orange hero element on screen.

## Type

Three families, each with one job.

- **Fraunces** (`display`), ExtraBold 800 with tight tracking: headlines, card text, titles. Use `display-xl`, `display-lg` and `title`. Set exactly one word or phrase per headline in `display-accent`: italic, in `orange`, with `font-variation-settings: "WONK" 0, "SOFT" 0` so Fraunces uses its calm italic rather than the wonky alternates. ("Make a *terrible* decision." "Daily *Regrets.*")
- **Manrope** (`sans`): everything people read at length. Use `lead` under a hero, `body` for running text, `label` for buttons and nav.
- **DM Mono** (`mono`): the machine's voice. Use `kicker` for eyebrows (always uppercase, tracked 0.2em, `orange-dark`), `code` for commands, `caption` for URLs, dates and footers.

Headlines use `text-wrap: balance`. Body lines stay near 65 characters. Don't use a fourth family, and don't use Fraunces below 20px.

## Shapes and motifs

- **The card stack.** The signature image: an `orange-fill` front card tilted about +5° over a `panel` back card tilted about −8°, edged in `border-card`. Cards carry a kicker at the top (`CURRENTLY BREWING`, `THE PROMPT`, `TODAY'S CONSEQUENCE`) and a Fraunces line at the bottom. Use `radius-lg` on the web and `radius-card` in 1200px media.
- **The B tile.** An `ink` rounded square (`radius-tile`) with a Fraunces ExtraBold **B** in `on-ink`. This is the mark. In avatars it gets an `orange` underline bar beneath it.
- **The code chip.** Inline code set in a headline (`new()`) sits on `cream` with a `border-card` edge, `radius-chip` and `elev-chip`, in `orange-dark`.
- **Hard shadows on the web.** `elev-button` and `elev-card` are offset with no blur, like paper on a table. Only media uses the soft `elev-media`.
- **Grain.** Social images and video frames get a fractal-noise overlay at about 10% opacity, blended with overlay. The web doesn't.
- **Hairlines.** A single `line` rule separates a footer from content. Never stack rules.

## Layout

- Heroes are left-aligned: kicker, headline, lead, buttons, with the card stack to the right. On phones the stack drops below.
- Space with `space-*`: `space-4` inside cards, `space-5` between sections, `space-6` between the text column and the stack.
- Social images keep a 64–72px margin, a wordmark top-left, a footer rule with the tagline bottom-left and the URL bottom-right in `orange-dark`.
- Keep the bottom-left of profile banners empty (avatars overlap there).

## Media formats

| Asset | Size | Notes |
|---|---|---|
| Link preview (Open Graph) | 1200×630 PNG | Headline left, card stack right, footer rule |
| GitHub social preview | 1280×640 PNG, under 1 MB | Adds an install command in a `panel-sunk` terminal chip and feature chips |
| Bluesky banner | 3000×1000 JPEG, under 1 MB | Text starts about 27% in; bottom-left clear |
| Gravatar header | 3000×1000 JPEG | Shown as a thin centre strip; text starts about 35% in |
| Avatar | 1000–2048px square PNG | B tile on `page`, survives a circle crop |
| Video | 1920×1080 · 1080×1920 · 1080×1080, 30 fps | Orange and ink wipes between scenes; music quiet (about −34 LUFS) |

## Motion

Video and UI share one grammar. Elements *rise*: they fade in while moving up 20–60px and un-blurring from 8px, with a quintic ease-out over about 0.6s. Scenes change with a full-bleed `orange` (or `ink`) slab wiping right to left, tilted 8°. One orchestrated moment per scene; nothing loops or bounces. Respect `prefers-reduced-motion` on the web by showing the resting state.

## Iconography

Line icons only: rounded caps and joins, stroke about 4% of the icon's width, no fill, drawn in `on-accent` on orange or `ink` on the ground. The one house icon is the steaming coffee cup. External links end with ↗. No emoji, no icon fonts, no mascots.

## Accessibility

- Text pairs meet 4.5:1 in both themes (see each token's note). The known exceptions are `orange` as small text (don't use it that way), `muted` on the light `page` (use it at 18px+ there), and `on-accent` on plain dark-theme `orange` (4.1:1, so small text goes on `orange-fill` instead).
- The focus ring is a 2px solid `orange-dark` outline, offset 2px. It reads on every surface in both themes.
- Status always pairs colour with a word.
