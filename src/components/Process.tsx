import { motion } from 'framer-motion';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We understand your business needs, goals, and challenges through detailed consultation.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Strategy Development',
    description: 'We create a customized strategy tailored to your specific requirements and objectives.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementation',
    description: 'We execute with precision, maintaining transparent communication throughout the process.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Results & Growth',
    description: 'We measure success and continuously optimize for sustained growth and maximum ROI.',
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-text-muted-dark max-w-2xl mx-auto text-lg">
            A systematic approach that ensures quality delivery and client satisfaction
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative bg-background p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow-sm">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-text-muted-dark text-sm leading-relaxed">{step.description}</p>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
