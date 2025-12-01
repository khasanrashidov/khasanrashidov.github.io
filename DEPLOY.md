# Deploy to GitHub Pages

## Quick Deploy (2 Steps)

### 1. Push to GitHub

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to: https://github.com/khasanrashidov/khasanrashidov.github.io/settings/pages
2. Under **Source**, select **GitHub Actions**
3. Save

Your site will be live at **https://khasanrashidov.github.io** in 2-5 minutes.

---

## What Was Configured

- ✅ Static export enabled (`next.config.ts`)
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Dynamic routes pre-rendered (`generateStaticParams`)
- ✅ Build tested successfully

---

## Monitor Deployment

Watch the build: https://github.com/khasanrashidov/khasanrashidov.github.io/actions

---

## Redeploy

Every push to `main` automatically redeploys. Or manually trigger from Actions tab.

---

## Limitations

GitHub Pages only supports static sites:

- ❌ No server-side rendering (SSR)
- ❌ No API routes
- ❌ No server actions
- ❌ Images are unoptimized

For these features, use Vercel instead (free tier).
