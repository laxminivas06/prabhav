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
          className="cyber-card py-8 sm:py-10 px-4 sm:px-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Logo and Icon Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:flex-col md:gap-4">
              {/* SNL Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-lg"
              >
               <div className="relative w-24 h-24 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-sm">
  <img 
    src="/images/snl.png" 
    alt="SNL Logo" 
    className="w-16 h-16 object-contain"
  />
</div>
              </motion.div>

              {/* Lightbulb Icon */}
              
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
               
                <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                  Smart N Light Innovations
                </h3>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-2xl mx-auto md:mx-0">
                Proud Member of Smart N Light Innovations — contributing to innovation, technology, and ethical development through cutting-edge solutions and collaborative projects.
              </p>

              <a
                href="https://smartnlightinnovation.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-display font-semibold text-sm hover:shadow-[var(--neon-glow-strong)] transition-all duration-300 w-full sm:w-auto"
              >
                Visit Website
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Mobile Lightbulb */}
          <div className="flex justify-center mt-6 sm:hidden">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/30">
              <Lightbulb className="text-primary" size={24} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartLight;