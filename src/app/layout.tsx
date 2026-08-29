import type { Metadata } from 'next';
import { Geist, Newsreader } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/components/structured-data';
import { Analytics } from '@/components/analytics';
import { SiteFooter } from '@/components/site-footer';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khasanrashidov.github.io'),
  title: {
    default: 'Khasan Rashidov - Senior Full Stack Engineer',
    template: '%s | Khasan Rashidov',
  },
  description:
    'Senior Full Stack Engineer specializing in .NET, Angular, TypeScript, Python, and AI-powered systems. Building production-scale applications with cloud-native solutions on AWS, Azure, and GCP.',
  keywords: [
    'Khasan Rashidov',
    'Senior Full Stack Engineer',
    '.NET',
    'Angular',
    'TypeScript',
    'Python',
    'Kotlin',
    'Flutter',
    'AI',
    'Machine Learning',
    'Full Stack Engineer',
    'AWS',
    'Azure',
    'GCP',
    'Software Engineering',
    'Tashkent',
    'Uzbekistan',
  ],
  authors: [{ name: 'Khasan Rashidov' }],
  creator: 'Khasan Rashidov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khasanrashidov.github.io',
    siteName: 'Khasan Rashidov',
    title: 'Khasan Rashidov - Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer specializing in .NET, Angular, TypeScript, Python, and AI-powered systems. Building production-scale applications with cloud-native solutions on AWS, Azure, and GCP.',
  },
  twitter: {
    card: 'summary',
    title: 'Khasan Rashidov - Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer specializing in .NET, Angular, TypeScript, Python, and AI-powered systems. Building production-scale applications with cloud-native solutions on AWS, Azure, and GCP.',
    creator: '@khasanrashidov',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'uGgcCuMwBCltFEWT7ZfyekkCh0w0QdJ7YzRlPUomPB0',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <StructuredData />
      </head>
      <body
        className={`${geist.variable} ${newsreader.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          <div className="flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
