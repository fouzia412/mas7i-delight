import { motion } from 'framer-motion';
import { Users, Sparkles, Target } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Decades of combined experience across multiple industries, bringing expertise to every project.',
  },
  {
    icon: Sparkles,
    title: 'Innovation Focus',
    description:
      'Staying ahead of trends with modern tools, technologies, and innovative ideas.',
  },
  {
    icon: Target,
    title: 'Client Success',
    description:
      'Long-term partnerships built on trust, transparency, and goal-oriented execution.',
  },
];

const WhoWeAre = () => {
  return (
    <section className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Who We <span className="text-primary">Are</span>
          </h2>
          <p className="text-text-muted-dark max-w-3xl mx-auto text-lg">
            A team of passionate professionals dedicated to helping businesses thrive through
            innovative solutions and exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-background p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 text-center card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
              <p className="text-text-muted-dark text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
