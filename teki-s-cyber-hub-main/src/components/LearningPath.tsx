import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const steps = [
  { label: "Beginner Ethical Hacker", done: true },
  { label: "Practicing Tools & Attacks", done: true },
  { label: "Vulnerability Analysis", active: true },
  { label: "Research-based Learning", active: false },
  { label: "Advanced Ethical Hacker & Cybersecurity Professional", active: false, goal: true },
];

const LearningPath = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning-path" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
            &gt; Learning Path
          </h2>
          <div className="glow-line w-24 mb-10" />
        </motion.div>

        <div className="relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="flex items-start gap-4 mb-8 last:mb-0 relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[13px] top-7 w-px h-[calc(100%+8px)] bg-border" />
              )}

              <div className="shrink-0 relative z-10">
                {step.done ? (
                  <CheckCircle2 className="text-primary" size={28} />
                ) : step.active ? (
                  <div className="relative">
                    <Circle className="text-primary animate-glow-pulse" size={28} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                ) : (
                  <Circle className="text-muted-foreground" size={28} />
                )}
              </div>

              <div className={`cyber-card flex-1 ${step.goal ? 'border-primary/40' : ''}`}>
                <div className="flex items-center gap-2">
                  {step.goal && <ArrowRight className="text-primary" size={16} />}
                  <span className={`font-display text-sm ${step.done ? 'text-primary' : step.active ? 'text-foreground' : 'text-muted-foreground'} ${step.goal ? 'font-bold' : 'font-medium'}`}>
                    {step.label}
                  </span>
                </div>
                {step.done && (
                  <span className="text-xs text-primary/70 font-display mt-1 block">Completed</span>
                )}
                {step.active && (
                  <span className="text-xs text-accent font-display mt-1 block">In Progress</span>
                )}
                {step.goal && (
                  <span className="text-xs text-primary font-display mt-1 block">🎯 Ultimate Goal</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
