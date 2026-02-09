import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Wrench, Code, Monitor } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & Ethical Hacking",
    icon: ShieldCheck,
    skills: [
      { name: "Ethical Hacking", level: 70 },
      { name: "Windows Hacking", level: 65 },
      { name: "Android Hacking", level: 60 },
      { name: "Vulnerability Analysis", level: 65 },
      { name: "Web Security", level: 60 },
      { name: "Network Security", level: 55 },
    ],
  },
  {
    title: "Security Tools",
    icon: Wrench,
    skills: [
      { name: "Kali Linux", level: 75 },
      { name: "Nmap", level: 70 },
      { name: "Burp Suite", level: 60 },
    ],
  },
  {
    title: "Programming & Web",
    icon: Code,
    skills: [
      { name: "Python", level: 65 },
      { name: "Java", level: 55 },
      { name: "HTML & CSS", level: 70 },
    ],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      { name: "Linux", level: 75 },
      { name: "Windows", level: 80 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
            &gt; Skills & Expertise
          </h2>
          <div className="glow-line w-24 mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + ci * 0.1 }}
              className="cyber-card"
            >
              <div className="flex items-center gap-2 mb-5">
                <cat.icon className="text-primary" size={20} />
                <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-secondary-foreground font-display">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="progress-bar-fill h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + ci * 0.1 + si * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
