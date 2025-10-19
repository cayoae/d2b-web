import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from './Container';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-white py-12 mt-section-lg">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/logo-new.png"
              alt="Data2Business"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-white/80">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/web-apps-sites" className="text-white/80 hover:text-lime transition-colors">
                  {t('footer.webApps')}
                </Link>
              </li>
              <li>
                <Link to="/services/automation-ai" className="text-white/80 hover:text-lime transition-colors">
                  {t('footer.automation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/work" className="text-white/80 hover:text-lime transition-colors">
                  {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-white/80 hover:text-lime transition-colors">
                  {t('nav.reviews')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-lime transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-lime transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>&copy; {currentYear} Data2Business. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-lime transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-lime transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
