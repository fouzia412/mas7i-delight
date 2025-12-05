import { motion } from 'framer-motion';

const searches = [
  { label: 'HR Solutions', href: 'https://mas7i.com/services/recruitment' },
  { label: 'Flight Booking', href: 'https://mas7i.com/services/travel' },
  { label: 'SEO Services', href: 'https://mas7i.com/services/marketing' },
  { label: 'Logo Design', href: 'https://mas7i.com/services/branding' },
  { label: 'Website Development', href: 'https://mas7i.com/services/web-development' },
  { label: 'Digital Marketing', href: 'https://mas7i.com/services/marketing' },
  { label: 'Brand Strategy', href: 'https://mas7i.com/services/branding' },
  { label: 'Corporate Travel', href: 'https://mas7i.com/services/travel' },
];

const PopularSearches = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container-custom">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-text-light mb-6">Popular Searches</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {searches.map((search, index) => (
              <motion.a
                key={search.label}
                href={search.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-text-muted-light hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {search.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularSearches;
