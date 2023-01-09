import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import next18nextConfig from '../../next-i18next.config';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../styles/theme/createEmotionCache';
import theme from '../styles/theme/theme';
import store from '../store/store';
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp, next18nextConfig);
