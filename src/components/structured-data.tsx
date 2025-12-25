export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khasan Rashidov',
    url: 'https://khasanrashidov.github.io',
    image: 'https://khasanrashidov.github.io/avatar.jpg',
    jobTitle: 'Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in .NET, Angular, and AI-powered systems. Building production-scale full-stack applications with cloud-native solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tashkent',
      addressCountry: 'UZ',
    },
    email: 'khasanrashidov2002@gmail.com',
    telephone: '+998906756075',
    sameAs: [
      'https://github.com/khasanrashidov',
      'https://www.linkedin.com/in/khasanr/',
      'https://x.com/khasanrashidov',
      'https://developers.google.com/profile/u/khasan',
    ],
    knowsAbout: [
      '.NET',
      'Angular',
      'TypeScript',
      'Python',
      'AI/ML',
      'Cloud Computing',
      'Azure',
      'Full Stack Development',
      'Software Engineering',
      'Database Optimization',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Inha University in Tashkent',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Vention',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
