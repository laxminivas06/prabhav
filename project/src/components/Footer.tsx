import { Shield, Linkedin, Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Shield className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold text-white">Teki Prabhav Achary</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ethical Hacker | Cybersecurity Student
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['About', 'Skills', 'Education', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/teki-prabhav-achary-6a389b321"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-600 hover:bg-sky-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Teki Prabhav Achary | Ethical Hacking & Cybersecurity Portfolio
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> for a secure digital world
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
