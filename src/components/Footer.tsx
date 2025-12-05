import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: 'https://mas7i.com/' },
  { label: 'About', href: 'https://mas7i.com/about' },
  { label: 'Services', href: 'https://mas7i.com/services' },
  { label: 'Contact', href: 'https://mas7i.com/contact' },
];

const serviceLinks = [
  { label: 'Recruitment & HR', href: 'https://mas7i.com/services/recruitment' },
  { label: 'Air Ticketing', href: 'https://mas7i.com/services/travel' },
  { label: 'Digital Marketing', href: 'https://mas7i.com/services/marketing' },
  { label: 'Branding', href: 'https://mas7i.com/services/branding' },
  { label: 'Web Development', href: 'https://mas7i.com/services/web-development' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/5">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex items-center gap-1 text-2xl font-bold text-text-light mb-4">
              MAS7<span className="text-primary">i</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </a>
            <p className="text-text-muted-light text-sm leading-relaxed">
              Your trusted business partner for growth and success. We deliver integrated solutions
              that drive results.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-text-light font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted-light hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-text-light font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted-light hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-text-light font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919121861192"
                  className="flex items-center gap-2 text-text-muted-light hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 9121861192
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@mas7i.com"
                  className="flex items-center gap-2 text-text-muted-light hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hr@mas7i.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.mas7i.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted-light hover:text-primary transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  www.mas7i.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted-light text-sm">
            © 2025 MAS7i. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted-light hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-muted-light hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
