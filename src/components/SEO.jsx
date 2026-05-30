import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, SITE_LOGO } from '../utils/schema';

export default function SEO({
  title,
  description,
  keywords,
  type = 'website',
  name,
  image,
  url,
  schema,
  noindex = false,
}) {
  const canonical = `${SITE_URL}${url || ''}`;
  const ogImage = image
    ? (image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`)
    : SITE_LOGO;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex
          ? 'noindex, nofollow'
          : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title || SITE_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || SITE_NAME} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={name || SITE_NAME} />

      {/* Structured data */}
      {schemas.map((s, i) => (
        <script type="application/ld+json" key={i}>{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
