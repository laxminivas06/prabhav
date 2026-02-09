import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tekiprabhavachary@gmail.com',
      link: 'mailto:tekiprabhavachary@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7981387458',
      link: 'tel:+917981387458'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Balapur, Hyderabad, Telangana',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Let's connect and discuss cybersecurity opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              className={`bg-gray-900 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 ${
                item.link ? 'cursor-pointer' : 'cursor-default'
              }`}
              target={item.link ? '_blank' : undefined}
              rel={item.link ? 'noopener noreferrer' : undefined}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-emerald-500/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Connect on Social Media</h3>
            <p className="text-gray-400">Follow me for cybersecurity insights and updates</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/teki-prabhav-achary-6a389b321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-600/50"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-800/50"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-600/50"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
