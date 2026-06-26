import { Helmet } from 'react-helmet-async'

const SITE = 'https://studio-mugen.com'
const DEFAULT_OG = `${SITE}/og-image.png`

type SEOProps = {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogType?: string
  jsonLd?: Record<string, unknown>
  preloadImages?: string[]
}

export default function SEO({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG,
  ogType = 'website',
  jsonLd,
  preloadImages,
}: SEOProps) {
  const url = `${SITE}${path}`
  const fullTitle = title.includes('Mugen') ? title : `${title} — Mugen Studios`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Mugen Studios" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {preloadImages?.map((src) => (
        <link key={src} rel="preload" href={src} as="image" />
      ))}
    </Helmet>
  )
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mugen Studios',
  url: SITE,
  logo: `${SITE}/og-image.png`,
  description:
    'Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products.',
  foundingDate: '2024',
  email: 'developer.mugen@gmail.com',
  sameAs: [
    'https://www.instagram.com/madeby.mugen',
  ],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mugen Studios',
  url: SITE,
  description:
    'Cinematic digital experiences, branding, and visual identity by Mugen Studios.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE}/#localbusiness`,
  name: 'Mugen Studios',
  url: SITE,
  logo: `${SITE}/og-image.png`,
  image: `${SITE}/og-image.png`,
  description:
    'Website design agency in Bangalore offering web development, branding, UI/UX design, and digital experiences.',
  email: 'developer.mugen@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  areaServed: [
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Bengaluru' },
  ],
  sameAs: [
    'https://www.instagram.com/madeby.mugen',
  ],
  foundingDate: '2024',
}

export function faqJsonLd(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}

export function serviceJsonLd(services: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@id': `${SITE}/#localbusiness` },
        areaServed: { '@type': 'City', name: 'Bangalore' },
      },
    })),
  }
}
