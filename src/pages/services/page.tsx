
import React, { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import MediaEditor from '../../components/base/MediaEditor';
import ConsultationModal from '../../components/feature/ConsultationModal';

const initialServices = [
  {
    title: 'Косметический ремонт',
    price: 'от 3 000 ₽/м²',
    duration: '1-2 недели',
    description: 'Обновление интерьера с минимальными вложениями',
    features: [
      'Покраска стен и потолков',
      'Поклейка обоев',
      'Замена напольных покрытий',
      'Установка плинтусов',
      'Мелкий ремонт',
    ],
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/02186fdf85b7998cdad1c8877154b092.jpeg'
  },
  {
    title: 'Черновая отделка',
    price: 'от 5 000 ₽/м²',
    duration: '2-3 недели',
    description: 'Подготовка помещения к финишной отделке',
    features: [
      'Выравнивание стен и потолков',
      'Стяжка пола',
      'Прокладка коммуникаций',
      'Установка перегородок',
      'Подготовка под чистовую отделку',
    ],
    image: 'https://readdy.ai/api/search-image?query=Construction%20rough%20work%20apartment%20renovation%20with%20wall%20leveling%2C%20floor%20screed%2C%20electrical%20wiring%2C%20plumbing%20installation%2C%20building%20materials%2C%20construction%20site%20preparation&width=600&height=400&seq=rough-work&orientation=landscape'
  },
  {
    title: 'Полный ремонт под ключ',
    price: 'от от 8 990 ₽/м²',
    duration: '1-3 месяца',
    description: 'Комплексное решение от проекта до финальной уборки',
    features: [
      'Демонтаж и подготовка',
      'Все коммуникации',
      'Черновая и чистовая отделка',
      'Установка сантехники',
      'Финальная уборка',
    ],
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/9d0eee88811aa2fb047c20f20f5a197e.jpeg'
  },
  {
    title: 'Коммерческий ремонт',
    price: 'от 6 000 ₽/м²',
    duration: '2-4 недели',
    description: 'Ремонт офисов, магазинов, ресторанов',
    features: [
      'Соблюдение норм и требований',
      'Зонирование пространства',
      'Профессиональное освещение',
      'Системы безопасности',
      'Быстрые сроки выполнения',
    ],
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/ea309ba9e2fddc715cc2263f479c3801.jpeg'
  },
  {
    title: 'Дизайнерская отделка',
    price: 'от 12 000 ₽/м²',
    duration: '1-4 месяца',
    description: 'Эксклюзивные решения с премиум материалами',
    features: [
      'Индивидуальный дизайн-проект',
      'Премиум материалы',
      'Эксклюзивная мебель',
      'Авторские решения',
      'Полное сопровождение',
    ],
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/1fc0bc68a8d14d42b1a77a62bdac6891.jpeg'
  },
  {
    title: 'Строительство домов',
    price: 'от 25 000 ₽/м²',
    duration: '3-8 месяцев',
    description: 'Строительство малоэтажных домов под ключ',
    features: [
      'Проектирование',
      'Фундамент и коробка',
      'Кровельные работы',
      'Внутренняя отделка',
      'Благоустройство участка',
    ],
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/091856fc8c56225b241ce2b500cc379d.jpeg'
  }
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState(initialServices);

  useEffect(() => {
    // Add Schema.org JSON-LD for services page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "ГлобалГранд",
        "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
      },
      "serviceType": "Ремонтные услуги",
      "description": "Полный спектр ремонтных работ с гарантией качества. От косметического ремонта до строительства домов под ключ.",
      "areaServed": {
        "@type": "Place",
        "name": "Москва и Московская область"
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
              "description": "Обновление интерьера с минимальными вложениями",
              "offers": {
                "@type": "Offer",
                "price": "3000",
                "priceCurrency": "RUB",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "3000",
                  "priceCurrency": "RUB",
                  "unitText": "за м²"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Черновая отделка",
              "description": "Подготовка помещения к финишной отделке",
              "offers": {
                "@type": "Offer",
                "price": "5000",
                "priceCurrency": "RUB",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "5000",
                  "priceCurrency": "RUB",
                  "unitText": "за м²"
                }
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Полный ремонт под ключ",
              "description": "Комплексное решение от проекта до финальной уборки",
              "offers": {
                "@type": "Offer",
                "price": "8990",
                "priceCurrency": "RUB",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "8990",
                  "priceCurrency": "RUB",
                  "unitText": "за м²"
                }
              }
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Услуги ремонта - ГлобалГранд | Косметический, капитальный ремонт, строительство";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полный спектр ремонтных услуг от ГлобалГранд: косметический ремонт от 3000₽/м², капитальный ремонт под ключ от 8990₽/м², строительство домов. Гарантия качества.');
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('Service')) {
          script.remove();
        }
      });
    };
  }, []);

  const handleServiceImageChange = (index: number, newSrc: string) => {
    const newServices = [...services];
    newServices[index].image = newSrc;
    setServices(newServices);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 font-['Inter'] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-300 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <Header />
        
        <main className="relative z-10">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white mb-6">
                  Наши услуги
                </h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Полный спектр ремонтных работ с гарантией качества. 
                  От косметического ремонта до строительства домов под ключ.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:bg-white transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2/5 h-80 md:h-auto">
                        <MediaEditor
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full"
                          onMediaChange={(newSrc) => handleServiceImageChange(index, newSrc)}
                        />
                      </div>
                      <div className="w-full md:w-3/5 p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                            {service.title}
                          </h3>
                          <div className="text-left sm:text-right">
                            <div className="text-lg font-bold text-blue-600">{service.price}</div>
                            <div className="text-sm text-gray-500">{service.duration}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 text-sm md:text-base">
                          {service.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                              <i className="ri-check-line text-green-500 mr-2 mt-0.5 flex-shrink-0"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                          Заказать услугу
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Не нашли нужную услугу?
                </h3>
                <p className="text-xl mb-6 opacity-90">
                  Мы выполняем любые виды ремонтных работ. Расскажите о своей задаче, 
                  и мы найдем подходящих специалистов.
                </p>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" onClick={() => setIsModalOpen(true)}>
                  <i className="ri-customer-service-line mr-2"></i>
                  Получить консультацию
                </Button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
