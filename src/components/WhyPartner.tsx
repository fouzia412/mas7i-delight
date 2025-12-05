import { motion } from 'framer-motion';
import { Layers, BarChart3, Globe2 } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: 'End-to-End Solutions',
    description:
      'Everything your business needs in one integrated platform – from recruitment and travel to digital presence and financing.',
  },
  {
    icon: BarChart3,
    title: 'Results-Driven Approach',
    description:
      'Measurable outcomes that directly impact your business growth, profitability, and operational efficiency.',
  },
  {
    icon: Globe2,
    title: 'Global Reach, Local Expertise',
    description:
      'International standards combined with deep local market understanding for the best of both worlds.',
  },
];

const WhyPartner = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background with parallax elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-dark-bg-secondary to-secondary" />
      
      {/* Animated decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-4">
            Why Partner With <span className="text-primary">Us?</span>
          </h2>
          <p className="text-text-muted-light max-w-2xl mx-auto text-lg">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="glass-card p-8 text-center card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-light mb-3">{reason.title}</h3>
              <p className="text-text-muted-light text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
