# Muhammad Ibrahim Portfolio Website Documentation

## 1. Project Overview

### Project Name & Purpose
**Muhammad Ibrahim Portfolio Website** - A modern, responsive portfolio website showcasing the work, skills, and achievements of Muhammad Ibrahim, a third-year Software Engineering student at GIKI.

### Target Audience
- Potential employers and recruiters
- Academic institutions
- Fellow developers and collaborators
- Anyone interested in Muhammad's technical journey

### Technology Stack & Architecture
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **UI Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans
- **Theme Management**: next-themes
- **Deployment**: Configured for modern hosting platforms

### Key Features
- 🌗 Dark/light theme toggle with system preference detection
- 📱 Fully responsive design across all devices
- 🎯 Project showcase with detailed information
- 🏆 Skills categorization and achievements display
- 📄 Integrated resume viewer with PDF preview
- 📧 Contact section for professional networking
- ⚡ Optimized performance with Next.js 14
- 🎨 Modern UI with smooth animations and transitions

## 2. Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm package manager
- Git for version control

### Installation Instructions

````bash
# Clone the repository
git clone <repository-url>
cd PortfolioWebsite

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
````

### Environment Setup
No environment variables are required for basic functionality. The project uses static data from data.ts.

### Running the Development Server

````bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
````

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

````bash
# Build for production
npm run build

# Start production server
npm start
````

## 3. Project Structure

````
src/
├── app/                    # Next.js App Router pages
│   ├── (main)/            # Main layout group
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── home/          # Home page
│   │   ├── projects/      # Projects page
│   │   └── resume/        # Resume page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/             # Reusable React components
│   ├── layout/            # Layout-specific components
│   │   ├── header.tsx     # Navigation header
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx   # Theme switcher
│   ├── ui/                # shadcn/ui components
│   └── project-card.tsx   # Project display component
└── lib/                   # Utility functions and data
    ├── data.ts            # Static website data
    └── utils.ts           # Utility functions
````

### Key Files & Responsibilities

- **`app/layout.tsx`**: Root layout with theme provider and global styles
- **`lib/data.ts`**: Central data store for all website content
- **`components/layout/header.tsx`**: Navigation with responsive mobile menu
- **`components/project-card.tsx`**: Reusable project display component
- **tailwind.config.ts**: Tailwind CSS configuration with custom theme

### Routing Structure (App Router)
- `/` - Home page with hero section and featured content
- `/about` - Detailed about page with skills and achievements
- `/projects` - Complete projects showcase
- `/resume` - Resume viewer with PDF preview
- `/contact` - Contact information and form

## 4. Component Documentation

### Header Component
**Location**: header.tsx

**Purpose**: Main navigation component with responsive design and theme toggle.

**Features**:
- Desktop navigation with active state highlighting
- Mobile hamburger menu with sheet overlay
- Integrated theme toggle button
- Smooth transitions and hover effects

**Usage**:
````tsx
import { Header } from '@/components/layout/header';

// Used in layout.tsx
<Header />
````

### ProjectCard Component
**Location**: project-card.tsx

**Purpose**: Displays project information in a consistent, attractive format.

**Props Interface**:
````tsx
interface ProjectCardProps {
  project: Project; // From data.ts
}
````

**Features**:
- Project image with aspect ratio preservation
- Technology badges
- Role and features listing
- GitHub and live demo links
- Responsive design with hover effects

**Usage**:
````tsx
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';

{projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}
````

### ThemeProvider Component
**Location**: theme-provider.tsx

**Purpose**: Wraps the application with theme context using next-themes.

**Usage**:
````tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
````

## 5. Data Management

### Data Structure
All website content is centrally managed in data.ts.

**Key Data Types**:

````typescript
// Personal information
export const personalInfo = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  leetcode: string;
  resumeUrl: string;
  heroStatement: string;
};

// Skill categories
export type SkillCategory = {
  name: string;
  icon?: LucideIcon;
  skills: Skill[];
};

// Project information
export type Project = {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  role: string;
  features: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveDemoUrl?: string;
};

// Achievements
export type Achievement = {
  id: string;
  title: string;
  description: string;
  year?: string;
  icon?: LucideIcon;
};
````

### Data Flow
1. Data is imported from `lib/data.ts` into page components
2. Page components pass data to child components as props
3. Components render data with appropriate styling and interactions

### External Services
- **Images**: Placeholder images from placehold.co (configured in `next.config.ts`)
- **Resume**: PDF file served from public directory
- **Icons**: Lucide React icon library

## 6. Styling and Theming

### CSS Framework
**Primary**: Tailwind CSS with custom configuration in tailwind.config.ts

### Theme System Implementation
- **Theme Provider**: next-themes for seamless dark/light mode switching
- **CSS Variables**: Custom CSS variables for consistent theming
- **Color Palette**: Extended Tailwind colors with semantic naming

**Key Theme Colors**:
````css
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(222.2 84% 4.9%);
  --primary: hsl(222.2 47.4% 11.2%);
  --secondary: hsl(210 40% 96%);
  --accent: hsl(210 40% 96%);
  --muted: hsl(210 40% 96%);
  /* ... additional variables */
}
````

### Component Styling Patterns
- **shadcn/ui**: Pre-built, accessible components with consistent styling
- **Utility-First**: Tailwind CSS classes for rapid development
- **Responsive Design**: Mobile-first approach with breakpoint-specific styles
- **Animations**: Smooth transitions and hover effects

### Responsive Design Approach
````tsx
// Example responsive classes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
className="text-4xl font-bold tracking-tight sm:text-5xl"
className="flex flex-col sm:flex-row justify-center items-center gap-4"
````

## 7. Configuration

### Build Configuration (`next.config.ts`)
````typescript
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // For development flexibility
  },
  eslint: {
    ignoreDuringBuilds: true, // For streamlined builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
````

### Tailwind Configuration
- **Content Paths**: Configured to scan all relevant files
- **Theme Extension**: Custom colors, animations, and utilities
- **Dark Mode**: Class-based dark mode implementation

### IDX Configuration (`.idx/dev.nix`)
- Configured for Google IDX development environment
- Includes preview setup for web deployment

## 8. Development Guidelines

### Code Organization Patterns
- **Components**: Single responsibility, reusable components
- **Data Separation**: All content in centralized data file
- **Type Safety**: TypeScript interfaces for all data structures
- **File Naming**: kebab-case for files, PascalCase for components

### Naming Conventions
- **Components**: PascalCase (e.g., `ProjectCard`, `ThemeToggle`)
- **Files**: kebab-case (e.g., project-card.tsx, `theme-toggle.tsx`)
- **Variables**: camelCase (e.g., `personalInfo`, `featuredProjects`)
- **Types**: PascalCase (e.g., `Project`, `SkillCategory`)

### Best Practices
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Image optimization with Next.js Image component
- **SEO**: Proper meta tags and structured data
- **Maintainability**: Clear component separation and data abstraction

## 9. Deployment

### Build Process
1. **Development**: `npm run dev` for local development
2. **Build**: `npm run build` generates optimized production build
3. **Start**: `npm start` runs production server locally

### Deployment Platforms
The application is configured to work with:
- **Vercel**: Optimal for Next.js applications
- **Netlify**: With appropriate build settings
- **Google IDX**: Development and preview environment

### Configuration Requirements
- Node.js 18.17+ runtime
- Build command: `npm run build`
- Output directory: .next
- No environment variables required for basic functionality

## 10. Troubleshooting

### Common Issues & Solutions

**Issue**: Dark mode not working properly
**Solution**: Ensure ThemeProvider is properly wrapped in layout and `suppressHydrationWarning` is used

**Issue**: Images not loading
**Solution**: Check that images are in the public directory and paths are correct in `data.ts`

**Issue**: PDF resume not displaying
**Solution**: Verify PDF file exists in public directory and path matches `personalInfo.resumeUrl`

**Issue**: Build failures
**Solution**: 
- Check TypeScript errors (currently ignored in config)
- Verify all imports are correct
- Ensure all required dependencies are installed

### Debug Strategies
1. **Console Logging**: Add console.log statements in components
2. **Network Tab**: Check for failed resource loads
3. **React DevTools**: Inspect component state and props
4. **Build Locally**: Test production build before deployment

### Performance Optimization
- **Image Optimization**: Use Next.js Image component with proper sizing
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Bundle Analysis**: Use `@next/bundle-analyzer` for bundle inspection

---
