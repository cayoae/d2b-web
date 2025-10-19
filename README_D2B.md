# Data2Business Website

Modern React website for Data2Business built with Vite, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React** - UI framework
- **Vite** - Build tool & dev server  
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **Netlify** - Hosting & forms

## 🎨 Design System

### Colors
- **Lime** (#8EEA44) - Primary buttons & accents
- **Forest** (#113C36) - Headings & dark text
- **Ink** (#0E1A17) - Deep text
- **Soft Gray** (#F6F9F7) - Backgrounds
- **Accent** (#2A645B) - Links & lines

### Typography
- **Font**: Inter (400, 500, 700, 800)
- **Sizes**: 48px (display), 36px (h1), 24px (h2), 18px (body), 16px (base), 14px (small)

## 🌐 Deployment to Netlify

### First Time Setup

1. **Connect to Netlify**
   - Go to netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build Settings** (auto-detected from netlify.toml)
   - Build command: npm run build
   - Publish directory: dist

3. **Enable Forms**
   - Netlify Forms are auto-detected from the Contact page
   - Check "Forms" tab in Netlify dashboard after first deploy

4. **Custom Domain**
   - Add data2.business in Site settings → Domain management
   - Configure DNS as shown in Netlify dashboard

## 📝 Content Updates

### Work/Case Studies
Edit src/data/workData.js to add or modify projects

### Reviews
Edit the reviews array in src/pages/Reviews.jsx

### WordPress Redirects
Update public/_redirects with your old WordPress URLs

## 📊 Analytics

Plausible Analytics script is in index.html. Create account at plausible.io and add your domain.

## 🖼️ Required Assets

Add these to the public folder:
- favicon.ico
- og-image.jpg (1200x630px for social sharing)
- work/ folder with project screenshots
- blog/ folder with cover images

Logo is already added from your Logo.jpeg file.

## 📞 Calendly Integration

Replace the placeholder in src/pages/Contact.jsx with your Calendly URL.

