# Deployment Guide for GitHub Pages

This guide explains how to deploy your Next.js app to GitHub Pages at `khasanrashidov.github.io`.

## Prerequisites

- Your code must be in a GitHub repository
- You need write access to the repository

## Setup Steps

### 1. Choose Your Deployment Type

**Option A: Deploy to root domain (khasanrashidov.github.io)**

- Repository name must be: `khasanrashidov.github.io`
- No basePath configuration needed (already set in `next.config.ts`)

**Option B: Deploy to subdirectory (khasanrashidov.github.io/client-app)**

- Repository can have any name
- Uncomment the basePath line in `next.config.ts`:
  ```ts
  basePath: '/client-app',
  ```
- Replace 'client-app' with your repository name

### 2. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Push Your Code

```bash
# Make sure you're in the project directory
cd /Users/khasanrashidov/Desktop/next_frontend/client-app

# Add all changes
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Push to GitHub (make sure you're pushing to the correct repository)
git push origin main
```

### 4. Monitor Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. You should see the "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (usually 2-5 minutes)
5. Your site will be live at `https://khasanrashidov.github.io` or `https://khasanrashidov.github.io/[repo-name]`

## Configuration Details

### next.config.ts

- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export (GitHub Pages doesn't support Next.js Image Optimization API)
- `basePath` - Set this if deploying to a subdirectory

### GitHub Actions Workflow

The `.github/workflows/deploy.yml` file:

- Triggers on every push to `main` branch
- Can also be manually triggered from Actions tab
- Builds the Next.js app
- Deploys the `out` directory to GitHub Pages

## Important Notes

### Image Optimization

Since `images.unoptimized: true` is set, Next.js images won't be optimized. Consider:

- Pre-optimizing images before adding them to the project
- Using WebP format for better compression
- Specifying width and height on all images

### Dynamic Features Not Supported

GitHub Pages only supports static sites. These Next.js features won't work:

- Server-side rendering (SSR)
- API routes
- Incremental Static Regeneration (ISR)
- Server actions
- Middleware

Your app uses:

- React Server Components (will be pre-rendered at build time ✓)
- Client components (will work ✓)
- Static pages (will work ✓)

### Troubleshooting

**404 errors on navigation:**

- GitHub Pages doesn't support client-side routing by default
- Next.js static export handles this with a 404.html fallback
- Make sure `.nojekyll` file exists in the `public` folder

**Styles not loading:**

- Check if basePath is correctly configured
- Verify the deployment URL matches your basePath setting

**Build fails:**

- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Test the build locally: `npm run build`

## Local Testing

Test the production build locally before deploying:

```bash
# Build the static export
npm run build

# Serve the out directory (install serve if needed)
npx serve@latest out

# Or use Python
python3 -m http.server 8000 --directory out
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Redeployment

Every push to the `main` branch will automatically trigger a new deployment.

To manually trigger a deployment:

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"

## Security Headers

For production, consider adding security headers. Since GitHub Pages doesn't support custom headers, you may need to:

- Use a CDN like Cloudflare (free tier available)
- Or deploy to Vercel/Netlify instead for better Next.js support

## Alternative Deployment Options

If you need dynamic features, consider:

- **Vercel** (recommended for Next.js, free tier)
- **Netlify** (free tier available)
- **AWS Amplify**
- **Cloudflare Pages**

These platforms support full Next.js features including SSR, API routes, and server actions.
