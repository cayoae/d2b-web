import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enCommon from '../locales/en/common.json';
import enHome from '../locales/en/home.json';
import enServices from '../locales/en/services.json';
import enWork from '../locales/en/work.json';
import enReviews from '../locales/en/reviews.json';
import enBlog from '../locales/en/blog.json';

import ptCommon from '../locales/pt-BR/common.json';
import ptHome from '../locales/pt-BR/home.json';
import ptServices from '../locales/pt-BR/services.json';
import ptWork from '../locales/pt-BR/work.json';
import ptReviews from '../locales/pt-BR/reviews.json';
import ptBlog from '../locales/pt-BR/blog.json';

import esCommon from '../locales/es/common.json';
import esHome from '../locales/es/home.json';
import esServices from '../locales/es/services.json';
import esWork from '../locales/es/work.json';
import esReviews from '../locales/es/reviews.json';
import esBlog from '../locales/es/blog.json';

import itCommon from '../locales/it/common.json';
import itHome from '../locales/it/home.json';
import itServices from '../locales/it/services.json';
import itWork from '../locales/it/work.json';
import itReviews from '../locales/it/reviews.json';
import itBlog from '../locales/it/blog.json';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
    work: enWork,
    reviews: enReviews,
    blog: enBlog,
  },
  'pt-BR': {
    common: ptCommon,
    home: ptHome,
    services: ptServices,
    work: ptWork,
    reviews: ptReviews,
    blog: ptBlog,
  },
  es: {
    common: esCommon,
    home: esHome,
    services: esServices,
    work: esWork,
    reviews: esReviews,
    blog: esBlog,
  },
  it: {
    common: itCommon,
    home: itHome,
    services: itServices,
    work: itWork,
    reviews: itReviews,
    blog: itBlog,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
