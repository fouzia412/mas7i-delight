import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Analysis',
    description: 'We begin by understanding your business needs, goals, and challenges through in-depth consultation and analysis.',
    details: [
      'Initial consultation and requirement gathering',
      'Market and competitor analysis',
      'Identifying key objectives and KPIs',
      'Resource assessment and planning',
    ],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Our experts craft a customized strategy tailored to your specific requirements and business objectives.',
    details: [
      'Custom solution design',
      'Timeline and milestone planning',
      'Budget optimization strategies',
      'Risk assessment and mitigation',
    ],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementation',
    description: 'We execute with precision, maintaining transparent communication and delivering on our commitments.',
    details: [
      'Phased implementation approach',
      'Regular progress updates',
      'Quality assurance checks',
      'Collaborative problem-solving',
    ],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Results & Growth',
    description: 'We measure success, optimize for growth, and ensure sustainable ROI for your business.',
    details: [
      'Performance tracking and analytics',
      'Continuous optimization',
      'Scalability planning',
      'Long-term partnership support',
    ],
  },
];

const ProcessPage = () => {
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
        title="Our Process"
        subtitle="A systematic approach that ensures quality delivery and client satisfaction at every step of the journey."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Process', href: '/process' },
        ]}
      />

      {/* Process Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Proven <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured process that has been refined over 16+ years to deliver exceptional results consistently.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full" />

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
                className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-card p-8 rounded-2xl shadow-lg border border-border"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-primary font-bold text-sm">Step {step.number}</span>
                      <h3 className="text-xl font-bold text-card-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Center Number */}
                <div className="hidden lg:flex w-20 h-20 bg-primary rounded-full items-center justify-center text-primary-foreground text-2xl font-bold shadow-lg shadow-primary/30 z-10">
                  {step.number}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mt-2">
              Benefits of Our <span className="text-primary">Approach</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Transparency', desc: 'Clear communication and regular updates throughout the project.' },
              { title: 'Efficiency', desc: 'Streamlined processes that save time and resources.' },
              { title: 'Results-Driven', desc: 'Every step is designed to deliver measurable outcomes.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
              >
                <h3 className="text-xl font-bold text-text-light mb-3">{item.title}</h3>
                <p className="text-text-light/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your <span className="text-primary">Journey?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven process can help achieve your business goals.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
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

export default ProcessPage;
