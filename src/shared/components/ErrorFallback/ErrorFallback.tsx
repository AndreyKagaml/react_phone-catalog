import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui';
import { ROUTES } from '@/shared/constants';

import styles from './ErrorFallback.module.scss';

interface ErrorFallbackProps {
  title?: string;
  description?: string;
}

export const ErrorFallback = ({ title, description }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  const fallbackTitle = title ?? t('common.errorBoundary.title');
  const fallbackDescription =
    description ?? t('common.errorBoundary.description');

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>{fallbackTitle}</h1>
        <p className={styles.description}>{fallbackDescription}</p>
        <Link to={ROUTES.HOME}>
          <Button className={styles.button}>
            {t('common.errorBoundary.goHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
};
