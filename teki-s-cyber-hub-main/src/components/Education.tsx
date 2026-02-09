import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech (CSE – Cyber Security)",
    school: "Sphoorthy Engineering College",
    year: "2023 – 2027",
    highlight: "Currently Pursuing",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate",
    school: "Nucleus Jr College, Nandyal",
    year: "Completed",
    highlight: "75%",
    icon: GraduationCap,
  },
  {
    degree: "SSC",
    school: "Keshava Reddy High School, Nandyal",
    year: "Completed",
    highlight: "100% (600/600)",
    icon: Award,
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
            &gt; Education
          </h2>
          <div className="glow-line w-24 mb-8" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full bg-primary shadow-[var(--neon-glow)]" />

                <div className="cyber-card">
                  <div className="flex items-start gap-3">
                    <edu.icon className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{edu.degree}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{edu.school}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs">
                        <span className="text-muted-foreground">{edu.year}</span>
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-display font-medium">
                          {edu.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
