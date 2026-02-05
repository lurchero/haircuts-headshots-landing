# Lessons Learned

## 2026-02-04 — Initial Implementation

### What Worked Well

1. **Manual project setup** was cleaner than running create-next-app in a directory with existing files
2. **Component-first approach** — building UI primitives first (Container, Button, Badge, Card) enabled faster section development
3. **Framer Motion variants** — using shared animation configs (fadeUp, stagger) kept animations consistent
4. **Design system tokens** — strictly using Tailwind classes from DESIGN_SYSTEM.md avoided style drift
5. **Lucide React icons** — consistent sizing and easy tree-shaking

### What to Avoid

1. **Don't mix inline styles with Tailwind** — stick to utility classes only
2. **Don't forget "use client"** for components using React hooks or Framer Motion
3. **Don't hardcode avatar URLs in production** — the i.pravatar.cc URLs are placeholders only
4. **Don't skip focus states** — always include focus-visible styles for accessibility

### Notes for Future Iterations

- Hero image is a placeholder — replace with actual dashboard screenshot or illustration
- Social links in Footer point to "#" — need real URLs
- Newsletter signup was mentioned but not included in MVP scope
- Monthly/Annual toggle on Pricing was noted as optional — can be added later
- Consider adding dark mode support (tailwind dark: classes)
