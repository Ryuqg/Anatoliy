
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // WhatsApp ссылка
  const whatsappLink = "https://wa.me/79100846736?text=Здравствуйте,%20по%20поводу%20ремонтных%20услуг%20с%20сайта%20«Ремонт%20квартир%20по%20Москве%20и%20МО»";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'О нас', path: '/about' },
    { name: 'Для инвесторов', path: '/investors' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <i className="ri-building-line text-sm sm:text-lg lg:text-2xl text-white"></i>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="ml-2 sm:ml-3">
              <div className={`font-bold text-sm sm:text-lg lg:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent`}>
                ГлобалГранд
              </div>
              <div className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Строительство и ремонт
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <div className={`flex items-center space-x-1 p-2 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100/80 backdrop-blur-sm border border-gray-200/50' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 lg:px-4 xl:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap group text-xs lg:text-sm xl:text-base ${
                    isActive(item.path)
                      ? isScrolled
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-white/80'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-20 animate-pulse"></div>
                  )}
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className={`relative overflow-hidden group transition-all duration-300 whitespace-nowrap text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-3 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <i className="ri-phone-line mr-1 sm:mr-2"></i>
                  <span className="hidden sm:inline">Связаться</span>
                  <span className="sm:hidden">Звонок</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`sm:hidden p-2 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className={`text-lg transition-transform duration-300 ${
                isMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
              }`}></i>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-3 sm:py-4 space-y-1 sm:space-y-2 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-lg rounded-2xl mt-3 border border-gray-200/50 shadow-xl' 
              : 'bg-white/10 backdrop-blur-lg rounded-2xl mt-3 border border-white/20'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block mx-2 sm:mx-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center">
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <i className="ri-arrow-right-line ml-auto text-lg"></i>
                  )}
                </div>
              </Link>
            ))}
            <div className="mx-2 sm:mx-3 pt-2 sm:pt-3 border-t border-gray-200/20">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className={`w-full text-sm whitespace-nowrap ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                      : 'bg-white/20 backdrop-blur-sm border border-white/30 text-white'
                  }`}
                >
                  <i className="ri-phone-line mr-2"></i>
                  Связаться
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}></div>
        <div className={`absolute top-0 right-1/4 w-12 sm:w-20 lg:w-24 h-12 sm:h-20 lg:h-24 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-2xl transition-opacity duration-500 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}></div>
      </div>
    </header>
  );
}
