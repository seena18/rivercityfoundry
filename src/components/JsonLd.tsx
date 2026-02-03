export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'River City Foundry',
    image: 'https://rivercityfoundry.net/logo.png',
    '@id': 'https://rivercityfoundry.net',
    url: 'https://rivercityfoundry.net',
    telephone: '916-542-0331',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sacramento',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.5816, 
      longitude: -121.4944 
    },
    areaServed: [
        {
            '@type': 'City',
            name: 'Sacramento'
        },
        {
            '@type': 'AdministrativeArea',
            name: 'Northern California'
        }
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '17:00'
    },
    priceRange: '$$',
    sameAs: [
      // Add social profiles here if available
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
