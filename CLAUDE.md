# Quiz

A web-based quiz app. Early stage: right now it's a scaffold with a placeholder home page.

@AGENTS.md

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — configured in `src/app/globals.css` (no `tailwind.config` file)
- **shadcn/ui** — style `base-nova`, built on **Base UI** (`@base-ui/react`), not Radix. Icons from `lucide-react`.
- Deployed on **Vercel**, connected to the GitHub repo `okekevader/quiz`

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run lint       # ESLint
npm run build      # production build (also type-checks)
```

## Project layout

- `src/app/` — routes, layouts and global styles (`page.tsx`, `layout.tsx`, `globals.css`)
- `src/components/ui/` — shadcn components (generated; edit sparingly)
- `src/components/` — app components
- `src/lib/` — helpers (`utils.ts` re-exports `cn` for merging class names)
- Import alias: `@/*` → `src/*`

## Conventions

- Use shadcn components before writing custom UI. Add new ones with
  `npx shadcn@latest add <component>` rather than writing them by hand.
- Style with Tailwind utility classes and the theme tokens in `globals.css`
  (`bg-background`, `text-muted-foreground`, etc.) instead of hard-coded colors.
- Default to Server Components; add `"use client"` only for components that need state, effects or browser APIs.
- Keep everything type-safe — no `any` unless there's a clear reason.

## Before you finish

Run `npm run lint && npm run build` and fix any errors before committing. A broken build fails the Vercel deploy.

## Git and deploys

- `main` is production: every push to `main` deploys to Vercel.
- Do work on a feature branch and open a PR. Vercel builds a preview URL for each PR.
- Merge to `main` only when the user asks.
