
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 font-['Inter'] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-8 h-8 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-60 w-6 h-6 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-60 w-10 h-10 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="flex flex-col items-center justify-center h-screen text-center px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-2xl">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 animate-pulse">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Страница не найдена</h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Эта страница еще не создана. Расскажите, что вы хотели бы видеть здесь.
          </p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-200"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
  );
}