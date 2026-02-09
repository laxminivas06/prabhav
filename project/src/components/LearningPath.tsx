import { CheckCircle, Target, TrendingUp, Award } from 'lucide-react';

export default function LearningPath() {
  const path = [
    {
      icon: CheckCircle,
      title: 'Beginner Ethical Hacker',
      description: 'Started learning cybersecurity fundamentals and ethical hacking concepts',
      status: 'completed'
    },
    {
      icon: CheckCircle,
      title: 'Practicing Tools & Attacks',
      description: 'Hands-on practice with Kali Linux, Nmap, Burp Suite and various attack techniques',
      status: 'completed'
    },
    {
      icon: TrendingUp,
      title: 'Vulnerability Analysis',
      description: 'Learning to identify, assess and document security vulnerabilities',
      status: 'current'
    },
    {
      icon: Target,
      title: 'Research-based Learning',
      description: 'Conducting security research and staying updated with latest threats',
      status: 'current'
    },
    {
      icon: Award,
      title: 'Advanced Ethical Hacker',
      description: 'Goal: Become an advanced cybersecurity professional with expertise in penetration testing',
      status: 'goal'
    }
  ];

  return (
    <section id="learning-path" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Learning Path</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">
            A continuous journey toward cybersecurity excellence
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600"></div>

          <div className="space-y-12">
            {path.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:pr-8 md:pl-8">
                  <div
                    className={`bg-gray-900 rounded-xl p-6 border ${
                      step.status === 'completed'
                        ? 'border-emerald-500/50 hover:border-emerald-500'
                        : step.status === 'current'
                        ? 'border-blue-500/50 hover:border-blue-500'
                        : 'border-yellow-500/50 hover:border-yellow-500'
                    } transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                      step.status === 'completed'
                        ? 'hover:shadow-emerald-500/20'
                        : step.status === 'current'
                        ? 'hover:shadow-blue-500/20'
                        : 'hover:shadow-yellow-500/20'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.status === 'completed'
                            ? 'bg-emerald-500'
                            : step.status === 'current'
                            ? 'bg-blue-500 animate-pulse'
                            : 'bg-yellow-500'
                        }`}
                      >
                        <step.icon className="w-6 h-6 text-black" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400">{step.description}</p>

                        <div className="mt-3">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              step.status === 'completed'
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                                : step.status === 'current'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                            }`}
                          >
                            {step.status === 'completed'
                              ? 'Completed'
                              : step.status === 'current'
                              ? 'In Progress'
                              : 'Future Goal'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black bg-emerald-400 z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
