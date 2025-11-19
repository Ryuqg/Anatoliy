
import React from 'react';

export default function InvestmentOpportunitySection() {
  const opportunities = [
    {
      icon: 'ri-building-line',
      title: 'Расширение производства',
      description: 'Увеличение штата специалистов и закупка современного оборудования для выполнения большего количества проектов',
      investment: '₽5,000,000',
      roi: '35%',
      period: '24 месяца'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Новые регионы',
      description: 'Открытие филиалов в Санкт-Петербурге и других крупных городах России',
      investment: '₽10,000,000',
      roi: '40%',
      period: '30 месяцев'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Цифровизация',
      description: 'Разработка мобильного приложения и автоматизация процессов управления проектами',
      investment: '₽3,000,000',
      roi: '25%',
      period: '18 месяцев'
    },
    {
      icon: 'ri-team-line',
      title: 'Франшиза',
      description: 'Создание франшизной сети по всей России с готовыми бизнес-процессами',
      investment: '₽15,000,000',
      roi: '50%',
      period: '36 месяцев'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            📈 Инвестиционные направления
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Возможности для 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> инвестирования</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите направление инвестирования, которое соответствует вашим целям и ожиданиям по доходности
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${opportunity.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{opportunity.investment}</div>
                    <div className="text-sm text-gray-500">Требуется</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {opportunity.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-lg font-bold text-green-600">{opportunity.roi}</div>
                      <div className="text-xs text-gray-500">Годовая доходность</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">{opportunity.period}</div>
                      <div className="text-xs text-gray-500">Срок проекта</div>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Индивидуальные инвестиционные решения
            </h3>
            <p className="text-gray-600 mb-6">
              Готовы обсудить персональные условия инвестирования от ₽20,000,000? 
              Свяжитесь с нашей командой для разработки индивидуального предложения.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 font-semibold whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
