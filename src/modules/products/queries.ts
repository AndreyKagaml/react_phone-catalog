import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { ProductListParams } from '@/modules/products/schema';
import { ProductCategory } from '@/modules/products/types';
import { getProductById, getProducts } from '@/service/api/products';

import { parseProductCatalogParamsFromSearchParams } from './utils';

export const productKeys = {
  all: ['products'],
  list: (params?: ProductListParams) => ['products', 'list', params],
  detail: (id: string) => ['products', 'detail', id],
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

export const useProductQuery = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProductById(id),
  });
};
