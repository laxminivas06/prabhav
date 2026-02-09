import { Shield, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs font-display text-center sm:text-left">
          © 2026 Teki Prabhav Achary | Ethical Hacking & Cybersecurity Portfolio
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:tekiprabhavachary@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/teki-prabhav-achary-6a389b321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <Shield className="text-primary/50" size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
