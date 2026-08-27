import { Helmet } from 'react-helmet-async';
import { companyData } from '../../data/company';

const SEO = ({ title, description, keywords, url = "https://lossdaysejahtera.com", type = "website" }) => {
  const fullTitle = title ? `${title} | PT Lossday Sejahtera Group` : "PT Lossday Sejahtera Group - Premium Travel Agency";
  const metaDescription = description || "Travel Agency Premium yang menyediakan layanan Open Trip, Private Trip, Corporate Gathering, hingga Rental Transportasi dengan pelayanan terbaik.";
  const metaKeywords = keywords || "travel premium, open trip gunung, private trip, corporate gathering, rental transportasi, sewa alat outdoor, pt lossday sejahtera group";

  // Schema.org JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "PT Lossday Sejahtera Group",
    "url": "https://lossdaysejahtera.com",
    "logo": "https://lossdaysejahtera.com/logo.png",
    "description": metaDescription,
    "telephone": `+${companyData?.whatsappNumber || "6285819777047"}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogor",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    }
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
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
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
