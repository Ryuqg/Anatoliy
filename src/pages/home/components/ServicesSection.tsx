
import React, { useState } from 'react';
import Button from '../../../components/base/Button';
import ServiceDetailModal from '../../../components/feature/ServiceDetailModal';
import CostCalculatorModal from '../../../components/feature/CostCalculatorModal';

const initialServices = [
  {
    icon: 'ri-brush-line',
    title: 'Косметический ремонт',
    description: 'Обновление интерьера с минимальными вложениями. Покраска, поклейка обоев, замена напольных покрытий.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/262fb333899c01d20be11414925d13e3.jpeg',
    detailedDescription: 'Косметический ремонт — это идеальное решение для тех, кто хочет обновить интерьер без серьезных затрат и длительных работ. Мы выполняем качественную покраску стен и потолков, поклейку современных обоев, замену напольных покрытий на ламинат, линолеум или ковролин. Также в стоимость входит замена розеток и выключателей, обновление плинтусов и наличников.',
    features: [
      'Покраска стен и потолков качественными материалами',
      'Поклейка обоев любой сложности',
      'Замена напольных покрытий (ламинат, линолеум, ковролин)',
      'Установка новых плинтусов и наличников',
      'Замена розеток и выключателей',
      'Мелкий ремонт и шпаклевка стен',
      'Уборка после завершения работ'
    ],
    duration: '1-2 недели',
    priceRange: 'от 2 500 ₽/м²',
    stages: [
      'Осмотр объекта и составление сметы',
      'Подготовка поверхностей и защита мебели',
      'Шпаклевка и грунтовка стен',
      'Покраска или поклейка обоев',
      'Укладка напольного покрытия',
      'Установка плинтусов и электрофурнитуры',
      'Финальная уборка'
    ]
  },
  {
    icon: 'ri-hammer-line',
    title: 'Черновая отделка',
    description: 'Подготовка помещения к финишной отделке. Выравнивание стен, стяжка пола, прокладка коммуникаций.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/393ce78f8ae012e13302a7ba9660ab3f.jpeg',
    detailedDescription: 'Черновая отделка — это фундаментальный этап ремонта, который создает основу для качественной финишной отделки. Мы выполняем полное выравнивание стен и потолков, устройство стяжки пола, прокладку всех инженерных коммуникаций. Наши специалисты используют только проверенные материалы и современные технологии.',
    features: [
      'Демонтаж старых покрытий и конструкций',
      'Выравнивание стен штукатуркой или гипсокартоном',
      'Устройство цементно-песчаной стяжки пола',
      'Прокладка электропроводки и слаботочных сетей',
      'Монтаж водопровода и канализации',
      'Установка радиаторов отопления',
      'Грунтовка всех поверхностей'
    ],
    duration: '3-4 недели',
    priceRange: 'от 4 500 ₽/м²',
    stages: [
      'Демонтажные работы',
      'Прокладка инженерных коммуникаций',
      'Выравнивание стен и потолков',
      'Устройство стяжки пола',
      'Установка сантехнических приборов',
      'Подключение электрооборудования',
      'Приемка работ'
    ]
  },
  {
    icon: 'ri-home-line',
    title: 'Полный ремонт под ключ',
    description: 'Комплексное решение от проекта до финальной уборки. Все работы выполняются нашими специалистами.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/43d2cfbc35c22bcc72390e82fd11d1dc.jpeg',
    detailedDescription: 'Полный ремонт под ключ — это комплексное решение, которое включает в себя все этапы от разработки дизайн-проекта до финальной уборки. Мы берем на себя полную ответственность за результат, координируем работу всех специалистов и гарантируем соблюдение сроков. Вы получаете готовое к проживанию помещение.',
    features: [
      'Разработка дизайн-проекта интерьера',
      'Полный демонтаж и подготовка помещения',
      'Прокладка всех инженерных коммуникаций',
      'Черновая и финишная отделка',
      'Установка сантехники и электрооборудования',
      'Монтаж мебели и декоративных элементов',
      'Генеральная уборка и сдача объекта'
    ],
    duration: '2-3 месяца',
    priceRange: 'от от 8 990 ₽/м²',
    stages: [
      'Замеры и разработка проекта',
      'Демонтаж и подготовительные работы',
      'Инженерные работы и черновая отделка',
      'Финишная отделка и покраска',
      'Установка сантехники и электрики',
      'Монтаж мебели и аксессуаров',
      'Финальная приемка объекта'
    ]
  },
  {
    icon: 'ri-building-line',
    title: 'Коммерческий ремонт',
    description: 'Ремонт офисов, магазинов, ресторанов. Соблюдение всех норм и требований для коммерческих помещений.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/ca7719d96dfba2eb22e107337522afc3.jpeg',
    detailedDescription: 'Коммерческий ремонт требует особого подхода и соблюдения специальных норм и требований. Мы имеем большой опыт в ремонте офисов, торговых помещений, ресторанов и других коммерческих объектов. Учитываем специфику бизнеса, требования пожарной безопасности и санитарные нормы.',
    features: [
      'Соблюдение всех коммерческих стандартов',
      'Пожаробезопасные материалы и решения',
      'Современные системы вентиляции и кондиционирования',
      'Профессиональное освещение рабочих зон',
      'Качественные напольные покрытия для высокой проходимости',
      'Эргономичная планировка пространства',
      'Быстрые сроки выполнения работ'
    ],
    duration: '1-2 месяца',
    priceRange: 'от 6 500 ₽/м²',
    stages: [
      'Анализ требований и согласование проекта',
      'Получение необходимых разрешений',
      'Демонтаж с минимальным простоем бизнеса',
      'Инженерные работы и отделка',
      'Установка специального оборудования',
      'Финальные работы и брендинг',
      'Сдача объекта и получение разрешений'
    ]
  },
  {
    icon: 'ri-paint-brush-line',
    title: 'Дизайнерская отделка',
    description: 'Эксклюзивные решения с использованием премиум материалов. Создание уникального интерьера.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/12133043401a033cf2e1c841df677ca4.jpeg',
    detailedDescription: 'Дизайнерская отделка — это создание эксклюзивного интерьера с использованием премиальных материалов и авторских решений. Наши дизайнеры разрабатывают уникальные концепции, учитывая ваши предпочтения и образ жизни. Мы работаем с лучшими поставщиками материалов и используем инновационные технологии.',
    features: [
      'Индивидуальный дизайн-проект интерьера',
      'Премиальные отделочные материалы',
      'Эксклюзивная мебель на заказ',
      'Авторские декоративные элементы',
      'Профессиональное освещение с диммерами',
      'Системы "умный дом"',
      'Персональное сопровождение дизайнера'
    ],
    duration: '3-4 месяца',
    priceRange: 'от 15 000 ₽/м²',
    stages: [
      'Консультация с дизайнером и создание концепции',
      'Детальная проработка дизайн-проекта',
      'Подбор эксклюзивных материалов',
      'Выполнение отделочных работ',
      'Изготовление и установка мебели',
      'Декорирование и стайлинг',
      'Финальная презентация интерьера'
    ]
  },
  {
    icon: 'ri-home-4-line',
    title: 'Строительство домов',
    description: 'Строительство малоэтажных домов под ключ. От фундамента до крыши с полной отделкой.',
    image: 'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/3b1ea0cdbdb58c6e82514d545cbf1b63.jpeg',
    detailedDescription: 'Строительство домов под ключ — это полный цикл работ от проектирования до сдачи готового дома. Мы строим качественные малоэтажные дома с использованием современных технологий и материалов. Наша команда включает архитекторов, инженеров и опытных строителей.',
    features: [
      'Архитектурное проектирование',
      'Устройство надежного фундамента',
      'Возведение стен из качественных материалов',
      'Монтаж кровли и водосточной системы',
      'Прокладка всех инженерных коммуникаций',
      'Внутренняя и внешняя отделка',
      'Благоустройство территории'
    ],
    duration: '6-12 месяцев',
    priceRange: 'от 35 000 ₽/м²',
    stages: [
      'Проектирование и получение разрешений',
      'Подготовка участка и устройство фундамента',
      'Возведение стен и монтаж кровли',
      'Прокладка инженерных коммуникаций',
      'Внутренняя отделка помещений',
      'Внешняя отделка и благоустройство',
      'Сдача дома и оформление документов'
    ]
  }
];

export default function ServicesSection() {
  const [services] = useState(initialServices);
  const [selectedService, setSelectedService] = useState<typeof initialServices[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleServiceClick = (service: typeof initialServices[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleConsultation = () => {
    // This will be handled by parent component
    console.log('Open consultation modal');
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  const handleCloseCalculator = () => {
    setIsCalculatorOpen(false);
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»', '_blank');
  };

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-indigo-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/4 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-slate-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-18 sm:w-28 lg:w-36 h-18 sm:h-28 lg:h-36 bg-blue-300 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-blue-400 transform rotate-45"></div>
          <div className="absolute bottom-32 right-1/4 w-6 sm:w-9 lg:w-12 h-6 sm:h-9 lg:h-12 bg-indigo-400 rounded-full"></div>
          <div className="absolute top-1/3 right-10 w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 bg-slate-400 transform rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Виды выполняемых работ
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-2">
              Опытные специалисты с 7+ лет практики возьмут все работы на себя. 
              Мы подберем профессиональных мастеров под ваш личный бюджет.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:bg-white transition-all duration-300 border border-white/50">
                <div className="relative h-32 sm:h-40 lg:h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover"
                    style={{
                      objectPosition: window.innerWidth <= 768 ? 'center center' : 'center top'
                    }}
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-blue-600 rounded-full text-white shadow-lg">
                    <i className={`${service.icon} text-sm sm:text-lg lg:text-xl`}></i>
                  </div>
                </div>
                <div className="p-3 sm:p-4 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-sm"
                    onClick={() => handleServiceClick(service)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 sm:p-6 lg:p-8 text-white text-center shadow-2xl backdrop-blur-sm border border-white/20">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">
              Минимальная стоимость полного ремонта под ключ
            </h3>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">от 8 990 ₽</div>
            <div className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 opacity-90">за м² по Москве</div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-sm sm:text-base whitespace-nowrap"
                onClick={handleOpenCalculator}
              >
                <span className="hidden sm:inline">Узнать точную стоимость</span>
                <span className="sm:hidden">Узнать стоимость</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-sm sm:text-base whitespace-nowrap"
                onClick={handleWhatsAppContact}
              >
                <i className="ri-whatsapp-line mr-1 sm:mr-2"></i>
                <span className="hidden sm:inline">Связаться с нами</span>
                <span className="sm:hidden">Связаться</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
        onConsultation={handleConsultation}
      />

      <CostCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={handleCloseCalculator}
        whatsappLink="https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»"
      />
    </>
  );
}
