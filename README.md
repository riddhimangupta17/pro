# Celesté Motors - Official Website

A modern, fully responsive static website for Celesté Motors, a premium Indian automotive manufacturer. Built with Next.js, TypeScript, and TailwindCSS.

## 🚗 About Celesté Motors

Celesté Motors is dedicated to making luxury accessible. We offer premium sedans and high-performance sports cars with innovative technology and competitive pricing.

## ✨ Features

- **8 Fully Responsive Pages:**
  - Home - Hero banner with testimonials slider
  - About Us - Company story and milestones
  - Innovation - Cutting-edge technologies showcase
  - R&D - Research and development achievements
  - Models - Premium sedans and sports cars catalog
  - Customization - Interactive vehicle configurator with real-time price calculator
  - Dealerships - Location finder with Google Maps integration
  - Contact - Contact form and information

- **Interactive Features:**
  - Auto-rotating testimonials slider
  - JavaScript-powered price calculator on customization page
  - Dynamic model filtering (Sedans/Sports Cars)
  - City-based dealership filters
  - Responsive navigation with mobile menu
  - Smooth scrolling and animations

- **Technical Highlights:**
  - Built with Next.js 16 and TypeScript
  - Styled with TailwindCSS 4
  - Fully static export for fast hosting
  - SEO optimized with meta tags
  - Accessibility features (ARIA labels, keyboard navigation)
  - Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riddhimangupta17/pro.git
cd pro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

Generate a static export:
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📁 Project Structure

```
pro/
├── app/                      # Next.js app directory
│   ├── about/               # About Us page
│   ├── contact/             # Contact page
│   ├── customization/       # Vehicle customization page
│   ├── dealerships/         # Dealership locations page
│   ├── innovation/          # Innovation showcase page
│   ├── models/              # Vehicle models page
│   ├── research-development/ # R&D page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   └── TestimonialsSlider.tsx # Testimonials carousel
├── public/                  # Static assets
│   └── images/              # Image assets
└── next.config.ts           # Next.js configuration
```

## 🎨 Design Features

- **Color Scheme:** Navy blue and slate with blue accents
- **Typography:** Inter font family for clean, modern look
- **Responsive Breakpoints:** Mobile, tablet, and desktop optimized
- **Animations:** Smooth transitions and fade-in effects
- **Icons:** SVG-based icons for crisp display

## 🚢 Deployment

This static site can be deployed on:
- **GitHub Pages** - Add the `out/` directory contents
- **Netlify** - Connect repository and deploy
- **Vercel** - One-click deployment from GitHub

## 📄 License

© 2025 Celesté Motors. All rights reserved.

## 🤝 Contributing

This is a demonstration project. For inquiries, contact: info@celestemotors.in
