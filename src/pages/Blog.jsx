import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Card from '../components/Card';

export default function Blog() {
  const { t } = useTranslation('blog');
  const posts = [
    {
      slug: 'rag-in-production-3-lessons',
      title: t('posts.rag.title'),
      takeaway: t('posts.rag.takeaway'),
      date: '2025-09-15',
      readTime: t('posts.rag.readTime'),
      category: t('posts.rag.category'),
    },
    {
      slug: 'ship-mvps-in-4-weeks',
      title: t('posts.mvp.title'),
      takeaway: t('posts.mvp.takeaway'),
      date: '2025-09-01',
      readTime: t('posts.mvp.readTime'),
      category: t('posts.mvp.category'),
    },
    {
      slug: 'human-in-the-loop-ai',
      title: t('posts.hil.title'),
      takeaway: t('posts.hil.takeaway'),
      date: '2025-08-20',
      readTime: t('posts.hil.readTime'),
      category: t('posts.hil.category'),
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-white via-lime-50/30 to-forest-50/20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-forest-200/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-section-lg">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h1 className="text-display-lg font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-body-lg text-forest/70">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-section-lg bg-white">
        <Container>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={fadeInUp}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white rounded-2xl border-2 border-forest/10 hover:border-lime/40 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                    {/* Cover Image placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-lime-100 to-forest-100 flex items-center justify-center text-forest/30 group-hover:text-forest/40 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                      <svg className="w-16 h-16 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block text-xs bg-gradient-to-br from-lime-50 to-forest-50 px-3 py-1.5 rounded-full text-accent font-semibold border border-forest/10">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-h3 font-bold mb-3 group-hover:text-accent transition-colors">{post.title}</h3>

                      {/* Takeaway */}
                      <p className="text-sm text-forest/70 mb-4 leading-relaxed">{post.takeaway}</p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-forest/60 pt-4 border-t border-forest/10">
                        <time className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Coming Soon Section */}
      <section className="py-section-lg bg-gradient-to-br from-forest to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              {...fadeInUp}
              className="w-16 h-16 bg-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-8 h-8 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </motion.div>
            <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-h1 font-bold mb-4">
              {t('comingSoon.title')}
            </motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-white/80 text-lg">
              {t('comingSoon.subtitle')}
            </motion.p>
          </div>
        </Container>
      </section>
    </div>
  );
}
