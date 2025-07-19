import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  schema,
}) => {
  const siteTitle = "Indore Airport Cab Booking";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Book reliable and affordable cabs for Indore Airport transfers. 24/7 service with fixed prices and professional drivers.";
  const defaultKeywords = "Indore airport cab, airport taxi Indore, cab booking Indore, airport transfer, Indore taxi service";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="canonical" href={canonicalUrl || window.location.href} />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || window.location.href} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;