import { motion } from "framer-motion";
import { ChevronDown, Shield, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(120 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(120 100% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border neon-border text-xs font-display text-primary mb-8">
            <Terminal size={14} />
            <span>~/portfolio</span>
            <span className="animate-blink border-r-2 border-primary">&nbsp;</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
        >
          <span className="text-foreground">TEKI PRABHAV</span>
          <br />
          <span className="neon-text">ACHARY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-4 font-display"
        >
          Cyber Security Student&nbsp;|&nbsp;Ethical Hacker (Learning Path)&nbsp;|&nbsp;Smart & Light Innovations Member
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-muted-foreground/70 text-sm sm:text-base max-w-xl mx-auto mb-10 italic"
        >
          "Dedicated Ethical Hacker on a continuous learning journey toward advanced cybersecurity expertise."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-[var(--neon-glow-strong)] transition-all duration-300"
          >
            <Shield size={16} />
            View Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border neon-border text-foreground font-display font-semibold text-sm hover:border-primary/60 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
