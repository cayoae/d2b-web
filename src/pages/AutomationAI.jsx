import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

export default function AutomationAI() {
  const { t } = useTranslation('services');
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  const useCases = [
    {
      title: t('automation.useCases.supportAssist.title'),
      description: t('automation.useCases.supportAssist.description'),
      icon: '💬',
    },
    {
      title: t('automation.useCases.knowledgeSearch.title'),
      description: t('automation.useCases.knowledgeSearch.description'),
      icon: '🔍',
    },
    {
      title: t('automation.useCases.opsAutomations.title'),
      description: t('automation.useCases.opsAutomations.description'),
      icon: '⚙️',
    },
  ];

  const packages = [
    { name: t('automation.packages.starter.name'), duration: t('automation.packages.starter.duration'), icon: '🚀' },
    { name: t('automation.packages.rag.name'), duration: t('automation.packages.rag.duration'), icon: '🤖' },
    { name: t('automation.packages.care.name'), duration: t('automation.packages.care.duration'), icon: '🔧' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-white via-accent-50/20 to-forest-50/30 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-lime-200/20 rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 py-section-lg">
          <div className="max-w-3xl">
            <motion.h1 {...fadeInUp} className="text-display-lg mb-6 leading-tight">
              {t('automation.hero.title')} <em className="text-accent">{t('automation.hero.titleAccent')}</em> {t('automation.hero.titleEnd')}
            </motion.h1>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-forest/70 mb-10 leading-relaxed"
            >
              {t('automation.hero.subtitle')}
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="shadow-lg shadow-accent/20">
                {t('automation.hero.cta')}
              </Button>
              <Button variant="secondary" href="#use-cases">
                {t('automation.hero.ctaSecondary')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="relative -mt-20 pb-section">
        <Container>
          <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 border border-forest/5">
            <h2 className="text-h1 font-bold mb-10 text-center">{t('automation.included.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: t('automation.included.items.connectors'), icon: '🔌' },
                { title: t('automation.included.items.rag'), icon: '🧠' },
                { title: t('automation.included.items.humanReview'), icon: '👥' },
                { title: t('automation.included.items.analytics'), icon: '📊' },
              ].map((item, i) => (
                <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <p className="text-forest font-medium pt-2">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-section-lg bg-gradient-to-b from-white to-soft-gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('automation.useCases.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('automation.useCases.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-8 h-full border-2 border-forest/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-4xl">{useCase.icon}</span>
                  </div>
                  <h3 className="text-h2 font-bold mb-3">{useCase.title}</h3>
                  <p className="text-forest/70 leading-relaxed">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality & Safety */}
      <section className="py-section-lg bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('automation.quality.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('automation.quality.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: t('automation.quality.items.citations.title'), icon: '📚', desc: t('automation.quality.items.citations.desc') },
              { title: t('automation.quality.items.security.title'), icon: '🔒', desc: t('automation.quality.items.security.desc') },
              { title: t('automation.quality.items.audit.title'), icon: '📝', desc: t('automation.quality.items.audit.desc') },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-forest/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="py-section-lg bg-gradient-to-b from-white to-soft-gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-3">{t('automation.packages.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('automation.packages.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <div className="bg-white rounded-2xl p-8 h-full border-2 border-forest/10 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h3 className="text-h2 font-bold mb-2">{pkg.name}</h3>
                  <p className="text-accent font-bold text-lg">{pkg.duration}</p>
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
            <motion.h2 {...fadeInUp} className="text-display font-bold mb-6">{t('automation.cta.title')}</motion.h2>
            <motion.p {...fadeInUp} transition={{ delay: 0.1 }} className="text-body-lg text-white/90 mb-10">
              {t('automation.cta.subtitle')}
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="!bg-lime !text-forest hover:!bg-lime-600 shadow-xl">
                {t('automation.cta.primary')}
              </Button>
              <Button
                variant="secondary"
                to="/work"
                className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 backdrop-blur"
              >
                {t('automation.cta.secondary')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
