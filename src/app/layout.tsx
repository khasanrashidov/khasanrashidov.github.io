import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/components/structured-data';

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
    default: 'Khasan Rashidov - Researcher & Full Stack Engineer',
    template: '%s | Khasan Rashidov',
  },
  description:
    'Researcher and full-stack engineer building intelligent systems at the intersection of human-computer interaction, machine learning, and distributed systems.',
  keywords: [
    'Khasan Rashidov',
    'HCI',
    'Human-Computer Interaction',
    'Machine Learning',
    'Full Stack Engineer',
    'Researcher',
    'Distributed Systems',
    'AI',
    'Software Engineering',
  ],
  authors: [{ name: 'Khasan Rashidov' }],
  creator: 'Khasan Rashidov',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khasanrashidov.github.io',
    siteName: 'Khasan Rashidov',
    title: 'Khasan Rashidov - Researcher & Full Stack Engineer',
    description:
      'Researcher and full-stack engineer building intelligent systems at the intersection of HCI, ML, and distributed systems.',
    images: [
      {
        url: '/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Khasan Rashidov',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Khasan Rashidov - Researcher & Full Stack Engineer',
    description:
      'Building intelligent systems at the intersection of HCI, ML, and distributed systems.',
    creator: '@khasanrashidov',
    images: ['/avatar.jpg'],
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
    google: '-4NLCq4EcJ6ZF94qUuWVfTSOMhwkLdVNPOSscq1mc9Y',
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
