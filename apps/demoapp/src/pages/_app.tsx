import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import next18nextConfig from '../../next-i18next.config';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../styles/theme/theme';
import store from '../store/store';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp, next18nextConfig);
