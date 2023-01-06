import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import NewsCard from '../../src/common/components/NewsCard';
import { useTranslation } from 'next-i18next';
import ssrTranslations from '../../src/utils/ssrTranslations';
import { useState } from 'react';
import { useEffect } from 'react';

function News() {
  const { t, i18n } = useTranslation('common');
  const [language, setLanguage] = useState('en-US');
  const [newsContent, setNewsContent] = useState([]);
  useEffect(() => {
    i18n.changeLanguage(language);
    setNewsContent(t('content', { returnObjects: true }));
  }, [language]);
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <div
            style={{
              padding: '4px',
              marginRight: '4px',
            }}
          >
            <span>Current Language: </span>
            <span
              style={{
                borderRadius: '3px',
                backgroundColor: 'black',
                color: 'white',
                padding: '2px',
              }}
            >
              {i18n.language}
            </span>
          </div>
          <button onClick={() => setLanguage('es-ES')} locale="es-ES">
            es-ES
          </button>
          <button onClick={() => setLanguage('en-US')} locale="en-US">
            en-US
          </button>
          <button onClick={() => setLanguage('fr-FR')} locale="fr-FR">
            fr-FR
          </button>
        </div>

        <div className={styles.newscontainer}>
          <div className={styles.yournewscasts}>
            <h3>{t('title')}</h3>
          </div>

          <div>
            {newsContent &&
              newsContent.map((newsItem, i) => (
                <NewsCard key={i} news={newsItem} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await ssrTranslations(locale, ['common'])),
    },
  };
}

export default News;
