import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const { t } = useTranslation('home');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  };

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % valueCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Value proposition cards data
  const valueCards = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '99.9% Uptime',
      description: 'Reliable infrastructure, monitored 24/7',
      metric: '99.9%',
      color: 'lime'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Security First',
      description: 'Enterprise-grade security & compliance',
      metric: 'Secure',
      color: 'accent'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Development',
      description: '4-6 week average launch time',
      metric: '4.2sem',
      color: 'lime'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Scalable Architecture',
      description: 'Built to grow with your business',
      metric: '10x',
      color: 'accent'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'User-Centric Design',
      description: 'Conversion-optimized interfaces',
      metric: '5.0★',
      color: 'lime'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered Automation',
      description: 'Reduce manual work by 70%',
      metric: '−70%',
      color: 'accent'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data-Driven Decisions',
      description: 'Real-time analytics & insights',
      metric: 'Real-time',
      color: 'lime'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Modern Tech Stack',
      description: 'React, Node.js, Python, AI/ML',
      metric: 'Latest',
      color: 'accent'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Continuous Support',
      description: 'Post-launch maintenance included',
      metric: '<2h',
      color: 'lime'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'ROI Focused',
      description: 'Average 3x return in first year',
      metric: '3x',
      color: 'accent'
    }
  ];

  return (
    <div>
      {/* Hero Section - Full height, integrated design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-lime-50/30 to-forest-50/20 overflow-hidden pt-24 md:pt-32 pb-32">
        {/* Background Video - Enhanced visibility - extends beyond viewport */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-screen h-full object-cover opacity-25"
          style={{ minWidth: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay - Optimized for readability */}
        <div className="absolute top-0 left-0 w-screen h-full bg-gradient-to-br from-white/75 via-lime-50/45 to-forest-50/25" style={{ minWidth: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }} />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content with glassmorphism card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Glassmorphism backdrop card */}
              <div
                className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/60"
              >
                {/* Subtle gradient accent on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime/5 to-transparent rounded-3xl" />

                <div className="relative">
                  <motion.h1
                    className="text-display-lg mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {t('hero.title')}
                    <motion.span
                      className="block text-accent mt-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {t('hero.titleAccent')}
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="text-body-lg text-forest/80 mb-10 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {t('hero.subtitle')}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button variant="primary" href="#" className="shadow-lg shadow-lime/20 hover:scale-105 transition-transform">
                      {t('hero.cta')}
                    </Button>
                    <Button variant="secondary" to="/work" className="hover:scale-105 transition-transform">
                      {t('hero.ctaSecondary')}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Auto-rotating single card showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-white/40 to-lime-50/40 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/60 relative overflow-hidden flex items-center justify-center p-12">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-accent/5" />

                {/* AnimatePresence for smooth card transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCardIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10 text-center max-w-md"
                  >
                    {/* Icon */}
                    <motion.div
                      className={`inline-block mb-8 ${
                        valueCards[currentCardIndex].color === 'lime' ? 'text-lime' : 'text-accent'
                      }`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {valueCards[currentCardIndex].icon}
                    </motion.div>

                    {/* Metric */}
                    <motion.div
                      className={`text-6xl font-bold mb-4 ${
                        valueCards[currentCardIndex].color === 'lime' ? 'text-lime' : 'text-accent'
                      }`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {valueCards[currentCardIndex].metric}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-forest mb-4">
                      {valueCards[currentCardIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-forest/70 text-lg leading-relaxed">
                      {valueCards[currentCardIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {valueCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCardIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCardIndex
                          ? 'bg-lime w-8'
                          : 'bg-forest/20 hover:bg-forest/40'
                      }`}
                      aria-label={`Go to card ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>


        {/* Extended gradient transition for smooth blend */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none" style={{ zIndex: 2 }}>
          <div className="w-full h-full bg-gradient-to-b from-transparent via-white/40 to-white" />
        </div>
      </section>

      {/* Services Section - Clean continuation */}
      <section className="relative pt-20 pb-section-lg bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Web Apps & Sites */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full border-l-4 border-l-lime hover:border-l-lime-600 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-bold mb-2">{t('services.webApps.title')}</h3>
                    <p className="text-forest/70 text-sm">{t('services.webApps.description')}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-lime rounded-full" />
                    {t('services.webApps.features.mvp')}
                  </li>
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-lime rounded-full" />
                    {t('services.webApps.features.sites')}
                  </li>
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-lime rounded-full" />
                    {t('services.webApps.features.launch')}
                  </li>
                </ul>
                <Link to="/services/web-apps-sites" className="text-accent hover:text-lime font-medium text-sm inline-flex items-center gap-2 group">
                  {t('services.webApps.cta')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            </motion.div>

            {/* Automation & AI */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full border-l-4 border-l-accent hover:border-l-accent-light transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-h3 font-bold mb-2">{t('services.automation.title')}</h3>
                    <p className="text-forest/70 text-sm">{t('services.automation.description')}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('services.automation.features.rag')}
                  </li>
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('services.automation.features.hil')}
                  </li>
                  <li className="flex items-center gap-2 text-forest/80">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {t('services.automation.features.roi')}
                  </li>
                </ul>
                <Link to="/services/automation-ai" className="text-accent hover:text-lime font-medium text-sm inline-flex items-center gap-2 group">
                  {t('services.automation.cta')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Work - Tighter spacing, better visual hierarchy */}
      <section className="py-section bg-white">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-h1 font-bold mb-2">{t('work.title')}</h2>
              <p className="text-forest/60">{t('work.subtitle')}</p>
            </div>
            <Link to="/work" className="text-accent hover:text-lime font-medium text-sm hidden md:inline-flex items-center gap-2 group">
              {t('work.viewAll')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Stats Pro - Sports Analytics',
                metric: '+47%',
                label: 'visitor growth',
                time: '4 weeks',
                color: 'lime',
                url: 'https://statspro.bio',
                description: 'Transformed static page into dynamic platform with daily games, deep analysis links, and 20+ leagues coverage'
              },
              { title: 'B2B site refresh', metric: '+48%', label: 'form fills', time: '3 weeks', color: 'accent' },
              { title: 'AI knowledge assistant', metric: '−40%', label: 'handling time', time: '4 weeks', color: 'forest' },
            ].map((project, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Link to={project.url || "/work"} target={project.url ? "_blank" : undefined} rel={project.url ? "noopener noreferrer" : undefined} className="block group">
                  <Card hover={true} className="h-full">
                    <div className="aspect-video bg-gradient-to-br from-lime-50 to-forest-50 rounded-xl mb-4 overflow-hidden relative">
                      {i === 0 && project.url ? (
                        <img
                          src="/statspro-hero.png"
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-forest/30 group-hover:text-forest/40 transition-colors">
                          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h4 className="font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h4>
                    {project.description && (
                      <p className="text-sm text-forest/70 mb-3 line-clamp-2">{project.description}</p>
                    )}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-3xl font-bold text-${project.color}`}>{project.metric}</span>
                      <span className="text-sm text-forest/60">{project.label}</span>
                    </div>
                    <p className="text-xs text-forest/50">{project.time}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Work + Outcomes - Combined for better flow */}
      <section className="py-section-lg bg-gradient-to-b from-white to-soft-gray">
        <Container>
          {/* How We Work */}
          <div className="text-center mb-16">
            <h2 className="text-h1 font-bold mb-3">{t('process.title')}</h2>
            <p className="text-forest/60 max-w-2xl mx-auto">{t('process.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-section-lg">
            {[
              { num: '01', title: t('process.steps.scope.title'), desc: t('process.steps.scope.description') },
              { num: '02', title: t('process.steps.prototype.title'), desc: t('process.steps.prototype.description') },
              { num: '03', title: t('process.steps.ship.title'), desc: t('process.steps.ship.description') },
              { num: '04', title: t('process.steps.operate.title'), desc: t('process.steps.operate.description') },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-lime/40 to-transparent" />
                )}
                <div className="bg-white rounded-xl p-6 border border-forest/10 relative z-10">
                  <div className="text-4xl font-bold text-lime/20 mb-3">{item.num}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-forest/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="bg-forest rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-lime rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-h2 font-bold mb-8 text-center">{t('outcomes.title')}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: '⚡', title: t('outcomes.items.faster.title'), desc: t('outcomes.items.faster.description') },
                  { icon: '🎯', title: t('outcomes.items.ownership.title'), desc: t('outcomes.items.ownership.description') },
                  { icon: '📊', title: t('outcomes.items.results.title'), desc: t('outcomes.items.results.description') },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h5 className="font-bold mb-1">{item.title}</h5>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Reviews - Streamlined */}
      <section className="py-section bg-white">
        <Container>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex text-lime text-xl">★★★★★</div>
              <span className="text-h3 font-bold">5.0</span>
            </div>
            <h2 className="text-h1 font-bold mb-2">{t('reviews.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: t('reviews.items.sarah.quote'), author: t('reviews.items.sarah.author'), role: t('reviews.items.sarah.role') },
              { quote: t('reviews.items.john.quote'), author: t('reviews.items.john.author'), role: t('reviews.items.john.role') },
              { quote: t('reviews.items.mike.quote'), author: t('reviews.items.mike.author'), role: t('reviews.items.mike.role') },
            ].map((review, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <div className="bg-soft-gray rounded-xl p-6 h-full border border-forest/5">
                  <div className="flex text-lime text-sm mb-3">★★★★★</div>
                  <p className="text-forest/90 mb-4 leading-relaxed">&quot;{review.quote}&quot;</p>
                  <div className="pt-4 border-t border-forest/10">
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-xs text-forest/50">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/reviews" className="text-accent hover:text-lime font-medium text-sm inline-flex items-center gap-2 group">
              {t('reviews.readAll')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA - More integrated, less jarring */}
      <section className="py-section-lg bg-gradient-to-br from-forest via-forest-800 to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-lime rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-lime rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-body-lg text-white/90 mb-10">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#" className="!bg-lime !text-forest hover:!bg-lime-600 shadow-xl">
                {t('cta.primary')}
              </Button>
              <Button to="/contact" className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20 backdrop-blur">
                {t('cta.secondary')}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
