import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "tekiprabhavachary@gmail.com",
      href: "mailto:tekiprabhavachary@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "7981387458",
      href: "tel:7981387458",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Teki Prabhav Achary",
      href: "https://www.linkedin.com/in/teki-prabhav-achary-6a389b321",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@mr_bobby_122",
      href: "https://www.instagram.com/mr_bobby_122?igsh=MXZiaHd6MXVyenUweQ==",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Balapur, Hyderabad, Telangana",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2 neon-text">
            &gt; Contact
          </h2>
          <div className="glow-line w-24 mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="cyber-card flex items-center gap-4 group"
                >
                  <c.icon
                    className="text-primary shrink-0 group-hover:scale-110 transition-transform"
                    size={22}
                  />
                  <div>
                    <p className="text-xs text-muted-foreground font-display">
                      {c.label}
                    </p>
                    <p className="text-foreground text-sm font-medium">
                      {c.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="cyber-card flex items-center gap-4">
                  <c.icon className="text-primary shrink-0" size={22} />
                  <div>
                    <p className="text-xs text-muted-foreground font-display">
                      {c.label}
                    </p>
                    <p className="text-foreground text-sm font-medium">
                      {c.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;