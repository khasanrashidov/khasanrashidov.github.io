export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khasan Rashidov',
    url: 'https://khasanrashidov.github.io',
    image: 'https://khasanrashidov.github.io/avatar.jpg',
    jobTitle: 'Researcher & Full Stack Engineer',
    description:
      'Researcher and full-stack engineer building intelligent systems at the intersection of human-computer interaction, machine learning, and distributed systems.',
    sameAs: [
      'https://github.com/khasanrashidov',
      'https://www.linkedin.com/in/khasanr/',
      'https://x.com/khasanrashidov',
      'https://developers.google.com/profile/u/khasan',
    ],
    knowsAbout: [
      'Human-Computer Interaction',
      'Machine Learning',
      'Distributed Systems',
      'Software Engineering',
      'Full Stack Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
