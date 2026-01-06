# React Portfolio 2026

A modern, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features glassmorphism design, smooth animations, and a fully responsive layout.

## Features

- 🎨 Modern glassmorphism design with frosted glass effects
- 📱 Fully responsive layout (mobile-first approach)
- ⚡ Fast performance with Vite
- 🎭 Framer Motion animations
- 🎯 Smooth scrolling navigation
- 📧 Contact form integration (EmailJS)
- 🌙 Dark theme with gradient accents
- 🚀 Easy to customize and extend

## Tech Stack

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Tabler Icons** - Icon library
- **EmailJS** - Contact form handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional, for contact form):
```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:
- `VITE_SERVICE_ID`
- `VITE_TEMPLATE_ID`
- `VITE_PUBLIC_KEY`

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── ModalPortal.tsx
├── lib/
│   ├── asset-helper.ts
│   ├── config.ts
│   ├── link-helper.ts
│   └── props-types.d.ts
├── layout/
│   ├── SectionWrapper.tsx
│   └── ScrollAnimationWrapper.tsx
├── assets/ (images, logos, CV)
├── App.tsx
└── main.tsx
```

## Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Breakpoints: 320px, 375px, 768px, 1024px, 1440px+
- Fluid typography using clamp()
- Touch-friendly interactive elements (minimum 44x44px)
- Responsive grid layouts
- Optimized images with lazy loading

## Customization

### Colors

Edit the gradient colors in `src/index.css`:
```css
body {
  @apply bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900;
}
```

### Glassmorphism Effects

Customize glass effects in `src/index.css`:
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
```

## License

MIT

