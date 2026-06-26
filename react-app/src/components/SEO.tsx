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
}

export default function SEO({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG,
  ogType = 'website',
  jsonLd,
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
