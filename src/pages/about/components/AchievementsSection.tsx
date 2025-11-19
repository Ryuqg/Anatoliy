
import React from 'react';

export default function AchievementsSection() {
  const achievements = [
    {
      icon: 'ri-trophy-line',
      title: 'Лучшая строительная компания 2023',
      description: 'Награда от Ассоциации строителей региона'
    },
    {
      icon: 'ri-medal-line',
      title: 'ISO 9001:2015',
      description: 'Сертификат качества управления проектами'
    },
    {
      icon: 'ri-star-line',
      title: '4.9/5 рейтинг клиентов',
      description: 'Средняя оценка по отзывам заказчиков'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Гарантия 5 лет',
      description: 'На все виды строительных работ'
    }
  ];

  const stats = [
    { number: '500+', label: 'Завершенных проектов' },
    { number: '15', label: 'Лет на рынке' },
    { number: '50+', label: 'Специалистов в команде' },
    { number: '98%', label: 'Довольных клиентов' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши достижения
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Результаты нашей работы говорят сами за себя
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${achievement.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}