import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

export default function WebAppsSites() {
  const { t } = useTranslation('services');
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const packages = [
    {
      name: t('webApps.packages.launchSprint.name'),
      duration: t('webApps.packages.launchSprint.duration'),
      description: t('webApps.packages.launchSprint.description'),
      icon: '🚀',
    },
    {
      name: t('webApps.packages.mvpBuild.name'),
      duration: t('webApps.packages.mvpBuild.duration'),
      description: t('webApps.packages.mvpBuild.description'),
      icon: '⚡',
    },
    {
      name: t('webApps.packages.growthCare.name'),
      duration: t('webApps.packages.growthCare.duration'),
      description: t('webApps.packages.growthCare.description'),
      icon: '📈',
    },
  ];

  const faq = [
    {
      q: t('webApps.faq.hosting.q'),
      a: t('webApps.faq.hosting.a'),
    },
    {
      q: t('webApps.faq.techStack.q'),
      a: t('webApps.faq.techStack.a'),
    },
    {
      q: t('webApps.faq.seo.q'),
      a: t('webApps.faq.seo.a'),
    },
    {
      q: t('webApps.faq.accessibility.q'),
      a: t('webApps.faq.accessibility.a'),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-white via-lime-50/30 to-forest-50/20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-forest-200/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-section-lg">
          <div className="max-w-3xl">
            <motion.h1 {...fadeInUp} className="text-display-lg mb-6 leading-tight">
              {t('webApps.hero.title')}
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-forest/70 mb-10 leading-relaxed"
            >
              {t('webApps.hero.subtitle')}
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="shadow-lg shadow-lime/20">
                {t('webApps.hero.cta')}
              </Button>
              <Button variant="secondary" to="/work">
                {t('webApps.hero.ctaSecondary')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="relative -mt-20 pb-section">
        <Container>
          <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 border border-forest/5">
            <h2 className="text-h1 font-bold mb-10 text-center">{t('webApps.whatWeBuild.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: t('webApps.whatWeBuild.items.webApps'), icon: '🛠️' },
                { title: t('webApps.whatWeBuild.items.marketingSites'), icon: '🎯' },
                { title: t('webApps.whatWeBuild.items.adminPanels'), icon: '🔗' },
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-lime/10 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <p className="text-forest font-medium">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-section-lg bg-gradient-to-b from-white to-soft-gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('webApps.packages.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('webApps.packages.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-8 h-full border-2 border-forest/10 hover:border-lime/40 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-h2 font-bold mb-2">{pkg.name}</h3>
                  <p className="text-lime font-bold text-lg mb-4">{pkg.duration}</p>
                  <p className="text-forest/70 leading-relaxed">{pkg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('webApps.process.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('webApps.process.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              t('webApps.process.steps.discovery'),
              t('webApps.process.steps.architecture'),
              t('webApps.process.steps.slices'),
              t('webApps.process.steps.qa'),
              t('webApps.process.steps.launch'),
              t('webApps.process.steps.iterate')
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {i < 5 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-lime/40 to-transparent -translate-y-1/2" />
                )}
                <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-lime-50/50 to-white px-4 py-6 rounded-xl border border-lime/20 relative z-10 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="font-semibold text-sm text-center">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="py-section-lg bg-gradient-to-br from-forest to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('webApps.outcomes.title')}</h2>
            <p className="text-white/80 max-w-2xl mx-auto">{t('webApps.outcomes.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: t('webApps.outcomes.metrics.launchTime.value'), label: t('webApps.outcomes.metrics.launchTime.label') },
              { metric: t('webApps.outcomes.metrics.conversion.value'), label: t('webApps.outcomes.metrics.conversion.label') },
              { metric: t('webApps.outcomes.metrics.uptime.value'), label: t('webApps.outcomes.metrics.uptime.label') },
              { metric: t('webApps.outcomes.metrics.lcp.value'), label: t('webApps.outcomes.metrics.lcp.label') },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-lime text-5xl font-bold mb-3">{item.metric}</div>
                <p className="text-white/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('webApps.faq.title')}</h2>
            <p className="text-forest/60">{t('webApps.faq.subtitle')}</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.05 }}>
                <div className="bg-soft-gray rounded-2xl p-6 border border-forest/5 hover:border-lime/30 transition-colors">
                  <h4 className="font-bold mb-3 text-forest flex items-start gap-2">
                    <span className="text-lime text-xl mt-0.5">Q</span>
                    {item.q}
                  </h4>
                  <p className="text-forest/70 leading-relaxed pl-7">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            <motion.h2 {...fadeInUp} className="text-display font-bold mb-6">{t('webApps.cta.title')}</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-body-lg text-white/90 mb-10">
              {t('webApps.cta.subtitle')}
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="!bg-lime !text-forest hover:!bg-lime-600 shadow-xl">
                {t('webApps.cta.primary')}
              </Button>
              <Button
                variant="secondary"
                to="/work"
                className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 backdrop-blur"
              >
                {t('webApps.cta.secondary')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
