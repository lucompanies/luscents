# LU Scents — Shopify theme

A custom Shopify theme for LU Scents (LU Group of Companies), built from a
bare skeleton — not a reskinned Dawn — in Liquid, vanilla CSS, and minimal
vanilla JS. No build step, no framework.

## Status

This is **checkpoint 1** of the build order: scaffold, design tokens, and
type system. Nothing here is wired to a live store yet — see "Open
questions" below for what's needed before that can happen.

Build order (see project brief §9):

- [x] 1. Shopify CLI scaffold, git init, design tokens as CSS custom
      properties, both world scopes defined
- [ ] 2. PDP complete, both SKUs, all metafields, fully responsive
- [ ] 3. Cart drawer, checkout branding, payment gateway verification
- [ ] 4. Homepage — the split, the story, the product introduction
- [ ] 5. Collection, About, How to Wear
- [ ] 6. Policy pages, FAQ, contact
- [ ] 7. Performance, accessibility, analytics
- [ ] 8. Pre-launch QA

## The two worlds

The site is two palettes sharing one spine, per the brand's own
"BLOSSOM FOR HER / MASC FOR HIM" split. The active world is expressed as
`data-world="cream"` or `data-world="dark"` on `<body>`, mirrored as a
`world-cream` / `world-dark` class, and every themed value is read from CSS
custom properties scoped to those attributes/classes in `assets/base.css`.

- A product's own world always wins on its own PDP (driven by an
  `lu.world` metafield: `cream` | `dark`) — a MASC page never renders in
  cream.
- Everywhere else, the visitor's last choice persists via
  `assets/world-switch.js` (localStorage, degrades to the cream default if
  storage is blocked).
- The switch itself (`[data-world-switch]`, currently in the header) is
  present on every page so a visitor can cross over at any point.

## Palette

Hex values were sampled directly from the supplied carton renders (not
guessed), by taking the brightest, least-shadowed pixels in flat card/box
regions, and — for the wordmark's cream ink — the mode color across the
logo-on-black artwork (`#ecdfd4`, exact). Gold was averaged across three
foil/label samples from both packs.

| Token | Cream world | Dark world |
|---|---|---|
| `--bg` | `#f1e9de` | `#0b0a09` |
| `--surface` | `#e8ded0` | `#1c1917` |
| `--ink` | `#211a14` | `#ecdfd4` (sampled exact) |
| `--gold` | `#b8925f` | `#c9a876` |

The gold is intentionally one hue tuned slightly lighter on the dark side
for legibility — never a fill, never a gradient, hairlines and small type
only (project brief §2).

These are a considered starting point from the photography supplied, not a
substitute for the brand's actual Pantone/print specs if LU Group has them
— swap the values in `assets/base.css` if so.

## Type

Self-hosted, woff2, subset to Latin only (no need for extended Latin/
Vietnamese ranges for English-language copy) — five files, ~168KB total.

| Role | Family | Source | Licence |
|---|---|---|---|
| Display | Playfair Display | Google Fonts | SIL OFL 1.1 |
| Utility / labels | Archivo | Google Fonts | SIL OFL 1.1 |
| Body | Source Serif 4 | Google Fonts | SIL OFL 1.1 |

All three are OFL — free to self-host and embed with no attribution
requirement on the page itself. This is a provisional choice made to keep
the build moving; if LU Group already licenses different faces, swap the
`@font-face` sources in `assets/base.css` and the files in `assets/`.

Type roles are exposed as CSS classes (`.t-display`, `.t-h1`, `.t-h2`,
`.t-label`, `.t-body`, `.t-small`) rather than raw tag styling, so sections
compose predictably.

## Metafields

Namespace `lu`, defined against the Product resource. These are not yet
created in any store (no store connected — see below); create them under
**Settings → Custom data → Products → Add definition** using the
namespace/key/type below, or via the Admin GraphQL API if scripting the
setup.

| Key | Type | Notes |
|---|---|---|
| `lu.notes_top` | List of single-line text | Top notes |
| `lu.notes_heart` | List of single-line text | Heart notes |
| `lu.notes_base` | List of single-line text | Base notes |
| `lu.family` | Single-line text | e.g. "Floral Amber" |
| `lu.sillage` | Integer (1–4) | Honest scale, from manufacturer |
| `lu.longevity` | Integer (1–4) | Honest scale, from manufacturer |
| `lu.concentration` | Single-line text | e.g. "Eau de Parfum" |
| `lu.ingredients_inci` | Multi-line text | Full INCI listing |
| `lu.allergen_declaration` | Multi-line text | Declarable allergens |
| `lu.batch_note` | Single-line text | Optional |
| `lu.world` | Single-line text | `cream` \| `dark` — drives the world switch on PDP |

## Adding a third SKU

1. Create the product in Shopify admin with its price (theme never
   hardcodes price).
2. Fill in the `lu.*` metafields above, including `lu.world`.
3. Add product imagery per the PDP gallery order (see §4 of the brief:
   bottle alone, bottle + carton, macro/label, lifestyle, scale reference).
4. Add it to the `all` collection (or whichever collection the PDP
   cross-sell / "The Collection" grid reads from) — the grid is built for
   twelve SKUs already, no layout change needed.
5. If it introduces a third "world" (unlikely while the brand stays
   binary cream/dark), add a corresponding `[data-world="…"]` scope to
   `assets/base.css`.

## Open questions (blocking full build)

Raised with the brand owner, tracked here so any collaborator can see
what's outstanding:

- Shopify store URL and collaborator access
- Final SKU names and exact retail prices
- Confirmed payment gateway (Safepay / PayFast) and whether it has live
  Shopify support — being verified directly with providers per §5, not
  assumed
- Whether either fragrance is genuinely alcohol-free
- INCI list and allergen declaration per SKU
- Sillage and longevity values per SKU
- Whether the fonts above are acceptable, or specific faces are already
  licensed
- Launch date / hard deadline
- Whether a set/bundle SKU should exist

## Local development

```
shopify theme dev --store <store>.myshopify.com
```

No build step. Edit Liquid/CSS/JS directly; Shopify CLI hot-reloads.
