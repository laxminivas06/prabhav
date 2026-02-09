import { ExternalLink, Lightbulb, Zap } from 'lucide-react';

export default function SmartLight() {
  const handleClick = () => {
    window.open('https://smartnlightinnovation.netlify.app/', '_blank');
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Lightbulb className="w-32 h-32 text-emerald-400 animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Zap className="w-40 h-40 text-emerald-400 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 md:p-12 border-2 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 shadow-2xl shadow-emerald-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Smart & Light Innovations
                </h3>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Proud Member of <span className="text-emerald-400 font-semibold">Smart & Light Innovations</span> – contributing to innovation, technology, and ethical development.
              </p>

              <button
                onClick={handleClick}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/50"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

            <div
              onClick={handleClick}
              className="cursor-pointer transform hover:scale-110 transition-all duration-300"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300">
                <div className="text-center">
                  <Lightbulb className="w-20 h-20 text-black mx-auto mb-2" />
                  <div className="text-black font-bold text-sm">SMART & LIGHT</div>
                  <div className="text-black font-semibold text-xs">INNOVATIONS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
