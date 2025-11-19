
import React, { useState, useEffect } from 'react';
import Button from '../base/Button';
import ConsultationModal from './ConsultationModal';

interface CostCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
}

interface CalculatorData {
  apartmentType: string;
  renovationType: string;
  area: string;
  rooms: string;
  timeline: string;
  additionalServices: string[];
}

const apartmentTypes = [
  { value: '1-комнатная', label: '1-комнатная квартира', multiplier: 1.0 },
  { value: '2-комнатная', label: '2-комнатная квартира', multiplier: 1.1 },
  { value: '3-комнатная', label: '3-комнатная квартира', multiplier: 1.2 },
  { value: '4+ комнатная', label: '4+ комнатная квартира', multiplier: 1.3 },
  { value: 'Студия', label: 'Студия', multiplier: 0.9 },
  { value: 'Дом', label: 'Частный дом', multiplier: 1.4 },
  { value: 'Офис', label: 'Офис', multiplier: 1.1 }
];

const renovationTypes = [
  { value: 'Косметический', label: 'Косметический ремонт', basePrice: 3000 },
  { value: 'Черновая отделка', label: 'Черновая отделка', basePrice: 5000 },
  { value: 'Полный под ключ', label: 'Полный ремонт под ключ', basePrice: 8990 },
  { value: 'Дизайнерская отделка', label: 'Дизайнерская отделка', basePrice: 12000 },
  { value: 'Частичный', label: 'Частичный ремонт', basePrice: 4000 } // Fixed syntax error
];

const additionalServices = [
  { value: 'design', label: 'Дизайн-проект', price: 50000 },
  { value: 'furniture', label: 'Подбор мебели', price: 30000 },
  { value: 'appliances', label: 'Установка техники', price: 25000 },
  { value: 'cleaning', label: 'Генеральная уборка', price: 15000 },
  { value: 'warranty', label: 'Расширенная гарантия', price: 20000 }
];

const timelineMultipliers = [
  { value: 'Срочно (до 2 недель)', multiplier: 1.5 },
  { value: '1 месяц', multiplier: 1.2 },
  { value: '2-3 месяца', multiplier: 1.0 },
  { value: '3-6 месяцев', multiplier: 0.9 },
  { value: 'Более 6 месяцев', multiplier: 0.8 }
];

export default function CostCalculatorModal({ isOpen, onClose, whatsappLink }: CostCalculatorModalProps) {
  const [step, setStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    apartmentType: '',
    renovationType: '',
    area: '',
    rooms: '',
    timeline: '',
    additionalServices: []
  });
  const [calculatedCost, setCalculatedCost] = useState<number | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate-fadeIn');
      // Скрыть ИИ-помощника при открытии калькулятора
      const agentButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
      if (agentButton) {
        agentButton.style.display = 'none';
      }
    } else {
      // Показать ИИ-помощника при закрытии калькулятора
      const agentButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
      if (agentButton) {
        agentButton.style.display = '';
      }
    }
  }, [isOpen]);

  const handleInputChange = (field: keyof CalculatorData, value: string | string[]) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCost = () => {
    const apartmentType = apartmentTypes.find(type => type.value === calculatorData.apartmentType);
    const renovationType = renovationTypes.find(type => type.value === calculatorData.renovationType);
    const timeline = timelineMultipliers.find(time => time.value === calculatorData.timeline);
    
    if (!apartmentType || !renovationType || !timeline || !calculatorData.area) {
      return;
    }

    const area = parseInt(calculatorData.area);
    if (Number.isNaN(area) || area <= 0) {
      // Guard against invalid input
      setCalculatedCost(null);
      return;
    }

    let baseCost = renovationType.basePrice * area * apartmentType.multiplier * timeline.multiplier;
    
    const additionalCost = calculatorData.additionalServices.reduce((total, serviceValue) => {
      const service = additionalServices.find(s => s.value === serviceValue);
      return total + (service ? service.price : 0);
    }, 0);

    const totalCost = baseCost + additionalCost;
    setCalculatedCost(Math.round(totalCost));
  };

  const nextStep = () => {
    setAnimationClass('animate-slideOutLeft');
    setTimeout(() => {
      setStep(prev => prev + 1);
      setAnimationClass('animate-slideInRight');
    }, 300);
  };

  const prevStep = () => {
    setAnimationClass('animate-slideOutRight');
    setTimeout(() => {
      setStep(prev => prev - 1);
      setAnimationClass('animate-slideInLeft');
    }, 300);
  };

  const handleCalculate = () => {
    calculateCost();
    setAnimationClass('animate-slideOutLeft');
    setTimeout(() => {
      setStep(6);
      setAnimationClass('animate-fadeIn');
    }, 300);
  };

  const resetCalculator = () => {
    setStep(1);
    setCalculatorData({
      apartmentType: '',
      renovationType: '',
      area: '',
      rooms: '',
      timeline: '',
      additionalServices: []
    });
    setCalculatedCost(null);
    setAnimationClass('animate-fadeIn');
  };

  const openConsultation = () => {
    setIsConsultationOpen(true);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-purple-300/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Калькулятор стоимости ремонта</h2>
                  <p className="text-sm sm:text-base text-blue-100">Рассчитайте примерную стоимость вашего проекта за 2 минуты</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                >
                  <i className="ri-close-line text-xl sm:text-2xl"></i>
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 sm:mt-6 relative">
                <div className="flex justify-between text-xs sm:text-sm mb-2">
                  <span>Шаг {step} из 6</span>
                  <span>{Math.round((step / 6) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(step / 6) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-24 sm:pb-6">
              <div className={`transition-all duration-300 ${animationClass}`}>
                
                {/* Step 1: Apartment Type */}
                {step === 1 && (
                  <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-home-4-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Тип помещения</h3>
                      <p className="text-sm sm:text-base text-gray-600">Выберите тип вашего помещения</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                      {apartmentTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => handleInputChange('apartmentType', type.value)}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            calculatorData.apartmentType === type.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          <div className="font-semibold text-sm sm:text-base">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Renovation Type */}
                {step === 2 && (
                  <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-tools-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Тип ремонта</h3>
                      <p className="text-sm sm:text-base text-gray-600">Какой вид ремонта вам нужен?</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                      {renovationTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => handleInputChange('renovationType', type.value)}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            calculatorData.renovationType === type.value
                              ? 'border-green-500 bg-green-50 text-green-700 shadow-lg'
                              : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                          }`}
                        >
                          <div className="font-semibold text-sm sm:text-base">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Area */}
                {step === 3 && (
                  <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-ruler-2-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Площадь помещения</h3>
                      <p className="text-sm sm:text-base text-gray-600">Укажите общую площадь в квадратных метрах</p>
                    </div>
                    
                    <div className="max-w-md mx-auto">
                      <div className="relative">
                        <input
                          type="number"
                          value={calculatorData.area}
                          onChange={(e) => handleInputChange('area', e.target.value)}
                          placeholder="Введите площадь"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 text-xl sm:text-2xl text-center border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                          min="1"
                          max="1000"
                        />
                        <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg sm:text-xl">
                          м²
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mt-4 sm:mt-6">
                        {[30, 50, 70, 90, 120, 150].map((area) => (
                          <button
                            key={area}
                            onClick={() => handleInputChange('area', area.toString())}
                            className="py-2 px-3 sm:px-4 bg-gray-100 hover:bg-purple-100 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                          >
                            {area} м²
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline */}
                {step === 4 && (
                  <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-calendar-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Сроки выполнения</h3>
                      <p className="text-sm sm:text-base text-gray-600">Когда вы планируете завершить ремонт?</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                      {timelineMultipliers.map((timeline) => (
                        <button
                          key={timeline.value}
                          onClick={() => handleInputChange('timeline', timeline.value)}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            calculatorData.timeline === timeline.value
                              ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-lg'
                              : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                          }`}
                        >
                          <div className="font-semibold text-sm sm:text-base">{timeline.value}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Additional Services */}
                {step === 5 && (
                  <div className="text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <i className="ri-add-circle-line text-2xl sm:text-3xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Дополнительные услуги</h3>
                      <p className="text-sm sm:text-base text-gray-600">Выберите дополнительные услуги (необязательно)</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
                      {additionalServices.map((service) => (
                        <button
                          key={service.value}
                          onClick={() => {
                            const currentServices = calculatorData.additionalServices;
                            const newServices = currentServices.includes(service.value)
                              ? currentServices.filter(s => s !== service.value)
                              : [...currentServices, service.value];
                            handleInputChange('additionalServices', newServices);
                          }}
                          className={`p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                            calculatorData.additionalServices.includes(service.value)
                              ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-lg'
                              : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-sm sm:text-base">{service.label}</div>
                            {calculatorData.additionalServices.includes(service.value) && (
                              <i className="ri-check-line text-teal-600"></i>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                
                {/* Step 6: Results */}
                {step === 6 && calculatedCost && (
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                        <i className="ri-money-dollar-circle-line text-xl sm:text-2xl text-white"></i>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Расчет готов!</h3>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4 sm:p-6 max-w-md mx-auto mb-3 sm:mb-4">
                        <div className="text-xs sm:text-sm text-gray-600 mb-2">Примерная стоимость ремонта:</div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                          {calculatedCost.toLocaleString()} ₽
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {calculatorData.area && `≈ ${Math.round(calculatedCost / parseInt(calculatorData.area)).toLocaleString()} ₽/м²`}
                        </div>
                      </div>

                      {/* Warning about accuracy */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 max-w-lg mx-auto">
                        <div className="flex items-center justify-center mb-2">
                          <i className="ri-information-line text-yellow-600 mr-2"></i>
                          <span className="font-semibold text-yellow-800 text-xs sm:text-sm">Важная информация</span>
                        </div>
                        <p className="text-xs sm:text-sm text-yellow-700">
                          Данные результаты не являются точными. Для точного расчета стоимости необходим осмотр объекта нашими специалистами.
                        </p>
                      </div>

                      {/* Contact Button */}
                      <div className="mb-3 sm:mb-4">
                        <button
                          onClick={() => window.open('https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»', '_blank')}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer text-sm sm:text-base"
                        >
                          <i className="ri-whatsapp-line mr-2"></i>
                          Связаться с нами
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 text-left w-full">
                      <h4 className="font-semibold text-gray-800 mb-3 text-center text-sm sm:text-base lg:text-lg">Ваш выбор:</h4>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                        <div className="bg-white rounded-lg p-2 border border-blue-100">
                          <div className="text-xs text-gray-500 mb-1">Тип помещения</div>
                          <div className="font-semibold text-gray-800 text-xs leading-tight">{calculatorData.apartmentType}</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-blue-100">
                          <div className="text-xs text-gray-500 mb-1">Тип ремонта</div>
                          <div className="font-semibold text-gray-800 text-xs leading-tight">{calculatorData.renovationType}</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-blue-100">
                          <div className="text-xs text-gray-500 mb-1">Площадь</div>
                          <div className="font-semibold text-gray-800 text-xs">{calculatorData.area} м²</div>
                        </div>
                        <div className="bg-white rounded-lg p-2 border border-blue-100">
                          <div className="text-xs text-gray-500 mb-1">Сроки</div>
                          <div className="font-semibold text-gray-800 text-xs leading-tight break-words">{calculatorData.timeline}</div>
                        </div>
                      </div>

                      {calculatorData.additionalServices.length > 0 && (
                        <div className="pt-3 border-t border-blue-200">
                          <h5 className="text-gray-700 font-semibold mb-3 text-center text-xs sm:text-sm">Дополнительные услуги:</h5>
                          
                          <div className="space-y-2 mb-3">
                            {calculatorData.additionalServices.map(serviceValue => {
                              const service = additionalServices.find(s => s.value === serviceValue);
                              return (
                                <div key={serviceValue} className="bg-white rounded-lg p-2 border border-blue-100 shadow-sm">
                                  <div className="flex justify-between items-center">
                                    <div className="font-medium text-gray-800 text-xs leading-tight flex-1 mr-2">
                                      {service?.label}
                                    </div>
                                    <div className="text-green-600 font-semibold text-xs whitespace-nowrap">
                                      {service?.price.toLocaleString()} ₽
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-700 font-semibold text-xs">Итого доп. услуги:</span>
                              <span className="text-green-600 font-bold text-xs sm:text-sm">
                                {calculatorData.additionalServices.reduce((total, serviceValue) => {
                                  const service = additionalServices.find(s => s.value === serviceValue);
                                  return total + (service ? service.price : 0);
                                }, 0).toLocaleString()} ₽
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 max-w-md mx-auto mt-3">
                      * Расчет является предварительным. Точная стоимость определяется после осмотра объекта.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              {step < 6 && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4 flex justify-between sm:relative sm:border-0 sm:mt-8 z-[60]">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`text-sm sm:text-base ${step === 1 ? 'invisible' : ''}`}
                  >
                    <i className="ri-arrow-left-line mr-1 sm:mr-2"></i>
                    Назад
                  </Button>

                  {step === 5 ? (
                    <Button
                      onClick={handleCalculate}
                      disabled={!calculatorData.apartmentType || !calculatorData.renovationType || !calculatorData.area || !calculatorData.timeline}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-7
                        hover:to-emerald-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      Рассчитать
                      <i className="ri-calculator-line ml-1 sm:ml-2"></i>
                    </Button>
                  ) : (
                    <Button
                      onClick={nextStep}
                      disabled={
                        (step === 1 && !calculatorData.apartmentType) ||
                        (step === 2 && !calculatorData.renovationType) ||
                        (step === 3 && !calculatorData.area) ||
                        (step === 4 && !calculatorData.timeline)
                      }
                      className="text-sm sm:text-base"
                    >
                      Далее
                      <i className="ri-arrow-right-line ml-1 sm:ml-2"></i>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
