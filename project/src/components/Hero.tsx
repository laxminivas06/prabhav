import { Shield, Terminal, Lock } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Terminal className="w-20 h-20 text-emerald-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-100">
          <Lock className="w-16 h-16 text-emerald-400" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse delay-200">
          <Shield className="w-24 h-24 text-emerald-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6 inline-block">
          <Shield className="w-20 h-20 text-emerald-400 mx-auto animate-bounce" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white">
          TEKI PRABHAV ACHARY
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl text-emerald-400 mb-6 font-semibold">
          <span className="inline-block animate-pulse">Cyber Security Student</span>
          <span className="mx-2 text-gray-500">|</span>
          <span className="inline-block">Ethical Hacker (Learning Path)</span>
          <span className="mx-2 text-gray-500">|</span>
          <span className="inline-block">Smart & Light Innovations Member</span>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto italic">
          "Dedicated Ethical Hacker on a continuous learning journey toward advanced cybersecurity expertise."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('skills')}
            className="px-8 py-3 bg-emerald-500 text-black font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/50 w-full sm:w-auto"
          >
            View Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500 hover:text-black transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
