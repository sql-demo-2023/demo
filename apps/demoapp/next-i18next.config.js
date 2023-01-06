const path = require('path');
const i18n = {
  locales: ['en-US', 'fr-FR', 'es-ES'],
  defaultLocale: 'en-US',
};

const next18nextConfig = {
  i18n,
  localePath: path.resolve('apps/demoapp/public/locales'),
  fallbackLng: 'en-US',
  ns: ['common'],
};

module.exports = next18nextConfig;
