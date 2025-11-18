# CLAUDE.md - AI Assistant Guide for SkyGlider Website

**Last Updated**: 2025-11-18
**Project**: SkyGlider Website - Marketing landing page for portable leg movement device
**Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack & Dependencies](#tech-stack--dependencies)
3. [Directory Structure](#directory-structure)
4. [Component Architecture](#component-architecture)
5. [Styling Conventions](#styling-conventions)
6. [Development Workflow](#development-workflow)
7. [Code Patterns & Best Practices](#code-patterns--best-practices)
8. [API Routes](#api-routes)
9. [Animation Patterns](#animation-patterns)
10. [Accessibility Guidelines](#accessibility-guidelines)
11. [AI Assistant Guidelines](#ai-assistant-guidelines)
12. [Common Tasks](#common-tasks)

---

## Project Overview

### What is SkyGlider?
SkyGlider is a simple, portable leg movement device designed to bring effortless movement into daily routines. The target audience includes travelers, office workers, students, and anyone combating a sedentary lifestyle.

### Business Context
- **Product Stage**: First iteration/MVP
- **Sales Channel**: TikTok Shop
- **Price Point**: Positioned as "cost of a coffee" (affordable wellness)
- **Marketing Focus**: Simplicity, portability, value

### Key Contact Information
- **Website**: https://theskyglider.com
- **Email**: hello@theskyglider.com
- **TikTok**: @skyglider

### Site Pages
1. **Home** (`/`) - Hero, benefits, features, CTAs
2. **Product** (`/product`) - Detailed specs, image gallery, use cases
3. **How to Use** (`/how-to-use`) - Step-by-step guide, safety info
4. **About** (`/about`) - Brand story, mission, values
5. **Contact** (`/contact`) - Contact form with validation
6. **FAQ** (`/faq`) - Comprehensive Q&A with categories

---

## Tech Stack & Dependencies

### Core Framework
```json
{
  "next": "15.5.4",           // Latest Next.js with App Router
  "react": "19.1.0",          // React 19 with concurrent features
  "react-dom": "19.1.0",
  "typescript": "^5"          // TypeScript for type safety
}
```

### Styling & UI
```json
{
  "tailwindcss": "^4",                      // Tailwind CSS v4 (latest)
  "@tailwindcss/postcss": "^4",
  "@heroicons/react": "^2.2.0"              // Icon library
}
```

### Animation & Interaction
```json
{
  "framer-motion": "^12.23.24",                      // Animation library
  "react-intersection-observer": "^9.16.0"           // Scroll-triggered animations
}
```

### Build Tools
- **Turbopack**: Experimental fast bundler (enabled in scripts)
- **ESLint 9**: Linting with Next.js configs
- **PostCSS**: CSS processing for Tailwind

### Deployment
- **Vercel**: Optimized hosting for Next.js
- **Git/GitHub**: Version control

---

## Directory Structure

```
skyglider-website/
├── app/                              # Next.js App Router directory
│   ├── components/                   # Reusable React components
│   │   ├── Accordion.tsx            # FAQ accordion component
│   │   ├── Button.tsx               # Polymorphic button component
│   │   ├── Container.tsx            # Layout container wrapper
│   │   ├── Footer.tsx               # Site footer with navigation
│   │   ├── Header.tsx               # Sticky header with mobile menu
│   │   ├── HomePage.tsx             # Homepage component (large)
│   │   └── ImageGallery.tsx         # Product image carousel
│   ├── about/page.tsx               # About page
│   ├── api/contact/route.ts         # Contact form API endpoint
│   ├── contact/page.tsx             # Contact page
│   ├── faq/page.tsx                 # FAQ page
│   ├── how-to-use/page.tsx          # How to Use guide
│   ├── product/page.tsx             # Product details page
│   ├── globals.css                  # Global styles & Tailwind imports
│   ├── layout.tsx                   # Root layout with SEO metadata
│   ├── not-found.tsx                # Custom 404 page
│   └── page.tsx                     # Homepage (imports HomePage component)
├── public/                          # Static assets
│   ├── images/                      # Product images (33 total)
│   │   ├── Black SkyGlider View 1-5.jpg
│   │   ├── White SkyGlider View 1-4.jpg
│   │   ├── Men's Boot with SG.jpg
│   │   ├── Women's Slipper with SG.jpg
│   │   └── ... (various product photos)
│   └── robots.txt                   # SEO robots file
├── .gitignore                       # Git ignore patterns
├── ANALYTICS-SETUP.md               # Analytics integration guide
├── CLAUDE.md                        # THIS FILE - AI assistant guide
├── DEPLOYMENT.md                    # Vercel deployment instructions
├── README.md                        # Project overview & setup
├── STATUS.md                        # Current project status
├── eslint.config.mjs                # ESLint configuration
├── next.config.ts                   # Next.js configuration
├── package.json                     # Dependencies & scripts
├── postcss.config.mjs               # PostCSS config for Tailwind
└── tsconfig.json                    # TypeScript configuration
```

---

## Component Architecture

### Core Components

#### 1. **Container** (`app/components/Container.tsx`)
Layout wrapper used consistently across all pages.

```tsx
<Container>
  {/* Page content */}
</Container>
```

**Styling**:
- Max-width: `max-w-7xl` (1280px)
- Responsive padding: `px-6 sm:px-8 lg:px-12 xl:px-16`
- Centered: `mx-auto`

**Usage**: Wrap ALL page content with Container for consistent layout.

---

#### 2. **Button** (`app/components/Button.tsx`)
Polymorphic button component that can render as a link or button.

```tsx
interface ButtonProps {
  children: React.ReactNode;
  href?: string;                    // If provided, renders as Link/anchor
  onClick?: () => void;             // Button click handler
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;               // Additional classes
  disabled?: boolean;
  target?: string;                  // For external links
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}
```

**Variants**:
- `primary`: Blue gradient (`bg-sky-500`) with hover effects
- `secondary`: Dark slate (`bg-slate-600`)
- `outline`: Bordered, transparent with hover fill

**Behavior**:
- Auto-detects external links (starts with `http` or `//`)
- Opens external links in new tab with `noopener noreferrer`
- Uses Next.js `<Link>` for internal navigation
- Supports disabled state with reduced opacity

**Example**:
```tsx
<Button href="/product" variant="primary" size="large">
  View Product
</Button>

<Button onClick={handleSubmit} variant="secondary">
  Submit Form
</Button>

<Button href="https://tiktok.com/@skyglider" variant="outline">
  Shop Now
</Button>
```

---

#### 3. **Header** (`app/components/Header.tsx`)
Sticky navigation header with mobile menu.

**Features**:
- Client component (`'use client'`)
- Sticky positioning with backdrop blur (glassmorphism)
- Hamburger menu for mobile
- Shared navigation array with Footer
- Logo/brand link to homepage

**Navigation Items** (shared constant):
```tsx
const navigation = [
  { name: 'Product', href: '/product' },
  { name: 'How to Use', href: '/how-to-use' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];
```

**Styling**:
- `sticky top-0 z-50`
- `bg-white/90 backdrop-blur-md`
- Border bottom for separation

---

#### 4. **Footer** (`app/components/Footer.tsx`)
Site footer with 3-column grid layout.

**Features**:
- Server component (static)
- 3-column responsive grid
- Dynamic year calculation: `{new Date().getFullYear()}`
- Shared navigation with Header
- Social links section
- Contact information

**Sections**:
1. About/Description
2. Quick Links (navigation)
3. Contact/Social

---

#### 5. **ImageGallery** (`app/components/ImageGallery.tsx`)
Product image carousel with thumbnails.

**Features**:
- Client component with state management
- Keyboard navigation (arrow keys)
- Thumbnail grid (5 columns on desktop)
- Current image counter overlay
- Hover-based navigation arrows
- Smooth transitions

**Props**:
```tsx
interface ImageGalleryProps {
  images: string[];     // Array of image URLs
}
```

**Example**:
```tsx
<ImageGallery images={[
  '/images/Black SkyGlider View 1.jpg',
  '/images/Black SkyGlider View 2.jpg',
  // ...
]} />
```

---

#### 6. **Accordion** (`app/components/Accordion.tsx`)
Collapsible FAQ item (controlled component).

**Props**:
```tsx
interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
```

**Pattern** (parent manages state):
```tsx
const [openIndex, setOpenIndex] = useState<number | null>(null);

<Accordion
  question="How does SkyGlider work?"
  answer="..."
  isOpen={openIndex === 0}
  onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
/>
```

**Features**:
- Smooth height transitions
- Chevron rotation animation
- Click-to-expand/collapse
- Accessible (aria-expanded)

---

#### 7. **HomePage** (`app/components/HomePage.tsx`)
Large homepage component with multiple sections.

**Why Separated?**
- Keeps `/app/page.tsx` clean
- Easier to manage large component
- Better code organization

**Sections**:
1. Hero section with gradient background
2. Benefits grid (3 columns)
3. Price/value CTA
4. Features showcase
5. Final CTA

---

### Layout Components

#### Root Layout (`app/layout.tsx`)
Wraps all pages with Header, Footer, and SEO metadata.

**Structure**:
```tsx
<html lang="en">
  <body className="antialiased">
    <Header />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </body>
</html>
```

**SEO Metadata**:
- Title, description, keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card metadata
- Structured for social sharing

---

## Styling Conventions

### Tailwind CSS 4 Setup

**globals.css**:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@theme inline {
  --color-primary: #0ea5e9;    /* sky-500 */
  --color-accent: #0891b2;     /* cyan-600 */
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Color System

**Primary Colors**:
- `sky-500`, `sky-600`, `sky-700` - Main brand blue
- `cyan-500`, `cyan-600` - Accent teal

**Text Colors**:
- Headings: `text-gray-900` (dark, high contrast)
- Body: `text-gray-700` (readable gray)
- Light text: `text-gray-600`, `text-gray-500`

**Background Colors**:
- Page sections: `bg-gray-50`, `bg-gray-100`, `bg-white`
- Footer: `bg-slate-900` (dark)
- Gradients: `bg-gradient-to-br from-sky-50 via-cyan-50 to-white`

**Borders**:
- `border-gray-200` (light borders)
- `border-gray-300` (medium borders)

### Typography Scale

**Font Family**:
- Inter (Google Fonts): weights 400-900
- Applied globally in `globals.css`

**Heading Sizes**:
```css
h1: text-5xl sm:text-6xl lg:text-7xl font-black
h2: text-4xl sm:text-5xl lg:text-6xl font-bold
h3: text-3xl sm:text-4xl font-bold
h4: text-2xl sm:text-3xl font-bold
```

**Body Sizes**:
```css
Large: text-xl leading-relaxed
Base: text-base leading-relaxed
Small: text-sm
```

**Font Weights**:
- `font-black` (900) - Main headlines
- `font-bold` (700) - Subheadings
- `font-semibold` (600) - Buttons, emphasis
- `font-medium` (500) - Navigation
- `font-normal` (400) - Body text

### Spacing Patterns

**Section Padding**:
```css
py-12 sm:py-16 lg:py-20      /* Vertical padding for sections */
px-6 sm:px-8 lg:px-12        /* Horizontal padding (via Container) */
```

**Component Gaps**:
```css
gap-4     /* Tight spacing */
gap-8     /* Medium spacing (most common) */
gap-12    /* Large spacing */
gap-16    /* Extra large spacing */
```

**Margins**:
```css
mb-4      /* Small margin bottom */
mb-6      /* Medium margin bottom */
mb-8      /* Large margin bottom */
mb-12     /* Section title margin */
mb-16     /* Major section separation */
mb-20     /* Extra large separation */
```

### Responsive Breakpoints

```css
sm: 640px     /* Tablets */
md: 768px     /* Small desktops */
lg: 1024px    /* Large desktops */
xl: 1280px    /* Extra large screens */
```

**Responsive Grid Pattern**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Common Class Patterns

#### Gradient Backgrounds
```css
/* Light gradient (section backgrounds) */
bg-gradient-to-br from-sky-50 via-cyan-50 to-white

/* Button gradient */
bg-gradient-to-r from-cyan-500 to-sky-600
```

#### Cards with Hover Effects
```css
bg-white border border-gray-200 rounded-xl p-8
hover:shadow-lg transition-shadow duration-300
```

#### Buttons
```css
px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold
hover:bg-sky-600 transition-all duration-200
focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
```

#### Smooth Transitions
```css
transition-all duration-200      /* Fast (buttons, hovers) */
transition-all duration-300      /* Medium (cards, shadows) */
transition-transform duration-500 /* Slow (animations) */
```

#### Transform Effects
```css
hover:-translate-y-1             /* Lift effect */
hover:scale-105                  /* Zoom effect */
```

### Z-Index Layers
```css
z-10      /* Elevated content */
z-20      /* Overlays */
z-50      /* Sticky header, mobile menu */
```

---

## Development Workflow

### Scripts

```bash
npm run dev      # Development server with Turbopack (http://localhost:3000)
npm run build    # Production build with Turbopack
npm start        # Start production server
npm run lint     # Run ESLint
```

### Git Workflow

**Branch Naming Convention**:
- Feature branches: `claude/claude-md-{session-id}`
- Must start with `claude/` for proper permissions

**Commit Message Style**:
Look at recent commits for patterns. Generally concise and descriptive:
```
Updated globals.css
Add comprehensive status report and analytics setup guide
Major typography & contrast improvements
```

**Pushing Changes**:
```bash
git push -u origin <branch-name>
```
- CRITICAL: Branch must start with 'claude/' and end with session ID
- Retry up to 4 times with exponential backoff on network failures

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start dev server**:
   ```bash
   npm run dev
   ```
   - Opens on http://localhost:3000
   - Hot module replacement enabled
   - Turbopack for fast builds

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

### Testing

**Current State**: No testing framework configured
- No Jest, Vitest, or other test runners
- No test files in codebase
- Manual testing only

**If Adding Tests**: Consider Jest + React Testing Library for Next.js 15

### Deployment

**Platform**: Vercel (optimized for Next.js)

**Auto-Deploy**:
- Push to main branch → automatic production deploy
- Push to feature branch → preview deployment

**Environment Variables**:
Set in Vercel dashboard (optional):
```env
EMAIL_API_KEY=your_email_service_api_key
```

See `DEPLOYMENT.md` for detailed instructions.

---

## Code Patterns & Best Practices

### File Naming Conventions

**Components**:
- PascalCase: `Button.tsx`, `Header.tsx`, `ImageGallery.tsx`

**Pages**:
- Lowercase with hyphens: `how-to-use/page.tsx`, `faq/page.tsx`
- Page component files: `page.tsx`

**Config Files**:
- Lowercase with dots: `next.config.ts`, `eslint.config.mjs`

### Import/Export Patterns

**All components use default exports**:
```tsx
export default function Button() { }
export default function Header() { }
```

**Import Order** (recommended):
```tsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import Image from 'next/image';

// 3. Third-party libraries
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BoltIcon } from '@heroicons/react/24/outline';

// 4. Local components
import Container from '../components/Container';
import Button from '../components/Button';
```

### Component Structure Pattern

**Page Components**:
```tsx
'use client';  // Only if using hooks, state, or browser APIs

import React, { useState } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PageName() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-12">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Page content */}
        </motion.div>
      </Container>
    </div>
  );
}
```

**Reusable Components**:
```tsx
import React from 'react';

interface ComponentProps {
  prop1: string;
  prop2?: number;  // Optional
  children?: React.ReactNode;
}

export default function Component({
  prop1,
  prop2 = 10,  // Default value
  children,
}: ComponentProps) {
  return (
    <div className="...">
      {children}
    </div>
  );
}
```

### TypeScript Patterns

**Interface Naming**:
```tsx
interface ButtonProps { }
interface FormData { }
interface FormErrors { }
```

**Type Annotations**:
```tsx
const [count, setCount] = useState<number>(0);
const [data, setData] = useState<FormData>({});
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
```

**No `any` Types**: Always use proper types or `unknown`

**Union Types for Variants**:
```tsx
variant?: 'primary' | 'secondary' | 'outline';
size?: 'small' | 'medium' | 'large';
```

### State Management

**Local State Only**:
- No Redux, Zustand, or global state management
- All state is component-local using `useState`
- Props drilling for shared data

**Controlled Components** (e.g., Accordion):
```tsx
// Parent manages state
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Child receives state and callbacks
<Accordion
  isOpen={openIndex === 0}
  onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
/>
```

### Data Patterns

**Hard-Coded Content**:
- No CMS, database, or external data sources
- All content defined in component files as arrays/objects

**Example**:
```tsx
const benefits = [
  {
    icon: BoltIcon,
    title: 'Instant Movement',
    description: 'Get moving in seconds...'
  },
  {
    icon: SparklesIcon,
    title: 'Portable Design',
    description: 'Fits in your bag...'
  },
  // ...
];

benefits.map((benefit, index) => (
  <div key={index}>
    <benefit.icon className="w-8 h-8" />
    <h3>{benefit.title}</h3>
    <p>{benefit.description}</p>
  </div>
))
```

### Form Handling Pattern

**Contact Form Example** (`app/contact/page.tsx`):
```tsx
'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## API Routes

### Contact Form API

**File**: `app/api/contact/route.ts`

**Pattern**:
```tsx
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Process form (send email, save to DB, etc.)
    // Currently logs to console for demo purposes
    console.log('Form submission:', body);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**Current Implementation**: Logs to console (demo mode)

**Production TODO**: Integrate with email service (Resend, SendGrid, etc.)

---

## Animation Patterns

### Framer Motion

**Basic Fade-In**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

**Scroll-Triggered Animation**:
```tsx
const [ref, inView] = useInView({
  triggerOnce: true,    // Animate once
  threshold: 0.1        // Trigger when 10% visible
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

**Staggered Children**:
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Hover Effects**:
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ duration: 0.2 }}
>
  {content}
</motion.div>
```

### CSS Transitions

**Tailwind Transition Classes**:
```css
/* Fast transitions (buttons, hovers) */
transition-all duration-200

/* Medium transitions (cards, shadows) */
transition-shadow duration-300

/* Slow transitions (page animations) */
transition-transform duration-500
```

**Common Effects**:
```css
hover:shadow-lg            /* Shadow on hover */
hover:-translate-y-1       /* Lift effect */
hover:scale-105           /* Zoom effect */
hover:bg-sky-600          /* Color change */
```

---

## Accessibility Guidelines

### Semantic HTML
Always use semantic elements:
```html
<header>  <!-- Header component -->
<nav>     <!-- Navigation menus -->
<main>    <!-- Main content area -->
<section> <!-- Page sections -->
<article> <!-- Self-contained content -->
<footer>  <!-- Footer component -->
```

### Heading Hierarchy
Maintain proper heading order:
```html
<h1> - Page title (one per page)
  <h2> - Major sections
    <h3> - Subsections
      <h4> - Minor headings
```

### ARIA Attributes

**Accordion**:
```tsx
<button
  aria-expanded={isOpen}
  aria-controls={`content-${id}`}
>
```

**Icon Buttons**:
```tsx
<button aria-label="Open menu">
  <MenuIcon />
</button>
```

**Image Alt Text**:
```tsx
<img
  src="/images/product.jpg"
  alt="SkyGlider portable leg movement device in use"
/>
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Focus states with `focus:ring-2`
- Tab order should be logical
- Image gallery supports arrow keys

### Color Contrast
- Text on white: `text-gray-900` (900), `text-gray-700` (700)
- Ensure 4.5:1 contrast ratio for body text
- Ensure 3:1 contrast ratio for large text
- Test with contrast checkers

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
```

---

## AI Assistant Guidelines

### Understanding the Project Context

**Product**: SkyGlider is a physical product (leg movement device), NOT software.

**Website Purpose**: Marketing landing page to drive TikTok Shop sales.

**Target Audience**: Travelers, office workers, students seeking affordable wellness.

**Tone & Voice**:
- Friendly and accessible
- Emphasize simplicity
- Value-focused (affordable movement)
- Action-oriented (clear CTAs)

### Making Code Changes

#### Before Making Changes

1. **Read the relevant files first** - Always use the Read tool
2. **Understand the existing patterns** - Match the codebase style
3. **Check for similar components** - Reuse existing patterns
4. **Consider responsive design** - Test mobile, tablet, desktop

#### Preferred Component Approach

**Always prefer editing over creating**:
- Edit existing components when possible
- Create new components only when necessary
- Keep components in `app/components/` directory

**Component Checklist**:
- [ ] TypeScript interface for props
- [ ] Default export
- [ ] Responsive design (mobile-first)
- [ ] Accessibility (semantic HTML, ARIA)
- [ ] Consistent styling (Tailwind classes)

#### Styling Guidelines

**Use Tailwind classes exclusively**:
- NO CSS modules
- NO inline styles (except rare cases)
- NO styled-components

**Match existing patterns**:
- Color: `sky-500`, `cyan-500`, `gray-900`, `gray-700`
- Spacing: `gap-8`, `py-12`, `mb-6`
- Typography: `text-4xl font-bold`, `text-base leading-relaxed`
- Transitions: `transition-all duration-200`

**Responsive breakpoints**:
```tsx
className="text-2xl sm:text-3xl lg:text-4xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-6 sm:px-8 lg:px-12"
```

#### TypeScript Best Practices

**Always use types**:
```tsx
// Good
const [count, setCount] = useState<number>(0);
const [data, setData] = useState<FormData>({});

// Bad
const [count, setCount] = useState(0);  // Inferred, but be explicit
const [data, setData] = useState<any>({}); // NEVER use any
```

**Define interfaces for props**:
```tsx
// Good
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

// Bad - No interface
function Button(props) { }
```

### Common Tasks

#### Adding a New Page

1. Create page file: `app/new-page/page.tsx`
2. Use the page template:
```tsx
'use client';

import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function NewPage() {
  return (
    <div className="py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-black text-gray-900 mb-6">
            Page Title
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Page description
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
```
3. Add to navigation in `Header.tsx` and `Footer.tsx`

#### Adding a New Component

1. Create file: `app/components/ComponentName.tsx`
2. Define TypeScript interface
3. Use default export
4. Test in a page

#### Modifying Styles

1. **Global styles**: Edit `app/globals.css`
2. **Component styles**: Update Tailwind classes inline
3. **Color scheme**: Update CSS variables in `globals.css`
4. **Typography**: Update font imports or classes

#### Adding Images

1. Place in `/public/images/` directory
2. Reference with `/images/filename.jpg`
3. Provide descriptive alt text
4. Consider multiple sizes for responsive design

#### Updating SEO Metadata

Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "New Title",
  description: "New description",
  keywords: ["keyword1", "keyword2"],
  // ...
};
```

#### Adding a Form

1. Create client component (`'use client'`)
2. Use the form handling pattern (see Code Patterns section)
3. Create API route in `app/api/route-name/route.ts`
4. Add validation on both client and server

### Debugging Tips

**Common Issues**:

1. **"use client" missing**:
   - Add to components using hooks, state, or browser APIs
   - Error: "useState only works in Client Components"

2. **Image not loading**:
   - Check path: `/images/filename.jpg` (starts with `/`)
   - Verify file exists in `/public/images/`

3. **Tailwind classes not working**:
   - Avoid dynamic class names: `text-${color}-500` ❌
   - Use complete class names: `text-sky-500` ✅

4. **TypeScript errors**:
   - Check prop types match interface
   - Ensure all required props are passed

### Git & Deployment

**Before Committing**:
1. Test locally (`npm run dev`)
2. Build successfully (`npm run build`)
3. Check for TypeScript errors
4. Verify responsive design

**Commit Messages**:
- Concise and descriptive
- Present tense: "Add feature" not "Added feature"
- Examples: "Update contact form validation", "Fix mobile menu styling"

**Branch Naming**:
- Must start with `claude/`
- Include session ID

**Push Command**:
```bash
git add .
git commit -m "Description of changes"
git push -u origin claude/branch-name
```

### Content Guidelines

**Writing Style**:
- Clear and concise
- Active voice
- Benefit-focused
- Scannable (short paragraphs, bullet points)

**Placeholder Content**:
If you need placeholder content:
- Product name: "SkyGlider"
- Email: "hello@theskyglider.com"
- TikTok: "@skyglider"
- URL: "https://theskyglider.com"

**Avoid**:
- Lorem ipsum text
- Placeholder images from external sources
- Overly technical jargon
- Excessive exclamation marks

---

## File Reference Quick Guide

### Most Frequently Modified Files

1. **Page content**: `app/{page-name}/page.tsx`
2. **Global styles**: `app/globals.css`
3. **Navigation**: `app/components/Header.tsx`, `app/components/Footer.tsx`
4. **Homepage**: `app/components/HomePage.tsx`
5. **SEO metadata**: `app/layout.tsx`

### Configuration Files (Rarely Changed)

- `next.config.ts` - Next.js settings
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - Linting rules
- `postcss.config.mjs` - PostCSS/Tailwind setup
- `package.json` - Dependencies

### Static Assets

- **Images**: `/public/images/`
- **Icons**: `@heroicons/react` (imported)
- **Fonts**: Google Fonts (Inter) via `globals.css`

---

## Questions & Troubleshooting

### Where should I add a new component?
`app/components/ComponentName.tsx`

### How do I add a new page?
Create `app/page-name/page.tsx` and add to navigation

### How do I change colors?
Update Tailwind classes or CSS variables in `globals.css`

### How do I add animations?
Use Framer Motion patterns (see Animation Patterns section)

### How do I make a component responsive?
Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

### How do I add a form?
See Form Handling Pattern section

### How do I update SEO?
Edit metadata in `app/layout.tsx`

### Where are images stored?
`/public/images/` directory

### How do I test locally?
`npm run dev` → http://localhost:3000

### How do I deploy?
Push to main branch (auto-deploys to Vercel)

---

## Appendix: ESLint Configuration

```js
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
```

**Key Rules**:
- Unescaped entities allowed (apostrophes in JSX)
- Unused variables are warnings (not errors)
- `<img>` tag allowed (not forcing Next.js `<Image>`)

---

## Document Changelog

- **2025-11-18**: Initial comprehensive documentation created

---

## Additional Resources

- **README.md**: Project setup and overview
- **DEPLOYMENT.md**: Vercel deployment guide
- **ANALYTICS-SETUP.md**: Analytics integration instructions
- **STATUS.md**: Current project status and roadmap
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS v4 Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/

---

**Remember**: This is a simple, focused marketing website. Keep changes minimal, maintain consistency, and prioritize user experience. When in doubt, match existing patterns!
