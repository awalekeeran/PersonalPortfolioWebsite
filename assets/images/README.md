# Image Assets Guide

This folder contains all image assets for your portfolio website.

## Required Images

### 1. Profile Picture (`profile.jpg`)
- **Location**: `assets/images/profile.jpg`
- **Recommended Size**: 500x500px (square)
- **Format**: JPG or PNG
- **Description**: Your professional headshot for the home section

### 2. About Section Image (`about.jpg`)
- **Location**: `assets/images/about.jpg`
- **Recommended Size**: 800x600px
- **Format**: JPG or PNG
- **Description**: An image representing you or your workspace for the about section

### 3. Favicon (`favicon.ico`)
- **Location**: `assets/images/favicon.ico`
- **Recommended Size**: 32x32px or 64x64px
- **Format**: ICO, PNG, or SVG
- **Description**: Browser tab icon
- **Tool**: Use [favicon.io](https://favicon.io/) to create from image or text

## Portfolio Project Images

### Location: `assets/images/portfolio/`

Add your project screenshots/thumbnails here:

- **project1.jpg** - First portfolio project
- **project2.jpg** - Second portfolio project
- **project3.jpg** - Third portfolio project
- **project4.jpg** - Fourth portfolio project
- **project5.jpg** - Fifth portfolio project
- **project6.jpg** - Sixth portfolio project

**Recommended Specifications:**
- **Size**: 800x600px (4:3 ratio)
- **Format**: JPG or PNG
- **Quality**: High quality but optimized for web (< 500KB per image)
- **Content**: Screenshots or mockups of your projects

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/) (Mac)

2. **Use Appropriate Formats**:
   - JPG for photographs
   - PNG for images with transparency
   - SVG for logos and icons
   - WebP for better compression (modern browsers)

3. **Responsive Images**: Consider creating multiple sizes for different screen resolutions

4. **Alt Text**: Always add descriptive alt text in HTML for accessibility

## Placeholder Images (Temporary)

If you don't have images yet, you can use placeholder services:

- [Unsplash Source](https://source.unsplash.com/): `https://source.unsplash.com/800x600/?portrait`
- [Lorem Picsum](https://picsum.photos/): `https://picsum.photos/800/600`
- [Placeholder.com](https://placeholder.com/): `https://via.placeholder.com/800x600`

## Example: Adding Images to HTML

```html
<!-- Profile Image -->
<img src="assets/images/profile.jpg" alt="Your Name - Web Developer">

<!-- Portfolio Image -->
<img src="assets/images/portfolio/project1.jpg" alt="Project Name - Description">
```

## Next Steps

1. ✅ Create `assets/images/` folder structure (Done)
2. ⬜ Add your profile picture
3. ⬜ Add your about section image
4. ⬜ Create and add favicon
5. ⬜ Add portfolio project screenshots
6. ⬜ Optimize all images for web
7. ⬜ Update image paths in `index.html` if needed
