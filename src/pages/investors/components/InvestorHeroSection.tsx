
import React from 'react';
import Button from '../../../components/base/Button';

export default function InvestorHeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20construction%20site%20with%20glass%20skyscrapers%20under%20construction%2C%20golden%20hour%20lighting%2C%20professional%20business%20atmosphere%2C%20investment%20and%20development%20concept%2C%20architectural%20blueprints%20and%20financial%20charts%20floating%20in%20the%20air%2C%20sophisticated%20urban%20landscape%20with%20cranes%20and%20modern%20buildings%2C%20warm%20golden%20and%20blue%20tones%2C%20premium%20business%20aesthetic&width=1920&height=1080&seq=investor-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400/20 rounded-full blur-lg animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium border border-yellow-400/30">
                💰 Инвестиционные возможности
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Инвестируйте в 
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                будущее строительства
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Присоединяйтесь к лидеру рынка ремонта и строительства в Москве и МО. 
              Стабильная прибыль, растущий рынок, проверенная бизнес-модель.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold whitespace-nowrap">
                <i className="ri-line-chart-line mr-2"></i>
                Изучить возможности
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 whitespace-nowrap"
              >
                <i className="ri-download-line mr-2"></i>
                Скачать презентацию
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">150%</div>
                <div className="text-sm text-blue-200">ROI за 2 года</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-sm text-blue-200">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">₽50М</div>
                <div className="text-sm text-blue-200">Оборот в год</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <i className="ri-star-fill text-white text-sm"></i>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Быстрые факты</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-blue-200">Минимальная инвестиция</span>
                  <span className="text-white font-semibold">₽1,000,000</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-blue-200">Срок окупаемости</span>
                  <span className="text-white font-semibold">18 месяцев</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-blue-200">Годовая прибыль</span>
                  <span className="text-white font-semibold">25-40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-blue-200">Гарантии</span>
                  <span className="text-white font-semibold">Полные</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
