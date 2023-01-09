import { header, headerName } from './Header.module.css';
import { useTranslation } from 'next-i18next';
export default function Header(props) {
  const { t } = useTranslation('common');
  return (
    <div className={header}>
      <div className={headerName}>{t('title')}</div>
      {props.children}
    </div>
  );
}
