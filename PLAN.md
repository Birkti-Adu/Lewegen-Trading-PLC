# JLink Digital Clone — Build Plan

## Reference Site
[jlinkdigital.com](https://jlinkdigital.com/)

## Stack
- React + Vite (already scaffolded)
- **React Router DOM** — client-side routing
- **Tailwind CSS v4** — utility-first styling

---

## Target Project Structure

```
src/
  components/
    Navbar.jsx        # shared top nav with mobile hamburger
    Footer.jsx        # shared footer
  pages/
    Home.jsx
    Services.jsx
    Portfolio.jsx
    Vacancies.jsx
    About.jsx
    Contact.jsx
  App.jsx             # BrowserRouter + Routes shell
  main.jsx
  index.css           # Tailwind directives
```

---

## Route Map

| Route         | Page       |
|---------------|------------|
| `/`           | Home       |
| `/services`   | Services   |
| `/portfolio`  | Portfolio  |
| `/vacancies`  | Vacancies  |
| `/about`      | About      |
| `/contact`    | Contact    |

---

## Build Order

use plus jakarta sans fontfamily for the website
***the company name is 'Lewegen'
### Step 0 — Setup
- [ ] Install `react-router-dom` and Tailwind CSS v4
- [ ] Replace `App.jsx` with `BrowserRouter` + `Routes` shell
- [ ] Build shared `Navbar.jsx` (logo, 6 nav links, mobile hamburger menu)
- [ ] Build shared `Footer.jsx`

---

### Step 1 — Home Page (`/`)
Sections to build:
- [ ] Hero — headline "Transforming Ideas Into Digital Solutions" + CTA buttons
- [ ] Trusted-by logos marquee / ticker
- [ ] Services overview — 6 icon cards
- [ ] About teaser — stats (10+ professionals, 10+ projects, 5+ partners)
- [ ] Process — 7-step methodology (Discovery → Iterate)
- [ ] Portfolio highlights — 3 featured project cards
- [ ] Partners logos marquee
- [ ] CTA banner — "Let's Build Something Amazing Together"

---

### Step 2 — Services Page (`/services`)
- [ ] Hero banner
- [ ] 6 service detail cards:
  - Data Analytics & BI
  - Enterprise Software Development
  - AI & Process Automation
  - Cloud Architecture & Migration
  - Cybersecurity Solutions
  - Web & Mobile Development

---

### Step 3 — Portfolio Page (`/portfolio`)
- [ ] Hero banner
- [ ] Project cards grid with:
  - Office Management System (OMS)
  - E-Learning Platform
  - ERP & EMR System
- [ ] Tech stack tags (Next.js, React, Java, etc.)
- [ ] Industry category tags (Enterprise, Education, Healthcare)

---

### Step 4 — Vacancies Page (`/vacancies`)
- [ ] Hero banner
- [ ] Open positions listing (placeholder cards: role, department, type)
- [ ] Empty-state fallback if no positions

---

### Step 5 — About Page (`/about`)
- [ ] Mission & story section
- [ ] Stats bar (10+ professionals, 50% women in tech, etc.)
- [ ] Women in Tech highlight section
- [ ] Team member cards (CEO, COO, CSO, CTO, Technical Architect, CCO)
- [ ] Partners logos

---

### Step 6 — Contact Page (`/contact`)
- [ ] Contact form (name, email, message fields)
- [ ] Contact info:
  - Phone: +251 990 08 52 64
  - Email: jlinkdigitalsolutions@gmail.com
- [ ] Optional map embed

---

## Notes
- Color scheme: dark navy/blue primary, white text, accent green/teal (based on reference site)
- All pages share `Navbar` and `Footer`
- Build and review one page at a time before moving to the next
