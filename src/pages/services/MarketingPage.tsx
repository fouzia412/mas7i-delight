import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Search, Share2, BarChart3, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const MarketingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major social media platforms.',
    },
    {
      icon: BarChart3,
      title: 'Performance Ads',
      description: 'ROI-focused paid advertising campaigns on Google, Facebook, and more.',
    },
    {
      icon: FileText,
      title: 'Content Strategy',
      description: 'Compelling content that resonates with your target audience.',
    },
  ];

  const benefits = [
    'Data-driven marketing strategies',
    'Measurable ROI on all campaigns',
    'Multi-channel marketing approach',
    'Regular performance reports',
    'A/B testing and optimization',
    'Dedicated marketing specialists',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Digital Marketing"
        subtitle="Accelerate your online growth with data-driven digital marketing strategies. We help you reach the right audience at the right time."
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Digital Marketing', href: '/services/marketing' },
        ]}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Marketing <span className="text-mas7i-primary">Services</span>
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
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800" 
                alt="Digital Marketing"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div data-aos="fade-left">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Grow Your <span className="text-mas7i-primary">Online Presence</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Our digital marketing team combines creativity with analytics to deliver campaigns 
                that not only look great but also drive real business results.
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

      {/* CTA Section */}
      <section className="py-20 bg-mas7i-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your <span className="text-mas7i-primary">Online Growth?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's create a marketing strategy that drives real results for your business.
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

export default MarketingPage;
