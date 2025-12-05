import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const serviceOptions = [
  'Recruitment & HR',
  'Air Ticketing',
  'Digital Marketing',
  'Branding',
  'Web Development',
  'Home Loans',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-light-bg">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-text-muted-dark max-w-2xl mx-auto text-lg">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-text-dark mb-8">Contact Information</h3>

            <div className="space-y-6">
              <a
                href="tel:+919121861192"
                className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark mb-1">Phone</div>
                  <div className="text-text-muted-dark">+91 9121861192</div>
                </div>
              </a>

              <a
                href="mailto:hr@mas7i.com"
                className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark mb-1">Email</div>
                  <div className="text-text-muted-dark">hr@mas7i.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-text-dark mb-1">Address</div>
                  <div className="text-text-muted-dark">
                    No 24, 4th Floor, Sri Krishna Center,
                    <br />
                    Abids Troop Bazar, Hyderabad
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919121861192?text=Hi%20MAS7i%2C%20I%27m%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-6 py-4 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background p-8 rounded-2xl shadow-md border border-border/50">
              <h3 className="text-xl font-bold text-text-dark mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-light-bg border border-border rounded-lg text-text-dark placeholder:text-text-muted-dark/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-light-bg border border-border rounded-lg text-text-dark placeholder:text-text-muted-dark/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-light-bg border border-border rounded-lg text-text-dark placeholder:text-text-muted-dark/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-light-bg border border-border rounded-lg text-text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
                    required
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-light-bg border border-border rounded-lg text-text-dark placeholder:text-text-muted-dark/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
