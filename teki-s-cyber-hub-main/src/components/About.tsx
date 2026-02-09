import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, Target, BookOpen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14"
        >
          {/* Profile Photo Section (BIG SQUARE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              {/* Borders */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl"></div>
              <div className="absolute inset-2 border border-primary/20 rounded-xl"></div>

              {/* Image */}
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl border-4 border-background relative z-10"
              />

              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 to-primary/5 blur-2xl rounded-3xl -z-10"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
              &gt; About Me
            </h2>
            <div className="glow-line w-24 mb-8" />

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I am a{" "}
                <span className="text-foreground font-semibold">
                  B.Tech CSE (Cyber Security)
                </span>{" "}
                student (2023–2027), passionate about ethical hacking,
                vulnerability analysis, penetration testing, and building secure
                systems. I am actively learning, practicing, and researching
                cybersecurity techniques with a strong commitment to ethical
                practices and responsible disclosure.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                My journey in cybersecurity started with a curiosity about how
                systems work and how they can be protected. I believe in
                continuous learning and staying updated with the latest security
                trends and threats to develop effective defense strategies.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: UserCheck,
                    title: "Ethical Hacker",
                    desc: "Dedicated to responsible security research and learning.",
                  },
                  {
                    icon: Target,
                    title: "Goal-Driven",
                    desc: "Aiming to become an advanced cybersecurity professional.",
                  },
                  {
                    icon: BookOpen,
                    title: "Continuous Learner",
                    desc: "Always expanding knowledge through practice and research.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="cyber-card text-center"
                  >
                    <item.icon
                      className="mx-auto mb-3 text-primary"
                      size={28}
                    />
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;