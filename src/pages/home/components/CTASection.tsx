
import React, { useState } from 'react';
import Button from '../../../components/base/Button';
import ConsultationModal from '../../../components/feature/ConsultationModal';
import CostCalculatorModal from '../../../components/feature/CostCalculatorModal';

export default function CTASection() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top-10 left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-20 sm:w-30 lg:w-40 h-20 sm:h-30 lg:h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Готовы начать ремонт?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Получите бесплатную консультацию и точный расчет стоимости вашего проекта уже сегодня
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl text-sm sm:text-base whitespace-nowrap"
              onClick={handleOpenConsultation}
            >
              <i className="ri-phone-line mr-1 sm:mr-2"></i>
              <span className="hidden sm:inline">Получить консультацию</span>
              <span className="sm:hidden">Консультация</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 text-sm sm:text-base whitespace-nowrap"
              onClick={handleOpenCalculator}
            >
              <i className="ri-calculator-line mr-1 sm:mr-2"></i>
              <span className="hidden sm:inline">Узнать реальную стоимость</span>
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

          <div className="text-blue-100 text-xs sm:text-sm">
            <p>📞 Звоните: +7 (910) 084-67-36 | 🕒 Работаем ежедневно с 8:00 до 22:00</p>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      <CostCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={handleCloseCalculator}
        whatsappLink="https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»"
      />
    </>
  );
}
