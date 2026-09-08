import { useNavigate } from 'react-router-dom';

import { PRODUCT_SORT_OPTIONS } from '@/modules/products/constants';
import { useSortProducts } from '@/modules/products/hooks/useSortProducts';
import { useProductsQuery } from '@/modules/products/queries';
import { ProductCategory } from '@/modules/products/types';
import { ProductCard, Pagination } from '@/shared/components';
import {
  Dropdown,
  ErrorLabel,
  Loader,
  NotFoundLabel,
} from '@/shared/components/ui';
import { usePagination } from '@/shared/hooks/usePagination';

import styles from './Catalog.module.scss';

interface Props {
  categoryName: string;
  category: ProductCategory;
}

export const Catalog = ({ categoryName, category }: Props) => {
  const {
    page,
    perPage,
    handlePageChange,
    handleSizeChange,
    PAGE_SIZE_OPTIONS,
  } = usePagination();

  const { sort, handleSortChange } = useSortProducts();
  const { data, isLoading, isError, refetch } = useProductsQuery(category);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && <Loader className={styles.loader} />}
      {isError && (
        <ErrorLabel className={styles.errorLabel} onRetry={refetch} />
      )}
      {data &&
        (data.total === 0 ? (
          <NotFoundLabel
            handleClick={() => navigate('/')}
            className={styles.notFoundLabel}
          />
        ) : (
          <>
            <div className={styles.category}>
              <h1 className={styles.category__title}>{categoryName}</h1>
              <p className={styles.category__description}>
                {data.total} models
              </p>
            </div>
            <div className={styles.parameters}>
              <Dropdown
                className={styles.dropdown__sort}
                description={'Sort by'}
                value={sort}
                values={PRODUCT_SORT_OPTIONS}
                onChange={handleSortChange}
                getLabel={option => option.labelValue}
                getKey={option => option.key}
              />
              <Dropdown
                className={styles.dropdown__page}
                description={'Items on page'}
                value={perPage}
                values={PAGE_SIZE_OPTIONS}
                onChange={handleSizeChange}
                getLabel={option => String(option)}
                getKey={option => String(option)}
              />
            </div>
            <section className={styles.grid}>
              {data.items.map(item => (
                <ProductCard
                  key={item.id}
                  product={item}
                  withDiscount
                  className={styles.card}
                />
              ))}
            </section>

            {data.totalPages > 1 && (
              <Pagination
                totalPages={data.totalPages}
                currentPage={page}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ))}
    </>
  );
};
