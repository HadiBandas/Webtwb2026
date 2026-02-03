# 🚀 Website Performance Optimization Guide

## Taman Wisata Bougenville - React + Vite + Tailwind

---

## 📊 Executive Summary

### Performance Issues Identified

| Issue | Severity | Impact | Solution |
|-------|----------|--------|----------|
| `mountain-wellness.png` (7.7 MB) | 🔴 CRITICAL | LCP +5s | Compress to WebP (~200KB) |
| `mlh-hero.webp` (1.4 MB) | 🔴 HIGH | LCP +2s | Compress to ~150KB |
| Google Fonts blocking render | 🟠 MEDIUM | FCP +1.5s | Async loading |
| GA4/FB Pixel in `<head>` | 🟠 MEDIUM | FCP +0.5s | Defer scripts |

### Expected Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **LCP** | 8.6s | < 2.5s | **-70%** |
| **FCP** | 5.1s | < 1.8s | **-65%** |
| **Speed Index** | 5.8s | < 3.4s | **-40%** |
| **Page Size** | ~10 MB | ~2 MB | **-80%** |

---

## 🔧 Quick Start

### Step 1: Install Dependencies

```bash
cd "c:\Users\User\Documents\Donwload File Asus TUF\Download Laptop\TWB WEB\taman-wisata-bougenville"
npm install
```

This will install new dependencies:
- `sharp` - Image processing library
- `glob` - File pattern matching
- `terser` - JavaScript minification

### Step 2: Optimize Images

```bash
npm run optimize-images
```

This script will:
1. Scan all images in `public/images/`
2. Convert to WebP format (80% quality)
3. Resize large images (max 1920px width)
4. Save to `public/images/optimized/`
5. Generate `image-optimization-report.csv`

### Step 3: Build & Test

```bash
# Development build (no image optimization)
npm run build

# Production build (with image optimization)
npm run build:prod

# Preview the build
npm run preview

# Run Lighthouse audit
npm run lighthouse
```

---

## 📁 Files Modified/Created

### New Files

| File | Purpose |
|------|---------|
| `scripts/optimize-images.js` | Batch image optimization script |
| `components/ui/OptimizedImage.tsx` | Reusable optimized image component |
| `README_OPTIMIZATION.md` | This documentation |

### Modified Files

| File | Changes |
|------|---------|
| `index.html` | Deferred scripts, async fonts, LCP preload |
| `vite.config.ts` | Terser minification, code splitting |
| `vercel.json` | Aggressive caching headers, security headers |
| `package.json` | New dependencies and scripts |

---

## 🖼️ Image Optimization

### Priority Images

| Image | Original | Target | Priority |
|-------|----------|--------|----------|
| `mountain-wellness.png` | 7.7 MB | < 200 KB | 🔴 CRITICAL |
| `mlh-hero.webp` | 1.4 MB | < 150 KB | 🔴 HIGH |
| `fh-hero.webp` | 1.2 MB | < 150 KB | 🟠 MEDIUM |
| `emerald-atas-hero.webp` | 905 KB | < 100 KB | 🟠 MEDIUM |
| `home-page-hero.webp` | 325 KB | < 100 KB | 🟡 LOW |

### Manual Optimization (Alternative)

If the script doesn't work, use [Squoosh.app](https://squoosh.app/):

1. Upload image
2. Select **WebP** format
3. Set Quality: **80**
4. Set Resize: Max **1920px** width
5. Download and replace original

### Using OptimizedImage Component

```tsx
import { OptimizedImage, HeroImage, GalleryImage } from '@/components/ui/OptimizedImage';

// For regular images (lazy loaded)
<OptimizedImage 
  src="/images/villa.webp" 
  alt="Villa exterior" 
/>

// For hero/LCP images (priority loaded)
<HeroImage 
  src="/images/home-page-hero.webp" 
  alt="Mountain resort view" 
/>

// For gallery images (with aspect ratio)
<GalleryImage 
  src="/images/gallery/photo1.webp" 
  alt="Photo 1"
  aspectRatio="square"
/>
```

---

## 🔤 Font Optimization

### Current Setup (Optimized)

Fonts are now loaded **asynchronously** with:

1. **Preload** - Hints browser to prioritize font download
2. **Print media trick** - Loads non-blocking, switches to `all` on load
3. **Noscript fallback** - Works without JavaScript

### Self-Hosting Fonts (Optional - Best Performance)

1. Download fonts from [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/)
2. Place in `public/fonts/`
3. Add `@font-face` rules in `styles.css`
4. Remove Google Fonts link from `index.html`

---

## 📜 Third-Party Scripts

### Current Setup (Optimized)

Analytics scripts now load **after page load** with a 2-second delay:

```javascript
// Scripts load in this order:
1. Page content loads (0-2s)
2. User can interact
3. GA4 loads (2s after load)
4. FB Pixel loads (2.5s after load)
```

This ensures:
- ✅ FCP is not blocked
- ✅ LCP is not blocked
- ✅ Analytics still works
- ✅ Better user experience

---

## ⚡ Vite Build Optimization

### Code Splitting

Chunks are split by change frequency:

| Chunk | Contents | Cache Duration |
|-------|----------|----------------|
| `react-vendor` | React, ReactDOM | Long (rarely changes) |
| `ui-vendor` | Framer Motion, Icons | Medium |
| `i18n-vendor` | i18next | Medium |
| `carousel` | Embla Carousel | Long |
| `datepicker` | Date picker, date-fns | Long |

### Minification

- **Terser** minifier (more aggressive than esbuild)
- `console.log` removed in production
- Comments stripped

---

## 🌐 Vercel Configuration

### Caching Strategy

| Resource | Cache Duration | Header |
|----------|----------------|--------|
| Images | 1 year | `max-age=31536000, immutable` |
| JS/CSS | 1 year | `max-age=31536000, immutable` |
| Fonts | 1 year | `max-age=31536000, immutable` |
| HTML | No cache | Browser default |
| Sitemap | 1 day | `max-age=86400` |

### Security Headers

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## ✅ Verification Checklist

### Before Deploy

- [ ] Run `npm run optimize-images`
- [ ] Check `image-optimization-report.csv` for results
- [ ] Verify images in `public/images/optimized/` look good
- [ ] Run `npm run build`
- [ ] Run `npm run preview`
- [ ] Open http://localhost:3001
- [ ] Visually check all pages
- [ ] Test booking form
- [ ] Run Lighthouse audit

### After Deploy

- [ ] Run PageSpeed Insights
- [ ] Check LCP < 2.5s
- [ ] Check FCP < 1.8s
- [ ] Verify analytics tracking works
- [ ] Monitor error logs in Vercel

---

## 🔄 Rollback Instructions

If something breaks:

### Restore Files

The original files were backed up by Git. To rollback:

```bash
# View changed files
git status

# Rollback specific file
git checkout HEAD~1 -- index.html

# Rollback all changes
git checkout HEAD~1 .
```

### Keep Original Images

Original images are still in `public/images/`. Optimized versions are in `public/images/optimized/`. To remove optimized versions:

```bash
rm -rf public/images/optimized
```

---

## 📈 Monitoring

### Recommended Tools

1. **Vercel Analytics** - Built-in performance monitoring
2. **Google PageSpeed Insights** - Core Web Vitals
3. **Lighthouse CI** - Automated testing
4. **WebPageTest** - Detailed waterfall analysis

### Key Metrics to Track

| Metric | Good | Needs Improvement | Poor |
|--------|------|-------------------|------|
| LCP | < 2.5s | 2.5s - 4s | > 4s |
| FID | < 100ms | 100-300ms | > 300ms |
| CLS | < 0.1 | 0.1-0.25 | > 0.25 |
| FCP | < 1.8s | 1.8s - 3s | > 3s |
| TTFB | < 0.8s | 0.8s - 1.8s | > 1.8s |

---

## 🆘 Troubleshooting

### Image Script Fails

**Error**: `Cannot find module 'sharp'`

```bash
npm install sharp --force
```

**Error**: `ENOENT: no such file or directory`

Make sure you're in the project root directory.

### Build Fails

**Error**: `terser not found`

```bash
npm install terser --save-dev
```

### Fonts Not Loading

Check browser console for CORS errors. If using self-hosted fonts, ensure files are in `public/fonts/`.

### Analytics Not Working

Analytics load 2 seconds after page load. Wait a few seconds, then check:
1. Network tab for gtag.js request
2. Console for any CSP errors
3. GA4 real-time reports

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review Git commit history
3. Run Lighthouse for diagnostics
4. Check Vercel deployment logs

---

**Last Updated**: February 2026
**Version**: 1.0.0
