import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, CheckCircle, Heart, Linkedin, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative solutions that drive growth, efficiency, and success in an ever-evolving market.',
    },
    {
      icon: Globe,
      title: 'Our Vision',
      description: 'To become the most trusted integrated business solutions partner, known for excellence, integrity, and transformative results.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, client-centricity, and a relentless commitment to delivering exceptional value in everything we do.',
    },
  ];

  const achievements = [
    { number: '16+', label: 'Years of Excellence' },
    { number: '100+', label: 'Happy Clients' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
  ];

  const reasons = [
    'Industry-leading expertise across multiple domains',
    'Customized solutions tailored to your needs',
    'Transparent communication at every step',
    'Dedicated support team available 24/7',
    'Proven track record of delivering results',
    'Competitive pricing with no hidden costs',
  ];

  const teamMembers = [
    {
      name: 'Shehnaaz Nur',
      role: 'Operation Head',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      description: 'Shehnaaz Nur is a seasoned HR professional with strong expertise in talent acquisition, HR operations, and strategic workforce planning. Over the years, she has successfully managed recruitment across IT and Non-IT sectors, collaborating with international clients and delivering tailored workforce solutions.',
      expertise: 'Her leadership style emphasizes transparency, efficiency, and employee engagement. At Hyderabad, she oversees HR functions with a mission to connect the right talent with the right opportunities, strengthen employee relations, and streamline HR processes for sustainable growth.',
    },
    {
      name: 'Asim Abdul',
      role: 'HR & Marketing Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      description: 'Abdul is a versatile professional with a strong technical skill set and extensive experience in both IT and human resources domains. He is proficient in SAP Basis, Oracle, and SQL databases, demonstrating solid expertise in database management and enterprise resource planning systems. Abdul also excels in data visualization and analysis through Power BI and is skilled in Python programming.',
      expertise: 'Alongside his IT skills, Abdul has significant experience with HR policies and recruitment, handling both domestic and international hiring processes effectively. This dual expertise in technology and people management makes him a valuable asset. Uniquely, Abdul is also adept in electric vehicle design, including battery assembling, showcasing his innovative capabilities in a cutting-edge industry.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        title="About MAS7i"
        subtitle="Your trusted partner for comprehensive business solutions. We combine expertise, innovation, and dedication to help your business thrive."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Building Success <span className="text-primary">Together</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in Hyderabad, MAS7i has grown from a small recruitment firm to a comprehensive 
                business solutions provider serving clients across India and beyond. Our journey of 16+ years 
                has been marked by continuous learning, adaptation, and an unwavering commitment to client success.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We understand that every business is unique, which is why we offer personalized solutions 
                that address specific challenges and opportunities. From recruitment and HR to digital marketing 
                and web development, we provide end-to-end support that drives measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                {reasons.slice(0, 3).map((reason, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-600880292203-757bb62b4baf?w=800" 
                  alt="MAS7i Team"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-3xl font-bold">16+</p>
                <p className="text-sm">Years of Trust</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center bg-fixed opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of combined expertise to drive your business success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border group"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative h-64 md:h-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 md:hidden">
                      <h3 className="text-xl font-bold text-text-light">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="hidden md:block mb-4">
                      <h3 className="text-2xl font-bold text-card-foreground">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.expertise}
                    </p>
                    <div className="flex gap-3 mt-6">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href="mailto:hr@mas7i.com"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Mission, Vision & <span className="text-primary">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.number}</p>
                <p className="text-text-light/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" 
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400" 
                  alt="Business meeting"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
            <div data-aos="fade-left" className="order-1 md:order-2">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Success Is Our <span className="text-primary">Priority</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We go beyond traditional service delivery to become true partners in your business journey. 
                Our integrated approach ensures seamless coordination across all services.
              </p>
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
