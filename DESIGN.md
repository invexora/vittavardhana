# Vittavardhana — Premium Design System

> Dark cinematic finance aesthetic inspired by Vanquish.so

---

## 🎨 Color System

### Surfaces (layered depth)
| Token | Value | Usage |
|-------|-------|-------|
| `--color-canvas` | `#050505` | Page background |
| `--color-surface-1` | `#0a0a0a` | Section backgrounds |
| `--color-surface-2` | `#111111` | Card backgrounds, modals |
| `--color-surface-3` | `#1a1a1a` | Elevated elements |

### Accents
| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#d32f2f` | Crimson — primary CTA, links, badges |
| `--color-primary-hover` | `#b71c1c` | Hover states |
| `--color-primary-glow` | `rgba(211,47,47,0.25)` | Glow/shadow effects |
| `--color-gold` | `#c5a880` | Gold — secondary accent, metadata |
| `--color-gold-light` | `#e6d3ba` | Light gold for text |

### Glass Effects
| Token | Value | Usage |
|-------|-------|-------|
| `--glass-bg` | `rgba(255,255,255,0.03)` | Card fill |
| `--glass-border` | `rgba(255,255,255,0.08)` | Default borders |
| `--glass-border-hover` | `rgba(255,255,255,0.18)` | Hover borders |
| `--glass-border-active` | `rgba(255,255,255,0.3)` | Active/focused |

### Text
| Token | Value | Usage |
|-------|-------|-------|
| `--color-ink` | `#ffffff` | Headings, primary text |
| `--color-body` | `#a5a9b8` | Body text |
| `--color-muted` | `#6b6f7b` | Labels, metadata |
| `--color-subtle` | `#3a3d47` | Dividers, faint text |

---

## 🔤 Typography

### Fonts
- **Headings**: `Cormorant Garamond` (300–700, serif)
- **Body**: `Inter` (300–700, sans-serif)

### Scale
| Class | Size | Usage |
|-------|------|-------|
| `.display-xl` | `clamp(2.8rem, 5.5vw, 4.5rem)` | Hero headlines |
| `.display-lg` | `clamp(2rem, 4vw, 3.2rem)` | Section titles |
| `.display-md` | `clamp(1.5rem, 2.5vw, 2rem)` | Card titles, modals |
| `.section-label` | `0.8rem` uppercase | Section pretitles |

---

## 🧩 Components

### Glass Card (`.glass-card`)
Translucent card with subtle radial gradient overlay. Hover: border brightens, lifts 4px.

### Glass Badge (`.glass-badge`)
Pill-shaped label with border. Variants: `-crimson`, `-gold`, `-active`.

### Glass Button (`.glass-btn`)
Bordered pill button. Variants: `-primary`, `-gold`, `-ghost`, `-solid`.

### 3D Flip Card (`.card-3d-wrapper` > `.card-3d`)
Perspective-based card with front/back faces. Flips 180° on hover.

### Feature Card (`.feature-card`)
Service/value card with icon, title, description. Hover lifts.

### Testimonial Card (`.testimonial-card`)
Quote + author block with avatar initials.

---

## 🎬 Animations

- **GSAP ScrollTrigger**: Scroll-triggered reveals via `createScrollReveal()`, `createStaggerReveal()`
- **Lenis**: Smooth scroll with exponential easing
- **Counter Animation**: `createCounterAnimation()` for stat numbers
- **Preloader**: Session-aware loading screen with progress bar
- **CSS Fallback**: `@keyframes fadeInUp` and `.stagger-children` for non-JS

---

## 📐 Layout

| Token | Value |
|-------|-------|
| `--space-section` | `clamp(80px, 10vw, 140px)` |
| `.container` | `max-width: 1200px` centered |
| `.grid-2/3/4` | Responsive CSS Grid |

---

## 🧭 Navigation

- **Navbar**: Transparent at top → glassmorphic blur on scroll (`navbar-scrolled`)
- **Mobile**: Full-screen overlay with staggered link animation
- **Footer**: 4-column grid with regulatory disclaimer

---

## ⚡ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Routing | react-router-dom 7 |
| Styling | Vanilla CSS (no Tailwind) |
| Animations | GSAP 3.12 + ScrollTrigger |
| Smooth Scroll | Lenis |
| Icons | lucide-react |
| Carousel | Swiper 11 (available) |
