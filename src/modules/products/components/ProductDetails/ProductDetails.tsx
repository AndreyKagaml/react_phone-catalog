import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import ArrowIcon from '@/assets/icons/arrow-up.svg?react';
import { Actions } from '@/modules/products/components/ProductDetails/Actions';
import { useProductQuery } from '@/modules/products/queries';
import {
  Button,
  ErrorLabel,
  Loader,
  NotFoundLabel,
} from '@/shared/components/ui';

import { Gallery } from './Gallery';
import styles from './ProductDetails.module.scss';

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, refetch } = useProductQuery(id);
  const { t } = useTranslation();

  return (
    <>
      {isLoading && <Loader className={styles.loader} />}
      {isError && (
        <ErrorLabel className={styles.errorLabel} onRetry={refetch} />
      )}
      {data ? (
        <>
          <Button className={styles.backButton}>
            <ArrowIcon className={styles.arrow} />
            <span className={styles.backText}>{t('back')}</span>
          </Button>

          <h1 className={styles.title}>{data.name}</h1>

          <Gallery images={data.images} />

          <Actions device={data} />
        </>
      ) : (
        <NotFoundLabel
          handleClick={() => navigate('/')}
          className={styles.notFoundLabel}
        />
      )}
    </>
  );
};
