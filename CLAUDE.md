# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** personal portfolio website built with **TypeScript** and **styled-components**. The site uses **DatoCMS** as a headless CMS for content management via GraphQL.

### Key Technologies

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5.9**
- **styled-components** with custom theming
- **Framer Motion** for animations
- **DatoCMS** (GraphQL) for content
- **Vercel Analytics & Speed Insights**
- **use-dark-mode** for dark mode toggle

## Development Setup

### Prerequisites

- Node.js >= 24.14.0 (see `.nvmrc`)
- Yarn, npm, or pnpm

### Environment Variables

Create a `.env` file (template exists) with:

- `NEXT_DATOCMS_API_TOKEN` - DatoCMS API token
- `NEXT_PUBLIC_DATOCMS_API_TOKEN` - Public DatoCMS token
- `NEXT_DATOCMS_ENVIRONMENT` - DatoCMS environment (default: main)
- `NEXT_GA_TRACKING_CODE` - Google Analytics tracking code (optional)

### Installation

```bash
yarn install
# or npm install
```

### Available Scripts

```bash
# Development server (hot reloading)
yarn dev
# or npm run dev
# Runs on http://localhost:3000

# Production build
yarn build
# or npm run build

# Start production server
yarn start
# or npm start

# Lint code
yarn lint
# or npm run lint
```

## Code Architecture

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── draft/         # Draft mode toggle endpoint
│   ├── layout.tsx         # Root layout (fetches global data)
│   ├── page.tsx          # Home page
│   └── portfolio/        # Portfolio page
├── components/           # Reusable React components
│   ├── [ComponentName]/  # Each component in its own folder
│   │   ├── Component.tsx
│   │   ├── styles.tsx    # styled-components (or index.ts for simple ones)
│   │   └── (optional) types
│   └── ...
├── lib/                  # Utilities and configuration
│   ├── datocms.ts       # GraphQL client with caching
│   └── registry.tsx     # Styled-components registry for SSR
├── theme/               # Design tokens
│   └── index.ts        # Light/dark theme definitions
├── types/              # TypeScript type definitions
│   ├── model-viewer.d.ts
│   └── styled-components.d.ts
└── (root) types
```

### Component Pattern

Components follow a consistent structure:

- Each component lives in `src/components/[ComponentName]/`
- Component logic: `[ComponentName].tsx`
- Styles with styled-components: `styles.tsx`
- Components export both default and named exports as needed

Common components include:

- `Header` - Site navigation with mobile menu
- `HomeView` - Homepage content
- `PortfolioView` - Portfolio listing
- `Project` - Individual project card
- `DarkModeToggle` - Theme switcher
- `FadeIn` - Animation wrapper
- `PaddedView` - Layout spacing wrapper
- `Providers` - Context providers wrapper

### Styling

- Uses **styled-components** with SSR support (via `StyledComponentsRegistry`)
- Theme provided through `ThemeProvider` (in `Providers.tsx`)
- Theme structure defined in `src/theme/index.ts`:
  - Colors (light/dark modes)
  - Typography scales
  - Spacing scale
  - Breakpoints

### Data Fetching

- GraphQL queries to **DatoCMS**
- `request()` function in `src/lib/datocms.ts` handles all API calls
- Uses React Server Components for data fetching
- Draft mode support via `draftMode()` from `next/headers`
- Includes `includeDrafts`, `excludeInvalid`, and `revalidate` options

### Dark Mode

- Uses `use-dark-mode` hook
- Theme context managed in `Providers.tsx`
- Toggle component: `src/components/DarkModeToggle/`
- Defaults to dark mode (`useDarkMode(true)`)

### Animations

- Uses **Framer Motion**
- Common patterns:
  - `FadeIn` component with configurable delay
  - `AnimatePresence` for navigation transitions
  - Motion values for smooth interactions

### Routing

- App Router with file-based routing
- Pages: `src/app/page.tsx` (home), `src/app/portfolio/page.tsx`
- Dynamic routing not currently used
- Client-side navigation with `next/link`
- `useRouter` and `usePathname` hooks for programmatic navigation

### TypeScript

- Strict mode enabled
- Path aliases: `@/*` → `src/*`
- JSX preserved (Next.js handles transformation)
- Incremental compilation enabled

### Code Quality

- **ESLint** with `next/core-web-vitals`, `next`, and `prettier` configs
- **Prettier** for formatting (runs via ESLint)
- Config in `.eslintrc.json` and `.prettierrc`
- Lint script: `yarn lint`

### External Assets

- Fonts in `public/fonts/`
- Favicon assets in `public/fav/`
- 3D model: `public/tree_palmDetailedShort.glb` (used by `Palm` component)
- `noflash.js` in public root

## Important Notes

- The project is a **personal portfolio** for Jeff Weimer
- Site URL: https://jeffweimer.dev
- SEO managed via DatoCMS `_seoMetaTags` and Next.js metadata
- Sitemap generation via `next-sitemap.config.js`
- No traditional unit tests in the project (only dependency tests in node_modules)
- React Server Components used where possible; client components marked with `'use client'`

### CMS Integration

- GraphQL endpoint: `https://graphql.datocms.com/`
- Uses `react-datocms` library (some components commented out)
- Draft mode enabled for preview

## Working with This Codebase

When making changes:

1. Follow the existing component pattern (keep styles in `styles.tsx`)
2. Use the theme constants from `src/theme/` instead of hardcoded values
3. Respect dark mode; test in both themes
4. Keep components small and composable
5. Use TypeScript types; avoid `any`
6. Fetch data in server components when possible
7. Use `'use client'` directive only when necessary (hooks, browser APIs)
8. All data fetching uses the `request()` utility; don't create new GraphQL clients
9. Respect ESLint/Prettier; run `yarn lint` before committing

## Deployment

- Designed for deployment on **Vercel**
- Build command: `yarn build`
- Output directory: `.next/`
- Includes Vercel Analytics and Speed Insights

## Plans

Output any plans made by Claude as markdown files inside of the directory "/plans"

---

Created: 2026-03-12
