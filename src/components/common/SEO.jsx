import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = "https://lossdaysejahtera.com" }) => {
  const fullTitle = title ? `${title} | PT Lossday Sejahtera Group` : "PT Lossday Sejahtera Group - Premium Travel Agency";
  const metaDescription = description || "Travel Agency Premium yang menyediakan layanan Open Trip, Private Trip, Corporate Gathering, hingga Rental Transportasi dengan pelayanan terbaik.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${url}/logo.png`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={`${url}/logo.png`} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
