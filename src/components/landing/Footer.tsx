import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section-padding py-12 border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div>
            <p className="text-lg font-semibold mb-2">Echelon Studio</p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Echelon Studio. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Dribbble
            </a>
          </div>

          {/* Contact */}
          <div className="text-sm text-muted-foreground">
            <a
              href="mailto:hello@echelonstudio.com"
              className="hover:text-foreground transition-colors"
            >
              hello@echelonstudio.com
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
