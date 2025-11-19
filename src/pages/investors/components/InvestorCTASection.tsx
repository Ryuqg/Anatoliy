
import React, { useState } from 'react';
import Button from '../../../components/base/Button';

export default function InvestorCTASection() {
  // WhatsApp ссылка для инвесторов
  const whatsappLink = "https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20инвестиционных%20возможностей%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»";

  const [activeTab, setActiveTab] = useState('presentation');

  const documents = [
    {
      id: 'presentation',
      title: 'Инвестиционная презентация',
      description: 'Подробная презентация с финансовыми показателями и планами развития',
      icon: 'ri-slideshow-line',
      size: '12 MB'
    },
    {
      id: 'business-plan',
      title: 'Бизнес-план',
      description: 'Детальный бизнес-план на 5 лет с прогнозами и анализом рисков',
      icon: 'ri-file-text-line',
      size: '8 MB'
    },
    {
      id: 'financial',
      title: 'Финансовая отчетность',
      description: 'Аудированная финансовая отчетность за последние 3 года',
      icon: 'ri-bar-chart-box-line',
      size: '5 MB'
    }
  ];

  const contacts = [
    {
      name: 'Александр Петров',
      position: 'Директор по развитию',
      phone: '+7 (910) 084 67-36',
      email: 'a.petrov@globalgrad.ru',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20executive%20man%20in%20suit%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%2C%20investment%20director%20portrait&width=300&height=300&seq=director-photo&orientation=squarish'
    },
    {
      name: 'Мария Соколова',
      position: 'Финансовый директор',
      phone: '+7 (910) 084 67-37',
      email: 'm.sokolova@globalgrad.ru',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20in%20suit%2C%20confident%20expression%2C%20modern%20office%20setting%2C%20corporate%20headshot%2C%20financial%20director%20portrait&width=300&height=300&seq=cfo-photo&orientation=squarish'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* ... existing decorative elements ... */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Готовы инвестировать в будущее?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Присоединяйтесь к нашей команде инвесторов и получите доступ к эксклюзивным возможностям в сфере строительства и ремонта
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-800 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-phone-line mr-2 sm:mr-3"></i>
                Связаться с нами
              </Button>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line mr-2 sm:mr-3"></i>
                Обсудить инвестиции
              </Button>
            </a>
          </div>

          {/* ... existing trust indicators ... */}
        </div>
      </div>

      {/* Original content retained below */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              📞 Свяжитесь с нами
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Начните 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> инвестировать</span>
              <br />уже сегодня
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Получите всю необходимую информацию и начните зарабатывать с надежным партнером
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Documents Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Документы для инвесторов
              </h3>

              <div className="space-y-4">
                {documents.map((doc) => (
                  <div 
                    key={doc.id}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      activeTab === doc.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab(doc.id)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeTab === doc.id ? 'bg-blue-500' : 'bg-gray-400'
                      }`}>
                        <i className={`${doc.icon} text-xl text-white`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900">{doc.title}</h4>
                          <span className="text-sm text-gray-500">{doc.size}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                        {activeTab === doc.id && (
                          <Button size="sm" className="whitespace-nowrap">
                            <i className="ri-download-line mr-2"></i>
                            Скачать
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-green-600 mr-3"></i>
                  <h4 className="text-lg font-bold text-gray-900">Конфиденциальность гарантирована</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Все документы защищены соглашением о неразглашении. 
                  Ваши данные не передаются третьим лицам.
                </p>
              </div>
            </div>

            {/* Contacts Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Наши контакты
              </h3>

              <div className="space-y-6">
                {contacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={contact.image}
                        alt={contact.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{contact.name}</h4>
                        <p className="text-blue-600 font-medium mb-3">{contact.position}</p>

                        <div className="space-y-2">
                          <a 
                            href={`tel:${contact.phone}`}
                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <i className="ri-phone-line mr-2"></i>
                            {contact.phone}
                          </a>
                          <a 
                            href={`mailto:${contact.email}`}
                            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            <i className="ri-mail-line mr-2"></i>
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-4">Запланируйте встречу</h4>
                <p className="text-blue-100 mb-6">
                  Обсудим ваши инвестиционные цели и подберем оптимальное решение
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap"
                    size="sm"
                  >
                    <i className="ri-calendar-line mr-2"></i>
                    Онлайн встреча
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 whitespace-nowrap"
                    size="sm"
                  >
                    <i className="ri-building-line mr-2"></i>
                    Встреча в офисе
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm mb-4">
                  Или свяжитесь с нами любым удобным способом
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <i className="ri-telegram-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                    <i className="ri-whatsapp-line"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
