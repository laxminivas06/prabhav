import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Target, BookOpen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
            &gt; About Me
          </h2>
          <div className="glow-line w-24 mb-8" />

          <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
            I am a <span className="text-foreground font-semibold">B.Tech CSE (Cyber Security)</span> student (2023–2027), passionate about ethical hacking, vulnerability analysis, penetration testing, and building secure systems. I am actively learning, practicing, and researching cybersecurity techniques with a strong commitment to ethical practices and responsible disclosure.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: UserCheck, title: "Ethical Hacker", desc: "Dedicated to responsible security research and learning." },
              { icon: Target, title: "Goal-Driven", desc: "Aiming to become an advanced cybersecurity professional." },
              { icon: BookOpen, title: "Continuous Learner", desc: "Always expanding knowledge through practice and research." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="cyber-card text-center"
              >
                <item.icon className="mx-auto mb-3 text-primary" size={28} />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
