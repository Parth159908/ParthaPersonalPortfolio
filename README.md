# Partha Personal Portfolio

A modern, dark-themed personal portfolio website for a Senior Software Engineer. Built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server (hot reload) |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx            # Sticky top navbar with smooth scroll
│   ├── SocialLinks.tsx       # Reusable social icon/pill component
│   ├── HeroSection.tsx       # Full-viewport hero with avatar + CTAs
│   ├── AboutSection.tsx      # Bio + skills grid
│   ├── ExperienceSection.tsx # Numbered work history rows
│   ├── ServicesSection.tsx   # Numbered services (hardcoded, see TODO)
│   ├── ProjectCard.tsx       # Individual sticky project card
│   ├── ProjectsSection.tsx   # Projects grid (highlight-first sorted)
│   ├── TestimonialsSection.tsx # CSS marquee testimonials
│   └── Footer.tsx            # 3-col footer with copy-email button
├── data/
│   └── portfolio.json        # ← ALL content lives here
├── hooks/
│   └── usePortfolio.ts       # Typed hook returning portfolio data
├── types/
│   └── portfolio.ts          # TypeScript interfaces for all data shapes
├── App.tsx                   # Root layout — assembles all sections
├── main.tsx                  # React entry point
└── index.css                 # Tailwind + custom CSS (gradients, marquee)
```

---

## Editing Content

All profile data, experience, projects, and testimonials are stored in one place:

**`src/data/portfolio.json`**

### Profile

```jsonc
"profile": {
  "name": "Your Full Name",
  "shortName": "YourName",          // used in hero heading
  "tagline": "One punchy sentence.",
  "role": "Senior Software Engineer",
  "specialization": "Backend · AI · Cloud",
  "location": "City, Country",
  "yearsOfExperience": 7,
  "bio": "Multi-sentence paragraph shown in About section.",
  "avatarSvg": "<svg>...</svg>",     // inline SVG string
  "social": {
    "github": "https://github.com/you",
    "linkedin": "https://linkedin.com/in/you",
    "instagram": "",                 // leave empty to hide
    "email": "you@example.com",
    "phone": "+1 234 567 8901",
    "website": ""                    // leave empty to hide
  }
}
```

> **Tip:** Leave any social field as `""` and it will be hidden everywhere (hero pills, footer, navbar CTA).

### Experience

```jsonc
"experience": [
  {
    "company": "Acme Corp",
    "role": "Senior Engineer",
    "period": "2022 — Present",
    "location": "Remote",
    "summary": "One paragraph summary.",
    "highlights": [
      "First highlight shown.",
      "Second highlight shown.",
      "Third highlight shown.",
      "Fourth — not displayed (only first 3 render)."
    ]
  }
]
```

### Projects

```jsonc
"projects": [
  {
    "id": "unique-slug",
    "title": "Project Name",
    "subtitle": "Short descriptor",
    "description": "2-3 sentence description.",
    "stack": ["Go", "Redis", "PostgreSQL"],
    "role": "Sole Author",
    "year": "2024",
    "link": "https://github.com/you/project",  // "" hides the LIVE PROJECT button
    "image": "",                                // "" shows a dark grid placeholder
    "highlight": true                           // true = Featured badge + sorted first
  }
]
```

### Testimonials

```jsonc
"testimonials": [
  {
    "id": "t1",
    "quote": "The quote text.",
    "name": "Jane Smith",
    "role": "CTO, Company",
    "avatarColor": "#7c3aed"   // hex color for avatar circle + deco icon
  }
]
```

### Services (currently hardcoded)

Services (Backend, AI/LLM, Frontend, Cloud) are hardcoded in `src/components/ServicesSection.tsx`.
Look for the `// TODO` comment at the top of that file — moving them to `portfolio.json` under a `"services"` key is straightforward.

---

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#0C0C0C` |
| Card background | `#111111` |
| Card border | `#1f1f1f` |
| Chrome gradient | `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)` |
| Accent gradient | `linear-gradient(90deg, #a855f7, #ec4899, #f97316)` |
| Font | Kanit (Google Fonts) |

---

## Customization Notes

- **Font:** Loaded via Google Fonts in `index.html`. Change the family there and update `tailwind.config.js → theme.extend.fontFamily.kanit`.
- **Marquee speed:** Adjust `40s` in `index.css` (`.marquee-track`) and `tailwind.config.js` (animation duration).
- **Sticky card offset:** Controlled by `.sticky-card { top: 96px }` in `index.css`. Matches navbar height + gap.
- **Section scroll offset:** All `section[id]` elements get `scroll-margin-top: 80px` so anchors clear the navbar.
- **Reduced motion:** The marquee automatically falls back to a horizontal scroll with `scroll-snap` when `prefers-reduced-motion: reduce` is set.
