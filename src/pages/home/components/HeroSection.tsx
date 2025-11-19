
import React, { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';
import MediaEditor from '../../../components/base/MediaEditor';
import ConsultationModal from '../../../components/feature/ConsultationModal';
import CostCalculatorModal from '../../../components/feature/CostCalculatorModal';

// Постоянные изображения для левых слайдов
const leftSlides = [
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/52e2d17acf46ca4060e84b788a7f3f5b.jpeg',
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/b705c1947797fc2e3e3f640874dcd9dd.jpeg',
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/7a2a6919068f7a10bae55cf1e9f02669.jpeg'
];

// Постоянные изображения для правых слайдов
const initialRightSlides = [
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/a2be251c52cff636acfe6fa9745f1346.jpeg',
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/93a74f6cc757f634761627c2af0df357.jpeg',
  'https://static.readdy.ai/image/504b0b73a96a58b0dcc5636c96288748/be8970abdffa2c69240178e3eda0887a.jpeg'
];

const textSlides = [
  {
    title: "Ремонт квартир в Москве и МО:",
    subtitle: "качество без лишних переплат",
    description: "Команда «ГлобалГранд» специализируется на предоставлении всех услуг в сфере ремонта квартир, а также строительства в Москве и МО. Уже два года помогаем жителям столицы и области подобрать специалистов для реализации их мечты о качественном и современном ремонте.",
    stats: [
      { number: "120", text: "объектов одновременно" },
      { number: "15", text: "опытных специалистов" },
      { number: "2+", text: "года опыта" }
    ]
  },
  {
    title: "Профессиональная команда:",
    subtitle: "мастера своего дела",
    description: "Наши специалисты имеют многолетний опыт в сфере ремонта и строительства. Мы используем только качественные материалы и современные технологии, чтобы ваш ремонт служил долгие годы.",
    stats: [
      { number: "500+", text: "довольных клиентов" },
      { number: "98%", text: "положительных отзывов" },
      { number: "24/7", text: "поддержка клиентов" }
    ]
  },
  {
    title: "Индивидуальный подход:",
    subtitle: "Ваши мечты - наша работа",
    description: "Каждый проект уникален. Мы внимательно выслушиваем ваши пожелания и создаем индивидуальное решение, которое полностью соответствует вашему бюджету и требованиям к качеству.",
    stats: [
      { number: "100%", text: "гарантия качества" },
      { number: "30", text: "дней гарантийного обслуживания" },
      { number: "0", text: "скрытых платежей" }
    ]
  }
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [leftCurrentSlide, setLeftCurrentSlide] = useState(0);
  const [rightCurrentSlide, setRightCurrentSlide] = useState(0);
  const [textCurrentSlide, setTextCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [rightSlides, setRightSlides] = useState(initialRightSlides);

  // Автоматическое пролистывание каждые 7 секунд
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setLeftCurrentSlide(prev => (prev + 1) % leftSlides.length);
      setRightCurrentSlide(prev => (prev + 1) % rightSlides.length);
      setTextCurrentSlide(prev => (prev + 1) % textSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlay, rightSlides.length]);

  const nextSlide = () => {
    setIsAutoPlay(false);
    setLeftCurrentSlide(prev => (prev + 1) % leftSlides.length);
    setRightCurrentSlide(prev => (prev + 1) % rightSlides.length);
    setTextCurrentSlide(prev => (prev + 1) % textSlides.length);
  };

  const prevSlide = () => {
    setIsAutoPlay(false);
    setLeftCurrentSlide(prev => (prev - 1 + leftSlides.length) % leftSlides.length);
    setRightCurrentSlide(prev => (prev - 1 + rightSlides.length) % rightSlides.length);
    setTextCurrentSlide(prev => (prev - 1 + textSlides.length) % textSlides.length);
  };

  const handleRightSlideChange = (index: number, newSrc: string) => {
    const newSlides = [...rightSlides];
    newSlides[index] = newSrc;
    setRightSlides(newSlides);
  };

  const currentTextSlide = textSlides[textCurrentSlide];

  // WhatsApp ссылка
  const whatsappLink = "https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»";

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-14 sm:pt-16 lg:pt-20">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 group"
        >
          <i className="ri-arrow-left-line text-sm sm:text-lg lg:text-2xl text-white group-hover:scale-110 transition-transform"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 sm:p-3 lg:p-4 hover:bg-white/20 transition-all duration-300 group"
        >
          <i className="ri-arrow-right-line text-sm sm:text-lg lg:text-2xl text-white group-hover:scale-110 transition-transform"></i>
        </button>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 items-center">
            {/* Left Slideshow */}
            <div className="hidden lg:block relative h-64 xl:h-80 2xl:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {leftSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === leftCurrentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={slide} 
                    alt={`Renovation example ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ))}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {leftSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === leftCurrentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setLeftCurrentSlide(index);
                      setRightCurrentSlide(index);
                      setTextCurrentSlide(index);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Center Content with Text Slides */}
            <div className="lg:col-span-3 text-center text-white px-2 sm:px-4">
              <div className="transition-all duration-1000 ease-in-out">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">
                  {currentTextSlide.title}
                  <span className="text-blue-400 block mt-1 sm:mt-2">{currentTextSlide.subtitle}</span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-4xl mx-auto px-2">
                  {textCurrentSlide === 0 ? (
                    <>
                      Команда «ГлобалГранд» специализируется на предоставлении{' '}
                      <span className="relative inline-block force-animate">
                        <span 
                          className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent font-bold text-base sm:text-lg lg:text-xl xl:text-2xl force-animate"
                          style={{
                            animation: 'creativePulse 2s ease-in-out infinite, creativeGlow 2s ease-in-out infinite, creativeFloat 3s ease-in-out infinite',
                            backgroundSize: '200% auto',
                            backgroundImage: 'linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                            filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
                            animationPlayState: 'running',
                            animationFillMode: 'both'
                          }}
                        >
                          всех
                        </span>
                        <span 
                          className="absolute -inset-2 rounded-lg opacity-75 force-animate"
                          style={{
                            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2))',
                            animation: 'creativePulse 2s ease-in-out infinite',
                            filter: 'blur(8px)',
                            animationPlayState: 'running'
                          }}
                        ></span>
                        <span 
                          className="absolute -inset-1 rounded-lg opacity-50 force-animate"
                          style={{
                            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3))',
                            animation: 'creativePulse 1.5s ease-in-out infinite reverse',
                            filter: 'blur(4px)',
                            animationPlayState: 'running'
                          }}
                        ></span>
                      </span>
                      {' '}услуг в сфере ремонта квартир, а также строительства в Москве и МО. Уже два года помогаем жителям столицы и области подобрать специалистов для реализации их мечты о качественном и современном ремонте.
                    </>
                  ) : (
                    currentTextSlide.description
                  )}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 justify-center px-2">
                <Button 
                  size="lg" 
                  className="text-sm sm:text-base lg:text-lg whitespace-nowrap px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4" 
                  onClick={() => setIsModalOpen(true)}
                >
                  <i className="ri-phone-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Получить консультацию</span>
                  <span className="sm:hidden">Консультация</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-sm sm:text-base lg:text-lg border-white text-white hover:bg-white/10 hover:text-white hover:border-white/80 relative overflow-hidden group whitespace-nowrap px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4"
                  onClick={() => setIsCalculatorOpen(true)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    <i className="ri-calculator-line mr-1 sm:mr-2"></i>
                    <span className="hidden sm:inline">Рассчитать стоимость</span>
                    <span className="sm:hidden">Расчет</span>
                  </span>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center max-w-md mx-auto px-2">
                {currentTextSlide.stats.map((stat, index) => (
                  <div key={index} className="transition-all duration-1000 ease-in-out">
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.text}</div>
                  </div>
                ))}
              </div>

              {/* Text Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-3 sm:mt-4 lg:mt-6">
                {textSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === textCurrentSlide ? 'bg-blue-400' : 'bg-white/30'
                    }`}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setTextCurrentSlide(index);
                      setLeftCurrentSlide(index);
                      setRightCurrentSlide(index);
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Slideshow */}
            <div className="hidden lg:block relative h-64 xl:h-80 2xl:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {rightSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === rightCurrentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <MediaEditor
                    src={slide}
                    alt={`Construction example ${index + 1}`}
                    className="w-full h-full"
                    onMediaChange={(newSrc) => handleRightSlideChange(index, newSrc)}
                  />
                </div>
              ))}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {rightSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === rightCurrentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setRightCurrentSlide(index);
                      setLeftCurrentSlide(index);
                      setTextCurrentSlide(index);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Image Gallery */}
          <div className="lg:hidden mt-6 sm:mt-8">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={leftSlides[leftCurrentSlide]} 
                  alt="Renovation example"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg">
                <MediaEditor
                  src={rightSlides[rightCurrentSlide]}
                  alt="Construction example"
                  className="w-full h-full"
                  onMediaChange={(newSrc) => handleRightSlideChange(rightCurrentSlide, newSrc)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        whatsappLink={whatsappLink}
      />
      
      <CostCalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
        whatsappLink={whatsappLink}
      />
    </>
  );
}
