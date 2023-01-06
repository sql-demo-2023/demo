import Head from 'next/head';
import styles from '../../styles/news/NewsPage.module.css';
import NewsCard from '../../common/components/NewsCard/NewsCard';
import { useTranslation } from 'next-i18next';
import ssrTranslations from '../../utils/ssrTranslations';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../common/components/Header/Header';

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
          <Header>
            <div>
              <div className={styles.currentLanguageContainer}>
                <span>Current Language: </span>
                <span className={styles.currentLanguage}>{language}</span>
              </div>
              <button onClick={() => setLanguage('es-ES')}>es-ES</button>
              <button onClick={() => setLanguage('en-US')}>en-US</button>
              <button onClick={() => setLanguage('fr-FR')}>fr-FR</button>
            </div>
          </Header>
        </div>

        <div className={styles.newsContainer}>
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
