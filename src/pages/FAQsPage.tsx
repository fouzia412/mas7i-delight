import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const faqCategories = [
  {
    category: 'General',
    faqs: [
      {
        question: 'What services does MAS7i offer?',
        answer: 'MAS7i provides a comprehensive range of services including Recruitment & HR Solutions, Air Ticketing & Corporate Travel, Digital Marketing, Branding, Web Development, and Home Loan Assistance. We are your one-stop solution for all business needs.',
      },
      {
        question: 'How experienced is MAS7i?',
        answer: 'With over 16 years of industry experience, MAS7i has built a reputation for excellence. Our team comprises seasoned professionals who have worked across various industries, bringing diverse expertise to every project.',
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Yes, we work with clients globally. Our team is experienced in remote collaboration and can seamlessly work across different time zones. We have successfully served clients from the US, UK, Middle East, and other regions.',
      },
    ],
  },
  {
    category: 'Recruitment & HR',
    faqs: [
      {
        question: 'What industries do you recruit for?',
        answer: 'We recruit across various industries including IT, Healthcare, Finance, Manufacturing, Retail, and more. Our specialized team understands the unique requirements of each sector.',
      },
      {
        question: 'How long does the recruitment process take?',
        answer: 'The timeline varies based on the role and requirements. Typically, we can present qualified candidates within 1-2 weeks for most positions. Executive searches may take 4-6 weeks.',
      },
      {
        question: 'Do you offer contract staffing?',
        answer: 'Yes, we offer both permanent placement and contract staffing solutions. Our contract staffing services are ideal for project-based needs or seasonal requirements.',
      },
    ],
  },
  {
    category: 'Digital Services',
    faqs: [
      {
        question: 'What digital marketing services do you provide?',
        answer: 'We offer SEO, Social Media Marketing, PPC Advertising, Content Marketing, Email Marketing, and Performance Analytics. Our strategies are data-driven and customized to your business goals.',
      },
      {
        question: 'How long before I see results from digital marketing?',
        answer: 'SEO typically shows significant results in 3-6 months. Paid advertising can show immediate results. We provide regular reports so you can track progress throughout the campaign.',
      },
      {
        question: 'Do you redesign existing websites?',
        answer: 'Absolutely! We can redesign and modernize your existing website, improve its performance, enhance user experience, and ensure it is mobile-responsive and SEO-friendly.',
      },
    ],
  },
  {
    category: 'Working With Us',
    faqs: [
      {
        question: 'What makes MAS7i different from others?',
        answer: 'Our integrated approach sets us apart. We offer multiple services under one roof, ensuring seamless coordination. Combined with our 16+ years of experience, 24/7 support, and commitment to transparency, we deliver exceptional value.',
      },
      {
        question: 'How quickly can you start a project?',
        answer: 'We can typically start within 1-2 weeks after the initial consultation and agreement. For urgent requirements, we offer expedited onboarding processes.',
      },
      {
        question: 'What are your payment terms?',
        answer: 'Payment terms are discussed during the proposal stage and can be customized based on project scope. We offer flexible payment options including milestone-based payments for larger projects.',
      },
    ],
  },
];

const FAQsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const currentFaqs = faqCategories.find(cat => cat.category === activeCategory)?.faqs || [];
  
  const filteredFaqs = searchQuery 
    ? faqCategories.flatMap(cat => cat.faqs).filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentFaqs;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        title="FAQs"
        subtitle="Find answers to common questions about our services, processes, and how we can help your business grow."
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'FAQs', href: '/faqs' },
        ]}
      />

      {/* Search Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto" data-aos="fade-up">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            {!searchQuery && (
              <div className="lg:col-span-1" data-aos="fade-right">
                <div className="sticky top-24 bg-card p-6 rounded-2xl border border-border">
                  <h3 className="font-bold text-card-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {faqCategories.map((cat, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 5 }}
                        onClick={() => {
                          setActiveCategory(cat.category);
                          setOpenIndex(0);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeCategory === cat.category
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-muted'
                        }`}
                      >
                        {cat.category}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Accordion */}
            <div className={searchQuery ? 'lg:col-span-4' : 'lg:col-span-3'} data-aos="fade-left">
              {searchQuery && (
                <p className="text-muted-foreground mb-6">
                  Found {filteredFaqs.length} result(s) for "{searchQuery}"
                </p>
              )}
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-muted-foreground">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-center max-w-2xl mx-auto"
          >
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-text-light/70 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Contact Us
                </motion.button>
              </Link>
              <a href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%20have%20a%20question">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border border-white/30 text-text-light hover:bg-white/10 transition-colors"
                >
                  Chat on WhatsApp
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQsPage;
