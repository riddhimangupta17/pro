# Deployment Guide for Celesté Motors Website

This guide provides step-by-step instructions for deploying the Celesté Motors static website to various hosting platforms.

## 📦 Build the Static Site

Before deploying, you need to build the static export:

```bash
npm run build
```

This command will:
1. Build the Next.js application
2. Generate static HTML/CSS/JS files
3. Create an `out/` directory with all the static files ready for deployment

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

**Steps:**

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Create a new branch for GitHub Pages:**
   ```bash
   git checkout -b gh-pages
   ```

3. **Copy the contents of `out/` to the root:**
   ```bash
   cp -r out/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select `gh-pages` branch
   - Click **Save**
   - Your site will be live at: `https://riddhimangupta17.github.io/pro/`

**Alternative: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then enable GitHub Pages in Settings → Pages → Source: "GitHub Actions"

---

### Option 2: Vercel (Recommended - Easy)

**Method A: Using Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to your Vercel account
   - Select the project
   - Confirm deployment settings

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

**Method B: Using Vercel Dashboard (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your `riddhimangupta17/pro` repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click **"Deploy"**
7. Your site will be live at: `https://pro-xxx.vercel.app`

**Custom Domain:**
- In Vercel Dashboard → Project Settings → Domains
- Add your custom domain (e.g., celestemotors.com)
- Update DNS records as instructed

---

### Option 3: Netlify (Easy)

**Method A: Drag & Drop (Quickest)**

1. Build the site:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign in and drag the `out/` folder onto the Netlify dashboard
4. Your site is live!

**Method B: Continuous Deployment from Git (Recommended)**

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub and select `riddhimangupta17/pro`
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click **"Deploy"**
6. Your site will be live at: `https://pro-xxx.netlify.app`

**Using Netlify CLI:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

### Option 4: Custom Server (VPS/Shared Hosting)

If you have access to a web server:

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Upload the `out/` directory:**
   - Use FTP/SFTP client (FileZilla, Cyberduck)
   - Upload all files from `out/` to your web root (e.g., `public_html/`)

3. **Configure web server:**
   - Ensure your server serves `index.html` for directory requests
   - Set up 404 redirect to handle client-side routing

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Nginx (nginx.conf):**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

### Option 5: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory to `out`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Build and Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be live at: `https://project-id.web.app`

---

## 🔧 Post-Deployment Checklist

After deployment, verify:

- [ ] All 8 pages load correctly (Home, About, Innovation, R&D, Models, Customization, Dealerships, Contact)
- [ ] Navigation works on all pages
- [ ] Testimonials slider auto-rotates on home page
- [ ] Price calculator updates in real-time on customization page
- [ ] Model filtering works on models page
- [ ] Dealership location filtering works
- [ ] All images load properly
- [ ] Mobile responsiveness works correctly
- [ ] Contact form displays (even if non-functional)
- [ ] Footer links work

## 🌐 Custom Domain Setup

### For Vercel:
1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain
3. Update DNS with provided nameservers or A/CNAME records

### For Netlify:
1. Netlify Dashboard → Domain settings → Add custom domain
2. Update DNS with provided nameservers or A/CNAME records

### For GitHub Pages:
1. Create `CNAME` file in `out/` with your domain
2. Update DNS A records to GitHub's IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

## 🐛 Troubleshooting

**Issue: Pages return 404**
- Ensure static export is enabled in `next.config.ts`
- Check that `output: 'export'` is present

**Issue: Images not loading**
- Verify images are in `public/` directory
- Check `unoptimized: true` is set for images in `next.config.ts`

**Issue: Styles not applied**
- Clear browser cache
- Verify CSS files are in the `out/` directory

**Issue: JavaScript not working**
- Check browser console for errors
- Ensure all JavaScript files are included in build

## 📧 Support

For deployment issues specific to the Celesté Motors website:
- Check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- Review platform-specific guides linked above

---

**Recommended Platform:** Vercel (easiest, auto-deploys on git push, optimized for Next.js)

**Quickest Method:** Netlify drag-and-drop (instant deployment, no git setup needed)

**Free Options:** All platforms listed offer free tiers suitable for this static site
