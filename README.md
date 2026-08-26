# Frontend Command Center

A polished Arabic RTL portfolio dashboard built to demonstrate production-minded frontend engineering: clear information hierarchy, reusable React components, responsive layout, accessible interactions, and documented product decisions.

## Live preview

- [Open the live dashboard](https://3000-ii72ut9e8bamgmzjlcsgj-f58be2ee.sg1.manus.computer)
- [Portfolio profile](https://github.com/mennaallahyehia86-sys)

## Why this project exists

Frontend work is more than styling a screen. This project turns a portfolio into a small working product where a reviewer can inspect project status, filter work, open contextual details, and understand the decisions behind the interface.

## Highlights

| Area | Implementation |
|---|---|
| UI architecture | React 19 with modular page-level composition and reusable metric/project patterns |
| Language and layout | Arabic-first RTL layout with responsive desktop, tablet, and mobile behavior |
| Interaction | Project search, status filters, selection context panel, mobile navigation, and toast feedback |
| Accessibility | Semantic navigation landmarks, labels for controls, visible focus states, and reduced-motion support |
| Visual system | Swiss editorial hierarchy, ivory canvas, navy ink, sage states, and Burnt Signal `#D45B35` |
| Engineering hygiene | TypeScript validation, production build, documented trade-offs, and CI-ready scripts |

## Development stages

The repository history intentionally mirrors the way the project was built:

1. **Scaffold and metadata:** establish the React/Vite foundation and Arabic document metadata.
2. **Editorial command desk:** build the responsive shell, hero blueprint, sidebar, and visual language.
3. **Interactive evidence:** add project filtering, selection state, metrics, activity history, and quality review.
4. **Review hardening:** add accessibility details, reduced-motion behavior, documentation, and CI checks.

## Run locally

```bash
pnpm install
pnpm run dev
```

Useful checks:

```bash
pnpm run check
pnpm run build
```

## Project structure

```text
client/src/
├── components/       # Shared UI primitives from the template
├── contexts/          # Theme and application contexts
├── pages/Home.tsx     # Portfolio dashboard composition
├── index.css         # Editorial design tokens and responsive styles
└── App.tsx            # Application shell and routing
```

## Design decisions

The interface uses an asymmetric command-desk composition rather than a generic centered dashboard. One contextual project panel acts as the dominant evidence module while smaller status modules support it. Burnt Signal is reserved for active states, primary actions, progress, and editorial annotations so it remains a recognizable product signal.

## Roadmap

The next valuable additions are Vitest coverage for filtering and selection behavior, a typed data layer for projects, and a real case-study route for each featured repository.

## Author

**Menna Allah Yehia** — AI Student and Frontend Developer focused on responsive Arabic RTL experiences.

[LinkedIn](https://www.linkedin.com/in/mennaallah-yehia-16b38342b)
