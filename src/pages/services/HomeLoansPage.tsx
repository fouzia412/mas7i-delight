import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Calculator, FileText, CheckCircle, Shield, Clock, Users, Phone, ArrowRight, Building, Percent, IndianRupee } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const HomeLoansPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const loanFeatures = [
    {
      icon: IndianRupee,
      title: "Up to ₹1 Crore",
      description: "Get home loans up to 1 Crore with competitive interest rates and flexible repayment options."
    },
    {
      icon: Percent,
      title: "Low Interest Rates",
      description: "Enjoy some of the lowest interest rates in the market starting from 8.5% p.a."
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Fast track approval process with loan disbursement in as little as 7 working days."
    },
    {
      icon: FileText,
      title: "Minimal Documentation",
      description: "Simplified paperwork with our expert team handling all the documentation for you."
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "No hidden charges or fees. Complete transparency throughout the loan process."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal relationship manager to guide you through every step of the process."
    }
  ];

  const loanTypes = [
    {
      title: "Home Purchase Loan",
      description: "Buy your dream home with our affordable home purchase loans.",
      rate: "Starting 8.5% p.a."
    },
    {
      title: "Home Construction Loan",
      description: "Build your home from ground up with our construction loans.",
      rate: "Starting 8.75% p.a."
    },
    {
      title: "Home Extension Loan",
      description: "Extend or renovate your existing property with ease.",
      rate: "Starting 9% p.a."
    },
    {
      title: "Balance Transfer",
      description: "Transfer your existing loan to get better interest rates.",
      rate: "Starting 8.5% p.a."
    }
  ];

  const eligibility = [
    "Age: 21-65 years",
    "Minimum income: ₹25,000/month",
    "Employment: Salaried or Self-employed",
    "CIBIL Score: 650+",
    "Property location: Hyderabad & surrounding areas",
    "Loan tenure: Up to 30 years"
  ];

  const documents = [
    "Identity Proof (Aadhaar, PAN, Passport)",
    "Address Proof (Utility bills, Rental agreement)",
    "Income Proof (Salary slips, ITR, Form 16)",
    "Property Documents",
    "Bank Statements (Last 6 months)",
    "Passport size photographs"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Home Loans"
        subtitle="Get home loans up to ₹1 Crore in Hyderabad with competitive rates and quick approval"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Home Loans', href: '/services/home-loans' }
        ]}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Our <span className="text-red-600">Home Loans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience hassle-free home loan processing with our expert team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 border border-red-600/30">
              Loan Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Types of <span className="text-red-500">Home Loans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our range of home loan products tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Building className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{loan.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{loan.description}</p>
                <div className="inline-block px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold">
                  {loan.rate}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-3xl"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
              </div>
              <ul className="space-y-4">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-900 rounded-3xl text-white"
              data-aos="fade-left"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Required Documents</h3>
              </div>
              <ul className="space-y-4">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Plan Your Loan
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your <span className="text-red-600">EMI</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
            data-aos="fade-up"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount (₹)</label>
                <input 
                  type="number" 
                  placeholder="50,00,000" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (%)</label>
                <input 
                  type="number" 
                  placeholder="8.5" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tenure (Years)</label>
                <input 
                  type="number" 
                  placeholder="20" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <button className="w-full py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" />
              Calculate EMI
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Own Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our loan experts today and take the first step towards homeownership
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919121861192"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 9121861192
              </a>
              <a 
                href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20Home%20Loans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-colors"
              >
                WhatsApp Us
                <ArrowRight className="w-5 h-5" />
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

export default HomeLoansPage;
