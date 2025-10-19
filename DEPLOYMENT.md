# Deployment Guide for Netlify

This guide will walk you through deploying your Data2Business website to Netlify.

## Prerequisites

- A GitHub/GitLab/Bitbucket account
- Your code pushed to a Git repository
- A Netlify account (free tier is sufficient)

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Connect Your Repository

1. Go to [Netlify](https://www.netlify.com/) and log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the `data2business` repository

### Step 2: Configure Build Settings

Netlify should auto-detect your settings, but verify they match:

- **Base directory:** (leave empty)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18 or higher (set via environment variable if needed)

### Step 3: Deploy

1. Click **"Deploy site"**
2. Netlify will build and deploy your site automatically
3. You'll get a random subdomain like `random-name-123.netlify.app`

### Step 4: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `data2business.com`)
4. Follow the DNS configuration instructions
5. Netlify will automatically provision an SSL certificate

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize and Deploy

```bash
# Navigate to your project directory
cd /c/Users/cayoa/Desktop/D2B/data2business

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

Follow the prompts to:
- Create a new site or link to an existing one
- Specify the publish directory as `dist`

## Environment Variables

If you need to add environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables (they'll be available during build time)

## Build Configuration File

You can also create a `netlify.toml` file in your project root for build configuration:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

This ensures:
- The correct build command runs
- SPA routing works properly (all routes redirect to index.html)
- The correct Node version is used

## Continuous Deployment

Once connected to Git:

1. Every push to your main/master branch triggers a new deployment
2. Pull requests get deploy previews automatically
3. You can configure branch deploys in **Site settings** → **Build & deploy**

## Performance Optimizations

Your site is already optimized, but Netlify provides additional features:

### Enable Asset Optimization

1. Go to **Site settings** → **Build & deploy** → **Post processing**
2. Enable:
   - **Asset optimization** (minifies CSS, JS)
   - **Image optimization**
   - **Bundle CSS**

### Configure Headers

Add to `netlify.toml` for better caching:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Monitoring and Analytics

1. **Netlify Analytics:** Go to **Site settings** → **Analytics** to enable
2. **Deploy notifications:** Set up notifications in **Site settings** → **Build & deploy** → **Deploy notifications**

## Troubleshooting

### Build Fails

- Check **Deploys** → **Deploy log** for errors
- Ensure all dependencies are in `package.json`
- Verify Node version matches your local environment

### 404 Errors on Refresh

- Make sure the SPA redirect rule is in `netlify.toml` (see above)
- Or add a `_redirects` file in the `public` folder:
  ```
  /*    /index.html   200
  ```

### Slow Build Times

- Enable **Build plugins** for caching
- Check for unnecessary dependencies

## Custom Domain with Namecheap/GoDaddy

If your domain is registered with Namecheap or GoDaddy:

1. Get your Netlify DNS nameservers from **Domain management**
2. Log into your domain registrar
3. Update nameservers to Netlify's:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

Or use CNAME records if you prefer to keep your current nameservers:
- Add a CNAME record pointing `www` to `your-site.netlify.app`
- Add an A record pointing to Netlify's load balancer IP (provided in dashboard)

## Post-Deployment Checklist

- [ ] Site loads correctly at the Netlify URL
- [ ] All pages are accessible
- [ ] Forms work (if you have any)
- [ ] Links are not broken
- [ ] Images load properly
- [ ] Mobile view looks good
- [ ] SSL certificate is active (https://)
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled
- [ ] Deploy notifications set up

## Useful Netlify Features

1. **Branch Deploys:** Deploy feature branches for testing
2. **Split Testing:** A/B test different versions
3. **Forms:** Built-in form handling (no backend needed)
4. **Functions:** Serverless functions for dynamic functionality
5. **Large Media:** Git LFS for large files

## Support

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forums](https://answers.netlify.com/)
- [Netlify Status Page](https://www.netlifystatus.com/)

---

## Quick Deploy Checklist

For fastest deployment:

1. ✅ Push code to GitHub/GitLab
2. ✅ Log into Netlify
3. ✅ Click "Add new site" → "Import an existing project"
4. ✅ Select your repo
5. ✅ Verify build settings (build command: `npm run build`, publish dir: `dist`)
6. ✅ Click "Deploy"
7. ✅ Wait 2-3 minutes
8. ✅ Visit your live site!

That's it! Your site should now be live at `https://your-site.netlify.app`
