
import React from 'react';

export default function WarningSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Креативный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-red-200/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-orange-300/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-300/40 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/30">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-red-100/80 backdrop-blur-sm rounded-full mr-3 sm:mr-4 border border-red-200/50">
                  <i className="ri-error-warning-line text-red-600 text-base sm:text-lg lg:text-xl"></i>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Важно понимать
                </h2>
              </div>
              
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-red-600 mb-3 sm:mb-4">
                  Предложение слишком низкой цены часто означает:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-500 text-base sm:text-lg mt-1 mr-2 sm:mr-3 flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-gray-700">Использование дешевых материалов низкого качества</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-500 text-base sm:text-lg mt-1 mr-2 sm:mr-3 flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-gray-700">Скрытые дефекты, которые проявятся позже</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-500 text-base sm:text-lg mt-1 mr-2 sm:mr-3 flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-gray-700">Необходимость переделок через 6-12 месяцев</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-close-circle-line text-red-500 text-base sm:text-lg mt-1 mr-2 sm:mr-3 flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-gray-700">Дополнительные скрытые расходы в процессе</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-blue-200/30">
                <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                  Наш подход — честность с самого начала
                </h4>
                <p className="text-blue-800 text-sm sm:text-base">
                  Мы называем реальную стоимость качественного ремонта. 
                  Лучше заплатить справедливую цену один раз, чем переплачивать за переделки.
                </p>
              </div>
            </div>

            <div className="relative min-h-64 sm:min-h-80 lg:min-h-full">
              <img 
                src="https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/cb820bbb890c1c52633f3cdc56703572.jpeg"
                alt="Контроль качества"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
