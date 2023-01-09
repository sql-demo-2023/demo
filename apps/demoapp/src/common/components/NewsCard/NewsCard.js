import styles from './NewsCard.module.css';

export default function NewsCard({ news }) {
  const { title, synopsis } = news;
  return (
    <div className={styles.newsCard}>
      <div className={styles.newsCardDetails}>
        <div className={styles.newsCardName}>
          <h3>{title}</h3>
        </div>
        <div className={styles.newsCardAuthor}>
          <span>{synopsis}</span>
        </div>
      </div>
    </div>
  );
}
