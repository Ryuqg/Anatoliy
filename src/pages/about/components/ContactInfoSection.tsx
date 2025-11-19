
import React from 'react';
import Button from '../../../components/base/Button';

export default function ContactInfoSection() {
  // WhatsApp ссылка
  const whatsappLink = "https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»";

  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Телефон',
      info: '+7 (910) 084-67-36',
      description: 'Звоните с 9:00 до 21:00',
      action: 'tel:+79100846736',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      info: '+7 (910) 084-67-36',
      description: 'Быстрые ответы 24/7',
      action: whatsappLink,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      info: 'info@globalgrand.ru',
      description: 'Ответим в течение часа',
      action: 'mailto:info@globalgrand.ru',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Офис',
      info: 'Москва, ул. Примерная, 123',
      description: 'Пн-Пт: 9:00-18:00',
      action: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Выберите удобный способ связи. Мы всегда готовы ответить на ваши вопросы и помочь с вашим проектом
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${method.icon} text-2xl lg:text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">{method.title}</h3>
              <p className="text-base lg:text-lg font-semibold text-gray-700 mb-2">{method.info}</p>
              <p className="text-sm lg:text-base text-gray-500">{method.description}</p>
              <div className="mt-4 lg:mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm lg:text-base font-medium">Связаться</span>
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-12">
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Местоположение ГлобалГранд"
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Наш офис
            </h3>
            <p className="text-gray-600 mb-4">
              Приезжайте к нам в офис для личной консультации и обсуждения проекта
            </p>
            <a 
              href="https://yandex.ru/maps/213/moscow/?ll=37.505123%2C55.492923&z=14"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap relative overflow-hidden group text-white shadow-lg hover:shadow-xl px-6 py-3 text-base"
            >
              <span className="relative z-10 flex items-center">
                <i className="ri-navigation-line mr-2"></i>
                Построить маршрут
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
