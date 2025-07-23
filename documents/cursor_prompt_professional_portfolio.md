# Professional Portfolio Website - Cursor AI Development Brief

## Project Overview
Build a high-performance, professional portfolio website following a content-first design system with progressive disclosure model. Target audience: recruiters (30-second scanners), potential clients (project-focused), and industry peers (idea-driven).

## Technical Specifications

### Tech Stack
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **Build Tool**: Vite 5+
- **Animations**: Framer Motion 11+
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: Zustand (lightweight, minimal state needs)
- **Analytics**: Google Analytics 4 + Hotjar integration ready

### File Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections (Hero, Projects, etc.)
│   └── layout/       # Layout components (Header, Footer)
├── hooks/            # Custom React hooks
├── lib/              # Utilities and configurations
├── types/            # TypeScript type definitions
├── data/             # Static data (projects, experience)
├── styles/           # Global styles and Tailwind config
└── assets/           # Images, icons, fonts
```

### CSS Methodology
- **Tailwind CSS** with custom design tokens
- **Mobile-first** responsive approach
- **Component-based** utility classes
- **Consistent naming**: Use semantic class names for complex components

## Design System Integration

### Color Palette
```css
/* Primary Colors */
--color-primary: #1a1a1a;      /* Near black for text */
--color-secondary: #4a5568;    /* Warm gray for secondary text */
--color-accent: #3b82f6;       /* Blue for CTAs and links */
--color-accent-hover: #2563eb; /* Darker blue for hover states */

/* Neutral Colors */
--color-background: #ffffff;    /* Pure white background */
--color-surface: #f8fafc;      /* Light gray for sections */
--color-border: #e2e8f0;       /* Subtle borders */

/* Status Colors */
--color-success: #10b981;      /* Green for success states */
--color-warning: #f59e0b;      /* Amber for warnings */
--color-error: #ef4444;        /* Red for errors */
```

### Typography Hierarchy
```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Scale: 1.2x ratio */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing/Grid System
- **12-column responsive grid**
- **8px base spacing unit** (space-2 = 8px, space-4 = 16px, etc.)
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px)
- **Container max-width**: 1200px with responsive padding

### Component Library Standards
```typescript
// Button Component Props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// Card Component Props
interface CardProps {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  link?: string;
  className?: string;
}
```

### Animation Patterns
```typescript
// Standard Framer Motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 }
};
```

## Code Quality Standards

### Accessibility Requirements
- **WCAG 2.1 AA compliance**
- **Semantic HTML5** elements
- **ARIA labels** for interactive elements
- **Focus management** for keyboard navigation
- **Alt text** for all images
- **Color contrast ratio** minimum 4.5:1

### Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **No IE support** (modern web standards)

### Performance Benchmarks
- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle size**: < 500KB gzipped

### SEO Considerations
```typescript
// Meta tags structure
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
}
```

## Specific Implementation Details

### Component Structure
```typescript
// Section component template
interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

const Section: React.FC<SectionProps> = ({ 
  id, title, subtitle, children, className, background = 'white' 
}) => {
  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24',
        background === 'gray' && 'bg-gray-50',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
```

### State Management Patterns
```typescript
// Zustand store for UI state
interface UIStore {
  isMenuOpen: boolean;
  activeSection: string;
  isLoading: boolean;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
  setLoading: (loading: boolean) => void;
}

const useUIStore = create<UIStore>((set) => ({
  isMenuOpen: false,
  activeSection: 'hero',
  isLoading: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
```

### Responsive Breakpoints
```css
/* Tailwind custom breakpoints */
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Error Handling
```typescript
// Error boundary for React components
class ErrorBoundary extends React.Component<Props, State> {
  // Standard error boundary implementation
}

// Form validation with Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

## Task List to Complete

- [ ] **Navigation Component**: Sticky header with smooth scroll navigation, mobile hamburger menu
- [ ] **Hero Section**: Value proposition, professional photo, key credibility indicators with scroll CTA
- [ ] **Projects Section**: Grid layout with filterable project cards, modal/drawer for detailed views
- [ ] **Experience Section**: Timeline component with expandable details, skills visualization
- [ ] **About/Process Section**: Personal story with methodology breakdown, team/collaboration focus
- [ ] **Ideas/Blog Section**: Article preview cards with search/filter functionality
- [ ] **Contact Section**: Form with validation, social links, availability status
- [ ] **Performance Optimization**: Image optimization, lazy loading, code splitting
- [ ] **Accessibility Testing**: Screen reader testing, keyboard navigation, color contrast validation
- [ ] **Mobile Optimization**: Touch interactions, responsive images, performance on mobile devices

## Quality Criteria

### Code Standards
- **TypeScript strict mode** enabled
- **ESLint + Prettier** configuration
- **Consistent naming conventions** (camelCase for variables, PascalCase for components)
- **Props interfaces** for all components
- **Error boundaries** for graceful failure handling

### Design Implementation
- **Pixel-perfect** implementation of designs
- **Smooth animations** that enhance UX without being distracting
- **Loading states** for all async operations
- **Empty states** for sections without content
- **Hover/focus states** for all interactive elements

### Performance Requirements
- **Bundle analysis** to identify optimization opportunities
- **Image optimization** with proper formats (WebP, AVIF fallbacks)
- **Lazy loading** for below-the-fold content
- **Preloading** for critical resources
- **Service worker** for offline functionality (optional)

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run accessibility tests
npm run a11y
```

## Deployment Considerations
- **Static site generation** for optimal performance
- **CDN deployment** (Vercel, Netlify, or similar)
- **Environment variables** for analytics and form handling
- **Domain configuration** with SSL
- **Analytics integration** (GA4, Hotjar)