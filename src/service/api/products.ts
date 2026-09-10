import { z } from 'zod';

import { PRODUCT_SORT_OPTIONS } from '@/modules/products/constants';
import {
  Device,
  ProductItem,
  ProductPage,
  accessorySchema,
  phoneSchema,
  productItemSchema,
  tabletSchema,
} from '@/modules/products/schema';
import { ProductCategory, ProductQueryParams } from '@/modules/products/types';
import { paginate } from '@/shared/utils';

import accessoriesJson from '../../../public/api/accessories.json';
import phonesJson from '../../../public/api/phones.json';
import productsJson from '../../../public/api/products.json';
import tabletsJson from '../../../public/api/tablets.json';

export const products = z.array(productItemSchema).parse(productsJson);
export const phones = z.array(phoneSchema).parse(phonesJson);
export const tablets = z.array(tabletSchema).parse(tabletsJson);
export const accessories = z.array(accessorySchema).parse(accessoriesJson);

export const productsStore: Record<ProductCategory, Device[]> = {
  phones,
  tablets,
  accessories,
};

export const getProducts = async (
  params: ProductQueryParams,
): Promise<ProductPage> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const { page, perPage, sort, category } = params;
  const sortBy = PRODUCT_SORT_OPTIONS.find(option => option.key === sort);

  const productsList = products
    .filter(product => product.category === category)
    .sort(sortBy?.compare);

  const { items, total, totalPages } = paginate<ProductItem>(
    productsList,
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

export const getProductById = async (id: string): Promise<Device> => {
  await new Promise(resolve => setTimeout(resolve, 500));

  const category = products.find(item => item.itemId === id)?.category;

  if (!category) {
    return Promise.reject(new Error('Product not found'));
  }

  const product = productsStore[category].find(item => item.id === id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};
