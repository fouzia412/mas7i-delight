import { motion } from 'framer-motion';
import { Award, Globe, Shield, Users } from 'lucide-react';

const stats = [
  { icon: Award, number: '16+', label: 'Years of Industry Experience' },
  { icon: Globe, number: 'Global', label: 'Reach with Local Expertise' },
  { icon: Shield, number: 'End-to-End', label: 'Business Support' },
  { icon: Users, number: '100+', label: 'Trusted Clients' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            About <span className="text-primary">MAS7i</span>
          </h2>
          <p className="text-text-muted-dark max-w-3xl mx-auto text-lg">
            A Hyderabad-based integrated solutions partner offering comprehensive services across
            recruitment & HR, travel, digital marketing, branding, web development, and home loan
            assistance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-dark mb-6">
              Your Trusted Business Partner
            </h3>
            <div className="space-y-4 text-text-muted-dark">
              <p>
                At MAS7i, we believe in building lasting relationships with our clients. Our team of
                dedicated professionals brings together decades of combined experience to deliver
                solutions that truly make a difference.
              </p>
              <p>
                Whether you're looking to hire top talent, streamline your travel arrangements,
                boost your online presence, or secure financing for your dream home, we're here to
                help you every step of the way.
              </p>
              <p>
                Our commitment to quality, transparency, and speed sets us apart. We understand that
                your time is valuable, and we work efficiently to deliver results that exceed your
                expectations.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Quality First
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Transparency
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Fast Delivery
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Client Focus
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-background p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-text-dark mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-text-muted-dark">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
