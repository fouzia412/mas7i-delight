import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageHero from '@/components/PageHero';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Recruitment Trends to Watch in 2025',
    excerpt: 'Discover the latest trends shaping the recruitment industry, from AI-powered hiring to remote work policies.',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800',
    author: 'Shehnaaz Nur',
    date: 'Dec 5, 2025',
    readTime: '5 min read',
    category: 'Recruitment',
  },
  {
    id: 2,
    title: 'How Digital Marketing Can Transform Your Business',
    excerpt: 'Learn how strategic digital marketing can boost your brand visibility and drive sustainable growth.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    author: 'Asim Abdul',
    date: 'Dec 3, 2025',
    readTime: '7 min read',
    category: 'Marketing',
  },
  {
    id: 3,
    title: 'Building a Strong Employer Brand: A Complete Guide',
    excerpt: 'Explore strategies to build an employer brand that attracts top talent and retains your best employees.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    author: 'Shehnaaz Nur',
    date: 'Nov 28, 2025',
    readTime: '6 min read',
    category: 'HR',
  },
  {
    id: 4,
    title: 'The Future of Corporate Travel: Trends & Insights',
    excerpt: 'Understand how corporate travel is evolving and what businesses need to adapt to stay competitive.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    author: 'Asim Abdul',
    date: 'Nov 25, 2025',
    readTime: '4 min read',
    category: 'Travel',
  },
  {
    id: 5,
    title: 'Web Development Best Practices for 2025',
    excerpt: 'Stay ahead with the latest web development techniques, frameworks, and design principles.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    author: 'Asim Abdul',
    date: 'Nov 20, 2025',
    readTime: '8 min read',
    category: 'Technology',
  },
  {
    id: 6,
    title: 'Creating a Memorable Brand Identity',
    excerpt: 'Learn the essential elements of brand identity design that makes your business stand out.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    author: 'Shehnaaz Nur',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    category: 'Branding',
  },
];

const BlogsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHero
        title="Our Blog"
        subtitle="Insights, tips, and industry updates to help your business grow. Stay informed with the latest trends and best practices."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blogs', href: '/blogs' },
        ]}
      />

      {/* Featured Blog */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            data-aos="fade-up"
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-16"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-[400px]">
                <img 
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent md:hidden" />
              </div>
              <div className="bg-secondary p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-light mb-4">
                  {blogs[0].title}
                </h2>
                <p className="text-text-light/70 mb-6">
                  {blogs[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-text-light/60 text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogs[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogs[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogs[0].readTime}
                  </span>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-primary font-semibold"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Latest Articles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Browse Our <span className="text-primary">Blog Posts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <motion.article
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {blog.author}
                    </span>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-primary font-medium text-sm flex items-center gap-1 cursor-pointer"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920')] bg-cover bg-center bg-fixed opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              Subscribe to Our <span className="text-primary">Newsletter</span>
            </h2>
            <p className="text-text-light/70 mb-8">
              Get the latest insights and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-text-light placeholder:text-text-light/50 focus:outline-none focus:border-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogsPage;
