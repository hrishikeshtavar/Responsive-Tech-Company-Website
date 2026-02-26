# Neon Flow (TubesBackground) Integration

## Codebase support

This project already has:

- **shadcn-style structure**: UI primitives live in `src/app/components/ui/` (equivalent of `/components/ui`).
- **Tailwind CSS**: Configured via `@tailwindcss/vite` and `tailwindcss` in `package.json`.
- **TypeScript**: Used across the codebase (`.tsx`/`.ts`).

No extra setup is required for shadcn, Tailwind, or TypeScript.

## Why `components/ui`?

Keeping reusable, style-only components under `src/app/components/ui/` (or `/components/ui`) gives you:

- A single place for design system primitives (buttons, inputs, cards, etc.).
- Clear separation from page/section components.
- Consistency with shadcn and this repo’s existing layout.

The default path for these components here is **`src/app/components/ui/`**.

## Component location

- **UI component**: `src/app/components/ui/neon-flow.tsx`  
  Exports: `TubesBackground`, `TubesBackgroundProps`, and default export.

- **Demo section**: `src/app/components/NeonFlowDemo.tsx`  
  Uses `TubesBackground` and is rendered in `App.tsx` after the Hero section.

## Dependencies

- **framer-motion**: Not required for `neon-flow.tsx`. The original snippet imported it but did not use `motion` or `AnimatePresence` in the JSX, so the integration uses only React.
- **lucide-react**: Already in the project; used in `NeonFlowDemo` for the `MousePointer2` icon.
- **threejs-components**: Loaded at runtime from the CDN inside `neon-flow.tsx` (no npm install).

No additional npm install was needed for this integration.

## Usage

Use `TubesBackground` anywhere you want the tubes cursor effect and optional overlay content:

```tsx
import { TubesBackground } from '@/app/components/ui/neon-flow';

<TubesBackground className="min-h-screen" enableClickInteraction={true}>
  <div className="flex items-center justify-center">
    <h1>Your content here</h1>
  </div>
</TubesBackground>
```

**Props:**

| Prop                     | Type      | Default  | Description                                      |
|--------------------------|-----------|----------|--------------------------------------------------|
| `children`               | ReactNode | —        | Content rendered above the canvas.               |
| `className`              | string    | —        | Extra Tailwind/classes for the wrapper.         |
| `enableClickInteraction` | boolean   | `true`   | Whether click randomizes tube/lights colors.     |

## Responsive and behavior

- The canvas is full size within its container (`absolute inset-0`); use a wrapper with a min height (e.g. `min-h-screen` or `min-h-[400px]`) as needed.
- Overlay content uses `pointer-events-none` so clicks hit the canvas; give clickable elements `pointer-events-auto` so they still receive clicks.
- The effect loads the Three.js-based script from the CDN on mount; ensure the app can reach `https://cdn.jsdelivr.net` (e.g. no strict CSP blocking it if you add one later).

## Where it’s used in the app

The **Neon Flow** demo is rendered as a full-width section in `App.tsx` right after the Hero section. Scroll down from the hero to see it. To remove the demo section, delete the `<NeonFlowDemo />` import and usage from `App.tsx`.
