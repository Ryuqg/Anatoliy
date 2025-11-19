
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // WhatsApp ссылка
  const whatsappLink = "https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»";

  const socialLinks = [
    { name: 'WhatsApp', icon: 'ri-whatsapp-line', href: whatsappLink, color: 'hover:text-green-500' },
    { name: 'Telegram', icon: 'ri-telegram-line', href: '#', color: 'hover:text-blue-500' },
    { name: 'VK', icon: 'ri-vk-line', href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: 'ri-instagram-line', href: '#', color: 'hover:text-pink-500' }
  ];

  const footerSections = [
    {
      title: 'Услуги',
      links: [
        { name: 'Косметический ремонт', href: '/services' },
        { name: 'Полный ремонт под ключ', href: '/services' },
        { name: 'Коммерческий ремонт', href: '/services' },
        { name: 'Строительство домов', href: '/services' }
      ]
    },
    {
      title: 'Компания',
      links: [
        { name: 'О нас', href: '/' },
        { name: 'Портфолио', href: '/portfolio' },
        { name: 'Для инвесторов', href: '/investors' },
        { name: 'Отзывы клиентов', href: '/' }
      ]
    },
    {
      title: 'Контакты',
      links: [
        { name: '+7 (495) 123-45-67', href: 'tel:+74951234567', icon: 'ri-phone-line' },
        { name: 'info@globalgrand.ru', href: 'mailto:info@globalgrand.ru', icon: 'ri-mail-line' },
        { name: 'Москва, ул. Строителей, 15', href: '#', icon: 'ri-map-pin-line' },
        { name: 'Пн-Пт: 9:00-18:00', href: '#', icon: 'ri-time-line' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-indigo-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-18 sm:w-28 lg:w-36 h-18 sm:h-28 lg:h-36 bg-cyan-500 rounded-full blur-2xl"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-6 sm:w-9 lg:w-12 h-6 sm:h-9 lg:h-12 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-white transform rotate-12"></div>
        <div className="absolute bottom-1/4 left-10 w-10 sm:w-15 lg:w-20 h-10 sm:h-15 lg:h-20 border-2 border-white transform rotate-45"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-12 xl:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-2 sm:mr-3">
                  <i className="ri-building-line text-base sm:text-lg lg:text-2xl text-white"></i>
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg lg:text-xl text-white">ГлобалГранд</div>
                  <div className="text-xs sm:text-sm text-gray-300">Строительство и ремонт</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Профессиональные услуги ремонта и строительства в Москве и Московской области. 
                Качество, надежность и индивидуальный подход к каждому проекту.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  >
                    <i className={`${social.icon} text-sm sm:text-base lg:text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white relative">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="flex items-center text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300 group"
                        >
                          {link.icon && (
                            <i className={`${link.icon} mr-2 sm:mr-3 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0`}></i>
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="flex items-center text-sm sm:text-base text-gray-300 hover:text-white transition-all duration-300 group"
                        >
                          {link.icon && (
                            <i className={`${link.icon} mr-2 sm:mr-3 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0`}></i>
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2024 ГлобалГранд. Все права защищены.
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                  Условия использования
                </a>
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors"
                >
                  Website Builder
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-50">
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>
    </footer>
  );
}
