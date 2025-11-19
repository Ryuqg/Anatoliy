
import React, { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutHeroSection from './components/AboutHeroSection';
import TeamSection from './components/TeamSection';
import CompanyHistorySection from './components/CompanyHistorySection';
import ValuesSection from './components/ValuesSection';
import AchievementsSection from './components/AchievementsSection';
import ContactInfoSection from './components/ContactInfoSection';

export default function About() {
  useEffect(() => {
    // Add Schema.org JSON-LD for about page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "О компании ГлобалГранд",
      "description": "Узнайте больше о команде ГлобалГранд - профессионалах в области ремонта и строительства. Наша история, ценности, достижения и команда экспертов.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`,
      "mainEntity": {
        "@type": "Organization",
        "name": "ГлобалГранд",
        "description": "Профессиональная команда по ремонту квартир и строительству домов в Москве и Московской области",
        "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
        "foundingDate": "2022",
        "numberOfEmployees": "25",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Примерная, д. 1",
          "addressLocality": "Москва",
          "addressRegion": "Московская область",
          "postalCode": "101000",
          "addressCountry": "RU"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7 (495) 123-45-67",
          "contactType": "customer service",
          "availableLanguage": "Russian"
        },
        "sameAs": [
          "https://vk.com/globalgrand",
          "https://t.me/globalgrand"
        ],
        "award": [
          "Лучшая строительная компания 2023",
          "Премия за качество ремонтных работ"
        ],
        "knowsAbout": [
          "Ремонт квартир",
          "Строительство домов",
          "Дизайн интерьера",
          "Отделочные работы"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "О компании",
            "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/about`
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "О компании ГлобалГранд | Профессиональная команда ремонта и строительства";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'О компании ГлобалГранд: профессиональная команда из 25+ специалистов, 2+ года опыта, 500+ довольных клиентов. Наша история, ценности и достижения в ремонте и строительстве.');
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('AboutPage')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHeroSection />
        <CompanyHistorySection />
        <ValuesSection />
        <TeamSection />
        <AchievementsSection />
        <ContactInfoSection />
      </main>
      <Footer />
    </div>
  );
}
