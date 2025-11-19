
import React from 'react';

const advantages = [
  {
    icon: 'ri-shield-check-line',
    title: 'Гарантия качества',
    description: 'Предоставляем официальную гарантию на все виды работ. Если что-то пойдет не так — исправим бесплатно.'
  },
  {
    icon: 'ri-team-line',
    title: 'Проверенные мастера',
    description: 'Работаем только с опытными специалистами с многолетним стажем. Каждый мастер прошел тщательный отбор.'
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Честная цена',
    description: 'Никаких скрытых доплат. Цена, озвученная в начале, остается неизменной до конца работ.'
  },
  {
    icon: 'ri-time-line',
    title: 'Соблюдение сроков',
    description: 'Составляем детальный план работ и строго его придерживаемся. Ваш ремонт будет готов вовремя.'
  },
  {
    icon: 'ri-customer-service-line',
    title: 'Персональный подход',
    description: 'Каждый проект уникален. Подбираем решения именно под ваши потребности и бюджет.'
  },
  {
    icon: 'ri-tools-line',
    title: 'Современные технологии',
    description: 'Используем передовые материалы и технологии, чтобы ваш ремонт служил долгие годы.'
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Креативный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-indigo-200/40 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-cyan-200/30 rounded-full blur-3xl translate-y-1/2"></div>
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Многие люди не хотят иметь дело с посредниками, считая что это дороже. 
            Но я наоборот подбираю вам профессиональных мастеров под ваш личный бюджет.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3 sm:mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <i className={`${advantage.icon} text-lg sm:text-xl lg:text-2xl text-blue-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-xl">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Знакомо, когда обзваниваете 20 бригад?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Но ни одна из них не может или не хочет браться за вашу работу? 
              С нами такой проблемы не будет!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-white/30 shadow-md">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-2 sm:mb-3">
                <i className="ri-close-line text-red-600 text-base sm:text-lg lg:text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Без нас</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Множество звонков, отказы, потеря времени</p>
            </div>
            
            <div className="bg-blue-50/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border-2 border-blue-200/50 shadow-md">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-2 sm:mb-3">
                <i className="ri-arrow-right-line text-white text-base sm:text-lg lg:text-xl"></i>
              </div>
              <h4 className="font-semibold text-blue-600 mb-1 sm:mb-2 text-sm sm:text-base">Переход к нам</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Один звонок — все решено</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-white/30 shadow-md">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-2 sm:mb-3">
                <i className="ri-check-line text-green-600 text-base sm:text-lg lg:text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">С нами</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Быстрый подбор, качественный результат</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
