import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, CheckCircle, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative solutions that drive growth, efficiency, and success in an ever-evolving market.',
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To become the most trusted integrated business solutions partner, known for excellence, integrity, and transformative results.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, client-centricity, and a relentless commitment to delivering exceptional value in everything we do.',
    },
  ];

  const achievements = [
    { number: '16+', label: 'Years of Excellence' },
    { number: '100+', label: 'Happy Clients' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
  ];

  const reasons = [
    'Industry-leading expertise across multiple domains',
    'Customized solutions tailored to your needs',
    'Transparent communication at every step',
    'Dedicated support team available 24/7',
    'Proven track record of delivering results',
    'Competitive pricing with no hidden costs',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="About MAS7i"
        subtitle="Your trusted partner for comprehensive business solutions. We combine expertise, innovation, and dedication to help your business thrive."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Building Success <span className="text-mas7i-primary">Together</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in Hyderabad, MAS7i has grown from a small recruitment firm to a comprehensive 
                business solutions provider serving clients across India and beyond. Our journey of 16+ years 
                has been marked by continuous learning, adaptation, and an unwavering commitment to client success.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand that every business is unique, which is why we offer personalized solutions 
                that address specific challenges and opportunities. From recruitment and HR to digital marketing 
                and web development, we provide end-to-end support that drives measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                {reasons.slice(0, 3).map((reason, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-mas7i-primary" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" 
                  alt="MAS7i Team"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mas7i-darker/50 to-transparent" />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-mas7i-primary text-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-3xl font-bold">16+</p>
                <p className="text-sm">Years of Trust</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Our Mission, Vision & <span className="text-mas7i-primary">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-mas7i-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-mas7i-primary" />
                </div>
                <h3 className="text-xl font-bold text-mas7i-darker mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-mas7i-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-mas7i-primary mb-2">{item.number}</p>
                <p className="text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" 
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400" 
                  alt="Business meeting"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="order-1 md:order-2">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Your Success Is Our <span className="text-mas7i-primary">Priority</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We go beyond traditional service delivery to become true partners in your business journey. 
                Our integrated approach ensures seamless coordination across all services.
              </p>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-mas7i-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-mas7i-primary" />
                    </div>
                    <span className="text-gray-700">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
