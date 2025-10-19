import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import CalendlyEmbed from '../components/CalendlyEmbed';

export default function Contact() {
  const { t } = useTranslation('contact');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    need: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify Forms will handle this automatically
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
  };

  if (submitted) {
    return (
      <section className="py-section-lg">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <div className="w-20 h-20 bg-lime rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-h1 font-bold mb-4">{t('success.title')}</h1>
              <p className="text-body text-forest/80 mb-8">
                {t('success.subtitle')}
              </p>
              <div className="bg-soft-gray rounded-xl p-6 mb-8">
                <h3 className="font-bold mb-4">{t('success.nextSteps.title')}</h3>
                <ul className="text-left space-y-3 text-forest/80">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">1.</span>
                    <span>{t('success.nextSteps.step1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">2.</span>
                    <span>{t('success.nextSteps.step2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">3.</span>
                    <span>{t('success.nextSteps.step3')}</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-forest/70 mb-6">
                {t('success.sooner')}
              </p>
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer">
                {t('success.cta')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div>
      <section className="py-section-lg bg-gradient-to-br from-soft-gray to-white">
        <Container>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-display font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-body text-forest/80">
              {t('hero.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Form */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card hover={false}>
              <h3 className="text-h2 font-bold mb-4">{t('form.title')}</h3>
              <p className="text-forest/80 mb-6">
                {t('form.subtitle')}
              </p>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div>
                    <label className="block font-medium mb-2" htmlFor="name">
                      {t('form.fields.name.label')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" htmlFor="company">
                      {t('form.fields.company.label')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" htmlFor="email">
                      {t('form.fields.email.label')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2" htmlFor="need">
                      {t('form.fields.need.label')}
                    </label>
                    <select
                      id="need"
                      name="need"
                      required
                      value={formData.need}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime"
                    >
                      <option value="">{t('form.fields.need.options.select')}</option>
                      <option value="web-app">{t('form.fields.need.options.webApp')}</option>
                      <option value="site">{t('form.fields.need.options.site')}</option>
                      <option value="automation-ai">{t('form.fields.need.options.automation')}</option>
                      <option value="not-sure">{t('form.fields.need.options.notSure')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-2" htmlFor="message">
                      {t('form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('form.fields.message.placeholder')}
                      className="w-full px-4 py-3 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime resize-none"
                    />
                  </div>

                  <Button variant="primary" className="w-full">
                    {t('form.submit')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Calendar Option */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <div>
                <h3 className="text-h2 font-bold mb-4">{t('calendar.title')}</h3>
                <p className="text-forest/80 mb-6">
                  {t('calendar.subtitle')}
                </p>

                <CalendlyEmbed />
              </div>

            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
