import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, type = 'website', name, image, url }) {
  const siteName = "PM Enterprises";
  const defaultImage = "/images/ui/pmenterpriseslogo.png";
  const baseUrl = "http://pmenterprises.in"; // Changed to http as https is not configured
  
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      { /* Twitter tags */ }
      <meta name='twitter:creator' content={name || siteName} />
      <meta name='twitter:card' content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${baseUrl}${image || defaultImage}`} />
      
      { /* Facebook / Open Graph tags */ }
      <meta property="og:site_name" content={siteName} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:image' content={`${baseUrl}${image || defaultImage}`} />
      <meta property='og:url' content={`${baseUrl}${url || ''}`} />
    </Helmet>
  );
}
