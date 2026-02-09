import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lightbulb } from "lucide-react";

const SmartLight = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cyber-card text-center py-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Lightbulb className="text-primary" size={32} />
          </div>

          <h3 className="font-display font-bold text-xl text-foreground mb-3">
            Smart & Light Innovations
          </h3>

          <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-6">
            Proud Member of Smart & Light Innovations — contributing to innovation, technology, and ethical development.
          </p>

          <a
            href="https://smartnlightinnovation.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-[var(--neon-glow-strong)] transition-all duration-300"
          >
            Visit Website
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartLight;
