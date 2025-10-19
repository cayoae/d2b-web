import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Reviews() {
  const { t } = useTranslation('reviews');
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      quote: t('items.jennifer.quote'),
      author: t('items.jennifer.author'),
      role: t('items.jennifer.role'),
      rating: 5,
      project: t('items.jennifer.project'),
    },
    {
      quote: t('items.sarah.quote'),
      author: t('items.sarah.author'),
      role: t('items.sarah.role'),
      rating: 5,
      project: t('items.sarah.project'),
    },
    {
      quote: t('items.mike.quote'),
      author: t('items.mike.author'),
      role: t('items.mike.role'),
      rating: 5,
      project: t('items.mike.project'),
    },
    {
      quote: t('items.mark.quote'),
      author: t('items.mark.author'),
      role: t('items.mark.role'),
      rating: 5,
      project: t('items.mark.project'),
    },
    {
      quote: t('items.carlos.quote'),
      author: t('items.carlos.author'),
      role: t('items.carlos.role'),
      rating: 5,
      project: t('items.carlos.project'),
    },
    {
      quote: t('items.emma.quote'),
      author: t('items.emma.author'),
      role: t('items.emma.role'),
      rating: 5,
      project: t('items.emma.project'),
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
      {/* Header */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-white via-lime-50/30 to-forest-50/20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-forest-200/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-section-lg">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h1 className="text-display-lg font-bold mb-8">{t('hero.title')}</h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex text-lime text-3xl">★★★★★</div>
              <span className="text-display font-bold text-lime">{t('hero.rating')}</span>
            </div>
            <p className="text-body-lg text-forest/70">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Carousel */}
      <section className="relative -mt-20 pb-section-lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-forest via-forest-800 to-accent text-white rounded-3xl shadow-soft-lg p-10 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime rounded-full blur-3xl" />
              </div>
              <div className="text-center relative z-10">
                <div className="flex justify-center text-lime text-2xl mb-6">★★★★★</div>
                <blockquote className="text-h2 font-medium mb-8 italic leading-relaxed">
                  "{reviews[activeIndex].quote}"
                </blockquote>
                <div className="inline-block bg-white/10 backdrop-blur rounded-xl px-6 py-4">
                  <p className="font-bold mb-1">{reviews[activeIndex].author}</p>
                  <p className="text-white/70 text-sm mb-1">{reviews[activeIndex].role}</p>
                  <p className="text-lime text-sm font-semibold">{reviews[activeIndex].project}</p>
                </div>
              </div>
            </motion.div>

            {/* Carousel controls */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? 'bg-lime w-12' : 'bg-forest/20 w-2'
                  }`}
                  aria-label={`Show review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* All Reviews Grid */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('allReviews.title')}</h2>
            <p className="text-forest/60">{t('allReviews.subtitle')}</p>
          </div>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div className="bg-gradient-to-br from-soft-gray to-white rounded-2xl p-6 h-full flex flex-col border-2 border-forest/5 hover:border-lime/30 transition-colors">
                  <div className="flex text-lime text-lg mb-4">★★★★★</div>
                  <p className="text-forest/90 mb-6 flex-grow leading-relaxed">"{review.quote}"</p>
                  <div className="border-t border-forest/10 pt-4">
                    <p className="font-bold text-sm mb-1">{review.author}</p>
                    <p className="text-xs text-forest/60 mb-2">{review.role}</p>
                    <div className="inline-block bg-lime/10 text-lime text-xs font-semibold px-3 py-1 rounded-full">
                      {review.project}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-section-lg bg-gradient-to-br from-forest to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { metric: t('stats.satisfaction.value'), label: t('stats.satisfaction.label') },
              { metric: t('stats.delivery.value'), label: t('stats.delivery.label') },
              { metric: t('stats.projects.value'), label: t('stats.projects.label') },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-lime text-5xl font-bold mb-2">{stat.metric}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 {...fadeInUp} className="text-display font-bold mb-6">{t('cta.title')}</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-body-lg text-forest/70 mb-10">
              {t('cta.subtitle')}
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="shadow-lg shadow-lime/20">
                {t('cta.cta')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
