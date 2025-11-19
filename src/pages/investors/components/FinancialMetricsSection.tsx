
import React from 'react';

export default function FinancialMetricsSection() {
  const metrics = [
    {
      year: '2022',
      revenue: '₽25М',
      profit: '₽8М',
      projects: 180,
      growth: '+45%'
    },
    {
      year: '2023',
      revenue: '₽38М',
      profit: '₽13М',
      projects: 285,
      growth: '+52%'
    },
    {
      year: '2024',
      revenue: '₽52М',
      profit: '₽18М',
      projects: 420,
      growth: '+37%'
    }
  ];

  const advantages = [
    {
      icon: 'ri-shield-check-line',
      title: 'Гарантированная защита',
      description: 'Страхование инвестиций и юридические гарантии возврата средств'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Стабильный рост',
      description: 'Ежегодный рост выручки более 40% на протяжении 3 лет'
    },
    {
      icon: 'ri-award-line',
      title: 'Лидер рынка',
      description: 'Топ-3 компании по ремонту квартир в Москве и МО'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Полная прозрачность',
      description: 'Ежемесячная отчетность и доступ к финансовым показателям'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            📊 Финансовые показатели
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> результаты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачная финансовая отчетность и стабильный рост показателей за последние годы
          </p>
        </div>

        {/* Financial Chart */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Динамика роста компании
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center relative">
                  {index < metrics.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <i className="ri-arrow-right-line text-2xl text-gray-400"></i>
                    </div>
                  )}
                  
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.year}</div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{metric.revenue}</div>
                        <div className="text-sm text-gray-500">Выручка</div>
                      </div>
                      
                      <div>
                        <div className="text-xl font-bold text-green-600">{metric.profit}</div>
                        <div className="text-sm text-gray-500">Прибыль</div>
                      </div>
                      
                      <div>
                        <div className="text-lg font-bold text-purple-600">{metric.projects}</div>
                        <div className="text-sm text-gray-500">Проектов</div>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <i className="ri-arrow-up-line mr-1"></i>
                          {metric.growth}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${advantage.icon} text-xl text-white`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div 
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white overflow-hidden"
            style={{
              backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20financial%20charts%20and%20graphs%20with%20upward%20trending%20arrows%2C%20modern%20business%20analytics%20dashboard%2C%20investment%20growth%20visualization%2C%20blue%20and%20purple%20gradient%20overlay%2C%20sophisticated%20financial%20data%20presentation%2C%20clean%20minimalist%20design&width=1200&height=400&seq=financial-cta-bg&orientation=landscape')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Готовы стать нашим инвестором?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Получите подробную презентацию с финансовыми прогнозами и условиями инвестирования
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>
                  Скачать бизнес-план
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold whitespace-nowrap">
                  <i className="ri-calendar-line mr-2"></i>
                  Назначить встречу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
