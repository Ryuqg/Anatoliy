
import React, { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import InvestorHeroSection from './components/InvestorHeroSection';
import InvestmentOpportunitySection from './components/InvestmentOpportunitySection';
import FinancialMetricsSection from './components/FinancialMetricsSection';
import WhyInvestSection from './components/WhyInvestSection';
import InvestorCTASection from './components/InvestorCTASection';

export default function Investors() {
  useEffect(() => {
    // Add Schema.org JSON-LD for investors page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Инвесторам - ГлобалГранд",
      "description": "Инвестиционные возможности в ГлобалГранд. Стабильный рост, прозрачная отчетность, высокая доходность в сфере ремонта и строительства.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/investors`,
      "mainEntity": {
        "@type": "Organization",
        "name": "ГлобалГранд",
        "description": "Инвестиционные возможности в быстрорастущую строительную компанию",
        "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`,
        "investmentOpportunity": {
          "@type": "InvestmentOrSaving",
          "name": "Инвестиции в ГлобалГранд",
          "description": "Возможность инвестирования в развивающуюся строительную компанию с высоким потенциалом роста"
        },
        "financialProduct": [
          {
            "@type": "InvestmentOrSaving",
            "name": "Долевое участие",
            "description": "Инвестиции в развитие компании и расширение географии работ"
          }
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
            "name": "Инвесторам",
            "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/investors`
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Инвесторам - ГлобалГранд | Инвестиционные возможности в строительстве";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Инвестиционные возможности в ГлобалГранд: стабильный рост 150% в год, прозрачная отчетность, высокая доходность в сфере ремонта и строительства. Присоединяйтесь к успеху!');
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('InvestmentOrSaving')) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Header />
      <main>
        <InvestorHeroSection />
        <InvestmentOpportunitySection />
        <FinancialMetricsSection />
        <WhyInvestSection />
        <InvestorCTASection />
      </main>
      <Footer />
    </div>
  );
}
