
import React, { useState, useEffect } from 'react';
import Button from '../base/Button';
import { sanitizeInput, validateEmail, validatePhone, isValidInput } from '../../utils/security';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappLink: string;
}

export default function ConsultationModal({ isOpen, onClose, whatsappLink }: ConsultationModalProps) {
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
  const [errorMessage, setErrorMessage] = useState('');
  
  // Защита от ботов
  const [honeypot, setHoneypot] = useState('');
  const [formStartTime] = useState(Date.now());
  const [csrfToken] = useState(() => Math.random().toString(36).substring(2));
  
  // Rate limiting
  const [submitAttempts, setSubmitAttempts] = useState<number[]>([]);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(0);

  // Hide/show AI assistant button based on modal state
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

  useEffect(() => {
    if (isBlocked && blockTimeRemaining > 0) {
      const timer = setInterval(() => {
        setBlockTimeRemaining(prev => {
          if (prev <= 1) {
            setIsBlocked(false);
            setSubmitAttempts([]);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isBlocked, blockTimeRemaining]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Валидация и санитизация
    let sanitizedValue = value;
    
    if (name === 'name') {
      sanitizedValue = sanitizeInput(value).slice(0, 50);
    } else if (name === 'message') {
      sanitizedValue = sanitizeInput(value).slice(0, 500);
    } else if (name === 'email' || name === 'phone') {
      sanitizedValue = value; // Не санитизируем email и телефон, только валидируем при отправке
    } else {
      sanitizedValue = sanitizeInput(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверка honeypot
    if (honeypot) {
      console.warn('Bot detected');
      return;
    }
    
    // Проверка времени заполнения формы
    const fillTime = Date.now() - formStartTime;
    if (fillTime < 3000) {
      setErrorMessage('Пожалуйста, заполните форму внимательно');
      setSubmitStatus('error');
      return;
    }
    
    // Rate limiting
    const now = Date.now();
    const recentAttempts = submitAttempts.filter(time => now - time < 60000);
    
    if (recentAttempts.length >= 3) {
      setIsBlocked(true);
      setBlockTimeRemaining(60);
      setErrorMessage('Слишком много попыток. Попробуйте через минуту.');
      setSubmitStatus('error');
      return;
    }
    
    setSubmitAttempts([...recentAttempts, now]);
    
    // Валидация данных
    if (!isValidInput(formData.name) || formData.name.length < 2) {
      setErrorMessage('Пожалуйста, введите корректное имя');
      setSubmitStatus('error');
      return;
    }
    
    if (!validatePhone(formData.phone)) {
      setErrorMessage('Пожалуйста, введите корректный номер телефона');
      setSubmitStatus('error');
      return;
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      setErrorMessage('Пожалуйста, введите корректный email');
      setSubmitStatus('error');
      return;
    }
    
    if (formData.message && !isValidInput(formData.message)) {
      setErrorMessage('Сообщение содержит недопустимые символы');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      
      // Добавляем метаданные безопасности
      formDataToSend.append('_csrf', csrfToken);
      formDataToSend.append('_timestamp', Date.now().toString());
      formDataToSend.append('_formId', 'consultation-form');

      const response = await fetch('https://readdy.ai/api/form/d3ii7odsoafcrsrcq4u0', {
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
        setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Получить консультацию</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Заполните форму, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="consultation-form">
                {/* Honeypot field - скрытое поле для защиты от ботов */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="apartmentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Тип помещения *
                    </label>
                    <div className="relative">
                      <select
                        id="apartmentType"
                        name="apartmentType"
                        value={formData.apartmentType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
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
                    <label htmlFor="renovationType" className="block text-sm font-medium text-gray-700 mb-2">
                      Тип ремонта *
                    </label>
                    <div className="relative">
                      <select
                        id="renovationType"
                        name="renovationType"
                        value={formData.renovationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Бюджет
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
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
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Сроки выполнения *
                    </label>
                    <div className="relative">
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
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

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Расскажите подробнее о ваших пожеланиях, особенностях объекта или задайте вопросы..."
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-500 mr-2"></i>
                      <span className="text-green-700">Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-500 mr-2"></i>
                      <span className="text-red-700">{errorMessage || 'Произошла ошибка при отправке. Попробуйте еще раз.'}</span>
                    </div>
                  </div>
                )}

                {isBlocked && (
                  <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-time-line text-yellow-600 mr-2"></i>
                      <span className="text-yellow-700">
                        Слишком много попыток. Попробуйте через {blockTimeRemaining} сек.
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || isBlocked}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
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

              <p className="text-xs text-gray-500 mt-4 text-center">
                Нажимая "Отправить заявку", вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
