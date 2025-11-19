
import React from 'react';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Качество',
      description: 'Используем только проверенные материалы и технологии, гарантируем высокое качество всех работ'
    },
    {
      icon: 'ri-time-line',
      title: 'Пунктуальность',
      description: 'Соблюдаем все сроки и договоренности, ценим время наших клиентов'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Клиентоориентированность',
      description: 'Индивидуальный подход к каждому проекту, учитываем все пожелания заказчика'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Инновации',
      description: 'Постоянно внедряем новые технологии и современные решения в строительстве'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Честность',
      description: 'Прозрачное ценообразование, честные отношения с клиентами и партнерами'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Экологичность',
      description: 'Используем экологически чистые материалы, заботимся об окружающей среде'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши ценности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Принципы, которыми мы руководствуемся в работе и которые делают нас надежным партнером
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}