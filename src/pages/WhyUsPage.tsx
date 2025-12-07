import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Users, Clock, Award, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const reasons = [
  {
    icon: Shield,
    title: 'End-to-End Solutions',
    description: 'Everything your business needs in one integrated platform, from recruitment to digital presence.',
  },
  {
    icon: Zap,
    title: 'Results-Driven Approach',
    description: 'Measurable outcomes that directly impact your business growth and bottom line.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Expertise',
    description: 'International standards with deep understanding of local markets and cultures.',
  },
  {
    icon: Users,
    title: 'Dedicated Support Team',
    description: 'A committed team of experts available 24/7 to address your concerns.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick execution without compromising on quality, keeping your projects on track.',
  },
  {
    icon: Award,
    title: '16+ Years Experience',
    description: 'Decades of combined expertise across multiple industries and domains.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, TechStart Solutions',
    content: 'MAS7i transformed our hiring process completely. Their recruitment team found us exceptional talent that perfectly matched our culture.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, GlobalBrand',
    content: 'The digital marketing strategies implemented by MAS7i increased our online visibility by 300%. Truly exceptional work!',
    rating: 5,
  },
  {
    name: 'Ahmed Khan',
    role: 'Founder, Startup Hub',
    content: 'From branding to web development, MAS7i delivered a complete package that exceeded our expectations.',
    rating: 5,
  },
];

const WhyUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        title="Why Choose Us"
        subtitle="Discover what makes MAS7i the preferred choice for businesses worldwide seeking comprehensive solutions."
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Why Us', href: '/why-us' },
        ]}
      />

      {/* Main Reasons */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Advantages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Partner With <span className="text-primary">MAS7i?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just service providers; we're your strategic partners committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border group hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '16+', label: 'Years Experience' },
              { number: '100+', label: 'Happy Clients' },
              { number: '95%', label: 'Client Retention' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-text-light/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Client Feedback</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Our Clients <span className="text-primary">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with MAS7i.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUsPage;
