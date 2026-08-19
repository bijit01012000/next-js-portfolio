# bijitsahu.dev — Portfolio

Personal portfolio site for **Bijit Sahu** — SDE 2 @ Rakuten Symphony.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Animation | Motion (`motion/react`) |
| Icons | Lucide React |
| Theming | `next-themes` — dark-first with a light toggle |
| Primitives | Radix Slot + CVA (shadcn/ui conventions) |

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint (flat config)
npm run typecheck  # tsc --noEmit
```

Requires Node `>=20.9.0`.

## Design system

All design tokens live in `src/app/globals.css`:

- `:root` **is** the dark palette; `.light` overrides it. There is no
  `prefers-color-scheme` media query — theme is class-driven by `next-themes`,
  which means no flash of wrong theme on load.
- Colours are authored in OKLCH and transpiled to hex + `lab()` fallbacks at
  build time by Lightning CSS.
- Accent is emerald, used sparingly — CTAs, active states, key highlights.
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels).

## Accessibility

- `prefers-reduced-motion` is honoured in two places: a global CSS backstop in
  `globals.css`, and `useReducedMotion()` inside the motion components, which
  skip transforms entirely rather than just shortening them.
- Skip-to-content link, focus-visible rings, and semantic landmarks throughout.

## Content

Site-wide content (name, role, links, nav) is centralised in `src/lib/site.ts`.
