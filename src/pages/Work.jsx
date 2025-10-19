import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import { workItems } from '../data/workData';

export default function Work() {
  const { t } = useTranslation('work');
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
            <p className="text-body-lg text-forest/70 mb-10">
              {t('hero.subtitle')}
            </p>
            <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="shadow-lg shadow-lime/20">
              {t('hero.cta')}
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Work Grid */}
      <section className="py-section-lg bg-white">
        <Container>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {workItems.map((item) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Link to={`/work/${item.id}`} className="block group">
                  <div className="bg-white rounded-2xl border-2 border-forest/10 hover:border-lime/40 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                    {/* Image placeholder with gradient */}
                    <div className="aspect-video bg-gradient-to-br from-lime-100 to-forest-100 flex items-center justify-center text-forest/30 group-hover:text-forest/40 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                      <svg className="w-16 h-16 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-h3 font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>

                      {/* Metric */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lime text-4xl font-bold">{item.metric}</span>
                        <span className="text-sm text-forest/60">{item.metricLabel || 'improvement'}</span>
                      </div>

                      {/* Duration */}
                      <p className="text-sm text-forest/60 mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.duration}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gradient-to-br from-lime-50 to-forest-50 px-3 py-1.5 rounded-full text-forest/80 border border-forest/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-lg bg-gradient-to-br from-forest via-forest-800 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-lime rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 {...fadeInUp} className="text-display font-bold mb-6">{t('cta.title')}</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-body-lg text-white/90 mb-10">
              {t('cta.subtitle')}
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="!bg-lime !text-forest hover:!bg-lime-600 shadow-xl">
                {t('cta.cta')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
