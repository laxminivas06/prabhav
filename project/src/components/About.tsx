import { User, Target, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: User, text: 'B.Tech CSE (Cyber Security) Student (2023-2027)' },
    { icon: Shield, text: 'Passionate about Ethical Hacking & Penetration Testing' },
    { icon: Target, text: 'Active Learner & Researcher in Cybersecurity' },
    { icon: TrendingUp, text: 'Committed to Ethical Practices & Responsible Disclosure' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="w-32 h-32 text-black" />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <Target className="w-10 h-10 text-black" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a <span className="text-emerald-400 font-semibold">B.Tech CSE (Cyber Security)</span> student currently pursuing my degree from 2023 to 2027. My passion lies in <span className="text-emerald-400 font-semibold">ethical hacking, vulnerability analysis, penetration testing, and building secure systems</span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              As a <span className="text-emerald-400 font-semibold">dedicated ethical hacker in the learning phase</span>, I actively practice and research various cybersecurity techniques. My goal is to become an <span className="text-emerald-400 font-semibold">advanced ethical hacker</span> who contributes to making the digital world more secure.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a <span className="text-emerald-400 font-semibold">strong believer in ethical practices and responsible disclosure</span>, ensuring that all my work adheres to the highest standards of integrity and professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-black/50 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
