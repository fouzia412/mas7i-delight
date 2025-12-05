import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Users, Target, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const RecruitmentPage = () => {
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
      title: 'Talent Acquisition',
      description: 'Strategic sourcing and recruitment of top-tier candidates across industries and roles.',
    },
    {
      icon: Target,
      title: 'Contract Staffing',
      description: 'Flexible workforce solutions for project-based and temporary staffing needs.',
    },
    {
      icon: Shield,
      title: 'HR Policy Setup',
      description: 'Comprehensive HR policy development and implementation for your organization.',
    },
    {
      icon: Clock,
      title: 'Payroll Coordination',
      description: 'End-to-end payroll management and compliance services.',
    },
  ];

  const benefits = [
    'Access to a vast network of qualified candidates',
    'Reduced time-to-hire with efficient processes',
    'Industry-specific recruitment expertise',
    'Comprehensive background verification',
    'Flexible engagement models',
    'Dedicated account management',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Recruitment & HR Solutions"
        subtitle="Build high-performing teams with our comprehensive recruitment and HR consulting services. We connect you with top talent that drives business success."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Recruitment & HR', href: '/services/recruitment' },
        ]}
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Comprehensive HR <span className="text-mas7i-primary">Solutions</span>
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
                alt="Recruitment Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div data-aos="fade-left">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Hire Smart, <span className="text-mas7i-primary">Grow Fast</span>
              </h2>
              <p className="text-gray-600 mb-8">
                With 16+ years of experience in recruitment and HR consulting, we understand what it takes 
                to build winning teams. Our proven methodology ensures you get the right talent, right when you need it.
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-mas7i-primary">Dream Team?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's discuss your recruitment needs and find the perfect candidates for your organization.
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

export default RecruitmentPage;
