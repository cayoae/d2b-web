import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Data2Business - Build what matters. Automate the rest.',
  description = 'We ship web apps and sites fast—then add AI automations with human review to cut busywork. Launch in weeks, measure results.',
  image = '/og-image.jpg',
  url = 'https://data2.business',
  type = 'website',
}) {
  const fullTitle = title.includes('Data2Business') ? title : `${title} | Data2Business`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
