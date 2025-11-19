
// Утилиты безопасности для защиты форм и данных

// Защита от XSS - санитизация пользовательского ввода
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

// Валидация email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

// Валидация телефона (российский формат)
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/;
  return phoneRegex.test(phone);
};

// Проверка на валидность ввода (отсутствие опасных символов)
export const isValidInput = (input: string): boolean => {
  return !containsScript(input) && !containsSQLInjection(input);
};

// Rate limiting - ограничение частоты отправки форм
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number = 3;
  private readonly timeWindow: number = 60000; // 1 минута

  canSubmit(formId: string): boolean {
    const now = Date.now();
    const formAttempts = this.attempts.get(formId) || [];
    
    // Удаляем старые попытки
    const recentAttempts = formAttempts.filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(formId, recentAttempts);
    return true;
  }

  getRemainingTime(formId: string): number {
    const now = Date.now();
    const formAttempts = this.attempts.get(formId) || [];
    const recentAttempts = formAttempts.filter(
      timestamp => now - timestamp < this.timeWindow
    );
    
    if (recentAttempts.length < this.maxAttempts) {
      return 0;
    }
    
    const oldestAttempt = Math.min(...recentAttempts);
    return Math.ceil((this.timeWindow - (now - oldestAttempt)) / 1000);
  }
}

export const rateLimiter = new RateLimiter();

// Защита от ботов - honeypot
export const createHoneypot = (): HTMLInputElement => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website';
  honeypot.style.position = 'absolute';
  honeypot.style.left = '-9999px';
  honeypot.style.width = '1px';
  honeypot.style.height = '1px';
  honeypot.tabIndex = -1;
  honeypot.setAttribute('autocomplete', 'off');
  return honeypot;
};

// Проверка honeypot
export const isHoneypotFilled = (formElement: HTMLFormElement): boolean => {
  const honeypot = formElement.querySelector('input[name="website"]') as HTMLInputElement;
  return honeypot ? honeypot.value !== '' : false;
};

// Валидация длины текста
export const isValidLength = (text: string, min: number, max: number): boolean => {
  const length = text.trim().length;
  return length >= min && length <= max;
};

// Защита от SQL инъекций в текстовых полях
export const containsSQLInjection = (input: string): boolean => {
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/i,
    /(--|\*|;|'|"|\||&)/,
    /(\bOR\b|\bAND\b).*=.*=/i
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
};

// Защита от скриптов в текстовых полях
export const containsScript = (input: string): boolean => {
  const scriptPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi
  ];
  
  return scriptPatterns.some(pattern => pattern.test(input));
};

// Комплексная валидация формы
export const validateFormData = (data: Record<string, string>): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  // Проверка имени
  if (data.name) {
    if (!isValidLength(data.name, 2, 50)) {
      errors.name = 'Имя должно содержать от 2 до 50 символов';
    }
    if (containsScript(data.name) || containsSQLInjection(data.name)) {
      errors.name = 'Недопустимые символы в имени';
    }
  }

  // Проверка email
  if (data.email && data.email.trim() !== '') {
    if (!isValidEmail(data.email)) {
      errors.email = 'Некорректный email адрес';
    }
  }

  // Проверка телефона
  if (data.phone) {
    if (!isValidPhone(data.phone)) {
      errors.phone = 'Некорректный номер телефона';
    }
  }

  // Проверка сообщения
  if (data.message && data.message.trim() !== '') {
    if (!isValidLength(data.message, 0, 500)) {
      errors.message = 'Сообщение не должно превышать 500 символов';
    }
    if (containsScript(data.message) || containsSQLInjection(data.message)) {
      errors.message = 'Недопустимые символы в сообщении';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Генерация уникального ID для формы
export const generateFormId = (formName: string): string => {
  return `${formName}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Защита от CSRF - генерация токена
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
};

// Проверка времени заполнения формы (защита от ботов)
export const isFormFilledTooQuickly = (startTime: number, minTime: number = 3000): boolean => {
  return Date.now() - startTime < minTime;
};
