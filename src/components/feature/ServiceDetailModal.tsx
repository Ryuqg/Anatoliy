
import React, { useState, useEffect } from 'react';
import Button from '../base/Button';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  features: string[];
  duration: string;
  priceRange: string;
  stages: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceDetailModal({ isOpen, onClose, service }: ServiceDetailModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    apartmentType: '',
    renovationType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('service', service?.title || '');
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3puap7h7jpft2d6idr0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          apartmentType: '',
          renovationType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»', '_blank');
  };

  useEffect(() => {
    if (isOpen) {
      // Скрыть ИИ-помощника при открытии модального окна
      const agentButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
      if (agentButton) {
        agentButton.style.display = 'none';
      }
    } else {
      // Показать ИИ-помощника при закрытии модального окна
      const agentButton = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
      if (agentButton) {
        agentButton.style.display = '';
      }
    }
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-t-3xl overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80"></div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-3 sm:mb-4">
                  <i className={`${service.icon} text-3xl sm:text-4xl`}></i>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{service.title}</h2>
                <p className="text-base sm:text-xl opacity-90">{service.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column - Service Details */}
            <div className="space-y-6 lg:space-y-8">
              {/* Detailed Description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <i className="ri-information-line text-blue-600 mr-2 sm:mr-3"></i>
                  Подробное описание
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <i className="ri-check-double-line text-green-600 mr-2 sm:mr-3"></i>
                  Что включено
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-green-100 rounded-full mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                        <i className="ri-check-line text-green-600 text-xs sm:text-sm"></i>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stages */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <i className="ri-roadmap-line text-purple-600 mr-2 sm:mr-3"></i>
                  Этапы выполнения
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {service.stages.map((stage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-purple-100 rounded-full mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-purple-600 font-semibold text-xs sm:text-sm">{index + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and Duration */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-blue-50 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <i className="ri-time-line text-blue-600 mr-2 text-sm sm:text-base"></i>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Сроки</span>
                  </div>
                  <p className="text-blue-700 font-bold text-sm sm:text-base">{service.duration}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <i className="ri-money-ruble-circle-line text-green-600 mr-2 text-sm sm:text-base"></i>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Стоимость</span>
                  </div>
                  <p className="text-green-700 font-bold text-sm sm:text-base">{service.priceRange}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                <i className="ri-message-3-line text-blue-600 mr-2 sm:mr-3"></i>
                Получить консультацию
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Заполните форму, и мы свяжемся с вами в течение 15 минут
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" data-readdy-form id="service-consultation-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="apartmentType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Тип помещения *
                    </label>
                    <div className="relative">
                      <select
                        id="apartmentType"
                        name="apartmentType"
                        value={formData.apartmentType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm appearance-none"
                      >
                        <option value="">Выберите тип</option>
                        <option value="1-комнатная">1-комнатная квартира</option>
                        <option value="2-комнатная">2-комнатная квартира</option>
                        <option value="3-комнатная">3-комнатная квартира</option>
                        <option value="4+ комнатная">4+ комнатная квартира</option>
                        <option value="Студия">Студия</option>
                        <option value="Дом">Частный дом</option>
                        <option value="Офис">Офис</option>
                        <option value="Другое">Другое</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="renovationType" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Тип ремонта *
                    </label>
                    <div className="relative">
                      <select
                        id="renovationType"
                        name="renovationType"
                        value={formData.renovationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm appearance-none"
                      >
                        <option value="">Выберите тип</option>
                        <option value="Косметический">Косметический ремонт</option>
                        <option value="Черновая отделка">Черновая отделка</option>
                        <option value="Полный под ключ">Полный ремонт под ключ</option>
                        <option value="Дизайнерская отделка">Дизайнерская отделка</option>
                        <option value="Частичный">Частичный ремонт</option>
                        <option value="Не определился">Еще не определился</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Бюджет
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm appearance-none"
                      >
                        <option value="">Выберите бюджет</option>
                        <option value="До 300 000">До 300 000 ₽</option>
                        <option value="300 000 - 500 000">300 000 - 500 000 ₽</option>
                        <option value="500 000 - 1 000 000">500 000 - 1 000 000 ₽</option>
                        <option value="1 000 000 - 2 000 000">1 000 000 - 2 000 000 ₽</option>
                        <option value="Свыше 2 000 000">Свыше 2 000 000 ₽</option>
                        <option value="Обсудим индивидуально">Обсудим индивидуально</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Сроки выполнения *
                    </label>
                    <div className="relative">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm appearance-none"
                      >
                        <option value="">Выберите сроки</option>
                        <option value="Срочно (до 2 недель)">Срочно (до 2 недель)</option>
                        <option value="1 месяц">1 месяц</option>
                        <option value="2-3 месяца">2-3 месяца</option>
                        <option value="3-6 месяцев">3-6 месяцев</option>
                        <option value="Более 6 месяцев">Более 6 месяцев</option>
                        <option value="Не критично">Не критично</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Дополнительная информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm resize-none"
                    placeholder="Расскажите подробнее о ваших пожеланиях, особенностях объекта или задайте вопросы..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-500 mr-2"></i>
                      <span className="text-green-700 text-xs sm:text-sm">Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-500 mr-2"></i>
                      <span className="text-red-700 text-xs sm:text-sm">Произошла ошибка при отправке. Попробуйте еще раз.</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Отправка...
                      </div>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        Отправить заявку
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
                Нажимая "Отправить заявку", вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
