# Quick Start: Deploy to GitHub Pages

## ✅ Setup Complete!

Your Next.js app is now configured for GitHub Pages deployment. Here's what was done:

### Changes Made:

1. **next.config.ts** - Configured for static export
2. **.github/workflows/deploy.yml** - GitHub Actions workflow for automatic deployment
3. **public/.nojekyll** - Prevents GitHub Pages from ignoring Next.js files
4. **src/app/projects/[id]/page.tsx** - Added `generateStaticParams()` for dynamic routes
5. **src/components/ui/chart.tsx** - Fixed TypeScript errors

### ✅ Build Test Passed

The static export was successfully generated in the `out` directory.

---

## 🚀 Deploy Now (3 Steps)

### Step 1: Decide Your URL Structure

**Option A: Root Domain (khasanrashidov.github.io)**

- Your repository must be named: `khasanrashidov.github.io`
- No changes needed - configuration is ready!

**Option B: Subdirectory (khasanrashidov.github.io/client-app)**

- Repository can have any name
- Edit `next.config.ts` and uncomment this line:
  ```ts
  basePath: '/client-app',
  ```
- Change 'client-app' to match your repository name

### Step 2: Push to GitHub

```bash
# Navigate to your project
cd /Users/khasanrashidov/Desktop/next_frontend/client-app

# Add all changes
git add .

# Commit
git commit -m "Configure GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

That's it! Your site will be live in 2-5 minutes.

---

## 📋 Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, visit your site at:
   - `https://khasanrashidov.github.io` (if using root domain)
   - `https://khasanrashidov.github.io/[repo-name]` (if using subdirectory)

---

## 🔄 Redeployment

Every push to `main` automatically triggers a new deployment.

To manually redeploy:

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"

---

## 🧪 Test Locally

Before deploying, you can test the production build:

```bash
# Build the static site
npm run build

# Serve it locally
npx serve@latest out
```

Then visit http://localhost:3000

---

## ⚠️ Important Notes

### What Works on GitHub Pages:

✅ Static pages  
✅ Client-side routing  
✅ React Server Components (pre-rendered at build time)  
✅ Client components  
✅ All your current features

### What Doesn't Work:

❌ Server-side rendering (SSR)  
❌ API routes  
❌ Server actions  
❌ Incremental Static Regeneration (ISR)  
❌ Next.js Image Optimization (images are unoptimized)

### Image Optimization

Since `images.unoptimized: true` is set:

- Consider pre-optimizing images before adding them
- Use WebP format for better compression
- Always specify width and height on images

---

## 🐛 Troubleshooting

**Build fails locally:**

```bash
npm run build
```

Check the error messages and fix any issues before pushing.

**404 errors after deployment:**

- Verify your `basePath` configuration matches your URL structure
- Ensure `.nojekyll` file exists in `public` folder (it does!)

**Styles not loading:**

- Double-check `basePath` in `next.config.ts`
- Clear browser cache

**GitHub Actions fails:**

- Check the Actions tab for detailed error logs
- Ensure all dependencies are in `package.json`

---

## 📚 Additional Resources

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment guide
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## 🎯 Alternative Deployment Options

If you need dynamic features (SSR, API routes, server actions), consider:

- **Vercel** (recommended for Next.js) - Free tier, full Next.js support
- **Netlify** - Free tier available
- **Cloudflare Pages** - Free tier with edge functions
- **AWS Amplify** - Scalable with AWS integration

---

## ✨ Next Steps

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Wait for deployment to complete
4. Share your live site!

Need help? Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed troubleshooting.
