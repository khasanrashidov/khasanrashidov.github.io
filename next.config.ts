import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // If deploying to khasanrashidov.github.io root, leave basePath empty
  // If deploying to khasanrashidov.github.io/client-app, uncomment below:
  // basePath: '/client-app',
};

export default nextConfig;
