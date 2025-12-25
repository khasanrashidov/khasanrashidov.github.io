import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/components/structured-data';
import { Analytics } from '@/components/analytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khasanrashidov.github.io'),
  title: {
    default: 'Khasan Rashidov - Senior Software Engineer',
    template: '%s | Khasan Rashidov',
  },
  description:
    'Senior Software Engineer specializing in .NET, Angular, and AI-powered systems. Building production-scale full-stack applications with cloud-native solutions.',
  keywords: [
    'Khasan Rashidov',
    'Senior Software Engineer',
    '.NET',
    'Angular',
    'TypeScript',
    'AI',
    'Machine Learning',
    'Full Stack Engineer',
    'Azure',
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
    title: 'Khasan Rashidov - Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in .NET, Angular, and AI-powered systems. Building production-scale full-stack applications.',
  },
  twitter: {
    card: 'summary',
    title: 'Khasan Rashidov - Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in .NET, Angular, and AI-powered systems. Building production-scale applications.',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
