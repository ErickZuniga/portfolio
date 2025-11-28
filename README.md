# Portfolio

Welcome to my professional portfolio website! This is a modern, responsive web application built with React that showcases my technical expertise, professional experience, and skills as a software developer.

## About This Site

This portfolio serves as a comprehensive showcase of my work, featuring:

- **Professional Experience**: Detailed timeline of my career progression and key roles.
- **Technical Skills**: Overview of my programming languages, frameworks, and tools.
- **Project Highlights**: Right now only one project is displayed here, since most of my experience has been for larger enterprises. This is the only side project of mine I can show off.
- **Contact Information**: Professional networking and contact details.

The site is built with performance and accessibility in mind, providing an optimal viewing experience across all devices.

## 🛠️ Tech Stack

**Frontend Framework:**
- **React 19.2.0** - Modern UI framework with latest features
- **TypeScript 5.8.2** - Type-safe development and enhanced IDE support
- **Vite 6.2.0** - Lightning-fast build tool and development server

**Animation & UX:**
- **Framer Motion 12.23.24** - Production-ready animation library
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Glass Morphism** - Modern UI effects with backdrop filters

**Development Tools:**
- **ES Modules** - Modern JavaScript module system
- **Path Aliases** - Clean import structure with `@/` resolution
- **Hot Module Replacement** - Instant development feedback

**External Resources:**
- **Google Fonts** - Cinzel & Fauna One typography
- **AI Studio CDN** - Optimized dependency loading

## ✨ Features

**🎨 Visual Design**
- **Dark/Light Mode**: Smooth theme switching with system preference detection
- **Glass Morphism**: Modern translucent UI effects with backdrop blur
- **Animated Background**: 4 floating blobs with continuous motion
- **Responsive Design**: Mobile-first approach that adapts to all screen sizes
- **Custom Typography**: Professional serif fonts optimized for readability

**🌐 Internationalization**
- **Bilingual Support**: English/Spanish language switching
- **Context API**: Custom state management for translations
- **Type-Safe Content**: TypeScript-managed multilingual content

**⚡ Performance**
- **Optimized Builds**: Vite-powered development and production bundles
- **Component Architecture**: Modular React components with lazy loading potential
- **Semantic HTML5**: Accessibility-focused markup structure
- **CDN Dependencies**: Fast loading of external libraries

**🎭 Animations & Interactions**
- **Scroll Animations**: Elements animate into view on scroll
- **Hover Effects**: Interactive feedback on all clickable elements
- **Smooth Transitions**: 300-500ms duration for state changes
- **Staggered Reveals**: Sequential animation timing for visual appeal

**♿ Accessibility**
- **WCAG Compliance**: Screen reader support and keyboard navigation
- **ARIA Labels**: Descriptive labels for interactive elements
- **Color Contrast**: Proper ratios in both light and dark themes
- **Focus Management**: Clear visual focus states

**📱 Responsive Sections**
- **Hero Section**: Adaptive layout for mobile and desktop
- **Experience Timeline**: Professional work history with tech stacks
- **Projects Showcase**: Personal portfolio with external links
- **Skills Grid**: Responsive skill cards with custom icons
- **Education Timeline**: Academic background and qualifications

## 📁 Project Structure

```
portfolio/
├── 📄 components/          # React components
│   ├── Hero.tsx            # Hero section with animations
│   ├── Timeline.tsx        # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills grid display
│   ├── Education.tsx       # Education timeline
│   ├── ThemeToggle.tsx     # Dark/light mode switcher
│   └── ...                 # Additional UI components
├── 📄 data.ts             # Portfolio content and translations
├── 📄 types.ts            # TypeScript type definitions
├── 📄 App.tsx             # Main application component
├── 📄 index.tsx           # Application entry point
├── 📄 LanguageContext.tsx # Internationalization context
└── 📄 vite.config.ts      # Vite build configuration
```

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
