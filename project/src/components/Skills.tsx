import { Shield, Lock, Smartphone, Globe, Network, Terminal, Code, Monitor } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cybersecurity & Ethical Hacking',
      icon: Shield,
      color: 'emerald',
      skills: [
        'Ethical Hacking (Learning & Practice)',
        'Windows Hacking',
        'Android Hacking',
        'Vulnerability Analysis & Assessment',
        'Web Security Fundamentals',
        'Network Security Basics',
        'Research-based Learning in Cybersecurity'
      ]
    },
    {
      title: 'Security Tools',
      icon: Terminal,
      color: 'blue',
      skills: [
        'Kali Linux',
        'Nmap',
        'Burp Suite'
      ]
    },
    {
      title: 'Programming & Web',
      icon: Code,
      color: 'yellow',
      skills: [
        'Python',
        'Java',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      color: 'pink',
      skills: [
        'Linux',
        'Windows'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'from-emerald-400 to-emerald-600 border-emerald-500',
      blue: 'from-blue-400 to-blue-600 border-blue-500',
      yellow: 'from-yellow-400 to-yellow-600 border-yellow-500',
      pink: 'from-pink-400 to-pink-600 border-pink-500'
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-black rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(category.color)} rounded-lg flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Lock, label: 'Security First' },
            { icon: Globe, label: 'Web Security' },
            { icon: Network, label: 'Network Analysis' },
            { icon: Smartphone, label: 'Mobile Security' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 text-center"
            >
              <item.icon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-gray-300 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
