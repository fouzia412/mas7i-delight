import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does MAS7i offer?',
    answer:
      'MAS7i provides comprehensive business solutions including Recruitment & HR Services (talent acquisition, staffing, HR consulting), Air Ticketing & Corporate Travel, Digital Marketing & SEO, Branding & Design, Web Development, and Home Loan Assistance for properties up to 1 Crore in Hyderabad.',
  },
  {
    question: 'How experienced is MAS7i?',
    answer:
      'With over 16 years of industry experience, our team brings deep expertise across multiple sectors. We have successfully served 100+ clients and delivered hundreds of projects, building a strong track record of quality and reliability.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes, we work with clients globally. Our team is experienced in remote collaboration and we leverage modern communication tools to ensure seamless service delivery regardless of geographical location. We maintain international standards while providing localized expertise.',
  },
  {
    question: 'What makes MAS7i different?',
    answer:
      'We offer truly integrated solutions - from hiring talent to building your digital presence, from booking travel to securing financing. Our commitment to speed, transparency, and 24/7 support sets us apart. We are not just a service provider; we are your one-stop business partner.',
  },
  {
    question: 'How quickly can you start a project?',
    answer:
      'We pride ourselves on fast turnaround times. After an initial consultation and requirements gathering, we can typically begin work within a few days. Our onboarding process is streamlined to ensure you see results quickly without compromising quality.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-text-muted-dark max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-background p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-text-dark pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-background/50 p-5 rounded-b-xl border-x border-b border-border/50 mt-[-4px]">
                      <p className="text-text-muted-dark leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
