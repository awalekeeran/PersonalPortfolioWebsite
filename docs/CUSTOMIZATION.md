# Customization Guide

This guide helps you customize various aspects of your portfolio website.

## 🎨 Color Scheme

### Changing Brand Colors

Edit `css/main.css` and modify the CSS variables:

```css
:root {
    /* Primary colors */
    --primary-color: #6366f1;        /* Main brand color */
    --primary-dark: #4f46e5;         /* Darker shade */
    --secondary-color: #8b5cf6;      /* Secondary brand color */
    --accent-color: #ec4899;         /* Accent color */
    
    /* Text colors */
    --text-primary: #1f2937;         /* Main text */
    --text-secondary: #6b7280;       /* Secondary text */
    --text-light: #9ca3af;           /* Light text */
    
    /* Background colors */
    --bg-primary: #ffffff;           /* Main background */
    --bg-secondary: #f9fafb;         /* Alternate background */
    --bg-dark: #111827;              /* Dark background (footer) */
}
```

### Pre-made Color Schemes

#### Blue & Purple (Default)
```css
--primary-color: #6366f1;
--secondary-color: #8b5cf6;
--accent-color: #ec4899;
```

#### Green & Teal
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #06b6d4;
```

#### Orange & Red
```css
--primary-color: #f97316;
--secondary-color: #ef4444;
--accent-color: #dc2626;
```

#### Purple & Pink
```css
--primary-color: #a855f7;
--secondary-color: #ec4899;
--accent-color: #f43f5e;
```

## 🔤 Typography

### Changing Fonts

Current font: **Poppins** from Google Fonts

To change the font:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Copy the `<link>` tag
4. Replace in `index.html` (around line 19):

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

5. Update `css/main.css`:

```css
:root {
    --font-primary: 'YourFont', sans-serif;
}
```

### Font Size Adjustments

In `css/main.css`, modify:

```css
:root {
    --font-size-base: 16px;      /* Base font size */
    --font-size-sm: 0.875rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
}
```

## 📐 Layout & Spacing

### Container Width

Adjust the maximum width of content:

```css
:root {
    --container-width: 1200px;  /* Default: 1200px */
}
```

Options: 1140px, 1200px, 1320px, 1400px

### Section Spacing

Modify padding between sections:

```css
:root {
    --spacing-3xl: 6rem;  /* Section padding (top/bottom) */
}
```

## 🎭 Animations

### Enable/Disable Animations

In `js/animations.js`:

**Disable all animations:**
```javascript
// Comment out the entire IntersectionObserver code block
// Lines 15-40
```

**Typing Animation for Title:**
Uncomment lines 60-90 in `js/animations.js`

**3D Card Tilt Effect:**
Uncomment lines 143-155 in `js/animations.js`

### Animation Speed

In `css/main.css`:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 📱 Navigation

### Sticky Navigation

The navbar is fixed by default. To make it static:

In `css/navbar.css`, change:
```css
.navbar {
    position: static;  /* Change from 'fixed' to 'static' */
}
```

### Logo/Brand

Replace text logo with image logo in `index.html`:

```html
<div class="nav-brand">
    <a href="#home">
        <img src="assets/images/logo.png" alt="Logo" style="height: 40px;">
    </a>
</div>
```

## 🖼️ Images

### Profile Image Shape

**Circular (Default):**
Already applied in `css/sections.css`

**Square:**
```css
.profile-image {
    border-radius: 10px;  /* Change from 50% */
}

.profile-image img {
    border-radius: 10px;  /* Change from 50% */
}
```

### Image Filters/Effects

Add filters to profile image:

```css
.profile-image img {
    filter: grayscale(0%);     /* 0-100% */
    filter: brightness(100%);  /* Adjust brightness */
    filter: contrast(100%);    /* Adjust contrast */
}
```

## 🔘 Buttons

### Button Styles

In `css/main.css`, modify:

```css
.btn {
    padding: 12px 32px;              /* Size */
    border-radius: var(--border-radius);  /* Roundness */
    font-weight: 500;                /* Font weight */
}
```

### Button Hover Effects

```css
.btn-primary:hover {
    transform: translateY(-2px);  /* Lift effect */
    box-shadow: var(--shadow-lg); /* Shadow */
}
```

## 📊 Portfolio Filter

### Add New Category

1. Add button in `index.html`:
```html
<button class="filter-btn" data-filter="design">Design</button>
```

2. Tag portfolio items:
```html
<div class="portfolio-item" data-category="design">
```

### Remove Filter

Simply delete the filter button and use only "All" filter.

## 📝 Contact Form

### Integrate with FormSpree

In `index.html`, modify the form tag:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Integrate with EmailJS

Add EmailJS script and update `js/main.js` form handler.

## 🌙 Dark Mode (Advanced)

To add dark mode, you'll need to:

1. Create dark theme variables
2. Add toggle button
3. Add JavaScript to switch themes
4. Save preference to localStorage

Example variables for dark mode:

```css
[data-theme="dark"] {
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
}
```

## 🔧 Advanced Customization

### Add New Section

1. Create section in `index.html`:
```html
<section id="newsection" class="section newsection">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">New Section</h2>
        </div>
        <!-- Your content -->
    </div>
</section>
```

2. Add navigation link:
```html
<li class="nav-item">
    <a href="#newsection" class="nav-link">New Section</a>
</li>
```

3. Add styles in `css/sections.css`

### Remove Section

1. Delete section HTML from `index.html`
2. Remove navigation link
3. (Optional) Remove related CSS

## 💡 Tips

- Always test changes in a browser
- Keep a backup before major changes
- Use browser DevTools (F12) to test CSS live
- Validate HTML at [validator.w3.org](https://validator.w3.org/)
- Test responsiveness at different screen sizes

## 🆘 Troubleshooting

**Images not showing?**
- Check file paths
- Ensure images are in correct folder
- Verify file names match HTML

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+R)
- Check CSS file is linked in HTML
- Verify CSS syntax

**Animations not working?**
- Check browser console for errors (F12)
- Ensure JavaScript files are loaded
- Test in different browsers

---

Happy customizing! 🎨
