# Deployment Guide

This guide walks you through deploying your portfolio website to various hosting platforms.

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended for Beginners)

**Pros:** Free, easy to set up, version control included
**Cons:** Public repositories only (for free tier)

#### Steps:

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/portfolio/`

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain
   - Configure DNS settings at your domain registrar
   - Add custom domain in GitHub Pages settings

#### GitHub Pages Resources:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

### Option 2: Netlify

**Pros:** Free tier, continuous deployment, custom domains, form handling
**Cons:** Build minutes limited on free tier

#### Steps:

**Method 1: Drag and Drop**
1. Go to [Netlify](https://www.netlify.com/)
2. Sign up for free account
3. Drag your project folder onto Netlify dashboard
4. Your site is live instantly!

**Method 2: GitHub Integration**
1. Push your code to GitHub (see Option 1, step 1)
2. Go to Netlify → **New site from Git**
3. Connect your GitHub account
4. Select your repository
5. Click **Deploy site**
6. Auto-deploys on every push to main branch

#### Custom Domain on Netlify:
- Go to **Site settings** → **Domain management**
- Click **Add custom domain**
- Follow DNS configuration instructions

#### Netlify Resources:
- [Netlify Documentation](https://docs.netlify.com/)

---

### Option 3: Vercel

**Pros:** Excellent performance, easy deployment, free SSL
**Cons:** More suited for Next.js (but works with static sites)

#### Steps:

1. Push code to GitHub (see Option 1, step 1)
2. Go to [Vercel](https://vercel.com/)
3. Sign up with GitHub account
4. Click **New Project**
5. Import your repository
6. Configure settings (usually auto-detected)
7. Click **Deploy**

#### Vercel Resources:
- [Vercel Documentation](https://vercel.com/docs)

---

### Option 4: Traditional Web Hosting

**Pros:** Full control, can use existing hosting
**Cons:** Requires FTP/cPanel knowledge

#### Recommended Hosts:
- Bluehost
- HostGator
- SiteGround
- DreamHost

#### Steps:

1. **Get hosting account and domain**
2. **Upload files via FTP:**
   - Use FileZilla or similar FTP client
   - Connect to your server
   - Upload all files to `public_html` or `www` folder

3. **Verify:**
   - Visit your domain
   - Test all functionality

---

### Option 5: Firebase Hosting

**Pros:** Google infrastructure, free tier, fast CDN
**Cons:** Requires Firebase CLI setup

#### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize project:**
   ```bash
   firebase init hosting
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

#### Firebase Resources:
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] All images are added and optimized
- [ ] All external links work correctly
- [ ] Resume PDF is uploaded
- [ ] Contact form is configured (if using backend)
- [ ] Meta tags are updated (title, description)
- [ ] Favicon is added
- [ ] No console errors (F12 → Console)
- [ ] Tested on mobile and desktop
- [ ] All placeholder text replaced
- [ ] Spell-checked all content
- [ ] Social media links are correct

---

## 🔧 Post-Deployment Setup

### 1. Google Analytics (Optional)

Add tracking to your site:

```html
<!-- Add before closing </head> tag in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website)
3. Verify ownership
4. Submit sitemap (if you create one)

### 3. SEO Optimization

**Create sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Add robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/sitemap.xml
```

### 4. SSL Certificate

Most modern hosting providers (Netlify, Vercel, GitHub Pages) provide free SSL automatically. For traditional hosting, use:
- Let's Encrypt (free)
- Your hosting provider's SSL option

---

## 🌐 Custom Domain Setup

### Buying a Domain

Popular registrars:
- [Namecheap](https://www.namecheap.com/)
- [Google Domains](https://domains.google/)
- [GoDaddy](https://www.godaddy.com/)

### DNS Configuration

**For GitHub Pages:**
```
Type: A
Name: @
Value: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

**For Netlify/Vercel:**
Follow their specific DNS instructions in the dashboard.

---

## 📱 Testing Your Deployed Site

- [ ] Visit the live URL
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check all images load
- [ ] Test contact form
- [ ] Verify social media links
- [ ] Check download CV link
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different devices
- [ ] Check page load speed: [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🔄 Updating Your Site

### GitHub Pages / Netlify / Vercel:
```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio content"
git push
```
Your site will auto-deploy!

### Traditional Hosting:
1. Make changes locally
2. Upload changed files via FTP
3. Clear browser cache and verify

---

## 🆘 Troubleshooting

**Site not showing after deployment:**
- Wait 5-10 minutes for DNS propagation
- Clear browser cache (Ctrl+Shift+R)
- Check deployment logs for errors

**Images not loading:**
- Verify file paths (use relative paths)
- Check file names match exactly (case-sensitive)
- Ensure images are uploaded

**Custom domain not working:**
- Check DNS settings are correct
- Wait 24-48 hours for full DNS propagation
- Verify CNAME/A records

**404 errors:**
- Ensure `index.html` is in the root directory
- Check all internal links use correct paths

---

## 📞 Need Help?

- **GitHub Pages:** [GitHub Community](https://github.community/)
- **Netlify:** [Netlify Support](https://answers.netlify.com/)
- **Vercel:** [Vercel Discord](https://vercel.com/discord)

---

**Congratulations on deploying your portfolio!** 🎉

Share it with the world and start getting noticed!
