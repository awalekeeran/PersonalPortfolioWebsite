# Personal Portfolio Website

A modern, responsive single-page application (SPA) portfolio website built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Application** - Smooth scrolling between sections
- **Modern UI/UX** - Clean and professional design with gradient accents
- **Interactive Elements** - Hover effects, animations, and smooth transitions
- **Portfolio Filter** - Filter projects by category
- **Contact Form** - Ready to integrate with backend services
- **Optimized Performance** - Fast loading and smooth animations

## 📁 Project Structure

```
keeran_portfolio/
├── index.html              # Main HTML file (SPA structure)
├── css/
│   ├── main.css           # Base styles and variables
│   ├── navbar.css         # Navigation bar styles
│   ├── footer.css         # Footer styles
│   ├── sections.css       # All section-specific styles
│   └── responsive.css     # Responsive design breakpoints
├── js/
│   ├── main.js           # Core functionality (nav, scroll, etc.)
│   ├── portfolio.js      # Portfolio filtering
│   └── animations.js     # Scroll animations and effects
├── assets/
│   ├── images/
│   │   ├── profile.jpg       # Your profile picture
│   │   ├── about.jpg         # About section image
│   │   ├── favicon.ico       # Website favicon
│   │   └── portfolio/        # Portfolio project images
│   │       ├── project1.jpg
│   │       ├── project2.jpg
│   │       └── ...
│   └── resume/
│       └── resume.pdf        # Your CV/Resume
└── docs/                     # Documentation (future)
```

## 🎨 Sections

1. **Home** - Hero section with profile picture, name, and introduction
2. **About** - Detailed information about you, your background, and skills overview
3. **Skills** - Categorized technical skills with icons
4. **Services** - What you offer to clients/employers
5. **Portfolio** - Showcase of your projects with filtering capability
6. **Contact** - Contact form and contact information

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone or download this repository
2. Open the project folder in your code editor
3. Replace placeholder content with your information:
   - Update `index.html` with your name, title, and content
   - Add your profile picture to `assets/images/profile.jpg`
   - Add your about image to `assets/images/about.jpg`
   - Add portfolio project images to `assets/images/portfolio/`
   - Add your resume PDF to `assets/resume/resume.pdf`

### Customization

#### Colors

Edit the CSS variables in `css/main.css`:

```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary brand color */
    --accent-color: #ec4899;      /* Accent color */
    /* ... more variables */
}
```

#### Content

Update the following in `index.html`:
- Personal information (name, email, location, etc.)
- Social media links
- Service descriptions
- Portfolio projects
- Contact information

#### Images

Replace placeholder images with your own:
- **Profile Picture**: `assets/images/profile.jpg` (recommended: 500x500px)
- **About Image**: `assets/images/about.jpg` (recommended: 800x600px)
- **Portfolio Images**: `assets/images/portfolio/projectX.jpg` (recommended: 800x600px)
- **Favicon**: `assets/images/favicon.ico`

## � Features to Implement

### Contact Form Backend

To make the contact form functional, you can integrate it with:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- Your own backend API

### Analytics

Add Google Analytics or similar tracking:

```html
<!-- Add to <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Future Enhancements

- [ ] Add separate Resume/CV page
- [ ] Implement dark/light mode toggle
- [ ] Add blog section
- [ ] Integrate with CMS for easy content management
- [ ] Add project detail pages
- [ ] Implement testimonials section
- [ ] Add animations library (AOS, GSAP)
- [ ] PWA capabilities

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from various portfolio designs

---

**Note**: Remember to replace all placeholder content with your actual information before deploying!

<!--
**awalekeeran/awalekeeran** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
