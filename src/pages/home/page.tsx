
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CookieConsent from '../../components/feature/CookieConsent';
import SEOHead from '../../components/feature/SEOHead';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export default function Home() {
  const { showBanner, acceptCookies, rejectCookies, resetConsent } = useCookieConsent();

  useEffect(() => {
    // Ascultă evenimentul pentru redeschiderea bannerului de cookie-uri
    const handleManageCookies = () => {
      resetConsent();
    };

    window.addEventListener('manageCookies', handleManageCookies);
    
    return () => {
      window.removeEventListener('manageCookies', handleManageCookies);
    };
  }, [resetConsent]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ElectroFix",
    "description": "Electrician autorizat în București. Reparații rapide, instalații complete, modernizări și intervenții 24/7.",
    "url": import.meta.env.VITE_SITE_URL || "",
    "telephone": "0723 000 111",
    "email": "contact@electrofix.ro",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Energiei nr. 22",
      "addressLocality": "București",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.4268",
      "longitude": "26.1025"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "City",
      "name": "București"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicii Electrice",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reparații Electrice",
            "description": "Reparații rapide pentru toate tipurile de defecțiuni electrice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalații Electrice",
            "description": "Instalații electrice complete pentru locuințe și birouri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Modernizări Electrice",
            "description": "Modernizarea instalațiilor electrice existente"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intervenții 24/7",
            "description": "Servicii de urgență disponibile non-stop"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="ElectroFix – Electrician Profesionist București"
        description="Electrician autorizat în București. Reparații rapide, instalații complete, modernizări și intervenții 24/7. Alege siguranța cu ElectroFix."
        keywords="electrician București, reparații electrice, instalații electrice, service electric"
        canonical="/"
        schemaData={schemaData}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      
      <CookieConsent
        isVisible={showBanner}
        onAccept={acceptCookies}
        onReject={rejectCookies}
      />
    </div>
  );
}
