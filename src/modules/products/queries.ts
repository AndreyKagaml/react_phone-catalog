import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { ProductParams } from '@/modules/products/schema';
import { ProductCategory } from '@/modules/products/types';
import { getProducts } from '@/service/api/products';

import { parseProductCatalogParamsFromSearchParams } from './utils';

export const productKeys = {
  all: ['products'],
  list: (params?: ProductParams) => ['products', 'list', params],
  detail: (id: number) => ['products', 'detail', id],
};

export const useProductsQuery = (category: ProductCategory) => {
  const [searchParams] = useSearchParams();
  const params = {
    ...parseProductCatalogParamsFromSearchParams(searchParams),
    category,
  };

  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => getProducts(params),
    placeholderData: keepPreviousData,
  });
};
