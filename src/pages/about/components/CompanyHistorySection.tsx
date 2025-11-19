
import React, { useState } from 'react';

export default function CompanyHistorySection() {
  const [historyImage, setHistoryImage] = useState('https://readdy.ai/api/search-image?query=Construction%20company%20evolution%20timeline%2C%20modern%20office%20building%20development%2C%20architectural%20progress%2C%20professional%20construction%20workers%2C%20building%20site%20transformation%2C%20corporate%20growth%20story&width=600&height=400&seq=company-history&orientation=landscape');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setHistoryImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const milestones = [
    {
      year: '2008',
      title: 'Основание компании',
      description: 'Начало деятельности с небольшой команды из 5 специалистов'
    },
    {
      year: '2012',
      title: 'Первые крупные проекты',
      description: 'Реализация жилых комплексов и коммерческих объектов'
    },
    {
      year: '2016',
      title: 'Расширение услуг',
      description: 'Добавление дизайнерских и инженерных решений'
    },
    {
      year: '2020',
      title: 'Цифровая трансформация',
      description: 'Внедрение BIM-технологий и современных методов управления'
    },
    {
      year: '2023',
      title: 'Лидер рынка',
      description: 'Признание как одной из ведущих строительных компаний региона'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            История компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Путь от небольшой строительной бригады до ведущей компании в сфере строительства и ремонта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative group">
              <img 
                src={historyImage}
                alt="История компании"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Image Change Button */}
              <label className="absolute top-4 right-4 cursor-pointer bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center space-x-2 opacity-0 group-hover:opacity-100">
                <i className="ri-image-line text-sm"></i>
                <span className="text-sm">Изменить</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}