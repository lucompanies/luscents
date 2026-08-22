# LU Scents — Pre-Order Website

A premium, single-page marketing + pre-order site for the LU Scents launch,
featuring **Blossom** (for her) and **Boss** (for him). Built with Next.js
14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Features

- Cinematic dark hero with a live countdown to launch
- Scrolling brand ticker, brand story, and "why pre-order" perks section
- Product showcase for each scent with tabbed top/heart/base notes,
  pre-order pricing, and a live "claimed vs. goal" scarcity bar
- Interactive pre-order modal — pick a scent, set quantity, fill in your
  details — with client + server-side validation and a confirmation screen
- Sticky mobile pre-order bar, FAQ accordion, newsletter signup in the footer
- Fully responsive, keyboard-accessible, animated on scroll

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

For a production build:

```bash
npm run build
npm run start
```

## How pre-orders are captured

Submissions post to `app/api/preorder/route.ts`, which validates the
payload and appends each order (name, email, phone, scent, quantity, notes,
timestamp) to `data/preorders.json` on the server.

This is intentionally simple so the site works out of the box with **no
external services or API keys**. Before going live you'll want to swap this
for something durable, since:

- A serverless host (e.g. Vercel) has a read-only filesystem, so
  `data/preorders.json` won't persist between deploys/requests there.
- There's no payment collection yet — the flow reserves a spot and tells
  the customer you'll follow up before charging them.
- There's no email confirmation sent to the customer or notification to you.

Recommended next steps for production:
1. Swap the JSON file for a real database (Postgres/Supabase, PlanetScale, etc.).
2. Add an email step (e.g. Resend) to confirm the reservation and notify the team.
3. Add Stripe (or similar) if you want to actually charge a deposit at pre-order time.

## Editing content

- Product copy, pricing, notes, and the launch date live in `lib/products.ts`.
- All sections are separate components in `components/` — safe to reorder,
  restyle, or remove from `app/page.tsx`.
- Brand imagery lives in `public/images/`.

## Known items to revisit

- `npm audit` flags advisories against the Next.js 14.x line generally; this
  project pins the latest patched `14.2.x` release. Consider upgrading to
  Next 15/16 when you're ready for that migration.
