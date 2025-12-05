import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Palette, Layers, Lightbulb, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const BrandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Memorable logo designs that capture your brand essence.',
    },
    {
      icon: Layers,
      title: 'Brand Identity',
      description: 'Complete visual identity systems including colors, typography, and more.',
    },
    {
      icon: Lightbulb,
      title: 'Brand Strategy',
      description: 'Strategic brand positioning and messaging frameworks.',
    },
    {
      icon: FileText,
      title: 'Corporate Collateral',
      description: 'Business cards, letterheads, presentations, and marketing materials.',
    },
  ];

  const benefits = [
    'Unique and memorable brand identity',
    'Consistent visual language across all touchpoints',
    'Strategic brand positioning',
    'Professional design standards',
    'Unlimited revisions until satisfied',
    'Complete brand guidelines document',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Branding Services"
        subtitle="Create a powerful brand identity that resonates with your audience. We help you stand out in a crowded marketplace."
        backgroundImage="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Branding', href: '/services/branding' },
        ]}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Branding <span className="text-mas7i-primary">Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-mas7i-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-mas7i-primary" />
                </div>
                <h3 className="text-lg font-bold text-mas7i-darker mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Your Brand, Your <span className="text-mas7i-primary">Identity</span>
              </h2>
              <p className="text-gray-600 mb-8">
                A strong brand is more than just a logo. It's the complete experience your customers have 
                with your business. We help you create a brand that tells your story and connects with your audience.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-mas7i-primary flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800" 
                alt="Branding Design"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mas7i-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-mas7i-primary">Brand?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's create a brand identity that sets you apart from the competition.
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

export default BrandingPage;
