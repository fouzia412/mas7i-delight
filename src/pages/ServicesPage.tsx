import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Users, Plane, Megaphone, Palette, Globe, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Users,
      title: 'Recruitment & HR Solutions',
      tagline: 'Hire Smart, Grow Fast',
      description: 'End-to-end hiring, staffing, HR consulting, and payroll management services to build your dream team.',
      link: '/services/recruitment',
      features: ['Talent Acquisition', 'Contract Staffing', 'HR Policy Setup', 'Payroll Coordination'],
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
    },
    {
      icon: Plane,
      title: 'Air Ticketing & Corporate Travel',
      tagline: 'Hassle-Free Travel Bookings',
      description: 'Domestic & international flight booking, corporate travel management, and group tour arrangements.',
      link: '/services/travel',
      features: ['Domestic/International Flights', 'Corporate Travel Desk', 'Group Bookings', 'Travel Insurance'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      tagline: 'Grow Your Online Presence',
      description: 'SEO, social media marketing, paid advertising, and performance marketing to boost your brand visibility.',
      link: '/services/marketing',
      features: ['SEO Optimization', 'Social Media Marketing', 'Performance Ads', 'Content Strategy'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    },
    {
      icon: Palette,
      title: 'Branding',
      tagline: 'Your Brand, Your Identity',
      description: 'Logo design, brand identity development, brand strategy, and corporate collateral design.',
      link: '/services/branding',
      features: ['Logo Design', 'Brand Identity', 'Brand Strategy', 'Corporate Collateral'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600',
    },
    {
      icon: Globe,
      title: 'Web Development',
      tagline: 'Modern & Responsive Websites',
      description: 'Custom websites, landing pages, e-commerce solutions, and responsive UI/UX design.',
      link: '/services/web-development',
      features: ['Custom Websites', 'Landing Pages', 'E-commerce', 'Responsive UI/UX'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600',
    },
    {
      icon: Home,
      title: 'Home Loans',
      tagline: 'Smart Financing for Your Dream Home',
      description: 'Assistance for home loans up to 1 crore in Hyderabad with guided documentation and support.',
      link: '/contact',
      features: ['Loan Advisory', 'Documentation Support', 'Bank Coordination', 'Fast Processing'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Our Services"
        subtitle="Comprehensive business solutions designed to help your organization grow, succeed, and thrive in today's competitive landscape."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mas7i-darker/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-mas7i-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-mas7i-primary text-sm font-semibold">{service.tagline}</span>
                  <h3 className="text-xl font-bold text-mas7i-darker mt-1 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-2 text-mas7i-primary font-semibold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mas7i-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-mas7i-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-mas7i-primary">Business?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch with our experts today and discover how our integrated solutions can help you achieve your goals.
          </p>
          <motion.div data-aos="fade-up" data-aos-delay="200">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-mas7i-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-mas7i-primary/90 transition-colors shadow-lg shadow-mas7i-primary/30"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
