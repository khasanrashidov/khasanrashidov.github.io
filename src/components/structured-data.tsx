export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khasan Rashidov',
    url: 'https://khasanrashidov.github.io',
    image: 'https://khasanrashidov.github.io/avatar.jpg',
    jobTitle: 'Senior Full Stack Engineer',
    description:
      'Senior Full Stack Engineer specializing in .NET, Angular, TypeScript, Python, and AI-powered systems. Building production-scale applications with cloud-native solutions on AWS, Azure, and GCP.',
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
      'Python',
      'TypeScript',
      'Kotlin',
      'Flutter',
      'AI Agents',
      'Machine Learning',
      'AWS',
      'Azure',
      'GCP',
      'Microservices',
      'Distributed Systems',
      'Full Stack Development',
      'Software Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Inha University in Tashkent',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Exadel',
      url: 'https://exadel.com/',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
