import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Globe, Layout, ShoppingCart, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const WebDevelopmentPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      description: 'Tailored web solutions built to match your unique business requirements.',
    },
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for lead generation.',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Full-featured online stores with secure payment integration.',
    },
    {
      icon: Smartphone,
      title: 'Responsive UI/UX',
      description: 'Beautiful, mobile-first designs that work on all devices.',
    },
  ];

  const benefits = [
    'Modern and responsive design',
    'SEO-optimized structure',
    'Fast loading speeds',
    'Secure and scalable architecture',
    'Easy content management',
    'Ongoing maintenance support',
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL', 'AWS'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Web Development"
        subtitle="Build powerful, responsive websites that drive business results. From custom web applications to e-commerce platforms, we deliver excellence."
        backgroundImage="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Web Development', href: '/services/web-development' },
        ]}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Development <span className="text-mas7i-primary">Services</span>
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
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" 
                alt="Web Development"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div data-aos="fade-left">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Modern & <span className="text-mas7i-primary">Responsive</span> Websites
              </h2>
              <p className="text-gray-600 mb-8">
                We build websites that not only look stunning but also perform exceptionally. 
                Our development process focuses on user experience, performance, and scalability.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Technologies We <span className="text-mas7i-primary">Use</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gray-100 rounded-full text-mas7i-darker font-medium hover:bg-mas7i-primary hover:text-white transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mas7i-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-mas7i-primary">Website?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create a website that drives results.
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

export default WebDevelopmentPage;
