# Quick Start Guide - Adobe Learning Hub

Getting your DEPT-branded learning website live in minutes!

## 🚀 Local Preview (Optional)

To preview the website locally before deploying:

### Using Python (macOS/Linux)
```bash
cd /Users/sravan/github/adobe-dept-learning
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

### Using Node.js
```bash
npm install -g http-server
http-server /Users/sravan/github/adobe-dept-learning -p 8000
```

### Using Ruby
```bash
cd /Users/sravan/github/adobe-dept-learning
ruby -run -ehttpd . -p 8000
```

## 📤 Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
cd /Users/sravan/github/adobe-dept-learning

# Stage all files
git add .

# Commit with a message
git commit -m "Initial DEPT branded learning website"

# Push to main branch
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose **main** branch
   - Select **/ (root)** directory
5. Click **Save**

### Step 3: Visit Your Site
Your site will be live at:
```
https://yourusername.github.io/adobe-dept-learning
```

GitHub will build and deploy automatically. This typically takes 1-2 minutes.

## 📋 What's Included

✅ **Landing Page** - Product overview with tiles
✅ **Adobe Commerce Learning Path** - 3 comprehensive guides
✅ **Adobe Edge Delivery Services Path** - 3 advanced modules
✅ **DEPT Branding** - Official colors, fonts, and design system
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Modern UI** - Interactive tiles with smooth transitions

## 🎨 Customization

### Add Your Logo
1. Save your logo to `/assets/`
2. Update the logo element in `index.html`:
   ```html
   <img src="/assets/your-logo.svg" alt="Your Logo" class="logo-img">
   ```

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --dept-orange: #FF4901;  /* Change DEPT orange */
  --dept-black: #000000;   /* Change black */
  /* ... other colors ... */
}
```

### Update Navigation Links
Edit the `<nav>` section in each HTML file to match your structure

### Add New Learning Pages
1. Create new HTML file in appropriate directory
2. Follow the template structure from existing pages
3. Add tile to `index.html`
4. Link from index and other pages

## 📱 Testing

### Desktop Testing
- Chrome, Firefox, Safari, Edge
- Test at full width and 1024px width

### Mobile Testing
- iPhone 12/13/14/15
- Pixel 6/7
- iPad and iPad Pro

### Performance Checklist
- [ ] All images load correctly
- [ ] Text is readable on mobile
- [ ] Buttons are easy to tap on mobile
- [ ] Navigation works smoothly
- [ ] Links don't have broken targets

## 🔍 Checking Deployment

### Monitor Build Status
1. Go to your GitHub repository
2. Click **Actions** tab
3. Look for "pages build and deployment" workflow

### Troubleshooting
- ✅ All HTML files have lowercase names
- ✅ CSS/JS file paths use relative URLs
- ✅ No GitHub-only files (.github, secrets)
- ✅ .nojekyll file present (already added)

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics ID (e.g., G-XXXXXXXXXX)
2. Add to index.html before closing `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## 🔐 Custom Domain (Optional)

To use your own domain:

1. Ensure domain registrar DNS points to GitHub Pages:
   - CNAME: `yourusername.github.io`
   - Or A records to GitHub IPs (check GitHub docs)

2. Add CNAME file to root:
   ```
   your-domain.com
   ```

3. Enable HTTPS in Settings → Pages → Enforce HTTPS

4. GitHub will provision SSL automatically in 5-10 minutes

## 📞 Support Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)
- [DEPT Brand Guidelines](https://www.brand.deptagency.com/)
- [Adobe Experience League](https://experienceleague.adobe.com/)

## 🎓 Next Steps

1. ✅ Site deployed successfully
2. Share the URL with your team
3. Gather feedback on content
4. Add more learning modules as needed
5. Monitor usage with analytics
6. Keep content updated regularly

---

**Your site is now live!** Share the link and start educating your team! 🎉
