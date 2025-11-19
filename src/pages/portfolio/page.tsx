
import React, { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';
import MediaEditor from '../../components/base/MediaEditor';

const categories = ['Все работы', 'Квартиры', 'Коммерческие', 'Дома', 'Дизайнерские'];

const initialPortfolioItems = [
  {
    id: 1,
    title: 'Современная квартира в ЖК "Лефортово"',
    category: 'Квартиры',
    area: '85 м²',
    duration: '2 месяца',
    type: 'Полный ремонт под ключ',
    image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20apartment%20interior%20with%20contemporary%20kitchen%2C%20stylish%20living%20room%2C%20elegant%20dining%20area%2C%20white%20and%20gray%20color%20scheme%2C%20professional%20interior%20design%2C%20high-end%20renovation&width=600&height=400&seq=portfolio-1&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=Old%20apartment%20interior%20before%20renovation%20with%20outdated%20wallpaper%2C%20old%20flooring%2C%20worn%20furniture%2C%20typical%20soviet-era%20apartment%20layout%2C%20renovation%20needed&width=300&height=200&seq=before-1&orientation=landscape',
    detailedDescription: 'Полная трансформация двухкомнатной квартиры в современное жилое пространство. Снесли перегородки, создали открытую планировку кухни-гостиной. Установили теплые полы, натяжные потолки с LED-подсветкой.',
    challenges: 'Основной вызов - несущие стены, которые нельзя было сносить. Решили проблему с помощью арочных проемов.',
    materials: 'Керамогранит Kerama Marazzi, краска Benjamin Moore, мебель IKEA с доработкой',
    clientFeedback: 'Превзошли все ожидания! Квартира стала в два раза просторнее визуально.',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Modern%20kitchen%20with%20white%20cabinets%2C%20quartz%20countertops%2C%20stainless%20steel%20appliances%2C%20pendant%20lighting%2C%20contemporary%20design&width=400&height=300&seq=kitchen-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Modern%20bedroom%20with%20minimalist%20design%2C%20built-in%20wardrobes%2C%20soft%20lighting%2C%20neutral%20colors&width=400&height=300&seq=bedroom-1&orientation=landscape'
    ]
  },
  {
    id: 2,
    title: 'Офис IT-компании',
    category: 'Коммерческие',
    area: '200 м²',
    duration: '3 недели',
    type: 'Коммерческий ремонт',
    image: 'https://readdy.ai/api/search-image?query=Modern%20office%20interior%20design%20with%20open%20workspace%2C%20glass%20meeting%20rooms%2C%20contemporary%20furniture%2C%20professional%20lighting%2C%20tech%20company%20office%20environment&width=600&height=400&seq=portfolio-2&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=Empty%20office%20space%20before%20renovation%20with%20bare%20walls%2C%20concrete%20floor%2C%20unfinished%20commercial%20interior%2C%20construction%20preparation%20stage&width=300&height=200&seq=before-2&orientation=landscape',
    detailedDescription: 'Создание современного офисного пространства для IT-стартапа. Зонирование open-space, переговорные из стекла, зона отдыха с игровой консолью.',
    challenges: 'Сжатые сроки - всего 3 недели до въезда сотрудников. Работали в две смены.',
    materials: 'Ламинат Quick-Step, стеклянные перегородки Optima, мебель Herman Miller',
    clientFeedback: 'Офис стал магнитом для талантов. Кандидаты впечатляются уже на собеседовании!',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Modern%20office%20meeting%20room%20with%20glass%20walls%2C%20conference%20table%2C%20video%20conferencing%20equipment&width=400&height=300&seq=meeting-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Office%20break%20room%20with%20modern%20furniture%2C%20coffee%20station%2C%20recreational%20area&width=400&height=300&seq=break-1&orientation=landscape'
    ]
  },
  {
    id: 3,
    title: 'Частный дом в Подмосковье',
    category: 'Дома',
    area: '150 м²',
    duration: '4 месяца',
    type: 'Строительство под ключ',
    image: 'https://readdy.ai/api/search-image?query=Modern%20private%20house%20interior%20with%20spacious%20living%20room%2C%20fireplace%2C%20wooden%20elements%2C%20large%20windows%2C%20contemporary%20residential%20design%2C%20luxury%20home%20interior&width=600&height=400&seq=portfolio-3&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=House%20construction%20site%20with%20foundation%2C%20building%20frame%2C%20construction%20materials%2C%20work%20in%20progress%2C%20residential%20building%20construction&width=300&height=200&seq=before-3&orientation=landscape',
    detailedDescription: 'Строительство дома мечты для молодой семьи. Экологичные материалы, умный дом, панорамные окна с видом на лес.',
    challenges: 'Сложный рельеф участка потребовал индивидуального фундамента и дренажной системы.',
    materials: 'Клееный брус, трехкамерные стеклопакеты, система "умный дом" Xiaomi',
    clientFeedback: 'Это не просто дом, это произведение искусства! Каждая деталь продумана.',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20with%20large%20windows%2C%20wooden%20facade%2C%20contemporary%20architecture&width=400&height=300&seq=exterior-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Modern%20bathroom%20with%20freestanding%20bathtub%2C%20natural%20stone%2C%20large%20windows&width=400&height=300&seq=bathroom-1&orientation=landscape'
    ]
  },
  {
    id: 4,
    title: 'Дизайнерская квартира в центре',
    category: 'Дизайнерские',
    area: '120 м²',
    duration: '3 месяца',
    type: 'Премиум ремонт',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20designer%20apartment%20with%20premium%20materials%2C%20marble%20surfaces%2C%20custom%20furniture%2C%20sophisticated%20lighting%2C%20exclusive%20interior%20design%2C%20high-end%20finishes&width=600&height=400&seq=portfolio-4&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=Apartment%20demolition%20stage%20with%20removed%20walls%2C%20construction%20debris%2C%20renovation%20preparation%2C%20old%20interior%20being%20removed&width=300&height=200&seq=before-4&orientation=landscape',
    detailedDescription: 'Эксклюзивный дизайн-проект для коллекционера искусства. Каждая комната - отдельная галерея с подсветкой картин.',
    challenges: 'Интеграция системы климат-контроля для сохранности произведений искусства.',
    materials: 'Мрамор Calacatta, паркет из венге, итальянская мебель на заказ',
    clientFeedback: 'Квартира стала достойной оправой для моей коллекции. Друзья не узнают пространство!',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Luxury%20living%20room%20with%20marble%20walls%2C%20designer%20furniture%2C%20art%20gallery%20lighting&width=400&height=300&seq=luxury-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Designer%20dining%20room%20with%20custom%20furniture%2C%20artistic%20lighting%2C%20premium%20finishes&width=400&height=300&seq=dining-1&orientation=landscape'
    ]
  },
  {
    id: 5,
    title: 'Ресторан быстрого питания',
    category: 'Коммерческие',
    area: '80 м²',
    duration: '2 недели',
    type: 'Коммерческий ремонт',
    image: 'https://readdy.ai/api/search-image?query=Modern%20fast%20food%20restaurant%20interior%20with%20contemporary%20design%2C%20comfortable%20seating%2C%20professional%20kitchen%20equipment%2C%20bright%20commercial%20space&width=600&height=400&seq=portfolio-5&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=Empty%20retail%20space%20before%20restaurant%20renovation%20with%20bare%20walls%2C%20unfinished%20floor%2C%20commercial%20space%20preparation&width=300&height=200&seq=before-5&orientation=landscape',
    detailedDescription: 'Трансформация торгового помещения в уютный ресторан быстрого питания. Яркий дизайн, удобная планировка, профессиональная кухня.',
    challenges: 'Монтаж вентиляции и согласование с СЭС в рекордные сроки.',
    materials: 'Керамогранит с противоскользящим покрытием, нержавеющая сталь, LED-освещение',
    clientFeedback: 'Посетители отмечают атмосферу! Продажи выросли на 40% после ремонта.',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Restaurant%20kitchen%20with%20professional%20equipment%2C%20stainless%20steel%20surfaces%2C%20modern%20ventilation&width=400&height=300&seq=kitchen-2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Restaurant%20seating%20area%20with%20modern%20furniture%2C%20bright%20lighting%2C%20comfortable%20atmosphere&width=400&height=300&seq=seating-1&orientation=landscape'
    ]
  },
  {
    id: 6,
    title: 'Трехкомнатная квартира в новостройке',
    category: 'Квартиры',
    area: '95 м²',
    duration: '2.5 месяца',
    type: 'Ремонт под ключ',
    image: 'https://readdy.ai/api/search-image?query=Modern%20three-room%20apartment%20with%20scandinavian%20design%2C%20light%20colors%2C%20contemporary%20furniture%2C%20spacious%20rooms%2C%20professional%20renovation%20quality&width=600&height=400&seq=portfolio-6&orientation=landscape',
    beforeImage: 'https://readdy.ai/api/search-image?query=New%20apartment%20with%20rough%20finishing%2C%20concrete%20walls%2C%20unfinished%20surfaces%2C%20developer%20basic%20condition%2C%20ready%20for%20renovation&width=300&height=200&seq=before-6&orientation=landscape',
    detailedDescription: 'Скандинавский стиль для молодой семьи с ребенком. Светлые тона, натуральные материалы, безопасные покрытия.',
    challenges: 'Неровные стены от застройщика потребовали дополнительного выравнивания.',
    materials: 'Ламинат Tarkett, краска Tikkurila, мебель из массива сосны',
    clientFeedback: 'Квартира стала настоящим семейным гнездышком. Ребенок в восторге от своей комнаты!',
    additionalImages: [
      'https://readdy.ai/api/search-image?query=Scandinavian%20style%20children%20room%20with%20wooden%20furniture%2C%20soft%20colors%2C%20safe%20materials&width=400&height=300&seq=child-1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Scandinavian%20living%20room%20with%20light%20wood%2C%20white%20walls%2C%20cozy%20textiles&width=400&height=300&seq=living-1&orientation=landscape'
    ]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Все работы');
  const [selectedItem, setSelectedItem] = useState(null);
  const [portfolioItems, setPortfolioItems] = useState(initialPortfolioItems);
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [storyFormData, setStoryFormData] = useState({
    projectTitle: '',
    clientName: '',
    projectStory: '',
    challenges: '',
    solutions: '',
    results: '',
    clientTestimonial: '',
    additionalNotes: ''
  });
  const [isSubmittingStory, setIsSubmittingStory] = useState(false);
  const [storySubmitStatus, setStorySubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Add Schema.org JSON-LD for portfolio page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Портфолио работ ГлобалГранд",
      "description": "Более 120 успешно завершенных проектов ремонта квартир, домов и коммерческих помещений. Каждая работа — это воплощение мечты наших клиентов о идеальном доме.",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/portfolio`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": portfolioItems.length,
        "itemListElement": portfolioItems.map((item, index) => ({
          "@type": "CreativeWork",
          "position": index + 1,
          "name": item.title,
          "description": item.detailedDescription,
          "image": item.image,
          "creator": {
            "@type": "Organization",
            "name": "ГлобалГранд"
          },
          "dateCreated": "2024",
          "genre": item.category,
          "workExample": {
            "@type": "VisualArtwork",
            "name": item.title,
            "image": item.image,
            "description": item.detailedDescription
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Портфолио",
            "item": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/portfolio`
          }
        ]
      }
    });
    document.head.appendChild(script);

    // Update page title and meta description
    document.title = "Портфолио работ - ГлобалГранд | 120+ завершенных проектов ремонта";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Портфолио ГлобалГранд: 120+ успешных проектов ремонта квартир, домов и офисов в Москве и МО. Фото до и после, отзывы клиентов, детали каждого проекта.');
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('CollectionPage')) {
          script.remove();
        }
      });
    };
  }, [portfolioItems]);

  const handleImageChange = (itemId: number, field: 'image' | 'beforeImage', newSrc: string) => {
    const newItems = portfolioItems.map(item => 
      item.id === itemId ? { ...item, [field]: newSrc } : item
    );
    setPortfolioItems(newItems);
  };

  const handleStoryInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStoryFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingStory(true);
    setStorySubmitStatus('idle');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(storyFormData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/portfolio-story-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend
      });

      if (response.ok) {
        setStorySubmitStatus('success');
        setStoryFormData({
          projectTitle: '',
          clientName: '',
          projectStory: '',
          challenges: '',
          solutions: '',
          results: '',
          clientTestimonial: '',
          additionalNotes: ''
        });
        setTimeout(() => {
          setShowStoryForm(false);
          setStorySubmitStatus('idle');
        }, 2000);
      } else {
        setStorySubmitStatus('error');
      }
    } catch (error) {
      setStorySubmitStatus('error');
    } finally {
      setIsSubmittingStory(false);
    }
  };

  const handleDetailsClick = (item) => {
    setSelectedItem(item);
  };

  const handleAddMoreWork = () => {
    setStoryFormData(prev => ({
      ...prev,
      projectTitle: ''
    }));
    setShowStoryForm(true);
  };

  const filteredItems = activeCategory === 'Все работы' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 font-['Inter'] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-teal-300 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 right-32 w-16 h-16 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-40 left-40 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute top-2/3 right-20 w-20 h-20 border-2 border-emerald-300 rounded-full"></div>
      </div>
      
      <Header />
      
      <main className="relative z-10 pt-20">
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Наши работы
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Более 120 успешно завершенных проектов. Каждая работа — это воплощение 
                мечты наших клиентов о идеальном доме.
              </p>

              {/* Mobile-optimized category filters */}
              <div className="flex flex-wrap justify-center gap-2 px-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap text-sm sm:text-base touch-manipulation ${
                      activeCategory === category
                        ? 'bg-white text-emerald-800 shadow-lg'
                        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile-optimized grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:bg-white transition-all duration-300">
                  <div className="relative group cursor-pointer h-48 sm:h-64" onClick={() => setSelectedItem(item)}>
                    <MediaEditor
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                      onMediaChange={(newSrc) => handleImageChange(item.id, 'image', newSrc)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      <i className="ri-eye-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">
                      {item.type}
                    </p>
                    
                    <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-4">
                      <span>Площадь: {item.area}</span>
                      <span>Срок: {item.duration}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full touch-manipulation"
                      onClick={() => handleDetailsClick(item)}
                    >
                      Посмотреть детали
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-optimized CTA buttons */}
            <div className="mt-12 sm:mt-16 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-emerald-800 hover:bg-emerald-50 touch-manipulation"
                onClick={handleAddMoreWork}
              >
                <i className="ri-add-line mr-2"></i>
                Добавить работу
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-emerald-800 hover:bg-emerald-50 touch-manipulation"
              >
                <i className="ri-phone-line mr-2"></i>
                Обсудить ваш проект
              </Button>
            </div>
          </div>
        </section>

        {/* Mobile-optimized Project Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-4 sm:p-8">
                <div className="flex justify-between items-start mb-6 sm:mb-8">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className="text-base sm:text-lg text-blue-600 font-medium">
                      {selectedItem.type}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full hover:bg-gray-200 touch-manipulation flex-shrink-0"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                {/* Mobile-optimized Before/After Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                      <i className="ri-time-line text-red-500 mr-2"></i>
                      До ремонта
                    </h3>
                    <div className="h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg">
                      <MediaEditor
                        src={selectedItem.beforeImage}
                        alt="До ремонта"
                        className="w-full h-full"
                        onMediaChange={(newSrc) => handleImageChange(selectedItem.id, 'beforeImage', newSrc)}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      После ремонта
                    </h3>
                    <div className="h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg">
                      <MediaEditor
                        src={selectedItem.image}
                        alt="После ремонта"
                        className="w-full h-full"
                        onMediaChange={(newSrc) => handleImageChange(selectedItem.id, 'image', newSrc)}
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile-optimized Project Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center bg-blue-50 rounded-xl p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{selectedItem.area}</div>
                    <div className="text-gray-600 text-sm sm:text-base">Площадь</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-xl p-4">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">{selectedItem.duration}</div>
                    <div className="text-gray-600 text-sm sm:text-base">Длительность</div>
                  </div>
                  <div className="text-center bg-purple-50 rounded-xl p-4">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">{selectedItem.type}</div>
                    <div className="text-gray-600 text-sm sm:text-base">Тип работ</div>
                  </div>
                </div>

                {/* Mobile-optimized Project Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                        <i className="ri-lightbulb-line text-blue-600 mr-2"></i>
                        История проекта
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {selectedItem.detailedDescription}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                        <i className="ri-alert-line text-orange-600 mr-2"></i>
                        Вызовы и решения
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {selectedItem.challenges}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                        <i className="ri-tools-line text-green-600 mr-2"></i>
                        Материалы и технологии
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {selectedItem.materials}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
                        <i className="ri-chat-quote-line text-purple-600 mr-2"></i>
                        Отзыв клиента
                      </h3>
                      <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">
                        "{selectedItem.clientFeedback}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile-optimized Additional Images */}
                {selectedItem.additionalImages && (
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                      <i className="ri-gallery-line text-indigo-600 mr-2"></i>
                      Дополнительные фото
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedItem.additionalImages.map((image, index) => (
                        <div key={index} className="h-36 sm:h-48 rounded-xl overflow-hidden shadow-lg">
                          <img 
                            src={image} 
                            alt={`Дополнительное фото ${index + 1}`}
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile-optimized Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white touch-manipulation"
                    onClick={() => {
                      setStoryFormData(prev => ({
                        ...prev,
                        projectTitle: selectedItem.title
                      }));
                      setShowStoryForm(true);
                      setSelectedItem(null);
                    }}
                  >
                    <i className="ri-edit-line mr-2"></i>
                    Рассказать подробнее
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto touch-manipulation"
                    onClick={() => setSelectedItem(null)}
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Вернуться к портфолио
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile-optimized Story Form Modal */}
        {showStoryForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-3xl p-6 sm:p-8 text-white">
                <div className="flex justify-between items-center">
                  <div className="flex-1 pr-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Расскажите историю проекта</h2>
                    <p className="text-indigo-100 text-sm sm:text-base">Поделитесь деталями вашего ремонта с будущими клиентами</p>
                  </div>
                  <button
                    onClick={() => setShowStoryForm(false)}
                    className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors touch-manipulation flex-shrink-0"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <form onSubmit={handleStorySubmit} className="space-y-6" data-readdy-form id="portfolio-story-form">
                  {/* Mobile-optimized form fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Название проекта *
                      </label>
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={storyFormData.projectTitle}
                        onChange={handleStoryInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm touch-manipulation"
                        placeholder="Например: Современная квартира в ЖК..."
                      />
                    </div>
                    <div>
                      <label htmlFor="clientName" className="block text-sm font-medium text-gray-700 mb-2">
                        Имя клиента (по желанию)
                      </label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={storyFormData.clientName}
                        onChange={handleStoryInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm touch-manipulation"
                        placeholder="Анна С. или оставьте пустым"
                      />
                    </div>
                  </div>

                  {/* Rest of form fields with mobile optimization */}
                  <div>
                    <label htmlFor="projectStory" className="block text-sm font-medium text-gray-700 mb-2">
                      История проекта *
                    </label>
                    <textarea
                      id="projectStory"
                      name="projectStory"
                      value={storyFormData.projectStory}
                      onChange={handleStoryInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                      placeholder="Расскажите о том, как начался проект, какие были пожелания клиента, особенности объекта..."
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {storyFormData.projectStory.length}/500
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                        Вызовы и сложности
                      </label>
                      <textarea
                        id="challenges"
                        name="challenges"
                        value={storyFormData.challenges}
                        onChange={handleStoryInputChange}
                        rows={3}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                        placeholder="Какие трудности возникли в процессе работы?"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {storyFormData.challenges.length}/500
                      </div>
                    </div>
                    <div>
                      <label htmlFor="solutions" className="block text-sm font-medium text-gray-700 mb-2">
                        Решения и подходы
                      </label>
                      <textarea
                        id="solutions"
                        name="solutions"
                        value={storyFormData.solutions}
                        onChange={handleStoryInputChange}
                        rows={3}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                        placeholder="Как вы решили возникшие проблемы?"
                      />
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {storyFormData.solutions.length}/500
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="results" className="block text-sm font-medium text-gray-700 mb-2">
                      Результаты и достижения
                    </label>
                    <textarea
                      id="results"
                      name="results"
                      value={storyFormData.results}
                      onChange={handleStoryInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                      placeholder="Чего удалось достичь? Какие материалы использовались?"
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {storyFormData.results.length}/500
                    </div>
                  </div>

                  <div>
                    <label htmlFor="clientTestimonial" className="block text-sm font-medium text-gray-700 mb-2">
                      Отзыв клиента
                    </label>
                    <textarea
                      id="clientTestimonial"
                      name="clientTestimonial"
                      value={storyFormData.clientTestimonial}
                      onChange={handleStoryInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                      placeholder="Что сказал клиент о результате работы?"
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {storyFormData.clientTestimonial.length}/500
                    </div>
                  </div>

                  <div>
                    <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                      Дополнительные заметки
                    </label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={storyFormData.additionalNotes}
                      onChange={handleStoryInputChange}
                      rows={2}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none touch-manipulation"
                      placeholder="Любая дополнительная информация о проекте..."
                    />
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {storyFormData.additionalNotes.length}/500
                    </div>
                  </div>

                  {storySubmitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <i className="ri-check-circle-line text-green-500 mr-2"></i>
                        <span className="text-green-700">История проекта успешно отправлена! Спасибо за ваш вклад.</span>
                      </div>
                    </div>
                  )}

                  {storySubmitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <i className="ri-error-warning-line text-red-500 mr-2"></i>
                        <span className="text-red-700">Произошла ошибка при отправке. Попробуйте еще раз.</span>
                      </div>
                    </div>
                  )}

                  {/* Mobile-optimized submit buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmittingStory}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl whitespace-nowrap touch-manipulation"
                    >
                      {isSubmittingStory ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Отправка...
                        </div>
                      ) : (
                        <>
                          <i className="ri-send-plane-line mr-2"></i>
                          Поделиться историей
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowStoryForm(false)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap touch-manipulation"
                    >
                      <i className="ri-close-line mr-2"></i>
                      Отмена
                    </button>
                  </div>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Отправляя историю, вы соглашаетесь на её публикацию в портфолио
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
