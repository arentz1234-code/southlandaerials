# Southland Aerials Website Rebuild

**Source:** www.southlandaerials.com
**Project Type:** Full website rebuild with modern design system
**Status:** Planning Phase

---

## Project Overview

Complete rebuild of Southland Aerials website—a drone photography and videography service company based in Alabama. The rebuild preserves all existing content and page structure while modernizing design, improving UX, and adding strategic interactive elements.

---

## Page Inventory

| # | URL | Page Title | Purpose | Audience | Key CTA |
|---|-----|------------|---------|----------|---------|
| 1 | `/` or `/home` | Home | Main landing, service overview | All visitors | Get Drone Photos Now |
| 2 | `/portfolio` | Portfolio | Showcase work samples | Potential clients | Get Started / Free Demo |
| 3 | `/investment` | Investment | Pricing & packages | Decision makers | Book Free Demo |
| 4 | `/aboutus` | About Us | Company story & credibility | All visitors | Newsletter signup |
| 5 | `/pilots` | Pilots | Pilot recruitment hub | Prospective pilots | Get Started as Pilot |
| 6 | `/pilotcontact` | Pilot Contact | Pilot application form | Prospective pilots | Apply Here |
| 7 | `/contact` | Contact | General inquiry form | Potential clients | Send |
| 8 | `/consultation` | Consultation | Demo/consultation signup | Warm leads | Sign Up |
| 9 | `/commercialpilotservices` | Commercial Pilot Services | Lead gen for commercial services | Business clients | Submit |
| 10 | `/golfcoastpilotblog` | Golf Coast Pilot Blog | Aviation content & videos | Aviation enthusiasts | Watch / Subscribe |
| 11 | `/golfcoastpilotstore` | Store | Digital products (spreadsheets) | Pilots/aircraft owners | Purchase |
| 12 | `/golfcoastpilotstore/p/excel-business-plan-general-airplane-cost` | Product - General Airplane Cost | Spreadsheet product | Aircraft owners | Buy $7.99 |
| 13 | `/golfcoastpilotstore/p/cirrus-sr22-g6-operating-cost` | Product - Cirrus SR22 G6 | Spreadsheet product | Cirrus owners | Buy $14.99 |
| 14 | `/golfcoastpilotstore/spreadsheet` | Spreadsheet Category | Product category | Pilots | Browse |

---

## Current Content Structure

### Homepage Sections
- Hero with CTA ("Get Drone Photos Now!")
- Service workflow: Photograph → Edit → Deliver
- Portfolio showcase
- Service areas
- Client/brand logos
- Email signup
- Footer with social links

### Services Offered
1. **Aerial Photography**
   - Single Parcel Package - $200 (12-15 images)
   - Shopping Center Package - $250 (15-20 images)
   - Drone Image Markup - $50/image

2. **3D Modeling Services**
   - 3D Mapping & Surveying - Starting at $495
   - Solar Inspection - Call for pricing
   - Construction Site Inspection - Starting at $495

### Company Info
- Founded: 2018
- Location: Alabama (Southeast US service area)
- Specialty: Commercial real estate aerial imaging
- Credentials: FAA Part 107 certified pilots
- Experience: 5+ years

### Contact & Social
- Instagram: @southlandaerials
- LinkedIn: /company/southlandaerials
- Email newsletter signup on all pages

---

## Scope of Work

### 1. Content Capture & Organization
- [x] Crawl all public pages
- [x] Build page inventory (above)
- [ ] Extract all copy verbatim
- [ ] Catalog all images/assets
- [ ] Document all forms and their fields
- [ ] Identify PDFs/downloads

### 2. Page Recreation (Same Feel, Better Structure)
**Layout Pattern to Preserve:**
- Header navigation style
- Menu groupings (Home, Portfolio, Investment, About Us, Pilots)
- Hero → Content sections → CTA flow

**Improvements:**
- Shorter sections, clearer headings
- Better scannability (bullets, subheads, callouts)
- Clear "next step" CTA on every page
- Consistent section rhythm

### 3. Design System

#### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | TBD (Modern sans) | Bold | 48-64px |
| H2 | TBD | Semi-bold | 32-40px |
| H3 | TBD | Medium | 24-28px |
| Body | TBD | Regular | 16-18px |
| Small | TBD | Regular | 14px |

#### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | TBD | # |
| Secondary | TBD | # |
| Accent | TBD | # |
| Background | TBD | # |
| Text | TBD | # |
| Muted | TBD | # |

#### Spacing System
- Base unit: 8px
- Section padding: 80-120px
- Component gaps: 16-32px
- Consistent border-radius

#### Component Styles
- Buttons (primary, secondary, ghost)
- Cards (service, portfolio, product)
- Forms (inputs, labels, validation)
- Navigation (desktop, mobile)
- Footer

#### Visual Direction
- Clean, high-end, minimal
- "Modern SaaS / premium service brand"
- Subtle motion (fade-in, hover, parallax-lite)
- No gimmicky animations

### 4. Photography & Visuals

**Per Page Requirements:**
- Add/replace images to support messaging
- Consistent photo treatment:
  - Color grading
  - Rounded corners (8-12px)
  - Subtle overlays where needed

**Image Sources:**
- Existing client images (portfolio)
- Licensed stock (with approval)
- Generated graphics/illustrations

### 5. Interactive Elements

| Page | Interactive Element | Purpose |
|------|---------------------|---------|
| Home | Animated stats/counters | Show experience (5+ years, projects completed) |
| Home | Service area map | Coverage visualization |
| Portfolio | Before/after slider | Show image markup value |
| Portfolio | Filterable gallery | Browse by project type |
| Investment | Pricing comparison | Package selection |
| Investment | Interactive service cards | Expandable details |
| Services | Process timeline | Step-by-step workflow |
| About | Company timeline | History visualization |
| Contact | Interactive map | Office location |
| Contact | Scheduler integration | Book consultation |
| All | FAQ accordion | Common questions |

### 6. Technical Specifications

#### Recommended Stack Options
1. **Webflow** - Fast, polished, easy client editing
2. **Next.js + CMS** (Sanity/Contentful) - High performance + scale
3. **WordPress (Modern)** - Only if specifically needed

#### Performance Requirements
- Images: WebP/AVIF format
- Lazy loading on all images
- Clean, minimal third-party scripts
- Target: 90+ Lighthouse score

#### SEO Migration Checklist
- [ ] Preserve page titles
- [ ] Preserve/improve meta descriptions
- [ ] Maintain heading hierarchy
- [ ] Keep URLs same when possible
- [ ] 301 redirects for any URL changes
- [ ] Submit updated sitemap
- [ ] Schema markup: LocalBusiness, Organization
- [ ] FAQ schema where applicable

### 7. QA Checklist

#### Responsive Design
- [ ] Mobile-first review (all pages)
- [ ] Tablet breakpoints
- [ ] Desktop (1440px+)

#### Forms
- [ ] Contact form - spam protection
- [ ] Contact form - deliverability test
- [ ] Contact form - confirmation message
- [ ] Pilot application form
- [ ] Newsletter signup
- [ ] Consultation form

#### Cross-Browser
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

#### Accessibility
- [ ] Color contrast (WCAG AA)
- [ ] Alt text on all images
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Screen reader testing

#### Tracking
- [ ] GA4 installed
- [ ] Conversion events configured
- [ ] Form submission tracking
- [ ] CTA click tracking

#### Links & Errors
- [ ] No 404s
- [ ] All external links work
- [ ] Social links correct

### 8. Launch Plan

1. **Staging** - Soft-launch for review
2. **Revisions** - Client feedback rounds
3. **Go Live** - With rollback plan
4. **Post-Launch** - Monitor analytics 72hrs

---

## Deliverables

1. Fully rebuilt site (14 pages)
2. Updated visuals on every page
3. Interactive elements (per plan above)
4. SEO-preserved migration
5. Mobile-ready, fast design
6. Design system documentation
7. Content map / page inventory
8. Admin training guide ("How to update the site")
9. Final QA report

---

## Assets to Collect

- [ ] High-res logo files (SVG preferred)
- [ ] Brand guidelines (if any)
- [ ] Existing photography assets
- [ ] Team photos
- [ ] Client testimonials
- [ ] Case study details
- [ ] Service area specifics

---

## Notes

- Copyright currently shows 2023 - update to current year
- "responsability" typo on Investment page - fix to "responsibility"
- Blog section appears to be "Golf Coast Pilot" brand - clarify relationship
- Store products are aviation spreadsheets - confirm if keeping in rebuild
- Social presence: Instagram + LinkedIn only

---

## Commands

```bash
# Development (example for Next.js)
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run linter

# Deployment
npm run deploy       # Deploy to production
```

---

## File Structure (Proposed)

```
southland-aerials/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── sections/
│   ├── pages/
│   ├── styles/
│   └── lib/
├── public/
│   ├── images/
│   └── fonts/
├── content/
│   └── [CMS content]
└── docs/
    └── design-system.md
```
