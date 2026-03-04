# Adobe Learning Hub - DEPT Branded

A modern, DEPT-branded learning website for Adobe technologies featuring comprehensive guides for Adobe Commerce and Edge Delivery Services.

## 🎨 Design Features

- **DEPT Brand Identity**: Built with DEPT's official color palette, typography (Inter Tight), and design guidelines
- **Modern Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Fast Performance**: Static site optimized for speed and edge delivery
- **Accessible**: WCAG compliant with semantic HTML and proper heading hierarchy

## 📋 Content Structure

### Landing Page (index.html)
Main entry point with:
- Welcoming hero section
- Two product categories with learning tiles
- Quick navigation to all learning paths
- Footer with links to resources

### Adobe Commerce Learning Path
1. **Local Magento Setup** - Complete installation guide
2. **Local Hybrid Setup** - Hybrid development environment
3. **Adobe Commerce Overview** - Architecture and core concepts

### Adobe Edge Delivery Services Learning Path
1. **da.live Setup** - Getting started with edge delivery
2. **Universal Editor Setup** - Content creation and management
3. **Automate Migration** - Data migration strategies

## 🚀 GitHub Pages Setup

### Prerequisites
- GitHub account with repository access
- Basic understanding of Git

### Deployment Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/adobe-dept-learning.git
   cd adobe-dept-learning
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose main branch and /root directory
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/adobe-dept-learning`
   - Wait a few minutes for the build to complete

4. **Custom Domain (Optional)**
   - Add CNAME file with your domain
   - Update DNS settings
   - Enable HTTPS in GitHub Pages settings

## 📁 Project Structure

```
adobe-dept-learning/
├── index.html              # Main landing page
├── css/
│   └── style.css          # Main stylesheet with DEPT branding
├── js/
│   └── main.js            # Interactive features
├── pages/
│   ├── adobe-commerce/
│   │   ├── hybrid-setup.html
│   │   ├── magento-setup.html
│   │   └── overview.html
│   └── adobe-eds/
│       ├── dalive-setup.html
│       ├── universal-editor.html
│       └── migration.html
├── assets/                # Images, logos, etc.
└── README.md             # This file
```

## 🎯 DEPT Brand Colors

- **Primary Orange**: `#FF4901` - Hero color for CTAs and highlights
- **Black**: `#000000` and `#1E1E1E` - Text and components
- **Neutral Greys**: `#544F4A` to `#D8D2CD` - Backgrounds and borders
- **Whites**: `#E2DDDA` to `#FFFFFF` - Light backgrounds

## 🔤 Typography

- **Font Family**: Inter Tight (fallback: system fonts)
- **Headings**: Bold weight with tight tracking
- **Body**: Regular weight with 1.5em line-height for readability
- **Display**: 120px for hero statements
- **H1**: 72px for page titles
- **H2**: 48px for section headings
- **H3**: 32px for subsections
- **Body**: 18px standard text

## 🎨 Component Styles

### Buttons
- **Primary**: Orange background with white text
- **Secondary**: Black background with white text
- **Ghost**: Transparent with black border
- All buttons include hover states with smooth transitions

### Tiles
- Interactive card components with hover effects
- Orange accent bar on top
- Includes title, description, and CTA button
- Responsive grid layout (3 columns on desktop, 1 on mobile)

### Navigation
- Sticky header with logo and navigation links
- Smooth scroll behavior
- Active state indicators

## 📝 Content Guidelines

### Writing Style
- Clear, concise language
- Practical examples and code snippets
- Step-by-step instructions
- Links to external resources

### Code Examples
- Syntax highlighting with dark background
- Real-world examples
- Copy-friendly formatting

## 🔄 Updating Content

To add or update learning pages:

1. **Create new page in appropriate directory**
   ```bash
   pages/adobe-commerce/new-topic.html
   # or
   pages/adobe-eds/new-topic.html
   ```

2. **Use the existing template structure**
   - Copy header/navigation from existing page
   - Maintain consistent styling with CSS classes
   - Follow the same breadcrumb pattern

3. **Update index.html**
   - Add new tile to products section
   - Update navigation links if needed

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add new learning content"
   git push origin main
   ```

## 🚀 Performance Optimization

- Static HTML with no build process required
- Minimal CSS (single stylesheet)
- Minimal JavaScript (progressive enhancement)
- Optimized images in assets folder
- Leverages browser caching

## 🔒 Security

- No backend server or database exposure
- All content is static HTML
- Links validated before publication
- HTTPS enforced by GitHub Pages

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly navigation
- Readable typography on all screen sizes

## 🎯 SEO Optimization

- Semantic HTML5 structure
- Proper heading hierarchy
- Meta descriptions in page headers
- Descriptive link text
- Internal linking between related topics
- Schema markup ready (can be added)

## 🤝 Contributing

To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues:
- Check existing documentation pages
- Review code comments for implementation details
- File an issue on GitHub

## 📄 License

This project is part of the DEPT® Agency learning initiative.

## 🔗 Resources

- [Adobe Experience League](https://experienceleague.adobe.com)
- [Adobe Developer](https://developer.adobe.com)
- [DEPT® Agency](https://www.deptagency.com)

---

**Built with DEPT® Brand Standards** | Last Updated: March 2026
