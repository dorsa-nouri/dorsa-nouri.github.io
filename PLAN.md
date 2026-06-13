# Static Resume Website — Developer Plan

Build a **single-page, static portfolio/resume site** for **Dorsa Nouri** that reads from `resume_data.json`, requires **no backend**, and deploys to **GitHub Pages** for free.

---

## 1. Goals

| Goal | Detail |
|------|--------|
| Static only | No server, no API, no database — pure HTML/CSS/JS after build |
| Data-driven | All content comes from `resume_data.json` at build time |
| Simple but stylish | Clean layout, strong typography, subtle motion — not flashy |
| GitHub Pages ready | Works on `https://<username>.github.io/<repo>/` |
| Maintainable | Update resume by editing one JSON file and redeploying |
| Accessible & performant | Semantic HTML, keyboard nav, fast Lighthouse scores |

---

## 2. Recommended Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Vue 3** (Composition API) | Matches Dorsa's expertise; good fit for component-based resume sections |
| Build tool | **Vite 5+** | Fast dev server, optimized static output |
| Language | **TypeScript** (recommended) | Type-safe mapping of `resume_data.json` |
| Styling | **Tailwind CSS 3+** | Utility-first, responsive, matches her current stack |
| Icons | **Lucide Vue** or **Heroicons** | Lightweight SVG icons for contact/social links |
| Fonts | **Inter** (body) + **DM Sans** or **Outfit** (headings) via Google Fonts | Modern, readable, professional |
| Deployment | **GitHub Actions** → `gh-pages` branch | Automatic deploy on push to `main` |
| Optional | **vite-ssg** or plain Vite SPA | SSG preferred for SEO; SPA acceptable for a personal resume |

### Alternatives (if the developer prefers)

- **Astro + Vue islands** — even lighter static output, Vue only where needed
- **Plain HTML + vanilla JS** — zero framework, fastest to ship, less aligned with candidate brand

**Recommendation:** Vue 3 + Vite + Tailwind + TypeScript + GitHub Actions.

---

## 3. Design Direction — Simple but Stylish

### 3.1 Overall feel

- **Single-page scroll** with anchored nav (Home → Experience → Skills → Education → Contact)
- **Generous whitespace**, max content width **~720px** (readable resume width) centered on desktop
- **Card-based** work experience entries with soft shadows
- **Subtle animations** only: fade-in on scroll (CSS or `@vueuse/motion`), hover states on links/buttons
- **No** parallax, particle effects, or heavy gradients

### 3.2 Color palette

Use CSS variables in `:root` for easy theming.

| Token | Light mode | Dark mode |
|-------|------------|-----------|
| `--color-bg` | `#FAFAFA` | `#0F1117` |
| `--color-surface` | `#FFFFFF` | `#1A1D27` |
| `--color-text` | `#1E293B` | `#E2E8F0` |
| `--color-text-muted` | `#64748B` | `#94A3B8` |
| `--color-accent` | `#6366F1` (indigo) | `#818CF8` |
| `--color-accent-soft` | `#EEF2FF` | `#312E81` |
| `--color-border` | `#E2E8F0` | `#2D3348` |

Accent indigo complements Vue's green subtly without copying it; feels professional for a front-end developer portfolio.

### 3.3 Typography scale

```css
/* Example scale — implement via Tailwind extend or CSS vars */
--text-xs:   0.75rem;   /* tags, meta */
--text-sm:   0.875rem;  /* dates, labels */
--text-base: 1rem;      /* body */
--text-lg:   1.125rem;  /* lead paragraph */
--text-xl:   1.25rem;   /* section subtitles */
--text-2xl:  1.5rem;    /* section headings */
--text-4xl:  2.25rem;   /* hero name */
```

- **Hero name:** `--text-4xl`, font-weight 700, letter-spacing `-0.02em`
- **Section headings:** `--text-2xl`, weight 600, small accent underline or left border
- **Body:** `--text-base`, line-height `1.7`

### 3.4 Layout breakpoints (Tailwind defaults)

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| `sm` | 640px | Stack → inline contact chips |
| `md` | 768px | Sticky side nav optional |
| `lg` | 1024px | Two-column hero (name left, contact right) |

### 3.5 Component styling notes

- **Tech stack tags:** pill badges, `--color-accent-soft` background, `--color-accent` text, `rounded-full`, `text-xs`, `px-2.5 py-0.5`
- **Timeline:** vertical line on left for work experience; dot for each role; "Current" role gets accent-colored dot
- **Achievement metrics:** small highlight callout (e.g. "90% paperwork reduction") with accent border-left
- **Skills:** grouped in collapsible sections or a responsive grid of category cards
- **Links:** underline on hover, external links open in new tab with `rel="noopener noreferrer"`

### 3.6 Dark mode

- Toggle in header (sun/moon icon)
- Persist preference in `localStorage`
- Respect `prefers-color-scheme` on first visit
- Implement via `class="dark"` on `<html>` (Tailwind `darkMode: 'class'`)

### 3.7 Print stylesheet

Add `@media print` rules so users can **Print → Save as PDF**:

- Hide nav, dark-mode toggle, decorative elements
- Force light colors
- Avoid page breaks inside experience cards

---

## 4. Information Architecture (Page Sections)

Map each section directly to `resume_data.json` keys.

### 4.1 Hero / Header

**Source:** `personal_information`, `professional_summary`

| Element | JSON path | Display |
|---------|-----------|---------|
| Name | `personal_information.full_name` | H1 |
| Title | `personal_information.title` | Subtitle |
| Location | `location.city`, `location.country` | "Tehran, Iran" |
| Experience badge | `professional_summary.years_of_experience` | e.g. "6+ years" pill |
| Summary | `professional_summary.summary` | Lead paragraph |
| Specializations | `professional_summary.specializations[]` | Inline tags or comma-separated |

**Contact row:**

| Field | JSON path |
|-------|-----------|
| Email | `personal_information.email` → `mailto:` link |
| Phone | `personal_information.phone` → `tel:` link |
| GitHub | `personal_information.github.url` |
| LinkedIn | `personal_information.linkedin.url` |

Do **not** display `birth_year` on the public site (privacy).

### 4.2 Work Experience

**Source:** `work_experience[]` — render in **reverse chronological order** (already ordered in JSON).

For each entry show:

| Field | JSON key | Formatting |
|-------|----------|------------|
| Company | `company` | Bold heading |
| Position | `position` | Subheading |
| Location | `location` | Muted text |
| Employment | `employment_type`, `work_mode` (if present) | Meta line |
| Dates | `start_date`, `end_date`, `current` | Format `YYYY-MM` → `"Aug 2025 – Present"` |
| Tech stack | `tech_stack[]` | Pill badges |
| Responsibilities | `responsibilities[]` | Bullet list |
| Achievements | `achievements[]` | Map `metric` to human label (see §5.2) |
| Team size | `team_size` (optional) | e.g. "Led team of 3" |

**Current role indicator:** When `current: true`, show a green/accent "Current" badge.

### 4.3 Skills

**Source:** `skills` object — six categories:

1. Languages & Styling → `languages_and_styling`
2. Frameworks & Libraries → `frameworks_and_libraries`
3. State Management → `state_management`
4. Build & Development Tools → `build_and_development_tools`
5. API & Data → `api_and_data`
6. CI/CD → `ci_cd`
7. Testing → `testing`
8. Other → `other`

Display as a **responsive grid** (2 cols mobile, 3 cols desktop). Each category = card with title + skill chips.

**De-duplication:** "Tailwind" appears in multiple categories in JSON — show once per category (no cross-category dedup needed).

### 4.4 Education & Certifications

**Source:** `education_and_certifications`

| Subsection | JSON key | UI |
|------------|----------|-----|
| Coursera | `coursera[]` | List with certificate icon |
| Self-studied | `self_studied[]` | Tag cloud or simple list |

No dates in JSON — display names only.

### 4.5 Footer

- Copyright: `© {year} Dorsa Nouri`
- Repeat GitHub + LinkedIn icons
- Optional: "Built with Vue & deployed on GitHub Pages"

---

## 5. Data Layer

### 5.1 TypeScript interfaces

Define types matching the JSON schema exactly:

```typescript
// src/types/resume.ts

export interface ResumeData {
  personal_information: PersonalInformation;
  professional_summary: ProfessionalSummary;
  work_experience: WorkExperience[];
  skills: Skills;
  education_and_certifications: EducationAndCertifications;
}

export interface PersonalInformation {
  full_name: string;
  title: string;
  location: { city: string; country: string };
  phone: string;
  email: string;
  github: { url: string; username: string };
  linkedin: { url: string; username: string };
  birth_year: number;
}

export interface WorkExperience {
  company: string;
  position: string;
  location: string;
  employment_type: string;
  work_mode?: string;
  start_date: string; // "YYYY-MM"
  end_date: string | null;
  current: boolean;
  tech_stack: string[];
  responsibilities: string[];
  achievements?: Achievement[];
  team_size?: number;
}

export interface Achievement {
  metric: string;
  value: number;
}

// ... Skills, EducationAndCertifications, etc.
```

### 5.2 Utility helpers

| Helper | Purpose |
|--------|---------|
| `formatDateRange(start, end, current)` | `"2025-08"`, `null`, `true` → `"Aug 2025 – Present"` |
| `formatAchievement(metric, value)` | `paperwork_reduction_percent`, `90` → `"90% paperwork reduction"` |
| `sortExperience(items)` | Ensure reverse chronological (sort by `start_date` desc) |

**Achievement metric labels:**

```typescript
const METRIC_LABELS: Record<string, (v: number) => string> = {
  paperwork_reduction_percent: (v) => `${v}% paperwork reduction`,
  workflow_speed_improvement_percent: (v) => `${v}% workflow speed improvement`,
};
```

### 5.3 Loading data

Import JSON at build time (Vite supports this natively):

```typescript
import resumeData from '../../resume_data.json';
```

Place `resume_data.json` in `src/data/` or project root and reference via `resolve.alias` if needed.

**Validation (optional but recommended):** Use **Zod** schema to validate JSON at build time; fail the build if structure is wrong.

---

## 6. Project Structure

```
dorsa_resume_project/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI
├── public/
│   ├── favicon.svg
│   └── og-image.png            # 1200×630 social preview (optional)
├── src/
│   ├── assets/
│   │   └── (minimal — prefer SVG/icons lib)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue       # Nav + dark mode toggle
│   │   │   ├── AppFooter.vue
│   │   │   └── SectionWrapper.vue  # Consistent section padding + id anchor
│   │   ├── resume/
│   │   │   ├── HeroSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── ExperienceCard.vue
│   │   │   ├── SkillsSection.vue
│   │   │   ├── SkillCategory.vue
│   │   │   └── EducationSection.vue
│   │   └── ui/
│   │       ├── Badge.vue           # Tech stack / tag pill
│   │       ├── Button.vue          # Optional CTA
│   │       ├── IconLink.vue        # GitHub, LinkedIn, mailto
│   │       └── ThemeToggle.vue
│   ├── composables/
│   │   └── useTheme.ts             # Dark mode logic
│   ├── data/
│   │   └── resume_data.json        # Copy or symlink from root
│   ├── types/
│   │   └── resume.ts
│   ├── utils/
│   │   ├── formatDate.ts
│   │   └── formatAchievement.ts
│   ├── styles/
│   │   └── main.css                # Tailwind directives + CSS vars
│   ├── App.vue
│   └── main.ts
├── index.html
├── resume_data.json                # Source of truth (root)
├── PLAN.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md                       # Setup + deploy instructions
```

---

## 7. Implementation Steps (Ordered)

### Phase 1 — Scaffold (≈30 min)

1. `npm create vite@latest . -- --template vue-ts` (in repo root; merge with existing files)
2. Install dependencies:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install lucide-vue-next
   # optional: npm install zod
   ```
3. Configure Tailwind (`content: ['./index.html', './src/**/*.{vue,ts}']`, `darkMode: 'class'`)
4. Copy `resume_data.json` → `src/data/resume_data.json`
5. Add TypeScript types and utility functions

### Phase 2 — Layout & theme (≈1 hr)

1. Set up CSS variables in `main.css` for light/dark palettes
2. Build `AppHeader` with anchor links: `#about`, `#experience`, `#skills`, `#education`, `#contact`
3. Implement `useTheme` composable + `ThemeToggle`
4. Build `SectionWrapper` with consistent vertical rhythm (`py-16 md:py-24`)

### Phase 3 — Content sections (≈2–3 hr)

1. `HeroSection` — name, title, summary, contact links, specialization tags
2. `ExperienceSection` + `ExperienceCard` — timeline layout, date formatting, achievement callouts
3. `SkillsSection` + `SkillCategory` — grid of category cards
4. `EducationSection` — Coursera list + self-studied tags
5. `AppFooter`

### Phase 4 — Polish (≈1–2 hr)

1. Scroll-spy or active nav state on section in view (`IntersectionObserver`)
2. Smooth scroll for anchor links (`scroll-behavior: smooth` on `html`)
3. Fade-in on scroll (CSS `@keyframes` or `@vueuse/core` `useIntersectionObserver`)
4. Favicon (simple "DN" monogram SVG)
5. Meta tags in `index.html`:
   ```html
   <title>Dorsa Nouri — Front-End Developer</title>
   <meta name="description" content="Front-end developer specializing in Vue.js and Nuxt.js..." />
   <meta property="og:title" content="Dorsa Nouri — Front-End Developer" />
   <meta property="og:description" content="..." />
   ```
6. Print stylesheet
7. Manual responsive QA at 375px, 768px, 1280px

### Phase 5 — Deploy (≈30 min)

See §8.

---

## 8. GitHub Pages Deployment

### 8.1 Vite base path

If repo is `dorsa-nouri/dorsa-resume` (not user/org site), set base:

```typescript
// vite.config.ts
export default defineConfig({
  base: '/dorsa-resume/', // must match repo name
  // ...
});
```

For user site (`dorsa-nouri.github.io` repo), use `base: '/'`.

### 8.2 GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 8.3 Repo settings

1. Push code to GitHub
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions
3. After first workflow run, site is live at configured URL

### 8.4 Local preview of production build

```bash
npm run build
npx vite preview
```

---

## 9. Accessibility Checklist

- [ ] One `<h1>` only (hero name); section titles use `<h2>`
- [ ] All icon-only links have `aria-label` (e.g. "GitHub profile")
- [ ] Color contrast ≥ 4.5:1 for body text (WCAG AA)
- [ ] Focus visible styles on interactive elements (`:focus-visible`)
- [ ] Skip link: "Skip to main content" for keyboard users
- [ ] `lang="en"` on `<html>`
- [ ] Reduced motion: respect `prefers-reduced-motion` (disable scroll animations)

---

## 10. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Total JS (gzip) | < 80 KB |
| First Contentful Paint | < 1.5 s |

**How to achieve:**

- No heavy images in v1 (SVG favicon only)
- Lazy-load below-fold sections if using large deps (unlikely needed)
- Vite production build + tree-shaking
- Preload Inter/DM Sans with `font-display: swap`

---

## 11. Content Update Workflow

1. Edit `resume_data.json` (root file — keep as single source of truth)
2. Copy/sync to `src/data/resume_data.json` if not using import alias to root
3. Run `npm run dev` locally to preview
4. Commit and push to `main`
5. GitHub Actions rebuilds and deploys automatically

**Optional improvement:** Add an npm script `"sync:data": "cp resume_data.json src/data/"` in `package.json`.

---

## 12. Package Scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview",
    "sync:data": "cp resume_data.json src/data/resume_data.json"
  }
}
```

---

## 13. README.md Outline (for the repo)

The developer should add a README with:

1. Live demo URL
2. Local setup (`npm install`, `npm run dev`)
3. How to update resume data
4. Deploy notes (GitHub Pages + base path)
5. Tech stack list
6. License (if any)

---

## 14. Future Enhancements (Out of Scope for v1)

- PDF download button (generate from print stylesheet or `html2pdf.js`)
- i18n (English / Persian) — RTL layout support
- Blog or project showcase section
- Contact form via third-party (Formspree, Netlify Forms) — still static hosting
- Analytics (Plausible or GA4) with privacy-friendly config

---

## 15. Acceptance Criteria

The site is **done** when:

- [ ] All sections render correctly from `resume_data.json` with no hardcoded resume content
- [ ] Responsive on mobile, tablet, desktop
- [ ] Dark mode works and persists
- [ ] Deployed to GitHub Pages with correct base path
- [ ] External links (GitHub, LinkedIn) work and open in new tabs
- [ ] Print/PDF output is readable
- [ ] No console errors; build passes `npm run build`
- [ ] Lighthouse scores meet targets in §10

---

## 16. Quick Reference — JSON → UI Map

```
resume_data.json
├── personal_information      → Hero + Contact + Footer links
├── professional_summary      → Hero subtitle, badge, summary paragraph, tags
├── work_experience[]         → Experience timeline (6 entries)
├── skills                    → Skills grid (8 categories)
└── education_and_certifications
    ├── coursera[]            → Certification list
    └── self_studied[]        → Self-study tags
```

---

*This plan is the single source of truth for building the static resume site. Follow phases in order; adjust timelines as needed.*
