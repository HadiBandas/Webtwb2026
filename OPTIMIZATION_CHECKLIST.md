# Performance Optimization Checklist

## Pre-Optimization (Current State)

- [ ] LCP: 8.6s (Target: < 2.5s)
- [ ] FCP: 5.1s (Target: < 1.8s)
- [ ] Speed Index: 5.8s (Target: < 3.4s)
- [ ] Lighthouse Score: ~50-60 (Target: 90+)

---

## Phase 1: Quick Wins (Highest Impact)

### 1.1 Image Optimization
- [ ] Install dependencies: `npm install`
- [ ] Run optimization: `npm run optimize-images`
- [ ] Verify `mountain-wellness.png` is < 200KB
- [ ] Verify `mlh-hero.webp` is < 150KB
- [ ] Check `image-optimization-report.csv` for results
- [ ] Visual quality check on optimized images

### 1.2 Third-Party Script Deferral
- [x] Move GA4 script to after page load (done in index.html)
- [x] Move FB Pixel script to after page load (done in index.html)
- [x] Add 2-second delay for analytics loading

### 1.3 LCP Image Preload
- [x] Add preload for hero image (done in index.html)
- [ ] Verify hero image has `fetchpriority="high"`

---

## Phase 2: Font Optimization

### 2.1 Async Font Loading
- [x] Convert Google Fonts to async loading (done in index.html)
- [x] Add preload for font CSS
- [x] Add noscript fallback
- [ ] Verify fonts load without blocking

### 2.2 Font Subset (Optional)
- [ ] Download only used weights from Google Fonts Helper
- [ ] Remove unused font weights (if any)

---

## Phase 3: Build Optimization

### 3.1 Vite Configuration
- [x] Enable terser minification (done in vite.config.ts)
- [x] Configure code splitting (done in vite.config.ts)
- [x] Remove console.log in production
- [ ] Run `npm run build` successfully

### 3.2 Tailwind Optimization
- [x] Verify content paths include all files
- [x] CSS purging enabled (default in Tailwind 3)

---

## Phase 4: Caching & Delivery

### 4.1 Vercel Headers
- [x] Add cache headers for images (1 year)
- [x] Add cache headers for JS/CSS (1 year)
- [x] Add cache headers for fonts (1 year)
- [x] Add security headers

### 4.2 Deployment
- [ ] Deploy to Vercel staging
- [ ] Verify all routes work
- [ ] Check console for errors
- [ ] Run PageSpeed Insights

---

## Verification Steps

### Local Testing
- [ ] Run `npm run build`
- [ ] Run `npm run preview`
- [ ] Open http://localhost:3001
- [ ] Check DevTools Network tab
- [ ] Check DevTools Console for errors
- [ ] Run Lighthouse audit

### Visual Verification
- [ ] Homepage hero loads quickly
- [ ] All images appear correctly
- [ ] Fonts render correctly
- [ ] Animations work smoothly
- [ ] Booking form works
- [ ] Navigation works
- [ ] Mobile responsiveness

### Functional Testing
- [ ] Language switcher works
- [ ] Villa detail pages load
- [ ] Gallery loads lazily
- [ ] WhatsApp button works
- [ ] All links work

---

## Post-Optimization

### Metrics Verification
- [ ] LCP < 2.5s
- [ ] FCP < 1.8s
- [ ] Speed Index < 3.4s
- [ ] Lighthouse Score > 90

### Monitoring Setup
- [ ] Verify GA4 is tracking
- [ ] Verify FB Pixel is tracking
- [ ] Check Vercel Analytics
- [ ] Set up alerts (optional)

---

## Notes

**Date Started**: _______________
**Date Completed**: _______________
**Final Lighthouse Score**: _______________
**Issues Found**: 

_______________________________________________
_______________________________________________
_______________________________________________

**Additional Optimizations Needed**:

_______________________________________________
_______________________________________________
_______________________________________________
