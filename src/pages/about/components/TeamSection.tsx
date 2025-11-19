
import React, { useRef, useState, useEffect } from 'react';
import MediaEditor from '../../../components/base/MediaEditor';

const teamMembers = [
  {
    name: 'Александр Петров',
    position: 'Руководитель проектов',
    experience: '12 лет опыта',
    description: 'Специализируется на управлении крупными ремонтными проектами',
    image: 'https://readdy.ai/api/search-image?query=Professional%20construction%20project%20manager%20in%20business%20suit%2C%20confident%20middle-aged%20man%2C%20construction%20site%20background%2C%20leadership%20qualities%2C%20experienced%20specialist&width=300&height=400&seq=team-1&orientation=portrait'
  },
  {
    name: 'Михаил Сидоров',
    position: 'Технический директор',
    experience: '12 лет опыта',
    description: 'Инженер-строитель, специалист по инновационным технологиям',
    image: 'https://readdy.ai/api/search-image?query=Construction%20technical%20director%2C%20professional%20engineer%20with%20hard%20hat%2C%20construction%20site%20background%2C%20technical%20expertise%2C%20project%20manager%20portrait&width=400&height=400&seq=team-cto&orientation=squarish'
  },
  {
    name: 'Елена Козлова',
    position: 'Главный дизайнер',
    experience: '10 лет опыта',
    description: 'Архитектор-дизайнер, создатель уникальных интерьерных решений',
    image: 'https://readdy.ai/api/search-image?query=Interior%20designer%20professional%2C%20creative%20architect%20with%20blueprints%2C%20modern%20office%20workspace%2C%20design%20studio%20background%2C%20artistic%20professional&width=400&height=400&seq=team-designer&orientation=squarish'
  },
  {
    name: 'Анна Волкова',
    position: 'Менеджер проектов',
    experience: '8 лет опыта',
    description: 'Координатор проектов, эксперт по управлению строительными процессами',
    image: 'https://readdy.ai/api/search-image?query=Construction%20project%20manager%2C%20professional%20woman%20in%20business%20attire%2C%20construction%20helmet%2C%20building%20site%20background%2C%20leadership%20portrait&width=400&height=400&seq=team-manager&orientation=squarish'
  },
  {
    name: 'Дмитрий Новиков',
    position: 'Инженер-конструктор',
    experience: '9 лет опыта',
    description: 'Специалист по расчетам и проектированию строительных конструкций',
    image: 'https://readdy.ai/api/search-image?query=Structural%20engineer%20with%20blueprints%2C%20professional%20construction%20specialist%2C%20engineering%20calculations%2C%20technical%20expertise%2C%20construction%20site%20background&width=400&height=400&seq=team-engineer&orientation=squarish'
  },
  {
    name: 'Ольга Смирнова',
    position: 'Архитектор',
    experience: '11 лет опыта',
    description: 'Создатель архитектурных решений и планировочных концепций',
    image: 'https://readdy.ai/api/search-image?query=Professional%20architect%20with%20architectural%20drawings%2C%20creative%20designer%2C%20modern%20office%20workspace%2C%20architectural%20plans%2C%20professional%20portrait&width=400&height=400&seq=team-architect&orientation=squarish'
  }
];

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320; // Ширина карточки + отступ
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320;
    const newIndex = Math.round(scrollContainerRef.current.scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы с многолетним опытом, которые воплощают ваши мечты в реальность
          </p>
        </div>

        {/* Десктопная версия - сетка */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 h-64 rounded-xl overflow-hidden shadow-lg">
                <MediaEditor
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full"
                />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {member.experience}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Мобильная версия - горизонтальная прокрутка */}
        <div className="lg:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: 'x mandatory' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-80 text-center group"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative mb-6 h-64 rounded-xl overflow-hidden shadow-lg">
                  <MediaEditor
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {member.position}
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      {member.experience}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Индикаторы точек */}
          <div className="flex justify-center mt-8 gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Навигационные стрелки */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(teamMembers.length - 1, currentIndex + 1))}
              disabled={currentIndex === teamMembers.length - 1}
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="ri-arrow-right-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
