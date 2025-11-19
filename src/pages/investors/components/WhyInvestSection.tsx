
import React from 'react';

export default function WhyInvestSection() {
  const reasons = [
    {
      icon: 'ri-trending-up-line',
      title: 'Растущий рынок',
      description: 'Рынок ремонта и строительства в России растет на 15-20% ежегодно',
      stats: '+20% в год'
    },
    {
      icon: 'ri-team-line',
      title: 'Опытная команда',
      description: 'Более 50 квалифицированных специалистов с опытом работы от 5 лет',
      stats: '50+ экспертов'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Высокий NPS',
      description: 'Индекс лояльности клиентов 85+ благодаря качеству работ и сервиса',
      stats: 'NPS 85+'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Минимальные риски',
      description: 'Диверсифицированный портфель проектов и страхование всех работ',
      stats: '100% гарантия'
    },
    {
      icon: 'ri-global-line',
      title: 'Масштабируемость',
      description: 'Готовая бизнес-модель для расширения в другие регионы России',
      stats: '10+ регионов'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Стабильный доход',
      description: 'Постоянный поток заказов и предсказуемая выручка круглый год',
      stats: '₽4М+ в месяц'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400/10 rounded-full blur-lg animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium mb-4 border border-yellow-400/30">
            ⭐ Преимущества инвестирования
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Почему стоит 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> инвестировать</span>
            <br />в нашу компанию?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Мы предлагаем уникальное сочетание стабильности, роста и прибыльности в одной из самых перспективных отраслей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${reason.icon} text-2xl text-white`}></i>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-yellow-400">{reason.stats}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-blue-200 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Market Analysis */}
        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Анализ рынка и перспективы
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20construction%20market%20growth%20chart%20with%20upward%20arrow%2C%20professional%20business%20analytics%2C%20blue%20and%20gold%20color%20scheme%2C%20minimalist%20design%2C%20investment%20opportunity%20visualization&width=200&height=200&seq=market-growth&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/80 to-purple-600/80 rounded-full flex items-center justify-center">
                    <i className="ri-bar-chart-line text-2xl text-white"></i>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Размер рынка</h4>
                <p className="text-blue-200 text-sm">₽2.5 трлн в год по России</p>
              </div>

              <div className="text-center">
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Digital%20transformation%20in%20construction%20industry%2C%20modern%20technology%20integration%2C%20smart%20building%20concepts%2C%20innovation%20in%20renovation%20sector&width=200&height=200&seq=digital-transform&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-green-500/80 to-blue-600/80 rounded-full flex items-center justify-center">
                    <i className="ri-rocket-line text-2xl text-white"></i>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Цифровизация</h4>
                <p className="text-blue-200 text-sm">Только 15% компаний используют современные технологии</p>
              </div>

              <div className="text-center">
                <div 
                  className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=Premium%20residential%20construction%20demand%2C%20luxury%20apartment%20renovation%20market%2C%20high-end%20real%20estate%20development%2C%20Moscow%20property%20market%20growth&width=200&height=200&seq=premium-market&orientation=squarish')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-500/80 to-orange-600/80 rounded-full flex items-center justify-center">
                    <i className="ri-home-smile-line text-2xl text-white"></i>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Премиум сегмент</h4>
                <p className="text-blue-200 text-sm">Рост спроса на качественный ремонт +35% в год</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
