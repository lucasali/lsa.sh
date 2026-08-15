# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript personal portfolio website using Vite as the build tool. The project uses modern tooling including TailwindCSS v4 for styling, motion-v for animations, and unplugin-icons for icon loading.

## Common Commands

```bash
# Start development server
bun run dev

# Build for production (runs type check then build)
bun run build

# Preview production build
bun run preview

# Run ESLint
bun run lint

# Run ESLint with auto-fix
bun run lint:fix
```

## Tech Stack & Architecture

- **Framework**: Vue 3 with Composition API (`<script setup lang="ts">`)
- **Language**: TypeScript in strict mode
- **Build Tool**: Vite 7.x
- **Package Manager**: Bun (evidenced by `bun.lock`)
- **Styling**: TailwindCSS v4 with `@import 'tailwindcss'` in `src/main.css`
- **Animation**: motion-v (Framer Motion for Vue)
- **Icons**: unplugin-icons with Carbon and Lucide icon packs
- **Linting**: ESLint with @antfu/eslint-config

## Path Aliases

The `@` alias resolves to `src/` directory. Use it for all internal imports:

```ts
import Button from '@/components/ui/Button.vue'
import { cn } from '@/lib/utils'
```

## Component Patterns

### Script Setup Syntax

All Vue components use `<script setup lang="ts">` syntax:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
```

### Icon Imports

Icons are imported using the `~icons/` virtual module:

```vue
<script setup lang="ts">
import Github from '~icons/carbon/logo-github'
import Time from '~icons/lucide/clock'
</script>
```

Available icon packs:

- `~icons/carbon/*` - Carbon Design System icons
- `~icons/lucide/*` - Lucide icons

### Class Merging Utility

Use the `cn()` function from `@/lib/utils` for conditional class merging. This combines `clsx` and `tailwind-merge`:

```ts
import { cn } from '@/lib/utils'

const classes = cn('base-class', isActive && 'active-class', props.className)
```

### Component Variants

UI components use `class-variance-authority` (CVA) for variant management. See `src/components/ui/Button.vue` for the pattern:

```ts
const buttonVariants = cva(
  'base-classes',
  {
    variants: {
      variant: { default: '...', ghost: '...' },
      size: { default: '...', sm: '...', icon: '...' }
    },
    defaultVariants: { variant: 'default', size: 'default' }
  }
)
```

### Motion/Animation

Use motion-v's `Motion` component for animations:

```vue
<Motion :initial="{ opacity: 0 }" :animate="{ opacity: 1 }">
  <div content />
</Motion>
```

### Dark Mode

Dark mode is handled by VueUse's `useDark()` composable. Components in `src/components/ToggleMode.vue` demonstrate the pattern.

## File Structure

```
src/
├── main.ts           # Vue app entry point
├── App.vue           # Root component
├── main.css          # Global styles (TailwindCSS v4 import, CSS variables)
├── components/       # Vue components
│   ├── Clock.vue
│   ├── ToggleMode.vue
│   └── ui/
│       └── Button.vue  # Reusable UI component with CVA variants
├── lib/
│   └── utils.ts      # Utilities (cn function for class merging)
└── vite-env.d.ts     # TypeScript declarations
```

## ESLint Configuration

The project uses `@antfu/eslint-config` with Vue support and formatters enabled. Key rules include:

- Auto-fix on save recommended
- TypeScript strict mode enforcement
- Vue 3 Composition API best practices

## Styling Notes

- TailwindCSS v4 uses `@import 'tailwindcss'` instead of the traditional `@tailwind` directives
- CSS variables in `src/main.css` define the color system for both light and dark modes
- Font families: Jost (display) and Geist Mono (monospace)
- Border radius uses `corner-shape: squircle` for modern rounded corners
