# Design Plan — SaaS Landing Page

## Overview
Modern minimal SaaS landing page with full sections: Header, Hero, Features, Testimonials, Pricing, FAQ, and Footer.

---

## Phase 1: Project Setup & Foundation

### 1.1 Initialize Next.js Project
- **Action:** Create new Next.js 14 project with TypeScript and Tailwind
- **File:** `package.json`
- **Command:** `npx create-next-app@latest . --typescript --tailwind --app --eslint`

### 1.2 Install Dependencies
- **Action:** Add Framer Motion, Lucide icons, and utility libraries
- **File:** `package.json`
- **Before:** No motion/icon packages
- **After:** `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge` installed

### 1.3 Configure Tailwind
- **File:** `tailwind.config.ts`
- **Before:** Default Tailwind config
- **After:** Extended with custom colors, fonts, animations per design system

### 1.4 Create Utility Functions
- **File:** `src/lib/utils.ts`
- **Action:** Add `cn()` helper for class merging

### 1.5 Configure Fonts
- **File:** `src/app/layout.tsx`
- **Before:** Default system fonts
- **After:** Inter font via `next/font/google` with CSS variable `--font-inter`

---

## Phase 2: UI Components

### 2.1 Container Component
- **File:** `src/components/ui/Container.tsx`
- **Specs:**
  - `max-w-7xl` (1280px max width)
  - `px-4 sm:px-6 lg:px-8` (responsive padding)
  - `mx-auto` (centered)

### 2.2 Button Component
- **File:** `src/components/ui/Button.tsx`
- **Variants:**
  | Variant | Background | Text | Border |
  |---------|------------|------|--------|
  | `primary` | `bg-primary-500` | `text-white` | none |
  | `secondary` | `bg-white` | `text-gray-900` | `border border-gray-200` |
  | `ghost` | `bg-transparent` | `text-gray-600` | none |
- **Sizes:**
  | Size | Padding | Font Size |
  |------|---------|-----------|
  | `sm` | `px-3 py-1.5` | `text-sm` |
  | `md` | `px-4 py-2` | `text-base` |
  | `lg` | `px-6 py-3` | `text-lg` |
- **States:** `hover:bg-primary-600`, scale animation on tap

### 2.3 Badge Component
- **File:** `src/components/ui/Badge.tsx`
- **Specs:** `px-3 py-1`, `text-xs font-medium`, `rounded-full`, `bg-primary-50 text-primary-600`

### 2.4 Card Component
- **File:** `src/components/ui/Card.tsx`
- **Specs:** `bg-white`, `rounded-xl`, `shadow-sm`, `border border-gray-100`, `p-6`

---

## Phase 3: Header Section

### 3.1 Header Component
- **File:** `src/components/sections/Header.tsx`
- **Layout:** Sticky, `bg-white/80 backdrop-blur-md`, `border-b border-gray-100`
- **Logo:** Left-aligned, text logo or SVG
- **Navigation:** Center, horizontal links `text-gray-600 hover:text-gray-900`
- **CTA:** Right-aligned, primary button "Get Started"
- **Mobile:** Hamburger menu with slide-out drawer

### 3.2 Header Specs
| Element | Desktop | Mobile |
|---------|---------|--------|
| Height | 64px (`h-16`) | 64px |
| Nav Links | Visible, inline | Hidden, in drawer |
| CTA Button | Visible | Hidden or in drawer |
| Hamburger | Hidden | Visible |

---

## Phase 4: Hero Section

### 4.1 Hero Component
- **File:** `src/components/sections/Hero.tsx`
- **Layout:** Centered, `py-20 lg:py-32`
- **Elements:**
  1. **Badge:** "Introducing v2.0" — subtle announcement
  2. **Headline:** `text-5xl lg:text-6xl font-bold text-gray-900`, max-width `max-w-4xl`
  3. **Subheadline:** `text-xl text-gray-600`, max-width `max-w-2xl`
  4. **CTA Group:** Primary + Secondary buttons, `gap-4`
  5. **Social Proof:** "Trusted by 10,000+ teams" with avatar stack
  6. **Hero Image/Graphic:** Dashboard mockup or abstract illustration, `shadow-2xl rounded-2xl`

### 4.2 Hero Animations
| Element | Animation | Delay |
|---------|-----------|-------|
| Badge | Fade up | 0ms |
| Headline | Fade up | 100ms |
| Subheadline | Fade up | 200ms |
| CTA Buttons | Fade up | 300ms |
| Social Proof | Fade up | 400ms |
| Hero Image | Fade up + Scale | 500ms |

---

## Phase 5: Features Section

### 5.1 Features Component
- **File:** `src/components/sections/Features.tsx`
- **Layout:** `py-20 lg:py-24`, `bg-gray-50`
- **Structure:**
  1. **Section Header:** Centered title + description
  2. **Feature Grid:** 3-column grid on desktop, 1-column mobile

### 5.2 Feature Card Specs
- **File:** Inline in Features.tsx or `src/components/ui/FeatureCard.tsx`
- **Layout:** `p-6`, `bg-white`, `rounded-xl`, `border border-gray-100`
- **Elements:**
  1. **Icon:** 40x40px, `bg-primary-50 text-primary-500`, `rounded-lg p-2`
  2. **Title:** `text-lg font-semibold text-gray-900`, `mt-4`
  3. **Description:** `text-gray-600`, `mt-2`
- **Hover:** `shadow-md`, subtle translateY(-2px)
- **Count:** 6 features (2 rows × 3 columns)

### 5.3 Feature Content
| # | Title | Icon |
|---|-------|------|
| 1 | Lightning Fast | `Zap` |
| 2 | Secure by Default | `Shield` |
| 3 | Easy Integration | `Plug` |
| 4 | Analytics Dashboard | `BarChart3` |
| 5 | Team Collaboration | `Users` |
| 6 | 24/7 Support | `Headphones` |

---

## Phase 6: Testimonials Section

### 6.1 Testimonials Component
- **File:** `src/components/sections/Testimonials.tsx`
- **Layout:** `py-20 lg:py-24`, white background
- **Structure:**
  1. **Section Header:** "Loved by thousands"
  2. **Testimonial Grid:** 3-column grid

### 6.2 Testimonial Card Specs
- **Layout:** `p-6`, `bg-gray-50`, `rounded-xl`
- **Elements:**
  1. **Quote:** `text-gray-600`, italic style optional
  2. **Author:** Avatar (48px), Name (`font-semibold`), Role (`text-gray-500 text-sm`)
  3. **Stars:** 5 yellow stars
- **Count:** 3 testimonials

---

## Phase 7: Pricing Section

### 7.1 Pricing Component
- **File:** `src/components/sections/Pricing.tsx`
- **Layout:** `py-20 lg:py-24`, `bg-gray-50`
- **Structure:**
  1. **Section Header:** "Simple, transparent pricing"
  2. **Toggle:** Monthly/Annual switch (optional, can skip for MVP)
  3. **Pricing Cards:** 3 tiers side by side

### 7.2 Pricing Card Specs
| Element | Free | Pro (Featured) | Enterprise |
|---------|------|----------------|------------|
| Border | `border-gray-200` | `border-primary-500 border-2` | `border-gray-200` |
| Badge | — | "Most Popular" | — |
| Price | $0/mo | $29/mo | Custom |
| CTA | Secondary | Primary | Secondary |
| Background | `bg-white` | `bg-white` | `bg-white` |
| Scale | 1x | 1.05x (slightly larger) | 1x |

### 7.3 Pricing Features List
- Checkmark icon (`Check` from Lucide) in `text-primary-500`
- Feature text in `text-gray-600`
- 4-6 features per tier

---

## Phase 8: FAQ Section

### 8.1 FAQ Component
- **File:** `src/components/sections/FAQ.tsx`
- **Layout:** `py-20 lg:py-24`, white background, `max-w-3xl` centered
- **Structure:**
  1. **Section Header:** "Frequently asked questions"
  2. **Accordion:** Expandable Q&A items

### 8.2 FAQ Item Specs
- **Closed State:** Question text + ChevronDown icon, `py-4 border-b border-gray-200`
- **Open State:** Question + rotated ChevronUp + Answer text with fade-in
- **Animation:** Height animate, icon rotate 180°
- **Count:** 5-6 questions

---

## Phase 9: Footer Section

### 9.1 Footer Component
- **File:** `src/components/sections/Footer.tsx`
- **Layout:** `py-12`, `bg-gray-900`, `text-gray-400`
- **Structure:**
  1. **Top:** 4-column grid (Logo+description, Product links, Company links, Legal links)
  2. **Bottom:** Copyright + Social icons, separated by `border-t border-gray-800`

### 9.2 Footer Specs
| Column | Title | Links |
|--------|-------|-------|
| 1 | Logo | Brief tagline, newsletter signup (optional) |
| 2 | Product | Features, Pricing, Integrations, Changelog |
| 3 | Company | About, Blog, Careers, Contact |
| 4 | Legal | Privacy, Terms, Security |

### 9.3 Social Icons
- Twitter/X, GitHub, LinkedIn
- Size: 20px, `text-gray-400 hover:text-white`

---

## Phase 10: Page Assembly & Polish

### 10.1 Assemble Page
- **File:** `src/app/page.tsx`
- **Action:** Import and compose all sections in order:
  ```tsx
  <Header />
  <main>
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <FAQ />
  </main>
  <Footer />
  ```

### 10.2 Metadata
- **File:** `src/app/layout.tsx`
- **Add:** Title, description, Open Graph tags

### 10.3 Final Polish
- Verify responsive behavior at all breakpoints
- Check animation performance
- Validate accessibility (keyboard nav, focus states)
- Test dark mode (if applicable)

---

## File Summary

| Phase | Files Created/Modified |
|-------|------------------------|
| 1 | `package.json`, `tailwind.config.ts`, `src/lib/utils.ts`, `src/app/layout.tsx`, `src/app/globals.css` |
| 2 | `src/components/ui/Container.tsx`, `Button.tsx`, `Badge.tsx`, `Card.tsx` |
| 3 | `src/components/sections/Header.tsx` |
| 4 | `src/components/sections/Hero.tsx` |
| 5 | `src/components/sections/Features.tsx` |
| 6 | `src/components/sections/Testimonials.tsx` |
| 7 | `src/components/sections/Pricing.tsx` |
| 8 | `src/components/sections/FAQ.tsx` |
| 9 | `src/components/sections/Footer.tsx` |
| 10 | `src/app/page.tsx` |

**Total Files:** ~15 files
