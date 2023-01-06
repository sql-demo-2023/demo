import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import next18nextConfig from '../../next-i18next.config';
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp, next18nextConfig);
