
import React from 'react';
import MediaEditor from '../../../components/base/MediaEditor';

export default function AboutHeroSection() {
  const heroImage = 'https://readdy.ai/api/search-image?query=Professional%20construction%20company%20team%20working%20together%20on%20renovation%20project%2C%20modern%20office%20environment%2C%20experienced%20specialists%2C%20quality%20building%20materials%2C%20collaborative%20work%20atmosphere&width=800&height=600&seq=about-hero&orientation=landscape';

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="О компании ГлобалГранд"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Text Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  О компании
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ГлобалГранд
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
                  Более 15 лет создаем качественные строительные решения,
                  объединяя традиционные методы с инновационными технологиями
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <i className="ri-calendar-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">15+ лет</h3>
                    <p className="text-gray-300">опыта в строительной индустрии</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <i className="ri-building-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">500+</h3>
                    <p className="text-gray-300">успешно завершенных проектов</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <i className="ri-team-line text-2xl text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">50+</h3>
                    <p className="text-gray-300">профессиональных специалистов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <MediaEditor
                src={heroImage}
                alt="О компании ГлобалГранд"
                className="w-full h-full"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
