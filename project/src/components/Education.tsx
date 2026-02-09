import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.Tech (CSE – Cyber Security)',
      institution: 'Sphoorthy Engineering College',
      period: '2023 - 2027',
      status: 'Pursuing',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: BookOpen,
      degree: 'Intermediate',
      institution: 'Nucleus Jr College, Nandyal',
      period: 'Completed',
      status: '75%',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      degree: 'SSC (10th)',
      institution: 'Keshava Reddy High School, Nandyal',
      period: 'Completed',
      status: '100% (600/600)',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-emerald-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <edu.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-2">
                {edu.degree}
              </h3>

              <p className="text-emerald-400 text-center mb-2">
                {edu.institution}
              </p>

              <p className="text-gray-400 text-center text-sm mb-3">
                {edu.period}
              </p>

              <div className="text-center">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  edu.status === 'Pursuing'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                    : 'bg-gray-800 text-gray-300 border border-gray-700'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
