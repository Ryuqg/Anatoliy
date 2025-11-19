
import React, { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import WarningSection from './components/WarningSection';
import CTASection from './components/CTASection';

export default function Home() {
  useEffect(() => {
    // Add Schema.org JSON-LD for home page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ГлобалГранд",
      "description": "Профессиональный ремонт квартир в Москве и МО от команды ГлобалГранд. 2+ года опыта, 500+ довольных клиентов, гарантия качества.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
      "telephone": "+7 (495) 123-45-67",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Примерная, д. 1",
        "addressLocality": "Москва",
        "addressRegion": "Московская область",
        "postalCode": "101000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 55.7558,
        "longitude": 37.6176
      },
      "openingHours": "Mo-Su 09:00-21:00",
      "priceRange": "₽₽₽",
      "image": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/og-image.jpg`,
      "sameAs": [
        "https://vk.com/globalgrand",
        "https://t.me/globalgrand"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Услуги ремонта",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Косметический ремонт",
              "description": "Обновление интерьера с минимальными вложениями"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Полный ремонт под ключ",
              "description": "Комплексное решение от проекта до финальной уборки"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Строительство домов",
              "description": "Строительство малоэтажных домов под ключ"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "ГлобалГранд - Ремонт квартир в Москве и МО | Качество без переплат";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный ремонт квартир в Москве и МО от команды ГлобалГранд. 2+ года опыта, 500+ довольных клиентов, гарантия качества. Консультация бесплатно!');
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('LocalBusiness')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <WarningSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
