import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9121861192',
      link: 'tel:+919121861192',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'hr@mas7i.com',
      link: 'mailto:hr@mas7i.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'No 24, 4th Floor, Sri Krishna Center, Abids Troop Bazar, Hyderabad',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help you achieve your business goals with expert guidance and support."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div data-aos="fade-right">
              <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2 mb-6">
                Let's Start a <span className="text-mas7i-primary">Conversation</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Ready to start a project? Our team is here to help. 
                Reach out through any of the channels below, and we'll get back to you promptly.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-mas7i-primary/5 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-mas7i-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-mas7i-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-mas7i-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mas7i-darker">{item.title}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.a>
            </div>

            {/* Contact Form */}
            <div data-aos="fade-left">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-mas7i-darker mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mas7i-primary focus:ring-2 focus:ring-mas7i-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mas7i-primary focus:ring-2 focus:ring-mas7i-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mas7i-primary focus:ring-2 focus:ring-mas7i-primary/20 outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mas7i-primary focus:ring-2 focus:ring-mas7i-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="recruitment">Recruitment & HR</option>
                        <option value="travel">Air Ticketing & Travel</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="branding">Branding</option>
                        <option value="web">Web Development</option>
                        <option value="loans">Home Loans</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-mas7i-primary focus:ring-2 focus:ring-mas7i-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-mas7i-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-mas7i-primary/90 transition-colors shadow-lg shadow-mas7i-primary/30"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-mas7i-primary font-semibold uppercase tracking-wider text-sm">Find Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mas7i-darker mt-2">
              Visit Our <span className="text-mas7i-primary">Office</span>
            </h2>
          </div>
          <div data-aos="zoom-in" className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0724892929584!2d78.4674!3d17.3950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAbids%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
