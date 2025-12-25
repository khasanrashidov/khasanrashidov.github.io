import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://khasanrashidov.github.io';

  // Static pages
  const routes = ['', '/about', '/contact', '/cv', '/projects', '/publications'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project pages
  const projectIds = [
    'moliyachi',
    'dassyor',
    'sally',
    'autonomous-robot-slam',
    'huquqai',
    'auctionify',
    'utilization-reports',
  ];

  const projects = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...projects];
}
