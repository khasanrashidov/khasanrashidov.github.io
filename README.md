# Portfolio Website

Personal portfolio and research website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, shadcn/ui, Radix UI
- **Styling:** Tailwind CSS 4
- **Theme:** next-themes (light/dark mode)
- **Icons:** Lucide React
- **Code Quality:** ESLint, Prettier, TypeScript

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Format code
npm run format

# Lint code
npm run lint

# Build for production
npm run build
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for GitHub Pages deployment instructions.

## Project Structure

```
src/
├── app/              # Pages and routes
│   ├── about/
│   ├── contact/
│   ├── cv/
│   ├── projects/
│   └── publications/
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── ...
└── lib/             # Utilities
```

## Features

- ✅ Static site generation
- ✅ Dark/light mode
- ✅ Responsive design
- ✅ Type-safe with TypeScript
- ✅ Accessible UI components
- ✅ SEO optimized
