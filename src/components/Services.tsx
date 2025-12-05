import { motion } from 'framer-motion';
import {
  Users,
  Plane,
  TrendingUp,
  Palette,
  Globe,
  Home,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Recruitment & HR Solutions',
    tagline: 'Hire Smart, Grow Fast',
    description:
      'End-to-end hiring, staffing, HR consulting, payroll, and compliance solutions tailored to your business needs.',
    subServices: ['Talent Acquisition', 'Contract Staffing', 'HR Policy Setup', 'Payroll Coordination'],
    link: 'https://mas7i.com/services/recruitment',
    buttonText: 'Learn More',
  },
  {
    icon: Plane,
    title: 'Air Ticketing & Corporate Travel',
    tagline: 'Hassle-Free Travel Bookings',
    description:
      'Domestic and international flight bookings, corporate travel management, and group travel solutions.',
    subServices: ['Domestic/International Flights', 'Corporate Travel Desk', 'Group Bookings', 'Travel Insurance'],
    link: 'https://mas7i.com/services/travel',
    buttonText: 'Learn More',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Grow Your Online Presence',
    description:
      'Comprehensive SEO, social media marketing, paid advertising, and performance marketing solutions.',
    subServices: ['SEO', 'Social Media', 'Performance Ads', 'Content Strategy'],
    link: 'https://mas7i.com/services/marketing',
    buttonText: 'Learn More',
  },
  {
    icon: Palette,
    title: 'Branding',
    tagline: 'Your Brand, Your Identity',
    description:
      'Logo design, brand identity development, brand strategy, and corporate collateral design.',
    subServices: ['Logo Design', 'Brand Identity', 'Brand Strategy', 'Corporate Collateral'],
    link: 'https://mas7i.com/services/branding',
    buttonText: 'Learn More',
  },
  {
    icon: Globe,
    title: 'Web Development',
    tagline: 'Modern & Responsive Websites',
    description:
      'Custom websites, landing pages, e-commerce solutions, and responsive UI/UX design.',
    subServices: ['Custom Websites', 'Landing Pages', 'E-commerce', 'Responsive UI/UX'],
    link: 'https://mas7i.com/services/web-development',
    buttonText: 'Learn More',
  },
  {
    icon: Home,
    title: 'Home Loans up to 1 Cr',
    tagline: 'Smart Financing for Your Dream Home',
    description:
      'Assistance for home loans up to 1 crore in Hyderabad with guided documentation and support.',
    subServices: ['Loan Processing', 'Documentation Help', 'Bank Liaison', 'Best Rate Assistance'],
    link: '#contact',
    buttonText: 'Enquire Now',
    isContact: true,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-text-muted-light max-w-2xl mx-auto text-lg">
            Comprehensive solutions that power your growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-6 lg:p-8 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-text-light mb-2">{service.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{service.tagline}</p>

              {/* Description */}
              <p className="text-text-muted-light text-sm mb-5">{service.description}</p>

              {/* Sub-services */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.subServices.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-text-muted-light"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              {service.isContact ? (
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium text-sm transition-colors group/btn"
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              ) : (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium text-sm transition-colors group/btn"
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
