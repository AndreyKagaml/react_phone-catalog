import { z } from 'zod';

import { PRODUCT_SORT_OPTIONS } from '@/modules/products/constants';
import { Product, ProductPage, productSchema } from '@/modules/products/schema';
import { ProductQueryParams } from '@/modules/products/types';
import { paginate } from '@/shared/utils';

import productsJson from '../../../public/api/products.json';

export const getProducts = async (
  params: ProductQueryParams,
): Promise<ProductPage> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const { page, perPage, sort, category } = params;
  const sortBy = PRODUCT_SORT_OPTIONS.find(option => option.key === sort);

  const products = z
    .array(productSchema)
    .parse(productsJson)
    .filter(product => product.category === category)
    .sort(sortBy?.compare);

  const { items, total, totalPages } = paginate<Product>(
    products,
    page,
    perPage,
  );

  return {
    items,
    total,
    page,
    perPage,
    totalPages,
  };
};
