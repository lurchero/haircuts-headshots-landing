# Frontend Guidelines

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts, metadata
│   ├── page.tsx          # Landing page (imports sections)
│   └── globals.css       # Tailwind imports + custom styles
├── components/
│   ├── ui/               # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── sections/         # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   └── icons/            # Custom icons (if needed)
└── lib/
    └── utils.ts          # Utility functions (cn helper)
```

---

## Component Conventions

### File Naming
- **PascalCase** for component files: `Button.tsx`, `FeatureCard.tsx`
- **camelCase** for utility files: `utils.ts`, `animations.ts`
- One component per file (co-locate sub-components if tightly coupled)

### Component Structure
```tsx
// 1. Imports
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// 2. Types
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// 3. Component
export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variants[variant], sizes[size])}>
      {children}
    </button>
  );
}
```

### Export Style
- Use **named exports** for components: `export function Button() {}`
- Avoid default exports (improves refactoring, auto-imports)

---

## Styling Conventions

### Tailwind Class Order
Follow this order for readability:
1. Layout (`flex`, `grid`, `block`)
2. Positioning (`relative`, `absolute`)
3. Box model (`w-`, `h-`, `p-`, `m-`)
4. Typography (`text-`, `font-`)
5. Visual (`bg-`, `border-`, `shadow-`)
6. Interactive (`hover:`, `focus:`)
7. Responsive (`sm:`, `md:`, `lg:`)

### The `cn()` Helper
Use for conditional classes:
```tsx
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  variant === 'primary' && 'primary-classes'
)} />
```

### Avoid Inline Styles
Always use Tailwind classes. No `style={{ }}` attributes.

---

## Animation Guidelines

### Scroll Animations with Framer Motion
```tsx
import { motion } from 'framer-motion';

// Fade up animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" whileInView="show">
  {items.map(i => <motion.div key={i} variants={item} />)}
</motion.div>
```

### Hover Micro-interactions
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  Click me
</motion.button>
```

---

## Responsive Design

### Mobile-First Approach
Write base styles for mobile, add breakpoints for larger screens:
```tsx
// ✅ Correct
<div className="text-sm md:text-base lg:text-lg" />

// ❌ Avoid desktop-first
<div className="text-lg md:text-base sm:text-sm" />
```

### Container Pattern
```tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
```

---

## Accessibility

### Required Practices
- All images need `alt` text
- Interactive elements need `focus-visible` states
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Buttons vs Links: `<button>` for actions, `<a>` for navigation
- Color contrast: minimum 4.5:1 for body text

### Focus Styles
```tsx
<button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
```

---

## Performance

### Image Optimization
- Use `next/image` for all images
- Provide `width` and `height` to prevent layout shift
- Use `priority` for above-the-fold images

### Font Loading
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
```

### Code Splitting
- Sections are separate components (automatic code splitting)
- Use dynamic imports for heavy components if needed
