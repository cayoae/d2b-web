import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Container from './Container';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: t('nav.services'), href: '/services/web-apps-sites' },
    { name: t('nav.work'), href: '/work' },
    { name: t('nav.reviews'), href: '/reviews' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 py-4 md:py-6" style={{ zIndex: 9999 }}>
        <Container>
          {/* Desktop Navigation */}
          <nav
            className={`hidden md:flex items-center justify-between px-6 py-3 h-16 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-white/70 backdrop-blur-xl shadow-2xl border border-forest/20'
                : 'bg-white/60 backdrop-blur-2xl shadow-xl border border-forest/10'
            }`}
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)'
            }}
          >
            {/* Logo inside pill */}
            <Link to="/" className="flex items-center group flex-shrink-0 pr-4">
              <img
                src="/logo-new.png"
                alt="Data2Business"
                className="h-72 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-2 flex-1 justify-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-lime text-forest'
                      : 'text-forest hover:bg-lime/20 hover:text-lime'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side: Language + CTA */}
            <div className="flex items-center space-x-3 pl-6 border-l border-forest/10">
              <LanguageSwitcher />
              <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer">
                {t('buttons.bookCall')}
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src="/logo-new.png"
                alt="Data2Business"
                className="h-72 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-forest bg-white/80 backdrop-blur-xl rounded-full shadow-lg"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4"
          >
            <Container>
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-forest/10 p-6 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      location.pathname === item.href
                        ? 'bg-lime text-forest'
                        : 'text-forest hover:bg-lime/20 hover:text-lime'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 border-t border-forest/10">
                  <LanguageSwitcher />
                </div>
                <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer" className="w-full text-center mt-4">
                  {t('buttons.bookCall')}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
