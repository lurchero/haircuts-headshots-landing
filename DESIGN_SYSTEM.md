# Design System

## Color Palette

### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary-50` | `#f0f9ff` | Subtle backgrounds |
| `primary-100` | `#e0f2fe` | Hover states |
| `primary-500` | `#0ea5e9` | Primary buttons, links |
| `primary-600` | `#0284c7` | Button hover |
| `primary-700` | `#0369a1` | Active states |

### Neutral Colors
| Token | Value | Usage |
|-------|-------|-------|
| `gray-50` | `#f9fafb` | Page background |
| `gray-100` | `#f3f4f6` | Card backgrounds |
| `gray-200` | `#e5e7eb` | Borders, dividers |
| `gray-400` | `#9ca3af` | Placeholder text |
| `gray-500` | `#6b7280` | Secondary text |
| `gray-600` | `#4b5563` | Body text |
| `gray-900` | `#111827` | Headings |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#10b981` | Success states |
| `warning` | `#f59e0b` | Warning states |
| `error` | `#ef4444` | Error states |

---

## Typography

### Font Family
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Type Scale
| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| `display` | 64px / 4rem | 1.1 | 700 | Hero headline |
| `h1` | 48px / 3rem | 1.2 | 700 | Section titles |
| `h2` | 36px / 2.25rem | 1.25 | 600 | Subsection titles |
| `h3` | 24px / 1.5rem | 1.3 | 600 | Card titles |
| `h4` | 20px / 1.25rem | 1.4 | 600 | Small headings |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | Lead paragraphs |
| `body` | 16px / 1rem | 1.6 | 400 | Body text |
| `body-sm` | 14px / 0.875rem | 1.5 | 400 | Captions, labels |
| `caption` | 12px / 0.75rem | 1.5 | 500 | Badges, tags |

---

## Spacing Scale

Based on 4px unit system:

| Token | Value | Tailwind |
|-------|-------|----------|
| `space-1` | 4px | `p-1` |
| `space-2` | 8px | `p-2` |
| `space-3` | 12px | `p-3` |
| `space-4` | 16px | `p-4` |
| `space-5` | 20px | `p-5` |
| `space-6` | 24px | `p-6` |
| `space-8` | 32px | `p-8` |
| `space-10` | 40px | `p-10` |
| `space-12` | 48px | `p-12` |
| `space-16` | 64px | `p-16` |
| `space-20` | 80px | `p-20` |
| `space-24` | 96px | `p-24` |

### Section Spacing
- **Section padding (vertical):** `py-20` (80px) to `py-24` (96px)
- **Container max-width:** `max-w-7xl` (1280px)
- **Container padding (horizontal):** `px-4` mobile, `px-6` tablet, `px-8` desktop

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Subtle rounding |
| `rounded` | 6px | Buttons, inputs |
| `rounded-md` | 8px | Cards |
| `rounded-lg` | 12px | Modals, larger cards |
| `rounded-xl` | 16px | Feature cards |
| `rounded-2xl` | 24px | Hero elements |
| `rounded-full` | 9999px | Avatars, pills |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `shadow` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Cards |
| `shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Hover states |
| `shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `shadow-xl` | `0 20px 25px rgba(0,0,0,0.1)` | Hero elements |

---

## Animation

### Durations
| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 150ms | Micro-interactions |
| `duration-normal` | 300ms | Standard transitions |
| `duration-slow` | 500ms | Page transitions |

### Easing
| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard |

### Scroll Animations
- **Fade up:** translateY(20px) → translateY(0), opacity 0 → 1
- **Stagger delay:** 100ms between items

---

## Breakpoints

| Name | Min Width | Tailwind Prefix |
|------|-----------|-----------------|
| Mobile | 0px | (default) |
| Tablet | 640px | `sm:` |
| Tablet Landscape | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Large Desktop | 1280px | `xl:` |
| Extra Large | 1536px | `2xl:` |
