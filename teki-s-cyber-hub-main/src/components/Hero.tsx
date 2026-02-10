import { motion } from "framer-motion";
import { ChevronDown, Shield, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-24 overflow-hidden">
      
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(120 100% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(120 100% 50%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border neon-border text-xs font-display text-primary">
            <Terminal size={14} />
            <span>~/portfolio</span>
            <span className="animate-blink border-r-2 border-primary">&nbsp;</span>
          </div>
        </motion.div>

        {/* MAIN LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-primary/30 flex items-center justify-center shadow-md">
            <img
              src="/images/snl.png"
              alt="Smart N Innovation Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </div>
        </motion.div>

        {/* MEMBER TAG */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 text-xs font-display text-muted-foreground">
            Member
          </span>
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
        >
          <span className="text-foreground">TEKI PRABHAV</span>
          <br />
          <span className="neon-text">ACHARY</span>
        </motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-2 font-display"
        >
          Cybersecurity &nbsp;|&nbsp; Ethical Hacking
        </motion.p>

        {/* ORGANIZATION (TEXT ONLY) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-primary/80 text-sm sm:text-base font-display mb-8"
        >
          Smart N Light Innovations
        </motion.p>

        {/* QUOTE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-muted-foreground/70 text-sm sm:text-base max-w-xl mx-auto mb-10 italic"
        >
          “Focused on securing digital ecosystems through continuous learning,
          ethical hacking, and real-world cybersecurity analysis.”
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
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

        {/* SCROLL ICON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16"
        >
          <a
            href="#about"
            className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown size={28} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;