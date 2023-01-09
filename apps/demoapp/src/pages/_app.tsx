import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import next18nextConfig from '../../next-i18next.config';
import { Provider } from 'react-redux';
import store from '../store/store';
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default appWithTranslation(MyApp, next18nextConfig);
